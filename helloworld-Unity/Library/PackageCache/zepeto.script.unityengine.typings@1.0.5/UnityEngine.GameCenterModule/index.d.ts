//# signature=UnityEngine.GameCenterModule#78880b44a4703be6839258e09c57ba59#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as UnityEngine_SocialPlatforms from 'UnityEngine.SocialPlatforms';
        
    /**
     * Generic access to the Social API.
     */
    class Social extends System.Object {
        /**
         * This is the currently active social platform.
         */
        public static get Active(): UnityEngine_SocialPlatforms.ISocialPlatform;
        public static set Active(value: UnityEngine_SocialPlatforms.ISocialPlatform);
        /**
         * The local user (potentially not logged in).
         */
        public static get localUser(): UnityEngine_SocialPlatforms.ILocalUser;
        
        public static LoadUsers($userIDs: string[], $callback: System.Action$1<UnityEngine_SocialPlatforms.IUserProfile[]>):void;
        
        public static ReportProgress($achievementID: string, $progress: number, $callback: System.Action$1<boolean>):void;
        
        public static LoadAchievementDescriptions($callback: System.Action$1<UnityEngine_SocialPlatforms.IAchievementDescription[]>):void;
        
        public static LoadAchievements($callback: System.Action$1<UnityEngine_SocialPlatforms.IAchievement[]>):void;
        
        public static ReportScore($score: bigint, $board: string, $callback: System.Action$1<boolean>):void;
        
        public static LoadScores($leaderboardID: string, $callback: System.Action$1<UnityEngine_SocialPlatforms.IScore[]>):void;
        /**
         * Create an ILeaderboard instance.
         */
        public static CreateLeaderboard():UnityEngine_SocialPlatforms.ILeaderboard;
        /**
         * Create an IAchievement instance.
         */
        public static CreateAchievement():UnityEngine_SocialPlatforms.IAchievement;
        /**
         * Show a default/system view of the games achievements.
         */
        public static ShowAchievementsUI():void;
        /**
         * Show a default/system view of the games leaderboards.
         */
        public static ShowLeaderboardUI():void;
        
                    
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
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
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
    
    interface Array extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface DateTime extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.SocialPlatforms' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * The generic Social API interface which implementations must inherit.
     */
    interface ISocialPlatform {
        /**
         * See Social.localUser.
         */
        localUser: ILocalUser;
        
        LoadUsers($userIDs: string[], $callback: System.Action$1<IUserProfile[]>):void;
        
        ReportProgress($achievementID: string, $progress: number, $callback: System.Action$1<boolean>):void;
        
        LoadAchievementDescriptions($callback: System.Action$1<IAchievementDescription[]>):void;
        
        LoadAchievements($callback: System.Action$1<IAchievement[]>):void;
        /**
         * See Social.CreateAchievement..
         */
        CreateAchievement():IAchievement;
        
        ReportScore($score: bigint, $board: string, $callback: System.Action$1<boolean>):void;
        
        LoadScores($leaderboardID: string, $callback: System.Action$1<IScore[]>):void;
        /**
         * See Social.CreateLeaderboard.
         */
        CreateLeaderboard():ILeaderboard;
        /**
         * See Social.ShowAchievementsUI.
         */
        ShowAchievementsUI():void;
        /**
         * See Social.ShowLeaderboardUI.
         */
        ShowLeaderboardUI():void;
        
        Authenticate($user: ILocalUser, $callback: System.Action$1<boolean>):void;
        
        Authenticate($user: ILocalUser, $callback: System.Action$2<boolean, string>):void;
        
        LoadFriends($user: ILocalUser, $callback: System.Action$1<boolean>):void;
        
        LoadScores($board: ILeaderboard, $callback: System.Action$1<boolean>):void;
        
        GetLoading($board: ILeaderboard):boolean;
        
                    
    }
    /**
     * Represents the local or currently logged in user.
     */
    interface ILocalUser {
        /**
         * The users friends list.
         */
        friends: IUserProfile[];
        /**
         * Checks if the current user has been authenticated.
         */
        authenticated: boolean;
        /**
         * Is the user underage?
         */
        underage: boolean;
        
        Authenticate($callback: System.Action$1<boolean>):void;
        
        Authenticate($callback: System.Action$2<boolean, string>):void;
        
        LoadFriends($callback: System.Action$1<boolean>):void;
        
                    
    }
    /**
     * Represents generic user instances, like friends of the local user.
     */
    interface IUserProfile {
        /**
         * This user's username or alias.
         */
        userName: string;
        /**
         * This user's global unique identifier.
         */
        id: string;
        /**
         * Is this user a friend of the current logged in user?
         */
        isFriend: boolean;
        /**
         * Presence state of the user.
         */
        state: UserState;
        /**
         * Avatar image of the user.
         */
        image: UnityEngine.Texture2D;
        
                    
    }
    /**
     * Static data describing an achievement.
     */
    interface IAchievementDescription {
        /**
         * Unique identifier for this achievement description.
         */
        id: string;
        /**
         * Human readable title.
         */
        title: string;
        /**
         * Image representation of the achievement.
         */
        image: UnityEngine.Texture2D;
        /**
         * Description when the achivement is completed.
         */
        achievedDescription: string;
        /**
         * Description when the achivement has not been completed.
         */
        unachievedDescription: string;
        /**
         * Hidden achievement are not shown in the list until the percentCompleted has been touched (even if it's 0.0).
         */
        hidden: boolean;
        /**
         * Point value of this achievement.
         */
        points: number;
        
                    
    }
    /**
     * Information for a user's achievement.
     */
    interface IAchievement {
        /**
         * The unique identifier of this achievement.
         */
        id: string;
        /**
         * Progress for this achievement.
         */
        percentCompleted: number;
        /**
         * Set to true when percentCompleted is 100.0.
         */
        completed: boolean;
        /**
         * This achievement is currently hidden from the user.
         */
        hidden: boolean;
        /**
         * Set by server when percentCompleted is updated.
         */
        lastReportedDate: Date;
        
        ReportProgress($callback: System.Action$1<boolean>):void;
        
                    
    }
    /**
     * A game score.
     */
    interface IScore {
        /**
         * The ID of the leaderboard this score belongs to.
         */
        leaderboardID: string;
        /**
         * The score value achieved.
         */
        value: bigint;
        /**
         * The date the score was achieved.
         */
        date: Date;
        /**
         * The correctly formatted value of the score, like X points or X kills.
         */
        formattedValue: string;
        /**
         * The user who owns this score.
         */
        userID: string;
        /**
         * The rank or position of the score in the leaderboard.
         */
        rank: number;
        
        ReportScore($callback: System.Action$1<boolean>):void;
        
                    
    }
    /**
     * The leaderboard contains the scores of all players for a particular game.
     */
    interface ILeaderboard {
        /**
         * The leaderboad is in the process of loading scores.
         */
        loading: boolean;
        /**
         * Unique identifier for this leaderboard.
         */
        id: string;
        /**
         * The users scope searched by this leaderboard.
         */
        userScope: UserScope;
        /**
         * The rank range this leaderboard returns.
         */
        range: Range;
        /**
         * The time period/scope searched by this leaderboard.
         */
        timeScope: TimeScope;
        /**
         * The leaderboard score of the logged in user.
         */
        localUserScore: IScore;
        /**
         * The total amount of scores the leaderboard contains.
         */
        maxRange: number;
        /**
         * The leaderboard scores returned by a query.
         */
        scores: IScore[];
        /**
         * The human readable title of this leaderboard.
         */
        title: string;
        /**
         * Only search for these user IDs.
         * @param userIDs List of user ids.
         */
        SetUserFilter($userIDs: string[]):void;
        
        LoadScores($callback: System.Action$1<boolean>):void;
        
                    
    }
    
    class Local extends System.Object {
        
        public get localUser(): ILocalUser;
        
        public constructor();
        
        public LoadUsers($userIDs: string[], $callback: System.Action$1<IUserProfile[]>):void;
        
        public ReportProgress($id: string, $progress: number, $callback: System.Action$1<boolean>):void;
        
        public LoadAchievementDescriptions($callback: System.Action$1<IAchievementDescription[]>):void;
        
        public LoadAchievements($callback: System.Action$1<IAchievement[]>):void;
        
        public ReportScore($score: bigint, $board: string, $callback: System.Action$1<boolean>):void;
        
        public LoadScores($leaderboardID: string, $callback: System.Action$1<IScore[]>):void;
        
        public ShowAchievementsUI():void;
        
        public ShowLeaderboardUI():void;
        
        public CreateLeaderboard():ILeaderboard;
        
        public CreateAchievement():IAchievement;
        
                    
    }
    /**
     * User presence state.
     */
    enum UserState { Online = 0, OnlineAndAway = 1, OnlineAndBusy = 2, Offline = 3, Playing = 4 }
    /**
     * The scope of the users searched through when querying the leaderboard.
     */
    enum UserScope { Global = 0, FriendsOnly = 1 }
    /**
     * The scope of time searched through when querying the leaderboard.
     */
    enum TimeScope { Today = 0, Week = 1, AllTime = 2 }
    /**
     * The score range a leaderboard query should include.
     */
    class Range extends System.ValueType {
        /**
         * The rank of the first score which is returned.
         */
        public from: number;
        /**
         * The total amount of scores retreived.
         */
        public count: number;
        /**
         * Constructor for a score range, the range starts from a specific value and contains a maxium score count.
         * @param fromValue The minimum allowed value.
         * @param valueCount The number of possible values.
         */
        public constructor($fromValue: number, $valueCount: number);
        
        public get_Clone(): Range;            
    }
    
}
declare module 'UnityEngine.SocialPlatforms.Impl' {

    import * as System from 'System';
    import * as UnityEngine_SocialPlatforms from 'UnityEngine.SocialPlatforms';
    import * as UnityEngine from 'UnityEngine';
        
    
    class LocalUser extends UserProfile {
        
        public get friends(): UnityEngine_SocialPlatforms.IUserProfile[];
        
        public get authenticated(): boolean;
        
        public get underage(): boolean;
        
        public constructor();
        
        public Authenticate($callback: System.Action$1<boolean>):void;
        
        public Authenticate($callback: System.Action$2<boolean, string>):void;
        
        public LoadFriends($callback: System.Action$1<boolean>):void;
        
        public SetFriends($friends: UnityEngine_SocialPlatforms.IUserProfile[]):void;
        
        public SetAuthenticated($value: boolean):void;
        
        public SetUnderage($value: boolean):void;
        
                    
    }
    
    class UserProfile extends System.Object {
        
        public get userName(): string;
        
        public get id(): string;
        
        public get gameId(): string;
        
        public get isFriend(): boolean;
        
        public get state(): UnityEngine_SocialPlatforms.UserState;
        
        public get image(): UnityEngine.Texture2D;
        
        public constructor();
        
        public constructor($name: string, $id: string, $friend: boolean);
        
        public constructor($name: string, $id: string, $friend: boolean, $state: UnityEngine_SocialPlatforms.UserState, $image: UnityEngine.Texture2D);
        
        public constructor($name: string, $teamId: string, $gameId: string, $friend: boolean, $state: UnityEngine_SocialPlatforms.UserState, $image: UnityEngine.Texture2D);
        
        public ToString():string;
        
        public SetUserName($name: string):void;
        
        public SetUserID($id: string):void;
        
        public SetLegacyUserID($id: string):void;
        
        public SetUserGameID($id: string):void;
        
        public SetImage($image: UnityEngine.Texture2D):void;
        
        public SetIsFriend($value: boolean):void;
        
        public SetState($state: UnityEngine_SocialPlatforms.UserState):void;
        
                    
    }
    
    class Achievement extends System.Object {
        
        public get id(): string;
        public set id(value: string);
        
        public get percentCompleted(): number;
        public set percentCompleted(value: number);
        
        public get completed(): boolean;
        
        public get hidden(): boolean;
        
        public get lastReportedDate(): Date;
        
        public constructor($id: string, $percentCompleted: number, $completed: boolean, $hidden: boolean, $lastReportedDate: Date);
        
        public constructor($id: string, $percent: number);
        
        public constructor();
        
        public ToString():string;
        
        public ReportProgress($callback: System.Action$1<boolean>):void;
        
        public SetCompleted($value: boolean):void;
        
        public SetHidden($value: boolean):void;
        
        public SetLastReportedDate($date: Date):void;
        
                    
    }
    
    class AchievementDescription extends System.Object {
        
        public get id(): string;
        public set id(value: string);
        
        public get title(): string;
        
        public get image(): UnityEngine.Texture2D;
        
        public get achievedDescription(): string;
        
        public get unachievedDescription(): string;
        
        public get hidden(): boolean;
        
        public get points(): number;
        
        public constructor($id: string, $title: string, $image: UnityEngine.Texture2D, $achievedDescription: string, $unachievedDescription: string, $hidden: boolean, $points: number);
        
        public ToString():string;
        
        public SetImage($image: UnityEngine.Texture2D):void;
        
                    
    }
    
    class Score extends System.Object {
        
        public get leaderboardID(): string;
        public set leaderboardID(value: string);
        
        public get value(): bigint;
        public set value(value: bigint);
        
        public get date(): Date;
        
        public get formattedValue(): string;
        
        public get userID(): string;
        
        public get rank(): number;
        
        public constructor();
        
        public constructor($leaderboardID: string, $value: bigint);
        
        public constructor($leaderboardID: string, $value: bigint, $userID: string, $date: Date, $formattedValue: string, $rank: number);
        
        public ToString():string;
        
        public ReportScore($callback: System.Action$1<boolean>):void;
        
        public SetDate($date: Date):void;
        
        public SetFormattedValue($value: string):void;
        
        public SetUserID($userID: string):void;
        
        public SetRank($rank: number):void;
        
                    
    }
    
    class Leaderboard extends System.Object {
        
        public get loading(): boolean;
        
        public get id(): string;
        public set id(value: string);
        
        public get userScope(): UnityEngine_SocialPlatforms.UserScope;
        public set userScope(value: UnityEngine_SocialPlatforms.UserScope);
        
        public get range(): UnityEngine_SocialPlatforms.Range;
        public set range(value: UnityEngine_SocialPlatforms.Range);
        
        public get timeScope(): UnityEngine_SocialPlatforms.TimeScope;
        public set timeScope(value: UnityEngine_SocialPlatforms.TimeScope);
        
        public get localUserScore(): UnityEngine_SocialPlatforms.IScore;
        
        public get maxRange(): number;
        
        public get scores(): UnityEngine_SocialPlatforms.IScore[];
        
        public get title(): string;
        
        public constructor();
        
        public SetUserFilter($userIDs: string[]):void;
        
        public ToString():string;
        
        public LoadScores($callback: System.Action$1<boolean>):void;
        
        public SetLocalUserScore($score: UnityEngine_SocialPlatforms.IScore):void;
        
        public SetMaxRange($maxRange: number):void;
        
        public SetScores($scores: UnityEngine_SocialPlatforms.IScore[]):void;
        
        public SetTitle($title: string):void;
        
        public GetUserFilter():string[];
        
                    
    }
    
}
declare module 'UnityEngine.SocialPlatforms.GameCenter' {

    import * as System from 'System';
    import * as UnityEngine_SocialPlatforms from 'UnityEngine.SocialPlatforms';
        
    /**
     * iOS GameCenter implementation for network services.
     */
    class GameCenterPlatform extends System.Object {
        
        public get localUser(): UnityEngine_SocialPlatforms.ILocalUser;
        
        public constructor();
        
        public LoadAchievementDescriptions($callback: System.Action$1<UnityEngine_SocialPlatforms.IAchievementDescription[]>):void;
        
        public ReportProgress($id: string, $progress: number, $callback: System.Action$1<boolean>):void;
        
        public LoadAchievements($callback: System.Action$1<UnityEngine_SocialPlatforms.IAchievement[]>):void;
        
        public ReportScore($score: bigint, $board: string, $callback: System.Action$1<boolean>):void;
        
        public LoadScores($category: string, $callback: System.Action$1<UnityEngine_SocialPlatforms.IScore[]>):void;
        
        public LoadScores($board: UnityEngine_SocialPlatforms.ILeaderboard, $callback: System.Action$1<boolean>):void;
        
        public GetLoading($board: UnityEngine_SocialPlatforms.ILeaderboard):boolean;
        
        public ShowAchievementsUI():void;
        
        public ShowLeaderboardUI():void;
        
        public LoadUsers($userIds: string[], $callback: System.Action$1<UnityEngine_SocialPlatforms.IUserProfile[]>):void;
        
        public CreateLeaderboard():UnityEngine_SocialPlatforms.ILeaderboard;
        
        public CreateAchievement():UnityEngine_SocialPlatforms.IAchievement;
        
        public static ResetAllAchievements($callback: System.Action$1<boolean>):void;
        /**
         * Show the default iOS banner when achievements are completed.
         */
        public static ShowDefaultAchievementCompletionBanner($value: boolean):void;
        /**
         * Show the leaderboard UI with a specific leaderboard shown initially with a specific time scope selected.
         */
        public static ShowLeaderboardUI($leaderboardID: string, $timeScope: UnityEngine_SocialPlatforms.TimeScope):void;
        
                    
    }
    
}

