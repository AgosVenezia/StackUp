//# signature=ZEPETO.IWP#2aab70ebd753ed85eb03db2e7e4eafdb#0.0.4
// @ts-nocheck
declare module 'ZEPETO.IWP' {

    import * as System from 'System';
    import * as ZEPETO_IWP_Item from 'ZEPETO.IWP.Item';
    import * as UnityEngine from 'UnityEngine';
        
    
    class Item extends System.Object {
        
        public oid: number;
        
        public itemId: string;
        
        public name: string;
        
        public description: string;
        
        public price: number;
        
        public status: string;
        
        public forbiddenReason: ForbiddenReason;
        
        public worldVersionOid: number;
        
        public isPurchased: boolean;
        
        public creatorUid: string;
        
        public iconURL: string;
        
        public get PurchaseType(): ZEPETO_IWP_Item.Type;
        
        public constructor();
        
        public ToString():string;
        
                    
    }
    
    interface ForbiddenReason extends System.Object {
        
                    
    }
    
    class PurchaseFailureReason extends System.Object {
        
        public message: string;
        
        public item: Item;
        
        public constructor();
        
                    
    }
    
    class ZepetoIWPButton extends UnityEngine.MonoBehaviour {
        
        public get ItemId(): string;
        
        public constructor();
        
        public SetItemId($itemId: string):void;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'ZEPETO.IWP.Item' {

        
    
    enum Type { None = 0, Consumable = 1, NonConsumable = 2 }
    
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

