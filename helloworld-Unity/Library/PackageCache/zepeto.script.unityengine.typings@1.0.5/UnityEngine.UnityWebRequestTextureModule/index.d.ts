//# signature=UnityEngine.UnityWebRequestTextureModule#35c33a36eebfa6a98d7b6e3e99e90ad2#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Networking' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Helpers for downloading image files into Textures using UnityWebRequest.
     */
    class UnityWebRequestTexture extends System.Object {
        /**
         * Create a UnityWebRequest intended to download an image via HTTP GET and create a Texture based on the retrieved data.
         * @param uri The URI of the image to download.
         * @param nonReadable If true, the texture's raw data will not be accessible to script. This can conserve memory. Default: false.
         * @returns A UnityWebRequest properly configured to download an image and convert it to a Texture.
         */
        public static GetTexture($uri: string):UnityWebRequest;
        
        public static GetTexture($uri: System.Uri):UnityWebRequest;
        /**
         * Create a UnityWebRequest intended to download an image via HTTP GET and create a Texture based on the retrieved data.
         * @param uri The URI of the image to download.
         * @param nonReadable If true, the texture's raw data will not be accessible to script. This can conserve memory. Default: false.
         * @returns A UnityWebRequest properly configured to download an image and convert it to a Texture.
         */
        public static GetTexture($uri: string, $nonReadable: boolean):UnityWebRequest;
        
        public static GetTexture($uri: System.Uri, $nonReadable: boolean):UnityWebRequest;
        
                    
    }
    /**
     * The UnityWebRequest object is used to communicate with web servers.
     */
    interface UnityWebRequest extends System.Object {
        
                    
    }
    /**
     * A DownloadHandler subclass specialized for downloading images for use as Texture objects.
     */
    class DownloadHandlerTexture extends DownloadHandler {
        /**
         * Returns the downloaded Texture, or null. (Read Only)
         */
        public get texture(): UnityEngine.Texture2D;
        /**
         * Default constructor.
         */
        public constructor();
        /**
         * Constructor, allows TextureImporter.isReadable property to be set.
         * @param readable Value to set for TextureImporter.isReadable.
         */
        public constructor($readable: boolean);
        /**
         * Returns the downloaded Texture, or null.
         * @param www A finished UnityWebRequest object with DownloadHandlerTexture attached.
         * @returns The same as DownloadHandlerTexture.texture
         */
        public static GetContent($www: UnityWebRequest):UnityEngine.Texture2D;
        
                    
    }
    /**
     * Manage and process HTTP response body data received from a remote server.
     */
    interface DownloadHandler extends System.Object {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Uri extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
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
    
}

