//# signature=UnityEngine.LocalizationModule#c3162842ef2f1c11409c43227c7f1290#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * An asset to represent a table of localized strings for one specific locale.
     */
    class LocalizationAsset extends Object {
        /**
         * ISO Code used to identify the locale. ex: en-uk, zh-hans, ja
         */
        public get localeIsoCode(): string;
        public set localeIsoCode(value: string);
        /**
         * Is this asset used to localize UI components of the Unity Editor
         */
        public get isEditorAsset(): boolean;
        public set isEditorAsset(value: boolean);
        /**
         * Creates a new empty LocalizationAsset object.
         */
        public constructor();
        /**
         * Set the localized string for the specified key
         * @param original Original string acting as key.
         * @param localized Localized string matching the original in the LocalizationAsset locale
         */
        public SetLocalizedString($original: string, $localized: string):void;
        /**
         * Get the localized string for the specified key.
         * @param original Original string acting as key.
         * @returns Localized string matching the original in the LocalizationAsset locale
         */
        public GetLocalizedString($original: string):string;
        
                    
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
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

