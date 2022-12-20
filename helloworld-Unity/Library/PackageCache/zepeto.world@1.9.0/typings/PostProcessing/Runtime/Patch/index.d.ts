
declare module 'UnityEngine.Rendering.PostProcessing' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
    import {PostProcessEffectSettings} from 'UnityEngine.Rendering.PostProcessing';
 
    interface PostProcessProfile extends UnityEngine.ScriptableObject {
        
        GetSetting($type: System.Type):boolean;
        TryGetSettings($type: System.Type, $outSetting: $Ref<PostProcessEffectSettings>):boolean;

    }
    
    
}