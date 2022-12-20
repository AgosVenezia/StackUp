//# signature=UnityEngine.UnityWebRequestAudioModule#8dbc839bed0d84f684ce4a8216321549#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Networking' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Helpers for downloading multimedia files using UnityWebRequest.
     */
    class UnityWebRequestMultimedia extends System.Object {
        /**
         * Create a UnityWebRequest to download an audio clip via HTTP GET and create an AudioClip based on the retrieved data.
         * @param uri The URI of the audio clip to download.
         * @param audioType The type of audio encoding for the downloaded audio clip. See AudioType.
         * @returns A UnityWebRequest properly configured to download an audio clip and convert it to an AudioClip.
         */
        public static GetAudioClip($uri: string, $audioType: UnityEngine.AudioType):UnityWebRequest;
        
        public static GetAudioClip($uri: System.Uri, $audioType: UnityEngine.AudioType):UnityWebRequest;
        
                    
    }
    /**
     * The UnityWebRequest object is used to communicate with web servers.
     */
    interface UnityWebRequest extends System.Object {
        
                    
    }
    /**
     * A DownloadHandler subclass specialized for downloading audio data for use as AudioClip objects.
     */
    class DownloadHandlerAudioClip extends DownloadHandler {
        /**
         * Returns the downloaded AudioClip, or null. (Read Only)
         */
        public get audioClip(): UnityEngine.AudioClip;
        /**
         * Create streaming AudioClip.
         */
        public get streamAudio(): boolean;
        public set streamAudio(value: boolean);
        /**
         * Create AudioClip that is compressed in memory.
         */
        public get compressed(): boolean;
        public set compressed(value: boolean);
        /**
         * Constructor, specifies what kind of audio data is going to be downloaded.
         * @param url The nominal (pre-redirect) URL at which the audio clip is located.
         * @param audioType Value to set for AudioClip type.
         */
        public constructor($url: string, $audioType: UnityEngine.AudioType);
        
        public constructor($uri: System.Uri, $audioType: UnityEngine.AudioType);
        /**
         * Returns the downloaded AudioClip, or null.
         * @param www A finished UnityWebRequest object with DownloadHandlerAudioClip attached.
         * @returns The same as DownloadHandlerAudioClip.audioClip
         */
        public static GetContent($www: UnityWebRequest):UnityEngine.AudioClip;
        
                    
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
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Uri extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Type of the imported(native) data.
     */
    enum AudioType { UNKNOWN = 0, ACC = 1, AIFF = 2, IT = 10, MOD = 12, MPEG = 13, OGGVORBIS = 14, S3M = 17, WAV = 20, XM = 21, XMA = 22, VAG = 23, AUDIOQUEUE = 24 }
    /**
     * A container for audio data.
     */
    interface AudioClip extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    
}

