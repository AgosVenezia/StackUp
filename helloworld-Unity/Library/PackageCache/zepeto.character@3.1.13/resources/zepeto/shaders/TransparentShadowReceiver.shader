// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

Shader "ZEPETO/TransparentShadowReceiver" 
{ 
 
	Properties { 
		_Color ("Main Color", Color) = (1,1,1,1)
	} 
 
	 
	SubShader { 
		Tags {	"Queue"="AlphaTest" 	"IgnoreProjector"="True" 	"RenderType"="Transparent"	} 
		CGPROGRAM
				#pragma surface surf BlinnPhong alpha fullforwardshadows approxview		 
				struct Input {
					float temp;
				};		 
				void surf (Input IN, inout SurfaceOutput o) { }
		ENDCG
	 


		// Shadow Pass : Adding the shadows (from Directional Light)
		// by blending the light attenuation
		Pass {
			Blend SrcAlpha OneMinusSrcAlpha 
			Name "ShadowPass"
			Tags {"LightMode" = "ForwardBase"}
			CGPROGRAM 


				#pragma vertex vert
				#pragma fragment frag
				#pragma multi_compile_fwdbase
				#pragma fragmentoption ARB_fog_exp2
				#pragma fragmentoption ARB_precision_hint_fastest
				#include "UnityCG.cginc"
				#include "AutoLight.cginc"

				struct v2f { 
					float4 pos : SV_POSITION;
					LIGHTING_COORDS(3,4)
					float3	lightDir : NORMAL;
				};


				float4 _Color;

				v2f vert (appdata_full v)
				{
					v2f o;

					o.pos = UnityObjectToClipPos (v.vertex);
					o.lightDir = ObjSpaceLightDir( v.vertex );
					TRANSFER_VERTEX_TO_FRAGMENT(o);
					return o;
				}

				float4 frag (v2f IN) : COLOR
				{
					float atten = LIGHT_ATTENUATION(IN);

					half4 c;
					c.rgb =  _Color.rgb;
					c.a = (1-atten) * _Color.a; 
					return c;
				}
			ENDCG
		}
	 
	 
	}
	 
	FallBack "Transparent/Cutout/VertexLit"
}