//# signature=ZEPETO.World.Shared#7f31ab3368e537fb5febd2b6945424f4#0.0.4
// @ts-nocheck
declare module 'ZEPETO.World' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    
    class WorldService extends System.Object {
        
        public static userId: string;
        
        public static userName: string;
        
        public static applicationId: string;
        
        public static worldId: string;
        
        public static worldVersion: string;
        
        public static worldName: string;
        
        public static GetCustomParamValue($key: string):string;
        
        public static GetMatchmakingValue($key: string):string;
        
        public static RematchWorld(...keyValues: MatchmakingKeyValue[]):void;
        
                    
    }
    
    class MatchmakingKeyValue extends System.ValueType {
        
        public Key: string;
        
        public Value: string;
        
        public constructor($key: string, $value: string);
        
        public ToString():string;
        
                    
    }
    
    class WorldUtils extends System.Object {
        
        public constructor();
        
        public static Encrypt($plain: string):string;
        
        public static Decrypt($encrypt: string):string;
        
                    
    }
    
    enum ZepetoScreenOrientation { Vertical = 0, Horizontal = 1 }
    
    class CustomRematchComponent extends UnityEngine.MonoBehaviour {
        
        public matchKeyValues: System_Collections_Generic.List$1<MatchmakingKeyValue>;
        
        public constructor();
        
        public Rematch():void;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
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
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}

