//# signature=UnityEngine.AssetBundleModule#7c6485ec10284bf901be621cbb7c0c4a#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System_IO from 'System.IO';
    import * as RootNamespace from 'RootNamespace';
        
    /**
     * AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle.
     */
    class AssetBundle extends Object {
        /**
         * Return true if the AssetBundle is a streamed Scene AssetBundle.
         */
        public get isStreamedSceneAssetBundle(): boolean;
        /**
         * Unloads all currently loaded AssetBundles.
         * @param unloadAllObjects Determines whether the current instances of objects loaded from AssetBundles will also be unloaded.
         */
        public static UnloadAllAssetBundles($unloadAllObjects: boolean):void;
        /**
         * To use when you need to get a list of all the currently loaded Asset Bundles.
         * @returns Returns IEnumerable<AssetBundle> of all currently loaded Asset Bundles.
         */
        public static GetAllLoadedAssetBundles():System_Collections_Generic.IEnumerable$1<AssetBundle>;
        
        public static LoadFromFileAsync($path: string):AssetBundleCreateRequest;
        
        public static LoadFromFileAsync($path: string, $crc: number):AssetBundleCreateRequest;
        /**
         * Asynchronously loads an AssetBundle from a file on disk.
         * @param path Path of the file on disk.
         * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
         * @param offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
         * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded.
         */
        public static LoadFromFileAsync($path: string, $crc: number, $offset: bigint):AssetBundleCreateRequest;
        
        public static LoadFromFile($path: string):AssetBundle;
        
        public static LoadFromFile($path: string, $crc: number):AssetBundle;
        /**
         * Synchronously loads an AssetBundle from a file on disk.
         * @param path Path of the file on disk.
         * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
         * @param offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
         * @returns Loaded AssetBundle object or null if failed.
         */
        public static LoadFromFile($path: string, $crc: number, $offset: bigint):AssetBundle;
        
        public static LoadFromMemoryAsync($binary: number[]):AssetBundleCreateRequest;
        /**
         * Asynchronously create an AssetBundle from a memory region.
         * @param binary Array of bytes with the AssetBundle data.
         * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
         * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded.
         */
        public static LoadFromMemoryAsync($binary: number[], $crc: number):AssetBundleCreateRequest;
        
        public static LoadFromMemory($binary: number[]):AssetBundle;
        /**
         * Synchronously create an AssetBundle from a memory region.
         * @param binary Array of bytes with the AssetBundle data.
         * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
         * @returns Loaded AssetBundle object or null if failed.
         */
        public static LoadFromMemory($binary: number[], $crc: number):AssetBundle;
        /**
         * Asynchronously loads an AssetBundle from a managed Stream.
         * @param stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
         * @param crc An optional CRC-32 checksum of the uncompressed content.
         * @param managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
         * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded.
         */
        public static LoadFromStreamAsync($stream: System_IO.Stream, $crc: number, $managedReadBufferSize: number):AssetBundleCreateRequest;
        
        public static LoadFromStreamAsync($stream: System_IO.Stream, $crc: number):AssetBundleCreateRequest;
        
        public static LoadFromStreamAsync($stream: System_IO.Stream):AssetBundleCreateRequest;
        /**
         * Synchronously loads an AssetBundle from a managed Stream.
         * @param stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
         * @param crc An optional CRC-32 checksum of the uncompressed content.
         * @param managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
         * @returns The loaded AssetBundle object or null when the object fails to load.
         */
        public static LoadFromStream($stream: System_IO.Stream, $crc: number, $managedReadBufferSize: number):AssetBundle;
        
        public static LoadFromStream($stream: System_IO.Stream, $crc: number):AssetBundle;
        
        public static LoadFromStream($stream: System_IO.Stream):AssetBundle;
        /**
         * Check if an AssetBundle contains a specific object.
         */
        public Contains($name: string):boolean;
        /**
         * Loads asset with name of type T from the bundle.
         */
        public LoadAsset($name: string):Object;
        /**
         * Loads asset with name of type T from the bundle.
         */
        public LoadAsset<T extends Object>($name: string):T;
        /**
         * Loads asset with name of a given type from the bundle.
         */
        public LoadAsset($name: string, $type: System.Type):Object;
        /**
         * Asynchronously loads asset with name of a given T from the bundle.
         */
        public LoadAssetAsync($name: string):AssetBundleRequest;
        /**
         * Asynchronously loads asset with name of a given T from the bundle.
         */
        public LoadAssetAsync<T>($name: string):AssetBundleRequest;
        /**
         * Asynchronously loads asset with name of a given type from the bundle.
         */
        public LoadAssetAsync($name: string, $type: System.Type):AssetBundleRequest;
        /**
         * Loads asset and sub assets with name of type T from the bundle.
         */
        public LoadAssetWithSubAssets($name: string):Object[];
        /**
         * Loads asset and sub assets with name of type T from the bundle.
         */
        public LoadAssetWithSubAssets<T extends Object>($name: string):T[];
        /**
         * Loads asset and sub assets with name of a given type from the bundle.
         */
        public LoadAssetWithSubAssets($name: string, $type: System.Type):Object[];
        /**
         * Loads asset with sub assets with name of type T from the bundle asynchronously.
         */
        public LoadAssetWithSubAssetsAsync($name: string):AssetBundleRequest;
        /**
         * Loads asset with sub assets with name of type T from the bundle asynchronously.
         */
        public LoadAssetWithSubAssetsAsync<T>($name: string):AssetBundleRequest;
        /**
         * Loads asset with sub assets with name of a given type from the bundle asynchronously.
         */
        public LoadAssetWithSubAssetsAsync($name: string, $type: System.Type):AssetBundleRequest;
        /**
         * Loads all assets contained in the asset bundle that inherit from type T.
         */
        public LoadAllAssets():Object[];
        /**
         * Loads all assets contained in the asset bundle that inherit from type T.
         */
        public LoadAllAssets<T extends Object>():T[];
        /**
         * Loads all assets contained in the asset bundle that inherit from type.
         */
        public LoadAllAssets($type: System.Type):Object[];
        /**
         * Loads all assets contained in the asset bundle that inherit from T asynchronously.
         */
        public LoadAllAssetsAsync():AssetBundleRequest;
        /**
         * Loads all assets contained in the asset bundle that inherit from T asynchronously.
         */
        public LoadAllAssetsAsync<T>():AssetBundleRequest;
        /**
         * Loads all assets contained in the asset bundle that inherit from type asynchronously.
         */
        public LoadAllAssetsAsync($type: System.Type):AssetBundleRequest;
        /**
         * Unloads an AssetBundle freeing its data.
         * @param unloadAllLoadedObjects Determines whether the current instances of objects loaded from the AssetBundle will also be unloaded.
         */
        public Unload($unloadAllLoadedObjects: boolean):void;
        /**
         * Return all asset names in the AssetBundle.
         */
        public GetAllAssetNames():string[];
        /**
         * Return all the Scene asset paths (paths to *.unity assets) in the AssetBundle.
         */
        public GetAllScenePaths():string[];
        /**
         * Asynchronously recompress a downloaded/stored AssetBundle from one BuildCompression to another.
         * @param inputPath Path to the AssetBundle to recompress.
         * @param outputPath Path to the recompressed AssetBundle to be generated. Can be the same as inputPath.
         * @param method The compression method, level and blocksize to use during recompression. Only some BuildCompression types are supported (see note).
         * @param expectedCRC CRC of the AssetBundle to test against. Testing this requires additional file reading and computation. Pass in 0 to skip this check. Unity does not compute a CRC when the source and destination BuildCompression are the same, so no CRC verification takes place (see note).
         * @param priority The priority at which the recompression operation should run. This sets thread priority during the operation and does not effect the order in which operations are performed. Recompression operations run on a background worker thread.
         */
        public static RecompressAssetBundleAsync($inputPath: string, $outputPath: string, $method: BuildCompression, $expectedCRC?: number, $priority?: ThreadPriority):AssetBundleRecompressOperation;
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * Asynchronous create request for an AssetBundle.
     */
    class AssetBundleCreateRequest extends AsyncOperation {
        /**
         * Asset object being loaded (Read Only).
         */
        public get assetBundle(): AssetBundle;
        
        public constructor();
        
                    
    }
    /**
     * Asynchronous operation coroutine.
     */
    interface AsyncOperation extends YieldInstruction {
        
                    
    }
    /**
     * Base class for all yield instructions.
     */
    interface YieldInstruction extends System.Object {
        
                    
    }
    /**
     * Asynchronous load request from an AssetBundle.
     */
    class AssetBundleRequest extends ResourceRequest {
        /**
         * Asset object being loaded (Read Only).
         */
        public get asset(): Object;
        /**
         * Asset objects with sub assets being loaded. (Read Only)
         */
        public get allAssets(): Object[];
        
        public constructor();
        
                    
    }
    /**
     * Asynchronous load request from the Resources bundle.
     */
    interface ResourceRequest extends AsyncOperation {
        
                    
    }
    /**
     * Asynchronous AssetBundle recompression from one compression method and level to another.
     */
    class AssetBundleRecompressOperation extends AsyncOperation {
        /**
         * A string describing the recompression operation result (Read Only).
         */
        public get humanReadableResult(): string;
        /**
         * Path of the AssetBundle being recompressed (Read Only).
         */
        public get inputPath(): string;
        /**
         * Path of the resulting recompressed AssetBundle (Read Only).
         */
        public get outputPath(): string;
        /**
         * Result of the recompression operation.
         */
        public get result(): AssetBundleLoadResult;
        /**
         * True if the recompress operation is complete and was successful, otherwise false (Read Only).
         */
        public get success(): boolean;
        
        public constructor();
        
                    
    }
    /**
     * Contains information about compression methods, compression levels and block sizes that are supported by Asset Bundle compression at build time and recompression at runtime.
     */
    class BuildCompression extends System.ValueType {
        /**
         * Uncompressed Asset Bundle.
         */
        public static Uncompressed: BuildCompression;
        /**
         * LZ4HC "Chunk Based" Compression.
         */
        public static LZ4: BuildCompression;
        /**
         * LZMA Compression.
         */
        public static LZMA: BuildCompression;
        /**
         * Uncompressed Asset Bundle.
         */
        public static UncompressedRuntime: BuildCompression;
        /**
         * LZ4 Compression for runtime recompression.
         */
        public static LZ4Runtime: BuildCompression;
        
        public get compression(): CompressionType;
        
        public get level(): CompressionLevel;
        
        public get blockSize(): number;
        
        public get_Clone(): BuildCompression;            
    }
    /**
     * Priority of a thread.
     */
    enum ThreadPriority { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
    /**
     * The result of an Asset Bundle Load or Recompress Operation.
     */
    enum AssetBundleLoadResult { Success = 0, Cancelled = 1, NotMatchingCrc = 2, FailedCache = 3, NotValidAssetBundle = 4, NoSerializedData = 5, NotCompatible = 6, AlreadyLoaded = 7, FailedRead = 8, FailedDecompression = 9, FailedWrite = 10, FailedDeleteRecompressionTarget = 11, RecompressionTargetIsLoaded = 12, RecompressionTargetExistsButNotArchive = 13 }
    /**
     * Manifest for all the AssetBundles in the build.
     */
    class AssetBundleManifest extends Object {
        /**
         * Get all the AssetBundles in the manifest.
         * @returns An array of asset bundle names.
         */
        public GetAllAssetBundles():string[];
        /**
         * Get all the AssetBundles with variant in the manifest.
         * @returns An array of asset bundle names.
         */
        public GetAllAssetBundlesWithVariant():string[];
        /**
         * Get the hash for the given AssetBundle.
         * @param assetBundleName Name of the asset bundle.
         * @returns The 128-bit hash for the asset bundle.
         */
        public GetAssetBundleHash($assetBundleName: string):Hash128;
        /**
         * Get the direct dependent AssetBundles for the given AssetBundle.
         * @param assetBundleName Name of the asset bundle.
         * @returns Array of asset bundle names this asset bundle depends on.
         */
        public GetDirectDependencies($assetBundleName: string):string[];
        /**
         * Get all the dependent AssetBundles for the given AssetBundle.
         * @param assetBundleName Name of the asset bundle.
         */
        public GetAllDependencies($assetBundleName: string):string[];
        
                    
    }
    /**
     * Represents  a 128-bit hash value.
     */
    interface Hash128 extends System.ValueType {
        
                    
    }
    /**
     * Compression Method for Asset Bundles.
     */
    enum CompressionType { None = 0, Lzma = 1, Lz4 = 2, Lz4HC = 3 }
    /**
     * Compression Levels relate to how much time should be spent compressing Assets into an Asset Bundle.
     */
    enum CompressionLevel { None = 0, Fastest = 1, Fast = 2, Normal = 3, High = 4, Maximum = 5 }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface UInt64 extends ValueType {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface MarshalByRefObject extends Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

        
    
    interface IEnumerable$1<T> {
        
                    
    }
    
}
declare module 'System.IO' {

    import * as System from 'System';
        
    
    interface Stream extends System.MarshalByRefObject {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Experimental.AssetBundlePatching' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    
    class AssetBundleUtility extends System.Object {
        
        public static PatchAssetBundles($bundles: UnityEngine.AssetBundle[], $filenames: string[]):void;
        
                    
    }
    
}

