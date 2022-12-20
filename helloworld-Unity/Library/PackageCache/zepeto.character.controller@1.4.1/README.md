# ZEPETO CHARACTER CONTROLLER (0.1.8)

Zepeto Script 환경에서 제페토 캐릭터에 대한 기본 사양을 제공합니다.

## GUIDE

### Branches
이 Repository는 아래와 같은 구조의 branch가 존재합니다. 기본적으로 유니티 프로젝트를 포함하고 있지 않고 `upm package` 형태로 제공됩니다. 만약 유니티 프로젝트가 필요한 경우 [unity-project](../../tree/unity-project) branch를 사용하세요.

- [master](../../tree/master) : 최신(stable) 버전의 package
- [dev](../../tree/dev) : 개발상태
- [unity-project](../../tree/unity-project) : 유니티 프로젝트에서 개발을 진행하기 위한 프로젝트. dev branch가 submodule로 참조됩니다.

### Convention
* [Unity Package layout](https://docs.unity3d.com/Manual/cus-layout.html)

### Prerequisites
* Unity 2019.4 이상
* [Zepeto UPM](https://oss.navercorp.com/zepeto/zepeto-upm) 설정

### Dependencies
* com.unity.inputsystem (1.1.0-preview.3)
* zepeto.sdk (3.0.4)
* zepeto.script (0.2.0)


### Getting Started

#### Installation

1. 유니티 에디터에서 Window -> Package Manager를 실행합니다.
2. Package Manager의 왼쪽 상단의 My Registries를 선택합니다.
3. `ZEPETO.Character.Controller` 를 선택하고 Install 를 누릅니다.
4. Editor -> Project Settings... -> Player -> Active Input Handling 를 설정해 줍니다.
    * 기존 Input Manager를 사용중이라면 __Both__
    * 아니라면 __Input System Package (New)__
5. Editor -> Project Settings... -> Zepeto 의 __Main Scene__ 를 지정하고 __Update Dependencies__ 를 클릭해 줍니다.
6. Editor -> Project Settings... -> Zepeto -> Zepeto Character Controller 에서 세팅이 잘 되어 있는지 확인 합니다.

#### Sample

1. 유니티 에디터에서 __Window -> Package Manager__ 를 실행합니다.
2. __Package Manager__ 의 왼쪽 상단의 __My Registries__를 선택합니다.
3. `ZEPETO.Character.Controller` 를 선택하고 우측에서 Samples를 Import 합니다.
4. Import 된 폴더의 `ZepetoScriptPackage` 파일을 선택하고 __SET TO PROJECT SETTINGS__ 를 클릭합니다.
4. 씬을 열어 플레이 합니다.

## Reference

* [Setting View Guide](Documentation~/SettingViewGuide/Guide.md)
* [API Reference](./Documentation~/APIReference/APIReference.md)

## Note

- js 에서 add_XXX 로 이벤트 추가할 때 arugument가 struct type이면 에러 발생
- `ZepetoScriptContextComponent.Instance.Context.Environment.UsingAction<InputAction.CallbackContext>();` 를 통해 미리 타입을 알려주면 우회가 가능하긴 한데.... 찝찝함

## TODO
- ~~제페토 옷 입히기~~
- ~~User input binding~~
- ~~Spawn Point~~
- ~~LocalPlayer~~
- ~~기본제공 플레이어 인풋 disable~~
- ~~제스쳐 기능~~
- ~~View 에서 많은 기능 제공~~
- ~~javascript 용 api~~
- 탈것에 대한 고려 필요
- 빌드 테스트
- Docs 작성
- 모바일에서 줌/핀치 기능 구현 (현재 마우스 휠만 작업)
- 제공하는 프로퍼티 다양화

 