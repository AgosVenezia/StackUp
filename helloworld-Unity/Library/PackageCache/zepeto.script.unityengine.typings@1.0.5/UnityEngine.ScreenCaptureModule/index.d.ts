//# signature=UnityEngine.ScreenCaptureModule#50c1c806d85bcf0f28bd8db00c747a85#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as UnityEngine_ScreenCapture from 'UnityEngine.ScreenCapture';
        
    /**
     * Functionality to take Screenshots.
     */
    class ScreenCapture extends System.Object {
        
        public static CaptureScreenshot($filename: string):void;
        /**
         * Captures a screenshot at path filename as a PNG file.
         * @param filename Pathname to save the screenshot file to.
         * @param superSize Factor by which to increase resolution.
         * @param stereoCaptureMode Specifies the eye texture to capture when stereo rendering is enabled.
         */
        public static CaptureScreenshot($filename: string, $superSize: number):void;
        /**
         * Captures a screenshot at path filename as a PNG file.
         * @param filename Pathname to save the screenshot file to.
         * @param superSize Factor by which to increase resolution.
         * @param stereoCaptureMode Specifies the eye texture to capture when stereo rendering is enabled.
         */
        public static CaptureScreenshot($filename: string, $stereoCaptureMode: UnityEngine_ScreenCapture.StereoScreenCaptureMode):void;
        
        public static CaptureScreenshotAsTexture():Texture2D;
        /**
         * Captures a screenshot of the game view into a Texture2D object.
         * @param superSize Factor by which to increase resolution.
         * @param stereoCaptureMode Specifies the eye texture to capture when stereo rendering is enabled.
         */
        public static CaptureScreenshotAsTexture($superSize: number):Texture2D;
        /**
         * Captures a screenshot of the game view into a Texture2D object.
         * @param superSize Factor by which to increase resolution.
         * @param stereoCaptureMode Specifies the eye texture to capture when stereo rendering is enabled.
         */
        public static CaptureScreenshotAsTexture($stereoCaptureMode: UnityEngine_ScreenCapture.StereoScreenCaptureMode):Texture2D;
        /**
         * Captures a screenshot of the game view into a RenderTexture object.
         * @param renderTexture RenderTexture that will get filled with the screen content.
         */
        public static CaptureScreenshotIntoRenderTexture($renderTexture: RenderTexture):void;
        
                    
    }
    /**
     * Class that represents textures in C# code.
     */
    interface Texture2D extends Texture {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * Render textures are textures that can be rendered to.
     */
    interface RenderTexture extends Texture {
        
                    
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
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.ScreenCapture' {

    import * as System from 'System';
        
    /**
     * Enumeration specifying the eye texture to capture when using ScreenCapture.CaptureScreenshot and when stereo rendering is enabled.
     */
    enum StereoScreenCaptureMode { LeftEye = 1, RightEye = 2, BothEyes = 3 }
    
}

