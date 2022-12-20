## ZEPETO Script

Unity 환경에서 Javascript Script로 서비스/피쳐를 개발하기 위한 라이브러리 입니다.
간단한 사용법으로 기존의 개발 경험을 유지한체 Scripting이 가능하며 Script Builder/Loader를 통해 앱배포 없이도 인터넷을 통해 배포 시나리오가 포함되어있습니다. 

### Branches
이 Repository는 아래와 같은 구조의 branch가 존재합니다. 기본적으로 유니티 프로젝트를 포함하고 있지 않고 `upm package` 형태로 제공됩니다. 만약 유니티 프로젝트가 필요한 경우 [unity-project](../../tree/unity-project) branch를 사용하세요.

- [master](../../tree/master) : 최신(stable) 버전의 package
- [dev](../../tree/dev) (또는 dev/[feature]) : 개발상태
- [unity-project](../../tree/unity-project) : 유니티 프로젝트에서 개발을 진행하기 위한 프로젝트. dev branch가 submodule로 참조됩니다.


## Getting Started

### Prerequisites

* Unity 2019.4 이상


### Installation

[Unity Package Manager](https://docs.unity3d.com/Manual/upm-ui-giturl.html) 나 [Packages/manifest.json](https://docs.unity3d.com/kr/2019.4/Manual/upm-git.html) 를 수정해서 설치 할 수 있습니다. 

기본적으로 git url을 입력할 경우 master branch 의 패키지를 로드하고, 임의 버전이 필요한경우 아래와 같이 branch 이름을 지정할 수 있습니다.
    
    https://oss.navercorp.com/zepeto/zepeto-script.git#[branch-name]


#### Package Manager를 통해 설치

1. 유니티 에디터에서 Window -> Package Manager를 실행합니다.
2. Package Manager의 왼쪽 상단의 + 버튼을 누르고 Add package from git URL 를 선택합니다. 
3. `https://oss.navercorp.com/zepeto/zepeto-script.git` 를 입력하고 Add를 누릅니다.

#### packages/manifest.json 를 통해 설치

1. Packages/manifest.json 를 열고 dependencies에 zepeto-script를 추가합니다. 
```json
{
	"dependencies": {		
		"zepeto.script": "https://oss.navercorp.com/zepeto/zepeto-script.git",
	}
}
```



<!-- USAGE EXAMPLES -->
## Usage
- 임의의 GameObject에 ZepetoScriptContextComponent 를 추가합니다.
- Scripting 이 필요한 GameObject에 ZepetoScriptBehaviour 를 추가합니다.
- ZepetoScriptBehaviour에 작성한 Script 를 연결합니다.
- *ZepetoScriptContextComponent 의 modules에 미리 모듈을 추가할 수 있고, require를 통해 불러올수 있습니다.*   



## Annotations
특수한 주석 구문을 활용해 Script에 대한 Metadata를 노출합니다. Metadata에 포함된 정보를 통해 Script에서 모듈을 검색하거나, Editor Inspector에 노출하여 편집이 가능합니다. 

```javascript
/*
@name Rotate
@property float degree
@property UnityEngine.Transform targetTransform
@property float degree
@description rotates by <color=#00FF00>{{degree}}</color> degrees every frame.
@import UnityEngine.UI.Image
*/
```
    Annotation은 Script가 Import 될때 미리 처리되기 때문에 런타임 성능에 영향을 미치진 않습니다. 


#### @name [name]
모듈의 이름을 정의합니다. GameObject.GetComponent 등을 사용할때 사용됩니다.

#### @property [type] [name]
명시적으로 모듈의 속성값을 정의합니다. 정의된 속성은 Editor Inspector 에 노출되며 Instance 생성시 해당 값으로 초기화됩니다.
*Default 값을 정의할수 있는 기능 추가 구현이 필요*


#### @description [description]
모듈에 대한 설명입니다. **{{property name}}** 구문을 통해 동적인 Description을 생성할 수 있으며, 이 값은 Editor 에서도 실시간으로 반영됩니다.

#### @import [type]
(개발중) C# Type을 미리 Import할 수 있습니다. 



## Extra Features

### Javascript Asset
.js 확장자를 가진 파일은 Javascript Asset으로 Import 됩니다. Javascript Asset은 Annotation을 통해 명시적으로 Property를 노출할 수 있습니다. 

### CLR Type Reference
csharp 모듈을 활용해 CLR Type에 Access할 수 있습니다.
```javascript
var CS = require("csharp");

var GameObject = CS.UnityEngine.GameObject;
var Vector3 = CS.UnityEngine.Vector3;

var value = new Vector3(1,2,3);
```

### GameObject.GetComponent
GameObject.GetComponent 를 통해 일관된 방법으로 Unity Component 와 Zepeto Script 모듈을 가져올 수 있습니다.

```javascript
var gameObject = CS.UnityEngine.GameObject.Find("Cube");

// Unity Component 를 가져올때
var meshRenderer = gameObject.GetComponent(CS.UnityEngine.MeshRenderer);

// Zepeto Script 를 가져올때
var customScript = gameObject.GetComponent("CustomScript");
```

### Tag
기본적으로 Tag 64개가 빌드에 포함이 되어 있으며 이를 직접 사용하여 Unity의 Tag 시스템을 활용할 수 있습니다.  
(ZEPETO_RESERVED_TAG_0 ~ ZEPETO_RESERVED_TAG_64)  

가독성이 떨어지는 Tag 명으로 인한 불편함을 해소하고자 ZepetoTagManager와 ZepetoTagComponent를 제공하고 있습니다.  
ZepetoTagComponent를 어떤 GameObject에든 처음 Add를 하면 ZepetoTagManager(ScriptableObject)는 Assets/Resources 경로에 자동으로 생성이 됩니다.  
*ZepetoTagManager는 반드시 Assets/Resources 디렉토리에 존재해야 하며 다른 Resources 폴더에 있다면 무시됩니다.*  

ZepetoTagManager에 ZEPETO_RESERVED_TAG_X 에 매핑하는 Tag 테이블을 관리할 수 있으며,  
JS에서 매핑 테이블에 정의해 둔 태그를 활용해 GameObject를 제어하는 기능이 지원됩니다.  

```javascript
console.log("Unity Tag : " + this.gameObject.tag);	// ZEPETO_RESERVED_TAG_X

console.log("Zepeto Wrapping Tag : " + this.zepetoTag);	// ZepetoTagManager에 정의된 ZEPETO_RESERVED_TAG_X에 대응하는 Tag

console.log("Compare Zepeto Tag : " + this.CompareZepetoTag("player"));
```

### Layer
17~24번까지의 8개 Layer를 게임에서 사용할 수 있습니다.  
다른 Layer를 사용하게 되면 본체와 충돌이 되어 동작을 보장하지 않습니다.  
혼란을 줄이기 위해 TagManager.asset에 별도 정의를 포함합니다.  
(ZEPETO_RESERVED_LAYER_0 ~ ZEPETO_RESERVED_LAYER_7)  

다만 Project 설정의 물리 관련 된 내용등의 Layer 연관 설정들을 변경하여도,  
제페토 앱에서는 제페토의 고유한 설정값이 사용되고 변경된 내용은 무시됩니다.


## Limitations & Migration Guides

C# 으로 개발된 기존 코드를 Javascript로 변환할때 일부 기능은 language 스펙상 별도로 대응이 필요한 부분이 있습니다. 대응이 필요한 항목은 [Migration](migration.md) 문서를  참고해주세요. 

## Roadmap
- ECS / DOTS Support
    - Core Module 자체는 Component 시스템과 별개로 구성되어있어서 적용엔 큰 문제 없을것으로 예상..
- PuerTS 의존성 제거

## Script Debugging
Context를 Debug mode로 실행하고, Visual Studoe Code 에서 아래와 같은 config로 디버거를 attach합니다.
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "address": "127.0.0.1",
            "name": "Attach to Remote",
            "port": 18088,
            "request": "attach",
            "type": "pwa-node"
        }
    ]
}
```

## Note
- PuerTS 의 기본 script resource는 ZepetoPreloadScripts에 Minify 된 텍스트로 바이너리에 포함됩니다. (배포 용의성을 위해)


## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact
- NAVER Z Engine Team or Daewook.kim (daewook.kim@naverz-corp.com)
- Project Link: [https://oss.navercorp.com/zepeto/zepeto-script.git](https://oss.navercorp.com/zepeto/zepeto-script.git)


<!-- ACKNOWLEDGEMENTS -->
## References

Javascript Engine으로는 V8을 사용하고 있으며 V8 C# binding으로 puerts를 사용하고 있습니다.
* Javscript Engine : [V8](https://v8.dev/)
* V8 C# Binding : [puerts](https://github.com/Tencent/puerts)

