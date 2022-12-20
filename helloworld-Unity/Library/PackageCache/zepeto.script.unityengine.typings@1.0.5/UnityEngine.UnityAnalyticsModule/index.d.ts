//# signature=UnityEngine.UnityAnalyticsModule#d5b2cbac2b2e054a8094bd9a0f936dc0#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as UnityEngine_RemoteSettings from 'UnityEngine.RemoteSettings';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Provides access to your remote settings.
     */
    class RemoteSettings extends System.Object {
        
        public static add_Updated($value: UnityEngine_RemoteSettings.UpdatedEventHandler):void;
        
        public static remove_Updated($value: UnityEngine_RemoteSettings.UpdatedEventHandler):void;
        
        public static add_BeforeFetchFromServer($value: System.Action):void;
        
        public static remove_BeforeFetchFromServer($value: System.Action):void;
        
        public static add_Completed($value: System.Action$3<boolean, boolean, number>):void;
        
        public static remove_Completed($value: System.Action$3<boolean, boolean, number>):void;
        /**
         * Forces the game to download the newest settings from the server and update its values.
         */
        public static ForceUpdate():void;
        /**
         * Reports whether or not the settings available from the RemoteSettings object were received from the Analytics Service during the current session.
         * @returns True, if the remote settings file was received from the Analytics Service in the current session. False, if the remote settings file was received during an earlier session and cached.
         */
        public static WasLastUpdatedFromServer():boolean;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetInt($key: string):number;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetInt($key: string, $defaultValue: number):number;
        
        public static GetLong($key: string):bigint;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetLong($key: string, $defaultValue: bigint):bigint;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetFloat($key: string):number;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetFloat($key: string, $defaultValue: number):number;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetString($key: string):string;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetString($key: string, $defaultValue: string):string;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetBool($key: string):boolean;
        /**
         * Gets the value corresponding to remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param defaultValue The default value to use if the setting identified by the key parameter cannot be found or is unavailable.
         * @returns The current value of the setting identified by key, or the default value.
         */
        public static GetBool($key: string, $defaultValue: boolean):boolean;
        /**
         * Reports whether the specified key exists in the remote settings configuration.
         * @param key The key identifying the setting.
         * @returns True, if the key exists.
         */
        public static HasKey($key: string):boolean;
        /**
         * Gets the number of keys in the remote settings configuration.
         */
        public static GetCount():number;
        /**
         * Gets an array containing all the keys in the remote settings configuration.
         */
        public static GetKeys():string[];
        /**
         * Gets the object corresponding to the remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @returns An instance of the object with fields assigned the corresponding remote values.
         */
        public static GetObject<T>($key?: string):T;
        /**
         * Gets the object corresponding to the remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @param type The type of object represented in RemoteSettings.
         * @returns An instance of the object with fields assigned the corresponding remote values.
         */
        public static GetObject($type: System.Type, $key?: string):any;
        /**
         * Gets the object corresponding to the remote setting identified by key, if it exists.
         * @param defaultValue The object that should be for default values.
         * @param key The key identifying the setting.
         * @returns An instance of the object with fields assigned the corresponding remote values.
         */
        public static GetObject($key: string, $defaultValue: any):any;
        /**
         * Gets a dictionary corresponding to the remote setting identified by key, if it exists.
         * @param key The key identifying the setting.
         * @returns An instance of Dictionary<string, object> containing the corresponding remote value or values.
         */
        public static GetDictionary($key?: string):System_Collections_Generic.IDictionary$2<string, any>;
        /**
         * Dispatched when a remote settings configuration is fetched and successfully parsed from the server or from local cache.
         */
        public static Updated;
        /**
         * Dispatched before the RemoteSettings object makes the network request for the latest settings.
         */
        public static BeforeFetchFromServer;
        
        public static Completed;
        
                    
    }
    
    class RemoteConfigSettings extends System.Object {
        
        public constructor($configKey: string);
        
        public add_Updated($value: System.Action$1<boolean>):void;
        
        public remove_Updated($value: System.Action$1<boolean>):void;
        
        public Dispose():void;
        
        public static QueueConfig($name: string, $param: any, $ver?: number, $prefix?: string):boolean;
        
        public static SendDeviceInfoInConfigRequest():boolean;
        
        public static AddSessionTag($tag: string):void;
        
        public ForceUpdate():void;
        
        public WasLastUpdatedFromServer():boolean;
        
        public GetInt($key: string):number;
        
        public GetInt($key: string, $defaultValue: number):number;
        
        public GetLong($key: string):bigint;
        
        public GetLong($key: string, $defaultValue: bigint):bigint;
        
        public GetFloat($key: string):number;
        
        public GetFloat($key: string, $defaultValue: number):number;
        
        public GetString($key: string):string;
        
        public GetString($key: string, $defaultValue: string):string;
        
        public GetBool($key: string):boolean;
        
        public GetBool($key: string, $defaultValue: boolean):boolean;
        
        public HasKey($key: string):boolean;
        
        public GetCount():number;
        
        public GetKeys():string[];
        
        public GetObject<T>($key?: string):T;
        
        public GetObject($type: System.Type, $key?: string):any;
        
        public GetObject($key: string, $defaultValue: any):any;
        
        public GetDictionary($key?: string):System_Collections_Generic.IDictionary$2<string, any>;
        
        public Updated;
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    type Action$3<T1,T2,T3> = (arg1: T1, arg2: T2, arg3: T3) => void;
    
    interface String extends Object {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    interface Enum extends ValueType {
        
                    
    }
    
    type Func$1<TResult> = () => TResult;
    
    interface Array extends Object {
        
                    
    }
    
    interface Decimal extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.RemoteSettings' {

    import * as System from 'System';
        
    /**
     * Defines the delegate signature for handling RemoteSettings.Updated events.
     */
    type UpdatedEventHandler = () => void;
    var UpdatedEventHandler: {new (func: () => void): UpdatedEventHandler;}
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

        
    
    interface IDictionary$2<TKey,TValue> {
        
                    
    }
    
}
declare module 'UnityEngine.Analytics' {

    import * as System from 'System';
    import * as RootNamespace from 'RootNamespace';
    import * as UnityEngine_Analytics_AnalyticsSessionInfo from 'UnityEngine.Analytics.AnalyticsSessionInfo';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    
    class ContinuousEvent extends System.Object {
        
        public constructor();
        
        public static RegisterCollector<T>($metricName: string, $del: System.Func$1<T>):AnalyticsResult;
        
        public static SetEventHistogramThresholds<T>($eventName: string, $count: number, $data: T[], $ver?: number, $prefix?: string):AnalyticsResult;
        
        public static SetCustomEventHistogramThresholds<T>($eventName: string, $count: number, $data: T[]):AnalyticsResult;
        
        public static ConfigureCustomEvent($customEventName: string, $metricName: string, $interval: number, $period: number, $enabled?: boolean):AnalyticsResult;
        
        public static ConfigureEvent($eventName: string, $metricName: string, $interval: number, $period: number, $enabled?: boolean, $ver?: number, $prefix?: string):AnalyticsResult;
        
                    
    }
    /**
     * Analytics API result.
     */
    enum AnalyticsResult { Ok = 0, NotInitialized = 1, AnalyticsDisabled = 2, TooManyItems = 3, SizeLimitReached = 4, TooManyRequests = 5, InvalidData = 6, UnsupportedPlatform = 7 }
    /**
     * Session tracking states.
     */
    enum AnalyticsSessionState { kSessionStopped = 0, kSessionStarted = 1, kSessionPaused = 2, kSessionResumed = 3 }
    /**
     * Provides access to the Analytics session information for the current game instance.
     */
    class AnalyticsSessionInfo extends System.Object {
        /**
         * The current state of the session.
         */
        public static get sessionState(): AnalyticsSessionState;
        /**
         * A random, unique GUID identifying the current game or app session.
         */
        public static get sessionId(): bigint;
        /**
         * The number of sessions played since the app was installed.
         */
        public static get sessionCount(): bigint;
        /**
         * The time elapsed, in milliseconds, since the beginning of the current game session.
         */
        public static get sessionElapsedTime(): bigint;
        /**
         * Reports whether the current session is the first session since the player installed the game or application.
         */
        public static get sessionFirstRun(): boolean;
        /**
         * A random GUID uniquely identifying sessions played on the same instance of your game or app.
         */
        public static get userId(): string;
        /**
         * Reports the current custom user ID.
         */
        public static get customUserId(): string;
        public static set customUserId(value: string);
        /**
         * Reports the current custom device ID.
         */
        public static get customDeviceId(): string;
        public static set customDeviceId(value: string);
        /**
         * The current user identity token that the Analytics server returns based on AnalyticsSessionInfo.userId.
         */
        public static get identityToken(): string;
        
        public static add_sessionStateChanged($value: UnityEngine_Analytics_AnalyticsSessionInfo.SessionStateChanged):void;
        
        public static remove_sessionStateChanged($value: UnityEngine_Analytics_AnalyticsSessionInfo.SessionStateChanged):void;
        
        public static add_identityTokenChanged($value: UnityEngine_Analytics_AnalyticsSessionInfo.IdentityTokenChanged):void;
        
        public static remove_identityTokenChanged($value: UnityEngine_Analytics_AnalyticsSessionInfo.IdentityTokenChanged):void;
        /**
         * Dispatched when the Analytics session state changes.
         */
        public static sessionStateChanged;
        /**
         * Dispatched when AnalyticsSessionInfo.identityToken is updated by the server.
         */
        public static identityTokenChanged;
        
                    
    }
    /**
     * Unity Analytics provides insight into your game users e.g. DAU, MAU.
     */
    class Analytics extends System.Object {
        /**
         * Reports whether Unity is set to initialize Analytics on startup.
         */
        public static get initializeOnStartup(): boolean;
        public static set initializeOnStartup(value: boolean);
        /**
         * Reports whether the player has opted out of data collection.
         */
        public static get playerOptedOut(): boolean;
        /**
         * Get the Analytics event endpoint.
         */
        public static get eventUrl(): string;
        /**
         * Get the Analytics dashboard endpoint.
         */
        public static get dashboardUrl(): string;
        /**
         * Get the Analytics config endpoint.
         */
        public static get configUrl(): string;
        /**
         * Controls whether to limit user tracking at runtime.
         */
        public static get limitUserTracking(): boolean;
        public static set limitUserTracking(value: boolean);
        /**
         * Controls whether the sending of device stats at runtime is enabled.
         */
        public static get deviceStatsEnabled(): boolean;
        public static set deviceStatsEnabled(value: boolean);
        /**
         * Controls whether the Analytics service is enabled at runtime.
         */
        public static get enabled(): boolean;
        public static set enabled(value: boolean);
        /**
         * Resume Analytics initialization.
         */
        public static ResumeInitialization():AnalyticsResult;
        /**
         * Attempts to flush immediately all queued analytics events to the network and filesystem cache if possible (optional).
         */
        public static FlushEvents():AnalyticsResult;
        /**
         * User Demographics (optional).
         * @param userId User id.
         */
        public static SetUserId($userId: string):AnalyticsResult;
        /**
         * User Demographics (optional).
         * @param gender Gender of user can be "Female", "Male", or "Unknown".
         */
        public static SetUserGender($gender: Gender):AnalyticsResult;
        /**
         * User Demographics (optional).
         * @param birthYear Birth year of user. Must be 4-digit year format, only.
         */
        public static SetUserBirthYear($birthYear: number):AnalyticsResult;
        /**
         * Tracking Monetization (optional).
         * @param productId The id of the purchased item.
         * @param amount The price of the item.
         * @param currency Abbreviation of the currency used for the transaction. For example “USD” (United States Dollars). See http:en.wikipedia.orgwikiISO_4217 for a standardized list of currency abbreviations.
         * @param receiptPurchaseData Receipt data (iOS)  receipt ID (android)  for in-app purchases to verify purchases with Apple iTunes / Google Play. Use null in the absence of receipts.
         * @param signature Android receipt signature. If using native Android use the INAPP_DATA_SIGNATURE string containing the signature of the purchase data that was signed with the private key of the developer. The data signature uses the RSASSA-PKCS1-v1_5 scheme. Pass in null in absence of a signature.
         * @param usingIAPService Set to true when using UnityIAP.
         */
        public static Transaction($productId: string, $amount: System.Decimal, $currency: string):AnalyticsResult;
        /**
         * Tracking Monetization (optional).
         * @param productId The id of the purchased item.
         * @param amount The price of the item.
         * @param currency Abbreviation of the currency used for the transaction. For example “USD” (United States Dollars). See http:en.wikipedia.orgwikiISO_4217 for a standardized list of currency abbreviations.
         * @param receiptPurchaseData Receipt data (iOS)  receipt ID (android)  for in-app purchases to verify purchases with Apple iTunes / Google Play. Use null in the absence of receipts.
         * @param signature Android receipt signature. If using native Android use the INAPP_DATA_SIGNATURE string containing the signature of the purchase data that was signed with the private key of the developer. The data signature uses the RSASSA-PKCS1-v1_5 scheme. Pass in null in absence of a signature.
         * @param usingIAPService Set to true when using UnityIAP.
         */
        public static Transaction($productId: string, $amount: System.Decimal, $currency: string, $receiptPurchaseData: string, $signature: string):AnalyticsResult;
        /**
         * Tracking Monetization (optional).
         * @param productId The id of the purchased item.
         * @param amount The price of the item.
         * @param currency Abbreviation of the currency used for the transaction. For example “USD” (United States Dollars). See http:en.wikipedia.orgwikiISO_4217 for a standardized list of currency abbreviations.
         * @param receiptPurchaseData Receipt data (iOS)  receipt ID (android)  for in-app purchases to verify purchases with Apple iTunes / Google Play. Use null in the absence of receipts.
         * @param signature Android receipt signature. If using native Android use the INAPP_DATA_SIGNATURE string containing the signature of the purchase data that was signed with the private key of the developer. The data signature uses the RSASSA-PKCS1-v1_5 scheme. Pass in null in absence of a signature.
         * @param usingIAPService Set to true when using UnityIAP.
         */
        public static Transaction($productId: string, $amount: System.Decimal, $currency: string, $receiptPurchaseData: string, $signature: string, $usingIAPService: boolean):AnalyticsResult;
        /**
         * Custom Events (optional).
         */
        public static CustomEvent($customEventName: string):AnalyticsResult;
        /**
         * Custom Events (optional).
         */
        public static CustomEvent($customEventName: string, $position: UnityEngine.Vector3):AnalyticsResult;
        
        public static CustomEvent($customEventName: string, $eventData: System_Collections_Generic.IDictionary$2<string, any>):AnalyticsResult;
        /**
         * Use it to enable or disable a custom event.
         */
        public static EnableCustomEvent($customEventName: string, $enabled: boolean):AnalyticsResult;
        /**
         * Use it to check to custom event enable status.
         */
        public static IsCustomEventEnabled($customEventName: string):AnalyticsResult;
        /**
         * This API is used for registering a Runtime Analytics event. Note: This API is for internal use only and is likely change in the future. Do not use in user code.
         * @param eventName Name of the event.
         * @param maxEventPerHour Hourly limit for this event name.
         * @param maxItems Maximum number of items in this event.
         * @param vendorKey Vendor key name.
         * @param prefix Optional event name prefix value.
         * @param ver Event version number.
         */
        public static RegisterEvent($eventName: string, $maxEventPerHour: number, $maxItems: number, $vendorKey?: string, $prefix?: string):AnalyticsResult;
        /**
         * This API is used for registering a Runtime Analytics event. Note: This API is for internal use only and is likely change in the future. Do not use in user code.
         * @param eventName Name of the event.
         * @param maxEventPerHour Hourly limit for this event name.
         * @param maxItems Maximum number of items in this event.
         * @param vendorKey Vendor key name.
         * @param prefix Optional event name prefix value.
         * @param ver Event version number.
         */
        public static RegisterEvent($eventName: string, $maxEventPerHour: number, $maxItems: number, $vendorKey: string, $ver: number, $prefix?: string):AnalyticsResult;
        /**
         * This API is used to send a Runtime Analytics event. Note: This API is for internal use only and is likely change in the future. Do not use in user code.
         * @param eventName Name of the event.
         * @param ver Event version number.
         * @param prefix Optional event name prefix value.
         * @param parameters Additional event data.
         */
        public static SendEvent($eventName: string, $parameters: any, $ver?: number, $prefix?: string):AnalyticsResult;
        /**
         * Use this API to set the event end point URL. Note: This API is for internal use only and is likely change in the future. Do not use in user code.
         * @param eventName Name of the event.
         * @param ver Event version number.
         * @param endPoint Event end point URL.
         * @param prefix Optional event name prefix value.
         */
        public static SetEventEndPoint($eventName: string, $endPoint: string, $ver?: number, $prefix?: string):AnalyticsResult;
        /**
         * Use this API to set the event priority. Note: This API is for internal use only and is likely change in the future. Do not use in user code.
         * @param eventName Name of the event.
         * @param ver Event version number.
         * @param prefix Optional event name prefix value.
         * @param eventPriority Event priority.
         */
        public static SetEventPriority($eventName: string, $eventPriority: AnalyticsEventPriority, $ver?: number, $prefix?: string):AnalyticsResult;
        /**
         * Use it to enable or disable an event.
         */
        public static EnableEvent($eventName: string, $enabled: boolean, $ver?: number, $prefix?: string):AnalyticsResult;
        /**
         * Use it to check to an event enable status.
         */
        public static IsEventEnabled($eventName: string, $ver?: number, $prefix?: string):AnalyticsResult;
        
                    
    }
    /**
     * User Demographics: Gender of a user.
     */
    enum Gender { Male = 0, Female = 1, Unknown = 2 }
    /**
     * Analytics event priority.
     */
    enum AnalyticsEventPriority { FlushQueueFlag = 1, CacheImmediatelyFlag = 2, AllowInStopModeFlag = 4, SendImmediateFlag = 8, NoCachingFlag = 16, NoRetryFlag = 32, NormalPriorityEvent = 0, NormalPriorityEvent_WithCaching = 2, NormalPriorityEvent_NoRetryNoCaching = 48, HighPriorityEvent = 1, HighPriorityEvent_InStopMode = 5, HighestPriorityEvent = 9, HighestPriorityEvent_NoRetryNoCaching = 49 }
    
}
declare module 'UnityEngine.Analytics.AnalyticsSessionInfo' {

    import * as UnityEngine_Analytics from 'UnityEngine.Analytics';
    import * as System from 'System';
        
    /**
     * Dispatched when the Analytics session state changes.
     * @param sessionState Current session state.
     * @param sessionId Current session id.
     * @param sessionElapsedTime Length of the current session in milliseconds.
     * @param sessionChanged True, if the sessionId has changed; otherwise false.
     */
    type SessionStateChanged = (sessionState: UnityEngine_Analytics.AnalyticsSessionState, sessionId: bigint, sessionElapsedTime: bigint, sessionChanged: boolean) => void;
    var SessionStateChanged: {new (func: (sessionState: UnityEngine_Analytics.AnalyticsSessionState, sessionId: bigint, sessionElapsedTime: bigint, sessionChanged: boolean) => void): SessionStateChanged;}
    /**
     * Defines the delegate signature to handle AnalyticsSettings.IdentityTokenChanged events.
     */
    type IdentityTokenChanged = (token: string) => void;
    var IdentityTokenChanged: {new (func: (token: string) => void): IdentityTokenChanged;}
    
}

