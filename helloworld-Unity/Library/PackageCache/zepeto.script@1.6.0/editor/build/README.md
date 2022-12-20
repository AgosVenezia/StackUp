# ZEPETO Script Build Pipeline

ZEPETO Script Build Pipeline(이하 ZSBP)은 ZEPETO Script로 개발된 프로젝트를 보다 쉽게 패키징 하고 배포 할 수 있는 환경을 제공합니다. ZSBP는 다음 3가지 기능을 구현하는것을 목표로 합니다.

1. 일반적인 유니티 개발 경험이외에 패키징을 위한 추가 작업을 없앨것
2. 빌드 결과를 빠르게 확인하고 검증할 수 있는 방법을 제공할것
3. ZSBP API를 통해 Build Pipeline을 확장할 수 있을것

## Install
ZSBP는 ZEPETO.Script 패키지에 기본 내장되어 있습니다.

## Project Settings

ZSBP 에서는 다음과 같은 데이터를 기본으로 패키지에 포함 할 수 있습니다. 

### Scene
File > Build Settings를 이용해 패키지에서 사용할 Scene을 관리합니다.

Reference
- https://docs.unity3d.com/Manual/BuildSettings.html

### Tags and Layers
Edit > Project Settings > Tags and Layers에서 프로젝트에서 사용하는 Tag와 Layer를 관리합니다.

Reference
- https://docs.unity3d.com/Manual/class-TagManager.html

### Resources
프로젝트에 `Resources` 디렉토리를 만들고 여기에 에셋을 추가하면 패키지에서 언제든지 접근 할 수 있습니다.

Reference
- https://docs.unity3d.com/ScriptReference/Resources.html
- https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html

### StreamingAssets
프로젝트에 `StreamingAssets` 디렉토리를 만들고 여기에 파일을 추가하면 패키지에서 Raw File(Binary) 데이터에 접근 할 수 있습니다.

    ZEPETO Script는 Sandbox 환경이기 때문에 기본적인 File System API가 차단되어있습니다.
    StreamingAssets에 접근하기 위해서는 StreamingAssets.Load(string path) 를 통해 접근해야합니다.

Reference 
- https://docs.unity3d.com/ScriptReference/Resources.html


### Scripts
프로젝트에 존재하는 모든 스크립트(*.ts, *.js)는 자동으로 패키지에 포함됩니다.

### Package Dependencies
UPM으로 관리되는 모든 패키지는 자동으로 프로젝트가 패키징될때 포함됩니다.


## Packaging (Build)
Unity Editor 상단에 