//# signature=UnityEngine.StreamingModule#8d1cf0cab44d90161a840df6f81bd95f#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * A StreamingController controls the streaming settings for an individual camera location.
     */
    class StreamingController extends Behaviour {
        /**
         * Offset applied to the mipmap level chosen by the texture streaming system for any textures visible from this camera. This Offset can take either a positive or negative value.
         */
        public get streamingMipmapBias(): number;
        public set streamingMipmapBias(value: number);
        
        public constructor();
        /**
         * Initiate preloading of streaming data for this camera.
         * @param timeoutSeconds Optional timeout before stopping preloading. Set to 0.0f when no timeout is required.
         * @param activateCameraOnTimeout Set to True to activate the connected Camera component when timeout expires.
         * @param disableCameraCuttingFrom Camera to deactivate on timeout (if Camera.activateCameraOnTime is True). This parameter can be null.
         */
        public SetPreloading($timeoutSeconds?: number, $activateCameraOnTimeout?: boolean, $disableCameraCuttingFrom?: Camera):void;
        /**
         * Abort preloading.
         */
        public CancelPreloading():void;
        /**
         * Used to find out whether the StreamingController is currently preloading texture mipmaps.
         * @returns True if in a preloading state, otherwise False.
         */
        public IsPreloading():boolean;
        
                    
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
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

