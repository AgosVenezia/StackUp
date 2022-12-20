//# signature=UnityEngine.AccessibilityModule#60c49a1b70eb4d36116c697717b4cd1c#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Accessibility' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * A class containing methods to assist with accessibility for users with different vision capabilities.
     */
    class VisionUtility extends System.Object {
        /**
         * Gets a palette of colors that should be distinguishable for normal vision, deuteranopia, protanopia, and tritanopia.
         * @param palette An array of colors to populate with a palette.
         * @param minimumLuminance Minimum allowable perceived luminance from 0 to 1. A value of 0.2 or greater is recommended for dark backgrounds.
         * @param maximumLuminance Maximum allowable perceived luminance from 0 to 1. A value of 0.8 or less is recommended for light backgrounds.
         * @returns The number of unambiguous colors in the palette.
         */
        public static GetColorBlindSafePalette($palette: UnityEngine.Color[], $minimumLuminance: number, $maximumLuminance: number):number;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    
}

