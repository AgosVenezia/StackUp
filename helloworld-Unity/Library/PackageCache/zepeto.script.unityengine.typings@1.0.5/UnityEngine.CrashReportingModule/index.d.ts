//# signature=UnityEngine.CrashReportingModule#e1d77b01dd99f120e114ae90ef1dafa0#0.0.4
// @ts-nocheck
declare module 'UnityEngine.CrashReportHandler' {

    import * as System from 'System';
        
    /**
     * Engine API for CrashReporting Service.
     */
    class CrashReportHandler extends System.Object {
        /**
         * This Boolean field will cause CrashReportHandler to capture exceptions when set to true. By default enable capture exceptions is true.
         */
        public static get enableCaptureExceptions(): boolean;
        public static set enableCaptureExceptions(value: boolean);
        /**
         * The Performance Reporting service will keep a buffer of up to the last X log messages (Debug.Log, etc) to send along with crash reports.  The default is 10 log messages, the max is 50. Set this to 0 to disable capture of logs with your crash reports.
         */
        public static get logBufferSize(): number;
        public static set logBufferSize(value: number);
        /**
         * Get a custom crash report metadata field that has been set.
         * @returns Value that was previously set for the key, or null if no value was found.
         */
        public static GetUserMetadata($key: string):string;
        /**
         * Set a custom metadata key-value pair to be included with crash reports.
         */
        public static SetUserMetadata($key: string, $value: string):void;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

