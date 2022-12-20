//# signature=Unity.Timeline#c0f6276ae9553c9adc622b18d7c6958f#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Timeline' {

    import * as UnityEngine_Timeline_ActivationTrack from 'UnityEngine.Timeline.ActivationTrack';
    import * as UnityEngine_Playables from 'UnityEngine.Playables';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Timeline_AnimationPlayableAsset from 'UnityEngine.Timeline.AnimationPlayableAsset';
    import * as UnityEngine_Timeline_TimelineClip from 'UnityEngine.Timeline.TimelineClip';
    import * as UnityEngine_Timeline_TimelineAsset from 'UnityEngine.Timeline.TimelineAsset';
    import * as UnityEngine_Timeline_ActivationControlPlayable from 'UnityEngine.Timeline.ActivationControlPlayable';
    import * as UnityEngine_Events from 'UnityEngine.Events';
        
    
    class ActivationTrack extends TrackAsset {
        
        public get postPlaybackState(): UnityEngine_Timeline_ActivationTrack.PostPlaybackState;
        public set postPlaybackState(value: UnityEngine_Timeline_ActivationTrack.PostPlaybackState);
        
        public constructor();
        
                    
    }
    
    class TrackAsset extends UnityEngine_Playables.PlayableAsset {
        
        public get start(): number;
        
        public get end(): number;
        
        public get duration(): number;
        
        public get muted(): boolean;
        public set muted(value: boolean);
        
        public get mutedInHierarchy(): boolean;
        
        public get timelineAsset(): TimelineAsset;
        
        public get parent(): UnityEngine_Playables.PlayableAsset;
        
        public get isEmpty(): boolean;
        
        public get hasClips(): boolean;
        
        public get hasCurves(): boolean;
        
        public get isSubTrack(): boolean;
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public get curves(): UnityEngine.AnimationClip;
        
        public get locked(): boolean;
        public set locked(value: boolean);
        
        public get lockedInHierarchy(): boolean;
        
        public get supportsNotifications(): boolean;
        
        public GetClips():System_Collections_Generic.IEnumerable$1<TimelineClip>;
        
        public GetChildTracks():System_Collections_Generic.IEnumerable$1<TrackAsset>;
        
        public CreateCurves($curvesClipName: string):void;
        
        public CreateTrackMixer($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject, $inputCount: number):UnityEngine_Playables.Playable;
        
        public CreatePlayable($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject):UnityEngine_Playables.Playable;
        
        public CreateDefaultClip():TimelineClip;
        
        public CreateClip<T extends UnityEngine.ScriptableObject>():TimelineClip;
        
        public DeleteClip($clip: TimelineClip):boolean;
        
        public CreateMarker($type: System.Type, $time: number):IMarker;
        
        public CreateMarker<T extends UnityEngine.ScriptableObject>($time: number):T;
        
        public DeleteMarker($marker: IMarker):boolean;
        
        public GetMarkers():System_Collections_Generic.IEnumerable$1<IMarker>;
        
        public GetMarkerCount():number;
        
        public GetMarker($idx: number):IMarker;
        
        public GatherProperties($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector):void;
        
        public CanCreateTrackMixer():boolean;
        
                    
    }
    
    interface IPropertyCollector {
        
        PushActiveGameObject($gameObject: UnityEngine.GameObject):void;
        
        PopActiveGameObject():void;
        
        AddFromClip($clip: UnityEngine.AnimationClip):void;
        
        AddFromClips($clips: System_Collections_Generic.IEnumerable$1<UnityEngine.AnimationClip>):void;
        
        AddFromName<T extends UnityEngine.Component>($name: string):void;
        
        AddFromName($name: string):void;
        
        AddFromClip($obj: UnityEngine.GameObject, $clip: UnityEngine.AnimationClip):void;
        
        AddFromClips($obj: UnityEngine.GameObject, $clips: System_Collections_Generic.IEnumerable$1<UnityEngine.AnimationClip>):void;
        
        AddFromName<T extends UnityEngine.Component>($obj: UnityEngine.GameObject, $name: string):void;
        
        AddFromName($obj: UnityEngine.GameObject, $name: string):void;
        
        AddFromName($component: UnityEngine.Component, $name: string):void;
        
        AddFromComponent($obj: UnityEngine.GameObject, $component: UnityEngine.Component):void;
        
        AddObjectProperties($obj: UnityEngine.Object, $clip: UnityEngine.AnimationClip):void;
        
                    
    }
    
    class AnimationPlayableAsset extends UnityEngine_Playables.PlayableAsset {
        
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        
        public get rotation(): UnityEngine.Quaternion;
        public set rotation(value: UnityEngine.Quaternion);
        
        public get eulerAngles(): UnityEngine.Vector3;
        public set eulerAngles(value: UnityEngine.Vector3);
        
        public get useTrackMatchFields(): boolean;
        public set useTrackMatchFields(value: boolean);
        
        public get matchTargetFields(): MatchTargetFields;
        public set matchTargetFields(value: MatchTargetFields);
        
        public get removeStartOffset(): boolean;
        public set removeStartOffset(value: boolean);
        
        public get applyFootIK(): boolean;
        public set applyFootIK(value: boolean);
        
        public get loop(): UnityEngine_Timeline_AnimationPlayableAsset.LoopMode;
        public set loop(value: UnityEngine_Timeline_AnimationPlayableAsset.LoopMode);
        
        public get clip(): UnityEngine.AnimationClip;
        public set clip(value: UnityEngine.AnimationClip);
        
        public get duration(): number;
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public get clipCaps(): ClipCaps;
        
        public constructor();
        
        public CreatePlayable($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject):UnityEngine_Playables.Playable;
        
        public LiveLink():void;
        
        public ResetOffsets():void;
        
        public GatherProperties($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector):void;
        
                    
    }
    
    enum MatchTargetFields { PositionX = 1, PositionY = 2, PositionZ = 4, RotationX = 8, RotationY = 16, RotationZ = 32 }
    
    enum ClipCaps { None = 0, Looping = 1, Extrapolation = 2, ClipIn = 4, SpeedMultiplier = 8, Blending = 16, AutoScale = 40, All = -1 }
    
    enum TrackOffset { ApplyTransformOffsets = 0, ApplySceneOffsets = 1, Auto = 2 }
    
    class AnimationTrack extends TrackAsset {
        
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        
        public get rotation(): UnityEngine.Quaternion;
        public set rotation(value: UnityEngine.Quaternion);
        
        public get eulerAngles(): UnityEngine.Vector3;
        public set eulerAngles(value: UnityEngine.Vector3);
        
        public get trackOffset(): TrackOffset;
        public set trackOffset(value: TrackOffset);
        
        public get matchTargetFields(): MatchTargetFields;
        public set matchTargetFields(value: MatchTargetFields);
        
        public get infiniteClip(): UnityEngine.AnimationClip;
        
        public get avatarMask(): UnityEngine.AvatarMask;
        public set avatarMask(value: UnityEngine.AvatarMask);
        
        public get applyAvatarMask(): boolean;
        public set applyAvatarMask(value: boolean);
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public get inClipMode(): boolean;
        
        public get infiniteClipOffsetPosition(): UnityEngine.Vector3;
        public set infiniteClipOffsetPosition(value: UnityEngine.Vector3);
        
        public get infiniteClipOffsetRotation(): UnityEngine.Quaternion;
        public set infiniteClipOffsetRotation(value: UnityEngine.Quaternion);
        
        public get infiniteClipOffsetEulerAngles(): UnityEngine.Vector3;
        public set infiniteClipOffsetEulerAngles(value: UnityEngine.Vector3);
        
        public get infiniteClipPreExtrapolation(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        public set infiniteClipPreExtrapolation(value: UnityEngine_Timeline_TimelineClip.ClipExtrapolation);
        
        public get infiniteClipPostExtrapolation(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        public set infiniteClipPostExtrapolation(value: UnityEngine_Timeline_TimelineClip.ClipExtrapolation);
        
        public constructor();
        
        public CreateClip($clip: UnityEngine.AnimationClip):TimelineClip;
        
        public CreateInfiniteClip($infiniteClipName: string):void;
        
        public CreateRecordableClip($animClipName: string):TimelineClip;
        
        public CreateClip<T extends UnityEngine.ScriptableObject>():TimelineClip;
        
                    
    }
    
    class TimelineClip extends System.Object {
        
        public static kDefaultClipCaps: ClipCaps;
        
        public static kDefaultClipDurationInSeconds: number;
        
        public static kTimeScaleMin: number;
        
        public static kTimeScaleMax: number;
        
        public get hasPreExtrapolation(): boolean;
        
        public get hasPostExtrapolation(): boolean;
        
        public get timeScale(): number;
        public set timeScale(value: number);
        
        public get start(): number;
        public set start(value: number);
        
        public get duration(): number;
        public set duration(value: number);
        
        public get end(): number;
        
        public get clipIn(): number;
        public set clipIn(value: number);
        
        public get displayName(): string;
        public set displayName(value: string);
        
        public get clipAssetDuration(): number;
        
        public get curves(): UnityEngine.AnimationClip;
        
        public get hasCurves(): boolean;
        
        public get asset(): UnityEngine.Object;
        public set asset(value: UnityEngine.Object);
        
        public get easeInDuration(): number;
        public set easeInDuration(value: number);
        
        public get easeOutDuration(): number;
        public set easeOutDuration(value: number);
        
        public get easeOutTime(): number;
        
        public get blendInDuration(): number;
        public set blendInDuration(value: number);
        
        public get blendOutDuration(): number;
        public set blendOutDuration(value: number);
        
        public get blendInCurveMode(): UnityEngine_Timeline_TimelineClip.BlendCurveMode;
        public set blendInCurveMode(value: UnityEngine_Timeline_TimelineClip.BlendCurveMode);
        
        public get blendOutCurveMode(): UnityEngine_Timeline_TimelineClip.BlendCurveMode;
        public set blendOutCurveMode(value: UnityEngine_Timeline_TimelineClip.BlendCurveMode);
        
        public get hasBlendIn(): boolean;
        
        public get hasBlendOut(): boolean;
        
        public get mixInCurve(): UnityEngine.AnimationCurve;
        public set mixInCurve(value: UnityEngine.AnimationCurve);
        
        public get mixInPercentage(): number;
        
        public get mixInDuration(): number;
        
        public get mixOutCurve(): UnityEngine.AnimationCurve;
        public set mixOutCurve(value: UnityEngine.AnimationCurve);
        
        public get mixOutTime(): number;
        
        public get mixOutDuration(): number;
        
        public get mixOutPercentage(): number;
        
        public get recordable(): boolean;
        
        public get clipCaps(): ClipCaps;
        
        public get animationClip(): UnityEngine.AnimationClip;
        
        public get postExtrapolationMode(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        
        public get preExtrapolationMode(): UnityEngine_Timeline_TimelineClip.ClipExtrapolation;
        
        public get extrapolatedStart(): number;
        
        public get extrapolatedDuration(): number;
        
        public GetParentTrack():TrackAsset;
        
        public EvaluateMixOut($time: number):number;
        
        public EvaluateMixIn($time: number):number;
        
        public ToLocalTime($time: number):number;
        
        public ToLocalTimeUnbound($time: number):number;
        
        public IsExtrapolatedTime($sequenceTime: number):boolean;
        
        public IsPreExtrapolatedTime($sequenceTime: number):boolean;
        
        public IsPostExtrapolatedTime($sequenceTime: number):boolean;
        
        public CreateCurves($curvesClipName: string):void;
        
        public ToString():string;
        
        public ConformEaseValues():void;
        
                    
    }
    
    class TimelineAsset extends UnityEngine_Playables.PlayableAsset {
        
        public get editorSettings(): UnityEngine_Timeline_TimelineAsset.EditorSettings;
        
        public get duration(): number;
        
        public get fixedDuration(): number;
        public set fixedDuration(value: number);
        
        public get durationMode(): UnityEngine_Timeline_TimelineAsset.DurationMode;
        public set durationMode(value: UnityEngine_Timeline_TimelineAsset.DurationMode);
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public get clipCaps(): ClipCaps;
        
        public get outputTrackCount(): number;
        
        public get rootTrackCount(): number;
        
        public get markerTrack(): MarkerTrack;
        
        public constructor();
        
        public GetRootTrack($index: number):TrackAsset;
        
        public GetRootTracks():System_Collections_Generic.IEnumerable$1<TrackAsset>;
        
        public GetOutputTrack($index: number):TrackAsset;
        
        public GetOutputTracks():System_Collections_Generic.IEnumerable$1<TrackAsset>;
        
        public CreatePlayable($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject):UnityEngine_Playables.Playable;
        
        public GatherProperties($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector):void;
        
        public CreateMarkerTrack():void;
        
        public CreateTrack($type: System.Type, $parent: TrackAsset, $name: string):TrackAsset;
        
        public CreateTrack<T extends TrackAsset>($parent: TrackAsset, $trackName: string):T;
        
        public CreateTrack<T extends TrackAsset>($trackName: string):T;
        
        public CreateTrack<T extends TrackAsset>():T;
        
        public DeleteClip($clip: TimelineClip):boolean;
        
        public DeleteTrack($track: TrackAsset):boolean;
        
                    
    }
    
    class MarkerTrack extends TrackAsset {
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public constructor();
        
                    
    }
    
    interface IMarker {
        
        time: number;
        
        parent: TrackAsset;
        
        Initialize($parent: TrackAsset):void;
        
                    
    }
    
    class TrackColorAttribute extends System.Attribute {
        
        public get color(): UnityEngine.Color;
        
        public constructor($r: number, $g: number, $b: number);
        
                    
    }
    
    class AudioPlayableAsset extends UnityEngine_Playables.PlayableAsset {
        
        public get clip(): UnityEngine.AudioClip;
        public set clip(value: UnityEngine.AudioClip);
        
        public get loop(): boolean;
        public set loop(value: boolean);
        
        public get duration(): number;
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public get clipCaps(): ClipCaps;
        
        public constructor();
        
        public CreatePlayable($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject):UnityEngine_Playables.Playable;
        
                    
    }
    
    class AudioTrack extends TrackAsset {
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public constructor();
        
        public CreateClip($clip: UnityEngine.AudioClip):TimelineClip;
        
        public CreateClip<T extends UnityEngine.ScriptableObject>():TimelineClip;
        
                    
    }
    
    class ControlPlayableAsset extends UnityEngine_Playables.PlayableAsset {
        
        public sourceGameObject: UnityEngine.ExposedReference$1<UnityEngine.GameObject>;
        
        public prefabGameObject: UnityEngine.GameObject;
        
        public updateParticle: boolean;
        
        public particleRandomSeed: number;
        
        public updateDirector: boolean;
        
        public updateITimeControl: boolean;
        
        public searchHierarchy: boolean;
        
        public active: boolean;
        
        public postPlayback: UnityEngine_Timeline_ActivationControlPlayable.PostPlaybackState;
        
        public get duration(): number;
        
        public get clipCaps(): ClipCaps;
        
        public constructor();
        
        public OnEnable():void;
        
        public CreatePlayable($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject):UnityEngine_Playables.Playable;
        
        public GatherProperties($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector):void;
        
                    
    }
    
    class ActivationControlPlayable extends UnityEngine_Playables.PlayableBehaviour {
        
        public gameObject: UnityEngine.GameObject;
        
        public postPlayback: UnityEngine_Timeline_ActivationControlPlayable.PostPlaybackState;
        
        public constructor();
        
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $gameObject: UnityEngine.GameObject, $postPlaybackState: UnityEngine_Timeline_ActivationControlPlayable.PostPlaybackState):UnityEngine_Playables.ScriptPlayable$1<ActivationControlPlayable>;
        
        public OnBehaviourPlay($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPause($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public ProcessFrame($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData, $userData: any):void;
        
        public OnGraphStart($playable: UnityEngine_Playables.Playable):void;
        
        public OnPlayableDestroy($playable: UnityEngine_Playables.Playable):void;
        
                    
    }
    
    class ControlTrack extends TrackAsset {
        
        public constructor();
        
                    
    }
    
    interface INotificationOptionProvider {
        
        flags: NotificationFlags;
        
                    
    }
    
    enum NotificationFlags { TriggerInEditMode = 1, Retroactive = 2, TriggerOnce = 4 }
    
    class Marker extends UnityEngine.ScriptableObject {
        
        public get parent(): TrackAsset;
        
        public get time(): number;
        public set time(value: number);
        
        public OnInitialize($aPent: TrackAsset):void;
        
                    
    }
    
    class SignalTrack extends MarkerTrack {
        
        public constructor();
        
                    
    }
    
    class SignalAsset extends UnityEngine.ScriptableObject {
        
        public constructor();
        
                    
    }
    
    class SignalEmitter extends Marker {
        
        public get retroactive(): boolean;
        public set retroactive(value: boolean);
        
        public get emitOnce(): boolean;
        public set emitOnce(value: boolean);
        
        public get asset(): SignalAsset;
        public set asset(value: SignalAsset);
        
        public constructor();
        
                    
    }
    
    class SignalReceiver extends UnityEngine.MonoBehaviour {
        
        public constructor();
        
        public OnNotify($origin: UnityEngine_Playables.Playable, $notification: UnityEngine_Playables.INotification, $context: any):void;
        
        public AddReaction($asset: SignalAsset, $reaction: UnityEngine_Events.UnityEvent):void;
        
        public AddEmptyReaction($reaction: UnityEngine_Events.UnityEvent):number;
        
        public Remove($asset: SignalAsset):void;
        
        public GetRegisteredSignals():System_Collections_Generic.IEnumerable$1<SignalAsset>;
        
        public GetReaction($key: SignalAsset):UnityEngine_Events.UnityEvent;
        
        public Count():number;
        
        public ChangeSignalAtIndex($idx: number, $newKey: SignalAsset):void;
        
        public RemoveAtIndex($idx: number):void;
        
        public ChangeReactionAtIndex($idx: number, $reaction: UnityEngine_Events.UnityEvent):void;
        
        public GetReactionAtIndex($idx: number):UnityEngine_Events.UnityEvent;
        
        public GetSignalAssetAtIndex($idx: number):SignalAsset;
        
                    
    }
    
    class TrackAssetExtensions extends System.Object {
        
        public static GetGroup($asset: TrackAsset):GroupTrack;
        
        public static SetGroup($asset: TrackAsset, $group: GroupTrack):void;
        
                    
    }
    
    class GroupTrack extends TrackAsset {
        
        public get outputs(): System_Collections_Generic.IEnumerable$1<UnityEngine_Playables.PlayableBinding>;
        
        public constructor();
        
                    
    }
    
    interface ILayerable {
        
        CreateLayerMixer($graph: UnityEngine_Playables.PlayableGraph, $go: UnityEngine.GameObject, $inputCount: number):UnityEngine_Playables.Playable;
        
                    
    }
    
    class DirectorControlPlayable extends UnityEngine_Playables.PlayableBehaviour {
        
        public director: UnityEngine_Playables.PlayableDirector;
        
        public constructor();
        
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $director: UnityEngine_Playables.PlayableDirector):UnityEngine_Playables.ScriptPlayable$1<DirectorControlPlayable>;
        
        public OnPlayableDestroy($playable: UnityEngine_Playables.Playable):void;
        
        public PrepareFrame($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPlay($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPause($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public ProcessFrame($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData, $playerData: any):void;
        
                    
    }
    
    interface ITimeControl {
        
        SetTime($time: number):void;
        
        OnControlTimeStart():void;
        
        OnControlTimeStop():void;
        
                    
    }
    
    class ParticleControlPlayable extends UnityEngine_Playables.PlayableBehaviour {
        
        public get particleSystem(): UnityEngine.ParticleSystem;
        
        public constructor();
        
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $component: UnityEngine.ParticleSystem, $randomSeed: number):UnityEngine_Playables.ScriptPlayable$1<ParticleControlPlayable>;
        
        public Initialize($ps: UnityEngine.ParticleSystem, $randomSeed: number):void;
        
        public OnPlayableDestroy($playable: UnityEngine_Playables.Playable):void;
        
        public PrepareFrame($playable: UnityEngine_Playables.Playable, $data: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPlay($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPause($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
                    
    }
    
    class PrefabControlPlayable extends UnityEngine_Playables.PlayableBehaviour {
        
        public get prefabInstance(): UnityEngine.GameObject;
        
        public constructor();
        
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $prefabGameObject: UnityEngine.GameObject, $parentTransform: UnityEngine.Transform):UnityEngine_Playables.ScriptPlayable$1<PrefabControlPlayable>;
        
        public Initialize($prefabGameObject: UnityEngine.GameObject, $parentTransform: UnityEngine.Transform):UnityEngine.GameObject;
        
        public OnPlayableDestroy($playable: UnityEngine_Playables.Playable):void;
        
        public OnBehaviourPlay($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPause($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
                    
    }
    
    class TimeControlPlayable extends UnityEngine_Playables.PlayableBehaviour {
        
        public constructor();
        
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $timeControl: ITimeControl):UnityEngine_Playables.ScriptPlayable$1<TimeControlPlayable>;
        
        public Initialize($timeControl: ITimeControl):void;
        
        public PrepareFrame($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPlay($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public OnBehaviourPause($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
                    
    }
    
    class TimeNotificationBehaviour extends UnityEngine_Playables.PlayableBehaviour {
        
        public set timeSource(value: UnityEngine_Playables.Playable);
        
        public constructor();
        
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $duration: number, $loopMode: UnityEngine_Playables.DirectorWrapMode):UnityEngine_Playables.ScriptPlayable$1<TimeNotificationBehaviour>;
        
        public AddNotification($time: number, $payload: UnityEngine_Playables.INotification, $flags?: NotificationFlags):void;
        
        public OnGraphStart($playable: UnityEngine_Playables.Playable):void;
        
        public OnBehaviourPause($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
        public PrepareFrame($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
                    
    }
    
    class PlayableTrack extends TrackAsset {
        
        public constructor();
        
                    
    }
    
    class TrackClipTypeAttribute extends System.Attribute {
        
        public inspectedType: System.Type;
        
        public allowAutoCreate: boolean;
        
        public constructor($clipClass: System.Type);
        
        public constructor($clipClass: System.Type, $allowAutoCreate: boolean);
        
                    
    }
    
    class NotKeyableAttribute extends System.Attribute {
        
        public constructor();
        
                    
    }
    
    enum TrackBindingFlags { None = 0, AllowCreateComponent = 1, All = 1 }
    
    class TrackBindingTypeAttribute extends System.Attribute {
        
        public type: System.Type;
        
        public flags: TrackBindingFlags;
        
        public constructor($type: System.Type);
        
        public constructor($type: System.Type, $flags: TrackBindingFlags);
        
                    
    }
    
    class HideInMenuAttribute extends System.Attribute {
        
        public constructor();
        
                    
    }
    
    class CustomStyleAttribute extends System.Attribute {
        
        public ussStyle: string;
        
        public constructor($ussStyle: string);
        
                    
    }
    
    interface ITimelineClipAsset {
        
        clipCaps: ClipCaps;
        
                    
    }
    
    class TimelinePlayable extends UnityEngine_Playables.PlayableBehaviour {
        
        public constructor();
        
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $tracks: System_Collections_Generic.IEnumerable$1<TrackAsset>, $go: UnityEngine.GameObject, $autoRebalance: boolean, $createOutputs: boolean):UnityEngine_Playables.ScriptPlayable$1<TimelinePlayable>;
        
        public Compile($graph: UnityEngine_Playables.PlayableGraph, $timelinePlayable: UnityEngine_Playables.Playable, $tracks: System_Collections_Generic.IEnumerable$1<TrackAsset>, $go: UnityEngine.GameObject, $autoRebalance: boolean, $createOutputs: boolean):void;
        
        public PrepareFrame($playable: UnityEngine_Playables.Playable, $info: UnityEngine_Playables.FrameData):void;
        
                    
    }
    
    interface IPropertyPreview {
        
        GatherProperties($director: UnityEngine_Playables.PlayableDirector, $driver: IPropertyCollector):void;
        
                    
    }
    
    class TimelineClipExtensions extends System.Object {
        
        public static MoveToTrack($clip: TimelineClip, $destinationTrack: TrackAsset):void;
        
        public static TryMoveToTrack($clip: TimelineClip, $destinationTrack: TrackAsset):boolean;
        
                    
    }
    
    interface TrackAsset {
        /** @extension UnityEngine.Timeline.TrackAssetExtensions */
        GetGroup():GroupTrack;
        /** @extension UnityEngine.Timeline.TrackAssetExtensions */
        SetGroup($group: GroupTrack):void;
        
                    
    }
    
    interface TimelineClip {
        /** @extension UnityEngine.Timeline.TimelineClipExtensions */
        MoveToTrack($destinationTrack: TrackAsset):void;
        /** @extension UnityEngine.Timeline.TimelineClipExtensions */
        TryMoveToTrack($destinationTrack: TrackAsset):boolean;
        
                    
    }
    
}
declare module 'UnityEngine.Playables' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    /**
     * A base class for assets that can be used to instantiate a Playable at runtime.
     */
    interface PlayableAsset extends UnityEngine.ScriptableObject {
        
                    
    }
    /**
     * Playables are customizable runtime objects that can be connected together and are contained in a PlayableGraph to create complex behaviours.
     */
    interface Playable extends System.ValueType {
        
                    
    }
    /**
     * Use the PlayableGraph to manage Playable creations and destructions.
     */
    interface PlayableGraph extends System.ValueType {
        
                    
    }
    /**
     * Instantiates a PlayableAsset and controls playback of Playable objects.
     */
    interface PlayableDirector extends UnityEngine.Behaviour {
        
                    
    }
    /**
     * Struct that holds information regarding an output of a PlayableAsset.
     */
    interface PlayableBinding extends System.ValueType {
        
                    
    }
    /**
     * PlayableBehaviour is the base class from which every custom playable script derives.
     */
    interface PlayableBehaviour extends System.Object {
        
                    
    }
    /**
     * The base interface for all notifications sent through the playable system.
     */
    interface INotification {
        
                    
    }
    /**
     * A IPlayable implementation that contains a PlayableBehaviour for the PlayableGraph. PlayableBehaviour can be used to write custom Playable that implement their own PrepareFrame callback.
     */
    interface ScriptPlayable$1<T> extends System.ValueType {
        
                    
    }
    /**
     * This structure contains the frame information a Playable receives in Playable.PrepareFrame.
     */
    interface FrameData extends System.ValueType {
        
                    
    }
    /**
     * Wrap mode for Playables.
     */
    enum DirectorWrapMode { Hold = 0, Loop = 1, None = 2 }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
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
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
    }
    /**
     * Stores keyframe based animations.
     */
    interface AnimationClip extends Motion {
        
                    
    }
    /**
     * Base class for AnimationClips and BlendTrees.
     */
    interface Motion extends Object {
        
                    
    }
    /**
     * AvatarMask is used to mask out humanoid body parts and transforms.
     */
    interface AvatarMask extends Object {
        
                    
    }
    /**
     * Store a collection of Keyframes that can be evaluated over time.
     */
    interface AnimationCurve extends System.Object {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * A container for audio data.
     */
    interface AudioClip extends Object {
        
                    
    }
    /**
     * Creates a type whos value is resolvable at runtime.
     */
    interface ExposedReference$1<T> extends System.ValueType {
        
                    
    }
    /**
     * MonoBehaviour is the base class from which every Unity script derives.
     */
    interface MonoBehaviour extends Behaviour {
        
                    
    }
    /**
     * Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation.
     */
    interface ParticleSystem extends Component {
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Attribute extends Object {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Int16 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.Timeline.ActivationTrack' {

    import * as System from 'System';
        
    
    enum PostPlaybackState { Active = 0, Inactive = 1, Revert = 2, LeaveAsIs = 3 }
    
}
declare module 'UnityEngine.Timeline.AnimationPlayableAsset' {

    import * as System from 'System';
        
    
    enum LoopMode { UseSourceAsset = 0, On = 1, Off = 2 }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface IEnumerable$1<T> {
        
                    
    }
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Timeline.TimelineClip' {

    import * as System from 'System';
        
    
    enum ClipExtrapolation { None = 0, Hold = 1, Loop = 2, PingPong = 3, Continue = 4 }
    
    enum BlendCurveMode { Auto = 0, Manual = 1 }
    
}
declare module 'UnityEngine.Timeline.TimelineAsset' {

    import * as System from 'System';
        
    
    class EditorSettings extends System.Object {
        
        public get fps(): number;
        public set fps(value: number);
        
        public get scenePreview(): boolean;
        public set scenePreview(value: boolean);
        
        public constructor();
        
                    
    }
    
    enum DurationMode { BasedOnClips = 0, FixedLength = 1 }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Timeline.ActivationControlPlayable' {

    import * as System from 'System';
        
    
    enum PostPlaybackState { Active = 0, Inactive = 1, Revert = 2 }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * A zero argument persistent callback that can be saved with the Scene.
     */
    interface UnityEvent extends UnityEventBase {
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    
}

