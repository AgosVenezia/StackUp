//# signature=ZEPETO.Chat#73449a95478ac98c8c850f2ae9a3b7dd#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Chat' {

    import * as System from 'System';
    import * as UnityEngine_Events from 'UnityEngine.Events';
        
    
    enum MessageType { USER = 0 }
    
    interface IMessage {
        
        type: MessageType;
        
                    
    }
    
    class UserMessage extends System.Object {
        
        public message: string;
        
        public userId: string;
        
        public userName: string;
        
        public get type(): MessageType;
        
        public constructor();
        
                    
    }
    
    class ZepetoChat extends System.Object {
        
        public static get Instance(): ZepetoChatImplementation;
        
        public static get OnReceivedMessage(): UnityEngine_Events.UnityEvent$1<IMessage>;
        
        public constructor();
        
        public static Send($message: string):void;
        
                    
    }
    
    interface ZepetoChatImplementation extends System.Object {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * One argument version of UnityEvent.
     */
    class UnityEvent$1<T0> extends UnityEventBase {
        
        public constructor();
        
        public AddListener($call: UnityAction$1<T0>):void;
        
        public RemoveListener($call: UnityAction$1<T0>):void;
        
        public Invoke($arg0: T0):void;
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    
    type UnityAction$1<T0> = (arg0: T0) => void;
    
}

