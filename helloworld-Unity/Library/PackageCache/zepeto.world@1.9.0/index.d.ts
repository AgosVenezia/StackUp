//# signature=ZEPETO.World#2b95d9b43f1883764e825d2336399972#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Character.Controller' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as ZEPETO_Character_Controller_CreatePlayerData from 'ZEPETO.Character.Controller.CreatePlayerData';
        
    
    class ZepetoPlayersExtension extends System.Object {
        
        public static CreatePlayer($instance: ZepetoPlayers, $data: CreatePlayerData):void;
        
        public static CreatePlayerWithUserId($instance: ZepetoPlayers, $userId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        
        public static CreatePlayerWithZepetoId($instance: ZepetoPlayers, $zepetoId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        
        public static CreatePlayerWithHashCode($instance: ZepetoPlayers, $hashCode: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        
        public static CreatePlayerWithUserId($instance: ZepetoPlayers, $playerId: string, $userId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        
        public static CreatePlayerWithZepetoId($instance: ZepetoPlayers, $playerId: string, $zepetoId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        
        public static CreatePlayerWithHashCode($instance: ZepetoPlayers, $playerId: string, $hashCode: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        
                    
    }
    
    interface ZepetoPlayers extends UnityEngine.MonoBehaviour {
        
                    
    }
    
    class CreatePlayerData extends System.Object {
        
        public playerId: string;
        
        public type: ZEPETO_Character_Controller_CreatePlayerData.Type;
        
        public value: string;
        
        public spawnInfo: SpawnInfo;
        
        public isLocalPlayer: boolean;
        
        public constructor();
        
                    
    }
    
    interface SpawnInfo extends System.ValueType {
        
                    
    }
    
    class ZepetoCharacterCreator extends System.Object {
        
        public static CreateByZepetoId($zepetoId: string, $spawnInfo: SpawnInfo, $complete: System.Action$1<ZepetoCharacter>):void;
        
        public static CreateByHashCode($hashCode: string, $spawnInfo: SpawnInfo, $complete: System.Action$1<ZepetoCharacter>):void;
        
        public static CreateByUserId($userId: string, $spawnInfo: SpawnInfo, $complete: System.Action$1<ZepetoCharacter>):void;
        
        public static RemoveCharacter($character: ZepetoCharacter):void;
        
        public static CreateModelByZepetoId($zepetoId: string, $spawnInfo: SpawnInfo, $complete: System.Action$1<UnityEngine.GameObject>):void;
        
        public static CreateModelByUserId($userId: string, $spawnInfo: SpawnInfo, $complete: System.Action$1<UnityEngine.GameObject>):void;
        
                    
    }
    
    interface ZepetoCharacter extends UnityEngine.MonoBehaviour {
        
                    
    }
    
    class UserInfoExtension extends System.Object {
        
        public static GetProfileTextureAsync($characterInfo: CharacterInfo, $complete: System.Action$1<UnityEngine.Texture2D>):void;
        
                    
    }
    
    interface CharacterInfo extends System.Object {
        
                    
    }
    
    interface ZepetoPlayers {
        /** @extension ZEPETO.Character.Controller.ZepetoPlayersExtension */
        CreatePlayer($data: CreatePlayerData):void;
        /** @extension ZEPETO.Character.Controller.ZepetoPlayersExtension */
        CreatePlayerWithUserId($userId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        /** @extension ZEPETO.Character.Controller.ZepetoPlayersExtension */
        CreatePlayerWithZepetoId($zepetoId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        /** @extension ZEPETO.Character.Controller.ZepetoPlayersExtension */
        CreatePlayerWithHashCode($hashCode: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        /** @extension ZEPETO.Character.Controller.ZepetoPlayersExtension */
        CreatePlayerWithUserId($playerId: string, $userId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        /** @extension ZEPETO.Character.Controller.ZepetoPlayersExtension */
        CreatePlayerWithZepetoId($playerId: string, $zepetoId: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        /** @extension ZEPETO.Character.Controller.ZepetoPlayersExtension */
        CreatePlayerWithHashCode($playerId: string, $hashCode: string, $spawnInfo: SpawnInfo, $isLocal: boolean):void;
        
                    
    }
    
    interface CharacterInfo {
        /** @extension ZEPETO.Character.Controller.UserInfoExtension */
        GetProfileTextureAsync($complete: System.Action$1<UnityEngine.Texture2D>):void;
        
                    
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
    
    interface Boolean extends ValueType {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    type Func$2<T,TResult> = (arg: T) => TResult;
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
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
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Class that represents textures in C# code.
     */
    interface Texture2D extends Texture {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * Render textures are textures that can be rendered to.
     */
    interface RenderTexture extends Texture {
        
                    
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
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    
}
declare module 'ZEPETO.World' {

    import * as System from 'System';
    import * as ZEPETO_Multiplay from 'ZEPETO.Multiplay';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine from 'UnityEngine';
    import * as ZEPETO_Character_Controller from 'ZEPETO.Character.Controller';
    import * as UnityEngine_Video from 'UnityEngine.Video';
        
    
    class WorldMultiplayChatContent extends System.Object {
        
        public static instance: WorldMultiplayChatContent;
        
        public static add_OnReceivedQuickMessages($value: System.Action$1<ZEPETO_Chat.UserMessage>):void;
        
        public static remove_OnReceivedQuickMessages($value: System.Action$1<ZEPETO_Chat.UserMessage>):void;
        
        public SendQuickMessage($quickId: string):void;
        
        public static OnReceivedQuickMessages;
        
                    
    }
    
    interface IMessage {
        
                    
    }
    
    interface UserMessage extends System.Object {
        
                    
    }
    
    class WorldMultiplayContent extends System.Object {
        
        public static instance: WorldMultiplayContent;
        
        public constructor($multiplay: ZEPETO_Multiplay.ZepetoMultiplayBase);
        
        public add_onRoomUserList($value: System.Action$1<string[]>):void;
        
        public remove_onRoomUserList($value: System.Action$1<string[]>):void;
        
        public add_onJoinUser($value: System.Action$1<string>):void;
        
        public remove_onJoinUser($value: System.Action$1<string>):void;
        
        public add_onLeaveUser($value: System.Action$1<string>):void;
        
        public remove_onLeaveUser($value: System.Action$1<string>):void;
        
        public Release():void;
        
        public GetUserInfos():UserInfo[];
        
        public CheckExistUserInfo($userId: string):boolean;
        
        public GetUserInfo($userId: string):UserInfo;
        
        public GetUserInfoAsSessionId($sessionId: string):UserInfo;
        
        public onRoomUserList;
        
        public onJoinUser;
        
        public onLeaveUser;
        
                    
    }
    
    class UserInfo extends System.Object {
        
        public userId: string;
        
        public hashCode: string;
        
        public name: string;
        
        public profilePic: string;
        
        public followerCount: number;
        
        public followingCount: number;
        
        public creationDate: bigint;
        
        public registered: boolean;
        
        public following: boolean;
        
        public officialAccount: boolean;
        
        public officialAccountType: string;
        
        public userRegistrationDate: bigint;
        
        public zepetoId: string;
        
        public constructor();
        
                    
    }
    
    class ZepetoWorldMultiplay extends ZEPETO_Multiplay.ZepetoDynamicMultiplay {
        
        public get Headers(): System_Collections_Generic.Dictionary$2<string, string>;
        
        public get Options(): System_Collections_Generic.Dictionary$2<string, any>;
        
        public constructor();
        
                    
    }
    
    class UserInfoExtension extends System.Object {
        
        public static GetProfileTextureAsync($userInfo: UserInfo, $complete: System.Action$1<UnityEngine.Texture>):void;
        
                    
    }
    
    class Users extends System.Object {
        
        public userOid: string;
        
        public zepetoId: string;
        
        public name: string;
        
        public hashCode: string;
        
        public profilePic: string;
        
        public hasSubsPremium: boolean;
        
        public constructor();
        
                    
    }
    
    class UserIdInfoUsers extends System.Object {
        
        public userOid: string;
        
        public zepetoId: string;
        
        public name: string;
        
        public hashCode: string;
        
        public profilePic: string;
        
        public hasSubsPremium: boolean;
        
        public constructor();
        
                    
    }
    
    class ZepetoWorldHelper extends System.Object {
        
        public static GetUserInfo($userIds: string[], $onComplete: System.Action$1<Users[]>, $onError: System.Action$1<string>):void;
        
        public static GetUserIdInfo($userIds: string[], $onComplete: System.Action$1<UserIdInfoUsers[]>, $onError: System.Action$1<string>):void;
        
        public static GetProfileTexture($userId: string, $complete: System.Action$1<UnityEngine.Texture>, $onError: System.Action$1<string>):void;
        
                    
    }
    
    class ZepetoWorldContent extends System.Object {
        
        public constructor();
        
        public static GetQuickMessageList($onComplete: System.Action$1<QuickMessage[]>, $onError: System.Action$1<string>):void;
        
        public static MoveToWorld($worldId: string, $onError: System.Action$2<number, string>):void;
        
        public static RequestOfficialContentList($contentType: OfficialContentType, $callback: System.Action$1<Content[]>):void;
        
        public static SaveToCameraRoll($rt: UnityEngine.RenderTexture, $result: System.Action$1<boolean>):void;
        
        public static SaveToCameraRoll($texture: UnityEngine.Texture2D, $result: System.Action$1<boolean>):void;
        
        public static Share($rt: UnityEngine.RenderTexture, $result: System.Action$1<boolean>):void;
        
        public static Share($texture: UnityEngine.Texture2D, $result: System.Action$1<boolean>):void;
        
        public static CreateFeed($rt: UnityEngine.RenderTexture, $contents: string, $result: System.Action$1<boolean>):void;
        
        public static CreateFeed($texture: UnityEngine.Texture2D, $contents: string, $result: System.Action$1<boolean>):void;
        
                    
    }
    
    class QuickMessage extends System.Object {
        
        public id: string;
        
        public message: string;
        
        public constructor();
        
                    
    }
    
    enum OfficialContentType { Gesture = 2, Pose = 4, Selfie = 8, GestureGreeting = 16, GesturePose = 32, GestureAffirmation = 64, GestureDancing = 128, GestureDenial = 256, GestureEtc = 512, All = 14 }
    
    class Content extends System.Object {
        
        public static filter: System.Func$2<string, boolean>;
        
        public Keywords: OfficialContentType[];
        
        public get Id(): string;
        
        public get Title(): string;
        
        public get Type(): string;
        
        public get Thumbnail(): UnityEngine.Texture2D;
        
        public get AnimationClip(): UnityEngine.AnimationClip;
        
        public get IsDownloadedThumbnail(): boolean;
        
        public get IsDownloadedAnimation(): boolean;
        
        public DownloadAnimation($complete: System.Action):void;
        
        public DownloadThumbnail($character: ZEPETO_Character_Controller.ZepetoCharacter, $complete: System.Action):void;
        
                    
    }
    
    class WorldVideoRecorder extends System.Object {
        
        public constructor();
        
        public static StartRecording($camera: UnityEngine.Camera, $resolutions: VideoResolutions, $durationSecond: number):boolean;
        
        public static StopRecording():void;
        
        public static IsRecording():boolean;
        
        public static SaveToCameraRoll($callback: System.Action$1<boolean>):void;
        
        public static Share($callback: System.Action$1<boolean>):void;
        
        public static CreateFeed($contents: string, $callback: System.Action$1<boolean>):void;
        
        public static AddVideoPlayerComponent($playerObject: UnityEngine.GameObject, $width: number, $height: number):UnityEngine_Video.VideoPlayer;
        
        public static AddVideoPlayerComponent($playerObject: UnityEngine.GameObject, $renderTexture: UnityEngine.RenderTexture):UnityEngine_Video.VideoPlayer;
        
        public static GetThumbnail():UnityEngine.Texture2D;
        
                    
    }
    
    enum VideoResolutions { W1280xH720 = 0, W720xH1280 = 1, W1920xH1080 = 2, W1080xH1920 = 3 }
    
    interface UserInfo {
        /** @extension ZEPETO.World.UserInfoExtension */
        GetProfileTextureAsync($complete: System.Action$1<UnityEngine.Texture>):void;
        
                    
    }
    
}
declare module 'ZEPETO.World.WorldMultiplayChatContent' {

    import * as System from 'System';
        
    
    interface MessageData extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Chat' {

    import * as System from 'System';
        
    
    interface UserMessage extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Multiplay' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    interface ZepetoMultiplayBase extends UnityEngine.MonoBehaviour {
        
                    
    }
    
    interface ZepetoDynamicMultiplay extends ZepetoMultiplay$1<DynamicSchema> {
        
                    
    }
    
    interface DynamicSchema extends SchemaBase {
        
                    
    }
    
    interface SchemaBase extends System.Object {
        
                    
    }
    
    interface ZepetoMultiplay$1<T> extends ZepetoMultiplayBase {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
}
declare module 'ZEPETO.Character.Controller.CreatePlayerData' {

        
    
    enum Type { UserId = 0, HashCode = 1, ZepetoId = 2 }
    
}
declare module 'UnityEngine.Video' {

    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Plays video content onto a target.
     */
    interface VideoPlayer extends UnityEngine.Behaviour {
        
                    
    }
    
}

