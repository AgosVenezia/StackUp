//# signature=UnityEngine.VideoModule#43beddda595f8134adc44d05b87caf27#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Experimental.Video' {

    import * as System from 'System';
    import * as UnityEngine_Playables from 'UnityEngine.Playables';
    import * as UnityEngine_Video from 'UnityEngine.Video';
    import * as UnityEngine_Experimental_Audio from 'UnityEngine.Experimental.Audio';
        
    /**
     * An implementation of IPlayable that controls playback of a VideoClip.
     */
    class VideoClipPlayable extends System.ValueType {
        /**
         * Creates a VideoClipPlayable in the PlayableGraph.
         * @param graph The PlayableGraph object that will own the VideoClipPlayable.
         * @param looping Indicates if VideoClip loops when it reaches the end.
         * @param clip VideoClip used to produce textures in the PlayableGraph.
         * @returns A VideoClipPlayable linked to the PlayableGraph.
         */
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $clip: UnityEngine_Video.VideoClip, $looping: boolean):VideoClipPlayable;
        
        public GetHandle():UnityEngine_Playables.PlayableHandle;
        
        public static op_Implicit($playable: VideoClipPlayable):UnityEngine_Playables.Playable;
        
        public static op_Explicit($playable: UnityEngine_Playables.Playable):VideoClipPlayable;
        
        public Equals($other: VideoClipPlayable):boolean;
        
        public GetClip():UnityEngine_Video.VideoClip;
        
        public SetClip($value: UnityEngine_Video.VideoClip):void;
        
        public GetLooped():boolean;
        
        public SetLooped($value: boolean):void;
        
        public IsPlaying():boolean;
        
        public GetStartDelay():number;
        
        public GetPauseDelay():number;
        
        public Seek($startTime: number, $startDelay: number):void;
        
        public Seek($startTime: number, $startDelay: number, $duration: number):void;
        
        public get_Clone(): VideoClipPlayable;            
    }
    /**
     * Extension methods for the Video.VideoPlayer class.
     */
    class VideoPlayerExtensions extends System.Object {
        /**
         * Return the Experimental.Audio.AudioSampleProvider for the specified track, used to receive audio samples during playback.
         * @param vp The "this" pointer for the extension method.
         * @param trackIndex The audio track index for which the sample provider is queried.
         * @returns The sample provider for the specified track.
         */
        public static GetAudioSampleProvider($vp: UnityEngine_Video.VideoPlayer, $trackIndex: number):UnityEngine_Experimental_Audio.AudioSampleProvider;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    interface UInt16 extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface UInt64 extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.Playables' {

    import * as System from 'System';
        
    /**
     * Use the PlayableGraph to manage Playable creations and destructions.
     */
    interface PlayableGraph extends System.ValueType {
        
                    
    }
    
    interface PlayableHandle extends System.ValueType {
        
                    
    }
    /**
     * Playables are customizable runtime objects that can be connected together and are contained in a PlayableGraph to create complex behaviours.
     */
    interface Playable extends System.ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.Video' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
    import * as UnityEngine_Video_VideoPlayer from 'UnityEngine.Video.VideoPlayer';
    import * as UnityEngine_Experimental_Audio from 'UnityEngine.Experimental.Audio';
        
    /**
     * A container for video data.
     */
    class VideoClip extends UnityEngine.Object {
        /**
         * The video clip path in the project's assets. (Read Only).
         */
        public get originalPath(): string;
        /**
         * The length of the VideoClip in frames. (Read Only).
         */
        public get frameCount(): bigint;
        /**
         * The frame rate of the clip in frames/second. (Read Only).
         */
        public get frameRate(): number;
        /**
         * The length of the video clip in seconds. (Read Only).
         */
        public get length(): number;
        /**
         * The width of the images in the video clip in pixels. (Read Only).
         */
        public get width(): number;
        /**
         * The height of the images in the video clip in pixels. (Read Only).
         */
        public get height(): number;
        /**
         * Numerator of the pixel aspect ratio (num:den). (Read Only).
         */
        public get pixelAspectRatioNumerator(): number;
        /**
         * Denominator of the pixel aspect ratio (num:den). (Read Only).
         */
        public get pixelAspectRatioDenominator(): number;
        /**
         * Whether the imported clip contains sRGB color data (Read Only).
         */
        public get sRGB(): boolean;
        /**
         * Number of audio tracks in the clip.
         */
        public get audioTrackCount(): number;
        /**
         * The number of channels in the audio track.  E.g. 2 for a stereo track.
         * @param audioTrackIdx Index of the audio queried audio track.
         * @returns The number of channels.
         */
        public GetAudioChannelCount($audioTrackIdx: number):number;
        /**
         * Get the audio track sampling rate in Hertz.
         * @param audioTrackIdx Index of the audio queried audio track.
         * @returns The sampling rate in Hertz.
         */
        public GetAudioSampleRate($audioTrackIdx: number):number;
        /**
         * Get the audio track language.  Can be unknown.
         * @param audioTrackIdx Index of the audio queried audio track.
         * @returns The abbreviated name of the language.
         */
        public GetAudioLanguage($audioTrackIdx: number):string;
        
                    
    }
    /**
     * Plays video content onto a target.
     */
    class VideoPlayer extends UnityEngine.Behaviour {
        /**
         * The source that the VideoPlayer uses for playback.
         */
        public get source(): VideoSource;
        public set source(value: VideoSource);
        /**
         * The file or HTTP URL that the VideoPlayer reads content from.
         */
        public get url(): string;
        public set url(value: string);
        /**
         * The clip being played by the VideoPlayer.
         */
        public get clip(): VideoClip;
        public set clip(value: VideoClip);
        /**
         * Where the video content will be drawn.
         */
        public get renderMode(): VideoRenderMode;
        public set renderMode(value: VideoRenderMode);
        /**
         * Camera component to draw to when Video.VideoPlayer.renderMode is set to either Video.VideoRenderMode.CameraFarPlane or Video.VideoRenderMode.CameraNearPlane.
         */
        public get targetCamera(): UnityEngine.Camera;
        public set targetCamera(value: UnityEngine.Camera);
        /**
         * RenderTexture to draw to when Video.VideoPlayer.renderMode is set to Video.VideoTarget.RenderTexture.
         */
        public get targetTexture(): UnityEngine.RenderTexture;
        public set targetTexture(value: UnityEngine.RenderTexture);
        /**
         * Renderer which is targeted when Video.VideoPlayer.renderMode is set to Video.VideoTarget.MaterialOverride
         */
        public get targetMaterialRenderer(): UnityEngine.Renderer;
        public set targetMaterialRenderer(value: UnityEngine.Renderer);
        /**
         * Material texture property which is targeted when Video.VideoPlayer.renderMode is set to Video.VideoTarget.MaterialOverride.
         */
        public get targetMaterialProperty(): string;
        public set targetMaterialProperty(value: string);
        /**
         * Defines how the video content will be stretched to fill the target area.
         */
        public get aspectRatio(): VideoAspectRatio;
        public set aspectRatio(value: VideoAspectRatio);
        /**
         * Overall transparency level of the target camera plane video.
         */
        public get targetCameraAlpha(): number;
        public set targetCameraAlpha(value: number);
        /**
         * Type of 3D content contained in the source video media.
         */
        public get targetCamera3DLayout(): Video3DLayout;
        public set targetCamera3DLayout(value: Video3DLayout);
        /**
         * Internal texture in which video content is placed. (Read Only)
         */
        public get texture(): UnityEngine.Texture;
        /**
         * Whether the VideoPlayer has successfully prepared the content to be played. (Read Only)
         */
        public get isPrepared(): boolean;
        /**
         * Determines whether the VideoPlayer will wait for the first frame to be loaded into the texture before starting playback when Video.VideoPlayer.playOnAwake is on.
         */
        public get waitForFirstFrame(): boolean;
        public set waitForFirstFrame(value: boolean);
        /**
         * Whether the content will start playing back as soon as the component awakes.
         */
        public get playOnAwake(): boolean;
        public set playOnAwake(value: boolean);
        /**
         * Whether content is being played. (Read Only)
         */
        public get isPlaying(): boolean;
        /**
         * Whether playback is paused. (Read Only)
         */
        public get isPaused(): boolean;
        /**
         * Whether current time can be changed using the time or timeFrames property. (Read Only)
         */
        public get canSetTime(): boolean;
        /**
         * The presentation time of the currently available frame in VideoPlayer.texture.
         */
        public get time(): number;
        public set time(value: number);
        /**
         * The frame index of the currently available frame in VideoPlayer.texture.
         */
        public get frame(): bigint;
        public set frame(value: bigint);
        /**
         * The clock time that the VideoPlayer follows to schedule its samples. The clock time is expressed in seconds. (Read Only)
         */
        public get clockTime(): number;
        /**
         * Returns true if the VideoPlayer can step forward through the video content. (Read Only)
         */
        public get canStep(): boolean;
        /**
         * Whether the playback speed can be changed. (Read Only)
         */
        public get canSetPlaybackSpeed(): boolean;
        /**
         * Factor by which the basic playback rate will be multiplied.
         */
        public get playbackSpeed(): number;
        public set playbackSpeed(value: number);
        /**
         * Determines whether the VideoPlayer restarts from the beginning when it reaches the end of the clip.
         */
        public get isLooping(): boolean;
        public set isLooping(value: boolean);
        /**
         * Whether the time source followed by the VideoPlayer can be changed. (Read Only)
         */
        public get canSetTimeSource(): boolean;
        /**
         * [NOT YET IMPLEMENTED] The source used used by the VideoPlayer to derive its current time.
         */
        public get timeSource(): VideoTimeSource;
        public set timeSource(value: VideoTimeSource);
        /**
         * The clock that the Video.VideoPlayer observes to detect and correct drift.
         */
        public get timeReference(): VideoTimeReference;
        public set timeReference(value: VideoTimeReference);
        /**
         * Reference time of the external clock the Video.VideoPlayer uses to correct its drift.
         */
        public get externalReferenceTime(): number;
        public set externalReferenceTime(value: number);
        /**
         * Whether frame-skipping to maintain synchronization can be controlled. (Read Only)
         */
        public get canSetSkipOnDrop(): boolean;
        /**
         * Whether the VideoPlayer is allowed to skip frames to catch up with current time.
         */
        public get skipOnDrop(): boolean;
        public set skipOnDrop(value: boolean);
        /**
         * Number of frames in the current video content. (Read Only)
         */
        public get frameCount(): bigint;
        /**
         * The frame rate of the clip or URL in frames/second. (Read Only)
         */
        public get frameRate(): number;
        /**
         * The length of the VideoClip, or the URL, in seconds. (Read Only)
         */
        public get length(): number;
        /**
         * The width of the images in the VideoClip, or URL, in pixels. (Read Only)
         */
        public get width(): number;
        /**
         * The height of the images in the VideoClip, or URL, in pixels. (Read Only)
         */
        public get height(): number;
        /**
         * Numerator of the pixel aspect ratio (num:den) for the VideoClip or the URL. (Read Only)
         */
        public get pixelAspectRatioNumerator(): number;
        /**
         * Denominator of the pixel aspect ratio (num:den) for the VideoClip or the URL. (Read Only)
         */
        public get pixelAspectRatioDenominator(): number;
        /**
         * Number of audio tracks found in the data source currently configured. (Read Only)
         */
        public get audioTrackCount(): number;
        /**
         * Maximum number of audio tracks that can be controlled. (Read Only)
         */
        public static get controlledAudioTrackMaxCount(): number;
        /**
         * Number of audio tracks that this VideoPlayer will take control of.
         */
        public get controlledAudioTrackCount(): number;
        public set controlledAudioTrackCount(value: number);
        /**
         * Destination for the audio embedded in the video.
         */
        public get audioOutputMode(): VideoAudioOutputMode;
        public set audioOutputMode(value: VideoAudioOutputMode);
        /**
         * Whether direct-output volume controls are supported for the current platform and video format. (Read Only)
         */
        public get canSetDirectAudioVolume(): boolean;
        /**
         * Enables the frameReady events.
         */
        public get sendFrameReadyEvents(): boolean;
        public set sendFrameReadyEvents(value: boolean);
        
        public constructor();
        /**
         * Initiates playback engine preparation.
         */
        public Prepare():void;
        /**
         * Starts playback.
         */
        public Play():void;
        /**
         * Pauses the playback and leaves the current time intact.
         */
        public Pause():void;
        /**
         * Stops the playback and sets the current time to 0.
         */
        public Stop():void;
        /**
         * Advances the current time by one frame immediately.
         */
        public StepForward():void;
        /**
         * Returns the language code, if any, for the specified track.
         * @param trackIndex Index of the audio track to query.
         * @returns Language code.
         */
        public GetAudioLanguageCode($trackIndex: number):string;
        /**
         * The number of audio channels in the specified audio track.
         * @param trackIndex Index for the audio track being queried.
         * @returns Number of audio channels.
         */
        public GetAudioChannelCount($trackIndex: number):number;
        /**
         * Gets the audio track sampling rate in Hertz.
         * @param trackIndex Index of the audio track to query.
         * @returns The sampling rate in Hertz.
         */
        public GetAudioSampleRate($trackIndex: number):number;
        /**
         * Enable/disable audio track decoding. Only effective when the VideoPlayer is not currently playing.
         * @param trackIndex Index of the audio track to enable/disable.
         * @param enabled True for enabling the track. False for disabling the track.
         */
        public EnableAudioTrack($trackIndex: number, $enabled: boolean):void;
        /**
         * Whether decoding for the specified audio track is enabled. See Video.VideoPlayer.EnableAudioTrack for distinction with mute.
         * @param trackIndex Index of the audio track being queried.
         * @returns Returns true if decoding for the specified audio track is enabled.
         */
        public IsAudioTrackEnabled($trackIndex: number):boolean;
        /**
         * Return the direct-output volume for specified track.
         * @param trackIndex Track index for which the volume is queried.
         * @returns Volume, between 0 and 1.
         */
        public GetDirectAudioVolume($trackIndex: number):number;
        /**
         * Set the direct-output audio volume for the specified track.
         * @param trackIndex Track index for which the volume is set.
         * @param volume New volume, between 0 and 1.
         */
        public SetDirectAudioVolume($trackIndex: number, $volume: number):void;
        /**
         * Gets the direct-output audio mute status for the specified track.
         */
        public GetDirectAudioMute($trackIndex: number):boolean;
        /**
         * Set the direct-output audio mute status for the specified track.
         * @param trackIndex Track index for which the mute is set.
         * @param mute Mute on/off.
         */
        public SetDirectAudioMute($trackIndex: number, $mute: boolean):void;
        /**
         * Gets the AudioSource that will receive audio samples for the specified track if Video.VideoPlayer.audioOutputMode is set to Video.VideoAudioOutputMode.AudioSource.
         * @param trackIndex Index of the audio track for which the AudioSource is wanted.
         * @returns The source associated with the audio track.
         */
        public GetTargetAudioSource($trackIndex: number):UnityEngine.AudioSource;
        /**
         * Sets the AudioSource that will receive audio samples for the specified track if this audio target is selected with Video.VideoPlayer.audioOutputMode.
         * @param trackIndex Index of the audio track to associate with the specified AudioSource.
         * @param source AudioSource to associate with the audio track.
         */
        public SetTargetAudioSource($trackIndex: number, $source: UnityEngine.AudioSource):void;
        
        public add_prepareCompleted($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public remove_prepareCompleted($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public add_loopPointReached($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public remove_loopPointReached($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public add_started($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public remove_started($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public add_frameDropped($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public remove_frameDropped($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public add_errorReceived($value: UnityEngine_Video_VideoPlayer.ErrorEventHandler):void;
        
        public remove_errorReceived($value: UnityEngine_Video_VideoPlayer.ErrorEventHandler):void;
        
        public add_seekCompleted($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public remove_seekCompleted($value: UnityEngine_Video_VideoPlayer.EventHandler):void;
        
        public add_clockResyncOccurred($value: UnityEngine_Video_VideoPlayer.TimeEventHandler):void;
        
        public remove_clockResyncOccurred($value: UnityEngine_Video_VideoPlayer.TimeEventHandler):void;
        
        public add_frameReady($value: UnityEngine_Video_VideoPlayer.FrameReadyEventHandler):void;
        
        public remove_frameReady($value: UnityEngine_Video_VideoPlayer.FrameReadyEventHandler):void;
        /**
         * Invoked when the VideoPlayer preparation is complete.
         */
        public prepareCompleted;
        /**
         * Invoked when the VideoPlayer reaches the end of the content to play.
         */
        public loopPointReached;
        /**
         * Invoked immediately after Play is called.
         */
        public started;
        /**
         * [NOT YET IMPLEMENTED] Invoked when the video decoder does not produce a frame as per the time source during playback.
         */
        public frameDropped;
        /**
         * Errors such as HTTP connection problems are reported through this callback.
         */
        public errorReceived;
        /**
         * Invoke after a seek operation completes.
         */
        public seekCompleted;
        /**
         * Invoked when the VideoPlayer clock is synced back to its Video.VideoTimeReference.
         */
        public clockResyncOccurred;
        /**
         * Invoked when a new frame is ready.
         */
        public frameReady;
        
                    
    }
    /**
     * Type of destination for the images read by a VideoPlayer.
     */
    enum VideoRenderMode { CameraFarPlane = 0, CameraNearPlane = 1, RenderTexture = 2, MaterialOverride = 3, APIOnly = 4 }
    /**
     * Types of 3D content layout within a video.
     */
    enum Video3DLayout { No3D = 0, SideBySide3D = 1, OverUnder3D = 2 }
    /**
     * Methods used to fit a video in the target area.
     */
    enum VideoAspectRatio { NoScaling = 0, FitVertically = 1, FitHorizontally = 2, FitInside = 3, FitOutside = 4, Stretch = 5 }
    /**
     * Time source followed by the Video.VideoPlayer when reading content.
     */
    enum VideoTimeSource { AudioDSPTimeSource = 0, GameTimeSource = 1 }
    /**
     * The clock that the Video.VideoPlayer observes to detect and correct drift.
     */
    enum VideoTimeReference { Freerun = 0, InternalTime = 1, ExternalTime = 2 }
    /**
     * Source of the video content for a VideoPlayer.
     */
    enum VideoSource { VideoClip = 0, Url = 1 }
    /**
     * Places where the audio embedded in a video can be sent.
     */
    enum VideoAudioOutputMode { None = 0, AudioSource = 1, Direct = 2, APIOnly = 3 }
    
    interface VideoPlayer {
        /**
         * Return the Experimental.Audio.AudioSampleProvider for the specified track, used to receive audio samples during playback.
         * @param vp The "this" pointer for the extension method.
         * @param trackIndex The audio track index for which the sample provider is queried.
         * @returns The sample provider for the specified track.
         * @extension UnityEngine.Experimental.Video.VideoPlayerExtensions
         */
        GetAudioSampleProvider($trackIndex: number):UnityEngine_Experimental_Audio.AudioSampleProvider;
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
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
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    /**
     * Render textures are textures that can be rendered to.
     */
    interface RenderTexture extends Texture {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * General functionality for all renderers.
     */
    interface Renderer extends Component {
        
                    
    }
    /**
     * A representation of audio sources in 3D.
     */
    interface AudioSource extends AudioBehaviour {
        
                    
    }
    
    interface AudioBehaviour extends Behaviour {
        
                    
    }
    
}
declare module 'UnityEngine.Experimental.Audio' {

    import * as System from 'System';
        
    /**
     * Provides access to the audio samples generated by Unity objects such as VideoPlayer.
     */
    interface AudioSampleProvider extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Video.VideoPlayer' {

    import * as UnityEngine_Video from 'UnityEngine.Video';
    import * as System from 'System';
        
    /**
     * Delegate type for all parameterless events emitted by VideoPlayers.
     * @param source The VideoPlayer that is emitting the event.
     */
    type EventHandler = (source: UnityEngine_Video.VideoPlayer) => void;
    var EventHandler: {new (func: (source: UnityEngine_Video.VideoPlayer) => void): EventHandler;}
    /**
     * Delegate type for VideoPlayer events that contain an error message.
     * @param source The VideoPlayer that is emitting the event.
     * @param message Message describing the error just encountered.
     */
    type ErrorEventHandler = (source: UnityEngine_Video.VideoPlayer, message: string) => void;
    var ErrorEventHandler: {new (func: (source: UnityEngine_Video.VideoPlayer, message: string) => void): ErrorEventHandler;}
    /**
     * Delegate type for VideoPlayer events that carry a time position.
     * @param source The VideoPlayer that is emitting the event.
     * @param seconds Time position.
     */
    type TimeEventHandler = (source: UnityEngine_Video.VideoPlayer, seconds: number) => void;
    var TimeEventHandler: {new (func: (source: UnityEngine_Video.VideoPlayer, seconds: number) => void): TimeEventHandler;}
    /**
     * Delegate type for VideoPlayer events that carry a frame number.
     * @param source The VideoPlayer that is emitting the event.
     * @param frameNum The current frame of the VideoPlayer.
     */
    type FrameReadyEventHandler = (source: UnityEngine_Video.VideoPlayer, frameIdx: bigint) => void;
    var FrameReadyEventHandler: {new (func: (source: UnityEngine_Video.VideoPlayer, frameIdx: bigint) => void): FrameReadyEventHandler;}
    
}

