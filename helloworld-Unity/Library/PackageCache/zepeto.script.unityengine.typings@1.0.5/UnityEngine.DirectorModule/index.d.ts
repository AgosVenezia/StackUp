//# signature=UnityEngine.DirectorModule#1df8b8ba049c3f8f2f7684118b9762fb#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Playables' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    /**
     * Instantiates a PlayableAsset and controls playback of Playable objects.
     */
    class PlayableDirector extends UnityEngine.Behaviour {
        /**
         * The current playing state of the component. (Read Only)
         */
        public get state(): PlayState;
        /**
         * Controls how the time is incremented when it goes beyond the duration of the playable.
         */
        public get extrapolationMode(): DirectorWrapMode;
        public set extrapolationMode(value: DirectorWrapMode);
        /**
         * The PlayableAsset that is used to instantiate a playable for playback.
         */
        public get playableAsset(): PlayableAsset;
        public set playableAsset(value: PlayableAsset);
        /**
         * The PlayableGraph created by the PlayableDirector.
         */
        public get playableGraph(): PlayableGraph;
        /**
         * Whether the playable asset will start playing back as soon as the component awakes.
         */
        public get playOnAwake(): boolean;
        public set playOnAwake(value: boolean);
        /**
         * Controls how time is incremented when playing back.
         */
        public get timeUpdateMode(): DirectorUpdateMode;
        public set timeUpdateMode(value: DirectorUpdateMode);
        /**
         * The component's current time. This value is incremented according to the PlayableDirector.timeUpdateMode when it is playing. You can also change this value manually.
         */
        public get time(): number;
        public set time(value: number);
        /**
         * The time at which the Playable should start when first played.
         */
        public get initialTime(): number;
        public set initialTime(value: number);
        /**
         * The duration of the Playable in seconds.
         */
        public get duration(): number;
        
        public constructor();
        /**
         * Tells the PlayableDirector to evaluate it's PlayableGraph on the next update.
         */
        public DeferredEvaluate():void;
        /**
         * Instatiates a Playable using the provided PlayableAsset and starts playback.
         * @param asset An asset to instantiate a playable from.
         * @param mode What to do when the time passes the duration of the playable.
         */
        public Play($asset: PlayableAsset):void;
        /**
         * Instatiates a Playable using the provided PlayableAsset and starts playback.
         * @param asset An asset to instantiate a playable from.
         * @param mode What to do when the time passes the duration of the playable.
         */
        public Play($asset: PlayableAsset, $mode: DirectorWrapMode):void;
        /**
         * Sets the binding of a reference object from a PlayableBinding.
         * @param key The source object in the PlayableBinding.
         * @param value The object to bind to the key.
         */
        public SetGenericBinding($key: UnityEngine.Object, $value: UnityEngine.Object):void;
        /**
         * Evaluates the currently playing Playable at  the current time.
         */
        public Evaluate():void;
        /**
         * Instatiates a Playable using the provided PlayableAsset and starts playback.
         * @param asset An asset to instantiate a playable from.
         * @param mode What to do when the time passes the duration of the playable.
         */
        public Play():void;
        /**
         * Stops playback of the current Playable and destroys the corresponding graph.
         */
        public Stop():void;
        /**
         * Pauses playback of the currently running playable.
         */
        public Pause():void;
        /**
         * Resume playing a paused playable.
         */
        public Resume():void;
        /**
         * Discards the existing PlayableGraph and creates a new instance.
         */
        public RebuildGraph():void;
        /**
         * Clears an exposed reference value.
         * @param id Identifier of the ExposedReference.
         */
        public ClearReferenceValue($id: UnityEngine.PropertyName):void;
        /**
         * Sets an ExposedReference value.
         * @param id Identifier of the ExposedReference.
         * @param value The object to bind to set the reference value to.
         */
        public SetReferenceValue($id: UnityEngine.PropertyName, $value: UnityEngine.Object):void;
        /**
         * Retreives an ExposedReference binding.
         * @param id Identifier of the ExposedReference.
         * @param idValid Whether the reference was found.
         */
        public GetReferenceValue($id: UnityEngine.PropertyName, $idValid: $Ref<boolean>):UnityEngine.Object;
        /**
         * Returns a binding to a reference object.
         * @param key The object that acts as a key.
         */
        public GetGenericBinding($key: UnityEngine.Object):UnityEngine.Object;
        /**
         * Clears the binding of a reference object.
         * @param key The source object in the PlayableBinding.
         */
        public ClearGenericBinding($key: UnityEngine.Object):void;
        /**
         * Rebinds each PlayableOutput of the PlayableGraph.
         */
        public RebindPlayableGraphOutputs():void;
        
        public add_played($value: System.Action$1<PlayableDirector>):void;
        
        public remove_played($value: System.Action$1<PlayableDirector>):void;
        
        public add_paused($value: System.Action$1<PlayableDirector>):void;
        
        public remove_paused($value: System.Action$1<PlayableDirector>):void;
        
        public add_stopped($value: System.Action$1<PlayableDirector>):void;
        
        public remove_stopped($value: System.Action$1<PlayableDirector>):void;
        
        public played;
        
        public paused;
        
        public stopped;
        
                    
    }
    /**
     * Status of a Playable.
     */
    enum PlayState { Paused = 0, Playing = 1, Delayed = 2 }
    /**
     * Wrap mode for Playables.
     */
    enum DirectorWrapMode { Hold = 0, Loop = 1, None = 2 }
    /**
     * A base class for assets that can be used to instantiate a Playable at runtime.
     */
    interface PlayableAsset extends UnityEngine.ScriptableObject {
        
                    
    }
    /**
     * Use the PlayableGraph to manage Playable creations and destructions.
     */
    interface PlayableGraph extends System.ValueType {
        
                    
    }
    /**
     * Defines what time source is used to update a Director graph.
     */
    enum DirectorUpdateMode { DSPClock = 0, GameTime = 1, UnscaledGameTime = 2, Manual = 3 }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
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
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Represents a string as an int for efficient lookup and comparison. Use this for common PropertyNames.
     * Internally stores just an int to represent the string. A PropertyName can be created from a string but can not be converted back to a string. The same string always results in the same int representing that string. Thus this is a very efficient string representation in both memory and speed when all you need is comparison.
     * PropertyName is serializable.
     * ToString() is only implemented for debugging purposes in the editor it returns "theName:3737" in the player it returns "Unknown:3737".
     */
    interface PropertyName extends System.ValueType {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

