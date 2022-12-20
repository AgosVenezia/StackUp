//# signature=UnityEngine.VirtualTexturingModule#0d3e8738e0997c0c0162323bdb3c8df9#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Rendering.VirtualTexturing' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Experimental_Rendering from 'UnityEngine.Experimental.Rendering';
    import * as UnityEngine_Rendering_VirtualTexturing_Debugging from 'UnityEngine.Rendering.VirtualTexturing.Debugging';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
        
    /**
     * The virtual texturing system.
     */
    class System extends System.Object {
        /**
         * Request all avalable mips.
         */
        public static AllMips: number;
        /**
         * Update the virtual texturing system.
         */
        public static Update():void;
        
                    
    }
    
    class EditorHelpers extends System.Object {
        
        public static ValidateTextureStack($textures: UnityEngine.Texture[], $errorMessage: $Ref<string>):boolean;
        
        public static QuerySupportedFormats():UnityEngine_Experimental_Rendering.GraphicsFormat[];
        
                    
    }
    
    class Debugging extends System.Object {
        
        public static get debugTilesEnabled(): boolean;
        public static set debugTilesEnabled(value: boolean);
        
        public static get resolvingEnabled(): boolean;
        public static set resolvingEnabled(value: boolean);
        
        public static get flushEveryTickEnabled(): boolean;
        public static set flushEveryTickEnabled(value: boolean);
        
        public static GetNumHandles():number;
        
        public static GrabHandleInfo($debugHandle: $Ref<UnityEngine_Rendering_VirtualTexturing_Debugging.Handle>, $index: number):void;
        
        public static GetInfoDump():string;
        
                    
    }
    /**
     * Class responsable for virtual texturing feedback analysis.
     */
    class Resolver extends System.Object {
        /**
         * Width of the texture that the internal buffers can hold.
         */
        public get CurrentWidth(): number;
        /**
         * >Height of the texture that the internal buffers can hold.
         */
        public get CurrentHeight(): number;
        /**
         * Create a new VirtualTextureResolver object.
         */
        public constructor();
        /**
         * Disposes this object.
         */
        public Dispose():void;
        /**
         * Update the internal buffers.
         * @param width Width of the texture passed in during Process.
         * @param height Height of the texture passed in during Process.
         */
        public UpdateSize($width: number, $height: number):void;
        /**
         * Process the passed in feedback texture.
         * @param cmd The commandbuffer used to schedule processing.
         * @param rt Texture containing the feedback data.
         * @param x X position of the subrect that is processed.
         * @param width Width of the subrect that is processed.
         * @param y Y position of the subrect that is processed.
         * @param height Height of the subrect that is processed.
         * @param mip Miplevel of the texture to process.
         * @param slice Arrayslice of the texture to process.
         */
        public Process($cmd: UnityEngine_Rendering.CommandBuffer, $rt: UnityEngine_Rendering.RenderTargetIdentifier):void;
        /**
         * Process the passed in feedback texture.
         * @param cmd The commandbuffer used to schedule processing.
         * @param rt Texture containing the feedback data.
         * @param x X position of the subrect that is processed.
         * @param width Width of the subrect that is processed.
         * @param y Y position of the subrect that is processed.
         * @param height Height of the subrect that is processed.
         * @param mip Miplevel of the texture to process.
         * @param slice Arrayslice of the texture to process.
         */
        public Process($cmd: UnityEngine_Rendering.CommandBuffer, $rt: UnityEngine_Rendering.RenderTargetIdentifier, $x: number, $width: number, $y: number, $height: number, $mip: number, $slice: number):void;
        
                    
    }
    /**
     * Settings for a virtual texturing GPU cache.
     */
    class GPUCacheSetting extends System.ValueType {
        /**
         * Format of the cache these settings are applied to.
         */
        public format: UnityEngine_Experimental_Rendering.GraphicsFormat;
        /**
         * Size in MegaBytes of the cache created with these settings.
         */
        public sizeInMegaBytes: number;
        
        public get_Clone(): GPUCacheSetting;            
    }
    /**
     * Filtering modes available in the virtual texturing system.
     */
    enum FilterMode { Bilinear = 1, Trilinear = 2 }
    /**
     * Static class representing the Streaming Virtual Texturing system.
     */
    class Streaming extends System.Object {
        /**
         * Make a rectangle in UV space resident for a given Virtual Texture Stack.
         * @param mat The Material that contains the Virtual Texture Stack. The Virtual Texture Stacks contained in a Material are declared in the Material's Shader.
         * @param stackNameId The unique identifier for the name of the Virtual Texture Stack, as declared in the Shader. To find the identifier for a given Shader property name, use Shader.PropertyToID.
         * @param r The rectangle in 0-1 UV space to make resident.  Anything outside the [ 0...1 [ x [ 0...1 [ rectangle will be silently ignored.
         * @param mipMap The mip level to make resident. Mips are numbered from 0 (= full resolution) to n (= lowest resolution) where n is the mipmap level what is a single tile in size.  Requesting invalid mips is silently ignored.
         * @param numMips The number of mip levels starting from 'mipMap' to make resident. Requesting invalid mips is silently ignored.
         */
        public static RequestRegion($mat: UnityEngine.Material, $stackNameId: number, $r: UnityEngine.Rect, $mipMap: number, $numMips: number):void;
        /**
         * Gets the width and height of a Virtual Texture Stack, in pixels.
         * @param mat The Material that contains the Virtual Texture Stack. The Virtual Texture Stacks contained in a Material are declared in the Material's Shader.
         * @param stackNameId The unique identifier for the name of the Virtual Texture Stack, as declared in the Shader. To find the identifier for a given Shader property name, use Shader.PropertyToID.
         * @param width Unity populates width with the width of the Virtual Texture Stack, in pixels.
         * @param height Unity populates height with the height of the Virtual Texture Stack, in pixels.
         */
        public static GetTextureStackSize($mat: UnityEngine.Material, $stackNameId: number, $width: $Ref<number>, $height: $Ref<number>):void;
        /**
         * Sets the CPU cache size (in MegaBytes) used by Streaming Virtual Texturing.
         */
        public static SetCPUCacheSize($sizeInMegabytes: number):void;
        /**
         * Sets the GPU cache settings used by Streaming Virtual Texturing.
         */
        public static SetGPUCacheSettings($cacheSettings: GPUCacheSetting[]):void;
        
                    
    }
    /**
     * Static class representing the Procedural Virtual Texturing system.
     */
    class Procedural extends System.Object {
        /**
         * Sets the Procedural Virtual Texturing CPU cache size (in MegaBytes).
         */
        public static SetCPUCacheSize($sizeInMegabytes: number):void;
        /**
         * Gets the Procedural Virtual Texturing CPU cache size.
         * @returns The size of the CPU caches.
         */
        public static GetCPUCacheSize():number;
        /**
         * Sets the Procedural Virtual Texturing GPU cache settings.
         */
        public static SetGPUCacheSettings($cacheSettings: GPUCacheSetting[]):void;
        /**
         * Gets the Procedural Virtual Texturing GPU cache settings.
         * @returns An array of GPU cache settings.
         */
        public static GetGPUCacheSettings():GPUCacheSetting[];
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.Experimental.Rendering' {

        
    /**
     * Use this format to create either Textures or RenderTextures from scripts.
     */
    enum GraphicsFormat { None = 0, R8_SRGB = 1, R8G8_SRGB = 2, R8G8B8_SRGB = 3, R8G8B8A8_SRGB = 4, R8_UNorm = 5, R8G8_UNorm = 6, R8G8B8_UNorm = 7, R8G8B8A8_UNorm = 8, R8_SNorm = 9, R8G8_SNorm = 10, R8G8B8_SNorm = 11, R8G8B8A8_SNorm = 12, R8_UInt = 13, R8G8_UInt = 14, R8G8B8_UInt = 15, R8G8B8A8_UInt = 16, R8_SInt = 17, R8G8_SInt = 18, R8G8B8_SInt = 19, R8G8B8A8_SInt = 20, R16_UNorm = 21, R16G16_UNorm = 22, R16G16B16_UNorm = 23, R16G16B16A16_UNorm = 24, R16_SNorm = 25, R16G16_SNorm = 26, R16G16B16_SNorm = 27, R16G16B16A16_SNorm = 28, R16_UInt = 29, R16G16_UInt = 30, R16G16B16_UInt = 31, R16G16B16A16_UInt = 32, R16_SInt = 33, R16G16_SInt = 34, R16G16B16_SInt = 35, R16G16B16A16_SInt = 36, R32_UInt = 37, R32G32_UInt = 38, R32G32B32_UInt = 39, R32G32B32A32_UInt = 40, R32_SInt = 41, R32G32_SInt = 42, R32G32B32_SInt = 43, R32G32B32A32_SInt = 44, R16_SFloat = 45, R16G16_SFloat = 46, R16G16B16_SFloat = 47, R16G16B16A16_SFloat = 48, R32_SFloat = 49, R32G32_SFloat = 50, R32G32B32_SFloat = 51, R32G32B32A32_SFloat = 52, B8G8R8_SRGB = 56, B8G8R8A8_SRGB = 57, B8G8R8_UNorm = 58, B8G8R8A8_UNorm = 59, B8G8R8_SNorm = 60, B8G8R8A8_SNorm = 61, B8G8R8_UInt = 62, B8G8R8A8_UInt = 63, B8G8R8_SInt = 64, B8G8R8A8_SInt = 65, R4G4B4A4_UNormPack16 = 66, B4G4R4A4_UNormPack16 = 67, R5G6B5_UNormPack16 = 68, B5G6R5_UNormPack16 = 69, R5G5B5A1_UNormPack16 = 70, B5G5R5A1_UNormPack16 = 71, A1R5G5B5_UNormPack16 = 72, E5B9G9R9_UFloatPack32 = 73, B10G11R11_UFloatPack32 = 74, A2B10G10R10_UNormPack32 = 75, A2B10G10R10_UIntPack32 = 76, A2B10G10R10_SIntPack32 = 77, A2R10G10B10_UNormPack32 = 78, A2R10G10B10_UIntPack32 = 79, A2R10G10B10_SIntPack32 = 80, A2R10G10B10_XRSRGBPack32 = 81, A2R10G10B10_XRUNormPack32 = 82, R10G10B10_XRSRGBPack32 = 83, R10G10B10_XRUNormPack32 = 84, A10R10G10B10_XRSRGBPack32 = 85, A10R10G10B10_XRUNormPack32 = 86, RGB_DXT1_SRGB = 96, RGBA_DXT1_SRGB = 96, RGB_DXT1_UNorm = 97, RGBA_DXT1_UNorm = 97, RGBA_DXT3_SRGB = 98, RGBA_DXT3_UNorm = 99, RGBA_DXT5_SRGB = 100, RGBA_DXT5_UNorm = 101, R_BC4_UNorm = 102, R_BC4_SNorm = 103, RG_BC5_UNorm = 104, RG_BC5_SNorm = 105, RGB_BC6H_UFloat = 106, RGB_BC6H_SFloat = 107, RGBA_BC7_SRGB = 108, RGBA_BC7_UNorm = 109, RGB_PVRTC_2Bpp_SRGB = 110, RGB_PVRTC_2Bpp_UNorm = 111, RGB_PVRTC_4Bpp_SRGB = 112, RGB_PVRTC_4Bpp_UNorm = 113, RGBA_PVRTC_2Bpp_SRGB = 114, RGBA_PVRTC_2Bpp_UNorm = 115, RGBA_PVRTC_4Bpp_SRGB = 116, RGBA_PVRTC_4Bpp_UNorm = 117, RGB_ETC_UNorm = 118, RGB_ETC2_SRGB = 119, RGB_ETC2_UNorm = 120, RGB_A1_ETC2_SRGB = 121, RGB_A1_ETC2_UNorm = 122, RGBA_ETC2_SRGB = 123, RGBA_ETC2_UNorm = 124, R_EAC_UNorm = 125, R_EAC_SNorm = 126, RG_EAC_UNorm = 127, RG_EAC_SNorm = 128, RGBA_ASTC4X4_SRGB = 129, RGBA_ASTC4X4_UNorm = 130, RGBA_ASTC5X5_SRGB = 131, RGBA_ASTC5X5_UNorm = 132, RGBA_ASTC6X6_SRGB = 133, RGBA_ASTC6X6_UNorm = 134, RGBA_ASTC8X8_SRGB = 135, RGBA_ASTC8X8_UNorm = 136, RGBA_ASTC10X10_SRGB = 137, RGBA_ASTC10X10_UNorm = 138, RGBA_ASTC12X12_SRGB = 139, RGBA_ASTC12X12_UNorm = 140, RGBA_ASTC4X4_UFloat = 145, RGBA_ASTC5X5_UFloat = 146, RGBA_ASTC6X6_UFloat = 147, RGBA_ASTC8X8_UFloat = 148, RGBA_ASTC10X10_UFloat = 149, RGBA_ASTC12X12_UFloat = 150 }
    
}
declare module 'UnityEngine.Rendering.VirtualTexturing.Debugging' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    
    class Handle extends System.ValueType {
        
        public handle: bigint;
        
        public group: string;
        
        public name: string;
        
        public numLayers: number;
        
        public material: UnityEngine.Material;
        
                    
    }
    
}
declare module 'UnityEngine.Rendering' {

    import * as System from 'System';
        
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
    
}
declare module 'UnityEngine.Rendering.VirtualTexturing.Procedural' {

    import * as System from 'System';
    import * as UnityEngine_Experimental_Rendering from 'UnityEngine.Experimental.Rendering';
    import * as UnityEngine_Rendering_VirtualTexturing from 'UnityEngine.Rendering.VirtualTexturing';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
    import * as Unity_Collections from 'Unity.Collections';
        
    /**
     * Struct that contains all parameters required to create a ProceduralTextureStack.
     */
    class CreationParameters extends System.ValueType {
        
        public static MaxNumLayers: number;
        
        public static MaxRequestsPerFrameSupported: number;
        
        public width: number;
        
        public height: number;
        
        public maxActiveRequests: number;
        
        public tilesize: number;
        
        public layers: UnityEngine_Experimental_Rendering.GraphicsFormat[];
        
        public filterMode: UnityEngine_Rendering_VirtualTexturing.FilterMode;
        
                    
    }
    /**
     * Per-layer properties of a request.
     */
    class GPUTextureStackRequestLayerParameters extends System.ValueType {
        
        public destX: number;
        
        public destY: number;
        
        public dest: UnityEngine_Rendering.RenderTargetIdentifier;
        
        public GetWidth():number;
        
        public GetHeight():number;
        
        public get_Clone(): GPUTextureStackRequestLayerParameters;            
    }
    /**
     * Per-layer properties of a ProceduralTextureRequest.
     */
    class CPUTextureStackRequestLayerParameters extends System.ValueType {
        
        public get scanlineSize(): number;
        
        public get mipScanlineSize(): number;
        
        public get requiresCachedMip(): boolean;
        
        public GetData<T>():Unity_Collections.NativeArray$1<T>;
        
        public GetMipData<T>():Unity_Collections.NativeArray$1<T>;
        
                    
    }
    /**
     * A single procedural virtual texture tile generation request, to be filled in GPU memory.
     */
    class GPUTextureStackRequestParameters extends System.ValueType {
        
        public level: number;
        
        public x: number;
        
        public y: number;
        
        public width: number;
        
        public height: number;
        
        public numLayers: number;
        
        public GetLayer($index: number):GPUTextureStackRequestLayerParameters;
        
        public get_Clone(): GPUTextureStackRequestParameters;            
    }
    /**
     * A single procedural virtual texture tile generation request, to be filled in CPU memory.
     */
    class CPUTextureStackRequestParameters extends System.ValueType {
        
        public level: number;
        
        public x: number;
        
        public y: number;
        
        public width: number;
        
        public height: number;
        
        public numLayers: number;
        
        public GetLayer($index: number):CPUTextureStackRequestLayerParameters;
        
                    
    }
    /**
     * The status that can be given to a request.
     */
    enum RequestStatus { Dropped = 65539, Generated = 65538 }
    /**
     * Procedural virtual texturing stack where request data resides in GPU memory.
     */
    class GPUTextureStack extends UnityEngine_Rendering_VirtualTexturing.TextureStackBase$1<GPUTextureStackRequestParameters> {
        
        public constructor($_name: string, $creationParams: CreationParameters);
        
                    
    }
    /**
     * Procedural virtual texturing stack.
     */
    interface TextureStackBase$1<T> extends System.Object {
        
                    
    }
    /**
     * Procedural virtual texturing stack where request data resides in CPU memory.
     */
    class CPUTextureStack extends UnityEngine_Rendering_VirtualTexturing.TextureStackBase$1<CPUTextureStackRequestParameters> {
        
        public constructor($_name: string, $creationParams: CreationParameters);
        
                    
    }
    
}
declare module 'Unity.Collections' {

    import * as System from 'System';
        
    /**
     * A NativeArray exposes a buffer of native memory to managed code, making it possible to share data between managed and native without marshalling costs.
     */
    interface NativeArray$1<T> extends System.ValueType {
        
                    
    }
    
}

