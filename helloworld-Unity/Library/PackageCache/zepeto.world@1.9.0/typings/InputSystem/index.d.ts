//# signature=Unity.InputSystem#bab196de7b87f17c6fafc73e292e2e15#0.0.4
// @ts-nocheck
declare module 'UnityEngine.InputSystem' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_InputSystem_Utilities from 'UnityEngine.InputSystem.Utilities';
    import * as UnityEngine_InputSystem_InputAction from 'UnityEngine.InputSystem.InputAction';
    import * as UnityEngine_InputSystem_PlayerInput from 'UnityEngine.InputSystem.PlayerInput';
    import * as UnityEngine_InputSystem_UI from 'UnityEngine.InputSystem.UI';
    import * as UnityEngine_InputSystem_Users from 'UnityEngine.InputSystem.Users';
        
    
    class InputActionAsset extends UnityEngine.ScriptableObject {
        
        public static Extension: string;
        
        public get enabled(): boolean;
        
        public get actionMaps(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputActionMap>;
        
        public get controlSchemes(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControlScheme>;
        
        public get bindingMask(): System.Nullable$1<InputBinding>;
        public set bindingMask(value: System.Nullable$1<InputBinding>);
        
        public get devices(): System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>;
        public set devices(value: System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>);
        
        public constructor();
        
        public get_Item($actionNameOrId: string):InputAction;
        
        public ToJson():string;
        
        public LoadFromJson($json: string):void;
        
        public static FromJson($json: string):InputActionAsset;
        
        public FindAction($actionNameOrId: string, $throwIfNotFound?: boolean):InputAction;
        
        public FindActionMap($nameOrId: string, $throwIfNotFound?: boolean):InputActionMap;
        
        public FindActionMap($id: System.Guid):InputActionMap;
        
        public FindAction($guid: System.Guid):InputAction;
        
        public FindControlSchemeIndex($name: string):number;
        
        public FindControlScheme($name: string):System.Nullable$1<InputControlScheme>;
        
        public Enable():void;
        
        public Disable():void;
        
        public Contains($action: InputAction):boolean;
        
        public GetEnumerator():System_Collections_Generic.IEnumerator$1<InputAction>;
        
                    
    }
    
    class InputActionMap extends System.Object {
        
        public get name(): string;
        
        public get asset(): InputActionAsset;
        
        public get id(): System.Guid;
        
        public get enabled(): boolean;
        
        public get actions(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputAction>;
        
        public get bindings(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputBinding>;
        
        public get controlSchemes(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControlScheme>;
        
        public get bindingMask(): System.Nullable$1<InputBinding>;
        public set bindingMask(value: System.Nullable$1<InputBinding>);
        
        public get devices(): System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>;
        public set devices(value: System.Nullable$1<UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>>);
        
        public constructor();
        
        public constructor($name: string);
        
        public get_Item($actionNameOrId: string):InputAction;
        
        public add_actionTriggered($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public remove_actionTriggered($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public Dispose():void;
        
        public FindAction($nameOrId: string, $throwIfNotFound?: boolean):InputAction;
        
        public FindAction($id: System.Guid):InputAction;
        
        public IsUsableWithDevice($device: InputDevice):boolean;
        
        public Enable():void;
        
        public Disable():void;
        
        public Clone():InputActionMap;
        
        public Contains($action: InputAction):boolean;
        
        public ToString():string;
        
        public GetEnumerator():System_Collections_Generic.IEnumerator$1<InputAction>;
        
        public static FromJson($json: string):InputActionMap[];
        
        public static ToJson($maps: System_Collections_Generic.IEnumerable$1<InputActionMap>):string;
        
        public ToJson():string;
        
        public OnBeforeSerialize():void;
        
        public OnAfterDeserialize():void;
        
        public actionTriggered;
        
                    
    }
    
    interface InputControlScheme extends System.ValueType {
        
                    
    }
    
    interface InputBinding extends System.ValueType {
        
                    
    }
    
    interface InputDevice extends InputControl {
        
                    
    }
    
    interface InputControl extends System.Object {
        
                    
    }
    
    class InputAction extends System.Object {
        
        public get name(): string;
        
        public get type(): InputActionType;
        
        public get id(): System.Guid;
        
        public get expectedControlType(): string;
        public set expectedControlType(value: string);
        
        public get processors(): string;
        
        public get interactions(): string;
        
        public get actionMap(): InputActionMap;
        
        public get bindingMask(): System.Nullable$1<InputBinding>;
        public set bindingMask(value: System.Nullable$1<InputBinding>);
        
        public get bindings(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputBinding>;
        
        public get controls(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputControl>;
        
        public get phase(): InputActionPhase;
        
        public get enabled(): boolean;
        
        public get triggered(): boolean;
        
        public get activeControl(): InputControl;
        
        public constructor();
        
        public constructor($name?: string, $type?: InputActionType, $binding?: string, $interactions?: string, $processors?: string, $expectedControlType?: string);
        
        public add_started($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public remove_started($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public add_canceled($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public remove_canceled($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public add_performed($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public remove_performed($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public Dispose():void;
        
        public ToString():string;
        
        public Enable():void;
        
        public Disable():void;
        
        public Clone():InputAction;
        
        public ReadValue<TValue>():TValue;
        
        public ReadValueAsObject():any;
        
        public started;
        
        public canceled;
        
        public performed;
        
                    
    }
    
    enum InputActionType { Value = 0, Button = 1, PassThrough = 2 }
    
    enum InputActionPhase { Disabled = 0, Waiting = 1, Started = 2, Performed = 3, Canceled = 4 }
    
    interface IInputInteraction {
        
                    
    }
    
    class PlayerInput extends UnityEngine.MonoBehaviour {
        
        public static DeviceLostMessage: string;
        
        public static DeviceRegainedMessage: string;
        
        public static ControlsChangedMessage: string;
        
        public get inputIsActive(): boolean;
        
        public get playerIndex(): number;
        
        public get splitScreenIndex(): number;
        
        public get actions(): InputActionAsset;
        public set actions(value: InputActionAsset);
        
        public get currentControlScheme(): string;
        
        public get defaultControlScheme(): string;
        public set defaultControlScheme(value: string);
        
        public get neverAutoSwitchControlSchemes(): boolean;
        public set neverAutoSwitchControlSchemes(value: boolean);
        
        public get currentActionMap(): InputActionMap;
        public set currentActionMap(value: InputActionMap);
        
        public get defaultActionMap(): string;
        public set defaultActionMap(value: string);
        
        public get notificationBehavior(): PlayerNotifications;
        public set notificationBehavior(value: PlayerNotifications);
        
        public get actionEvents(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_PlayerInput.ActionEvent>;
        public set actionEvents(value: UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<UnityEngine_InputSystem_PlayerInput.ActionEvent>);
        
        public get deviceLostEvent(): UnityEngine_InputSystem_PlayerInput.DeviceLostEvent;
        
        public get deviceRegainedEvent(): UnityEngine_InputSystem_PlayerInput.DeviceRegainedEvent;
        
        public get controlsChangedEvent(): UnityEngine_InputSystem_PlayerInput.ControlsChangedEvent;
        
        public get camera(): UnityEngine.Camera;
        public set camera(value: UnityEngine.Camera);
        
        public get uiInputModule(): UnityEngine_InputSystem_UI.InputSystemUIInputModule;
        public set uiInputModule(value: UnityEngine_InputSystem_UI.InputSystemUIInputModule);
        
        public get user(): UnityEngine_InputSystem_Users.InputUser;
        
        public get devices(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<InputDevice>;
        
        public get hasMissingRequiredDevices(): boolean;
        
        public static get all(): UnityEngine_InputSystem_Utilities.ReadOnlyArray$1<PlayerInput>;
        
        public static get isSinglePlayer(): boolean;
        
        public constructor();
        
        public add_onActionTriggered($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public remove_onActionTriggered($value: System.Action$1<UnityEngine_InputSystem_InputAction.CallbackContext>):void;
        
        public add_onDeviceLost($value: System.Action$1<PlayerInput>):void;
        
        public remove_onDeviceLost($value: System.Action$1<PlayerInput>):void;
        
        public add_onDeviceRegained($value: System.Action$1<PlayerInput>):void;
        
        public remove_onDeviceRegained($value: System.Action$1<PlayerInput>):void;
        
        public add_onControlsChanged($value: System.Action$1<PlayerInput>):void;
        
        public remove_onControlsChanged($value: System.Action$1<PlayerInput>):void;
        
        public ActivateInput():void;
        
        public DeactivateInput():void;
        
        public SwitchCurrentControlScheme(...devices: InputDevice[]):boolean;
        
        public SwitchCurrentControlScheme($controlScheme: string, ...devices: InputDevice[]):void;
        
        public SwitchCurrentActionMap($mapNameOrId: string):void;
        
        public static GetPlayerByIndex($playerIndex: number):PlayerInput;
        
        public static FindFirstPairedToDevice($device: InputDevice):PlayerInput;
        
        public static Instantiate($prefab: UnityEngine.GameObject, $playerIndex?: number, $controlScheme?: string, $splitScreenIndex?: number, $pairWithDevice?: InputDevice):PlayerInput;
        
        public static Instantiate($prefab: UnityEngine.GameObject, $playerIndex?: number, $controlScheme?: string, $splitScreenIndex?: number, ...pairWithDevices: InputDevice[]):PlayerInput;
        
        public DebugLogAction($context: UnityEngine_InputSystem_InputAction.CallbackContext):void;
        
        public onActionTriggered;
        
        public onDeviceLost;
        
        public onDeviceRegained;
        
        public onControlsChanged;
        
                    
    }
    
    enum PlayerNotifications { SendMessages = 0, BroadcastMessages = 1, InvokeUnityEvents = 2, InvokeCSharpEvents = 3 }
    
    interface InputActionReference extends UnityEngine.ScriptableObject {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
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
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Nullable$1<T> extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Guid extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem.Utilities' {

    import * as System from 'System';
        
    
    interface ReadOnlyArray$1<TValue> extends System.ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

        
    
    interface IEnumerator$1<T> {
        
                    
    }
    
    interface IEnumerable$1<T> {
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem.InputAction' {

    import * as System from 'System';
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem';
        
    
    class CallbackContext extends System.ValueType {
        
        public get phase(): UnityEngine_InputSystem.InputActionPhase;
        
        public get started(): boolean;
        
        public get performed(): boolean;
        
        public get canceled(): boolean;
        
        public get action(): UnityEngine_InputSystem.InputAction;
        
        public get control(): UnityEngine_InputSystem.InputControl;
        
        public get interaction(): UnityEngine_InputSystem.IInputInteraction;
        
        public get time(): number;
        
        public get startTime(): number;
        
        public get duration(): number;
        
        public get valueType(): System.Type;
        
        public get valueSizeInBytes(): number;
        
        public ReadValue<TValue>():TValue;
        
        public ReadValueAsButton():boolean;
        
        public ReadValueAsObject():any;
        
        public ToString():string;
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem.PlayerInput' {

    import * as UnityEngine_Events from 'UnityEngine.Events';
        
    
    interface ActionEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem_InputAction.CallbackContext> {
        
                    
    }
    
    interface DeviceLostEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {
        
                    
    }
    
    interface DeviceRegainedEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {
        
                    
    }
    
    interface ControlsChangedEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_InputSystem.PlayerInput> {
        
                    
    }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * One argument version of UnityEvent.
     */
    interface UnityEvent$1<T0> extends UnityEventBase {
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem.UI' {

    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems';
    import * as System from 'System';
    import * as UnityEngine_InputSystem from 'UnityEngine.InputSystem';
        
    
    class InputSystemUIInputModule extends UnityEngine_EventSystems.BaseInputModule {
        
        public get deselectOnBackgroundClick(): boolean;
        public set deselectOnBackgroundClick(value: boolean);
        
        public get pointerBehavior(): UIPointerBehavior;
        public set pointerBehavior(value: UIPointerBehavior);
        
        public get moveRepeatDelay(): number;
        public set moveRepeatDelay(value: number);
        
        public get moveRepeatRate(): number;
        public set moveRepeatRate(value: number);
        
        public get trackedDeviceDragThresholdMultiplier(): number;
        public set trackedDeviceDragThresholdMultiplier(value: number);
        
        public get point(): UnityEngine_InputSystem.InputActionReference;
        public set point(value: UnityEngine_InputSystem.InputActionReference);
        
        public get scrollWheel(): UnityEngine_InputSystem.InputActionReference;
        public set scrollWheel(value: UnityEngine_InputSystem.InputActionReference);
        
        public get leftClick(): UnityEngine_InputSystem.InputActionReference;
        public set leftClick(value: UnityEngine_InputSystem.InputActionReference);
        
        public get middleClick(): UnityEngine_InputSystem.InputActionReference;
        public set middleClick(value: UnityEngine_InputSystem.InputActionReference);
        
        public get rightClick(): UnityEngine_InputSystem.InputActionReference;
        public set rightClick(value: UnityEngine_InputSystem.InputActionReference);
        
        public get move(): UnityEngine_InputSystem.InputActionReference;
        public set move(value: UnityEngine_InputSystem.InputActionReference);
        
        public get submit(): UnityEngine_InputSystem.InputActionReference;
        public set submit(value: UnityEngine_InputSystem.InputActionReference);
        
        public get cancel(): UnityEngine_InputSystem.InputActionReference;
        public set cancel(value: UnityEngine_InputSystem.InputActionReference);
        
        public get trackedDeviceOrientation(): UnityEngine_InputSystem.InputActionReference;
        public set trackedDeviceOrientation(value: UnityEngine_InputSystem.InputActionReference);
        
        public get trackedDevicePosition(): UnityEngine_InputSystem.InputActionReference;
        public set trackedDevicePosition(value: UnityEngine_InputSystem.InputActionReference);
        
        public get actionsAsset(): UnityEngine_InputSystem.InputActionAsset;
        public set actionsAsset(value: UnityEngine_InputSystem.InputActionAsset);
        
        public constructor();
        
        public ActivateModule():void;
        
        public IsPointerOverGameObject($pointerOrTouchId: number):boolean;
        
        public Process():void;
        
                    
    }
    
    enum UIPointerBehavior { SingleMouseOrPenButMultiTouchAndTrack = 0, SingleUnifiedPointer = 1, AllPointersAsIs = 2 }
    
}
declare module 'UnityEngine.EventSystems' {

    import * as UnityEngine from 'UnityEngine';
        
    
    interface BaseInputModule extends UIBehaviour {
        
                    
    }
    
    interface UIBehaviour extends UnityEngine.MonoBehaviour {
        
                    
    }
    
}
declare module 'UnityEngine.InputSystem.Users' {

    import * as System from 'System';
        
    
    interface InputUser extends System.ValueType {
        
                    
    }
    
}

