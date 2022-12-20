// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

Shader "ZEPETO/Sticker" {
 Properties {

     _MainTex ("Sticker Texture", 2D) = "white" {}
     _AvatarTex ("Avatar Texture", 2D) = "white" {}
 }
 
 SubShader {
     
     Tags { "RenderType" = "Opaque" }
     LOD 100
     
     ZWrite Off
     Blend Off
     
     Pass {  
         CGPROGRAM
             #pragma vertex vert
             #pragma fragment frag
            #pragma multi_compile_fog
             
             #include "UnityCG.cginc"
 
             struct appdata_t {
                 float4 vertex : POSITION;
                 float2 texcoord : TEXCOORD0;
             };
 
             struct v2f {
                 float4 vertex : SV_POSITION;
                 half2 texcoord : TEXCOORD0;
                 UNITY_FOG_COORDS(1)

             };
 
             sampler2D _MainTex;
             float4 _MainTex_ST;
             sampler2D _AvatarTex;
             
             v2f vert (appdata_t v)
             {
                 v2f o;
                 o.vertex = UnityObjectToClipPos(v.vertex);
                 o.texcoord = TRANSFORM_TEX(v.texcoord, _MainTex);
                 UNITY_TRANSFER_FOG(o,o.vertex);
                 return o;
             }
             
             fixed4 frag (v2f i) : SV_Target
             {
             	 float2 backgroundUV = i.texcoord;
             	 backgroundUV.x *= 0.5;

             	 float2 foregroundUV = backgroundUV;
             	 foregroundUV.x += 0.5;


                 fixed4 bg = tex2D(_MainTex, backgroundUV);
                 fixed4 avatar = tex2D(_AvatarTex, i.texcoord);
                 
                 fixed4 fg = tex2D(_MainTex, foregroundUV);

                 avatar.rgb /= avatar.a;

                 bg = fixed4(fixed3(1,1,1) * (1.0 - bg.a) + bg.rgb * bg.a, 1);

                 bg = fixed4(bg.rgb * (1.0 - avatar.a) + avatar.rgb * avatar.a,  bg.a * (1.0 - avatar.a) + avatar.a);
                 bg = fixed4(bg.rgb * (1.0 - fg.a) + fg.rgb * fg.a,  bg.a * (1.0 - fg.a) + fg.a);

           
                 UNITY_APPLY_FOG(i.fogCoord, bg);
              
                 return bg;
             }
         ENDCG
     }
 }
 
 }