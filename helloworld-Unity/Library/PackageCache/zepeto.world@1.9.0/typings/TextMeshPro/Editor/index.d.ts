//# signature=Unity.TextMeshPro.Editor#1dbd8389a8a95886b012b487808fdb5b#0.0.4
// @ts-nocheck
declare module 'TMPro' {

    import * as System from 'System';
    import * as UnityEditor from 'UnityEditor';
    import * as UnityEditor_Build_Reporting from 'UnityEditor.Build.Reporting';
    import * as UnityEngine from 'UnityEngine';
        
    
    class TMP_FontAsset_CreationMenu extends System.Object {
        
        public static CreateFontAssetVariant():void;
        
        public static CreateFontAsset():void;
        
                    
    }
    
    class TMP_ProjectConversionUtility extends UnityEditor.EditorWindow {
        
        public constructor();
        
                    
    }
    
    class TMP_PackageUtilities extends UnityEditor.Editor {
        
        public constructor();
        
        public static ImportProjectResourcesMenu():void;
        
        public static ImportExamplesContentMenu():void;
        
                    
    }
    
    class TMP_PostBuildProcessHandler extends System.Object {
        
        public constructor();
        
        public static OnPostprocessBuild($target: UnityEditor.BuildTarget, $pathToBuiltProject: string):void;
        
                    
    }
    
    class TMP_PreBuildProcessor extends System.Object {
        
        public get callbackOrder(): number;
        
        public constructor();
        
        public OnPreprocessBuild($report: UnityEditor_Build_Reporting.BuildReport):void;
        
                    
    }
    
    class TMP_SpriteAssetImporter extends UnityEditor.EditorWindow {
        
        public constructor();
        
        public static ShowFontAtlasCreatorWindow():void;
        
        public OnGUI():void;
        
                    
    }
    
    class SortingLayerHelper extends System.Object {
        
        public static get sortingLayerNames(): string[];
        
                    
    }
    
    interface TMP_FontAsset extends TMP_Asset {
        
                    
    }
    
    interface TMP_Asset extends UnityEngine.ScriptableObject {
        
                    
    }
    
    interface TMP_FontFeatureTable extends System.Object {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
}
declare module 'UnityEditor' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    /**
     * Derive from this class to create an editor window.
     */
    interface EditorWindow extends UnityEngine.ScriptableObject {
        
                    
    }
    /**
     * Derive from this base class to create a custom inspector or editor for your custom object.
     */
    interface Editor extends UnityEngine.ScriptableObject {
        
                    
    }
    /**
     * Target build platform.
     */
    enum BuildTarget { StandaloneOSX = 2, StandaloneOSXUniversal = 3, StandaloneOSXIntel = 4, StandaloneWindows = 5, WebPlayer = 6, WebPlayerStreamed = 7, iOS = 9, PS3 = 10, XBOX360 = 11, Android = 13, StandaloneLinux = 17, StandaloneWindows64 = 19, WebGL = 20, WSAPlayer = 21, StandaloneLinux64 = 24, StandaloneLinuxUniversal = 25, WP8Player = 26, StandaloneOSXIntel64 = 27, BlackBerry = 28, Tizen = 29, PSP2 = 30, PS4 = 31, PSM = 32, XboxOne = 33, SamsungTV = 34, N3DS = 35, WiiU = 36, tvOS = 37, Switch = 38, Lumin = 39, Stadia = 40, CloudRendering = 41, GameCoreScarlett = 42, GameCoreXboxSeries = 42, GameCoreXboxOne = 43, PS5 = 44, iPhone = -1, BB10 = -1, MetroPlayer = -1, NoTarget = -2 }
    /**
     * Base class to derive custom property drawers from. Use this to create custom drawers for your own Serializable classes or for script variables with custom PropertyAttributes.
     */
    interface PropertyDrawer extends GUIDrawer {
        
                    
    }
    /**
     * Base class for PropertyDrawer and DecoratorDrawer.
     */
    interface GUIDrawer extends System.Object {
        
                    
    }
    /**
     * SerializedProperty and SerializedObject are classes for editing properties on objects in a completely generic way that automatically handles undo and styling UI for Prefabs.
     */
    interface SerializedProperty extends System.Object {
        
                    
    }
    /**
     * Abstract class to derive from for defining custom GUI for shader properties and for extending the material preview.
     */
    interface ShaderGUI extends System.Object {
        
                    
    }
    /**
     * The Unity Material Editor.
     */
    interface MaterialEditor extends Editor {
        
                    
    }
    /**
     * Describes information and value of a single shader property.
     */
    interface MaterialProperty extends System.Object {
        
                    
    }
    /**
     * Used to extract the context for a MenuItem.
     */
    interface MenuCommand extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
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
     * The contents of a GUI element.
     */
    interface GUIContent extends System.Object {
        
                    
    }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * Styling information for GUI elements.
     */
    interface GUIStyle extends System.Object {
        
                    
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
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Script interface for.
     */
    interface Font extends Object {
        
                    
    }
    
}
declare module 'UnityEditor.Build.Reporting' {

    import * as UnityEngine from 'UnityEngine';
        
    /**
     * The BuildReport API gives you information about the Unity build process.
     */
    interface BuildReport extends UnityEngine.Object {
        
                    
    }
    
}
declare module 'TMPro.EditorUtilities' {

    import * as UnityEditor from 'UnityEditor';
    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
    import * as UnityEditor_UI from 'UnityEditor.UI';
    import * as System_Collections from 'System.Collections';
    import * as TMPro from 'TMPro';
        
    
    class GlyphMetricsPropertyDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
                    
    }
    
    class GlyphRectPropertyDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
                    
    }
    
    class TMP_BaseEditorPanel extends UnityEditor.Editor {
        
        public selAlignGridA: number;
        
        public selAlignGridB: number;
        
        public OnInspectorGUI():void;
        
        public OnSceneGUI():void;
        
                    
    }
    
    class TMP_BaseShaderGUI extends UnityEditor.ShaderGUI {
        
        public OnGUI($materialEditor: UnityEditor.MaterialEditor, $properties: UnityEditor.MaterialProperty[]):void;
        
        public EndPanel():void;
        
                    
    }
    
    class TMP_BitmapShaderGUI extends TMP_BaseShaderGUI {
        
        public constructor();
        
                    
    }
    
    class TMP_CharacterPropertyDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
                    
    }
    
    class TMP_ColorGradientAssetMenu extends System.Object {
        
        public static CreateColorGradient($context: UnityEditor.MenuCommand):void;
        
                    
    }
    
    class TMP_ColorGradientEditor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class DropdownEditor extends UnityEditor_UI.SelectableEditor {
        
        public constructor();
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_EditorCoroutine extends System.Object {
        
        public static StartCoroutine($routine: System_Collections.IEnumerator):TMP_EditorCoroutine;
        
        public Stop():void;
        
                    
    }
    
    class TMP_EditorPanel extends TMP_BaseEditorPanel {
        
        public constructor();
        
                    
    }
    
    class TMP_EditorPanelUI extends TMP_BaseEditorPanel {
        
        public constructor();
        
                    
    }
    
    class TMP_EditorUtility extends System.Object {
        
        public static get packageRelativePath(): string;
        
        public static get packageFullPath(): string;
        
        public static RepaintAll():void;
        
        public static CreateAsset<T extends UnityEngine.ScriptableObject>($name: string):T;
        
        public static FindMaterialReferences($fontAsset: TMPro.TMP_FontAsset):UnityEngine.Material[];
        
        public static FindMatchingFontAsset($mat: UnityEngine.Material):TMPro.TMP_FontAsset;
        
        public static GetDecimalCharacterSequence($characterSet: number[]):string;
        
        public static GetUnicodeCharacterSequence($characterSet: number[]):string;
        
        public static DrawBox($rect: UnityEngine.Rect, $thickness: number, $color: UnityEngine.Color):void;
        
        public static GetHorizontalAlignmentGridValue($value: number):number;
        
        public static GetVerticalAlignmentGridValue($value: number):number;
        
        public static DrawColorProperty($rect: UnityEngine.Rect, $property: UnityEditor.SerializedProperty):void;
        
        public static EditorToggle($position: UnityEngine.Rect, $value: boolean, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle):boolean;
        
                    
    }
    
    class FontWeightDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
                    
    }
    
    class TMP_FontAssetEditor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnEnable():void;
        
        public OnDisable():void;
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_GlyphPairAdjustmentRecordPropertyDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
                    
    }
    
    class TMP_GlyphPropertyDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
                    
    }
    
    class TMP_InputFieldEditor extends UnityEditor_UI.SelectableEditor {
        
        public constructor();
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_SDFShaderGUI extends TMP_BaseShaderGUI {
        
        public constructor();
        
                    
    }
    
    class TMP_SettingsEditor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnEnable():void;
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_SpriteAssetEditor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnEnable():void;
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_SpriteAssetMenu extends System.Object {
        
        public static CreateSpriteAsset():void;
        
                    
    }
    
    class TMP_SpriteCharacterPropertyDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
                    
    }
    
    class TMP_SpriteGlyphPropertyDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
                    
    }
    
    class TMP_StyleAssetMenu extends System.Object {
        
        public static CreateTextMeshProObjectPerform():void;
        
                    
    }
    
    class StyleDrawer extends UnityEditor.PropertyDrawer {
        
        public static height: number;
        
        public constructor();
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
                    
    }
    
    class TMP_StyleEditor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_SubMeshUI_Editor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnEnable():void;
        
        public OnDisable():void;
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_SubMesh_Editor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnEnable():void;
        
        public OnInspectorGUI():void;
        
                    
    }
    
    class TMP_TextAlignmentDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
                    
    }
    
    class TMP_HorizontalAlignmentDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
                    
    }
    
    class TMP_VerticalAlignmentDrawer extends UnityEditor.PropertyDrawer {
        
        public constructor();
        
        public GetPropertyHeight($property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):number;
        
        public OnGUI($position: UnityEngine.Rect, $property: UnityEditor.SerializedProperty, $label: UnityEngine.GUIContent):void;
        
                    
    }
    
    class TMP_UIStyleManager extends System.Object {
        
        public static label: UnityEngine.GUIStyle;
        
        public static textAreaBoxWindow: UnityEngine.GUIStyle;
        
        public static boldFoldout: UnityEngine.GUIStyle;
        
        public static panelTitle: UnityEngine.GUIStyle;
        
        public static sectionHeader: UnityEngine.GUIStyle;
        
        public static centeredLabel: UnityEngine.GUIStyle;
        
        public static rightLabel: UnityEngine.GUIStyle;
        
        public static wrappingTextArea: UnityEngine.GUIStyle;
        
        public static alignmentButtonLeft: UnityEngine.GUIStyle;
        
        public static alignmentButtonMid: UnityEngine.GUIStyle;
        
        public static alignmentButtonRight: UnityEngine.GUIStyle;
        
        public static alignLeft: UnityEngine.Texture2D;
        
        public static alignCenter: UnityEngine.Texture2D;
        
        public static alignRight: UnityEngine.Texture2D;
        
        public static alignJustified: UnityEngine.Texture2D;
        
        public static alignFlush: UnityEngine.Texture2D;
        
        public static alignGeoCenter: UnityEngine.Texture2D;
        
        public static alignTop: UnityEngine.Texture2D;
        
        public static alignMiddle: UnityEngine.Texture2D;
        
        public static alignBottom: UnityEngine.Texture2D;
        
        public static alignBaseline: UnityEngine.Texture2D;
        
        public static alignMidline: UnityEngine.Texture2D;
        
        public static alignCapline: UnityEngine.Texture2D;
        
        public static sectionHeaderTexture: UnityEngine.Texture2D;
        
        public static alignContentA: UnityEngine.GUIContent[];
        
        public static alignContentB: UnityEngine.GUIContent[];
        
                    
    }
    
    class TMP_ContextMenus extends UnityEditor.Editor {
        
        public constructor();
        
                    
    }
    
    class TMPro_CreateObjectMenu extends System.Object {
        
        public static AddButton($menuCommand: UnityEditor.MenuCommand):void;
        
        public static AddDropdown($menuCommand: UnityEditor.MenuCommand):void;
        
        public static CreateNewUI():UnityEngine.GameObject;
        
        public static GetOrCreateCanvasGameObject():UnityEngine.GameObject;
        
                    
    }
    
    class EditorShaderUtilities extends System.Object {
        
        public static CopyMaterialProperties($source: UnityEngine.Material, $destination: UnityEngine.Material):void;
        
                    
    }
    
    class TMPro_FontAssetCreatorWindow extends UnityEditor.EditorWindow {
        
        public constructor();
        
        public static ShowFontAtlasCreatorWindow():void;
        
        public static ShowFontAtlasCreatorWindow($sourceFontFile: UnityEngine.Font):void;
        
        public static ShowFontAtlasCreatorWindow($fontAsset: TMPro.TMP_FontAsset):void;
        
        public OnEnable():void;
        
        public OnDisable():void;
        
        public OnGUI():void;
        
        public Update():void;
        
        public GetKerningTable():TMPro.TMP_FontFeatureTable;
        
                    
    }
    
    class TMPro_TextContainerEditor extends UnityEditor.Editor {
        
        public constructor();
        
        public OnInspectorGUI():void;
        
                    
    }
    
}
declare module 'UnityEditor.UI' {

    import * as UnityEditor from 'UnityEditor';
        
    
    interface SelectableEditor extends UnityEditor.Editor {
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IEnumerator {
        
                    
    }
    
}

