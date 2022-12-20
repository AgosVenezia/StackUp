//# signature=UnityEngine.UnityWebRequestModule#28cfff8df428f1f91acf538498b2328f#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Text from 'System.Text';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Helper class to generate form data to post to web servers using the UnityWebRequest or WWW classes.
     */
    class WWWForm extends System.Object {
        /**
         * (Read Only) Returns the correct request headers for posting the form using the WWW class.
         */
        public get headers(): System_Collections_Generic.Dictionary$2<string, string>;
        /**
         * (Read Only) The raw data to pass as the POST request body when sending the form.
         */
        public get data(): number[];
        /**
         * Creates an empty WWWForm object.
         */
        public constructor();
        /**
         * Add a simple field to the form.
         */
        public AddField($fieldName: string, $value: string):void;
        /**
         * Add a simple field to the form.
         */
        public AddField($fieldName: string, $value: string, $e: System_Text.Encoding):void;
        /**
         * Adds a simple field to the form.
         */
        public AddField($fieldName: string, $i: number):void;
        /**
         * Add binary data to the form.
         */
        public AddBinaryData($fieldName: string, $contents: number[]):void;
        /**
         * Add binary data to the form.
         */
        public AddBinaryData($fieldName: string, $contents: number[], $fileName: string):void;
        /**
         * Add binary data to the form.
         */
        public AddBinaryData($fieldName: string, $contents: number[], $fileName: string, $mimeType: string):void;
        
                    
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
     * Type of the imported(native) data.
     */
    enum AudioType { UNKNOWN = 0, ACC = 1, AIFF = 2, IT = 10, MOD = 12, MPEG = 13, OGGVORBIS = 14, S3M = 17, WAV = 20, XM = 21, XMA = 22, VAG = 23, AUDIOQUEUE = 24 }
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
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Uri extends Object {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface UInt64 extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
}
declare module 'System.Text' {

    import * as System from 'System';
        
    
    interface Encoding extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Networking' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System_Text from 'System.Text';
    import * as UnityEngine_Networking_UnityWebRequest from 'UnityEngine.Networking.UnityWebRequest';
        
    /**
     * An interface for composition of data into multipart forms.
     */
    interface IMultipartFormSection {
        /**
         * Returns the name of this section, if any.
         * @returns The section's name, or null.
         */
        sectionName: string;
        /**
         * Returns the raw binary data contained in this section. Must not return null or a zero-length array.
         * @returns The raw binary data contained in this section. Must not be null or empty.
         */
        sectionData: number[];
        /**
         * Returns a string denoting the desired filename of this section on the destination server.
         * @returns The desired file name of this section, or null if this is not a file section.
         */
        fileName: string;
        /**
         * Returns the value to use in the Content-Type header for this form section.
         * @returns The value to use in the Content-Type header, or null.
         */
        contentType: string;
        
                    
    }
    /**
     * A helper object for form sections containing generic, non-file data.
     */
    class MultipartFormDataSection extends System.Object {
        /**
         * Returns the name of this section, if any.
         * @returns The section's name, or null.
         */
        public get sectionName(): string;
        /**
         * Returns the raw binary data contained in this section. Will not return null or a zero-length array.
         * @returns The raw binary data contained in this section. Will not be null or empty.
         */
        public get sectionData(): number[];
        /**
         * Returns a string denoting the desired filename of this section on the destination server.
         * @returns The desired file name of this section, or null if this is not a file section.
         */
        public get fileName(): string;
        /**
         * Returns the value to use in this section's Content-Type header.
         * @returns The Content-Type header for this section, or null.
         */
        public get contentType(): string;
        /**
         * A raw data section with a section name and a Content-Type header.
         * @param name Section name.
         * @param data Data payload of this section.
         * @param contentType The value for this section's Content-Type header.
         */
        public constructor($name: string, $data: number[], $contentType: string);
        /**
         * Raw data section with a section name, no Content-Type header.
         * @param name Section name.
         * @param data Data payload of this section.
         */
        public constructor($name: string, $data: number[]);
        /**
         * Raw data section, unnamed and no Content-Type header.
         * @param data Data payload of this section.
         */
        public constructor($data: number[]);
        /**
         * A named raw data section whose payload is derived from a string, with a Content-Type header.
         * @param name Section name.
         * @param data String data payload for this section.
         * @param contentType The value for this section's Content-Type header.
         * @param encoding An encoding to marshal data to or from raw bytes.
         */
        public constructor($name: string, $data: string, $encoding: System_Text.Encoding, $contentType: string);
        /**
         * A named raw data section whose payload is derived from a UTF8 string, with a Content-Type header.
         * @param name Section name.
         * @param data String data payload for this section.
         * @param contentType C.
         */
        public constructor($name: string, $data: string, $contentType: string);
        /**
         * A names raw data section whose payload is derived from a UTF8 string, with a default Content-Type.
         * @param name Section name.
         * @param data String data payload for this section.
         */
        public constructor($name: string, $data: string);
        /**
         * An anonymous raw data section whose payload is derived from a UTF8 string, with a default Content-Type.
         * @param data String data payload for this section.
         */
        public constructor($data: string);
        
                    
    }
    /**
     * A helper object for adding file uploads to multipart forms via the [IMultipartFormSection] API.
     */
    class MultipartFormFileSection extends System.Object {
        /**
         * Returns the name of this section, if any.
         * @returns The section's name, or null.
         */
        public get sectionName(): string;
        /**
         * Returns the raw binary data contained in this section. Will not return null or a zero-length array.
         * @returns The raw binary data contained in this section. Will not be null or empty.
         */
        public get sectionData(): number[];
        /**
         * Returns a string denoting the desired filename of this section on the destination server.
         * @returns The desired file name of this section, or null if this is not a file section.
         */
        public get fileName(): string;
        /**
         * Returns the value of the section's Content-Type header.
         * @returns The Content-Type header for this section, or null.
         */
        public get contentType(): string;
        /**
         * Contains a named file section based on the raw bytes from data, with a custom Content-Type and file name.
         * @param name Name of this form section.
         * @param data Raw contents of the file to upload.
         * @param fileName Name of the file uploaded by this form section.
         * @param contentType The value for this section's Content-Type header.
         */
        public constructor($name: string, $data: number[], $fileName: string, $contentType: string);
        /**
         * Contains an anonymous file section based on the raw bytes from data, assigns a default Content-Type and file name.
         * @param data Raw contents of the file to upload.
         */
        public constructor($data: number[]);
        /**
         * Contains an anonymous file section based on the raw bytes from data with a specific file name. Assigns a default Content-Type.
         * @param data Raw contents of the file to upload.
         * @param fileName Name of the file uploaded by this form section.
         */
        public constructor($fileName: string, $data: number[]);
        /**
         * Contains a named file section with data drawn from data, as marshaled by dataEncoding. Assigns a specific file name from fileName and a default Content-Type.
         * @param name Name of this form section.
         * @param data Contents of the file to upload.
         * @param dataEncoding A string encoding.
         * @param fileName Name of the file uploaded by this form section.
         */
        public constructor($name: string, $data: string, $dataEncoding: System_Text.Encoding, $fileName: string);
        /**
         * An anonymous file section with data drawn from data, as marshaled by dataEncoding. Assigns a specific file name from fileName and a default Content-Type.
         * @param data Contents of the file to upload.
         * @param dataEncoding A string encoding.
         * @param fileName Name of the file uploaded by this form section.
         */
        public constructor($data: string, $dataEncoding: System_Text.Encoding, $fileName: string);
        /**
         * An anonymous file section with data drawn from the UTF8 string data. Assigns a specific file name from fileName and a default Content-Type.
         * @param data Contents of the file to upload.
         * @param fileName Name of the file uploaded by this form section.
         */
        public constructor($data: string, $fileName: string);
        
                    
    }
    /**
     * Asynchronous operation object returned from UnityWebRequest.SendWebRequest().
     * You can yield until it continues, register an event handler with AsyncOperation.completed, or manually check whether it's done (AsyncOperation.isDone) or progress (AsyncOperation.progress).
     */
    class UnityWebRequestAsyncOperation extends UnityEngine.AsyncOperation {
        /**
         * Returns the associated UnityWebRequest that created the operation.
         */
        public get webRequest(): UnityWebRequest;
        
        public constructor();
        
                    
    }
    /**
     * The UnityWebRequest object is used to communicate with web servers.
     */
    class UnityWebRequest extends System.Object {
        /**
         * The string "GET", commonly used as the verb for an HTTP GET request.
         */
        public static kHttpVerbGET: string;
        /**
         * The string "HEAD", commonly used as the verb for an HTTP HEAD request.
         */
        public static kHttpVerbHEAD: string;
        /**
         * The string "POST", commonly used as the verb for an HTTP POST request.
         */
        public static kHttpVerbPOST: string;
        /**
         * The string "PUT", commonly used as the verb for an HTTP PUT request.
         */
        public static kHttpVerbPUT: string;
        /**
         * The string "CREATE", commonly used as the verb for an HTTP CREATE request.
         */
        public static kHttpVerbCREATE: string;
        /**
         * The string "DELETE", commonly used as the verb for an HTTP DELETE request.
         */
        public static kHttpVerbDELETE: string;
        /**
         * If true, any CertificateHandler attached to this UnityWebRequest will have CertificateHandler.Dispose called automatically when UnityWebRequest.Dispose is called.
         */
        public get disposeCertificateHandlerOnDispose(): boolean;
        public set disposeCertificateHandlerOnDispose(value: boolean);
        /**
         * If true, any DownloadHandler attached to this UnityWebRequest will have DownloadHandler.Dispose called automatically when UnityWebRequest.Dispose is called.
         */
        public get disposeDownloadHandlerOnDispose(): boolean;
        public set disposeDownloadHandlerOnDispose(value: boolean);
        /**
         * If true, any UploadHandler attached to this UnityWebRequest will have UploadHandler.Dispose called automatically when UnityWebRequest.Dispose is called.
         */
        public get disposeUploadHandlerOnDispose(): boolean;
        public set disposeUploadHandlerOnDispose(value: boolean);
        /**
         * Defines the HTTP verb used by this UnityWebRequest, such as GET or POST.
         */
        public get method(): string;
        public set method(value: string);
        /**
         * A human-readable string describing any system errors encountered by this UnityWebRequest object while handling HTTP requests or responses. (Read Only)
         */
        public get error(): string;
        /**
         * Determines whether this UnityWebRequest will include Expect: 100-Continue in its outgoing request headers. (Default: true).
         */
        public get useHttpContinue(): boolean;
        public set useHttpContinue(value: boolean);
        /**
         * Defines the target URL for the UnityWebRequest to communicate with.
         */
        public get url(): string;
        public set url(value: string);
        /**
         * Defines the target URI for the UnityWebRequest to communicate with.
         */
        public get uri(): System.Uri;
        public set uri(value: System.Uri);
        /**
         * The numeric HTTP response code returned by the server, such as 200, 404 or 500. (Read Only)
         */
        public get responseCode(): bigint;
        /**
         * Returns a floating-point value between 0.0 and 1.0, indicating the progress of uploading body data to the server.
         */
        public get uploadProgress(): number;
        /**
         * Returns true while a UnityWebRequest’s configuration properties can be altered. (Read Only)
         */
        public get isModifiable(): boolean;
        /**
         * Returns true after the UnityWebRequest has finished communicating with the remote server. (Read Only)
         */
        public get isDone(): boolean;
        /**
         * The result of this UnityWebRequest.
         */
        public get result(): UnityEngine_Networking_UnityWebRequest.Result;
        /**
         * Returns a floating-point value between 0.0 and 1.0, indicating the progress of downloading body data from the server. (Read Only)
         */
        public get downloadProgress(): number;
        /**
         * Returns the number of bytes of body data the system has uploaded to the remote server. (Read Only)
         */
        public get uploadedBytes(): bigint;
        /**
         * Returns the number of bytes of body data the system has downloaded from the remote server. (Read Only)
         */
        public get downloadedBytes(): bigint;
        /**
         * Indicates the number of redirects which this UnityWebRequest will follow before halting with a “Redirect Limit Exceeded” system error.
         */
        public get redirectLimit(): number;
        public set redirectLimit(value: number);
        /**
         * Holds a reference to the UploadHandler object which manages body data to be uploaded to the remote server.
         */
        public get uploadHandler(): UploadHandler;
        public set uploadHandler(value: UploadHandler);
        /**
         * Holds a reference to a DownloadHandler object, which manages body data received from the remote server by this UnityWebRequest.
         */
        public get downloadHandler(): DownloadHandler;
        public set downloadHandler(value: DownloadHandler);
        /**
         * Holds a reference to a CertificateHandler object, which manages certificate validation for this UnityWebRequest.
         */
        public get certificateHandler(): CertificateHandler;
        public set certificateHandler(value: CertificateHandler);
        /**
         * Sets UnityWebRequest to attempt to abort after the number of seconds in timeout have passed.
         */
        public get timeout(): number;
        public set timeout(value: number);
        /**
         * Creates a UnityWebRequest with the default options and no attached DownloadHandler or UploadHandler. Default method is GET.
         * @param url The target URL with which this UnityWebRequest will communicate. Also accessible via the url property.
         * @param uri The target URI to which form data will be transmitted.
         * @param method HTTP GET, POST, etc. methods.
         * @param downloadHandler Replies from the server.
         * @param uploadHandler Upload data to the server.
         */
        public constructor();
        /**
         * Creates a UnityWebRequest with the default options and no attached DownloadHandler or UploadHandler. Default method is GET.
         * @param url The target URL with which this UnityWebRequest will communicate. Also accessible via the url property.
         * @param uri The target URI to which form data will be transmitted.
         * @param method HTTP GET, POST, etc. methods.
         * @param downloadHandler Replies from the server.
         * @param uploadHandler Upload data to the server.
         */
        public constructor($url: string);
        /**
         * Creates a UnityWebRequest with the default options and no attached DownloadHandler or UploadHandler. Default method is GET.
         * @param url The target URL with which this UnityWebRequest will communicate. Also accessible via the url property.
         * @param uri The target URI to which form data will be transmitted.
         * @param method HTTP GET, POST, etc. methods.
         * @param downloadHandler Replies from the server.
         * @param uploadHandler Upload data to the server.
         */
        public constructor($uri: System.Uri);
        /**
         * Creates a UnityWebRequest with the default options and no attached DownloadHandler or UploadHandler. Default method is GET.
         * @param url The target URL with which this UnityWebRequest will communicate. Also accessible via the url property.
         * @param uri The target URI to which form data will be transmitted.
         * @param method HTTP GET, POST, etc. methods.
         * @param downloadHandler Replies from the server.
         * @param uploadHandler Upload data to the server.
         */
        public constructor($url: string, $method: string);
        /**
         * Creates a UnityWebRequest with the default options and no attached DownloadHandler or UploadHandler. Default method is GET.
         * @param url The target URL with which this UnityWebRequest will communicate. Also accessible via the url property.
         * @param uri The target URI to which form data will be transmitted.
         * @param method HTTP GET, POST, etc. methods.
         * @param downloadHandler Replies from the server.
         * @param uploadHandler Upload data to the server.
         */
        public constructor($uri: System.Uri, $method: string);
        /**
         * Creates a UnityWebRequest with the default options and no attached DownloadHandler or UploadHandler. Default method is GET.
         * @param url The target URL with which this UnityWebRequest will communicate. Also accessible via the url property.
         * @param uri The target URI to which form data will be transmitted.
         * @param method HTTP GET, POST, etc. methods.
         * @param downloadHandler Replies from the server.
         * @param uploadHandler Upload data to the server.
         */
        public constructor($url: string, $method: string, $downloadHandler: DownloadHandler, $uploadHandler: UploadHandler);
        /**
         * Creates a UnityWebRequest with the default options and no attached DownloadHandler or UploadHandler. Default method is GET.
         * @param url The target URL with which this UnityWebRequest will communicate. Also accessible via the url property.
         * @param uri The target URI to which form data will be transmitted.
         * @param method HTTP GET, POST, etc. methods.
         * @param downloadHandler Replies from the server.
         * @param uploadHandler Upload data to the server.
         */
        public constructor($uri: System.Uri, $method: string, $downloadHandler: DownloadHandler, $uploadHandler: UploadHandler);
        /**
         * Clears stored cookies from the cache.
         * @param domain An optional URL to define which cookies are removed. Only cookies that apply to this URL will be removed from the cache.
         */
        public static ClearCookieCache():void;
        
        public static ClearCookieCache($uri: System.Uri):void;
        /**
         * Signals that this UnityWebRequest is no longer being used, and should clean up any resources it is using.
         */
        public Dispose():void;
        /**
         * Begin communicating with the remote server.
         */
        public SendWebRequest():UnityWebRequestAsyncOperation;
        /**
         * If in progress, halts the UnityWebRequest as soon as possible.
         */
        public Abort():void;
        /**
         * Retrieves the value of a custom request header.
         * @param name Name of the custom request header. Case-insensitive.
         * @returns The value of the custom request header. If no custom header with a matching name has been set, returns an empty string.
         */
        public GetRequestHeader($name: string):string;
        /**
         * Set a HTTP request header to a custom value.
         * @param name The key of the header to be set. Case-sensitive.
         * @param value The header's intended value.
         */
        public SetRequestHeader($name: string, $value: string):void;
        /**
         * Retrieves the value of a response header from the latest HTTP response received.
         * @param name The name of the HTTP header to retrieve. Case-insensitive.
         * @returns The value of the HTTP header from the latest HTTP response. If no header with a matching name has been received, or no responses have been received, returns null.
         */
        public GetResponseHeader($name: string):string;
        /**
         * Retrieves a dictionary containing all the response headers received by this UnityWebRequest in the latest HTTP response.
         * @returns A dictionary containing all the response headers received in the latest HTTP response. If no responses have been received, returns null.
         */
        public GetResponseHeaders():System_Collections_Generic.Dictionary$2<string, string>;
        /**
         * Create a UnityWebRequest for HTTP GET.
         * @param uri The URI of the resource to retrieve via HTTP GET.
         * @returns An object that retrieves data from the uri.
         */
        public static Get($uri: string):UnityWebRequest;
        /**
         * Create a UnityWebRequest for HTTP GET.
         * @param uri The URI of the resource to retrieve via HTTP GET.
         * @returns An object that retrieves data from the uri.
         */
        public static Get($uri: System.Uri):UnityWebRequest;
        /**
         * Creates a UnityWebRequest configured for HTTP DELETE.
         * @param uri The URI to which a DELETE request should be sent.
         * @returns A UnityWebRequest configured to send an HTTP DELETE request.
         */
        public static Delete($uri: string):UnityWebRequest;
        
        public static Delete($uri: System.Uri):UnityWebRequest;
        /**
         * Creates a UnityWebRequest configured to send a HTTP HEAD request.
         * @param uri The URI to which to send a HTTP HEAD request.
         * @returns A UnityWebRequest configured to transmit a HTTP HEAD request.
         */
        public static Head($uri: string):UnityWebRequest;
        
        public static Head($uri: System.Uri):UnityWebRequest;
        /**
         * Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
         * @param uri The URI to which the data will be sent.
         * @param bodyData The data to transmit to the remote server.
        If a string, the string will be converted to raw bytes via <a href="http:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
         * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT.
         */
        public static Put($uri: string, $bodyData: number[]):UnityWebRequest;
        
        public static Put($uri: System.Uri, $bodyData: number[]):UnityWebRequest;
        /**
         * Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
         * @param uri The URI to which the data will be sent.
         * @param bodyData The data to transmit to the remote server.
        If a string, the string will be converted to raw bytes via <a href="http:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
         * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT.
         */
        public static Put($uri: string, $bodyData: string):UnityWebRequest;
        
        public static Put($uri: System.Uri, $bodyData: string):UnityWebRequest;
        /**
         * Creates a UnityWebRequest configured to send form data to a server via HTTP POST.
         * @param uri The target URI to which form data will be transmitted.
         * @param postData Form body data. Will be URLEncoded prior to transmission.
         * @returns A UnityWebRequest configured to send form data to uri via POST.
         */
        public static Post($uri: string, $postData: string):UnityWebRequest;
        
        public static Post($uri: System.Uri, $postData: string):UnityWebRequest;
        /**
         * Create a UnityWebRequest configured to send form data to a server via HTTP POST.
         * @param uri The target URI to which form data will be transmitted.
         * @param formData Form fields or files encapsulated in a WWWForm object, for formatting and transmission to the remote server.
         * @returns A UnityWebRequest configured to send form data to uri via POST.
         */
        public static Post($uri: string, $formData: UnityEngine.WWWForm):UnityWebRequest;
        
        public static Post($uri: System.Uri, $formData: UnityEngine.WWWForm):UnityWebRequest;
        
        public static Post($uri: string, $multipartFormSections: System_Collections_Generic.List$1<IMultipartFormSection>):UnityWebRequest;
        
        public static Post($uri: System.Uri, $multipartFormSections: System_Collections_Generic.List$1<IMultipartFormSection>):UnityWebRequest;
        
        public static Post($uri: string, $multipartFormSections: System_Collections_Generic.List$1<IMultipartFormSection>, $boundary: number[]):UnityWebRequest;
        
        public static Post($uri: System.Uri, $multipartFormSections: System_Collections_Generic.List$1<IMultipartFormSection>, $boundary: number[]):UnityWebRequest;
        
        public static Post($uri: string, $formFields: System_Collections_Generic.Dictionary$2<string, string>):UnityWebRequest;
        
        public static Post($uri: System.Uri, $formFields: System_Collections_Generic.Dictionary$2<string, string>):UnityWebRequest;
        /**
         * Escapes characters in a string to ensure they are URL-friendly.
         * @param s A string with characters to be escaped.
         * @param e The text encoding to use.
         */
        public static EscapeURL($s: string):string;
        /**
         * Escapes characters in a string to ensure they are URL-friendly.
         * @param s A string with characters to be escaped.
         * @param e The text encoding to use.
         */
        public static EscapeURL($s: string, $e: System_Text.Encoding):string;
        /**
         * Converts URL-friendly escape sequences back to normal text.
         * @param s A string containing escaped characters.
         * @param e The text encoding to use.
         */
        public static UnEscapeURL($s: string):string;
        /**
         * Converts URL-friendly escape sequences back to normal text.
         * @param s A string containing escaped characters.
         * @param e The text encoding to use.
         */
        public static UnEscapeURL($s: string, $e: System_Text.Encoding):string;
        
        public static SerializeFormSections($multipartFormSections: System_Collections_Generic.List$1<IMultipartFormSection>, $boundary: number[]):number[];
        /**
         * Generate a random 40-byte array for use as a multipart form boundary.
         * @returns 40 random bytes, guaranteed to contain only printable ASCII values.
         */
        public static GenerateBoundary():number[];
        
        public static SerializeSimpleForm($formFields: System_Collections_Generic.Dictionary$2<string, string>):number[];
        
                    
    }
    /**
     * Helper object for UnityWebRequests. Manages the buffering and transmission of body data during HTTP requests.
     */
    class UploadHandler extends System.Object {
        /**
         * The raw data which will be transmitted to the remote server as body data. (Read Only)
         */
        public get data(): number[];
        /**
         * Determines the default Content-Type header which will be transmitted with the outbound HTTP request.
         */
        public get contentType(): string;
        public set contentType(value: string);
        /**
         * Returns the proportion of data uploaded to the remote server compared to the total amount of data to upload. (Read Only)
         */
        public get progress(): number;
        /**
         * Signals that this UploadHandler is no longer being used, and should clean up any resources it is using.
         */
        public Dispose():void;
        
                    
    }
    /**
     * Manage and process HTTP response body data received from a remote server.
     */
    class DownloadHandler extends System.Object {
        /**
         * Returns true if this DownloadHandler has been informed by its parent UnityWebRequest that all data has been received, and this DownloadHandler has completed any necessary post-download processing. (Read Only)
         */
        public get isDone(): boolean;
        /**
         * Error message describing a failure that occurred inside the download handler.
         */
        public get error(): string;
        /**
         * Returns the raw bytes downloaded from the remote server, or null. (Read Only)
         */
        public get data(): number[];
        /**
         * Convenience property. Returns the bytes from data interpreted as a UTF8 string. (Read Only)
         */
        public get text(): string;
        /**
         * Signals that this DownloadHandler is no longer being used, and should clean up any resources it is using.
         */
        public Dispose():void;
        
                    
    }
    /**
     * Responsible for rejecting or accepting certificates received on https requests.
     */
    class CertificateHandler extends System.Object {
        /**
         * Signals that this [CertificateHandler] is no longer being used, and should clean up any resources it is using.
         */
        public Dispose():void;
        
                    
    }
    /**
     * A general-purpose DownloadHandler implementation which stores received data in a native byte buffer.
     */
    class DownloadHandlerBuffer extends DownloadHandler {
        /**
         * Default constructor.
         */
        public constructor();
        /**
         * Returns a copy of the native-memory buffer interpreted as a UTF8 string.
         * @param www A finished UnityWebRequest object with DownloadHandlerBuffer attached.
         * @returns The same as DownloadHandlerBuffer.text
         */
        public static GetContent($www: UnityWebRequest):string;
        
                    
    }
    /**
     * An abstract base class for user-created scripting-driven DownloadHandler implementations.
     */
    class DownloadHandlerScript extends DownloadHandler {
        /**
         * Create a DownloadHandlerScript which allocates new buffers when passing data to callbacks.
         */
        public constructor();
        /**
         * Create a DownloadHandlerScript which reuses a preallocated buffer to pass data to callbacks.
         * @param preallocatedBuffer A byte buffer into which data will be copied, for use by DownloadHandler.ReceiveData.
         */
        public constructor($preallocatedBuffer: number[]);
        
                    
    }
    /**
     * Download handler for saving the downloaded data to file.
     */
    class DownloadHandlerFile extends DownloadHandler {
        /**
         * Should the created file be removed if download is aborted (manually or due to an error). Default: false.
         */
        public get removeFileOnAbort(): boolean;
        public set removeFileOnAbort(value: boolean);
        /**
         * Creates a new instance and a file on disk where downloaded data will be written to.
         * @param path Path to file to be written.
         * @param append When true, appends data to the given file instead of overwriting.
         */
        public constructor($path: string);
        /**
         * Creates a new instance and a file on disk where downloaded data will be written to.
         * @param path Path to file to be written.
         * @param append When true, appends data to the given file instead of overwriting.
         */
        public constructor($path: string, $append: boolean);
        
                    
    }
    /**
     * A general-purpose UploadHandler subclass, using a native-code memory buffer.
     */
    class UploadHandlerRaw extends UploadHandler {
        /**
         * General constructor. Contents of the input argument are copied into a native buffer.
         * @param data Raw data to transmit to the remote server.
         */
        public constructor($data: number[]);
        
                    
    }
    /**
     * A specialized UploadHandler that reads data from a given file and sends raw bytes to the server as the request body.
     */
    class UploadHandlerFile extends UploadHandler {
        /**
         * Create a new upload handler to send data from the given file to the server.
         * @param filePath A file containing data to send.
         */
        public constructor($filePath: string);
        
                    
    }
    
}
declare module 'UnityEngine.Networking.UnityWebRequest' {

    import * as System from 'System';
        
    /**
     * The enumeration describing the result of the UnityWebRequest.
     */
    enum Result { InProgress = 0, Success = 1, ConnectionError = 2, ProtocolError = 3, DataProcessingError = 4 }
    
}

