//# signature=Unity.Postprocessing.Runtime#436690253e7278daa6fb50af29e1818b#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Rendering.PostProcessing' {

    import * as System from 'System';
    import * as UnityEngine_Rendering_PostProcessing_TrackballAttribute from 'UnityEngine.Rendering.PostProcessing.TrackballAttribute';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_Rendering_PostProcessing_PostProcessRenderContext from 'UnityEngine.Rendering.PostProcessing.PostProcessRenderContext';
    import * as UnityEngine_Rendering_PostProcessing_PostProcessLayer from 'UnityEngine.Rendering.PostProcessing.PostProcessLayer';
    import * as UnityEngine_Rendering_PostProcessing_SubpixelMorphologicalAntialiasing from 'UnityEngine.Rendering.PostProcessing.SubpixelMorphologicalAntialiasing';
    import * as UnityEngine_Rendering_PostProcessing_HistogramMonitor from 'UnityEngine.Rendering.PostProcessing.HistogramMonitor';
    import * as UnityEngine_Rendering_PostProcessing_PostProcessDebugLayer from 'UnityEngine.Rendering.PostProcessing.PostProcessDebugLayer';
    import * as UnityEngine_Rendering_PostProcessing_PostProcessResources from 'UnityEngine.Rendering.PostProcessing.PostProcessResources';
    import * as RootNamespace from 'RootNamespace';
    import * as UnityEngine_Rendering_PostProcessing_HableCurve from 'UnityEngine.Rendering.PostProcessing.HableCurve';
    import * as System_Linq_Expressions from 'System.Linq.Expressions';
        
    
    class DisplayNameAttribute extends System.Attribute {
        
        public displayName: string;
        
        public constructor($displayName: string);
        
                    
    }
    
    class MaxAttribute extends System.Attribute {
        
        public max: number;
        
        public constructor($max: number);
        
                    
    }
    
    class MinAttribute extends System.Attribute {
        
        public min: number;
        
        public constructor($min: number);
        
                    
    }
    
    class MinMaxAttribute extends System.Attribute {
        
        public min: number;
        
        public max: number;
        
        public constructor($min: number, $max: number);
        
                    
    }
    
    class PostProcessAttribute extends System.Attribute {
        
        public renderer: System.Type;
        
        public eventType: PostProcessEvent;
        
        public menuItem: string;
        
        public allowInSceneView: boolean;
        
        public constructor($renderer: System.Type, $eventType: PostProcessEvent, $menuItem: string, $allowInSceneView?: boolean);
        
                    
    }
    
    enum PostProcessEvent { BeforeTransparent = 0, BeforeStack = 1, AfterStack = 2 }
    
    class TrackballAttribute extends System.Attribute {
        
        public mode: UnityEngine_Rendering_PostProcessing_TrackballAttribute.Mode;
        
        public constructor($mode: UnityEngine_Rendering_PostProcessing_TrackballAttribute.Mode);
        
                    
    }
    
    enum AmbientOcclusionMode { ScalableAmbientObscurance = 0, MultiScaleVolumetricObscurance = 1 }
    
    enum AmbientOcclusionQuality { Lowest = 0, Low = 1, Medium = 2, High = 3, Ultra = 4 }
    
    class AmbientOcclusionModeParameter extends ParameterOverride$1<AmbientOcclusionMode> {
        
        public constructor();
        
                    
    }
    
    interface ParameterOverride$1<T> extends ParameterOverride {
        
                    
    }
    
    class ParameterOverride extends System.Object {
        
        public overrideState: boolean;
        
        public GetHash():number;
        
        public GetValue<T>():T;
        
                    
    }
    
    class AmbientOcclusionQualityParameter extends ParameterOverride$1<AmbientOcclusionQuality> {
        
        public constructor();
        
                    
    }
    
    class AmbientOcclusion extends PostProcessEffectSettings {
        
        public mode: AmbientOcclusionModeParameter;
        
        public intensity: FloatParameter;
        
        public color: ColorParameter;
        
        public ambientOnly: BoolParameter;
        
        public noiseFilterTolerance: FloatParameter;
        
        public blurTolerance: FloatParameter;
        
        public upsampleTolerance: FloatParameter;
        
        public thicknessModifier: FloatParameter;
        
        public directLightingStrength: FloatParameter;
        
        public radius: FloatParameter;
        
        public quality: AmbientOcclusionQualityParameter;
        
        public constructor();
        
                    
    }
    
    class PostProcessEffectSettings extends UnityEngine.ScriptableObject {
        
        public active: boolean;
        
        public enabled: BoolParameter;
        
        public constructor();
        
        public SetAllOverridesTo($state: boolean, $excludeEnabled?: boolean):void;
        
        public IsEnabledAndSupported($context: PostProcessRenderContext):boolean;
        
        public GetHash():number;
        
                    
    }
    
    class FloatParameter extends ParameterOverride$1<number> {
        
        public constructor();
        
        public Interp($from: number, $to: number, $t: number):void;
        
                    
    }
    
    class ColorParameter extends ParameterOverride$1<UnityEngine.Color> {
        
        public constructor();
        
        public Interp($from: UnityEngine.Color, $to: UnityEngine.Color, $t: number):void;
        
        public static op_Implicit($prop: ColorParameter):UnityEngine.Vector4;
        
                    
    }
    
    class BoolParameter extends ParameterOverride$1<boolean> {
        
        public constructor();
        
                    
    }
    
    class PostProcessRenderContext extends System.Object {
        
        public get camera(): UnityEngine.Camera;
        public set camera(value: UnityEngine.Camera);
        
        public get command(): UnityEngine_Rendering.CommandBuffer;
        public set command(value: UnityEngine_Rendering.CommandBuffer);
        
        public get source(): UnityEngine_Rendering.RenderTargetIdentifier;
        public set source(value: UnityEngine_Rendering.RenderTargetIdentifier);
        
        public get destination(): UnityEngine_Rendering.RenderTargetIdentifier;
        public set destination(value: UnityEngine_Rendering.RenderTargetIdentifier);
        
        public get sourceFormat(): UnityEngine.RenderTextureFormat;
        public set sourceFormat(value: UnityEngine.RenderTextureFormat);
        
        public get flip(): boolean;
        public set flip(value: boolean);
        
        public get resources(): PostProcessResources;
        
        public get propertySheets(): PropertySheetFactory;
        
        public get userData(): System_Collections_Generic.Dictionary$2<string, any>;
        
        public get debugLayer(): PostProcessDebugLayer;
        
        public get width(): number;
        
        public get height(): number;
        
        public get stereoActive(): boolean;
        
        public get xrActiveEye(): number;
        
        public get numberOfEyes(): number;
        
        public get stereoRenderingMode(): UnityEngine_Rendering_PostProcessing_PostProcessRenderContext.StereoRenderingMode;
        
        public get screenWidth(): number;
        
        public get screenHeight(): number;
        
        public get isSceneView(): boolean;
        
        public get antialiasing(): UnityEngine_Rendering_PostProcessing_PostProcessLayer.Antialiasing;
        
        public get temporalAntialiasing(): TemporalAntialiasing;
        
        public constructor();
        
        public Reset():void;
        
        public IsTemporalAntialiasingActive():boolean;
        
        public IsDebugOverlayEnabled($overlay: DebugOverlay):boolean;
        
        public PushDebugOverlay($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $sheet: PropertySheet, $pass: number):void;
        
        public GetScreenSpaceTemporaryRT($cmd: UnityEngine_Rendering.CommandBuffer, $nameID: number, $depthBufferBits?: number, $colorFormat?: UnityEngine.RenderTextureFormat, $readWrite?: UnityEngine.RenderTextureReadWrite, $filter?: UnityEngine.FilterMode, $widthOverride?: number, $heightOverride?: number):void;
        
        public GetScreenSpaceTemporaryRT($depthBufferBits?: number, $colorFormat?: UnityEngine.RenderTextureFormat, $readWrite?: UnityEngine.RenderTextureReadWrite, $widthOverride?: number, $heightOverride?: number):UnityEngine.RenderTexture;
        
        public UpdateSinglePassStereoState($isTAAEnabled: boolean, $isAOEnabled: boolean, $isSSREnabled: boolean):void;
        
                    
    }
    
    enum EyeAdaptation { Progressive = 0, Fixed = 1 }
    
    class EyeAdaptationParameter extends ParameterOverride$1<EyeAdaptation> {
        
        public constructor();
        
                    
    }
    
    class AutoExposure extends PostProcessEffectSettings {
        
        public filtering: Vector2Parameter;
        
        public minLuminance: FloatParameter;
        
        public maxLuminance: FloatParameter;
        
        public keyValue: FloatParameter;
        
        public eyeAdaptation: EyeAdaptationParameter;
        
        public speedUp: FloatParameter;
        
        public speedDown: FloatParameter;
        
        public constructor();
        
                    
    }
    
    class Vector2Parameter extends ParameterOverride$1<UnityEngine.Vector2> {
        
        public constructor();
        
        public Interp($from: UnityEngine.Vector2, $to: UnityEngine.Vector2, $t: number):void;
        
        public static op_Implicit($prop: Vector2Parameter):UnityEngine.Vector3;
        
        public static op_Implicit($prop: Vector2Parameter):UnityEngine.Vector4;
        
                    
    }
    
    class Bloom extends PostProcessEffectSettings {
        
        public intensity: FloatParameter;
        
        public threshold: FloatParameter;
        
        public softKnee: FloatParameter;
        
        public clamp: FloatParameter;
        
        public diffusion: FloatParameter;
        
        public anamorphicRatio: FloatParameter;
        
        public color: ColorParameter;
        
        public fastMode: BoolParameter;
        
        public dirtTexture: TextureParameter;
        
        public dirtIntensity: FloatParameter;
        
        public constructor();
        
                    
    }
    
    class TextureParameter extends ParameterOverride$1<UnityEngine.Texture> {
        
        public defaultState: TextureParameterDefault;
        
        public constructor();
        
        public Interp($from: UnityEngine.Texture, $to: UnityEngine.Texture, $t: number):void;
        
                    
    }
    
    class ChromaticAberration extends PostProcessEffectSettings {
        
        public spectralLut: TextureParameter;
        
        public intensity: FloatParameter;
        
        public fastMode: BoolParameter;
        
        public constructor();
        
                    
    }
    
    enum GradingMode { LowDefinitionRange = 0, HighDefinitionRange = 1, External = 2 }
    
    enum Tonemapper { None = 0, Neutral = 1, ACES = 2, Custom = 3 }
    
    class GradingModeParameter extends ParameterOverride$1<GradingMode> {
        
        public constructor();
        
                    
    }
    
    class TonemapperParameter extends ParameterOverride$1<Tonemapper> {
        
        public constructor();
        
                    
    }
    
    class ColorGrading extends PostProcessEffectSettings {
        
        public gradingMode: GradingModeParameter;
        
        public externalLut: TextureParameter;
        
        public tonemapper: TonemapperParameter;
        
        public toneCurveToeStrength: FloatParameter;
        
        public toneCurveToeLength: FloatParameter;
        
        public toneCurveShoulderStrength: FloatParameter;
        
        public toneCurveShoulderLength: FloatParameter;
        
        public toneCurveShoulderAngle: FloatParameter;
        
        public toneCurveGamma: FloatParameter;
        
        public ldrLut: TextureParameter;
        
        public ldrLutContribution: FloatParameter;
        
        public temperature: FloatParameter;
        
        public tint: FloatParameter;
        
        public colorFilter: ColorParameter;
        
        public hueShift: FloatParameter;
        
        public saturation: FloatParameter;
        
        public brightness: FloatParameter;
        
        public postExposure: FloatParameter;
        
        public contrast: FloatParameter;
        
        public mixerRedOutRedIn: FloatParameter;
        
        public mixerRedOutGreenIn: FloatParameter;
        
        public mixerRedOutBlueIn: FloatParameter;
        
        public mixerGreenOutRedIn: FloatParameter;
        
        public mixerGreenOutGreenIn: FloatParameter;
        
        public mixerGreenOutBlueIn: FloatParameter;
        
        public mixerBlueOutRedIn: FloatParameter;
        
        public mixerBlueOutGreenIn: FloatParameter;
        
        public mixerBlueOutBlueIn: FloatParameter;
        
        public lift: Vector4Parameter;
        
        public gamma: Vector4Parameter;
        
        public gain: Vector4Parameter;
        
        public masterCurve: SplineParameter;
        
        public redCurve: SplineParameter;
        
        public greenCurve: SplineParameter;
        
        public blueCurve: SplineParameter;
        
        public hueVsHueCurve: SplineParameter;
        
        public hueVsSatCurve: SplineParameter;
        
        public satVsSatCurve: SplineParameter;
        
        public lumVsSatCurve: SplineParameter;
        
        public constructor();
        
                    
    }
    
    class Vector4Parameter extends ParameterOverride$1<UnityEngine.Vector4> {
        
        public constructor();
        
        public Interp($from: UnityEngine.Vector4, $to: UnityEngine.Vector4, $t: number):void;
        
        public static op_Implicit($prop: Vector4Parameter):UnityEngine.Vector2;
        
        public static op_Implicit($prop: Vector4Parameter):UnityEngine.Vector3;
        
                    
    }
    
    class SplineParameter extends ParameterOverride$1<Spline> {
        
        public constructor();
        
        public Interp($from: Spline, $to: Spline, $t: number):void;
        
                    
    }
    
    class Spline extends System.Object {
        
        public static k_Precision: number;
        
        public static k_Step: number;
        
        public curve: UnityEngine.AnimationCurve;
        
        public cachedData: number[];
        
        public constructor($curve: UnityEngine.AnimationCurve, $zeroValue: number, $loop: boolean, $bounds: UnityEngine.Vector2);
        
        public Cache($frame: number):void;
        
        public Evaluate($t: number, $length: number):number;
        
        public Evaluate($t: number):number;
        
        public GetHashCode():number;
        
                    
    }
    
    enum KernelSize { Small = 0, Medium = 1, Large = 2, VeryLarge = 3 }
    
    class KernelSizeParameter extends ParameterOverride$1<KernelSize> {
        
        public constructor();
        
                    
    }
    
    class DepthOfField extends PostProcessEffectSettings {
        
        public focusDistance: FloatParameter;
        
        public aperture: FloatParameter;
        
        public focalLength: FloatParameter;
        
        public kernelSize: KernelSizeParameter;
        
        public constructor();
        
                    
    }
    
    class FastApproximateAntialiasing extends System.Object {
        
        public fastMode: boolean;
        
        public keepAlpha: boolean;
        
        public constructor();
        
                    
    }
    
    class Fog extends System.Object {
        
        public enabled: boolean;
        
        public excludeSkybox: boolean;
        
        public constructor();
        
                    
    }
    
    class Grain extends PostProcessEffectSettings {
        
        public colored: BoolParameter;
        
        public intensity: FloatParameter;
        
        public size: FloatParameter;
        
        public lumContrib: FloatParameter;
        
        public constructor();
        
                    
    }
    
    class LensDistortion extends PostProcessEffectSettings {
        
        public intensity: FloatParameter;
        
        public intensityX: FloatParameter;
        
        public intensityY: FloatParameter;
        
        public centerX: FloatParameter;
        
        public centerY: FloatParameter;
        
        public scale: FloatParameter;
        
        public constructor();
        
                    
    }
    
    class MotionBlur extends PostProcessEffectSettings {
        
        public shutterAngle: FloatParameter;
        
        public sampleCount: IntParameter;
        
        public constructor();
        
                    
    }
    
    class IntParameter extends ParameterOverride$1<number> {
        
        public constructor();
        
        public Interp($from: number, $to: number, $t: number):void;
        
                    
    }
    
    enum ScreenSpaceReflectionPreset { Lower = 0, Low = 1, Medium = 2, High = 3, Higher = 4, Ultra = 5, Overkill = 6, Custom = 7 }
    
    enum ScreenSpaceReflectionResolution { Downsampled = 0, FullSize = 1, Supersampled = 2 }
    
    class ScreenSpaceReflectionPresetParameter extends ParameterOverride$1<ScreenSpaceReflectionPreset> {
        
        public constructor();
        
                    
    }
    
    class ScreenSpaceReflectionResolutionParameter extends ParameterOverride$1<ScreenSpaceReflectionResolution> {
        
        public constructor();
        
                    
    }
    
    class ScreenSpaceReflections extends PostProcessEffectSettings {
        
        public preset: ScreenSpaceReflectionPresetParameter;
        
        public maximumIterationCount: IntParameter;
        
        public resolution: ScreenSpaceReflectionResolutionParameter;
        
        public thickness: FloatParameter;
        
        public maximumMarchDistance: FloatParameter;
        
        public distanceFade: FloatParameter;
        
        public vignette: FloatParameter;
        
        public constructor();
        
                    
    }
    
    class SubpixelMorphologicalAntialiasing extends System.Object {
        
        public quality: UnityEngine_Rendering_PostProcessing_SubpixelMorphologicalAntialiasing.Quality;
        
        public constructor();
        
        public IsSupported():boolean;
        
                    
    }
    
    class TemporalAntialiasing extends System.Object {
        
        public jitterSpread: number;
        
        public sharpness: number;
        
        public stationaryBlending: number;
        
        public motionBlending: number;
        
        public jitteredMatrixFunc: System.Func$3<UnityEngine.Camera, UnityEngine.Vector2, UnityEngine.Matrix4x4>;
        
        public get jitter(): UnityEngine.Vector2;
        
        public get sampleIndex(): number;
        
        public constructor();
        
        public IsSupported():boolean;
        
        public GetJitteredProjectionMatrix($camera: UnityEngine.Camera):UnityEngine.Matrix4x4;
        
        public ConfigureJitteredProjectionMatrix($context: PostProcessRenderContext):void;
        
        public ConfigureStereoJitteredProjectionMatrices($context: PostProcessRenderContext):void;
        
                    
    }
    
    enum VignetteMode { Classic = 0, Masked = 1 }
    
    class VignetteModeParameter extends ParameterOverride$1<VignetteMode> {
        
        public constructor();
        
                    
    }
    
    class Vignette extends PostProcessEffectSettings {
        
        public mode: VignetteModeParameter;
        
        public color: ColorParameter;
        
        public center: Vector2Parameter;
        
        public intensity: FloatParameter;
        
        public smoothness: FloatParameter;
        
        public roundness: FloatParameter;
        
        public rounded: BoolParameter;
        
        public mask: TextureParameter;
        
        public opacity: FloatParameter;
        
        public constructor();
        
                    
    }
    
    class HistogramMonitor extends Monitor {
        
        public width: number;
        
        public height: number;
        
        public channel: UnityEngine_Rendering_PostProcessing_HistogramMonitor.Channel;
        
        public constructor();
        
                    
    }
    
    class Monitor extends System.Object {
        
        public get output(): UnityEngine.RenderTexture;
        
        public IsRequestedAndSupported($context: PostProcessRenderContext):boolean;
        
                    
    }
    
    class LightMeterMonitor extends Monitor {
        
        public width: number;
        
        public height: number;
        
        public showCurves: boolean;
        
        public constructor();
        
                    
    }
    
    enum MonitorType { LightMeter = 0, Histogram = 1, Waveform = 2, Vectorscope = 3 }
    
    class VectorscopeMonitor extends Monitor {
        
        public size: number;
        
        public exposure: number;
        
        public constructor();
        
                    
    }
    
    class WaveformMonitor extends Monitor {
        
        public exposure: number;
        
        public height: number;
        
        public constructor();
        
                    
    }
    
    class Vector3Parameter extends ParameterOverride$1<UnityEngine.Vector3> {
        
        public constructor();
        
        public Interp($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $t: number):void;
        
        public static op_Implicit($prop: Vector3Parameter):UnityEngine.Vector2;
        
        public static op_Implicit($prop: Vector3Parameter):UnityEngine.Vector4;
        
                    
    }
    
    enum TextureParameterDefault { None = 0, Black = 1, White = 2, Transparent = 3, Lut2D = 4 }
    
    class PostProcessBundle extends System.Object {
        
        public get attribute(): PostProcessAttribute;
        
        public get settings(): PostProcessEffectSettings;
        
                    
    }
    
    class PostProcessDebug extends UnityEngine.MonoBehaviour {
        
        public postProcessLayer: PostProcessLayer;
        
        public lightMeter: boolean;
        
        public histogram: boolean;
        
        public waveform: boolean;
        
        public vectorscope: boolean;
        
        public debugOverlay: DebugOverlay;
        
        public constructor();
        
                    
    }
    
    class PostProcessLayer extends UnityEngine.MonoBehaviour {
        
        public volumeTrigger: UnityEngine.Transform;
        
        public volumeLayer: UnityEngine.LayerMask;
        
        public stopNaNPropagation: boolean;
        
        public finalBlitToCameraTarget: boolean;
        
        public antialiasingMode: UnityEngine_Rendering_PostProcessing_PostProcessLayer.Antialiasing;
        
        public temporalAntialiasing: TemporalAntialiasing;
        
        public subpixelMorphologicalAntialiasing: SubpixelMorphologicalAntialiasing;
        
        public fastApproximateAntialiasing: FastApproximateAntialiasing;
        
        public fog: Fog;
        
        public debugLayer: PostProcessDebugLayer;
        
        public breakBeforeColorGrading: boolean;
        
        public get sortedBundles(): System_Collections_Generic.Dictionary$2<PostProcessEvent, System_Collections_Generic.List$1<UnityEngine_Rendering_PostProcessing_PostProcessLayer.SerializedBundleRef>>;
        
        public get cameraDepthFlags(): UnityEngine.DepthTextureMode;
        
        public get haveBundlesBeenInited(): boolean;
        
        public constructor();
        
        public Init($resources: PostProcessResources):void;
        
        public InitBundles():void;
        
        public GetBundle<T extends PostProcessEffectSettings>():PostProcessBundle;
        
        public GetBundle($settingsType: System.Type):PostProcessBundle;
        
        public GetSettings<T extends PostProcessEffectSettings>():T;
        
        public BakeMSVOMap($cmd: UnityEngine_Rendering.CommandBuffer, $camera: UnityEngine.Camera, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $depthMap: System.Nullable$1<UnityEngine_Rendering.RenderTargetIdentifier>, $invert: boolean, $isMSAA?: boolean):void;
        
        public ResetHistory():void;
        
        public HasOpaqueOnlyEffects($context: PostProcessRenderContext):boolean;
        
        public HasActiveEffects($evt: PostProcessEvent, $context: PostProcessRenderContext):boolean;
        
        public UpdateVolumeSystem($cam: UnityEngine.Camera, $cmd: UnityEngine_Rendering.CommandBuffer):void;
        
        public RenderOpaqueOnly($context: PostProcessRenderContext):void;
        
        public Render($context: PostProcessRenderContext):void;
        
                    
    }
    
    enum DebugOverlay { None = 0, Depth = 1, Normals = 2, MotionVectors = 3, NANTracker = 4, ColorBlindnessSimulation = 5, _ = 6, AmbientOcclusion = 7, BloomBuffer = 8, BloomThreshold = 9, DepthOfField = 10 }
    
    enum ColorBlindnessType { Deuteranopia = 0, Protanopia = 1, Tritanopia = 2 }
    
    class PostProcessDebugLayer extends System.Object {
        
        public lightMeter: LightMeterMonitor;
        
        public histogram: HistogramMonitor;
        
        public waveform: WaveformMonitor;
        
        public vectorscope: VectorscopeMonitor;
        
        public overlaySettings: UnityEngine_Rendering_PostProcessing_PostProcessDebugLayer.OverlaySettings;
        
        public get debugOverlayTarget(): UnityEngine.RenderTexture;
        
        public get debugOverlayActive(): boolean;
        
        public get debugOverlay(): DebugOverlay;
        
        public constructor();
        
        public RequestMonitorPass($monitor: MonitorType):void;
        
        public RequestDebugOverlay($mode: DebugOverlay):void;
        
        public PushDebugOverlay($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $sheet: PropertySheet, $pass: number):void;
        
                    
    }
    
    class PropertySheet extends System.Object {
        
        public get properties(): UnityEngine.MaterialPropertyBlock;
        
        public ClearKeywords():void;
        
        public EnableKeyword($keyword: string):void;
        
        public DisableKeyword($keyword: string):void;
        
                    
    }
    
    class PostProcessEffectRenderer extends System.Object {
        
        public Init():void;
        
        public GetCameraFlags():UnityEngine.DepthTextureMode;
        
        public ResetHistory():void;
        
        public Release():void;
        
        public Render($context: PostProcessRenderContext):void;
        
                    
    }
    
    class PostProcessResources extends UnityEngine.ScriptableObject {
        
        public blueNoise64: UnityEngine.Texture2D[];
        
        public blueNoise256: UnityEngine.Texture2D[];
        
        public smaaLuts: UnityEngine_Rendering_PostProcessing_PostProcessResources.SMAALuts;
        
        public shaders: UnityEngine_Rendering_PostProcessing_PostProcessResources.Shaders;
        
        public computeShaders: UnityEngine_Rendering_PostProcessing_PostProcessResources.ComputeShaders;
        
        public changeHandler: UnityEngine_Rendering_PostProcessing_PostProcessResources.ChangeHandler;
        
        public constructor();
        
                    
    }
    
    class PostProcessManager extends System.Object {
        
        public settingsTypes: System_Collections_Generic.Dictionary$2<System.Type, PostProcessAttribute>;
        
        public static get instance(): PostProcessManager;
        
        public GetActiveVolumes($layer: PostProcessLayer, $results: System_Collections_Generic.List$1<PostProcessVolume>, $skipDisabled?: boolean, $skipZeroWeight?: boolean):void;
        
        public GetHighestPriorityVolume($layer: PostProcessLayer):PostProcessVolume;
        
        public GetHighestPriorityVolume($mask: UnityEngine.LayerMask):PostProcessVolume;
        
        public QuickVolume($layer: number, $priority: number, ...settings: PostProcessEffectSettings[]):PostProcessVolume;
        
                    
    }
    
    class PostProcessVolume extends UnityEngine.MonoBehaviour {
        
        public sharedProfile: PostProcessProfile;
        
        public isGlobal: boolean;
        
        public blendDistance: number;
        
        public weight: number;
        
        public priority: number;
        
        public get profile(): PostProcessProfile;
        public set profile(value: PostProcessProfile);
        
        public constructor();
        
        public HasInstantiatedProfile():boolean;
        
                    
    }
    
    class PostProcessProfile extends UnityEngine.ScriptableObject {
        
        public settings: System_Collections_Generic.List$1<PostProcessEffectSettings>;
        
        public isDirty: boolean;
        
        public constructor();
        
        public AddSettings<T extends PostProcessEffectSettings>():T;
        
        public AddSettings($type: System.Type):PostProcessEffectSettings;
        
        public AddSettings($effect: PostProcessEffectSettings):PostProcessEffectSettings;
        
        public RemoveSettings<T extends PostProcessEffectSettings>():void;
        
        public RemoveSettings($type: System.Type):void;
        
        public HasSettings<T extends PostProcessEffectSettings>():boolean;
        
        public HasSettings($type: System.Type):boolean;
        
        public GetSetting<T extends PostProcessEffectSettings>():T;
        
        public TryGetSettings<T extends PostProcessEffectSettings>($outSetting: $Ref<T>):boolean;
        
                    
    }
    
    class PropertySheetFactory extends System.Object {
        
        public constructor();
        
        public Get($shader: UnityEngine.Shader):PropertySheet;
        
        public Release():void;
        
                    
    }
    
    class ColorUtilities extends System.Object {
        
        public static StandardIlluminantY($x: number):number;
        
        public static CIExyToLMS($x: number, $y: number):UnityEngine.Vector3;
        
        public static ComputeColorBalance($temperature: number, $tint: number):UnityEngine.Vector3;
        
        public static ColorToLift($color: UnityEngine.Vector4):UnityEngine.Vector3;
        
        public static ColorToInverseGamma($color: UnityEngine.Vector4):UnityEngine.Vector3;
        
        public static ColorToGain($color: UnityEngine.Vector4):UnityEngine.Vector3;
        
        public static LogCToLinear($x: number):number;
        
        public static LinearToLogC($x: number):number;
        
        public static ToHex($c: UnityEngine.Color):number;
        
        public static ToRGBA($hex: number):UnityEngine.Color;
        
                    
    }
    
    class HableCurve extends System.Object {
        
        public uniforms: UnityEngine_Rendering_PostProcessing_HableCurve.Uniforms;
        
        public get whitePoint(): number;
        
        public get inverseWhitePoint(): number;
        
        public constructor();
        
        public Eval($x: number):number;
        
        public Init($toeStrength: number, $toeLength: number, $shoulderStrength: number, $shoulderLength: number, $shoulderAngle: number, $gamma: number):void;
        
                    
    }
    
    class HaltonSeq extends System.Object {
        
        public static Get($index: number, $radix: number):number;
        
                    
    }
    
    class RuntimeUtilities extends System.Object {
        
        public static get whiteTexture(): UnityEngine.Texture2D;
        
        public static get whiteTexture3D(): UnityEngine.Texture3D;
        
        public static get blackTexture(): UnityEngine.Texture2D;
        
        public static get blackTexture3D(): UnityEngine.Texture3D;
        
        public static get transparentTexture(): UnityEngine.Texture2D;
        
        public static get transparentTexture3D(): UnityEngine.Texture3D;
        
        public static get fullscreenTriangle(): UnityEngine.Mesh;
        
        public static get copyStdMaterial(): UnityEngine.Material;
        
        public static get copyStdFromDoubleWideMaterial(): UnityEngine.Material;
        
        public static get copyMaterial(): UnityEngine.Material;
        
        public static get copyFromTexArrayMaterial(): UnityEngine.Material;
        
        public static get copySheet(): PropertySheet;
        
        public static get copyFromTexArraySheet(): PropertySheet;
        
        public static get scriptableRenderPipelineActive(): boolean;
        
        public static get supportsDeferredShading(): boolean;
        
        public static get supportsDepthNormals(): boolean;
        
        public static get isSinglePassStereoSelected(): boolean;
        
        public static get isSinglePassStereoEnabled(): boolean;
        
        public static get isVREnabled(): boolean;
        
        public static get isAndroidOpenGL(): boolean;
        
        public static get defaultHDRRenderTextureFormat(): UnityEngine.RenderTextureFormat;
        
        public static get isLinearColorSpace(): boolean;
        
        public static GetLutStrip($size: number):UnityEngine.Texture2D;
        
        public static SetRenderTargetWithLoadStoreAction($cmd: UnityEngine_Rendering.CommandBuffer, $rt: UnityEngine_Rendering.RenderTargetIdentifier, $loadAction: UnityEngine_Rendering.RenderBufferLoadAction, $storeAction: UnityEngine_Rendering.RenderBufferStoreAction):void;
        
        public static SetRenderTargetWithLoadStoreAction($cmd: UnityEngine_Rendering.CommandBuffer, $rt: UnityEngine_Rendering.RenderTargetIdentifier, $loadAction: UnityEngine_Rendering.RenderBufferLoadAction, $storeAction: UnityEngine_Rendering.RenderBufferStoreAction, $depthLoadAction: UnityEngine_Rendering.RenderBufferLoadAction, $depthStoreAction: UnityEngine_Rendering.RenderBufferStoreAction):void;
        
        public static SetRenderTargetWithLoadStoreAction($cmd: UnityEngine_Rendering.CommandBuffer, $color: UnityEngine_Rendering.RenderTargetIdentifier, $colorLoadAction: UnityEngine_Rendering.RenderBufferLoadAction, $colorStoreAction: UnityEngine_Rendering.RenderBufferStoreAction, $depth: UnityEngine_Rendering.RenderTargetIdentifier, $depthLoadAction: UnityEngine_Rendering.RenderBufferLoadAction, $depthStoreAction: UnityEngine_Rendering.RenderBufferStoreAction):void;
        
        public static BlitFullscreenTriangle($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>, $preserveDepth?: boolean):void;
        
        public static BlitFullscreenTriangle($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $loadAction: UnityEngine_Rendering.RenderBufferLoadAction, $viewport?: System.Nullable$1<UnityEngine.Rect>, $preserveDepth?: boolean):void;
        
        public static BlitFullscreenTriangle($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>, $preserveDepth?: boolean):void;
        
        public static BlitFullscreenTriangleFromDoubleWide($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $material: UnityEngine.Material, $pass: number, $eye: number):void;
        
        public static BlitFullscreenTriangleToDoubleWide($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $eye: number):void;
        
        public static BlitFullscreenTriangleFromTexArray($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $depthSlice?: number):void;
        
        public static BlitFullscreenTriangleToTexArray($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $depthSlice?: number):void;
        
        public static BlitFullscreenTriangle($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $depth: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>):void;
        
        public static BlitFullscreenTriangle($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destinations: UnityEngine_Rendering.RenderTargetIdentifier[], $depth: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>):void;
        
        public static BuiltinBlit($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier):void;
        
        public static BuiltinBlit($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $mat: UnityEngine.Material, $pass?: number):void;
        
        public static CopyTexture($cmd: UnityEngine_Rendering.CommandBuffer, $source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier):void;
        
        public static isFloatingPointFormat($format: UnityEngine.RenderTextureFormat):boolean;
        
        public static Destroy($obj: UnityEngine.Object):void;
        
        public static IsResolvedDepthAvailable($camera: UnityEngine.Camera):boolean;
        
        public static DestroyProfile($profile: PostProcessProfile, $destroyEffects: boolean):void;
        
        public static DestroyVolume($volume: PostProcessVolume, $destroyProfile: boolean, $destroyGameObject?: boolean):void;
        
        public static IsPostProcessingActive($layer: PostProcessLayer):boolean;
        
        public static IsTemporalAntialiasingActive($layer: PostProcessLayer):boolean;
        
        public static GetAllSceneObjects<T extends UnityEngine.Component>():System_Collections_Generic.IEnumerable$1<T>;
        
        public static CreateIfNull<T>($obj: $Ref<T>):void;
        
        public static Exp2($x: number):number;
        
        public static GetJitteredPerspectiveProjectionMatrix($camera: UnityEngine.Camera, $offset: UnityEngine.Vector2):UnityEngine.Matrix4x4;
        
        public static GetJitteredOrthographicProjectionMatrix($camera: UnityEngine.Camera, $offset: UnityEngine.Vector2):UnityEngine.Matrix4x4;
        
        public static GenerateJitteredProjectionMatrixFromOriginal($context: PostProcessRenderContext, $origProj: UnityEngine.Matrix4x4, $jitter: UnityEngine.Vector2):UnityEngine.Matrix4x4;
        
        public static GetAllAssemblyTypes():System_Collections_Generic.IEnumerable$1<System.Type>;
        
        public static GetAllTypesDerivedFrom<T>():System_Collections_Generic.IEnumerable$1<System.Type>;
        
        public static GetAttribute<T extends System.Attribute>($type: System.Type):T;
        
        public static GetMemberAttributes<TType,TValue>($expr: System_Linq_Expressions.Expression$1<System.Func$2<TType, TValue>>):System.Attribute[];
        
        public static GetFieldPath<TType,TValue>($expr: System_Linq_Expressions.Expression$1<System.Func$2<TType, TValue>>):string;
        
                    
    }
    
    class TextureFormatUtilities extends System.Object {
        
        public static GetUncompressedRenderTextureFormat($texture: UnityEngine.Texture):UnityEngine.RenderTextureFormat;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Attribute extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    type Func$3<T1,T2,TResult> = (arg1: T1, arg2: T2) => TResult;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Nullable$1<T> extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    type Func$2<T,TResult> = (arg: T) => TResult;
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    interface Type {
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        GetAttribute<T extends System.Attribute>():T;
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Rendering.PostProcessing.TrackballAttribute' {

    import * as System from 'System';
        
    
    enum Mode { None = 0, Lift = 1, Gamma = 2, Gain = 3 }
    
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
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
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
     * A standard 4x4 transformation matrix.
     */
    interface Matrix4x4 extends System.ValueType {
        
                    
    }
    /**
     * Render textures are textures that can be rendered to.
     */
    interface RenderTexture extends Texture {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * MonoBehaviour is the base class from which every Unity script derives.
     */
    interface MonoBehaviour extends Behaviour {
        
                    
    }
    /**
     * Depth texture generation mode for Camera.
     */
    enum DepthTextureMode { None = 0, Depth = 1, DepthNormals = 2, MotionVectors = 4 }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Specifies Layers to use in a Physics.Raycast.
     */
    interface LayerMask extends System.ValueType {
        
                    
    }
    /**
     * Format of a RenderTexture.
     */
    enum RenderTextureFormat { ARGB32 = 0, Depth = 1, ARGBHalf = 2, Shadowmap = 3, RGB565 = 4, ARGB4444 = 5, ARGB1555 = 6, Default = 7, ARGB2101010 = 8, DefaultHDR = 9, ARGB64 = 10, ARGBFloat = 11, RGFloat = 12, RGHalf = 13, RFloat = 14, RHalf = 15, R8 = 16, ARGBInt = 17, RGInt = 18, RInt = 19, BGRA32 = 20, RGB111110Float = 22, RG32 = 23, RGBAUShort = 24, RG16 = 25, BGRA10101010_XR = 26, BGR101010_XR = 27, R16 = 28 }
    /**
     * Color space conversion mode of a RenderTexture.
     */
    enum RenderTextureReadWrite { Default = 0, Linear = 1, sRGB = 2 }
    /**
     * Filtering mode for textures. Corresponds to the settings in a.
     */
    enum FilterMode { Point = 0, Bilinear = 1, Trilinear = 2 }
    /**
     * Class that represents textures in C# code.
     */
    interface Texture2D extends Texture {
        
                    
    }
    /**
     * A block of material values to apply.
     */
    interface MaterialPropertyBlock extends System.Object {
        
                    
    }
    /**
     * Shader scripts used for all rendering.
     */
    interface Shader extends Object {
        
                    
    }
    /**
     * Class for handling 3D Textures, Use this to create.
     */
    interface Texture3D extends Texture {
        
                    
    }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * Store a collection of Keyframes that can be evaluated over time.
     */
    interface AnimationCurve extends System.Object {
        
                    
    }
    /**
     * Compute Shader asset.
     */
    interface ComputeShader extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.Rendering.PostProcessing.SubpixelMorphologicalAntialiasing' {

    import * as System from 'System';
        
    
    enum Quality { Low = 0, Medium = 1, High = 2 }
    
}
declare module 'UnityEngine.Rendering.PostProcessing.HistogramMonitor' {

    import * as System from 'System';
        
    
    enum Channel { Red = 0, Green = 1, Blue = 2, Master = 3 }
    
}
declare module 'UnityEngine.Rendering.PostProcessing.PostProcessDebugLayer' {

    import * as System from 'System';
    import * as UnityEngine_Rendering_PostProcessing from 'UnityEngine.Rendering.PostProcessing';
        
    
    class OverlaySettings extends System.Object {
        
        public linearDepth: boolean;
        
        public motionColorIntensity: number;
        
        public motionGridSize: number;
        
        public colorBlindnessType: UnityEngine_Rendering_PostProcessing.ColorBlindnessType;
        
        public colorBlindnessStrength: number;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.Rendering' {

    import * as System from 'System';
    import * as UnityEngine_Rendering_PostProcessing from 'UnityEngine.Rendering.PostProcessing';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * List of graphics commands to execute.
     */
    interface CommandBuffer extends System.Object {
        
                    
    }
    /**
     * Identifies a RenderTexture for a Rendering.CommandBuffer.
     */
    interface RenderTargetIdentifier extends System.ValueType {
        
                    
    }
    /**
     * This enum describes what should be done on the render target when it is activated (loaded).
     */
    enum RenderBufferLoadAction { Load = 0, Clear = 1, DontCare = 2 }
    /**
     * This enum describes what should be done on the render target when the GPU is done rendering into it.
     */
    enum RenderBufferStoreAction { Store = 0, Resolve = 1, StoreAndResolve = 2, DontCare = 3 }
    
    interface CommandBuffer {
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        SetRenderTargetWithLoadStoreAction($rt: UnityEngine_Rendering.RenderTargetIdentifier, $loadAction: UnityEngine_Rendering.RenderBufferLoadAction, $storeAction: UnityEngine_Rendering.RenderBufferStoreAction):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        SetRenderTargetWithLoadStoreAction($rt: UnityEngine_Rendering.RenderTargetIdentifier, $loadAction: UnityEngine_Rendering.RenderBufferLoadAction, $storeAction: UnityEngine_Rendering.RenderBufferStoreAction, $depthLoadAction: UnityEngine_Rendering.RenderBufferLoadAction, $depthStoreAction: UnityEngine_Rendering.RenderBufferStoreAction):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        SetRenderTargetWithLoadStoreAction($color: UnityEngine_Rendering.RenderTargetIdentifier, $colorLoadAction: UnityEngine_Rendering.RenderBufferLoadAction, $colorStoreAction: UnityEngine_Rendering.RenderBufferStoreAction, $depth: UnityEngine_Rendering.RenderTargetIdentifier, $depthLoadAction: UnityEngine_Rendering.RenderBufferLoadAction, $depthStoreAction: UnityEngine_Rendering.RenderBufferStoreAction):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangle($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>, $preserveDepth?: boolean):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangle($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $loadAction: UnityEngine_Rendering.RenderBufferLoadAction, $viewport?: System.Nullable$1<UnityEngine.Rect>, $preserveDepth?: boolean):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangle($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>, $preserveDepth?: boolean):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangleFromDoubleWide($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $material: UnityEngine.Material, $pass: number, $eye: number):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangleToDoubleWide($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $eye: number):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangleFromTexArray($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $depthSlice?: number):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangleToTexArray($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $depthSlice?: number):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangle($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $depth: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BlitFullscreenTriangle($source: UnityEngine_Rendering.RenderTargetIdentifier, $destinations: UnityEngine_Rendering.RenderTargetIdentifier[], $depth: UnityEngine_Rendering.RenderTargetIdentifier, $propertySheet: PropertySheet, $pass: number, $clear?: boolean, $viewport?: System.Nullable$1<UnityEngine.Rect>):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BuiltinBlit($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier):void;
        /** @extension UnityEngine.Rendering.PostProcessing.RuntimeUtilities */
        BuiltinBlit($source: UnityEngine_Rendering.RenderTargetIdentifier, $destination: UnityEngine_Rendering.RenderTargetIdentifier, $mat: UnityEngine.Material, $pass?: number):void;
        
                    
    }
    
}
declare module 'UnityEngine.Rendering.PostProcessing.PostProcessLayer' {

    import * as System from 'System';
    import * as UnityEngine_Rendering_PostProcessing from 'UnityEngine.Rendering.PostProcessing';
        
    
    enum Antialiasing { None = 0, FastApproximateAntialiasing = 1, SubpixelMorphologicalAntialiasing = 2, TemporalAntialiasing = 3 }
    
    class SerializedBundleRef extends System.Object {
        
        public assemblyQualifiedName: string;
        
        public bundle: UnityEngine_Rendering_PostProcessing.PostProcessBundle;
        
        public constructor();
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface IEnumerable$1<T> {
        
                    
    }
    
}
declare module 'UnityEngine.Rendering.PostProcessing.PostProcessRenderContext' {

    import * as System from 'System';
        
    
    enum StereoRenderingMode { MultiPass = 0, SinglePass = 1, SinglePassInstanced = 2, SinglePassMultiview = 3 }
    
}
declare module 'UnityEngine.Rendering.PostProcessing.PostProcessResources' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    
    class SMAALuts extends System.Object {
        
        public area: UnityEngine.Texture2D;
        
        public search: UnityEngine.Texture2D;
        
        public constructor();
        
                    
    }
    
    class Shaders extends System.Object {
        
        public bloom: UnityEngine.Shader;
        
        public copy: UnityEngine.Shader;
        
        public copyStd: UnityEngine.Shader;
        
        public copyStdFromTexArray: UnityEngine.Shader;
        
        public copyStdFromDoubleWide: UnityEngine.Shader;
        
        public discardAlpha: UnityEngine.Shader;
        
        public depthOfField: UnityEngine.Shader;
        
        public finalPass: UnityEngine.Shader;
        
        public grainBaker: UnityEngine.Shader;
        
        public motionBlur: UnityEngine.Shader;
        
        public temporalAntialiasing: UnityEngine.Shader;
        
        public subpixelMorphologicalAntialiasing: UnityEngine.Shader;
        
        public texture2dLerp: UnityEngine.Shader;
        
        public uber: UnityEngine.Shader;
        
        public lut2DBaker: UnityEngine.Shader;
        
        public lightMeter: UnityEngine.Shader;
        
        public gammaHistogram: UnityEngine.Shader;
        
        public waveform: UnityEngine.Shader;
        
        public vectorscope: UnityEngine.Shader;
        
        public debugOverlays: UnityEngine.Shader;
        
        public deferredFog: UnityEngine.Shader;
        
        public scalableAO: UnityEngine.Shader;
        
        public multiScaleAO: UnityEngine.Shader;
        
        public screenSpaceReflections: UnityEngine.Shader;
        
        public constructor();
        
        public Clone():Shaders;
        
                    
    }
    
    class ComputeShaders extends System.Object {
        
        public autoExposure: UnityEngine.ComputeShader;
        
        public exposureHistogram: UnityEngine.ComputeShader;
        
        public lut3DBaker: UnityEngine.ComputeShader;
        
        public texture3dLerp: UnityEngine.ComputeShader;
        
        public gammaHistogram: UnityEngine.ComputeShader;
        
        public waveform: UnityEngine.ComputeShader;
        
        public vectorscope: UnityEngine.ComputeShader;
        
        public multiScaleAODownsample1: UnityEngine.ComputeShader;
        
        public multiScaleAODownsample2: UnityEngine.ComputeShader;
        
        public multiScaleAORender: UnityEngine.ComputeShader;
        
        public multiScaleAOUpsample: UnityEngine.ComputeShader;
        
        public gaussianDownsample: UnityEngine.ComputeShader;
        
        public constructor();
        
        public Clone():ComputeShaders;
        
                    
    }
    
    type ChangeHandler = () => void;
    var ChangeHandler: {new (func: () => void): ChangeHandler;}
    
}
declare module 'UnityEngine.Rendering.PostProcessing.HableCurve' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    
    class Uniforms extends System.Object {
        
        public get curve(): UnityEngine.Vector4;
        
        public get toeSegmentA(): UnityEngine.Vector4;
        
        public get toeSegmentB(): UnityEngine.Vector4;
        
        public get midSegmentA(): UnityEngine.Vector4;
        
        public get midSegmentB(): UnityEngine.Vector4;
        
        public get shoSegmentA(): UnityEngine.Vector4;
        
        public get shoSegmentB(): UnityEngine.Vector4;
        
                    
    }
    
}
declare module 'System.Linq.Expressions' {

    import * as System from 'System';
        
    
    interface Expression$1<TDelegate> extends LambdaExpression {
        
                    
    }
    
    interface LambdaExpression extends Expression {
        
                    
    }
    
    interface Expression extends System.Object {
        
                    
    }
    
}

