//# signature=UnityEngine.UNETModule#a725c1d5d50b529ff36d6c0fd2987ef9#0.0.4
// @ts-nocheck
declare module 'UnityEngine.Networking' {

    import * as System from 'System';
    import * as UnityEngine_Networking_Types from 'UnityEngine.Networking.Types';
        
    /**
     * Event that is returned when calling the Networking.NetworkTransport.Receive and Networking.NetworkTransport.ReceiveFromHost functions.
     */
    enum NetworkEventType { DataEvent = 0, ConnectEvent = 1, DisconnectEvent = 2, Nothing = 3, BroadcastEvent = 4 }
    /**
     * Enumeration of all supported quality of service channel modes.
     */
    enum QosType { Unreliable = 0, UnreliableFragmented = 1, UnreliableSequenced = 2, Reliable = 3, ReliableFragmented = 4, ReliableSequenced = 5, StateUpdate = 6, ReliableStateUpdate = 7, AllCostDelivery = 8, UnreliableFragmentedSequenced = 9, ReliableFragmentedSequenced = 10 }
    /**
     * Possible Networking.NetworkTransport errors.
     */
    enum NetworkError { Ok = 0, WrongHost = 1, WrongConnection = 2, WrongChannel = 3, NoResources = 4, BadMessage = 5, Timeout = 6, MessageToLong = 7, WrongOperation = 8, VersionMismatch = 9, CRCMismatch = 10, DNSFailure = 11, UsageError = 12 }
    /**
     * Define how unet will handle network io operation.
     */
    enum ReactorModel { SelectReactor = 0, FixRateReactor = 1 }
    /**
     * Defines size of the buffer holding reliable messages, before they will be acknowledged.
     */
    enum ConnectionAcksType { Acks32 = 1, Acks64 = 2, Acks96 = 3, Acks128 = 4 }
    /**
     * Networking Utility.
     */
    class Utility extends System.Object {
        /**
         * Utility function to get the client's SourceID for unique identification.
         */
        public static GetSourceID():UnityEngine_Networking_Types.SourceID;
        /**
         * Utility function that accepts the access token for a network after it's received from the server.
         */
        public static SetAccessTokenForNetwork($netId: UnityEngine_Networking_Types.NetworkID, $accessToken: UnityEngine_Networking_Types.NetworkAccessToken):void;
        /**
         * Utility function to get this client's access token for a particular network, if it has been set.
         */
        public static GetAccessTokenForNetwork($netId: UnityEngine_Networking_Types.NetworkID):UnityEngine_Networking_Types.NetworkAccessToken;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface UInt64 extends ValueType {
        
                    
    }
    
    interface UInt16 extends ValueType {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
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
    
}
declare module 'UnityEngine.Networking.Types' {

    import * as System from 'System';
        
    /**
     * Identifies a specific game instance.
     */
    enum SourceID { Invalid = 18446744073709551615 }
    /**
     * The AppID identifies the application on the Unity Cloud or UNET servers.
     */
    enum AppID { Invalid = 18446744073709551615 }
    /**
     * Network ID, used for match making.
     */
    enum NetworkID { Invalid = 18446744073709551615 }
    /**
     * Access token used to authenticate a client session for the purposes of allowing or disallowing match operations requested by that client.
     */
    class NetworkAccessToken extends System.Object {
        /**
         * Binary field for the actual token.
         */
        public array: number[];
        
        public constructor();
        
        public constructor($array: number[]);
        
        public constructor($strArray: string);
        /**
         * Accessor to get an encoded string from the m_array data.
         */
        public GetByteString():string;
        /**
         * Checks if the token is a valid set of data with respect to default values (returns true if the values are not default, does not validate the token is a current legitimate token with respect to the server's auth framework).
         */
        public IsValid():boolean;
        
                    
    }
    /**
     * Describes the access levels granted to this client.
     */
    enum NetworkAccessLevel { Invalid = 0, User = 1, Owner = 2, Admin = 4 }
    /**
     * The NodeID is the ID used in Relay matches to track nodes in a network.
     */
    enum NodeID { Invalid = 0 }
    /**
     * An Enum representing the priority of a client in a match, starting at 0 and increasing.
     */
    enum HostPriority { Invalid = 2147483647 }
    
}
declare module 'UnityEngine.Networking.Match' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * A class describing the match information as a snapshot at the time the request was processed on the MatchMaker.
     */
    interface MatchInfoSnapshot extends System.Object {
        
                    
    }
    /**
     * A component for communicating with the Unity Multiplayer Matchmaking service.
     */
    interface NetworkMatch extends UnityEngine.MonoBehaviour {
        
                    
    }
    
}
declare module 'UnityEngine.Networking.Match.MatchInfoSnapshot' {

    import * as System from 'System';
    import * as UnityEngine_Networking_Types from 'UnityEngine.Networking.Types';
        
    /**
     * A class describing one member of a match and what direct connect information other clients have supplied.
     */
    class MatchInfoDirectConnectSnapshot extends System.Object {
        
        public get nodeId(): UnityEngine_Networking_Types.NodeID;
        
        public get publicAddress(): string;
        
        public get privateAddress(): string;
        
        public get hostPriority(): UnityEngine_Networking_Types.HostPriority;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * MonoBehaviour is the base class from which every Unity script derives.
     */
    interface MonoBehaviour extends Behaviour {
        
                    
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
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Networking.Match.NetworkMatch' {

    import * as System from 'System';
        
    /**
     * A delegate that can handle MatchMaker responses that return basic response types (generally only indicating success or failure and extended information if a failure did happen).
     * @param success Indicates if the request succeeded.
     * @param extendedInfo A text description of the failure if success is false.
     */
    type BasicResponseDelegate = (success: boolean, extendedInfo: string) => void;
    var BasicResponseDelegate: {new (func: (success: boolean, extendedInfo: string) => void): BasicResponseDelegate;}
    
}

