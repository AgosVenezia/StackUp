// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

Shader "ZEPETO/TransparentTextureMixer" {
    Properties
    {

        _MainTex ("Main Texture", 2D) = "white" {}
        _BackgroundTex ("Background Texture", 2D) = "white" {}
        _Color ("Main Color", Color) = (1,1,1,1)
        _Alpha ("Alpha", Range(0,1)) = 1
        _BlendMode("Blend mode", Int) = 0

    }

    SubShader
    {
        Tags
        {
            "Queue" = "Transparent"
            "IgnoreProjector"="True" 
            "RenderType" = "Transparent"
            "PreviewType"="Plane"
            "CanUseSpriteAtlas"="True"
        }

        Cull Off
        Lighting Off
        ZWrite Off

        Pass
        {
        	Blend SrcAlpha OneMinusSrcAlpha
        	
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frag
 
            #include "UnityCG.cginc"
            #include "BlendModes.cginc"

            struct appdata_t
            {
                float4 vertex : POSITION;       
                float2 texcoord : TEXCOORD0;

            };

            struct v2f
            {
                float4 vertex : SV_POSITION;     
                half2 texcoord : TEXCOORD0;
                float4 grabPos : TEXCOORD1;
            };

            float _Alpha;
            fixed4 _Color;
            int _BlendMode;
            float4 _MainTex_ST;

            v2f vert(appdata_t IN)
            {
                v2f o;

       			o.vertex = IN.vertex;
       			o.grabPos = IN.vertex;
       			
				#if UNITY_UV_STARTS_AT_TOP
					o.vertex.y = -o.vertex.y;
					o.grabPos.y = -o.grabPos.y;
				#endif
				
				
                o.grabPos = ComputeGrabScreenPos(o.grabPos);
                o.texcoord = TRANSFORM_TEX(IN.texcoord, _MainTex);
                
                return o;
            }

            sampler2D _MainTex;
            sampler2D _BackgroundTex;

            fixed4 frag(v2f IN) : SV_Target
            {
                half4 color = tex2D(_MainTex, IN.texcoord);
                color.rgb = color.rgb * _Color.rgb;

                if(_BlendMode == 0) {
                	color.a = _Alpha * color.a;
                	return color;     
                }

                fixed4 backgroundTex = tex2Dproj(_BackgroundTex, IN.grabPos);
                fixed4 finalColor = fixed4(0,0,0,0);
                if(_BlendMode == ADD) {
                	finalColor = Add(backgroundTex, color);
                } else if(_BlendMode == DARKEN) {
                	finalColor = Darken(backgroundTex, color);
                } else if(_BlendMode == MULTIPLY) {
                	finalColor = Multiply(backgroundTex, color);
                } else if(_BlendMode == COLORBURN) {
                	finalColor = ColorBurn(backgroundTex, color);
                } else if(_BlendMode == LINEARBURN) {
                	finalColor = LinearBurn(backgroundTex, color);
                } else if(_BlendMode == SCREEN) {
                	finalColor = Screen(backgroundTex, color);
                } else if(_BlendMode == COLORDODGE) {
                	finalColor = ColorDodge(backgroundTex, color);
                } else if(_BlendMode == LINEARDODGE) {
                	finalColor = LinearDodge(backgroundTex, color);
                } else if(_BlendMode == OVERLAY) {
                	finalColor = Overlay(backgroundTex, color);
                } else if(_BlendMode == SOFTLIGHT) {
                	finalColor = SoftLight(backgroundTex, color);
                } else if(_BlendMode == HARDLIGHT) {
                	finalColor = HardLight(backgroundTex, color);
                } else if(_BlendMode == VIVIDLIGHT) {
                	finalColor = VividLight(backgroundTex, color);
                } else if(_BlendMode == LINEARLIGHT) {
                	finalColor = LinearLight(backgroundTex, color);
                } else if(_BlendMode == PINLIGHT) {
                	finalColor = PinLight(backgroundTex, color);
                } else if(_BlendMode == DIFFERENCE) {
                	finalColor = Difference(backgroundTex, color);
                } else if(_BlendMode == EXCLUSION) {
                	finalColor = Exclusion(backgroundTex, color);
                }

                finalColor = clamp(finalColor, 0, 1);
                float a = _Alpha * color.a;

                finalColor = fixed4(backgroundTex.rgb * (1.0-a) + finalColor.rgb * a , 1);

				return finalColor;
            }

            ENDCG
        }
    	
    	Pass {
    		Blend Off
        	
            CGPROGRAM

            #pragma vertex vert
            #pragma fragment frag
 
            #include "UnityCG.cginc"

            struct appdata_t
            {
                float4 vertex : POSITION;
                float2 texcoord : TEXCOORD0;

            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                half2 texcoord : TEXCOORD0;
            };

            float4 _MainTex_ST;

            v2f vert(appdata_t IN)
            {
                v2f o;

       			o.vertex = IN.vertex;
       			
				#if UNITY_UV_STARTS_AT_TOP
					o.vertex.y = -o.vertex.y;
				#endif
				
                o.texcoord = TRANSFORM_TEX(IN.texcoord, _MainTex);
                
                return o;
            }

            sampler2D _MainTex;

            fixed4 frag(v2f IN) : SV_Target
            {
                return tex2D(_MainTex, IN.texcoord);
            }
            ENDCG
    	}
    }

    Fallback "Sprites/Default"
}