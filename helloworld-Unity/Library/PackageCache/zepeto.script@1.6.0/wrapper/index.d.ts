//# signature=ZEPETO.Script#44bd265224e7181ed03f1c6f35119408#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Script' {

    import * as System from 'System';
    import * as ZEPETO_Script_ZepetoScriptInstance from 'ZEPETO.Script.ZepetoScriptInstance';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections from 'System.Collections';
    import * as RootNamespace from 'RootNamespace';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as Puerts from 'Puerts';
        
    
    class ZepetoScriptBehaviour extends System.Object {
        
        public properties: System_Collections_Generic.IDictionary$2<string, any>;
        
        public get Owner(): ZepetoScriptBehaviourComponent;
        
        public get useGUILayout(): boolean;
        public set useGUILayout(value: boolean);
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get isActiveAndEnabled(): boolean;
        
        public get transform(): UnityEngine.Transform;
        
        public get gameObject(): UnityEngine.GameObject;
        
        public get tag(): string;
        public set tag(value: string);
        
        public get name(): string;
        public set name(value: string);
        
        public get hideFlags(): UnityEngine.HideFlags;
        public set hideFlags(value: UnityEngine.HideFlags);
        
        public constructor();
        
        public Invoke($method: string):void;
        
        public InvokeEvent($events: ZEPETO_Script_ZepetoScriptInstance.Events, $param: any):void;
        
        public IsInvoking():boolean;
        
        public CancelInvoke():void;
        
        public Invoke($methodName: string, $time: number):void;
        
        public InvokeRepeating($methodName: string, $time: number, $repeatRate: number):void;
        
        public CancelInvoke($methodName: string):void;
        
        public IsInvoking($methodName: string):boolean;
        
        public StartCoroutine($methodName: string):UnityEngine.Coroutine;
        
        public StartCoroutine($methodName: string, $value: any):UnityEngine.Coroutine;
        
        public StartCoroutine($routine: System_Collections.IEnumerator):UnityEngine.Coroutine;
        
        public StopCoroutine($routine: System_Collections.IEnumerator):void;
        
        public StopCoroutine($routine: UnityEngine.Coroutine):void;
        
        public StopCoroutine($methodName: string):void;
        
        public StopAllCoroutines():void;
        
        public GetComponent($type: System.Type):UnityEngine.Component;
        
        public GetComponent<T>():T;
        
        public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
        
        public TryGetComponent<T>($component: $Ref<T>):boolean;
        
        public GetComponent($type: string):UnityEngine.Component;
        
        public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
        
        public GetComponentInChildren($t: System.Type):UnityEngine.Component;
        
        public GetComponentInChildren<T>($includeInactive: boolean):T;
        
        public GetComponentInChildren<T>():T;
        
        public GetComponentsInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component[];
        
        public GetComponentsInChildren($t: System.Type):UnityEngine.Component[];
        
        public GetComponentsInChildren<T>($includeInactive: boolean):T[];
        
        public GetComponentsInChildren<T>($includeInactive: boolean, $result: System_Collections_Generic.List$1<T>):void;
        
        public GetComponentsInChildren<T>():T[];
        
        public GetComponentsInChildren<T>($results: System_Collections_Generic.List$1<T>):void;
        
        public GetComponentInParent($t: System.Type):UnityEngine.Component;
        
        public GetComponentInParent<T>():T;
        
        public GetComponentsInParent($t: System.Type, $includeInactive: boolean):UnityEngine.Component[];
        
        public GetComponentsInParent($t: System.Type):UnityEngine.Component[];
        
        public GetComponentsInParent<T>($includeInactive: boolean):T[];
        
        public GetComponentsInParent<T>($includeInactive: boolean, $results: System_Collections_Generic.List$1<T>):void;
        
        public GetComponentsInParent<T>():T[];
        
        public GetComponents($type: System.Type):UnityEngine.Component[];
        
        public GetComponents($type: System.Type, $results: System_Collections_Generic.List$1<UnityEngine.Component>):void;
        
        public GetComponents<T>($results: System_Collections_Generic.List$1<T>):void;
        
        public GetComponents<T>():T[];
        
        public CompareTag($tag: string):boolean;
        
        public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
        
        public SendMessageUpwards($methodName: string, $value: any):void;
        
        public SendMessageUpwards($methodName: string):void;
        
        public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
        
        public SendMessage($methodName: string, $value: any):void;
        
        public SendMessage($methodName: string):void;
        
        public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
        
        public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
        
        public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
        
        public BroadcastMessage($methodName: string, $parameter: any):void;
        
        public BroadcastMessage($methodName: string):void;
        
        public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
        
        public GetInstanceID():number;
        
        public GetHashCode():number;
        
        public Equals($other: any):boolean;
        
        public ToString():string;
        
        public static InitializeProxy($behaviour: ZepetoScriptBehaviour, $getter: Function, $setter: Function, $invoke: Function, $invoker: Function, $addProperty: Function):void;
        
        public Invoke($key: string, $param: any):void;
        
        public Invoke($key: string, $param: any, $param1: any):void;
        
        public Invoke($key: string, $param: any, $param1: any, $param2: any):void;
        
        public Get<T>($key: string):T;
        
        public GetInvoker($key: string):System.Action$1<any>;
        
        public Set<T>($key: string, $value: T):void;
        
        public AddProperty($key: string):void;
        
        public StartCoroutine($value: Function, $hasNext: Function):UnityEngine.Coroutine;
        
                    
    }
    
    interface ZepetoScriptBehaviourComponent extends UnityEngine.MonoBehaviour {
        
                    
    }
    
    interface ZepetoScriptInstance extends System.Object {
        
                    
    }
    
    class ZepetoScriptableObject extends UnityEngine.ScriptableObject {
        
        public get Script(): JavascriptAsset;
        
        public get Count(): number;
        
        public get IsReadOnly(): boolean;
        
        public get Keys(): System_Collections_Generic.ICollection$1<string>;
        
        public get Values(): System_Collections_Generic.ICollection$1<any>;
        
        public constructor();
        
        public OnBeforeSerialize():void;
        
        public OnAfterDeserialize():void;
        
        public GetEnumerator():System_Collections_Generic.IEnumerator$1<System_Collections_Generic.KeyValuePair$2<string, any>>;
        
        public Add($item: System_Collections_Generic.KeyValuePair$2<string, any>):void;
        
        public Clear():void;
        
        public Contains($item: System_Collections_Generic.KeyValuePair$2<string, any>):boolean;
        
        public CopyTo($array: System_Collections_Generic.KeyValuePair$2<string, any>[], $arrayIndex: number):void;
        
        public Remove($item: System_Collections_Generic.KeyValuePair$2<string, any>):boolean;
        
        public Add($key: string, $value: any):void;
        
        public ContainsKey($key: string):boolean;
        
        public Remove($key: string):boolean;
        
        public TryGetValue($key: string, $value: $Ref<any>):boolean;
        
        public get_Item($key: string):any;
        
        public set_Item($key: string, $value: any):void;
        
        public TryGetRuntimeValue($propertyName: string):boolean;
        
                    
    }
    
    interface JavascriptAsset extends UnityEngine.ScriptableObject {
        
                    
    }
    
    class StreamingAssets extends System.Object {
        
        public static AssetName: string;
        
        public constructor();
        
        public static Exists($path: string):boolean;
        
        public static Load($path: string):ArrayBuffer;
        
                    
    }
    
    class ZepetoScriptBuildManifest extends UnityEngine.ScriptableObject {
        
        public static ManifestVersion: string;
        
        public manifestVersion: string;
        
        public unityVersion: string;
        
        public identifier: string;
        
        public version: string;
        
        public scenes: string[];
        
        public scripts: string[];
        
        public assets: string[];
        
        public resources: string[];
        
        public streamingAssets: string[];
        
        public tags: string[];
        
        public layers: string[];
        
        public packages: string[];
        
        public collisionLayers: number[];
        
        public qualitySettings: string[];
        
        public canBuild: boolean;
        
        public lastUpdated: Date;
        
        public extensions: ZepetoScriptBuildManifestExtension[];
        
        public constructor();
        
                    
    }
    
    interface ZepetoScriptContext extends System.Object {
        
                    
    }
    
    interface ZepetoScriptBuildManifestExtension extends UnityEngine.ScriptableObject {
        
                    
    }
    
    class GameObjectExtension extends System.Object {
        
        public static IsDestroyed($gameObject: UnityEngine.GameObject):boolean;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface DateTime extends ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface IDictionary$2<TKey,TValue> {
        
                    
    }
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface KeyValuePair$2<TKey,TValue> extends System.ValueType {
        
                    
    }
    
    interface IEnumerator$1<T> {
        
                    
    }
    
    interface ICollection$1<T> {
        
                    
    }
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface IEnumerable$1<T> {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * MonoBehaviour is the base class from which every Unity script derives.
     */
    interface MonoBehaviour extends Behaviour {
        
                    
    }
    /**
     * Behaviours are Components that can be enabled or disabled.
     */
    interface Behaviour extends Component {
        
                    
    }
    /**
     * Base class for everything attached to GameObjects.
     */
    interface Component extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions.
     */
    interface Coroutine extends YieldInstruction {
        
                    
    }
    /**
     * Base class for all yield instructions.
     */
    interface YieldInstruction extends System.Object {
        
                    
    }
    /**
     * Options for how to send a message.
     */
    enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Bit mask that controls object destruction, saving and visibility in inspectors.
     */
    enum HideFlags { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle.
     */
    interface AssetBundle extends Object {
        
                    
    }
    
    interface GameObject {
        /** @extension ZEPETO.Script.GameObjectExtension */
        IsDestroyed():boolean;
        
                    
    }
    
}
declare module 'ZEPETO.Script.ZepetoScriptInstance' {

        
    
    enum Events { None = 0, Awake = 1, OnEnable = 2, Start = 4, FixedUpdate = 8, Update = 16, LateUpdate = 32, OnDisable = 64, OnDestroy = 128, OnCollisionEnter = 256, OnCollisionExit = 257, OnCollisionStay = 258, OnCollisionEnter2D = 272, OnCollisionExit2D = 273, OnCollisionStay2D = 274, OnTriggerEnter = 512, OnTriggerExit = 513, OnTriggerStay = 514, OnTriggerEnter2D = 528, OnTriggerExit2D = 529, OnTriggerStay2D = 530, OnControllerColliderHit = 768, OnGUI = 65536, OnMouseDown = 196608, OnMouseDrag = 196609, OnMouseUp = 196610, OnMouseEnter = 196611, OnMouseExit = 196612, OnMouseOver = 196613, OnMouseUpAsButton = 196614, OnApplicationFocus = 131072, OnApplicationPause = 262144, OnApplicationQuit = 524288, OnPreRender = 1048576, OnPostRender = 1048577, OnRenderImage = 1048578, OnRenderObject = 1048579, OnWillRenderObject = 1048580, OnPreCull = 1048581, OnAnimatorIK = 2097152, OnAnimatorMove = 2097153, OnDrawGizmos = 3145728, OnOpenedHome = 16777216, OnClosedHome = 33554432 }
    
}
declare module 'System.Collections' {

        
    
    interface IEnumerator {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'Puerts' {

    import * as System from 'System';
        
    
    interface GenericDelegate extends System.Object {
        
                    
    }
    
    interface ArrayBuffer extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Script.Extensions' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
    import * as ZEPETO_Script from 'ZEPETO.Script';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as ZEPETO_Script_ZepetoScriptContext from 'ZEPETO.Script.ZepetoScriptContext';
    import * as System_Threading_Tasks from 'System.Threading.Tasks';
    import * as ZEPETO_Script_Extensions_ZepetoScriptContextInitializer from 'ZEPETO.Script.Extensions.ZepetoScriptContextInitializer';
        
    
    class ZepetoScriptContextInitializer extends UnityEngine.ScriptableObject {
        
        public static InitializerScenePath: string;
        
        public static activeInitializer: ZepetoScriptContextInitializer;
        
        public assetBundle: UnityEngine.AssetBundle;
        
        public assets: ZEPETO_Script_Extensions_ZepetoScriptContextInitializer.Asset[];
        
        public resources: ZEPETO_Script_Extensions_ZepetoScriptContextInitializer.Asset[];
        
        public manifest: ZEPETO_Script.ZepetoScriptBuildManifest;
        
        public enableCustomTags: boolean;
        
        public enableCustomLayers: boolean;
        
        public enableResources: boolean;
        
        public get ResourcesMap(): System_Collections_Generic.Dictionary$2<string, System_Collections_Generic.List$1<UnityEngine.Object>>;
        
        public ContainsAsset($path: string):boolean;
        
        public LoadAsset($path: string):UnityEngine.Object;
        
        public Initialize($context: ZEPETO_Script.ZepetoScriptContext):void;
        
        public Terminate($context: ZEPETO_Script.ZepetoScriptContext):void;
        
        public GetExtensions():System_Collections_Generic.IEnumerable$1<ZEPETO_Script_ZepetoScriptContext.IExtension>;
        
        public static LoadFromFile($assetBundleFilePath: string):System_Threading_Tasks.Task$1<ZepetoScriptContextInitializer>;
        
        public static LoadFromMemory($assetBundleBytes: number[]):System_Threading_Tasks.Task$1<ZepetoScriptContextInitializer>;
        
                    
    }
    
}
declare module 'ZEPETO.Script.Extensions.ZepetoScriptContextInitializer' {

    import * as System from 'System';
        
    
    interface Asset extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Script.ZepetoScriptContext' {

        
    
    interface IExtension {
        
                    
    }
    
}
declare module 'System.Threading.Tasks' {

    import * as System from 'System';
        
    
    interface Task$1<TResult> extends Task {
        
                    
    }
    
    interface Task extends System.Object {
        
                    
    }
    
}

