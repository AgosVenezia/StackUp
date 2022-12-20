아래와 같이 DLLImport를 통해 Plugin을 사용할때

```
[DllImport(DLLNAME, CallingConvention = CallingConvention.Cdecl)]
public static extern int GetLibVersion();
```

DLLNAME 은 상수형태로 존재해야하는데, 플랫폼에 따라 이름을 다르게 지정해줘야함.
이를 위해 일반적으로는 아래와 같이 Preprocessor macro 를 사용하는데
빌드시점에 따라 값이 결정되어 미리 빌드된 DLL을 배포해야하는 경우 잘못된 값이 입력되게됨.

```
#if (UNITY_IPHONE || UNITY_TVOS || UNITY_WEBGL || UNITY_SWITCH) && !UNITY_EDITOR
    const string DLLNAME = "__Internal";
#else
    const string DLLNAME = "puerts";
#endif
```

이를 위해 미리 상수값을 갖는 DLL을 제공하고, Import 환경에 따라 이름만 가져다가 사용할 수 있도록 처리함.

아래 2개 파일이 이에 해당하며,

ZEPETO.Script.Puerts.Default.dll
ZEPETO.Script.Puerts.Native.dll

DLL에는 아래와 같은 간단한 코드만 포함되어 있음.

```
namespace Puerts
{
    public class PuertsDll {
        
        public const string Name = "__internal";
        또는
        public const string Name = "puerts";

    }
}
```

DLL을 빌드하기 위해서는 ZEPETO.Script.Internal.PuertsPlatformSettingsBuilder 를 사용