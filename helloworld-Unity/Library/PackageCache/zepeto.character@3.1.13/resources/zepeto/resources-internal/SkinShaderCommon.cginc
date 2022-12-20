#ifndef DEFINED_PREINTEGRATEDSKINSHADER_COMMON
#define DEFINED_PREINTEGRATEDSKINSHADER_COMMON

#include "HLSLSupport.cginc"
#include "UnityShaderVariables.cginc"

#include "UnityCG.cginc"
#include "Lighting.cginc"
#include "AutoLight.cginc"

#define PSS_PI 3.14159265359

#ifndef UNITY_VERSION
	#ifdef UNITY_SHADER_VARIABLES_INCLUDED
		#error unsupported unity version
	#else
		#error unsupported unity version
	#endif
#endif

struct SkinSurfaceOutput {
	fixed3 Albedo;
	fixed Scattering;
	fixed3 Normal;
	half SpecularRoughness;
	half3 SpecularIntensity;
	fixed SpecularEnvMapIntensity;
	fixed3 Emission;
	fixed Alpha;
};

#ifndef SHADOW_COORDS
	#define SHADOW_COORDS(x)
#endif

#define PSS_COORDS(idx1,idx2,idx3,idx4,idx5,idx6) \
	float4 pos			: SV_POSITION; \
	half4 tangentToWorldAndWPos[3] : TEXCOORD##idx1; \
	float4 uv			: TEXCOORD##idx4; \
	fixed4 ambient		: TEXCOORD##idx5; \
	SHADOW_COORDS(idx6)
#if defined(PSS_FORCE_GAMMA_CORRECTION)
	#define PSS_INPUTGAMMACORRECTION(sRGB) (sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878))
	#define PSS_OUTPUTGAMMACORRECTION(linRGB) (max(1.055 * pow(linRGB, 0.416666667) - 0.055, 0))
#else
	#define PSS_INPUTGAMMACORRECTION(x) x
	#define PSS_OUTPUTGAMMACORRECTION(x) x
#endif

int CALC_MIP_COUNT_IMPL(float4 texTexelSize) {
	#if SHADER_TARGET >= 30
		return floor(log2(max(texTexelSize.z, texTexelSize.w)));
	#else
		return log2(texTexelSize.z);
	#endif
}
#define CALC_MIP_COUNT(texname) CALC_MIP_COUNT_IMPL(texname##_TexelSize)

fixed4 PSS_SAMPLE_BLURRED_IMPL(sampler2D tex, float2 uv, float blur, int mipLevels);
#define PSS_SAMPLE_BLURRED(texname, uv, blur) PSS_SAMPLE_BLURRED_IMPL(texname, uv, blur, CALC_MIP_COUNT(texname))

float newPenumbra(float penumbraLocation) {
	return saturate(penumbraLocation*3.0-2.0);
}

#define Pow2(x) (x*x)
#define Pow3(x) (x*x*x)
#define Pow4(x) ((x*x)*(x*x))
#define Root4(x) sqrt(sqrt(x))

#if defined(UNITY_COMPILER_HLSL)
	#define PSS_LOOP [loop]
	#define PSS_UNROLL(max_iterations) [unroll(max_iterations)]
#else
	#define PSS_LOOP
	#define PSS_UNROLL(max_iterations)
#endif

inline float SchlickFresnel(float u) {
    float m = saturate(1-u);
    float m2 = m*m;
    return m2*m2*m; 
}

float G1V(float dotNV, float k) {
	return 1.0/(dotNV*(1.0-k)+k);
}

#endif //DEFINED_PREINTEGRATEDSKINSHADER_COMMON