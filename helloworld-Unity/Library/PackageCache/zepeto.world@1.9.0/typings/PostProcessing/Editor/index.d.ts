//# signature=Unity.Postprocessing.Editor#8a27ed27645cf621ef3cb6f8b6d975f0#0.0.4
// @ts-nocheck
declare module 'UnityEditor.Rendering.PostProcessing' {

    import * as System from 'System';
    import * as UnityEditor from 'UnityEditor';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Rendering_PostProcessing from 'UnityEngine.Rendering.PostProcessing';
    import * as UnityEngine_SceneManagement from 'UnityEngine.SceneManagement';
        
    
    class DecoratorAttribute extends System.Attribute {
        
        public attributeType: System.Type;
        
        public constructor($attributeType: System.Type);
        
                    
    }
    
    class PostProcessEditorAttribute extends System.Attribute {
        
        public settingsType: System.Type;
        
        public constructor($settingsType: System.Type);
        
                    
    }
    
    class AttributeDecorator extends System.Object {
        
        public IsAutoProperty():boolean;
        
        public OnGUI($property: UnityEditor.SerializedProperty, $overrideState: UnityEditor.SerializedProperty, $title: UnityEngine.GUIContent, $attribute: System.Attribute):boolean;
        
                    
    }
    
    class EffectListEditor extends System.Object {
        
        public get asset(): UnityEngine_Rendering_PostProcessing.PostProcessProfile;
        
        public constructor($editor: UnityEditor.Editor);
        
        public Init($asset: UnityEngine_Rendering_PostProcessing.PostProcessProfile, $serializedObject: UnityEditor.SerializedObject):void;
        
        public Clear():void;
        
        public OnGUI():void;
        
                    
    }
    
    class DefaultPostProcessEffectEditor extends PostProcessEffectBaseEditor {
        
        public constructor();
        
                    
    }
    
    class PostProcessEffectBaseEditor extends System.Object {
        
        public Repaint():void;
        
        public OnEnable():void;
        
        public OnDisable():void;
        
        public OnInspectorGUI():void;
        
        public GetDisplayTitle():string;
        
                    
    }
    
    class ProfileFactory extends System.Object {
        
        public constructor();
        
        public static CreatePostProcessProfileAtPath($path: string):UnityEngine_Rendering_PostProcessing.PostProcessProfile;
        
        public static CreatePostProcessProfile($scene: UnityEngine_SceneManagement.Scene, $targetName: string):UnityEngine_Rendering_PostProcessing.PostProcessProfile;
        
                    
    }
    
    class EditorUtilities extends System.Object {
        
        public static get isTargetingConsoles(): boolean;
        
        public static get isTargetingMobiles(): boolean;
        
        public static get isTargetingConsolesOrMobiles(): boolean;
        
        public static GetContent($textAndTooltip: string):UnityEngine.GUIContent;
        
        public static DrawFixMeBox($text: string, $action: System.Action):void;
        
        public static DrawSplitter():void;
        
        public static DrawOverrideCheckbox($rect: UnityEngine.Rect, $property: UnityEditor.SerializedProperty):void;
        
        public static DrawHeaderLabel($title: string):void;
        
                    
    }
    
    class SerializedParameterOverride extends System.Object {
        
        public get overrideState(): UnityEditor.SerializedProperty;
        
        public get value(): UnityEditor.SerializedProperty;
        
        public get attributes(): System.Attribute[];
        
        public get displayName(): string;
        
        public GetAttribute<T extends System.Attribute>():T;
        
                    
    }
    
    class Styling extends System.Object {
        
        public static smallTickbox: UnityEngine.GUIStyle;
        
        public static miniLabelButton: UnityEngine.GUIStyle;
        
        public static headerLabel: UnityEngine.GUIStyle;
        
        public static wheelLabel: UnityEngine.GUIStyle;
        
        public static wheelThumb: UnityEngine.GUIStyle;
        
        public static wheelThumbSize: UnityEngine.Vector2;
        
        public static preLabel: UnityEngine.GUIStyle;
        
        public static get splitter(): UnityEngine.Color;
        
        public static get paneOptionsIcon(): UnityEngine.Texture2D;
        
        public static get headerBackground(): UnityEngine.Color;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Attribute extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'UnityEditor' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * SerializedProperty and SerializedObject are classes for editing properties on objects in a completely generic way that automatically handles undo and styling UI for Prefabs.
     */
    interface SerializedProperty extends System.Object {
        
                    
    }
    /**
     * SerializedObject and SerializedProperty are classes for editing serialized fields on Object|Unity objects in a completely generic way. These classes automatically handle dirtying individual serialized fields so they will be processed by the Undo system and styled correctly for Prefab overrides when drawn in the Inspector.
     */
    interface SerializedObject extends System.Object {
        
                    
    }
    /**
     * Derive from this base class to create a custom inspector or editor for your custom object.
     */
    interface Editor extends UnityEngine.ScriptableObject {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * The contents of a GUI element.
     */
    interface GUIContent extends System.Object {
        
                    
    }
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
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
    /**
     * Styling information for GUI elements.
     */
    interface GUIStyle extends System.Object {
        
                    
    }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
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
    
}
declare module 'UnityEngine.Rendering.PostProcessing' {

    import * as UnityEngine from 'UnityEngine';
        
    
    interface PostProcessProfile extends UnityEngine.ScriptableObject {
        
                    
    }
    
}
declare module 'UnityEngine.SceneManagement' {

    import * as System from 'System';
        
    /**
     * Run-time data structure for *.unity file.
     */
    interface Scene extends System.ValueType {
        
                    
    }
    
}

