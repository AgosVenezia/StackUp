//# signature=ZEPETO.Multiplay#072bff1f1f3dc0c80e0ae24cf174ebb1#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Multiplay' {

    import * as System from 'System';
    import * as RootNamespace from 'RootNamespace';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System_Threading_Tasks from 'System.Threading.Tasks';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections from 'System.Collections';
    import * as System_Collections_Specialized from 'System.Collections.Specialized';
        
    
    class DynamicSchema extends SchemaBase {
        
        public schemaName: string;
        
        public get FieldIndexes(): System_Collections_Generic.Dictionary$2<string, number>;
        
        public get Data(): System_Collections_Generic.Dictionary$2<number, any>;
        
        public get Count(): number;
        
        public get Keys(): System_Collections_Generic.Dictionary$2.KeyCollection<string, number>;
        
        public get Values(): System_Collections_Generic.Dictionary$2.ValueCollection<number, any>;
        
        public constructor($schemaRegistry: ISchemaRegistry);
        
        public constructor($schemaRegistry: ISchemaRegistry, $schemaName: string);
        
        public GetByIndex($index: number):any;
        
        public GetByIndex<T>($index: number):T;
        
        public ContainsKey($key: string):boolean;
        
        public TryGetValue($key: string, $value: $Ref<any>):boolean;
        
        public TryGetValue<T>($key: string, $value: $Ref<T>):boolean;
        
        public Set<T>($key: string, $value: T):void;
        
        public Get($key: string):DynamicSchema;
        
        public CreateDefaultValue($key: string, $defaultType?: System.Type):any;
        
        public GetObject($key: string, $defaultType?: System.Type, $createDefaultValue?: boolean):any;
        
        public Get<T>($key: string, $defaultValue?: T):T;
        
        public Get<T>($key: string, $createDefaultValue?: boolean):T;
        
        public To<T>():T;
        
        public get_Item($key: string):DynamicSchema;
        
        public GetEnumerator():System_Collections_Generic.IEnumerator$1<System_Collections_Generic.KeyValuePair$2<string, any>>;
        
        public static TypeofString():System.Type;
        
        public static TypeofSByte():System.Type;
        
        public static TypeofByte():System.Type;
        
        public static TypeofInt16():System.Type;
        
        public static TypeofUInt16():System.Type;
        
        public static TypeofInt32():System.Type;
        
        public static TypeofUInt32():System.Type;
        
        public static TypeofInt64():System.Type;
        
        public static TypeofUInt64():System.Type;
        
        public static TypeofFloat():System.Type;
        
        public static TypeofDouble():System.Type;
        
        public GetByIndex($index: number):any;
        
                    
    }
    
    class SchemaBase extends System.Object {
        
        public get __refId(): number;
        public set __refId(value: number);
        
        public get FieldInfos(): System_Collections_Generic.Dictionary$2<number, SchemaField>;
        
        public Decode($bytes: number[], $it: $Ref<number>, $referenceTracker?: ReferenceTracker):void;
        
        public add_OnChange($value: ChangeEventHandler):void;
        
        public remove_OnChange($value: ChangeEventHandler):void;
        
        public add_OnRemove($value: RemoveEventHandler):void;
        
        public remove_OnRemove($value: RemoveEventHandler):void;
        
        public GetByIndex($index: number):any;
        
        public SetByIndex($index: number, $value: any):void;
        
        public DeleteByIndex($index: number):void;
        
        public SetEventHandlers($previousInstance: ISchema):void;
        
        public OnChange;
        
        public OnRemove;
        
                    
    }
    
    class ZepetoMultiplay$1<T> extends ZepetoMultiplayBase {
        
        public add_RoomListRequested($value: System.Action$1<RequestedRoomData[]>):void;
        
        public remove_RoomListRequested($value: System.Action$1<RequestedRoomData[]>):void;
        
        public RequestRoomList():System_Threading_Tasks.Task;
        
        public RoomListRequested;
        
                    
    }
    
    class ZepetoMultiplayBase extends UnityEngine.MonoBehaviour {
        
        public static OnAwake: System.Action$1<ZepetoMultiplayBase>;
        
        public static OnDestroyed: System.Action$1<ZepetoMultiplayBase>;
        
        public roomOptions: number;
        
        public roomProperties: ZepetoMultiplayRoomProperties;
        
        public applicationId: string;
        
        public host: string;
        
        public port: number;
        
        public isSecure: boolean;
        
        public matchMakeHost: string;
        
        public authToken: string;
        
        public detectWeakSignalTerm: number;
        
        public uniqueId: string;
        
        public get RoomType(): RoomType;
        
        public get Room(): RoomBase;
        
        public get Options(): System_Collections_Generic.Dictionary$2<string, any>;
        
        public get Headers(): System_Collections_Generic.Dictionary$2<string, string>;
        
        public get IsConnected(): boolean;
        
        public add_RoomCreated($value: System.Action$1<RoomBase>):void;
        
        public remove_RoomCreated($value: System.Action$1<RoomBase>):void;
        
        public add_RoomJoined($value: System.Action$1<RoomBase>):void;
        
        public remove_RoomJoined($value: System.Action$1<RoomBase>):void;
        
        public add_RoomLeave($value: System.Action$1<RoomLeaveEvent>):void;
        
        public remove_RoomLeave($value: System.Action$1<RoomLeaveEvent>):void;
        
        public add_RoomReconnected($value: System.Action$1<RoomBase>):void;
        
        public remove_RoomReconnected($value: System.Action$1<RoomBase>):void;
        
        public add_RoomError($value: System.Action$1<RoomErrorEvent>):void;
        
        public remove_RoomError($value: System.Action$1<RoomErrorEvent>):void;
        
        public add_RoomWeakConnection($value: System.Action$1<RoomWeakConnectionEvent>):void;
        
        public remove_RoomWeakConnection($value: System.Action$1<RoomWeakConnectionEvent>):void;
        
        public TryConnect():System_Threading_Tasks.Task;
        
        public TryReconnect():System_Threading_Tasks.Task;
        
        public RoomCreated;
        
        public RoomJoined;
        
        public RoomLeave;
        
        public RoomReconnected;
        
        public RoomError;
        
        public RoomWeakConnection;
        
                    
    }
    
    class RequestedRoomData extends System.Object {
        
        public roomName: string;
        
        public roomId: string;
        
        public applicationId: string;
        
        public worldId: string;
        
        public worldVersion: number;
        
        public owner: string;
        
        public clientCount: number;
        
        public maxClients: number;
        
        public isPrivate: boolean;
        
        public users: string[];
        
        public constructor();
        
                    
    }
    
    class Room$1<T> extends RoomBase {
        
        public get StateSchema(): string;
        
        public get State(): T;
        
        public constructor($schemaRegistry: ColyseusClientBase, $name: string);
        
        public add_OnStateChange($value: Room$1.RoomOnStateChangeEventHandler<T>):void;
        
        public remove_OnStateChange($value: Room$1.RoomOnStateChangeEventHandler<T>):void;
        
        public OnStateChange;
        
                    
    }
    
    class RoomBase extends System.Object {
        
        public Id: string;
        
        public Name: string;
        
        public SessionId: string;
        
        public metadata: string;
        
        public applicationId: string;
        
        public worldId: string;
        
        public worldVersion: number;
        
        public uniqueId: string;
        
        public SerializerId: string;
        
        public get Connection(): TransportBase;
        
        public get IsConnected(): boolean;
        
        public add_OnJoin($value: ColyseusOpenEventHandler):void;
        
        public remove_OnJoin($value: ColyseusOpenEventHandler):void;
        
        public add_OnError($value: ColyseusErrorEventHandler):void;
        
        public remove_OnError($value: ColyseusErrorEventHandler):void;
        
        public add_OnLeave($value: ColyseusCloseEventHandler):void;
        
        public remove_OnLeave($value: ColyseusCloseEventHandler):void;
        
        public add_OnWeakConnection($value: ColyseusWeakConnectionEventHandler):void;
        
        public remove_OnWeakConnection($value: ColyseusWeakConnectionEventHandler):void;
        
        public Connect():System_Threading_Tasks.Task;
        
        public Leave($consented?: boolean):System_Threading_Tasks.Task;
        
        public SetConnection($connection: TransportBase, $messageHandle?: boolean):void;
        
        public Invoke($method: string, $message?: any):System_Threading_Tasks.Task;
        
        public Invoke<T>($method: string, $message?: any):System_Threading_Tasks.Task$1<T>;
        
        public Send($type: number):System_Threading_Tasks.Task;
        
        public Send($type: number, $message: any):System_Threading_Tasks.Task;
        
        public Send($type: number, $message: any):System_Threading_Tasks.Task;
        
        public Send($type: string):System_Threading_Tasks.Task;
        
        public Send($type: string, $message: any):System_Threading_Tasks.Task;
        
        public ParseMessage($bytes: number[]):System_Threading_Tasks.Task;
        
        public SetState($encodedState: number[], $offset: number):void;
        
        public AddMessageHandler<TMessageType>($type: string, $handler: System.Action$1<TMessageType>):void;
        
        public AddMessageHandler<TMessageType>($type: number, $handler: System.Action$1<TMessageType>):void;
        
        public AddMessageHandler($type: string, $handler: System.Action$1<any>):void;
        
        public AddMessageHandler($type: number, $handler: System.Action$1<any>):void;
        
        public AddMessageHandler($messageType: System.Type, $type: string, $handler: System.Action$1<any>):void;
        
        public AddMessageHandler($messageType: System.Type, $type: number, $handler: System.Action$1<any>):void;
        
        public OnJoin;
        
        public OnError;
        
        public OnLeave;
        
        public OnWeakConnection;
        
                    
    }
    
    interface ColyseusClientBase extends System.Object {
        
                    
    }
    
    class MapSchema$1<T> extends SchemaCollectionBase {
        
        public Items: System_Collections_Specialized.OrderedDictionary;
        
        public get HasSchemaChild(): boolean;
        
        public get Count(): number;
        
        public get Keys(): System_Collections.ICollection;
        
        public get Values(): System_Collections.ICollection;
        
        public constructor();
        
        public constructor($items?: System_Collections_Specialized.OrderedDictionary);
        
        public add_OnAdd($value: KeyValueEventHandler$2<T, string>):void;
        
        public remove_OnAdd($value: KeyValueEventHandler$2<T, string>):void;
        
        public add_OnChange($value: KeyValueEventHandler$2<T, string>):void;
        
        public remove_OnChange($value: KeyValueEventHandler$2<T, string>):void;
        
        public add_OnRemove($value: KeyValueEventHandler$2<T, string>):void;
        
        public remove_OnRemove($value: KeyValueEventHandler$2<T, string>):void;
        
        public SetIndex($index: number, $dynamicIndex: any):void;
        
        public SetByIndex($index: number, $dynamicIndex: any, $value: any):void;
        
        public GetIndex($index: number):any;
        
        public GetByIndex($index: number):any;
        
        public SetByIndex($index: number, $value: any):void;
        
        public DeleteByIndex($index: number):void;
        
        public Clone():ISchemaCollection;
        
        public GetTypeDefaultValue():any;
        
        public ContainsKey($key: any):boolean;
        
        public get_Item($key: string):T;
        
        public set_Item($key: string, $value: T):void;
        
        public get_Item($key: any):any;
        
        public set_Item($key: any, $value: any):void;
        
        public GetItems():System_Collections.IDictionary;
        
        public Add($item: System_Collections_Generic.KeyValuePair$2<string, T>):void;
        
        public Clear($refs?: ReferenceTracker):void;
        
        public Contains($item: System_Collections_Generic.KeyValuePair$2<string, T>):boolean;
        
        public Remove($item: System_Collections_Generic.KeyValuePair$2<string, T>):boolean;
        
        public ContainsKey($key: string):boolean;
        
        public Add($key: string, $value: T):void;
        
        public Remove($key: string):boolean;
        
        public TryGetValue($key: string, $value: $Ref<T>):boolean;
        
        public SetItems($items: any):void;
        
        public ForEach($action: System.Action$2<string, T>):void;
        
        public TriggerAll():void;
        
        public SetEventHandlers($previousInstance: ISchema):void;
        
        public InvokeOnAdd($item: any, $index: any):void;
        
        public InvokeOnChange($item: any, $index: any):void;
        
        public InvokeOnRemove($item: any, $index: any):void;
        
        public OnAdd;
        
        public OnChange;
        
        public OnRemove;
        
                    
    }
    
    interface SchemaCollectionBase extends System.Object {
        
                    
    }
    
    type KeyValueEventHandler$2<TValue,TKey> = (value: TValue, key: TKey) => void;
    
    interface ISchemaCollection {
        
                    
    }
    
    interface ReferenceTracker extends System.Object {
        
                    
    }
    
    interface ISchema {
        
                    
    }
    
    class ArraySchema$1<T> extends SchemaCollectionBase {
        
        public Items: System_Collections_Generic.Dictionary$2<number, T>;
        
        public get HasSchemaChild(): boolean;
        
        public get Count(): number;
        
        public constructor();
        
        public constructor($items?: System_Collections_Generic.Dictionary$2<number, T>);
        
        public add_OnAdd($value: KeyValueEventHandler$2<T, number>):void;
        
        public remove_OnAdd($value: KeyValueEventHandler$2<T, number>):void;
        
        public add_OnChange($value: KeyValueEventHandler$2<T, number>):void;
        
        public remove_OnChange($value: KeyValueEventHandler$2<T, number>):void;
        
        public add_OnRemove($value: KeyValueEventHandler$2<T, number>):void;
        
        public remove_OnRemove($value: KeyValueEventHandler$2<T, number>):void;
        
        public get_Item($index: number):T;
        
        public set_Item($index: number, $value: T):void;
        
        public SetByIndex($index: number, $dynamicIndex: any):void;
        
        public SetIndex($index: number, $dynamicIndex: any):void;
        
        public SetByIndex($index: number, $dynamicIndex: any, $value: any):void;
        
        public GetIndex($index: number):any;
        
        public GetByIndex($index: number):any;
        
        public DeleteByIndex($index: number):void;
        
        public Clear($refs?: ReferenceTracker):void;
        
        public Clone():ISchemaCollection;
        
        public GetChildType():System.Type;
        
        public GetTypeDefaultValue():any;
        
        public ContainsKey($key: any):boolean;
        
        public get_Item($key: any):any;
        
        public set_Item($key: any, $value: any):void;
        
        public GetItems():System_Collections.IDictionary;
        
        public SetItems($items: any):void;
        
        public TriggerAll():void;
        
        public SetEventHandlers($previousInstance: ISchema):void;
        
        public InvokeOnAdd($item: any, $index: any):void;
        
        public InvokeOnChange($item: any, $index: any):void;
        
        public InvokeOnRemove($item: any, $index: any):void;
        
        public ForEach($action: System.Action$1<T>):void;
        
        public OnAdd;
        
        public OnChange;
        
        public OnRemove;
        
                    
    }
    
    class ZepetoDynamicMultiplay extends ZepetoMultiplay$1<DynamicSchema> {
        
        public get Options(): System_Collections_Generic.Dictionary$2<string, any>;
        
        public constructor();
        
                    
    }
    
    interface ZepetoMultiplayRoomProperties extends System.Object {
        
                    
    }
    
    enum RoomType { Standard = 0, StandardWithTransform = 1, Sandbox = 2, SandboxSelfHosted = 3 }
    
    class RoomLeaveEvent extends System.Object {
        
        public Code: number;
        
        public Message: string;
        
        public constructor($code: number);
        
        public constructor($code: number, $message: string);
        
                    
    }
    
    class RoomErrorEvent extends System.Object {
        
        public Code: number;
        
        public Message: string;
        
        public constructor($code: number, $message: string);
        
                    
    }
    
    interface RoomWeakConnectionEvent extends System.Object {
        
                    
    }
    
    interface SchemaField extends System.Object {
        
                    
    }
    
    type ChangeEventHandler = (changes: System_Collections_Generic.List$1<DataChange>) => void;
    var ChangeEventHandler: {new (func: (changes: System_Collections_Generic.List$1<DataChange>) => void): ChangeEventHandler;}
    
    interface DataChange extends System.Object {
        
                    
    }
    
    type RemoveEventHandler = () => void;
    var RemoveEventHandler: {new (func: () => void): RemoveEventHandler;}
    
    class DynamicMapSchema extends MapSchema$1<DynamicSchema> {
        
        public constructor();
        
        public constructor($items: System_Collections_Specialized.OrderedDictionary);
        
        public Clone():ISchemaCollection;
        
                    
    }
    
    class DynamicArraySchema extends ArraySchema$1<DynamicSchema> {
        
        public constructor();
        
        public constructor($items: System_Collections_Generic.Dictionary$2<number, DynamicSchema>);
        
        public Clone():ISchemaCollection;
        
                    
    }
    
    interface ISchemaRegistry {
        
                    
    }
    
    interface TransportBase extends System.Object {
        
                    
    }
    
    type ColyseusOpenEventHandler = () => void;
    var ColyseusOpenEventHandler: {new (func: () => void): ColyseusOpenEventHandler;}
    
    type ColyseusErrorEventHandler = (code: number, message: string) => void;
    var ColyseusErrorEventHandler: {new (func: (code: number, message: string) => void): ColyseusErrorEventHandler;}
    
    type ColyseusCloseEventHandler = (code: number, roomId: string, message: string) => void;
    var ColyseusCloseEventHandler: {new (func: (code: number, roomId: string, message: string) => void): ColyseusCloseEventHandler;}
    
    type ColyseusWeakConnectionEventHandler = (isRecover: boolean) => void;
    var ColyseusWeakConnectionEventHandler: {new (func: (isRecover: boolean) => void): ColyseusWeakConnectionEventHandler;}
    
    class RoomData extends System.Object {
        
        public constructor();
        
        public Add($k: string, $v: any):void;
        
        public Get($k: string):any;
        
        public GetObject():any;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface UInt16 extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
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
    
}
declare module 'System.Threading.Tasks' {

    import * as System from 'System';
        
    
    interface Task extends System.Object {
        
                    
    }
    
    interface Task$1<TResult> extends Task {
        
                    
    }
    
}
declare module 'ZEPETO.Multiplay.Room$1' {

    import * as System from 'System';
        
    
    type RoomOnStateChangeEventHandler<T> = (state: T, isFirstState: boolean) => void;
    
}
declare module 'System.Collections.Specialized' {

    import * as System from 'System';
        
    
    interface OrderedDictionary extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IDictionary {
        
                    
    }
    
    interface ICollection {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface KeyValuePair$2<TKey,TValue> extends System.ValueType {
        
                    
    }
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface IEnumerator$1<T> {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic.Dictionary$2' {

    import * as System from 'System';
        
    
    interface KeyCollection<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface ValueCollection<TKey,TValue> extends System.Object {
        
                    
    }
    
}

