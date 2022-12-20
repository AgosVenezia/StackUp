Shader "ZEPETO/Room"
{
    Properties
    {
        
        _WallpaperTex ("Wallpaper", 2D) = "white" {}    
        _WallpaperAlpha ("Wallpaper Alpha", Range(0, 1)) = 1

        _FloorTex ("Floor", 2D) = "white" {}
        _FloorAlpha ("Floor Alpha", Range(0, 1)) = 1

        _BottomTex ("Bottom", 2D) = "white" {}
        _BottomAlpha ("Bottom Alpha", Range(0, 1)) = 1

        _TopLeftTex ("TopLeft", 2D) = "white" {}
        _TopLeftAlpha ("TopLeft Alpha", Range(0, 1)) = 1

        _TopRightTex ("TopRight", 2D) = "white" {}
        _TopRightAlpha ("TopRight Alpha", Range(0, 1)) = 1

        _MiddleLeftTex ("MiddleLeft", 2D) = "white" {}
        _MiddleLeftAlpha ("MiddleLeft Alpha", Range(0, 1)) = 1

        _MiddleRightTex ("MiddleRight", 2D) = "white" {}
        _MiddleRightAlpha ("MiddleRight Alpha", Range(0, 1)) = 1
       
        _PlaceholderTex ("Placeholder", 2D) = "white" {}
        _PlaceholderAlpha ("Placeholder Alpha", Range(0, 1)) = 1

        _Color ("Overlay Color", Color) = (1,1,1,1)
        _Fill ("Room Fill", Range(0,1)) = 1

    }
    SubShader
    {
     
		ZWrite Off
        ZTest Always
        Cull Off

        Pass
        {


            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"

            #define DEFINE_MODULE(tex)  sampler2D tex ## Tex; float4 tex ## Tex_ST; float4 tex ## Tex_TexelSize;  float tex ## Alpha;            
            #define INIT_UV(tex) o. ## tex = (v.uv - tex##Tex_ST.zw) / tex##Tex_ST.xy;        
            
            #define __TEX2D(tex, uv, size, alpha) ((size < 2 || uv.x < 0 || uv.x > 1 || uv.y < 0 || uv.y > 1) ? 0.0 : (tex2D(tex ## Tex, float2(uv.x, 1.0-uv.y)) * alpha))
            //#define __TEX2D(tex, uv, size, alpha) ((size.w < 2 || uv.x < 0 || uv.x > 1 || uv.y < 0 || uv.y > 1) ? 0.0 : (float4(1.0, 0, 0, 1.0) * alpha))

            #define TEX2D(tex) __TEX2D(tex, i.##tex, tex##Tex_TexelSize.w, tex##Alpha)     
            #define TEX2D_WITHOUT_CLIP(tex) __TEX2D(tex, i.##tex, 2, tex##Alpha)            
            #define BLEND(bg, src)  (fixed4(bg.rgb * (1.0 - src.a) + src.rgb * src.a,  bg.a * (1.0 - src.a) + src.a))
        
            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 _Wallpaper : TEXCOORD0;
                float2 _Floor : TEXCOORD1;
                float2 _Bottom : TEXCOORD2;
                float2 _TopLeft : TEXCOORD3;
                float2 _TopRight : TEXCOORD4;                           
                float2 _MiddleLeft : TEXCOORD5;           
                float2 _MiddleRight : TEXCOORD6;           
                float2 _Placeholder : TEXCOORD7;           

                float4 vertex : SV_POSITION;
            };
            
            DEFINE_MODULE(_Wallpaper)
            DEFINE_MODULE(_Floor)
            DEFINE_MODULE(_Bottom)
            DEFINE_MODULE(_TopLeft)
            DEFINE_MODULE(_TopRight)
            DEFINE_MODULE(_MiddleLeft)
            DEFINE_MODULE(_MiddleRight)
            DEFINE_MODULE(_Placeholder)


            fixed4 _Color;
            float _Fill;

            v2f vert (appdata v)
            {
                v2f o;

                #if !UNITY_UV_STARTS_AT_TOP
                v.uv.y = 1.0 - v.uv.y;
                #endif

                
                o.vertex = v.vertex;
                
                INIT_UV(_Wallpaper);
                INIT_UV(_Floor);
                INIT_UV(_Bottom);
                INIT_UV(_TopLeft);
                INIT_UV(_TopRight);
                INIT_UV(_MiddleLeft);
                INIT_UV(_MiddleRight);
                INIT_UV(_Placeholder);

                return o;
            }

       

            fixed4 frag (v2f i) : SV_Target
            {
                // sample the texture

                fixed4 result = 1.0f;
            
                result = BLEND(result, TEX2D_WITHOUT_CLIP(_Wallpaper));
                result = BLEND(result, TEX2D_WITHOUT_CLIP(_Floor));
                result = BLEND(result, TEX2D(_Bottom));
                result = BLEND(result, TEX2D(_TopLeft));
                result = BLEND(result, TEX2D(_TopRight));
                result = BLEND(result, TEX2D(_MiddleLeft));
                result = BLEND(result, TEX2D(_MiddleRight));
                result = BLEND(result, TEX2D(_Placeholder));                            
                result *= _Color;                

                
                result *= _Fill;

                
                return result;
            }
            ENDCG
        }
    }
}
