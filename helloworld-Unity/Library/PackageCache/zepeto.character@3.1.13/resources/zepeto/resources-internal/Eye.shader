Shader "ZEPETO/Eye"
{
	Properties
	{
		[NoScaleOffset]_MainTex("EyeTex", 2D) = "Black" {}
		_ScleraColor ("ScleraColor", color) = (1, 1, 1)  //기본값 수정
		_Depth ("Depth", range(0, 0.15)) = 0  //기본값 수정
		_IrisSize ("EyeSize", range(0.1, 0.65)) = 0.3  //기본값 수정
		_IrisEdge ("EyeEdge", range(0.001, 0.2)) = 0.95  //기본값 수정
		_IrisShadow ("EyeShadow", range(1, 2.5)) = 2.12  //기본값 수정
		_IrisShadowSize ("Eye Shadow Size", range(0, 1)) = 0.7  //기본값 수정
		_IrisShadowEdge ("Eye Shadow Edge", range(0, 1)) = 0.62  //기본값 수정	

		[Space][Space][Space][Space][Space]

		[MaterialToggle(USE_LENS)] _UseLens("With Lens", float) = 0
		
		_LensDepth("Lens Depth", range(0, 0.15)) = 0.05

		[MaterialToggle(BLEND_MULTIPLY)] _Multiply("Lens Multiply", float) = 0
		[MaterialToggle(BLEND_OVERLAY)] _Overlay("Lens Overlay", float) = 0
		[MaterialToggle(BLEND_SCREEN)] _Screen("Lens Screen", float) = 0

		
		[Space][Space][Space][Space][Space]
		[Header(Eye Color Custom Right)]
		_Color ("IrisColor [channel/G]", color) = (1, 1, 1)
		_PupilColorR ("PupilColor [channel/B]", color) = (0, 0, 0)
		_ShadowColorR ("ShadowColor", color) = (0, 0, 0)
		_EdgeColorR ("InnerColor", color) = (0, 0, 0)

		
		[Space][Space][Space][Space][Space]
		[MaterialToggle(ODD_EYE)] _Odd("OddColor", float) = 0


		[Header(Eye Color Custom Left)]
		_IrisColorL ("IrisColor [channel/G]", color) = (1, 1, 1)	
		_PupilColorL ("PupilColor [channel/B]", color) = (0, 0, 0)
		_ShadowColorL ("ShadowColor", color) = (0, 0, 0)
		_EdgeColorL ("InnerColor", color) = (0, 0, 0)	  
				

		[Space][Space][Space][Space][Space]
		[Header(Highlight Custom)]
		_HighlightColorTop ("HighlightColorTop [channel/A]", color) = (1, 1, 1)  //기본값 수정
		_HighlightColorBtm ("HighlightColorBtm [channel/A]", color) = (1, 1, 1)  //기본값 수정
		_HighlightColorBalance("HighlightColorBalance", range(0, 1)) = 0  //기본값 수정


		[Space][Space][Space][Space][Space][Space][Space]
		[Header(Reflection Custom)]
		_RefletionPower ("RefletionPower", range(1.5, 3))= 2  //기본값 수정
		_RefletionColor ("RefletionColor [channel/R]", color) = (1, 1, 1)  //기본값 수정

	

	}
	SubShader{
		Tags { "RenderType" = "Opaque"  "Queue" = "Geometry" }

		Blend Off
		ZWrite on

		CGPROGRAM

		#pragma surface surf Lambert nolightmap nofog noforwardadd noshadow novertexlights
		
		#pragma multi_compile __ BLEND_MULTIPLY BLEND_OVERLAY BLEND_SCREEN
		#pragma multi_compile __ ODD_EYE
		#pragma multi_compile __ USE_LENS
		
		
		#if USE_LENS
		fixed _LensBlend, _LensDepth;
		#endif
		
		sampler2D _MainTex;
		fixed _IrisSize, _IrisEdge, _RefletionPower, _Depth, _HighlightColorBalance;
		fixed _IrisShadowSize, _IrisShadowEdge, _IrisShadow;

		#define _IrisColorR _Color
		float3 _IrisColorR, _IrisColorL, _RefletionColor, _ScleraColor, _PupilColorR, _PupilColorL, _ShadowColorR, _ShadowColorL, _EdgeColorR, _EdgeColorL, _HighlightColorTop, _HighlightColorBtm;

		
		struct Input {
			float2 uv_MainTex;
			float3 viewDir;			
			float3 worldNormal;
			float3 worldRefl; INTERNAL_DATA

		};
	
		void surf (Input IN, inout SurfaceOutput o) {

			
			float2 originalEyeUV = abs(IN.uv_MainTex % 1.0);			// 0~1로 노멀라이징됨
			float2 eyeUV = ((originalEyeUV - 0.5) * (3 - (4* _IrisSize))) + 0.5;

			#if USE_LENS
			eyeUV.x *= 0.5;
			#endif


			float3 H = mul(unity_WorldToObject, normalize(-IN.viewDir * 15 + o.Normal));

			float dist = distance(originalEyeUV, 0.5);
			dist = saturate(1- (dist * 1.9));

		

			float3 refraction = float3(H.y, H.x, H.z) * float3(-dist, -dist, 0) * _Depth;

			float3 EyeTex = tex2D(_MainTex, eyeUV + refraction);	
			
			

			fixed Iris = EyeTex.g;
			fixed irisShadow2 = clamp((1 - originalEyeUV.y) * _IrisShadow, 0, 1.4);
			
			fixed irisSize = (1.0 - _IrisSize);
			float IrisShadowSize = _IrisSize + _IrisShadowSize;					
			
			float iris = smoothstep(irisSize, irisSize + _IrisEdge, dist);
			float irisShadow = smoothstep(IrisShadowSize, IrisShadowSize + _IrisShadowEdge, dist);

			float pupil = EyeTex.b * iris;

			float rim = dot(o.Normal, IN.viewDir);



			float3 cR = (Iris * _IrisColorR * iris * pow(irisShadow2, 4) * irisShadow);			
			float3 ShadowColorR = (1 - irisShadow2) * irisShadow * _ShadowColorR * iris;			
			float3 EdgeColorR = (1 - irisShadow) * _EdgeColorR * iris;			
			cR = (cR * (rim * 0.5 + 0.5) + ShadowColorR + EdgeColorR) * (1.0 - pupil) + (pupil * _PupilColorR);




			float3 c = cR;
			#if ODD_EYE						

			if(IN.uv_MainTex.y < 0) {
				float3 cL = (Iris * _IrisColorL * iris * pow(irisShadow2, 4) * irisShadow);			
				float3 ShadowColorL = (1 - irisShadow2) * irisShadow * _ShadowColorL * iris;
				float3 EdgeColorL = (1 - irisShadow) * _EdgeColorL * iris;
				cL = (cL * (rim * 0.5 + 0.5) + ShadowColorL + EdgeColorL) * (1.0 - pupil) + (pupil * _PupilColorL);
				c = cL;
			}

			#endif

			c += ((1.0 - iris) * _ScleraColor);



			#if USE_LENS

			// -- LENS START

			float3 refraction2 = float3(H.y, H.x, H.z) * float3(-dist, -dist, 0) * _LensDepth;
			float2 lensUV = eyeUV;
			lensUV.x += 0.5;
			float4 d = (tex2D(_MainTex, lensUV + refraction2) * iris);
	
			float4 e = lerp(float4(0.5, 0.5, 0.5, 1), d, d.a);
			fixed dgray = saturate((e.r + e.g + e.b) / 3);
				
			#if BLEND_MULTIPLY
			o.Albedo = c * (d * d.a + (1 - d.a));		
			#elif BLEND_OVERLAY
			o.Albedo = lerp(saturate(1 - ((1 - c) * (1 - e) * 2)), saturate(c * e * 2), dgray);
			#elif BLEND_SCREEN
			o.Albedo = c + (d * d.a) - (c * (d * d.a)) / 1;
			#else


			o.Albedo = float4(c * (1.0 - d.a) + d.rgb * d.a,1.0 );
			
			#endif

			// -- LENS END


			#else
			
			o.Albedo = c;

			#endif

			



		
			
			float2 highlightUV = eyeUV + refraction * 0.5;
			
			#if USE_LENS					
			highlightUV.x = highlightUV.x % 0.5;
			if(highlightUV.x < 0) highlightUV.x = 0.5 + highlightUV.x;
			#endif

	
			float4 Highlight = tex2D(_MainTex, highlightUV);
			fixed HighlightColorBalance = smoothstep(_HighlightColorBalance, _HighlightColorBalance +0.1, originalEyeUV.y);
			float3 balancedColor = lerp(_HighlightColorBtm, _HighlightColorTop, HighlightColorBalance);			


			Highlight = float4( (Highlight.a * iris * rim * balancedColor), 1.0);			
			float2 reflectionUV = WorldReflectionVector(IN, o.Normal) * 0.7 + 0.3 + dist * 0.05;
			
			
			#if USE_LENS
			reflectionUV = reflectionUV % 1.0;			// 0~1로 노멀라이징됨
			reflectionUV.x *= 0.5;			
			reflectionUV.x = reflectionUV.x % 0.5;
			if(reflectionUV.x < 0) reflectionUV.x = 0.5 + reflectionUV.x;
			#endif

			
			float4 relectionTex2D = tex2D(_MainTex, reflectionUV);
			float3 Reflection = pow(relectionTex2D.r * (pow(rim, 3) + 0.4) * (1.5 - (_RefletionPower * 0.5)) * _RefletionColor, _RefletionPower);

			
			
			o.Emission = Reflection + Highlight;

		}


		ENDCG
	}
	FallBack Off
}
