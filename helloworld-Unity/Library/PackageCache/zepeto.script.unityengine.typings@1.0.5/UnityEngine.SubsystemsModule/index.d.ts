//# signature=UnityEngine.SubsystemsModule#e2bfee80d4442d38dfde6beb4da63be0#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Interface implemented by both Subsystem and IntegratedSubsystem which provides control over the state of either.
     */
    interface ISubsystem {
        /**
         * Will be true if asking the subsytem to start was successful. False in the case that the subsystem has stopped, was asked to stop or has not been started yet.
         */
        running: boolean;
        /**
         * Starts an instance of a subsystem.
         */
        Start():void;
        /**
         * Stops an instance of a subsystem.
         */
        Stop():void;
        /**
         * Destroys this instance of a subsystem.
         */
        Destroy():void;
        
                    
    }
    /**
     * A subsystem descriptor is metadata about a subsystem which can be inspected before loading / initializing a subsystem.
     */
    interface ISubsystemDescriptor {
        /**
         * A unique string that identifies the subsystem that this Descriptor can create.
         */
        id: string;
        /**
         * Creates an ISubsystem from this descriptor.
         * @returns An instance of ISubsystem.
         */
        Create():ISubsystem;
        
                    
    }
    /**
     * An IntegratedSubsystem is initialized from an IntegratedSubsystemDescriptor for a given Subsystem (Example, Input, Environment, Display, etc.) and provides an interface to interact with that given IntegratedSubsystem until it is Destroyed. After an IntegratedSubsystem is created it can be Started or Stopped to turn on and off functionality (and preserve performance). The base type for IntegratedSubsystem only exposes this functionality; this class is designed to be a base class for derived classes that expose more functionality specific to a given IntegratedSubsystem.
     * Note: initializing a second IntegratedSubsystem from the same IntegratedSubsystemDescriptor will return a reference to the existing IntegratedSubsystem as only one IntegratedSubsystem is currently allowed for a single IntegratedSubsystem provider.
     */
    class IntegratedSubsystem extends System.Object {
        /**
         * Whether or not the subsystem is running.
         */
        public get running(): boolean;
        
        public constructor();
        /**
         * Starts an instance of a subsystem.
         */
        public Start():void;
        /**
         * Stops an instance of a subsystem.
         */
        public Stop():void;
        /**
         * Destroys this instance of a subsystem.
         */
        public Destroy():void;
        
                    
    }
    /**
     * Information about a subsystem that can be queried before creating a subsystem instance.
     */
    class IntegratedSubsystemDescriptor extends System.Object {
        /**
         * A unique string that identifies the subsystem that this Descriptor can create.
         */
        public get id(): string;
        
                    
    }
    /**
     * A Subsystem is initialized from a SubsystemDescriptorWithProvider for a given Subsystem (Example, Input, Display, etc.) and provides an interface to interact with that given Subsystem until it is Destroyed. After a Subsystem is created it can be Started or Stopped to turn on and off functionality (and improve performance). The base type for subsystems only exposes this functionality; this class is designed to be a base class for derived classes that expose more functionality specific to a given Subsystem.
     * Note: initializing a second Subsystem from the same SubsystemDescriptor will return a reference to the existing Subsystem as only one Subsystem is currently allowed for a single Subsystem provider.
     * This subsystem base-class is deprecated. If you are creating a new subsystem type, derive from SubsystemWithProvider instead.
     */
    class Subsystem extends System.Object {
        /**
         * Whether or not the subsystem is running.
         */
        public get running(): boolean;
        /**
         * Starts an instance of a subsystem.
         */
        public Start():void;
        /**
         * Stops an instance of a subsystem.
         */
        public Stop():void;
        /**
         * Destroys this instance of a subsystem.
         */
        public Destroy():void;
        
                    
    }
    /**
     * Information about a subsystem that can be queried before creating a subsystem instance.
     * This subsystem descriptor base-class is deprecated. If you are creating a new subsystem type, derive from SubsystemDecriptorWithProvider instead.
     */
    class SubsystemDescriptor extends System.Object {
        /**
         * A unique string that identifies the subsystem that this Descriptor can create.
         */
        public get id(): string;
        public set id(value: string);
        /**
         * The System.Type of the subsystem implementation associated with this descriptor.
         */
        public get subsystemImplementationType(): System.Type;
        public set subsystemImplementationType(value: System.Type);
        
                    
    }
    /**
     * Gives access to subsystems which provide additional functionality through plugins.
     */
    class SubsystemManager extends System.Object {
        
        public static GetAllSubsystemDescriptors($descriptors: System_Collections_Generic.List$1<ISubsystemDescriptor>):void;
        
        public static GetSubsystemDescriptors<T>($descriptors: System_Collections_Generic.List$1<T>):void;
        
        public static GetSubsystems<T>($subsystems: System_Collections_Generic.List$1<T>):void;
        
        public static add_beforeReloadSubsystems($value: System.Action):void;
        
        public static remove_beforeReloadSubsystems($value: System.Action):void;
        
        public static add_afterReloadSubsystems($value: System.Action):void;
        
        public static remove_afterReloadSubsystems($value: System.Action):void;
        
        public static GetInstances<T>($subsystems: System_Collections_Generic.List$1<T>):void;
        
        public static add_reloadSubsytemsStarted($value: System.Action):void;
        
        public static remove_reloadSubsytemsStarted($value: System.Action):void;
        
        public static add_reloadSubsytemsCompleted($value: System.Action):void;
        
        public static remove_reloadSubsytemsCompleted($value: System.Action):void;
        /**
         * Called from SubsystemManager before reloading all XR SDK Provider packaged subsystems.
         */
        public static beforeReloadSubsystems;
        /**
         * Called from SubsystemManager when it has completed reloading all XR SDK Provider packaged subsystems.
         */
        public static afterReloadSubsystems;
        /**
         * Called from SubsystemManager before reloading all XR SDK Provider packaged subsystems.
         */
        public static reloadSubsytemsStarted;
        /**
         * Called from SubsystemManager when it has completed reloading all XR SDK Provider packaged subsystems.
         */
        public static reloadSubsytemsCompleted;
        
                    
    }
    
    interface IntegratedSubsystemDescriptor$1<TSubsystem> extends IntegratedSubsystemDescriptor {
        
                    
    }
    
    interface IntegratedSubsystem$1<TSubsystemDescriptor> extends IntegratedSubsystem {
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Subsystems' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    class ExampleSubsystem extends UnityEngine.IntegratedSubsystem$1<UnityEngine_Subsystems.ExampleSubsystemDescriptor> {
        
        public constructor();
        
        public PrintExample():void;
        
        public GetBool():boolean;
        
                    
    }
    
    class ExampleSubsystemDescriptor extends UnityEngine.IntegratedSubsystemDescriptor$1<UnityEngine_Subsystems.ExampleSubsystem> {
        
        public get supportsEditorMode(): boolean;
        
        public get disableBackbufferMSAA(): boolean;
        
        public get stereoscopicBackbuffer(): boolean;
        
        public get usePBufferEGL(): boolean;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.SubsystemsImplementation' {

    import * as System from 'System';
        
    /**
     * Registration entry point for subsystems to register their descriptor.
     */
    class SubsystemDescriptorStore extends System.Object {
        
        public static RegisterDescriptor($descriptor: SubsystemDescriptorWithProvider):void;
        
                    
    }
    /**
     * Information about a SubsystemWithProvider that can be queried before creating a subsystem instance.
     */
    class SubsystemDescriptorWithProvider extends System.Object {
        /**
         * A unique string that identifies the SubsystemWithProvider that this descriptor can create.
         */
        public get id(): string;
        public set id(value: string);
        
                    
    }
    /**
     * A provider that supplies data to a subsystem, generally for platform-specific implementations.
     */
    class SubsystemProvider extends System.Object {
        
        public get running(): boolean;
        
                    
    }
    /**
     * A subsystem is initialized from a SubsystemDescriptorWithProvider for a given subsystem (Session, Plane, Face, etc.) and provides an interface to interact with that given subsystem until it is Destroyed. After a subsystem is created, it can be Started or Stopped to turn on and off functionality and preserve performance. The base type for the subsystem only exposes this functionality; this class is designed to be a base class for derived classes that expose more functionality specific to a given subsystem.
     * *Note:* Initializing a second subsystem from the same subsystem descriptor will return a reference to the existing subsystem, because only one subsystem is currently allowed for a single subsystem provider.
     */
    class SubsystemWithProvider extends System.Object {
        /**
         * Whether or not the subsystem is running.
         * This returns true after Start has been called on the subsystem, and false after Stop is called.
         */
        public get running(): boolean;
        /**
         * Starts an instance of a subsystem.
         * Once the instance is started, the subsystem representing this instance is active and can be interacted with.
         */
        public Start():void;
        /**
         * Stops an instance of a subsystem.
         * Once the instance is stopped, the subsystem representing this instance is no longer active and should not consume CPU resources.
         */
        public Stop():void;
        /**
         * Destroys this instance of a subsystem.
         * Also unloads all resources acquired during the initialization step. Call this when you no longer need this instance of a subsystem.
         * Note: Once a subsystem is Destroyed, script can still hold a reference but calling a method on it will result in a NullArgumentException.
         */
        public Destroy():void;
        
                    
    }
    
    interface SubsystemProvider$1<TSubsystem> extends SubsystemProvider {
        
                    
    }
    
    interface SubsystemProxy$2<TSubsystem,TProvider> extends System.Object {
        
                    
    }
    
    interface SubsystemDescriptorWithProvider$2<TSubsystem,TProvider> extends SubsystemDescriptorWithProvider {
        
                    
    }
    
    interface SubsystemWithProvider$3<TSubsystem,TSubsystemDescriptor,TProvider> extends SubsystemWithProvider {
        
                    
    }
    
    interface SubsystemDescriptorWithProvider$2 {
        /** @extension UnityEngine.SubsystemsImplementation.Extensions.SubsystemDescriptorExtensions */
        CreateProxy<TSubsystem,TProvider>():UnityEngine_SubsystemsImplementation.SubsystemProxy$2<TSubsystem, TProvider>;
        
                    
    }
    
    interface SubsystemWithProvider$3 {
        /** @extension UnityEngine.SubsystemsImplementation.Extensions.SubsystemExtensions */
        GetProvider<TSubsystem,TDescriptor,TProvider>():UnityEngine_SubsystemsImplementation.SubsystemProvider$1<TSubsystem>;
        
                    
    }
    
}
declare module 'UnityEngine.SubsystemsImplementation.Extensions' {

    import * as System from 'System';
    import * as UnityEngine_SubsystemsImplementation from 'UnityEngine.SubsystemsImplementation';
        
    
    class SubsystemDescriptorExtensions extends System.Object {
        
        public static CreateProxy<TSubsystem,TProvider>($descriptor: UnityEngine_SubsystemsImplementation.SubsystemDescriptorWithProvider$2<TSubsystem, TProvider>):UnityEngine_SubsystemsImplementation.SubsystemProxy$2<TSubsystem, TProvider>;
        
                    
    }
    
    class SubsystemExtensions extends System.Object {
        
        public static GetProvider<TSubsystem,TDescriptor,TProvider>($subsystem: UnityEngine_SubsystemsImplementation.SubsystemWithProvider$3<TSubsystem, TDescriptor, TProvider>):UnityEngine_SubsystemsImplementation.SubsystemProvider$1<TSubsystem>;
        
                    
    }
    
}

