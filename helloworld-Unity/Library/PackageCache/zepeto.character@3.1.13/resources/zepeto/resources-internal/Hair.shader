Shader "ZEPETO/Hair"
{
	Properties 
	{
		_MainTex ("Diffuse (RGB) Alpha (A)", 2D) = "white" {}
		_Color ("Main Color", Color) = (1,1,1,1)
		_Cutoff ("Alpha Cut-Off", range(0, 1)) = 0.95
		_NormalTex ("Normal Map", 2D) = "bump" {}
		_NormalPower ("NormalPower", range(0, 5)) = 0.75
		_SpecularTex ("Specular (R) Spec Shift (G) Spec Mask (B)", 2D) = "gray" {}
		_SpecularMultiplier ("Specular Multiplier", float) = 10.0
		
		_SpecularColor ("Specular Color", Color) = (1,1,1,1)
		_SpecularMultiplier2 ("Secondary Specular Multiplier", float) = 10.0
		_SpecularColor2 ("Secondary Specular Color", Color) = (1,1,1,1)
		_PrimaryShift ( "Specular Primary Shift", float) = -0.01
		_SecondaryShift ( "Specular Secondary Shift", float) = -0.28

		_RimColor ("Rim Color", Color) = (0,0,0,0)
		_RimPower ("Rim Power", Range(1,3)) = 1.292


		_TintColor ("Tint Color", Color) = (0,0,0)
		_TintPower ("Tint Power", Range(0,1)) = 0.292

		[HideInInspector]_LogLut ("_LogLut", 2D)  = "white" {}		
	


	}

	SubShader
	{ 
		Tags { "RenderType" = "Opaque"  "Queue" = "Geometry+1"  "RequireOption" = "SoftVegetation" }

		Blend Off
		ZWrite on

		CGPROGRAM
		#pragma surface surf Hair vertex:vert finalcolor:tonemapping
		#pragma target 3.0
		
		#include "./Hair.cginc"

		void surf (Input IN, inout SurfaceOutputHair o)
		{
			surf_base(IN, o);
			if(o.Alpha < _Cutoff) {   
				clip(-1.0); 
			}
		}

		ENDCG
		

	}
	FallBack "Mobile/VertexLit"
}