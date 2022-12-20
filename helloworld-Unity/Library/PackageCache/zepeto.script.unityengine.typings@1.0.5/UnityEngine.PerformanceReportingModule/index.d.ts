//# signature=UnityEngine.PerformanceReportingModule#086b0d7d9cb05a4743def417e08e0a32#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Analytics' {

    import * as System from 'System';
        
    /**
     * Unity Performace provides insight into your game performace.
     */
    class PerformanceReporting extends System.Object {
        /**
         * Controls whether the Performance Reporting service is enabled at runtime.
         */
        public static get enabled(): boolean;
        public static set enabled(value: boolean);
        /**
         * Time taken to initialize graphics in microseconds, measured from application startup.
         */
        public static get graphicsInitializationFinishTime(): bigint;
        
                    
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
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

