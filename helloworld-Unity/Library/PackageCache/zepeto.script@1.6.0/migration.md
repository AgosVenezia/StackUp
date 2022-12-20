## ZEPETO Script Migration Guides

C# 으로 개발된 기존 코드를 Javascript로 변환할때 일부 기능은 language 스펙상 별도로 대응이 필요한 부분이 있습니다. 대응이 필요한 항목은 아래 항목을 참고해주세요. 

### CLR Type Access
csharp 모듈을 이용해 CLR Type에 Access할 수 있습니다. Prebuilt 된 Type은 자동완성을 지원하며, 자동완성이 되지 않더라도 내부적으로 Reflection을 통해 Type을 찾습니다.
```javascript
var CS = require("csharp");

var GameObject = CS.UnityEngine.GameObject;
var Vector3 = CS.UnityEngine.Vector3;

var value = new Vector3(1,2,3);
```

### GetComponent(s)

GameObject.GetComponent 를 통해 일관된 방법으로 Unity Component 와 Zepeto Script 모듈을 가져올 수 있습니다.

```javascript
var gameObject = CS.UnityEngine.GameObject.Find("Cube");

// Unity Component 를 가져올때
var meshRenderer = gameObject.GetComponent(CS.UnityEngine.MeshRenderer);

// Zepeto Script 를 가져올때
var customScript = gameObject.GetComponent("CustomScript");
```

### Operators
Javascript 에서는 Operator 재정의를 지원하지 않기 때문에 C#의 Operator(+,-,*,/ 등) keyword를 사용할 수 없습니다. operator는 op_Addition 형태의 원형 Method 로 지원하며 자세한 Operator 이름은 [MSDN](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/operator-overloads) 에서 확인 할 수 있습니다. 

```javascript
var CS = require("csharp");
var value1 = new CS.UnityEngine.Vector3(1,1,1);
var value2 = new CS.UnityEngine.Vector3(2,2,2);
var value3 = CS.UnityEngine.Vector3.op_Addition(value1, value2);
```

### Add/Remove Event Handler
Operator와 마찬가지로 `+=`, `-=` 와 같은 event add/remove operator 또한 지원하지 않습니다.
`add_[event name]`, `remove_[event name]` 의 형태로 C# event를 추가 제거할 수 있습니다.

```javascript
Start() {
    CS.UnityEngine.Application.add_focusChanged(this.OnFocusChanged);
    CS.UnityEngine.Application.remove_focusChanged(this.OnFocusChanged);
}
OnFocusChanged(focused) {
    console.log("focus : " + focused);
}
```

### Array Indexed Property
- C# type array의 Indexed property를 지원하지 않습니다. `get_Item`, `set_Item`을 사용해야합니다.
```javascript
var arrayFromCS = Resources.LoadAll("ResourceName");
var value1 = arrayFromCS.get_Item(0);
arrayFromCS.set_Item(0,123);
```

### Coroutine (Experimental)
Javascript Generator(yield keyword) 를 사용해서 C#의 Coroutine을 구성할 수 있습니다. 이기능은 실험적으로 구현되어있으며 내부 구현은 수정될 수 있습니다.
```javascript
Start() {
    this.StartCoroutine(this.CustomCoroutine());
}

*CustomCoroutine() {
    console.log("#1");
    yield new CS.UnityEngine.WaitForSeconds(0.1);
    
    console.log("#2");
    yield new CS.UnityEngine.WaitForSeconds(0.1);
    
    console.log("#3");
    yield new CS.UnityEngine.WaitForSeconds(0.1);
    
    console.log("#4");
    yield new CS.UnityEngine.WaitForSeconds(0.1);
}
```


- Static Wrapper 로 구성되지 않은 Type 에 대해서는 모두 Reflection 기반으로 동작합니다. 성능에 영향이 있을 수 있고, Code Striping 을 통해 Type 접근이 불가능 할 수 있습니다.
- IL2CPP 환경에서는 link.xml을 사용해서 Code Stripping을 제어해야합니다.

