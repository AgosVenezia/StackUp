//# signature=UnityEngine.UnityWebRequestAssetBundleModule#ff5547802eb5388a999059a84362fbe9#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Networking' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Helpers for downloading asset bundles using UnityWebRequest.
     */
    class UnityWebRequestAssetBundle extends System.Object {
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: string):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: System.Uri):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: string, $crc: number):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: System.Uri, $crc: number):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: string, $version: number, $crc: number):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: System.Uri, $version: number, $crc: number):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: string, $hash: UnityEngine.Hash128, $crc?: number):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: System.Uri, $hash: UnityEngine.Hash128, $crc?: number):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: string, $cachedAssetBundle: UnityEngine.CachedAssetBundle, $crc?: number):UnityWebRequest;
        /**
         * Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET.
         * @param uri The URI of the asset bundle to download.
         * @param crc If nonzero, this number will be compared to the checksum of the downloaded asset bundle data. If the CRCs do not match, an error will be logged and the asset bundle will not be loaded. If set to zero, CRC checking will be skipped.
         * @param version An integer version number, which will be compared to the cached version of the asset bundle to download. Increment this number to force Unity to redownload a cached asset bundle.
        Analogous to the version parameter for WWW.LoadFromCacheOrDownload.
         * @param hash A version hash. If this hash does not match the hash for the cached version of this asset bundle, the asset bundle will be redownloaded.
         * @param cachedAssetBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @returns A UnityWebRequest configured to downloading a Unity Asset Bundle.
         */
        public static GetAssetBundle($uri: System.Uri, $cachedAssetBundle: UnityEngine.CachedAssetBundle, $crc?: number):UnityWebRequest;
        
                    
    }
    /**
     * The UnityWebRequest object is used to communicate with web servers.
     */
    interface UnityWebRequest extends System.Object {
        
                    
    }
    /**
     * A DownloadHandler subclass specialized for downloading AssetBundles.
     */
    class DownloadHandlerAssetBundle extends DownloadHandler {
        /**
         * Returns the downloaded AssetBundle, or null. (Read Only)
         */
        public get assetBundle(): UnityEngine.AssetBundle;
        /**
         * Standard constructor for non-cached asset bundles.
         * @param url The nominal (pre-redirect) URL at which the asset bundle is located.
         * @param crc A checksum to compare to the downloaded data for integrity checking, or zero to skip integrity checking.
         */
        public constructor($url: string, $crc: number);
        /**
         * Simple versioned constructor. Caches downloaded asset bundles.
         * @param url The nominal (pre-redirect) URL at which the asset bundle is located.
         * @param crc A checksum to compare to the downloaded data for integrity checking, or zero to skip integrity checking.
         * @param version Current version number of the asset bundle at url. Increment to redownload.
         */
        public constructor($url: string, $version: number, $crc: number);
        /**
         * Versioned constructor. Caches downloaded asset bundles.
         * @param url The nominal (pre-redirect) URL at which the asset bundle is located.
         * @param crc A checksum to compare to the downloaded data for integrity checking, or zero to skip integrity checking.
         * @param hash A hash object defining the version of the asset bundle.
         */
        public constructor($url: string, $hash: UnityEngine.Hash128, $crc: number);
        /**
         * Versioned constructor. Caches downloaded asset bundles to a customized cache path.
         * @param url The nominal (pre-redirect) URL at which the asset bundle is located.
         * @param hash A hash object defining the version of the asset bundle.
         * @param crc A checksum to compare to the downloaded data for integrity checking, or zero to skip integrity checking.
         * @param cachedBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @param name AssetBundle name which is used as the customized cache path.
         */
        public constructor($url: string, $name: string, $hash: UnityEngine.Hash128, $crc: number);
        /**
         * Versioned constructor. Caches downloaded asset bundles to a customized cache path.
         * @param url The nominal (pre-redirect) URL at which the asset bundle is located.
         * @param hash A hash object defining the version of the asset bundle.
         * @param crc A checksum to compare to the downloaded data for integrity checking, or zero to skip integrity checking.
         * @param cachedBundle A structure used to download a given version of AssetBundle to a customized cache path.
         * @param name AssetBundle name which is used as the customized cache path.
         */
        public constructor($url: string, $cachedBundle: UnityEngine.CachedAssetBundle, $crc: number);
        /**
         * Returns the downloaded AssetBundle, or null.
         * @param www A finished UnityWebRequest object with DownloadHandlerAssetBundle attached.
         * @returns The same as DownloadHandlerAssetBundle.assetBundle
         */
        public static GetContent($www: UnityWebRequest):UnityEngine.AssetBundle;
        
                    
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
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Represents  a 128-bit hash value.
     */
    interface Hash128 extends System.ValueType {
        
                    
    }
    /**
     * Data structure for downloading AssetBundles to a customized cache path. See Also:UnityWebRequestAssetBundle.GetAssetBundle for more information.
     */
    interface CachedAssetBundle extends System.ValueType {
        
                    
    }
    /**
     * AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle.
     */
    interface AssetBundle extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    
}

