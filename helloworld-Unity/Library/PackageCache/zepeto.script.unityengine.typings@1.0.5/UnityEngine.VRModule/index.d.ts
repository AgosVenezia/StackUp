//# signature=UnityEngine.VRModule#47cfae81a90e871b7e71447b7556aa46#0.0.4
// @ts-nocheck
declare module 'UnityEngineInternal.XR.WSA' {

    import * as System from 'System';
        
    
    class RemoteSpeechAccess extends System.Object {
        
        public constructor();
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.XR.WSA' {

    import * as System from 'System';
        
    
    enum RemoteDeviceVersion { V1 = 0, V2 = 1 }
    
}
declare module 'UnityEngine.XR' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
    import * as UnityEngine_XR_XRSettings from 'UnityEngine.XR.XRSettings';
        
    /**
     * Enumeration of available modes for XR rendering in the Game view or in the main window on a host PC. XR rendering only occurs when the Unity Editor is in Play Mode.
     */
    enum GameViewRenderMode { None = 0, LeftEye = 1, RightEye = 2, BothEyes = 3, OcclusionMesh = 4 }
    /**
     * Global XR related settings.
     */
    class XRSettings extends System.Object {
        /**
         * Globally enables or disables XR for the application.
         */
        public static get enabled(): boolean;
        public static set enabled(value: boolean);
        /**
         * Sets the render mode for the XR device. The render mode controls how the view of the XR device renders in the Game view and in the main window on a host PC.
         */
        public static get gameViewRenderMode(): GameViewRenderMode;
        public static set gameViewRenderMode(value: GameViewRenderMode);
        /**
         * Read-only value that can be used to determine if the XR device is active.
         */
        public static get isDeviceActive(): boolean;
        /**
         * This property has been deprecated. Use XRSettings.gameViewRenderMode instead.
         */
        public static get showDeviceView(): boolean;
        public static set showDeviceView(value: boolean);
        /**
         * Controls the actual size of eye textures as a multiplier of the device's default resolution.
         */
        public static get eyeTextureResolutionScale(): number;
        public static set eyeTextureResolutionScale(value: number);
        /**
         * The current width of an eye texture for the loaded device.
         */
        public static get eyeTextureWidth(): number;
        /**
         * The current height of an eye texture for the loaded device.
         */
        public static get eyeTextureHeight(): number;
        /**
         * Fetch the eye texture RenderTextureDescriptor from the active stereo device.
         */
        public static get eyeTextureDesc(): UnityEngine.RenderTextureDescriptor;
        /**
         * Fetch the device eye texture dimension from the active stereo device.
         */
        public static get deviceEyeTextureDimension(): UnityEngine_Rendering.TextureDimension;
        /**
         * Controls how much of the allocated eye texture should be used for rendering.
         */
        public static get renderViewportScale(): number;
        public static set renderViewportScale(value: number);
        /**
         * A scale applied to the standard occulsion mask for each platform.
         */
        public static get occlusionMaskScale(): number;
        public static set occlusionMaskScale(value: number);
        /**
         * Specifies whether or not the occlusion mesh should be used when rendering. Enabled by default.
         */
        public static get useOcclusionMesh(): boolean;
        public static set useOcclusionMesh(value: boolean);
        /**
         * Type of XR device that is currently loaded.
         */
        public static get loadedDeviceName(): string;
        /**
         * Returns a list of supported XR devices that were included at build time.
         */
        public static get supportedDevices(): string[];
        /**
         * The stereo rendering mode that is currently in use.
         */
        public static get stereoRenderingMode(): UnityEngine_XR_XRSettings.StereoRenderingMode;
        /**
         * Loads the requested device at the beginning of the next frame.
         * @param deviceName Name of the device from XRSettings.supportedDevices.
         * @param prioritizedDeviceNameList Prioritized list of device names from XRSettings.supportedDevices.
         */
        public static LoadDeviceByName($deviceName: string):void;
        /**
         * Loads the requested device at the beginning of the next frame.
         * @param deviceName Name of the device from XRSettings.supportedDevices.
         * @param prioritizedDeviceNameList Prioritized list of device names from XRSettings.supportedDevices.
         */
        public static LoadDeviceByName($prioritizedDeviceNameList: string[]):void;
        
                    
    }
    /**
     * Contains all functionality related to a XR device.
     */
    class XRDevice extends System.Object {
        /**
         * Refresh rate of the display in Hertz.
         */
        public static get refreshRate(): number;
        /**
         * Zooms the XR projection.
         */
        public static get fovZoomFactor(): number;
        public static set fovZoomFactor(value: number);
        /**
         * This method returns an IntPtr representing the native pointer to the XR device if one is available, otherwise the value will be IntPtr.Zero.
         * @returns The native pointer to the XR device.
         */
        public static GetNativePtr():System.IntPtr;
        
        public static DisableAutoXRCameraTracking($camera: UnityEngine.Camera, $disabled: boolean):void;
        /**
         * Recreates the XR platform's eye texture swap chain with the appropriate anti-aliasing sample count.  The reallocation of the eye texture will only occur if the MSAA quality setting's sample count is different from the sample count of the current eye texture.  Reallocations of the eye textures will happen at the beginning of the next frame.  This is an expensive operation and should only be used when necessary.
         * @returns Nothing.
         */
        public static UpdateEyeTextureMSAASetting():void;
        
        public static add_deviceLoaded($value: System.Action$1<string>):void;
        
        public static remove_deviceLoaded($value: System.Action$1<string>):void;
        
        public static deviceLoaded;
        
                    
    }
    /**
     * Represents the size of physical space available for XR.
     */
    enum TrackingSpaceType { Stationary = 0, RoomScale = 1 }
    /**
     * Timing and other statistics from the XR subsystem.
     */
    class XRStats extends System.Object {
        /**
         * Retrieves the time spent by the GPU last frame, in seconds, as reported by the XR SDK.
         * @param gpuTimeLastFrame Outputs the time spent by the GPU last frame.
         * @returns True if the GPU time spent last frame is available, false otherwise.
         */
        public static TryGetGPUTimeLastFrame($gpuTimeLastFrame: $Ref<number>):boolean;
        /**
         * Retrieves the number of dropped frames reported by the XR SDK.
         * @param droppedFrameCount Outputs the number of frames dropped since the last update.
         * @returns True if the dropped frame count is available, false otherwise.
         */
        public static TryGetDroppedFrameCount($droppedFrameCount: $Ref<number>):boolean;
        /**
         * Retrieves the number of times the current frame has been drawn to the device as reported by the XR SDK.
         * @param framePresentCount Outputs the number of times the current frame has been presented.
         * @returns True if the frame present count is available, false otherwise.
         */
        public static TryGetFramePresentCount($framePresentCount: $Ref<number>):boolean;
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * This struct contains all the information required to create a RenderTexture. It can be copied, cached, and reused to easily create RenderTextures that all share the same properties. Avoid using the default constructor as it does not initialize some flags with the recommended values.
     */
    interface RenderTextureDescriptor extends System.ValueType {
        
                    
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
declare module 'UnityEngine.Rendering' {

        
    /**
     * Texture "dimension" (type).
     */
    enum TextureDimension { Unknown = -1, None = 0, Any = 1, Tex2D = 2, Tex3D = 3, Cube = 4, Tex2DArray = 5, CubeArray = 6 }
    
}
declare module 'UnityEngine.XR.XRSettings' {

    import * as System from 'System';
        
    /**
     * Enum type signifying the different stereo rendering modes available.
     */
    enum StereoRenderingMode { MultiPass = 0, SinglePass = 1, SinglePassInstanced = 2, SinglePassMultiview = 3 }
    
}

