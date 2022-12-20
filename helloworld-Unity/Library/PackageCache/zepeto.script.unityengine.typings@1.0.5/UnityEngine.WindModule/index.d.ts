//# signature=UnityEngine.WindModule#5ad4fa4cfd26b7c7a6537eddd6fdff38#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Modes a Wind Zone can have, either Spherical or Directional.
     */
    enum WindZoneMode { Directional = 0, Spherical = 1 }
    /**
     * Wind Zones add realism to the trees you create by making them wave their branches and leaves as if blown by the wind.
     */
    class WindZone extends Component {
        /**
         * Defines the type of wind zone to be used (Spherical or Directional).
         */
        public get mode(): WindZoneMode;
        public set mode(value: WindZoneMode);
        /**
         * Radius of the Spherical Wind Zone (only active if the WindZoneMode is set to Spherical).
         */
        public get radius(): number;
        public set radius(value: number);
        /**
         * The primary wind force.
         */
        public get windMain(): number;
        public set windMain(value: number);
        /**
         * The turbulence wind force.
         */
        public get windTurbulence(): number;
        public set windTurbulence(value: number);
        /**
         * Defines how much the wind changes over time.
         */
        public get windPulseMagnitude(): number;
        public set windPulseMagnitude(value: number);
        /**
         * Defines the frequency of the wind changes.
         */
        public get windPulseFrequency(): number;
        public set windPulseFrequency(value: number);
        /**
         * The constructor.
         */
        public constructor();
        
                    
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

        
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

