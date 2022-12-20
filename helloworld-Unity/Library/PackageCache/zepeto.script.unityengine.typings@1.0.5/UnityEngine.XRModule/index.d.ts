//# signature=UnityEngine.XRModule#806f5799950d0ff7803db44db34d5971#0.0.4
// @ts-nocheck
declare module 'UnityEngine.XR' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_XR_XRDisplaySubsystem from 'UnityEngine.XR.XRDisplaySubsystem';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
        
    /**
     * A collection of methods and properties for accessing XR input devices by their XR Node representation.
     */
    class InputTracking extends System.Object {
        
        public static add_trackingAcquired($value: System.Action$1<XRNodeState>):void;
        
        public static remove_trackingAcquired($value: System.Action$1<XRNodeState>):void;
        
        public static add_trackingLost($value: System.Action$1<XRNodeState>):void;
        
        public static remove_trackingLost($value: System.Action$1<XRNodeState>):void;
        
        public static add_nodeAdded($value: System.Action$1<XRNodeState>):void;
        
        public static remove_nodeAdded($value: System.Action$1<XRNodeState>):void;
        
        public static add_nodeRemoved($value: System.Action$1<XRNodeState>):void;
        
        public static remove_nodeRemoved($value: System.Action$1<XRNodeState>):void;
        
        public static GetNodeStates($nodeStates: System_Collections_Generic.List$1<XRNodeState>):void;
        
        public static trackingAcquired;
        
        public static trackingLost;
        
        public static nodeAdded;
        
        public static nodeRemoved;
        
                    
    }
    
    class XRNodeState extends System.ValueType {
        /**
         * The unique identifier of the tracked node.
         */
        public get uniqueID(): bigint;
        public set uniqueID(value: bigint);
        /**
         * The type of the tracked node as specified in XR.XRNode.
         */
        public get nodeType(): XRNode;
        public set nodeType(value: XRNode);
        /**
         * Set to true if the node is presently being tracked by the underlying XR system,
         * and false if the node is not presently being tracked by the underlying XR system.
         */
        public get tracked(): boolean;
        public set tracked(value: boolean);
        /**
         * Sets the vector representing the current position of the tracked node.
         */
        public set position(value: UnityEngine.Vector3);
        /**
         * Sets the quaternion representing the current rotation of the tracked node.
         */
        public set rotation(value: UnityEngine.Quaternion);
        /**
         * Sets the vector representing the current velocity of the tracked node.
         */
        public set velocity(value: UnityEngine.Vector3);
        /**
         * Sets the vector representing the current angular velocity of the tracked node.
         */
        public set angularVelocity(value: UnityEngine.Vector3);
        /**
         * Sets the vector representing the current acceleration of the tracked node.
         */
        public set acceleration(value: UnityEngine.Vector3);
        /**
         * Sets the vector representing the current angular acceleration of the tracked node.
         */
        public set angularAcceleration(value: UnityEngine.Vector3);
        /**
         * Attempt to retrieve a vector representing the current position of the tracked node.
         * @returns True if the position was set in the output parameter. False if the position is not available due to limitations of the underlying platform or if the node is not presently tracked.
         */
        public TryGetPosition($position: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Attempt to retrieve a quaternion representing the current rotation of the tracked node.
         * @returns True if the rotation was set in the output parameter. False if the rotation is not available due to limitations of the underlying platform or if the node is not presently tracked.
         */
        public TryGetRotation($rotation: $Ref<UnityEngine.Quaternion>):boolean;
        /**
         * Attempt to retrieve a vector representing the current velocity of the tracked node.
         * @returns True if the velocity was set in the output parameter. False if the velocity is not available due to limitations of the underlying platform or if the node is not presently tracked.
         */
        public TryGetVelocity($velocity: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Attempt to retrieve a Vector3 representing the current angular velocity of the tracked node.
         * @returns True if the angular velocity was set in the output parameter. False if the angular velocity is not available due to limitations of the underlying platform or if the node is not presently tracked.
         */
        public TryGetAngularVelocity($angularVelocity: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Attempt to retrieve a vector representing the current acceleration of the tracked node.
         * @returns True if the acceleration was set in the output parameter. False if the acceleration is not available due to limitations of the underlying platform or if the node is not presently tracked.
         */
        public TryGetAcceleration($acceleration: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Attempt to retrieve a Vector3 representing the current angular acceleration of the tracked node.
         * @returns True if the angular acceleration was set in the output parameter. False if the angular acceleration is not available due to limitations of the underlying platform or if the node is not presently tracked.
         */
        public TryGetAngularAcceleration($angularAcceleration: $Ref<UnityEngine.Vector3>):boolean;
        
        public get_Clone(): XRNodeState;            
    }
    /**
     * Enumeration of XR nodes which can be updated by XR input or sent haptic data.
     */
    enum XRNode { LeftEye = 0, RightEye = 1, CenterEye = 2, Head = 3, LeftHand = 4, RightHand = 5, GameController = 6, TrackingReference = 7, HardwareTracker = 8 }
    /**
     * Describes the haptic capabilities of the device at an XR.XRNode in the XR input subsystem.
     */
    class HapticCapabilities extends System.ValueType {
        /**
         * The number of channels that this device plays back haptic data.
         */
        public get numChannels(): number;
        /**
         * True if this device supports sending a haptic impulse.
         */
        public get supportsImpulse(): boolean;
        /**
         * True if this device supports sending a haptic buffer.
         */
        public get supportsBuffer(): boolean;
        /**
         * The frequency (in Hz) that this device plays back buffered haptic data.
         */
        public get bufferFrequencyHz(): number;
        /**
         * The maximum amount of data that can be sent to an InputDevice via InputDevice.SendHapticBuffer.
         */
        public get bufferMaxSize(): number;
        /**
         * The optimal buffer size an InputDevice expects to be sent via InputDevice.SendHapticBuffer in order to provide a continuous rumble between individual frames.
         */
        public get bufferOptimalSize(): number;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: HapticCapabilities):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($a: HapticCapabilities, $b: HapticCapabilities):boolean;
        
        public static op_Inequality($a: HapticCapabilities, $b: HapticCapabilities):boolean;
        
                    
    }
    /**
     * Enumeration describing the role of a XR.InputDevice in providing input.
     */
    enum InputDeviceRole { Unknown = 0, Generic = 1, LeftHanded = 2, RightHanded = 3, GameController = 4, TrackingReference = 5, HardwareTracker = 6, LegacyController = 7 }
    /**
     * A set of bit flags describing XR.InputDevice characteristics.
     */
    enum InputDeviceCharacteristics { None = 0, HeadMounted = 1, Camera = 2, HeldInHand = 4, HandTracking = 8, EyeTracking = 16, TrackedDevice = 32, Controller = 64, TrackingReference = 128, Left = 256, Right = 512, Simulated6DOF = 1024 }
    /**
     * Represents the values being tracked for this device.
     */
    enum InputTrackingState { None = 0, Position = 1, Rotation = 2, Velocity = 4, AngularVelocity = 8, Acceleration = 16, AngularAcceleration = 32, All = 63 }
    /**
     * Defines a generic usage that maps to an input feature on a device. Use the As method to turn into a generic usage.
     */
    class InputFeatureUsage extends System.ValueType {
        /**
         * The string name of this usage feature; used internally to map to an input feature on a device.
         */
        public get name(): string;
        /**
         * The type of this usage feature; used internally to map to an input feature on a device.
         */
        public get type(): System.Type;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: InputFeatureUsage):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($a: InputFeatureUsage, $b: InputFeatureUsage):boolean;
        
        public static op_Inequality($a: InputFeatureUsage, $b: InputFeatureUsage):boolean;
        /**
         * Returns the generic version of this type for retrieving a feature value from a device.
         */
        public As<T>():InputFeatureUsage$1<T>;
        
                    
    }
    /**
     * Defines a generic usage that maps to an input feature on a device.
     */
    interface InputFeatureUsage$1<T> extends System.ValueType {
        
                    
    }
    /**
     * Defines static variables that are used to retrieve input features from XR.InputDevice.TryGetFeatureValue.
     */
    class CommonUsages extends System.Object {
        /**
         * Informs to the developer whether the device is currently being tracked.
         */
        public static isTracked: InputFeatureUsage$1<boolean>;
        /**
         * The primary face button being pressed on a device, or sole button if only one is available.
         */
        public static primaryButton: InputFeatureUsage$1<boolean>;
        /**
         * The primary face button being touched on a device.
         */
        public static primaryTouch: InputFeatureUsage$1<boolean>;
        /**
         * The secondary face button being pressed on a device.
         */
        public static secondaryButton: InputFeatureUsage$1<boolean>;
        /**
         * The secondary face button being touched on a device.
         */
        public static secondaryTouch: InputFeatureUsage$1<boolean>;
        /**
         * A binary measure of whether the device is being gripped.
         */
        public static gripButton: InputFeatureUsage$1<boolean>;
        /**
         * A binary measure of whether the index finger is activating the trigger.
         */
        public static triggerButton: InputFeatureUsage$1<boolean>;
        /**
         * Represents a menu button, used to pause, go back, or otherwise exit gameplay.
         */
        public static menuButton: InputFeatureUsage$1<boolean>;
        /**
         * Represents the primary 2D axis being clicked or otherwise depressed.
         */
        public static primary2DAxisClick: InputFeatureUsage$1<boolean>;
        /**
         * Represents the primary 2D axis being touched.
         */
        public static primary2DAxisTouch: InputFeatureUsage$1<boolean>;
        /**
         * Represents the secondary 2D axis being clicked or otherwise depressed.
         */
        public static secondary2DAxisClick: InputFeatureUsage$1<boolean>;
        /**
         * Represents the secondary 2D axis being touched.
         */
        public static secondary2DAxisTouch: InputFeatureUsage$1<boolean>;
        /**
         * Use this property to test whether the user is currently wearing and/or interacting with the XR device. The exact behavior of this property varies with each type of device: some devices have a sensor specifically to detect user proximity, however you can reasonably infer that a user is present with the device when the property is UserPresenceState.Present.
         */
        public static userPresence: InputFeatureUsage$1<boolean>;
        /**
         * Represents the values being tracked for this device.
         */
        public static trackingState: InputFeatureUsage$1<InputTrackingState>;
        /**
         * Value representing the current battery life of this device.
         */
        public static batteryLevel: InputFeatureUsage$1<number>;
        /**
         * A trigger-like control, pressed with the index finger.
         */
        public static trigger: InputFeatureUsage$1<number>;
        /**
         * Represents the users grip on the controller.
         */
        public static grip: InputFeatureUsage$1<number>;
        /**
         * The primary touchpad or joystick on a device.
         */
        public static primary2DAxis: InputFeatureUsage$1<UnityEngine.Vector2>;
        /**
         * A secondary touchpad or joystick on a device.
         */
        public static secondary2DAxis: InputFeatureUsage$1<UnityEngine.Vector2>;
        /**
         * The position of the device.
         */
        public static devicePosition: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The position of the left eye on this device.
         */
        public static leftEyePosition: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The position of the right eye on this device.
         */
        public static rightEyePosition: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The position of the center eye on this device.
         */
        public static centerEyePosition: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The position of the color camera on this device.
         */
        public static colorCameraPosition: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The velocity of the device.
         */
        public static deviceVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular velocity of this device, formatted as euler angles.
         */
        public static deviceAngularVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The velocity of the left eye on this device.
         */
        public static leftEyeVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular velocity of the left eye on this device, formatted as euler angles.
         */
        public static leftEyeAngularVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The velocity of the right eye on this device.
         */
        public static rightEyeVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular velocity of the right eye on this device, formatted as euler angles.
         */
        public static rightEyeAngularVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The velocity of the center eye on this device.
         */
        public static centerEyeVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular velocity of the center eye on this device, formatted as euler angles.
         */
        public static centerEyeAngularVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The velocity of the color camera on this device.
         */
        public static colorCameraVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular velocity of the color camera on this device, formatted as euler angles.
         */
        public static colorCameraAngularVelocity: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The acceleration of the device.
         */
        public static deviceAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular acceleration of this device, formatted as euler angles.
         */
        public static deviceAngularAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The acceleration of the left eye on this device.
         */
        public static leftEyeAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular acceleration of the left eye on this device, formatted as euler angles.
         */
        public static leftEyeAngularAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The acceleration of the right eye on this device.
         */
        public static rightEyeAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular acceleration of the right eye on this device, formatted as euler angles.
         */
        public static rightEyeAngularAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The acceleration of the center eye on this device.
         */
        public static centerEyeAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular acceleration of the center eye on this device, formatted as euler angles.
         */
        public static centerEyeAngularAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The acceleration of the color camera on this device.
         */
        public static colorCameraAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The angular acceleration of the color camera on this device, formatted as euler angles.
         */
        public static colorCameraAngularAcceleration: InputFeatureUsage$1<UnityEngine.Vector3>;
        /**
         * The rotation of this device.
         */
        public static deviceRotation: InputFeatureUsage$1<UnityEngine.Quaternion>;
        /**
         * The rotation of the left eye on this device.
         */
        public static leftEyeRotation: InputFeatureUsage$1<UnityEngine.Quaternion>;
        /**
         * The rotation of the right eye on this device.
         */
        public static rightEyeRotation: InputFeatureUsage$1<UnityEngine.Quaternion>;
        /**
         * The rotation of the center eye on this device.
         */
        public static centerEyeRotation: InputFeatureUsage$1<UnityEngine.Quaternion>;
        /**
         * The rotation of the color camera on this device.
         */
        public static colorCameraRotation: InputFeatureUsage$1<UnityEngine.Quaternion>;
        /**
         * Value representing the hand data for this device.
         */
        public static handData: InputFeatureUsage$1<Hand>;
        /**
         * An Eyes struct containing eye tracking data collected from the device.
         */
        public static eyesData: InputFeatureUsage$1<Eyes>;
        
                    
    }
    /**
     * A tracked hand on the device at an XR.XRNode in the XR input subsystem.
     */
    class Hand extends System.ValueType {
        /**
         * Gets the root bone for this hand.
         * @param boneOut A Bone struct to receive the root bone.
         * @returns true if hand can be queried for the root bone; otherwise false.
         */
        public TryGetRootBone($boneOut: $Ref<Bone>):boolean;
        
        public TryGetFingerBones($finger: HandFinger, $bonesOut: System_Collections_Generic.List$1<Bone>):boolean;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: Hand):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($a: Hand, $b: Hand):boolean;
        
        public static op_Inequality($a: Hand, $b: Hand):boolean;
        
        public get_Clone(): Hand;            
    }
    /**
     * Contains eye tracking data from the device at an XR.XRNode in the XR input subsystem.
     */
    class Eyes extends System.ValueType {
        /**
         * Gets the Vector3 that describes the position of the left eye.
         * @param positionOut A Vector3 struct to receive the left eye position.
         * @returns true if eyes can be queried for the left eye position; otherwise false.
         */
        public TryGetLeftEyePosition($position: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Gets the Vector3 that describes the position of the right eye.
         * @param positionOut A Vector3 struct to receive the right eye position.
         * @returns true if eyes can be queried for the right eye position; otherwise false.
         */
        public TryGetRightEyePosition($position: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Gets the Quaternion that describes the rotation of the left eye.
         * @param rotationOut A Quaternion struct to receive the left eye rotation.
         * @returns true if eyes can be queried for the left eye rotation; otherwise false.
         */
        public TryGetLeftEyeRotation($rotation: $Ref<UnityEngine.Quaternion>):boolean;
        /**
         * Gets the Quaternion that describes the rotation of the right eye.
         * @param rotationOut A Quaternion struct to receive the right eye rotation.
         * @returns true if eyes can be queried for the right eye rotation; otherwise false.
         */
        public TryGetRightEyeRotation($rotation: $Ref<UnityEngine.Quaternion>):boolean;
        /**
         * Gets the point represents the convergence of the line of sight for both eyes.
         * @param fixationPoint A Vector3 struct that is filled in with the fixation position.
         * @returns true if eyes can be queried for the fixation point; otherwise false.
         */
        public TryGetFixationPoint($fixationPoint: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Gets a value that represents the how far the left eye is open.
         * @param OpenAmount A float value, with a range of 0.0 to 1.0, that indicates how open the left eye is. A value of 0.0 indicates that the eye is fully closed, while a value of 1.0 indicates that the eye is fully open.
         * @returns true if eyes can be queried for the amount that the left eye is open; otherwise false.
         */
        public TryGetLeftEyeOpenAmount($openAmount: $Ref<number>):boolean;
        /**
         * Gets a value that represents the how far the right eye is open.
         * @param OpenAmount A float value, with a range of 0.0 to 1.0, that indicates how open the right eye is. A value of 0.0 indicates that the eye is fully closed, while a value of 1.0 indicates that the eye is fully open.
         * @returns true if eyes can be queried for the amount that the right eye is open; otherwise false.
         */
        public TryGetRightEyeOpenAmount($openAmount: $Ref<number>):boolean;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: Eyes):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($a: Eyes, $b: Eyes):boolean;
        
        public static op_Inequality($a: Eyes, $b: Eyes):boolean;
        
        public get_Clone(): Eyes;            
    }
    /**
     * Defines an input device in the XR input subsystem.
     */
    class InputDevice extends System.ValueType {
        /**
         * Gets the XRInputSubsystem that reported this InputDevice.
         */
        public get subsystem(): XRInputSubsystem;
        /**
         * Read Only. True if the device is currently a valid input device; otherwise false.
         */
        public get isValid(): boolean;
        /**
         * Read Only. The name of the device in the XR system. This is a platform provided unique identifier for the device.
         */
        public get name(): string;
        /**
         * The manufacturer of the connected Input Device.
         */
        public get manufacturer(): string;
        /**
         * The serial number of the connected Input Device.  Blank if no serial number is available.
         */
        public get serialNumber(): string;
        /**
         * Read Only. A bitmask of enumerated flags describing the characteristics of this InputDevice.
         */
        public get characteristics(): InputDeviceCharacteristics;
        /**
         * Sends a haptic impulse to a device.
         * @param channel The channel to receive the impulse.
         * @param amplitude The normalized (0.0 to 1.0) amplitude value of the haptic impulse to play on the device.
         * @param duration The duration in seconds that the haptic impulse will play. Only supported on Oculus.
         * @returns Returns true if successful. Returns false otherwise.
         */
        public SendHapticImpulse($channel: number, $amplitude: number, $duration?: number):boolean;
        /**
         * Sends a raw buffer of haptic data to the device.
         * @param channel The channel to receive the data.
         * @param buffer A raw byte buffer that contains the haptic data to send to the device.
         * @returns Returns true if successful. Returns false otherwise.
         */
        public SendHapticBuffer($channel: number, $buffer: number[]):boolean;
        /**
         * Gets the haptic capabilities of the device.
         * @param capabilities A HapticCapabilities struct to receive the capabilities of this device.
         * @returns Returns true if the device supports any form of haptics. Returns false otherwise.
         */
        public TryGetHapticCapabilities($capabilities: $Ref<HapticCapabilities>):boolean;
        /**
         * Stop all haptic playback for a device.
         */
        public StopHaptics():void;
        
        public TryGetFeatureUsages($featureUsages: System_Collections_Generic.List$1<InputFeatureUsage>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<boolean>, $value: $Ref<boolean>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<number>, $value: $Ref<number>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<number>, $value: $Ref<number>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<UnityEngine.Vector2>, $value: $Ref<UnityEngine.Vector2>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<UnityEngine.Vector3>, $value: $Ref<UnityEngine.Vector3>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<UnityEngine.Quaternion>, $value: $Ref<UnityEngine.Quaternion>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<Hand>, $value: $Ref<Hand>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<Bone>, $value: $Ref<Bone>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<Eyes>, $value: $Ref<Eyes>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<number[]>, $value: number[]):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<InputTrackingState>, $value: $Ref<InputTrackingState>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<boolean>, $time: Date, $value: $Ref<boolean>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<number>, $time: Date, $value: $Ref<number>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<number>, $time: Date, $value: $Ref<number>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<UnityEngine.Vector2>, $time: Date, $value: $Ref<UnityEngine.Vector2>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<UnityEngine.Vector3>, $time: Date, $value: $Ref<UnityEngine.Vector3>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<UnityEngine.Quaternion>, $time: Date, $value: $Ref<UnityEngine.Quaternion>):boolean;
        
        public TryGetFeatureValue($usage: InputFeatureUsage$1<InputTrackingState>, $time: Date, $value: $Ref<InputTrackingState>):boolean;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: InputDevice):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($a: InputDevice, $b: InputDevice):boolean;
        
        public static op_Inequality($a: InputDevice, $b: InputDevice):boolean;
        
                    
    }
    /**
     * XRInputSubsystem
     * Instance is used to enable and disable the inputs coming from a specific plugin.
     */
    class XRInputSubsystem extends UnityEngine.IntegratedSubsystem$1<UnityEngine_XR.XRInputSubsystemDescriptor> {
        
        public constructor();
        /**
         * Centers the tracking features on all InputDevices to the current position and orientation of the head-mounted device.
         * @returns True if the method recenters the XRInputSubsystem. Returns false otherwise.
         */
        public TryRecenter():boolean;
        
        public TryGetInputDevices($devices: System_Collections_Generic.List$1<InputDevice>):boolean;
        
        public TrySetTrackingOriginMode($origin: TrackingOriginModeFlags):boolean;
        /**
         * Gets the Tracking Origin Mode.
         * @returns The Tracking Origin Mode that this subsystem is in.
         */
        public GetTrackingOriginMode():TrackingOriginModeFlags;
        /**
         * Gets all TrackingOriginModeFlags that this subsystem supports.
         * @returns A single series of flags that contains all supported TrackingOriginModeFlags.
         */
        public GetSupportedTrackingOriginModes():TrackingOriginModeFlags;
        
        public TryGetBoundaryPoints($boundaryPoints: System_Collections_Generic.List$1<UnityEngine.Vector3>):boolean;
        
        public add_trackingOriginUpdated($value: System.Action$1<XRInputSubsystem>):void;
        
        public remove_trackingOriginUpdated($value: System.Action$1<XRInputSubsystem>):void;
        
        public add_boundaryChanged($value: System.Action$1<XRInputSubsystem>):void;
        
        public remove_boundaryChanged($value: System.Action$1<XRInputSubsystem>):void;
        
        public trackingOriginUpdated;
        
        public boundaryChanged;
        
                    
    }
    /**
     * Information about an Input subsystem.
     */
    class XRInputSubsystemDescriptor extends UnityEngine.IntegratedSubsystemDescriptor$1<UnityEngine_XR.XRInputSubsystem> {
        /**
         * When true, will suppress legacy support for Daydream, Oculus, OpenVR, and Windows MR built directly into the Unity runtime from generating input. This is useful when adding an XRInputSubsystem that supports these devices.
         */
        public get disablesLegacyInput(): boolean;
        
        public constructor();
        
                    
    }
    /**
     * A tracked bone on the device at an XR.XRNode in the XR input subsystem.
     */
    class Bone extends System.ValueType {
        /**
         * Gets the world position of the bone
         * @param position Vector3 to receive the position of the bone in Unity world space.
         * @returns true if the rotation was retrieved, false otherwise.
         */
        public TryGetPosition($position: $Ref<UnityEngine.Vector3>):boolean;
        /**
         * Gets the world rotation of the bone.
         * @param rotation Quaternion to receive the rotation of the bone in Unity world space.
         * @returns true if the rotation was retrieved, false otherwise.
         */
        public TryGetRotation($rotation: $Ref<UnityEngine.Quaternion>):boolean;
        /**
         * Gets the parent of this bone.
         * @param parentBone Bone struct that receives the parent bone of this bone.
         * @returns true if the rotation was retrieved, false otherwise.
         */
        public TryGetParentBone($parentBone: $Ref<Bone>):boolean;
        
        public TryGetChildBones($childBones: System_Collections_Generic.List$1<Bone>):boolean;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: Bone):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($a: Bone, $b: Bone):boolean;
        
        public static op_Inequality($a: Bone, $b: Bone):boolean;
        
        public get_Clone(): Bone;            
    }
    /**
     * Enumeration describing the AR rendering mode used with XR.Hand.
     */
    enum HandFinger { Thumb = 0, Index = 1, Middle = 2, Ring = 3, Pinky = 4 }
    /**
     * An interface for accessing devices in the XR input subsytem.
     */
    class InputDevices extends System.Object {
        
        public constructor();
        /**
         * Gets the input device at a given XR.XRNode endpoint.
         * @param node The XRNode that owns the requested device.
         * @returns An XR.InputDevice at this [[XR.XRNode].
         */
        public static GetDeviceAtXRNode($node: XRNode):InputDevice;
        
        public static GetDevicesAtXRNode($node: XRNode, $inputDevices: System_Collections_Generic.List$1<InputDevice>):void;
        
        public static GetDevices($inputDevices: System_Collections_Generic.List$1<InputDevice>):void;
        
        public static GetDevicesWithCharacteristics($desiredCharacteristics: InputDeviceCharacteristics, $inputDevices: System_Collections_Generic.List$1<InputDevice>):void;
        
        public static add_deviceConnected($value: System.Action$1<InputDevice>):void;
        
        public static remove_deviceConnected($value: System.Action$1<InputDevice>):void;
        
        public static add_deviceDisconnected($value: System.Action$1<InputDevice>):void;
        
        public static remove_deviceDisconnected($value: System.Action$1<InputDevice>):void;
        
        public static add_deviceConfigChanged($value: System.Action$1<InputDevice>):void;
        
        public static remove_deviceConfigChanged($value: System.Action$1<InputDevice>):void;
        
        public static deviceConnected;
        
        public static deviceDisconnected;
        
        public static deviceConfigChanged;
        
                    
    }
    /**
     * An XRDisplaySubsystem controls rendering to a head tracked display.
     */
    class XRDisplaySubsystem extends UnityEngine.IntegratedSubsystem$1<UnityEngine_XR.XRDisplaySubsystemDescriptor> {
        /**
         * Determines if the current attached device has an opaque display.
         * Most VR devices are opaque in order to increase the immersive experience, AR devices are transparent to allow for interaction with an augmentation of the current environment.
         */
        public get displayOpaque(): boolean;
        /**
         * Sets or gets the state of content protection for the current active provider.
         * For most providers, content protection allows you to use write only textures for rendering. This stops the ability for apps to read textures from the graphics card and view/record images that may be protected in some way.
         */
        public get contentProtectionEnabled(): boolean;
        public set contentProtectionEnabled(value: boolean);
        /**
         * Controls how much of the allocated display texture should be used for rendering.
         */
        public get scaleOfAllViewports(): number;
        public set scaleOfAllViewports(value: number);
        /**
         * Controls the size of the textures submitted to the display as a multiplier of the display's default resolution.
         */
        public get scaleOfAllRenderTargets(): number;
        public set scaleOfAllRenderTargets(value: number);
        /**
         * Set DisplaySubsystem to use zNear for rendering.
         */
        public get zNear(): number;
        public set zNear(value: number);
        /**
         * Set DisplaySubsystem to use zFar for rendering.
         */
        public get zFar(): number;
        public set zFar(value: number);
        
        public get sRGB(): boolean;
        public set sRGB(value: boolean);
        /**
         * Set DisplaySubsystem to use certain texture layout. Should query supported texture layout through XRDisplaySubsystem.supportedTextureLayouts
         * first for the capabilities.
         */
        public get textureLayout(): UnityEngine_XR_XRDisplaySubsystem.TextureLayout;
        public set textureLayout(value: UnityEngine_XR_XRDisplaySubsystem.TextureLayout);
        /**
         * Specifies all texture layouts supported by this display subsystem. This var is a bit field that could be combination of XRDisplaySubsystem.TextureLayout.
         */
        public get supportedTextureLayouts(): UnityEngine_XR_XRDisplaySubsystem.TextureLayout;
        /**
         * The kind of reprojection the app requests to stabilize its holographic rendering relative to the user's head motion.
         */
        public get reprojectionMode(): UnityEngine_XR_XRDisplaySubsystem.ReprojectionMode;
        public set reprojectionMode(value: UnityEngine_XR_XRDisplaySubsystem.ReprojectionMode);
        /**
         * Disables the legacy renderer while this XRDisplaySubsystem is active.
         */
        public get disableLegacyRenderer(): boolean;
        public set disableLegacyRenderer(value: boolean);
        
        public constructor();
        
        public add_displayFocusChanged($value: System.Action$1<boolean>):void;
        
        public remove_displayFocusChanged($value: System.Action$1<boolean>):void;
        /**
         * This marks a given GameObject's transform to be late latched in the next frame. Once marked for late latching, the GameObject transform and its descendants will be updated with the latest VR pose updates before rendering is submitted to the GPU.
         * @param transform The transform of the GameObject to be late latched.
         * @param nodeType The late latch node type to be associated with the transform.
         */
        public MarkTransformLateLatched($transform: UnityEngine.Transform, $nodeType: UnityEngine_XR_XRDisplaySubsystem.LateLatchNode):void;
        /**
         * Sets a point in 3D space that acts as the focal point of the Scene for this frame. This helps to improve the visual fidelity of content around this point. You must set this value every frame.
         * Note that specifying body-locked content in focus improves the fidelity of body-locked content at the expense of content not locked to the body. This is especially apparent when the user moves.
         * @param point The position of the focal point in the Scene, relative to the Camera.
         * @param normal Surface normal of the plane being viewed at the focal point.
         * @param velocity A vector that describes how the focus point moves in the Scene at this point in time. This allows the device to compensate for both your head movement and the movement of the object in the Scene.
         */
        public SetFocusPlane($point: UnityEngine.Vector3, $normal: UnityEngine.Vector3, $velocity: UnityEngine.Vector3):void;
        /**
         * Set MSAA level for the DisplaySubsystem's render texture.
         * @param level The MSAA level.
         */
        public SetMSAALevel($level: number):void;
        /**
         * The number of XRRenderPass entries for this XR Display.
         * @returns Count of render passes.
         */
        public GetRenderPassCount():number;
        /**
         * Gets an XRRenderPass of a specific index.
         * @param renderPassIndex The index of the render pass to get.  Must be less than GetRenderPassCount.
         * @param renderPass Render pass to populate.
         */
        public GetRenderPass($renderPassIndex: number, $renderPass: $Ref<UnityEngine_XR_XRDisplaySubsystem.XRRenderPass>):void;
        /**
         * Gets culling parameters for a specific culling pass index.
         * @param camera Camera for the basis of the culling view and frustum.
         * @param cullingPassIndex Index of the culling pass obtained from XR.XRDisplaySubsystem.XRRenderPass.cullingPassIndex|XRRenderPass.cullingPassIndex.
         * @param scriptableCullingParameters Scriptable culling parameters to populate.
         */
        public GetCullingParameters($camera: UnityEngine.Camera, $cullingPassIndex: number, $scriptableCullingParameters: $Ref<UnityEngine_Rendering.ScriptableCullingParameters>):void;
        /**
         * Retrieves the time the GPU has spent on executing commands from the application's last frame, as reported by the XR Plugin. Measured in seconds.
         * @param gpuTimeLastFrame Outputs the time spent by the GPU during the last frame.
         * @returns Returns true if the GPU time spent on the last frame is available. Returns false if that time is unavailable.
         */
        public TryGetAppGPUTimeLastFrame($gpuTimeLastFrame: $Ref<number>):boolean;
        /**
         * Retrieves the amount of time that the GPU spent executing the compositor renderer during the last frame, as reported by the XR Plugin. Measured in seconds.
         * @param gpuTimeLastFrameCompositor Outputs the time spent by the GPU for the compositor during the last frame.
         * @returns Returns true if the GPU time spent on the last frame is available. Returns false if that time is unavailable.
         */
        public TryGetCompositorGPUTimeLastFrame($gpuTimeLastFrameCompositor: $Ref<number>):boolean;
        /**
         * Retrieves the number of dropped frames reported by the XR Plugin.
         * @param droppedFrameCount Outputs the number of frames dropped since the last update.
         * @returns Returns true if the dropped frame count is available. Returns false otherwise.
         */
        public TryGetDroppedFrameCount($droppedFrameCount: $Ref<number>):boolean;
        /**
         * Retrieves the number of times the current frame has been drawn to the device as reported by the XR Plugin.
         * @param framePresentCount Outputs the number of times the current frame has been presented.
         * @returns Returns true if the current frame count is available. Returns false otherwise.
         */
        public TryGetFramePresentCount($framePresentCount: $Ref<number>):boolean;
        /**
         * Retrieves the refresh rate of the display as reported by the XR Plugin.
         * @param hmdRefreshRate Outputs the display refresh rate in Hz.
         * @returns Returns true if the display refresh rate is available. Returns false if that rate is unavailable.
         */
        public TryGetDisplayRefreshRate($displayRefreshRate: $Ref<number>):boolean;
        /**
         * Retrieves the motion-to-photon value as reported by the XR Plugin.
         * @param motionToPhoton Outputs the motion-to-photon value.
         * @returns Returns true if the motion-to-photon value is available. Returns false otherwise.
         */
        public TryGetMotionToPhoton($motionToPhoton: $Ref<number>):boolean;
        /**
         * Given a render pass, return the RenderTexture instance backing that render pass. If the render pass is invalid, or if the render texture does not exist, return null.
         * @param renderPass The render pass index to get the render texture for.
         * @returns The render texture associated with that render pass, or null if not found.
         */
        public GetRenderTextureForRenderPass($renderPass: number):UnityEngine.RenderTexture;
        /**
         * Returns the XR display's preferred mirror blit mode.
         * @returns Display subsystem's preferred blit mode.
         */
        public GetPreferredMirrorBlitMode():number;
        /**
         * Override the XR display's preferred mirror blit mode from the script.
         * @param blitMode XRMirrorViewBlitMode to set.
         */
        public SetPreferredMirrorBlitMode($blitMode: number):void;
        /**
         * Get a mirror view blit operation descriptor from the current display subsystem.
         * @param mirrorRt A render texture representing mirror view's render target.
         * @param outDesc Information that describes desired mirror view blit operation.
         * @param mode The XRMirrorViewBlitMode XR display should perform.
         * @returns Return true if information is retrieved successfully, false otherwise.
         */
        public GetMirrorViewBlitDesc($mirrorRt: UnityEngine.RenderTexture, $outDesc: $Ref<UnityEngine_XR_XRDisplaySubsystem.XRMirrorViewBlitDesc>, $mode: number):boolean;
        /**
         * This function records the display subsystem's native blit event to the target command buffer. This function is typically called by a scriptable rendering pipeline.
         * @param cmd The target CommandBuffer that records the native blit event.
         * @param allowGraphicsStateInvalidate True causes the graphics device to invalidate internal states before and after calling into the provider's native blit. This ensures the GFX internal states' consistency with the cost of some runtime performance.
         * @param mode The XRMirrorViewBlitMode XR display should perform.
         * @returns Returns true if native blit event is successfully recorded. Returns false otherwise.
         */
        public AddGraphicsThreadMirrorViewBlit($cmd: UnityEngine_Rendering.CommandBuffer, $allowGraphicsStateInvalidate: boolean, $mode: number):boolean;
        
        public displayFocusChanged;
        
                    
    }
    /**
     * Class providing information about XRDisplaySubsystem registration.
     */
    class XRDisplaySubsystemDescriptor extends UnityEngine.IntegratedSubsystemDescriptor$1<UnityEngine_XR.XRDisplaySubsystem> {
        /**
         * Indicates whether legacy VR settings must be disabled for the subsystem. Set to true if the Editor must disable the legacy VR settings  disabled; otherwise false.
         */
        public get disablesLegacyVr(): boolean;
        /**
         * Indicates whether MSAA must be resolved in the back buffer. Set to true if MSAA needs to be resolved in the back buffer; otherwise false.
         */
        public get enableBackBufferMSAA(): boolean;
        
        public constructor();
        /**
         * Get current display subsystem's total number of supported mirror blit modes.
         * @returns Number of supported mirror blit modes.
         */
        public GetAvailableMirrorBlitModeCount():number;
        /**
         * Get a supported mirror view blit mode from the current display subsystem descriptor.
         * @param mode XRMirrorViewBlitMode to populate.
         * @param index Index of the mirror blit mode to get.
         */
        public GetMirrorBlitModeByIndex($index: number, $mode: $Ref<XRMirrorViewBlitModeDesc>):void;
        
                    
    }
    /**
     * Engine reserved blit modes. Blit mode capabilities should be queried from XRDisplaySubsystemDescriptor.GetAvailableMirrorBlitModeCount and XRDisplaySubsystemDescriptor.GetMirrorBlitModeByIndex.
     */
    class XRMirrorViewBlitMode extends System.ValueType {
        /**
         * Mirror view pass should blit platform default image to the mirror target.
         */
        public static Default: number;
        /**
         * Mirror view pass should blit left eye image to the mirror target.
         */
        public static LeftEye: number;
        /**
         * Mirror view pass should blit right eye image to the mirror target.
         */
        public static RightEye: number;
        /**
         * Mirror view pass should blit left eye image and right eye image in a side-by-side fashion to the mirror target.
         */
        public static SideBySide: number;
        /**
         * Mirror view pass should blit similar to side-by-side mode, but also showing not rendered pixels saved by the occlusion mesh.
         */
        public static SideBySideOcclusionMesh: number;
        /**
         * Mirror view pass should blit after distortion pass image to the mirror target.
         */
        public static Distort: number;
        /**
         * Mirror view pass should not be performed.
         */
        public static None: number;
        
        public get_Clone(): XRMirrorViewBlitMode;            
    }
    /**
     * Struct that describes the mirror view blit mode.
     */
    class XRMirrorViewBlitModeDesc extends System.ValueType {
        /**
         * Mirror view blit mode Id. For details, see XRMirrorViewBlitMode. In case of provider's custom blit mode, the value wouldn't be the reserved XRMirrorViewBlitMode.
         */
        public blitMode: number;
        /**
         * String that describes the mirror view blit mode.
         */
        public blitModeDesc: string;
        
                    
    }
    /**
     * This enum provides context to where the 0,0,0 point of tracking for InputDevices is.
     */
    enum TrackingOriginModeFlags { Unknown = 0, Device = 1, Floor = 2, TrackingReference = 4, Unbounded = 8 }
    /**
     * A session-unique identifier for trackables in the environment, e.g., planes and feature points.
     */
    class MeshId extends System.ValueType {
        /**
         * Represents an invalid id.
         */
        public static get InvalidId(): MeshId;
        /**
         * Generates a nicely formatted version of the id.
         * @returns A string unique to this id
         */
        public ToString():string;
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: MeshId):boolean;
        
        public static op_Equality($id1: MeshId, $id2: MeshId):boolean;
        
        public static op_Inequality($id1: MeshId, $id2: MeshId):boolean;
        
        public get_Clone(): MeshId;            
    }
    /**
     * The status of a XRMeshSubsystem.GenerateMeshAsync.
     */
    enum MeshGenerationStatus { Success = 0, InvalidMeshId = 1, GenerationAlreadyInProgress = 2, Canceled = 3, UnknownError = 4 }
    /**
     * Contains event information related to a generated mesh.
     */
    class MeshGenerationResult extends System.ValueType {
        /**
         * The MeshId of the tracked mesh that was generated.
         */
        public get MeshId(): MeshId;
        /**
         * If the generation was successful, data has been written to this Mesh.
         */
        public get Mesh(): UnityEngine.Mesh;
        /**
         * If the generation was successful, physics data has been written to this MeshCollider.
         */
        public get MeshCollider(): UnityEngine.MeshCollider;
        /**
         * The MeshGenerationStatus of the mesh generation task.
         */
        public get Status(): MeshGenerationStatus;
        /**
         * The MeshVertexAttributes that were written to the MeshGenerationResult.Mesh.
         */
        public get Attributes(): MeshVertexAttributes;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: MeshGenerationResult):boolean;
        
        public static op_Equality($lhs: MeshGenerationResult, $rhs: MeshGenerationResult):boolean;
        
        public static op_Inequality($lhs: MeshGenerationResult, $rhs: MeshGenerationResult):boolean;
        
        public GetHashCode():number;
        
                    
    }
    /**
     * A set of vertex attributes.
     */
    enum MeshVertexAttributes { None = 0, Normals = 1, Tangents = 2, UVs = 4, Colors = 8 }
    /**
     * The state of a tracked mesh since the last query.
     */
    enum MeshChangeState { Added = 0, Updated = 1, Removed = 2, Unchanged = 3 }
    /**
     * Contains state information related to a tracked mesh.
     */
    class MeshInfo extends System.ValueType {
        /**
         * The MeshId of the tracked mesh.
         */
        public get MeshId(): MeshId;
        public set MeshId(value: MeshId);
        /**
         * The change state (e.g., Added, Removed) of the tracked mesh.
         */
        public get ChangeState(): MeshChangeState;
        public set ChangeState(value: MeshChangeState);
        /**
         * A hint that can be used to determine when this mesh should be processed.
         */
        public get PriorityHint(): number;
        public set PriorityHint(value: number);
        
        public Equals($obj: any):boolean;
        
        public Equals($other: MeshInfo):boolean;
        
        public static op_Equality($lhs: MeshInfo, $rhs: MeshInfo):boolean;
        
        public static op_Inequality($lhs: MeshInfo, $rhs: MeshInfo):boolean;
        
        public GetHashCode():number;
        
        public get_Clone(): MeshInfo;            
    }
    /**
     * Allows external systems to provide dynamic meshes to Unity.
     */
    class XRMeshSubsystem extends UnityEngine.IntegratedSubsystem$1<UnityEngine_XR.XRMeshSubsystemDescriptor> {
        /**
         * Call this function to request a change in the density of the generated Meshes. Unity gives the density level as a value within the range 0.0 to 1.0 and the provider determines how to map that value to their implementation.
         * Setting this value does not guarantee an immediate change in the density of any currently created Mesh and may only change the density for new or updated Meshes.
         */
        public get meshDensity(): number;
        public set meshDensity(value: number);
        
        public constructor();
        
        public TryGetMeshInfos($meshInfosOut: System_Collections_Generic.List$1<MeshInfo>):boolean;
        
        public GenerateMeshAsync($meshId: MeshId, $mesh: UnityEngine.Mesh, $meshCollider: UnityEngine.MeshCollider, $attributes: MeshVertexAttributes, $onMeshGenerationComplete: System.Action$1<MeshGenerationResult>):void;
        /**
         * Set the bounding volume to restrict the space in which Unity generates and tracks Meshes.
         * The bounding volume is an Axis Aligned Bounding Box (AABB) centered at the origin and extends in each dimension as defined in extents.
         * The units of measurement depend on the provider.
         */
        public SetBoundingVolume($origin: UnityEngine.Vector3, $extents: UnityEngine.Vector3):boolean;
        
                    
    }
    /**
     * Information about an XRMeshSubsystem.
     */
    class XRMeshSubsystemDescriptor extends UnityEngine.IntegratedSubsystemDescriptor$1<UnityEngine_XR.XRMeshSubsystem> {
        
        public constructor();
        
                    
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
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface UInt64 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface DateTime extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
    }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    
    interface IntegratedSubsystemDescriptor$1<TSubsystem> extends IntegratedSubsystemDescriptor {
        
                    
    }
    /**
     * Information about a subsystem that can be queried before creating a subsystem instance.
     */
    interface IntegratedSubsystemDescriptor extends System.Object {
        
                    
    }
    
    interface IntegratedSubsystem$1<TSubsystemDescriptor> extends IntegratedSubsystem {
        
                    
    }
    /**
     * An IntegratedSubsystem is initialized from an IntegratedSubsystemDescriptor for a given Subsystem (Example, Input, Environment, Display, etc.) and provides an interface to interact with that given IntegratedSubsystem until it is Destroyed. After an IntegratedSubsystem is created it can be Started or Stopped to turn on and off functionality (and preserve performance). The base type for IntegratedSubsystem only exposes this functionality; this class is designed to be a base class for derived classes that expose more functionality specific to a given IntegratedSubsystem.
     * Note: initializing a second IntegratedSubsystem from the same IntegratedSubsystemDescriptor will return a reference to the existing IntegratedSubsystem as only one IntegratedSubsystem is currently allowed for a single IntegratedSubsystem provider.
     */
    interface IntegratedSubsystem extends System.Object {
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
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
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    /**
     * Behaviours are Components that can be enabled or disabled.
     */
    interface Behaviour extends Component {
        
                    
    }
    /**
     * Render textures are textures that can be rendered to.
     */
    interface RenderTexture extends Texture {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * A standard 4x4 transformation matrix.
     */
    interface Matrix4x4 extends System.ValueType {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * This struct contains all the information required to create a RenderTexture. It can be copied, cached, and reused to easily create RenderTextures that all share the same properties. Avoid using the default constructor as it does not initialize some flags with the recommended values.
     */
    interface RenderTextureDescriptor extends System.ValueType {
        
                    
    }
    /**
     * A mesh collider allows you to do between meshes and primitives.
     */
    interface MeshCollider extends Collider {
        
                    
    }
    /**
     * A base class of all colliders.
     */
    interface Collider extends Component {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.XR.XRDisplaySubsystem' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
        
    /**
     * Type of node to be late latched.
     */
    enum LateLatchNode { Head = 0, LeftHand = 1, RightHand = 2 }
    
    enum TextureLayout { Texture2DArray = 1, SingleTexture2D = 2, SeparateTexture2Ds = 4 }
    /**
     * The kind of reprojection the app requests to stabilize its holographic rendering relative to the user's head motion.
     */
    enum ReprojectionMode { Unspecified = 0, PositionAndOrientation = 1, OrientationOnly = 2, None = 3 }
    
    class XRRenderPass extends System.ValueType {
        
        public renderPassIndex: number;
        
        public renderTarget: UnityEngine_Rendering.RenderTargetIdentifier;
        
        public renderTargetDesc: UnityEngine.RenderTextureDescriptor;
        
        public shouldFillOutDepth: boolean;
        
        public cullingPassIndex: number;
        
        public GetRenderParameter($camera: UnityEngine.Camera, $renderParameterIndex: number, $renderParameter: $Ref<XRRenderParameter>):void;
        
        public GetRenderParameterCount():number;
        
                    
    }
    
    class XRMirrorViewBlitDesc extends System.ValueType {
        
        public nativeBlitAvailable: boolean;
        
        public nativeBlitInvalidStates: boolean;
        
        public blitParamsCount: number;
        
        public GetBlitParameter($blitParameterIndex: number, $blitParameter: $Ref<XRBlitParams>):void;
        
                    
    }
    /**
     * A single viewpoint that must be rendered by the render pipeline.  Contains a target viewport and texture array slice within a corresponding XR.XRDisplaySubsystem.XRRenderPass.renderTarget.
     */
    class XRRenderParameter extends System.ValueType {
        
        public view: UnityEngine.Matrix4x4;
        
        public projection: UnityEngine.Matrix4x4;
        
        public viewport: UnityEngine.Rect;
        
        public occlusionMesh: UnityEngine.Mesh;
        
        public textureArraySlice: number;
        
                    
    }
    /**
     * This struct  holds data for a single blit operation.
     */
    class XRBlitParams extends System.ValueType {
        
        public srcTex: UnityEngine.RenderTexture;
        
        public srcTexArraySlice: number;
        
        public srcRect: UnityEngine.Rect;
        
        public destRect: UnityEngine.Rect;
        
                    
    }
    
}
declare module 'UnityEngine.Rendering' {

    import * as System from 'System';
        
    /**
     * Parameters that configure a culling operation in the Scriptable Render Pipeline.
     */
    interface ScriptableCullingParameters extends System.ValueType {
        
                    
    }
    /**
     * List of graphics commands to execute.
     */
    interface CommandBuffer extends System.Object {
        
                    
    }
    /**
     * Identifies a RenderTexture for a Rendering.CommandBuffer.
     */
    interface RenderTargetIdentifier extends System.ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.XR.Provider' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Provides timing and other statistics from XR subsystems.
     */
    class XRStats extends System.Object {
        /**
         * Retrieve a statistic for an XR subsystem.
         * @param xrSubsystem The subsystem with which the stat is registered.
         * @param tag The tag used to query for a statistic.
         * @param value Receives the current value of the requested statistic. Contains a valid value when this method returns true.
         * @returns True, if the requested statistic is available, false otherwise.
         */
        public static TryGetStat($xrSubsystem: UnityEngine.IntegratedSubsystem, $tag: string, $value: $Ref<number>):boolean;
        
                    
    }
    
}

