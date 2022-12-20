//# signature=UnityEngine.UI#0e336fb90cb140162c713f7e1d269e2a#0.0.4
// @ts-nocheck
declare module 'UnityEngine.EventSystems' {

    import * as UnityEngine from 'UnityEngine';
        
    
    interface EventTrigger extends UnityEngine.MonoBehaviour {
        
                    
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
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    type Converter$2<TInput,TOutput> = (input: TInput) => TOutput;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    type Predicate$1<T> = (obj: T) => boolean;
    
    type Action$1<T> = (obj: T) => void;
    
    type Comparison$1<T> = (x: T, y: T) => number;
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.EventSystems.EventTrigger' {

    import * as System from 'System';
        
    
    interface Entry extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
    import * as System_Collections_ObjectModel from 'System.Collections.ObjectModel';
    import * as RootNamespace from 'RootNamespace';
        
    
    class List$1<T> extends System.Object {
        
        public get Capacity(): number;
        public set Capacity(value: number);
        
        public get Count(): number;
        
        public constructor();
        
        public constructor($capacity: number);
        
        public constructor($collection: IEnumerable$1<T>);
        
        public get_Item($index: number):T;
        
        public set_Item($index: number, $value: T):void;
        
        public Add($item: T):void;
        
        public AddRange($collection: IEnumerable$1<T>):void;
        
        public AsReadOnly():System_Collections_ObjectModel.ReadOnlyCollection$1<T>;
        
        public BinarySearch($index: number, $count: number, $item: T, $comparer: IComparer$1<T>):number;
        
        public BinarySearch($item: T):number;
        
        public BinarySearch($item: T, $comparer: IComparer$1<T>):number;
        
        public Clear():void;
        
        public Contains($item: T):boolean;
        
        public ConvertAll<TOutput>($converter: System.Converter$2<T, TOutput>):List$1<TOutput>;
        
        public CopyTo($array: T[]):void;
        
        public CopyTo($index: number, $array: T[], $arrayIndex: number, $count: number):void;
        
        public CopyTo($array: T[], $arrayIndex: number):void;
        
        public Exists($match: System.Predicate$1<T>):boolean;
        
        public Find($match: System.Predicate$1<T>):T;
        
        public FindAll($match: System.Predicate$1<T>):List$1<T>;
        
        public FindIndex($match: System.Predicate$1<T>):number;
        
        public FindIndex($startIndex: number, $match: System.Predicate$1<T>):number;
        
        public FindIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
        
        public FindLast($match: System.Predicate$1<T>):T;
        
        public FindLastIndex($match: System.Predicate$1<T>):number;
        
        public FindLastIndex($startIndex: number, $match: System.Predicate$1<T>):number;
        
        public FindLastIndex($startIndex: number, $count: number, $match: System.Predicate$1<T>):number;
        
        public ForEach($action: System.Action$1<T>):void;
        
        public GetEnumerator():List$1.Enumerator<T>;
        
        public GetRange($index: number, $count: number):List$1<T>;
        
        public IndexOf($item: T):number;
        
        public IndexOf($item: T, $index: number):number;
        
        public IndexOf($item: T, $index: number, $count: number):number;
        
        public Insert($index: number, $item: T):void;
        
        public InsertRange($index: number, $collection: IEnumerable$1<T>):void;
        
        public LastIndexOf($item: T):number;
        
        public LastIndexOf($item: T, $index: number):number;
        
        public LastIndexOf($item: T, $index: number, $count: number):number;
        
        public Remove($item: T):boolean;
        
        public RemoveAll($match: System.Predicate$1<T>):number;
        
        public RemoveAt($index: number):void;
        
        public RemoveRange($index: number, $count: number):void;
        
        public Reverse():void;
        
        public Reverse($index: number, $count: number):void;
        
        public Sort():void;
        
        public Sort($comparer: IComparer$1<T>):void;
        
        public Sort($index: number, $count: number, $comparer: IComparer$1<T>):void;
        
        public Sort($comparison: System.Comparison$1<T>):void;
        
        public ToArray():T[];
        
        public TrimExcess():void;
        
        public TrueForAll($match: System.Predicate$1<T>):boolean;
        
                    
    }
    
    interface IEnumerable$1<T> {
        
                    
    }
    
    interface IComparer$1<T> {
        
                    
    }
    
}
declare module 'System.Collections.ObjectModel' {

    import * as System from 'System';
        
    
    interface ReadOnlyCollection$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic.List$1' {

    import * as System from 'System';
        
    
    interface Enumerator<T> extends System.ValueType {
        
                    
    }
    
}

