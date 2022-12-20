Shader "Hidden/BodyMask" {
    Properties {
    }    
    SubShader {
        Tags { "RenderType" = "Opaque"  "Queue" = "Geometry"  }
        LOD 100    
        ZWrite Off
        Blend Off         

        Pass {  
            CGPROGRAM
                #pragma vertex vert
                #pragma fragment frag         
                struct appdata_t {
                    float4 vertex : POSITION;
                };
                struct v2f {
                    float4 vertex : SV_POSITION;
                };
    
                v2f vert (appdata_t v)
                {
                    v2f o;
                    o.vertex = v.vertex * 2 - 1;
                    return o;
                }
                
                fixed4 frag (v2f i) : SV_Target
                {        
                    return 0.0f;
                }

            ENDCG
        }
    }
}