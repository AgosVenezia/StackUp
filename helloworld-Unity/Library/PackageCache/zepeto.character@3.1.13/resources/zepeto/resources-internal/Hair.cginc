#ifndef __HAIR__
#define __HAIR__


    sampler2D _MainTex, _SpecularTex, _NormalTex;
    float _SpecularMultiplier, _SpecularMultiplier2, _PrimaryShift, _SecondaryShift, _Cutoff, _RimPower, _TintPower, _NormalPower;
    fixed4 _SpecularColor, _Color, _SpecularColor2;

    // auto calculate
    fixed4 _RimColor, _TintColor;

    #include "ToneMapping.cginc"
    

    struct SurfaceOutputHair 
    {
        fixed3 Albedo;
        fixed3 Normal;
        fixed3 Emission;
        half Specular;
        fixed SpecShift;
        fixed Alpha;
        fixed SpecMask;
        half3 tangent_input; 
    };

    struct Input
    {
        float2 uv_MainTex;
        float2 uv_SpecularTex;
        half3 tangent_input;
        float3 viewDir;
    };


    void vert(inout appdata_full i, out Input o)
    { 
        UNITY_INITIALIZE_OUTPUT(Input, o); 
        o.tangent_input = i.tangent.xyz;
    }


    inline half3 ShiftTangent ( half3 T, half3 N, float shift)
    {
        half3 shiftedT = T+ shift * N;
        return normalize( shiftedT);
    }

    float StrandSpecular ( half3 T, half3 V, half3 L, float exponent)
    {
        half3 H = normalize ( L + V );
        float dotTH = dot ( T, H );
        float sinTH = sqrt ( 1 - dotTH * dotTH);
        float dirAtten = smoothstep( -1, 0, dotTH );
        return dirAtten * pow(sinTH, exponent);
    }

    float3 rgb2hsv(float3 c) {
        float4 K = float4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        float4 p = lerp(float4(c.bg, K.wz), float4(c.gb, K.xy), step(c.b, c.g));
        float4 q = lerp(float4(p.xyw, c.r), float4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return float3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    float3 hsv2rgb(float3 c) {
        c = float3(c.x, clamp(c.yz, 0.0, 1.0));
        float4 K = float4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        float3 p = abs(frac(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * lerp(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    inline fixed4 GetSafeColor() {

        fixed4 _SafeColor = _Color;
        
        _SafeColor.rgb = rgb2hsv(_SafeColor.rgb);      
        _SafeColor.z =  max( min(_SafeColor.z,1.0), 0.2);
        _SafeColor.rgb = hsv2rgb(_SafeColor.rgb);
        
        return _SafeColor;

    }

    void surf_base (Input IN, inout SurfaceOutputHair o)
    {
        fixed4 _SafeColor = GetSafeColor();

        fixed4 albedo = tex2D(_MainTex, IN.uv_MainTex);
        o.Albedo = (albedo.rgb * _SafeColor.rgb);
        o.Alpha = albedo.a;
        fixed3 spec = tex2D(_SpecularTex, IN.uv_SpecularTex).rgb;
        o.Specular = spec.r;
        o.SpecShift = spec.g;
        o.SpecMask = spec.b;  
        o.tangent_input = IN.tangent_input ;
        half rim = 1.0 - abs(dot (IN.viewDir, o.Normal));
   
        o.Emission = pow(
            
            (2*(
                ((_RimColor.rgb * pow (rim, _RimPower)) * pow(spec.r,0.5)) - 
                (((_RimColor.rgb * pow (rim, _RimPower)) * pow(spec.r,0.5)) * _TintPower) + 
                (_TintColor * _TintPower)

                )), 3) * 0.5;


        fixed3 n = UnpackNormal( tex2D(_NormalTex, IN.uv_SpecularTex));
        o.Normal = float3(n.x * _NormalPower, n.y * _NormalPower, n.z);

    
    }

    inline fixed4 LightingHair (SurfaceOutputHair s, fixed3 lightDir, fixed3 viewDir, fixed atten)
    {
        fixed4 _SafeColor = GetSafeColor();
        float NdotL = saturate(dot(s.Normal, lightDir));

        float shiftTex = s.SpecShift - .5;
        half3 T = -normalize(cross( s.Normal, s.tangent_input));

        half3 t1 = ShiftTangent ( T, s.Normal, _PrimaryShift + shiftTex );
        half3 t2 = ShiftTangent ( T, s.Normal, _SecondaryShift + shiftTex );

        half3 diff = saturate ( lerp ( .25, 1, NdotL));
        diff = diff * _SafeColor ;

        half3 spec =  _SpecularColor * StrandSpecular(t1, viewDir, lightDir, _SpecularMultiplier);

        spec = spec +  _SpecularColor2 * s.SpecMask * StrandSpecular ( t2, viewDir, lightDir, _SpecularMultiplier2) ;

        fixed4 c;
        c.rgb = ((diff + spec) * s.Albedo * atten * 2 * _LightColor0.rgb * NdotL);

        c.a = s.Alpha; 

        return c;
    }

    void tonemapping (Input IN, SurfaceOutputHair o, inout fixed4 color) {
        color = ApplyColorGrading(color);
    }
#endif // __HAIR__
