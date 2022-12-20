// @ts-nocheck

// global variables
declare interface ZepetoScriptBehaviour {}

// primitive types
type float = number;
type double = number;
type int = number;
type long = number;
type bool = boolean;

// global functions
declare function $ref<T>(x?:T):$Ref<T>;
declare function $unref<T>(x:$Ref<T>):T;
declare function $set(x:any, val:any);
declare function $promise(x:any);
declare function $generic(genericTypeInfo:any, ...genericArgs:any[]);
declare function $extension(cls:any, extension?:any);
declare function $typeof(x:any);
declare function $clone<T>(x:{get_Clone:()=>T}):T;

// attributes
declare function NonSerialized(): (target: Object, property: string) => void;
declare function HideInInspector(): (target: Object, property: string) => void;
declare function SerializeField(): (target: Object, property: string) => void;
declare function Header(header: string): (target: Object, property: string) => void;
declare function Space(height?: number): (target: Object, property: string) => void;
declare function Tooltip(tooltip: string): (target: Object, property: string) => void;



interface $Ref<T> {
    value: T
}

declare interface Array<T> {
    Length:number;
    get_Item(index:number):T;
    set_Item(index:number, value:T):T;
}

declare module 'System' {
    interface Type {}
    class Array extends Object { }
    class Object { }
    class ValueType extends Object { }
}
declare module 'puerts' {
    declare function on(type: string|number, listener: Function, prepend?:boolean) : void;
    declare function off(type: string|number, listener: Function) : void;
    declare function emit(type: string|number, ...args:any) : void;
}
declare module 'RootNamespace' {
    
}


declare module 'ZEPETO.Script' {
    import UnityEngine from "UnityEngine";

    interface ZepetoScriptableObject<T = any> {
        targetObject:T;
    }
    interface ZepetoScriptBehaviour {
        StartCoroutine(generator:Generator):UnityEngine.Coroutine;
    }
}

// other clr supports
