//# signature=UnityEngine.JSONSerializeModule#1685b52d392ddce53b6e9c2e00fdacbe#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Utility functions for working with JSON data.
     */
    class JsonUtility extends System.Object {
        /**
         * Generate a JSON representation of the public fields of an object.
         * @param obj The object to convert to JSON form.
         * @param prettyPrint If true, format the output for readability. If false, format the output for minimum size. Default is false.
         * @returns The object's data in JSON format.
         */
        public static ToJson($obj: any):string;
        /**
         * Generate a JSON representation of the public fields of an object.
         * @param obj The object to convert to JSON form.
         * @param prettyPrint If true, format the output for readability. If false, format the output for minimum size. Default is false.
         * @returns The object's data in JSON format.
         */
        public static ToJson($obj: any, $prettyPrint: boolean):string;
        /**
         * Create an object from its JSON representation.
         * @param json The JSON representation of the object.
         * @returns An instance of the object.
         */
        public static FromJson<T>($json: string):T;
        /**
         * Create an object from its JSON representation.
         * @param json The JSON representation of the object.
         * @param type The type of object represented by the Json.
         * @returns An instance of the object.
         */
        public static FromJson($json: string, $type: System.Type):any;
        /**
         * Overwrite data in an object by reading from its JSON representation.
         * @param json The JSON representation of the object.
         * @param objectToOverwrite The object that should be overwritten.
         */
        public static FromJsonOverwrite($json: string, $objectToOverwrite: any):void;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}

