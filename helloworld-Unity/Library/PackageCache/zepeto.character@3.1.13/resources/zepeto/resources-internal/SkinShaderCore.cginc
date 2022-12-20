// Upgrade NOTE: replaced 'UNITY_PASS_TEXCUBE(unity_SpecCube1)' with 'UNITY_PASS_TEXCUBE_SAMPLER(unity_SpecCube1,unity_SpecCube0)'

#ifndef DEFINED_PREINTEGRATEDSKINSHADER_BASE
#define DEFINED_PREINTEGRATEDSKINSHADER_BASE

#include "SkinShaderCommon.cginc"

#include "ToneMapping.cginc"

sampler2D _LookupDirect;

static const half4 _PSSProfileMedium_weighths1_var1 = half4(0.004646078, 0.252996, 0.9967722, 0.02031626);
static const half4 _PSSProfileMedium_weighths2_var2 = half4(0.004646078, 0.6108501, 0.001613822, 0.075);
static const half4 _PSSProfileMedium_weighths3_var3 = half4(0.9907079, 0.1361539, 0.001613822, 0.7494184);
static const half3 _PSSProfileMedium_transl123 = half3(-71.01184, -19.23593, -1.925086);
static const half3 _PSSProfileMedium_sqrtvar123 = half3(0.1425351, 0.2738613, 0.8656895);

inline fixed4 PSS_SAMPLE_BLURRED_IMPL(sampler2D tex, float2 uv, float blur, int mipLevels) {
	return tex2D(tex, uv);
}

PSS_V2F pss_vert(PSS_VIN v) {
	PSS_V2F o;

	UNITY_INITIALIZE_OUTPUT(PSS_V2F,o);

	o.pos = UnityObjectToClipPos(v.vertex.xyz);

	float2 uv = v.texcoord;

#if defined(PSS_USEMAINTEXUVTRANSFORM)
	uv = TRANSFORM_TEX(uv, _MainTex).xy;
#endif
	o.uv.xy = uv;

	float3 worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
	float3 normalWorld = UnityObjectToWorldNormal(v.normal);
	float4 tangentWorld = float4(UnityObjectToWorldDir(v.tangent.xyz), v.tangent.w);
	float3 binormal = cross(normalWorld, tangentWorld.xyz) * tangentWorld.w;
	float3x3 tangentToWorld = float3x3(tangentWorld.xyz, binormal, normalWorld);
	o.tangentToWorldAndWPos[0].xyz = tangentToWorld[0];
	o.tangentToWorldAndWPos[1].xyz = tangentToWorld[1];
	o.tangentToWorldAndWPos[2].xyz = tangentToWorld[2];

	o.tangentToWorldAndWPos[0].w = worldPos.x;
	o.tangentToWorldAndWPos[1].w = worldPos.y;
	o.tangentToWorldAndWPos[2].w = worldPos.z;

	TRANSFER_SHADOW(o);

	#if defined(FOG_LINEAR) || defined(FOG_EXP) || defined(FOG_EXP2)
		#if (SHADER_TARGET < 30) || defined(SHADER_API_MOBILE)
		
			UNITY_CALC_FOG_FACTOR(o.pos.z);
			o.uv.z = unityFogFactor;
		#else
		
			o.uv.z = o.pos.z;
		#endif
	#else
		o.uv.z = 0.0;
	#endif

	o.uv.w = 0.0;
	o.ambient.rgb = 0;
 	#if defined(UNITY_PASS_FORWARDBASE)  && defined(PSS_ENABLE_DIFFUSE)
 		o.ambient.rgb += ShadeSH9(float4(normalWorld.xyz, 1.0));
	 	o.ambient.a = 0.0;
 	#endif
 	
 	pss_vert_post(v, o);

	return o;
}

// taken from Unity's standard shader
half3x3 ExtractTangentToWorldPerPixel(half4 tan2world[3]) {
	half3 t = tan2world[0].xyz;
	half3 b = tan2world[1].xyz;
	half3 n = tan2world[2].xyz;

#if defined(UNITY_TANGENT_ORTHONORMALIZE)
	#if (SHADER_TARGET >= 25)
		n = normalize(n);
	#endif

	t = normalize (t - n * dot(t, n));
	half3 newB = cross(n, t);
	b = newB * sign (dot (newB, b));
#endif //UNITY_TANGENT_ORTHONORMALIZE

	return half3x3(t, b, n);
}

half3 PSSTangentToWorldNormal(half3x3 tspace, half3 tangentSpaceNormal) {
	half3 worldSpaceNormal = mul(tangentSpaceNormal, tspace);
#if (SHADER_TARGET >= 25)
	worldSpaceNormal = normalize(worldSpaceNormal);
#endif //(SHADER_TARGET >= 25)
	return worldSpaceNormal;
}

inline half3 DirectSpecularFunction(half3 N, half3 V, half3 L, half m, half3 F0) {
	float3 H = normalize(V + L);
	float NdotL = dot(N, L);
	float LdotH = dot(L, H);
	float NdotH = dot(N, H);

	float4 lookupCoord;
	lookupCoord.x = LdotH;
	lookupCoord.y = NdotH;
	lookupCoord.z = 0.0;
	lookupCoord.w = m * 6.0;
	lookupCoord.x = sqrt(lookupCoord.x);
	lookupCoord.y = Pow3(lookupCoord.y);

	half2 specLookup = tex2Dlod(_LookupDirect, lookupCoord).yz;
	specLookup *= 16.0;
	specLookup = specLookup*specLookup;

	return max(0.0, NdotL * (specLookup.x*F0 + specLookup.y));
}

fixed4 pss_frag(PSS_V2F i) : SV_Target {
	float3 worldPos = float3(i.tangentToWorldAndWPos[0].w, i.tangentToWorldAndWPos[1].w, i.tangentToWorldAndWPos[2].w);

	half3 worldSpaceViewDir = normalize(UnityWorldSpaceViewDir(worldPos));
	half3 worldSpaceLightDir = UnityWorldSpaceLightDir(worldPos);

#if !defined(USING_DIRECTIONAL_LIGHT)
	worldSpaceLightDir = normalize(worldSpaceLightDir);
#endif

	half3x3 tspace = ExtractTangentToWorldPerPixel(i.tangentToWorldAndWPos);
	half4 outputColor = half4(0.0, 0.0, 0.0, 1.0);
	half3 directLight = 0;

	fixed lightShadow = SHADOW_ATTENUATION(i);
	half shadowStrength = _LightShadowData.x;
	fixed penumbraNonscatteredDiffuse = 1.0;

#if defined(DIRECTIONAL) || defined(DIRECTIONAL_COOKIE)
	penumbraNonscatteredDiffuse *= lightShadow;

#if defined(DIRECTIONAL_COOKIE)
	unityShadowCoord2 lightCoord = mul(unity_WorldToLight, unityShadowCoord4(worldPos, 1)).xy;
	fixed lightCookie = tex2D(_LightTexture0, lightCoord).w;
	penumbraNonscatteredDiffuse *= lightCookie;
#endif //defined(DIRECTIONAL_COOKIE)
#elif defined(SPOT)
	unityShadowCoord4 lightCoord = mul(unity_WorldToLight, unityShadowCoord4(worldPos, 1));

	fixed lightAtten = (lightCoord.z > 0) * UnitySpotAttenuate(lightCoord.xyz);
	fixed lightCookie = UnitySpotCookie(lightCoord);

	penumbraNonscatteredDiffuse *= lightShadow*lightCookie;
	penumbraNonscatteredDiffuse *= lightAtten;
#elif defined(POINT_COOKIE)
	unityShadowCoord3 lightCoord = mul(unity_WorldToLight, unityShadowCoord4(worldPos, 1)).xyz;

	fixed lightAtten = tex2D(_LightTextureB0, dot(lightCoord,lightCoord).rr).UNITY_ATTEN_CHANNEL;
	fixed lightCookie = texCUBE(_LightTexture0, lightCoord).w;

	penumbraNonscatteredDiffuse = lightAtten*lightCookie*lightShadow;
#elif defined(POINT)
	unityShadowCoord3 lightCoord = mul(unity_WorldToLight, unityShadowCoord4(worldPos, 1)).xyz;
	fixed lightAtten = tex2D(_LightTexture0, dot(lightCoord,lightCoord).rr).UNITY_ATTEN_CHANNEL;
	penumbraNonscatteredDiffuse = lightAtten*lightShadow;
#endif //defined(DIRECTIONAL) || defined(DIRECTIONAL_COOKIE)

#if defined(HACK_LIGHTATTEN_DISCARD) || !defined(PSS_ENABLE_DIRECTLIGHT)
	penumbraNonscatteredDiffuse = 1.0;
#endif

	SkinSurfaceOutput surf;
	UNITY_INITIALIZE_OUTPUT(SkinSurfaceOutput,surf);

    #if !defined(PROFILE_PASS) || PROFILE_PASS == 0
    {
		pss_surf(i, surf, 0.0);

		half3 worldNormal = PSSTangentToWorldNormal(tspace, surf.Normal);
		half NdotE = dot(worldNormal, worldSpaceViewDir);
		#ifdef PSS_ENABLE_DIRECTLIGHT
			half NdotL = dot(worldNormal,worldSpaceLightDir);
		#endif

		#if defined(UNITY_PASS_FORWARDBASE)
		    outputColor.rgb += surf.Emission;
		#endif

		#if defined(PSS_ENABLE_SPECULAR)
			half specularOcclusion = 1.0;			
		#endif

		#if defined(PSS_ENABLE_SPECULAR) && defined(PSS_ENABLE_DIRECTLIGHT) 
		{
			float3 V = normalize(worldSpaceViewDir);
			float3 H = normalize(worldSpaceViewDir+worldSpaceLightDir);
			float LdotH = dot(worldSpaceLightDir,H);
			float NdotH = dot(worldNormal,H);

			half3 directSpecular = 0.0;
	    	half m = surf.SpecularRoughness;
	    	half3 F0 = surf.SpecularIntensity;

	    	half3 specularDirect = DirectSpecularFunction(worldNormal, worldSpaceViewDir, worldSpaceLightDir, m, F0);
			directLight += specularDirect * (penumbraNonscatteredDiffuse * specularOcclusion);
		}
		#endif //defined(PSS_ENABLE_SPECULAR) && defined(PSS_ENABLE_DIRECTLIGHT)
    }
	#endif //!defined(PROFILE_PASS) || PROFILE_PASS == 0

#if defined(PROFILE_PASS)
	const int profileInd = PROFILE_PASS;
#else
    const int profileElementCnt = 3;
	half4 profileWeights[3];
	profileWeights[0] = _PSSProfileMedium_weighths1_var1;
	profileWeights[1] = _PSSProfileMedium_weighths2_var2;
	profileWeights[2] = _PSSProfileMedium_weighths3_var3;
	half profileVarianceSqrt[3];
	profileVarianceSqrt[0] = _PSSProfileMedium_sqrtvar123.x;
	profileVarianceSqrt[1] = _PSSProfileMedium_sqrtvar123.y;
	profileVarianceSqrt[2] = _PSSProfileMedium_sqrtvar123.z;

	PSS_UNROLL(6)
	for (int profileInd=0; profileInd<profileElementCnt; profileInd++)
#endif //defined(PROFILE_PASS)
	{
		half3 weights = profileWeights[profileInd].xyz;
		half variance = profileWeights[profileInd].w;

		pss_surf(i, surf, variance);

		weights *= surf.Albedo;

        half3 F0 = surf.SpecularIntensity;
		half3 diffuseEnergy = (1.0 - F0);

	    #if defined(UNITY_PASS_FORWARDBASE) && defined(PSS_ENABLE_DIFFUSE)
		{
			half3 ambient = i.ambient.rgb;
	 		outputColor.rgb += diffuseEnergy * weights * ambient;
		}
		#endif //defined(UNITY_PASS_FORWARDBASE) && defined(PSS_ENABLE_DIFFUSE)
		#if defined(PSS_ENABLE_DIRECTLIGHT) && defined(PSS_ENABLE_DIFFUSE)
		{
		    half varianceSqrt = profileVarianceSqrt[profileInd];
		    half3 worldNormal = PSSTangentToWorldNormal(tspace, surf.Normal);
		    float NdotL = dot(worldNormal, worldSpaceLightDir);
		    float diffLookup = (0.5 + 0.5 * NdotL);
	    	half scattering = surf.Scattering*varianceSqrt;

			half diffuseDirect = tex2Dlod(_LookupDirect, float4(diffLookup, scattering, 0, 0)).r;
			directLight += (diffuseEnergy * weights) * (diffuseDirect * penumbraNonscatteredDiffuse);
		}
		#endif //defined(PSS_ENABLE_DIRECTLIGHT)
	}

#if defined(PSS_ENABLE_DIRECTLIGHT)
	outputColor.rgb += directLight * _LightColor0.rgb;
#endif

	UNITY_OPAQUE_ALPHA(outputColor.a);

	outputColor.rgb = PSS_OUTPUTGAMMACORRECTION(outputColor.rgb);

#if defined(UNITY_PASS_FORWARDADD) || defined(HACK_FOG_WITHOUT_COLOR)
	UNITY_APPLY_FOG_COLOR(i.uv.z, outputColor.rgb, fixed4(0,0,0,0));
#else
	UNITY_APPLY_FOG_COLOR(i.uv.z, outputColor.rgb, unity_FogColor);
#endif

    return ApplyColorGrading(outputColor);
}
#endif //DEFINED_PREINTEGRATEDSKINSHADER_BASE
