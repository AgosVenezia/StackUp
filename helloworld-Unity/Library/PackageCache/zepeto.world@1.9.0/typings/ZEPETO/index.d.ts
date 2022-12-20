//# signature=ZEPETO#2f75225154beaa87cf1e95dcca273bb3#0.0.4
// @ts-nocheck
declare module 'Zepeto' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Events from 'UnityEngine.Events';
        
    
    class ZepetoCharacterHashLoader extends ZepetoCharacterLoaderBase {
        
        public HashKey: string;
        
        public deformations: UnityEngine.TextAsset;
        
        public constructor();
        
                    
    }
    
    class ZepetoCharacterLoaderBase extends UnityEngine.MonoBehaviour {
        
        public Inplace: boolean;
        
        public editMode: boolean;
        
        public baked: boolean;
        
        public OnInitialized: UnityEngine_Events.UnityEvent;
        
        public ContextCreated: UnityEngine_Events.UnityEvent;
        
        public get Context(): ZepetoContext;
        
        public get IsInitialized(): boolean;
        
                    
    }
    
    interface ZepetoContext extends UnityEngine.MonoBehaviour {
        
                    
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
     * Text file assets.
     */
    interface TextAsset extends Object {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * A zero argument persistent callback that can be saved with the Scene.
     */
    interface UnityEvent extends UnityEventBase {
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    
}

