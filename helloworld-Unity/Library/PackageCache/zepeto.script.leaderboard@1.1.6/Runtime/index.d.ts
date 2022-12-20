//# signature=ZEPETO.Script.Leaderboard#dda98b330c6fdb7ca5eaa1a59b5f97cb#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Script.Leaderboard' {

    import * as System from 'System';
    import * as ZEPETO_World from 'ZEPETO.World';
        
    
    class LeaderboardAPI extends System.Object {
        
        public constructor();
        
        public static GetLeaderboard($leaderboardId: string, $onResult?: System.Action$1<GetLeaderboardResponse>, $onError?: System.Action$1<string>):void;
        
        public static GetAllLeaderboards($onResult?: System.Action$1<GetAllLeaderboardsResponse>, $onError?: System.Action$1<string>):void;
        
        public static GetRank($leaderboardId: string, $userIds: string[], $resetRule: ResetRule, $prevRanking?: boolean, $onResult?: System.Action$1<GetRankResponse>, $onError?: System.Action$1<string>):void;
        
        public static GetRangeRank($leaderboardId: string, $startRank: number, $endRank: number, $resetRule: ResetRule, $prevRanking?: boolean, $onResult?: System.Action$1<GetRangeRankResponse>, $onError?: System.Action$1<string>):void;
        
        public static SetScore($leaderboardId: string, $score: number, $extraInfo: string, $onResult?: System.Action$1<SetScoreResponse>, $onError?: System.Action$1<string>):void;
        
        public static SetScore($leaderboardId: string, $score: number, $onResult?: System.Action$1<SetScoreResponse>, $onError?: System.Action$1<string>):void;
        
                    
    }
    
    class GetLeaderboardResponse extends ResponseBase {
        
        public leaderboard: Leaderboard;
        
        public constructor();
        
                    
    }
    
    class ResponseBase extends System.Object {
        
        public isSuccess: boolean;
        
        public constructor();
        
                    
    }
    
    class GetAllLeaderboardsResponse extends ResponseBase {
        
        public leaderboards: Leaderboard[];
        
        public constructor();
        
                    
    }
    
    enum ResetRule { none = 0, day = 1, week = 2, month = 3 }
    
    class GetRankResponse extends ResponseBase {
        
        public rankInfo: RankInfo;
        
        public constructor();
        
                    
    }
    
    class GetRangeRankResponse extends ResponseBase {
        
        public rankInfo: RankInfo;
        
        public constructor();
        
                    
    }
    
    class SetScoreResponse extends ResponseBase {
        
        public constructor();
        
                    
    }
    
    class Leaderboard extends System.Object {
        
        public id: string;
        
        public name: string;
        
        public resetInfoList: ResetInfo[];
        
        public updateRule: UpdateRule;
        
        public constructor();
        
                    
    }
    
    class RankInfo extends System.Object {
        
        public myRank: Rank;
        
        public rankList: Rank[];
        
        public totalRankCount: bigint;
        
        public get Ranks(): Rank[];
        
        public get Members(): string[];
        
        public constructor();
        
                    
    }
    
    class ResetInfo extends System.Object {
        
        public day: number;
        
        public hour: number;
        
        public min: number;
        
        public resetRule: ResetRule;
        
        public sec: number;
        
        public weekDay: string;
        
        public constructor();
        
                    
    }
    
    enum UpdateRule { max_score = 0, min_score = 1, accumulate_score = 2 }
    
    class Rank extends System.Object {
        
        public extraInfo: string;
        
        public member: string;
        
        public rank: number;
        
        public score: number;
        
        public name: string;
        
        public profilePic: string;
        
        public constructor();
        
        public Overwrite($user: ZEPETO_World.Users):void;
        
                    
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
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
}
declare module 'ZEPETO.World' {

    import * as System from 'System';
        
    
    interface Users extends System.Object {
        
                    
    }
    
}

