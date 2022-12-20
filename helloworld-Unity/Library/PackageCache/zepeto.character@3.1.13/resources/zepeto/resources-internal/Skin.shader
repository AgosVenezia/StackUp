// Zepeto Skin Shader based on Pre-Integrated Skin Shader for Unity3D
Shader "ZEPETO/Skin" {
	Properties {
				
		[NoScaleOffset]_MainTex ("Diffuse Map (RGB) - Preview only", 2D) = "white" {}	
		[NoScaleOffset]_SkinTex ("Skin Tone Map (RGB)", 2D) = "white" {}			
		[NoScaleOffset]_DetailTex ("Skin Detail Map (RGB)", 2D) = "white" {}				
		[NoScaleOffset]_DepthMap ("Depth / Thickness Map (R)", 2D) = "white" {}
		[NoScaleOffset]_MaskTex ("Mask (R)", 2D) = "white" {}		


		_SpecEnvMapIntensity ("Environment Intensity", Range(0,1)) = 0.259
		
		_SpecIntensity ("SpecIntensity", Range(0,2)) = 0.255
		_SpecGlossiness ("Glossiness", Range(0,2)) = 0.473
		
		[NoScaleOffset]_SpecularMap ("Intensity Map (RGB)", 2D) = "white" {}


		[HideInInspector]_LookupDirect("LookupDirect", 2D) = "white" {}
		[HideInInspector]_LogLut ("_LogLut", 2D)  = "white" {}		
		
	}

	Category {
		CGINCLUDE
			// quality settings common for all sub-shaders
			#define PSS_ENABLE_DIRECTLIGHT 1
			#define PSS_ENABLE_DIFFUSE 1
			#define PSS_ENABLE_SPECULAR 1

			#define PSS_REFLECTION_PROBES_ON 1
						
			

			sampler2D _MainTex;
			float4 _MainTex_ST;
			

			sampler2D _DepthMap;


			sampler2D _SpecularMap;
			float4 _SpecularMap_TexelSize;

			sampler2D _MaskTex;



			float4 _MainTex_TexelSize;


			float _SpecIntensity;
			float _SpecGlossiness;			
			float _SpecEnvMapIntensity;




			#define PSS_USEMAINTEXUVTRANSFORM 1
			#define PSS_V2F pss_v2f_standard
			#define PSS_VIN appdata_tan

			#include "./SkinShaderCommon.cginc"



			struct pss_v2f_standard {
				PSS_COORDS(0,1,2,3,4,5)
				float4 texMipCnts : TEXCOORD6;
			};
			
			void pss_vert_post(PSS_VIN i, inout PSS_V2F o) {
				o.texMipCnts.x = 0.0;
				o.texMipCnts.y = CALC_MIP_COUNT(_SpecularMap);
				o.texMipCnts.z = 1.0;
				o.texMipCnts.w = 1.0;
			}

			inline void pss_surf(PSS_V2F i, inout SkinSurfaceOutput o, float blur) {
				float2 uv = i.uv.xy;
					
				if(tex2D(_MaskTex, uv).r == 0.0) clip(-1);

				float bumpinesBiasMin = 0;
				float bumpinesBiasMax = 1;

 				o.Albedo = PSS_INPUTGAMMACORRECTION(tex2D(_MainTex, uv));
				o.Normal = fixed3(0,0,1);

				float depth = tex2D(_DepthMap, uv).r; // actually inverse of thickness/depth or curvature of the surface
				o.Scattering = saturate(depth);

				// Sample the spec&gloss with different blur levels as well to reflect the fact that light coming from an area varying in size affects the fragment.
				// This used both for "bumpiness" of specular itself and energy conservation, so it affects diffuse as well.
				o.SpecularIntensity = saturate(PSS_SAMPLE_BLURRED_IMPL(_SpecularMap, uv, lerp(bumpinesBiasMax, bumpinesBiasMin, blur), i.texMipCnts.y).rgb * _SpecIntensity);
				o.SpecularRoughness = max(0.02, 1.0- _SpecGlossiness);							
				o.SpecularEnvMapIntensity = _SpecEnvMapIntensity;


				o.Emission = 0;
			}
		ENDCG
		
	
		SubShader {
			Tags { "RenderType"="Opaque" }
			
			
			Pass {
				Name "FORWARD"
				Tags { "LightMode"="ForwardBase" }
				Blend Off
				ZWrite On
				ZTest LEqual 
				
				CGPROGRAM

					
					#pragma vertex pss_vert
		            #pragma fragment pss_frag
					
					#pragma multi_compile_fwdbase nolightmap nodirlightmap
					#pragma multi_compile_fog

					#pragma skip_variants DYNAMICLIGHTMAP_ON LIGHTMAP_ON
					#ifndef UNITY_PASS_FORWARDBASE
					#define UNITY_PASS_FORWARDBASE
					#endif

					#include "./SkinShaderCore.cginc"
				ENDCG
			}
			
			Pass {
				Name "FORWARD"
				Tags { "LightMode" = "ForwardAdd" }
				ZWrite Off
				ZTest LEqual 
				Blend One One
				
				CGPROGRAM
					#pragma target 2.5

					#pragma exclude_renderers ps3 ps4 xbox360 xboxone wiiu


					#pragma exclude_renderers flash
	
					#pragma glsl
					
					#pragma vertex pss_vert
		            #pragma fragment pss_frag

															
					#pragma multi_compile_fwdadd_fullshadows nolightmap nodirlightmap
					#pragma multi_compile_fog

					#pragma skip_variants DYNAMICLIGHTMAP_ON LIGHTMAP_ON
	
					#ifndef UNITY_PASS_FORWARDBASE
					#define UNITY_PASS_FORWARDBASE
					#endif

					#if SHADER_TARGET <= 20 && defined(UNITY_PASS_FORWARDADD) && (defined(SHADER_API_D3D11_9X) || defined(SHADER_API_D3D9))
						#undef PSS_ENABLE_SPECULAR
					#endif

					#include "./SkinShaderCore.cginc"
				ENDCG
			}
		} // SubShader-SM2.5

	

	} // Category
	

	
	FallBack "VertexLit"
}