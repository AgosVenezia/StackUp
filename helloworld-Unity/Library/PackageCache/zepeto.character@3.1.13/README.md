# ZEPETO SDK
ZEPETO 캐릭터를 사용하기 위한 Core SDK

### Branches
이 Repository는 아래와 같은 구조의 branch가 존재합니다. 기본적으로 유니티 프로젝트를 포함하고 있지 않고 `upm package` 형태로 제공됩니다. 만약 유니티 프로젝트가 필요한 경우 [unity-project](../../tree/unity-project) branch를 사용하세요.

- [master](../../tree/master) : 최신(stable) 버전의 package
- vx.x.x (또는 vx.x.x/[feature]) : 개발상태
- [unity-project](../../tree/unity-project) : 유니티 프로젝트에서 개발을 진행하기 위한 프로젝트. dev branch가 submodule로 참조됩니다.


## Getting Started

### Prerequisites
* Unity 2019.4 이상

### Installation

[Unity Package Manager](https://docs.unity3d.com/Manual/upm-ui-giturl.html) 나 [Packages/manifest.json](https://docs.unity3d.com/kr/2019.4/Manual/upm-git.html) 를 수정해서 설치 할 수 있습니다. 

기본적으로 git url을 입력할 경우 master branch 의 패키지를 로드하고, 임의 버전이 필요한경우 아래와 같이 branch 이름을 지정할 수 있습니다.
    
    https://oss.navercorp.com/zepeto/zepeto-sdk.git#[branch-name]


#### Package Manager를 통해 설치

1. 유니티 에디터에서 Window -> Package Manager를 실행합니다.
2. Package Manager의 왼쪽 상단의 + 버튼을 누르고 Add package from git URL 를 선택합니다. 
3. `https://oss.navercorp.com/zepeto/zepeto-sdk.git` 를 입력하고 Add를 누릅니다.

#### packages/manifest.json 를 통해 설치

1. Packages/manifest.json 를 열고 dependencies에 zepeto-sdk 추가합니다. 
```json
{
	"dependencies": {		
		"zepeto.sdk": "https://oss.navercorp.com/zepeto/zepeto-sdk.git",
	}
}
```


## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact
- NAVER Z Engine Team or Daewook.kim (daewook.kim@naverz-corp.com)
- Project Link: [https://oss.navercorp.com/zepeto/zepeto-sdk.git](https://oss.navercorp.com/zepeto/zepeto-sdk.git)


# Internal Resource
몇몇 Prebuilt 되는 Internal Resource들은 유니티 프로젝트에서만 접근가능합니다. unity-project branch 를 확인하세요.