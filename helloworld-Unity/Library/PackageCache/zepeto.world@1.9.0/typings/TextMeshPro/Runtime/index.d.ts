//# signature=Unity.TextMeshPro#b4fc127d0ff62da32329ea67a6db1e2a#0.0.4
// @ts-nocheck
declare module 'TMPro' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_TextCore_LowLevel from 'UnityEngine.TextCore.LowLevel';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_TextCore from 'UnityEngine.TextCore';
    import * as TMPro_TMP_DefaultControls from 'TMPro.TMP_DefaultControls';
    import * as UnityEngine_UI from 'UnityEngine.UI';
    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems';
    import * as TMPro_TMP_Dropdown from 'TMPro.TMP_Dropdown';
    import * as System_Text from 'System.Text';
    import * as TMPro_TMP_InputField from 'TMPro.TMP_InputField';
    import * as UnityEditor from 'UnityEditor';
    import * as TMPro_TMP_Settings from 'TMPro.TMP_Settings';
    import * as RootNamespace from 'RootNamespace';
        
    
    class FastAction extends System.Object {
        
        public constructor();
        
        public Add($rhs: System.Action):void;
        
        public Remove($rhs: System.Action):void;
        
        public Call():void;
        
                    
    }
    
    interface ITextPreprocessor {
        
        PreprocessText($text: string):string;
        
                    
    }
    
    class MaterialReferenceManager extends System.Object {
        
        public static get instance(): MaterialReferenceManager;
        
        public constructor();
        
        public static AddFontAsset($fontAsset: TMP_FontAsset):void;
        
        public static AddSpriteAsset($spriteAsset: TMP_SpriteAsset):void;
        
        public static AddSpriteAsset($hashCode: number, $spriteAsset: TMP_SpriteAsset):void;
        
        public static AddFontMaterial($hashCode: number, $material: UnityEngine.Material):void;
        
        public static AddColorGradientPreset($hashCode: number, $spriteAsset: TMP_ColorGradient):void;
        
        public Contains($font: TMP_FontAsset):boolean;
        
        public Contains($sprite: TMP_SpriteAsset):boolean;
        
        public static TryGetFontAsset($hashCode: number, $fontAsset: $Ref<TMP_FontAsset>):boolean;
        
        public static TryGetSpriteAsset($hashCode: number, $spriteAsset: $Ref<TMP_SpriteAsset>):boolean;
        
        public static TryGetColorGradientPreset($hashCode: number, $gradientPreset: $Ref<TMP_ColorGradient>):boolean;
        
        public static TryGetMaterial($hashCode: number, $material: $Ref<UnityEngine.Material>):boolean;
        
                    
    }
    
    class TMP_FontAsset extends TMP_Asset {
        
        public atlas: UnityEngine.Texture2D;
        
        public normalStyle: number;
        
        public normalSpacingOffset: number;
        
        public boldStyle: number;
        
        public boldSpacing: number;
        
        public italicStyle: number;
        
        public tabSize: number;
        
        public get version(): string;
        
        public get sourceFontFile(): UnityEngine.Font;
        
        public get atlasPopulationMode(): AtlasPopulationMode;
        public set atlasPopulationMode(value: AtlasPopulationMode);
        
        public get faceInfo(): UnityEngine_TextCore.FaceInfo;
        public set faceInfo(value: UnityEngine_TextCore.FaceInfo);
        
        public get glyphTable(): System_Collections_Generic.List$1<UnityEngine_TextCore.Glyph>;
        
        public get glyphLookupTable(): System_Collections_Generic.Dictionary$2<number, UnityEngine_TextCore.Glyph>;
        
        public get characterTable(): System_Collections_Generic.List$1<TMP_Character>;
        
        public get characterLookupTable(): System_Collections_Generic.Dictionary$2<number, TMP_Character>;
        
        public get atlasTexture(): UnityEngine.Texture2D;
        
        public get atlasTextures(): UnityEngine.Texture2D[];
        public set atlasTextures(value: UnityEngine.Texture2D[]);
        
        public get atlasTextureCount(): number;
        
        public get isMultiAtlasTexturesEnabled(): boolean;
        public set isMultiAtlasTexturesEnabled(value: boolean);
        
        public get atlasWidth(): number;
        
        public get atlasHeight(): number;
        
        public get atlasPadding(): number;
        
        public get atlasRenderMode(): UnityEngine_TextCore_LowLevel.GlyphRenderMode;
        
        public get fontFeatureTable(): TMP_FontFeatureTable;
        
        public get fallbackFontAssetTable(): System_Collections_Generic.List$1<TMP_FontAsset>;
        public set fallbackFontAssetTable(value: System_Collections_Generic.List$1<TMP_FontAsset>);
        
        public get creationSettings(): FontAssetCreationSettings;
        public set creationSettings(value: FontAssetCreationSettings);
        
        public get fontWeightTable(): TMP_FontWeightPair[];
        
        public constructor();
        
        public static CreateFontAsset($font: UnityEngine.Font):TMP_FontAsset;
        
        public static CreateFontAsset($font: UnityEngine.Font, $samplingPointSize: number, $atlasPadding: number, $renderMode: UnityEngine_TextCore_LowLevel.GlyphRenderMode, $atlasWidth: number, $atlasHeight: number, $atlasPopulationMode?: AtlasPopulationMode, $enableMultiAtlasSupport?: boolean):TMP_FontAsset;
        
        public ReadFontAssetDefinition():void;
        
        public HasCharacter($character: number):boolean;
        
        public HasCharacter($character: number, $searchFallbacks?: boolean, $tryAddCharacter?: boolean):boolean;
        
        public HasCharacters($text: string, $missingCharacters: $Ref<System_Collections_Generic.List$1<number>>):boolean;
        
        public HasCharacters($text: string, $missingCharacters: $Ref<number[]>, $searchFallbacks?: boolean, $tryAddCharacter?: boolean):boolean;
        
        public HasCharacters($text: string):boolean;
        
        public static GetCharacters($fontAsset: TMP_FontAsset):string;
        
        public static GetCharactersArray($fontAsset: TMP_FontAsset):number[];
        
        public TryAddCharacters($unicodes: number[], $includeFontFeatures?: boolean):boolean;
        
        public TryAddCharacters($unicodes: number[], $missingUnicodes: $Ref<number[]>, $includeFontFeatures?: boolean):boolean;
        
        public TryAddCharacters($characters: string, $includeFontFeatures?: boolean):boolean;
        
        public TryAddCharacters($characters: string, $missingCharacters: $Ref<string>, $includeFontFeatures?: boolean):boolean;
        
        public ClearFontAssetData($setAtlasSizeToZero?: boolean):void;
        
                    
    }
    
    class TMP_Asset extends UnityEngine.ScriptableObject {
        
        public hashCode: number;
        
        public material: UnityEngine.Material;
        
        public materialHashCode: number;
        
        public get instanceID(): number;
        
                    
    }
    
    class TMP_SpriteAsset extends TMP_Asset {
        
        public spriteSheet: UnityEngine.Texture;
        
        public spriteInfoList: System_Collections_Generic.List$1<TMP_Sprite>;
        
        public fallbackSpriteAssets: System_Collections_Generic.List$1<TMP_SpriteAsset>;
        
        public get version(): string;
        
        public get faceInfo(): UnityEngine_TextCore.FaceInfo;
        
        public get spriteCharacterTable(): System_Collections_Generic.List$1<TMP_SpriteCharacter>;
        
        public get spriteCharacterLookupTable(): System_Collections_Generic.Dictionary$2<number, TMP_SpriteCharacter>;
        
        public get spriteGlyphTable(): System_Collections_Generic.List$1<TMP_SpriteGlyph>;
        
        public constructor();
        
        public UpdateLookupTables():void;
        
        public GetSpriteIndexFromHashcode($hashCode: number):number;
        
        public GetSpriteIndexFromUnicode($unicode: number):number;
        
        public GetSpriteIndexFromName($name: string):number;
        
        public static SearchForSpriteByUnicode($spriteAsset: TMP_SpriteAsset, $unicode: number, $includeFallbacks: boolean, $spriteIndex: $Ref<number>):TMP_SpriteAsset;
        
        public static SearchForSpriteByHashCode($spriteAsset: TMP_SpriteAsset, $hashCode: number, $includeFallbacks: boolean, $spriteIndex: $Ref<number>):TMP_SpriteAsset;
        
        public SortGlyphTable():void;
        
                    
    }
    
    class TMP_ColorGradient extends UnityEngine.ScriptableObject {
        
        public colorMode: ColorMode;
        
        public topLeft: UnityEngine.Color;
        
        public topRight: UnityEngine.Color;
        
        public bottomLeft: UnityEngine.Color;
        
        public bottomRight: UnityEngine.Color;
        
        public constructor();
        
        public constructor($color: UnityEngine.Color);
        
        public constructor($color0: UnityEngine.Color, $color1: UnityEngine.Color, $color2: UnityEngine.Color, $color3: UnityEngine.Color);
        
                    
    }
    
    class TMP_MaterialReference extends System.ValueType {
        
        public material: UnityEngine.Material;
        
        public referenceCount: number;
        
                    
    }
    
    class MaterialReference extends System.ValueType {
        
        public index: number;
        
        public fontAsset: TMP_FontAsset;
        
        public spriteAsset: TMP_SpriteAsset;
        
        public material: UnityEngine.Material;
        
        public isDefaultMaterial: boolean;
        
        public isFallbackMaterial: boolean;
        
        public fallbackMaterial: UnityEngine.Material;
        
        public padding: number;
        
        public referenceCount: number;
        
        public constructor($index: number, $fontAsset: TMP_FontAsset, $spriteAsset: TMP_SpriteAsset, $material: UnityEngine.Material, $padding: number);
        
        public static Contains($materialReferences: MaterialReference[], $fontAsset: TMP_FontAsset):boolean;
        
        public static AddMaterialReference($material: UnityEngine.Material, $fontAsset: TMP_FontAsset, $materialReferences: $Ref<MaterialReference[]>, $materialReferenceIndexLookup: System_Collections_Generic.Dictionary$2<number, number>):number;
        
        public static AddMaterialReference($material: UnityEngine.Material, $spriteAsset: TMP_SpriteAsset, $materialReferences: $Ref<MaterialReference[]>, $materialReferenceIndexLookup: System_Collections_Generic.Dictionary$2<number, number>):number;
        
                    
    }
    
    class TMP_Character extends TMP_TextElement {
        
        public constructor();
        
        public constructor($unicode: number, $glyph: UnityEngine_TextCore.Glyph);
        
        public constructor($unicode: number, $fontAsset: TMP_FontAsset, $glyph: UnityEngine_TextCore.Glyph);
        
                    
    }
    
    class TMP_TextElement extends System.Object {
        
        public get elementType(): TextElementType;
        
        public get unicode(): number;
        public set unicode(value: number);
        
        public get textAsset(): TMP_Asset;
        public set textAsset(value: TMP_Asset);
        
        public get glyph(): UnityEngine_TextCore.Glyph;
        public set glyph(value: UnityEngine_TextCore.Glyph);
        
        public get glyphIndex(): number;
        public set glyphIndex(value: number);
        
        public get scale(): number;
        public set scale(value: number);
        
        public constructor();
        
                    
    }
    
    class TMP_Vertex extends System.ValueType {
        
        public position: UnityEngine.Vector3;
        
        public uv: UnityEngine.Vector2;
        
        public uv2: UnityEngine.Vector2;
        
        public uv4: UnityEngine.Vector2;
        
        public color: UnityEngine.Color32;
        
        public static get zero(): TMP_Vertex;
        
        public get_Clone(): TMP_Vertex;            
    }
    
    class TMP_Offset extends System.ValueType {
        
        public get left(): number;
        public set left(value: number);
        
        public get right(): number;
        public set right(value: number);
        
        public get top(): number;
        public set top(value: number);
        
        public get bottom(): number;
        public set bottom(value: number);
        
        public get horizontal(): number;
        public set horizontal(value: number);
        
        public get vertical(): number;
        public set vertical(value: number);
        
        public static get zero(): TMP_Offset;
        
        public constructor($left: number, $right: number, $top: number, $bottom: number);
        
        public constructor($horizontal: number, $vertical: number);
        
        public static op_Equality($lhs: TMP_Offset, $rhs: TMP_Offset):boolean;
        
        public static op_Inequality($lhs: TMP_Offset, $rhs: TMP_Offset):boolean;
        
        public static op_Multiply($a: TMP_Offset, $b: number):TMP_Offset;
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: TMP_Offset):boolean;
        
        public get_Clone(): TMP_Offset;            
    }
    
    class HighlightState extends System.ValueType {
        
        public color: UnityEngine.Color32;
        
        public padding: TMP_Offset;
        
        public constructor($color: UnityEngine.Color32, $padding: TMP_Offset);
        
        public static op_Equality($lhs: HighlightState, $rhs: HighlightState):boolean;
        
        public static op_Inequality($lhs: HighlightState, $rhs: HighlightState):boolean;
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: HighlightState):boolean;
        
        public get_Clone(): HighlightState;            
    }
    
    class TMP_CharacterInfo extends System.ValueType {
        
        public character: number;
        
        public index: number;
        
        public stringLength: number;
        
        public elementType: TMP_TextElementType;
        
        public textElement: TMP_TextElement;
        
        public fontAsset: TMP_FontAsset;
        
        public spriteAsset: TMP_SpriteAsset;
        
        public spriteIndex: number;
        
        public material: UnityEngine.Material;
        
        public materialReferenceIndex: number;
        
        public isUsingAlternateTypeface: boolean;
        
        public pointSize: number;
        
        public lineNumber: number;
        
        public pageNumber: number;
        
        public vertexIndex: number;
        
        public vertex_BL: TMP_Vertex;
        
        public vertex_TL: TMP_Vertex;
        
        public vertex_TR: TMP_Vertex;
        
        public vertex_BR: TMP_Vertex;
        
        public topLeft: UnityEngine.Vector3;
        
        public bottomLeft: UnityEngine.Vector3;
        
        public topRight: UnityEngine.Vector3;
        
        public bottomRight: UnityEngine.Vector3;
        
        public origin: number;
        
        public xAdvance: number;
        
        public ascender: number;
        
        public baseLine: number;
        
        public descender: number;
        
        public aspectRatio: number;
        
        public scale: number;
        
        public color: UnityEngine.Color32;
        
        public underlineColor: UnityEngine.Color32;
        
        public underlineVertexIndex: number;
        
        public strikethroughColor: UnityEngine.Color32;
        
        public strikethroughVertexIndex: number;
        
        public highlightColor: UnityEngine.Color32;
        
        public highlightState: HighlightState;
        
        public style: FontStyles;
        
        public isVisible: boolean;
        
                    
    }
    
    enum TMP_TextElementType { Character = 0, Sprite = 1 }
    
    enum FontStyles { Normal = 0, Bold = 1, Italic = 2, Underline = 4, LowerCase = 8, UpperCase = 16, SmallCaps = 32, Strikethrough = 64, Superscript = 128, Subscript = 256, Highlight = 512 }
    
    enum ColorMode { Single = 0, HorizontalGradient = 1, VerticalGradient = 2, FourCornersGradient = 3 }
    
    class TMP_Compatibility extends System.Object {
        
        public static ConvertTextAlignmentEnumValues($oldValue: TextAlignmentOptions):TextAlignmentOptions;
        
                    
    }
    
    enum TextAlignmentOptions { TopLeft = 257, Top = 258, TopRight = 260, TopJustified = 264, TopFlush = 272, TopGeoAligned = 288, Left = 513, Center = 514, Right = 516, Justified = 520, Flush = 528, CenterGeoAligned = 544, BottomLeft = 1025, Bottom = 1026, BottomRight = 1028, BottomJustified = 1032, BottomFlush = 1040, BottomGeoAligned = 1056, BaselineLeft = 2049, Baseline = 2050, BaselineRight = 2052, BaselineJustified = 2056, BaselineFlush = 2064, BaselineGeoAligned = 2080, MidlineLeft = 4097, Midline = 4098, MidlineRight = 4100, MidlineJustified = 4104, MidlineFlush = 4112, MidlineGeoAligned = 4128, CaplineLeft = 8193, Capline = 8194, CaplineRight = 8196, CaplineJustified = 8200, CaplineFlush = 8208, CaplineGeoAligned = 8224, Converted = 65535 }
    
    class TMP_DefaultControls extends System.Object {
        
        public static CreateScrollbar($resources: TMPro_TMP_DefaultControls.Resources):UnityEngine.GameObject;
        
        public static CreateButton($resources: TMPro_TMP_DefaultControls.Resources):UnityEngine.GameObject;
        
        public static CreateText($resources: TMPro_TMP_DefaultControls.Resources):UnityEngine.GameObject;
        
        public static CreateInputField($resources: TMPro_TMP_DefaultControls.Resources):UnityEngine.GameObject;
        
        public static CreateDropdown($resources: TMPro_TMP_DefaultControls.Resources):UnityEngine.GameObject;
        
                    
    }
    
    class TMP_Dropdown extends UnityEngine_UI.Selectable {
        
        public get template(): UnityEngine.RectTransform;
        public set template(value: UnityEngine.RectTransform);
        
        public get captionText(): TMP_Text;
        public set captionText(value: TMP_Text);
        
        public get captionImage(): UnityEngine_UI.Image;
        public set captionImage(value: UnityEngine_UI.Image);
        
        public get placeholder(): UnityEngine_UI.Graphic;
        public set placeholder(value: UnityEngine_UI.Graphic);
        
        public get itemText(): TMP_Text;
        public set itemText(value: TMP_Text);
        
        public get itemImage(): UnityEngine_UI.Image;
        public set itemImage(value: UnityEngine_UI.Image);
        
        public get options(): System_Collections_Generic.List$1<TMPro_TMP_Dropdown.OptionData>;
        public set options(value: System_Collections_Generic.List$1<TMPro_TMP_Dropdown.OptionData>);
        
        public get onValueChanged(): TMPro_TMP_Dropdown.DropdownEvent;
        public set onValueChanged(value: TMPro_TMP_Dropdown.DropdownEvent);
        
        public get alphaFadeSpeed(): number;
        public set alphaFadeSpeed(value: number);
        
        public get value(): number;
        public set value(value: number);
        
        public get IsExpanded(): boolean;
        
        public SetValueWithoutNotify($input: number):void;
        
        public RefreshShownValue():void;
        
        public AddOptions($options: System_Collections_Generic.List$1<TMPro_TMP_Dropdown.OptionData>):void;
        
        public AddOptions($options: System_Collections_Generic.List$1<string>):void;
        
        public AddOptions($options: System_Collections_Generic.List$1<UnityEngine.Sprite>):void;
        
        public ClearOptions():void;
        
        public OnPointerClick($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnSubmit($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
        public OnCancel($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
        public Show():void;
        
        public Hide():void;
        
                    
    }
    
    class TMP_Text extends UnityEngine_UI.MaskableGraphic {
        
        public get text(): string;
        public set text(value: string);
        
        public get textPreprocessor(): ITextPreprocessor;
        public set textPreprocessor(value: ITextPreprocessor);
        
        public get isRightToLeftText(): boolean;
        public set isRightToLeftText(value: boolean);
        
        public get font(): TMP_FontAsset;
        public set font(value: TMP_FontAsset);
        
        public get fontSharedMaterial(): UnityEngine.Material;
        public set fontSharedMaterial(value: UnityEngine.Material);
        
        public get fontSharedMaterials(): UnityEngine.Material[];
        public set fontSharedMaterials(value: UnityEngine.Material[]);
        
        public get fontMaterial(): UnityEngine.Material;
        public set fontMaterial(value: UnityEngine.Material);
        
        public get fontMaterials(): UnityEngine.Material[];
        public set fontMaterials(value: UnityEngine.Material[]);
        
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        
        public get alpha(): number;
        public set alpha(value: number);
        
        public get enableVertexGradient(): boolean;
        public set enableVertexGradient(value: boolean);
        
        public get colorGradient(): VertexGradient;
        public set colorGradient(value: VertexGradient);
        
        public get colorGradientPreset(): TMP_ColorGradient;
        public set colorGradientPreset(value: TMP_ColorGradient);
        
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        
        public get tintAllSprites(): boolean;
        public set tintAllSprites(value: boolean);
        
        public get styleSheet(): TMP_StyleSheet;
        public set styleSheet(value: TMP_StyleSheet);
        
        public get textStyle(): TMP_Style;
        public set textStyle(value: TMP_Style);
        
        public get overrideColorTags(): boolean;
        public set overrideColorTags(value: boolean);
        
        public get faceColor(): UnityEngine.Color32;
        public set faceColor(value: UnityEngine.Color32);
        
        public get outlineColor(): UnityEngine.Color32;
        public set outlineColor(value: UnityEngine.Color32);
        
        public get outlineWidth(): number;
        public set outlineWidth(value: number);
        
        public get fontSize(): number;
        public set fontSize(value: number);
        
        public get fontWeight(): FontWeight;
        public set fontWeight(value: FontWeight);
        
        public get pixelsPerUnit(): number;
        
        public get enableAutoSizing(): boolean;
        public set enableAutoSizing(value: boolean);
        
        public get fontSizeMin(): number;
        public set fontSizeMin(value: number);
        
        public get fontSizeMax(): number;
        public set fontSizeMax(value: number);
        
        public get fontStyle(): FontStyles;
        public set fontStyle(value: FontStyles);
        
        public get isUsingBold(): boolean;
        
        public get horizontalAlignment(): HorizontalAlignmentOptions;
        public set horizontalAlignment(value: HorizontalAlignmentOptions);
        
        public get verticalAlignment(): VerticalAlignmentOptions;
        public set verticalAlignment(value: VerticalAlignmentOptions);
        
        public get alignment(): TextAlignmentOptions;
        public set alignment(value: TextAlignmentOptions);
        
        public get characterSpacing(): number;
        public set characterSpacing(value: number);
        
        public get wordSpacing(): number;
        public set wordSpacing(value: number);
        
        public get lineSpacing(): number;
        public set lineSpacing(value: number);
        
        public get lineSpacingAdjustment(): number;
        public set lineSpacingAdjustment(value: number);
        
        public get paragraphSpacing(): number;
        public set paragraphSpacing(value: number);
        
        public get characterWidthAdjustment(): number;
        public set characterWidthAdjustment(value: number);
        
        public get enableWordWrapping(): boolean;
        public set enableWordWrapping(value: boolean);
        
        public get wordWrappingRatios(): number;
        public set wordWrappingRatios(value: number);
        
        public get overflowMode(): TextOverflowModes;
        public set overflowMode(value: TextOverflowModes);
        
        public get isTextOverflowing(): boolean;
        
        public get firstOverflowCharacterIndex(): number;
        
        public get linkedTextComponent(): TMP_Text;
        public set linkedTextComponent(value: TMP_Text);
        
        public get isTextTruncated(): boolean;
        
        public get enableKerning(): boolean;
        public set enableKerning(value: boolean);
        
        public get extraPadding(): boolean;
        public set extraPadding(value: boolean);
        
        public get richText(): boolean;
        public set richText(value: boolean);
        
        public get parseCtrlCharacters(): boolean;
        public set parseCtrlCharacters(value: boolean);
        
        public get isOverlay(): boolean;
        public set isOverlay(value: boolean);
        
        public get isOrthographic(): boolean;
        public set isOrthographic(value: boolean);
        
        public get enableCulling(): boolean;
        public set enableCulling(value: boolean);
        
        public get ignoreVisibility(): boolean;
        public set ignoreVisibility(value: boolean);
        
        public get horizontalMapping(): TextureMappingOptions;
        public set horizontalMapping(value: TextureMappingOptions);
        
        public get verticalMapping(): TextureMappingOptions;
        public set verticalMapping(value: TextureMappingOptions);
        
        public get mappingUvLineOffset(): number;
        public set mappingUvLineOffset(value: number);
        
        public get renderMode(): TextRenderFlags;
        public set renderMode(value: TextRenderFlags);
        
        public get geometrySortingOrder(): VertexSortingOrder;
        public set geometrySortingOrder(value: VertexSortingOrder);
        
        public get isTextObjectScaleStatic(): boolean;
        public set isTextObjectScaleStatic(value: boolean);
        
        public get vertexBufferAutoSizeReduction(): boolean;
        public set vertexBufferAutoSizeReduction(value: boolean);
        
        public get firstVisibleCharacter(): number;
        public set firstVisibleCharacter(value: number);
        
        public get maxVisibleCharacters(): number;
        public set maxVisibleCharacters(value: number);
        
        public get maxVisibleWords(): number;
        public set maxVisibleWords(value: number);
        
        public get maxVisibleLines(): number;
        public set maxVisibleLines(value: number);
        
        public get useMaxVisibleDescender(): boolean;
        public set useMaxVisibleDescender(value: boolean);
        
        public get pageToDisplay(): number;
        public set pageToDisplay(value: number);
        
        public get margin(): UnityEngine.Vector4;
        public set margin(value: UnityEngine.Vector4);
        
        public get textInfo(): TMP_TextInfo;
        
        public get havePropertiesChanged(): boolean;
        public set havePropertiesChanged(value: boolean);
        
        public get isUsingLegacyAnimationComponent(): boolean;
        public set isUsingLegacyAnimationComponent(value: boolean);
        
        public get transform(): UnityEngine.Transform;
        
        public get rectTransform(): UnityEngine.RectTransform;
        
        public get autoSizeTextContainer(): boolean;
        public set autoSizeTextContainer(value: boolean);
        
        public get mesh(): UnityEngine.Mesh;
        
        public get isVolumetricText(): boolean;
        public set isVolumetricText(value: boolean);
        
        public get bounds(): UnityEngine.Bounds;
        
        public get textBounds(): UnityEngine.Bounds;
        
        public get flexibleHeight(): number;
        
        public get flexibleWidth(): number;
        
        public get minWidth(): number;
        
        public get minHeight(): number;
        
        public get maxWidth(): number;
        
        public get maxHeight(): number;
        
        public get preferredWidth(): number;
        
        public get preferredHeight(): number;
        
        public get renderedWidth(): number;
        
        public get renderedHeight(): number;
        
        public get layoutPriority(): number;
        
        public static add_OnFontAssetRequest($value: System.Func$3<number, string, TMP_FontAsset>):void;
        
        public static remove_OnFontAssetRequest($value: System.Func$3<number, string, TMP_FontAsset>):void;
        
        public static add_OnSpriteAssetRequest($value: System.Func$3<number, string, TMP_SpriteAsset>):void;
        
        public static remove_OnSpriteAssetRequest($value: System.Func$3<number, string, TMP_SpriteAsset>):void;
        
        public add_OnPreRenderText($value: System.Action$1<TMP_TextInfo>):void;
        
        public remove_OnPreRenderText($value: System.Action$1<TMP_TextInfo>):void;
        
        public ForceMeshUpdate($ignoreActiveState?: boolean, $forceTextReparsing?: boolean):void;
        
        public UpdateGeometry($mesh: UnityEngine.Mesh, $index: number):void;
        
        public UpdateVertexData($flags: TMP_VertexDataUpdateFlags):void;
        
        public UpdateVertexData():void;
        
        public SetVertices($vertices: UnityEngine.Vector3[]):void;
        
        public UpdateMeshPadding():void;
        
        public CrossFadeColor($targetColor: UnityEngine.Color, $duration: number, $ignoreTimeScale: boolean, $useAlpha: boolean):void;
        
        public CrossFadeAlpha($alpha: number, $duration: number, $ignoreTimeScale: boolean):void;
        
        public SetText($sourceText: string, $syncTextInputBox?: boolean):void;
        
        public SetText($sourceText: string, $arg0: number):void;
        
        public SetText($sourceText: string, $arg0: number, $arg1: number):void;
        
        public SetText($sourceText: string, $arg0: number, $arg1: number, $arg2: number):void;
        
        public SetText($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number):void;
        
        public SetText($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number):void;
        
        public SetText($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number):void;
        
        public SetText($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number, $arg6: number):void;
        
        public SetText($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number, $arg6: number, $arg7: number):void;
        
        public SetText($sourceText: System_Text.StringBuilder):void;
        
        public SetText($sourceText: number[]):void;
        
        public SetText($sourceText: number[], $start: number, $length: number):void;
        
        public SetCharArray($sourceText: number[]):void;
        
        public SetCharArray($sourceText: number[], $start: number, $length: number):void;
        
        public GetPreferredValues():UnityEngine.Vector2;
        
        public GetPreferredValues($width: number, $height: number):UnityEngine.Vector2;
        
        public GetPreferredValues($text: string):UnityEngine.Vector2;
        
        public GetPreferredValues($text: string, $width: number, $height: number):UnityEngine.Vector2;
        
        public GetRenderedValues():UnityEngine.Vector2;
        
        public GetRenderedValues($onlyVisibleCharacters: boolean):UnityEngine.Vector2;
        
        public GetTextInfo($text: string):TMP_TextInfo;
        
        public ComputeMarginSize():void;
        
        public ClearMesh():void;
        
        public ClearMesh($uploadGeometry: boolean):void;
        
        public GetParsedText():string;
        
        public static OnFontAssetRequest;
        
        public static OnSpriteAssetRequest;
        
        public OnPreRenderText;
        
                    
    }
    
    class TMP_EditorResourceManager extends System.Object {
        
        public static get instance(): TMP_EditorResourceManager;
        
                    
    }
    
    enum AtlasPopulationMode { Static = 0, Dynamic = 1 }
    
    class FaceInfo_Legacy extends System.Object {
        
        public Name: string;
        
        public PointSize: number;
        
        public Scale: number;
        
        public CharacterCount: number;
        
        public LineHeight: number;
        
        public Baseline: number;
        
        public Ascender: number;
        
        public CapHeight: number;
        
        public Descender: number;
        
        public CenterLine: number;
        
        public SuperscriptOffset: number;
        
        public SubscriptOffset: number;
        
        public SubSize: number;
        
        public Underline: number;
        
        public UnderlineThickness: number;
        
        public strikethrough: number;
        
        public strikethroughThickness: number;
        
        public TabWidth: number;
        
        public Padding: number;
        
        public AtlasWidth: number;
        
        public AtlasHeight: number;
        
        public constructor();
        
                    
    }
    
    class TMP_FontFeatureTable extends System.Object {
        
        public get glyphPairAdjustmentRecords(): System_Collections_Generic.List$1<TMP_GlyphPairAdjustmentRecord>;
        public set glyphPairAdjustmentRecords(value: System_Collections_Generic.List$1<TMP_GlyphPairAdjustmentRecord>);
        
        public constructor();
        
        public SortGlyphPairAdjustmentRecords():void;
        
                    
    }
    
    class FontAssetCreationSettings extends System.ValueType {
        
        public sourceFontFileName: string;
        
        public sourceFontFileGUID: string;
        
        public pointSizeSamplingMode: number;
        
        public pointSize: number;
        
        public padding: number;
        
        public packingMode: number;
        
        public atlasWidth: number;
        
        public atlasHeight: number;
        
        public characterSetSelectionMode: number;
        
        public characterSequence: string;
        
        public referencedFontAssetGUID: string;
        
        public referencedTextAssetGUID: string;
        
        public fontStyle: number;
        
        public fontStyleModifier: number;
        
        public renderMode: number;
        
        public includeFontFeatures: boolean;
        
                    
    }
    
    class TMP_FontWeightPair extends System.ValueType {
        
        public regularTypeface: TMP_FontAsset;
        
        public italicTypeface: TMP_FontAsset;
        
                    
    }
    
    class TMP_Glyph extends TMP_TextElement_Legacy {
        
        public constructor();
        
        public static Clone($source: TMP_Glyph):TMP_Glyph;
        
                    
    }
    
    class TMP_TextElement_Legacy extends System.Object {
        
        public id: number;
        
        public x: number;
        
        public y: number;
        
        public width: number;
        
        public height: number;
        
        public xOffset: number;
        
        public yOffset: number;
        
        public xAdvance: number;
        
        public scale: number;
        
        public constructor();
        
                    
    }
    
    class KerningPairKey extends System.ValueType {
        
        public ascii_Left: number;
        
        public ascii_Right: number;
        
        public key: number;
        
        public constructor($ascii_left: number, $ascii_right: number);
        
        public get_Clone(): KerningPairKey;            
    }
    
    class GlyphValueRecord_Legacy extends System.ValueType {
        
        public xPlacement: number;
        
        public yPlacement: number;
        
        public xAdvance: number;
        
        public yAdvance: number;
        
        public static op_Addition($a: GlyphValueRecord_Legacy, $b: GlyphValueRecord_Legacy):GlyphValueRecord_Legacy;
        
        public get_Clone(): GlyphValueRecord_Legacy;            
    }
    
    class KerningPair extends System.Object {
        
        public xOffset: number;
        
        public get firstGlyph(): number;
        public set firstGlyph(value: number);
        
        public get firstGlyphAdjustments(): GlyphValueRecord_Legacy;
        
        public get secondGlyph(): number;
        public set secondGlyph(value: number);
        
        public get secondGlyphAdjustments(): GlyphValueRecord_Legacy;
        
        public get ignoreSpacingAdjustments(): boolean;
        
        public constructor();
        
        public constructor($left: number, $right: number, $offset: number);
        
        public constructor($firstGlyph: number, $firstGlyphAdjustments: GlyphValueRecord_Legacy, $secondGlyph: number, $secondGlyphAdjustments: GlyphValueRecord_Legacy);
        
                    
    }
    
    class KerningTable extends System.Object {
        
        public kerningPairs: System_Collections_Generic.List$1<KerningPair>;
        
        public constructor();
        
        public AddKerningPair():void;
        
        public AddKerningPair($first: number, $second: number, $offset: number):number;
        
        public AddGlyphPairAdjustmentRecord($first: number, $firstAdjustments: GlyphValueRecord_Legacy, $second: number, $secondAdjustments: GlyphValueRecord_Legacy):number;
        
        public RemoveKerningPair($left: number, $right: number):void;
        
        public RemoveKerningPair($index: number):void;
        
        public SortKerningPairs():void;
        
                    
    }
    
    class TMP_FontUtilities extends System.Object {
        
        public static SearchForCharacter($font: TMP_FontAsset, $unicode: number, $character: $Ref<TMP_Character>):TMP_FontAsset;
        
        public static SearchForCharacter($fonts: System_Collections_Generic.List$1<TMP_FontAsset>, $unicode: number, $character: $Ref<TMP_Character>):TMP_FontAsset;
        
                    
    }
    
    class TMP_FontAssetUtilities extends System.Object {
        
        public static get instance(): TMP_FontAssetUtilities;
        
        public constructor();
        
        public static GetCharacterFromFontAsset($unicode: number, $sourceFontAsset: TMP_FontAsset, $includeFallbacks: boolean, $fontStyle: FontStyles, $fontWeight: FontWeight, $isAlternativeTypeface: $Ref<boolean>):TMP_Character;
        
        public static GetCharacterFromFontAssets($unicode: number, $sourceFontAsset: TMP_FontAsset, $fontAssets: System_Collections_Generic.List$1<TMP_FontAsset>, $includeFallbacks: boolean, $fontStyle: FontStyles, $fontWeight: FontWeight, $isAlternativeTypeface: $Ref<boolean>):TMP_Character;
        
        public static GetSpriteCharacterFromSpriteAsset($unicode: number, $spriteAsset: TMP_SpriteAsset, $includeFallbacks: boolean):TMP_SpriteCharacter;
        
                    
    }
    
    enum FontWeight { Thin = 100, ExtraLight = 200, Light = 300, Regular = 400, Medium = 500, SemiBold = 600, Bold = 700, Heavy = 800, Black = 900 }
    
    class TMP_SpriteCharacter extends TMP_TextElement {
        
        public get name(): string;
        public set name(value: string);
        
        public get hashCode(): number;
        
        public constructor();
        
        public constructor($unicode: number, $glyph: TMP_SpriteGlyph);
        
        public constructor($unicode: number, $spriteAsset: TMP_SpriteAsset, $glyph: TMP_SpriteGlyph);
        
                    
    }
    
    class TMP_GlyphPairAdjustmentRecord extends System.Object {
        
        public get firstAdjustmentRecord(): TMP_GlyphAdjustmentRecord;
        public set firstAdjustmentRecord(value: TMP_GlyphAdjustmentRecord);
        
        public get secondAdjustmentRecord(): TMP_GlyphAdjustmentRecord;
        public set secondAdjustmentRecord(value: TMP_GlyphAdjustmentRecord);
        
        public get featureLookupFlags(): FontFeatureLookupFlags;
        public set featureLookupFlags(value: FontFeatureLookupFlags);
        
        public constructor($firstAdjustmentRecord: TMP_GlyphAdjustmentRecord, $secondAdjustmentRecord: TMP_GlyphAdjustmentRecord);
        
                    
    }
    
    enum FontFeatureLookupFlags { None = 0, IgnoreLigatures = 4, IgnoreSpacingAdjustments = 256 }
    
    class TMP_GlyphValueRecord extends System.ValueType {
        
        public get xPlacement(): number;
        public set xPlacement(value: number);
        
        public get yPlacement(): number;
        public set yPlacement(value: number);
        
        public get xAdvance(): number;
        public set xAdvance(value: number);
        
        public get yAdvance(): number;
        public set yAdvance(value: number);
        
        public constructor($xPlacement: number, $yPlacement: number, $xAdvance: number, $yAdvance: number);
        
        public static op_Addition($a: TMP_GlyphValueRecord, $b: TMP_GlyphValueRecord):TMP_GlyphValueRecord;
        
        public get_Clone(): TMP_GlyphValueRecord;            
    }
    
    class TMP_GlyphAdjustmentRecord extends System.ValueType {
        
        public get glyphIndex(): number;
        public set glyphIndex(value: number);
        
        public get glyphValueRecord(): TMP_GlyphValueRecord;
        public set glyphValueRecord(value: TMP_GlyphValueRecord);
        
        public constructor($glyphIndex: number, $glyphValueRecord: TMP_GlyphValueRecord);
        
        public get_Clone(): TMP_GlyphAdjustmentRecord;            
    }
    
    class GlyphPairKey extends System.ValueType {
        
        public firstGlyphIndex: number;
        
        public secondGlyphIndex: number;
        
        public key: number;
        
        public constructor($firstGlyphIndex: number, $secondGlyphIndex: number);
        
        public get_Clone(): GlyphPairKey;            
    }
    
    class TMP_InputField extends UnityEngine_UI.Selectable {
        
        public get shouldHideMobileInput(): boolean;
        public set shouldHideMobileInput(value: boolean);
        
        public get shouldHideSoftKeyboard(): boolean;
        public set shouldHideSoftKeyboard(value: boolean);
        
        public get text(): string;
        public set text(value: string);
        
        public get isFocused(): boolean;
        
        public get caretBlinkRate(): number;
        public set caretBlinkRate(value: number);
        
        public get caretWidth(): number;
        public set caretWidth(value: number);
        
        public get textViewport(): UnityEngine.RectTransform;
        public set textViewport(value: UnityEngine.RectTransform);
        
        public get textComponent(): TMP_Text;
        public set textComponent(value: TMP_Text);
        
        public get placeholder(): UnityEngine_UI.Graphic;
        public set placeholder(value: UnityEngine_UI.Graphic);
        
        public get verticalScrollbar(): UnityEngine_UI.Scrollbar;
        public set verticalScrollbar(value: UnityEngine_UI.Scrollbar);
        
        public get scrollSensitivity(): number;
        public set scrollSensitivity(value: number);
        
        public get caretColor(): UnityEngine.Color;
        public set caretColor(value: UnityEngine.Color);
        
        public get customCaretColor(): boolean;
        public set customCaretColor(value: boolean);
        
        public get selectionColor(): UnityEngine.Color;
        public set selectionColor(value: UnityEngine.Color);
        
        public get onEndEdit(): TMPro_TMP_InputField.SubmitEvent;
        public set onEndEdit(value: TMPro_TMP_InputField.SubmitEvent);
        
        public get onSubmit(): TMPro_TMP_InputField.SubmitEvent;
        public set onSubmit(value: TMPro_TMP_InputField.SubmitEvent);
        
        public get onSelect(): TMPro_TMP_InputField.SelectionEvent;
        public set onSelect(value: TMPro_TMP_InputField.SelectionEvent);
        
        public get onDeselect(): TMPro_TMP_InputField.SelectionEvent;
        public set onDeselect(value: TMPro_TMP_InputField.SelectionEvent);
        
        public get onTextSelection(): TMPro_TMP_InputField.TextSelectionEvent;
        public set onTextSelection(value: TMPro_TMP_InputField.TextSelectionEvent);
        
        public get onEndTextSelection(): TMPro_TMP_InputField.TextSelectionEvent;
        public set onEndTextSelection(value: TMPro_TMP_InputField.TextSelectionEvent);
        
        public get onValueChanged(): TMPro_TMP_InputField.OnChangeEvent;
        public set onValueChanged(value: TMPro_TMP_InputField.OnChangeEvent);
        
        public get onTouchScreenKeyboardStatusChanged(): TMPro_TMP_InputField.TouchScreenKeyboardEvent;
        public set onTouchScreenKeyboardStatusChanged(value: TMPro_TMP_InputField.TouchScreenKeyboardEvent);
        
        public get onValidateInput(): TMPro_TMP_InputField.OnValidateInput;
        public set onValidateInput(value: TMPro_TMP_InputField.OnValidateInput);
        
        public get characterLimit(): number;
        public set characterLimit(value: number);
        
        public get pointSize(): number;
        public set pointSize(value: number);
        
        public get fontAsset(): TMP_FontAsset;
        public set fontAsset(value: TMP_FontAsset);
        
        public get onFocusSelectAll(): boolean;
        public set onFocusSelectAll(value: boolean);
        
        public get resetOnDeActivation(): boolean;
        public set resetOnDeActivation(value: boolean);
        
        public get restoreOriginalTextOnEscape(): boolean;
        public set restoreOriginalTextOnEscape(value: boolean);
        
        public get isRichTextEditingAllowed(): boolean;
        public set isRichTextEditingAllowed(value: boolean);
        
        public get contentType(): TMPro_TMP_InputField.ContentType;
        public set contentType(value: TMPro_TMP_InputField.ContentType);
        
        public get lineType(): TMPro_TMP_InputField.LineType;
        public set lineType(value: TMPro_TMP_InputField.LineType);
        
        public get lineLimit(): number;
        public set lineLimit(value: number);
        
        public get inputType(): TMPro_TMP_InputField.InputType;
        public set inputType(value: TMPro_TMP_InputField.InputType);
        
        public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
        public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
        
        public get characterValidation(): TMPro_TMP_InputField.CharacterValidation;
        public set characterValidation(value: TMPro_TMP_InputField.CharacterValidation);
        
        public get inputValidator(): TMP_InputValidator;
        public set inputValidator(value: TMP_InputValidator);
        
        public get readOnly(): boolean;
        public set readOnly(value: boolean);
        
        public get richText(): boolean;
        public set richText(value: boolean);
        
        public get multiLine(): boolean;
        
        public get asteriskChar(): number;
        public set asteriskChar(value: number);
        
        public get wasCanceled(): boolean;
        
        public get caretPosition(): number;
        public set caretPosition(value: number);
        
        public get selectionAnchorPosition(): number;
        public set selectionAnchorPosition(value: number);
        
        public get selectionFocusPosition(): number;
        public set selectionFocusPosition(value: number);
        
        public get stringPosition(): number;
        public set stringPosition(value: number);
        
        public get selectionStringAnchorPosition(): number;
        public set selectionStringAnchorPosition(value: number);
        
        public get selectionStringFocusPosition(): number;
        public set selectionStringFocusPosition(value: number);
        
        public get minWidth(): number;
        
        public get preferredWidth(): number;
        
        public get flexibleWidth(): number;
        
        public get minHeight(): number;
        
        public get preferredHeight(): number;
        
        public get flexibleHeight(): number;
        
        public get layoutPriority(): number;
        
        public SetTextWithoutNotify($input: string):void;
        
        public MoveTextEnd($shift: boolean):void;
        
        public MoveTextStart($shift: boolean):void;
        
        public MoveToEndOfLine($shift: boolean, $ctrl: boolean):void;
        
        public MoveToStartOfLine($shift: boolean, $ctrl: boolean):void;
        
        public OnBeginDrag($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnDrag($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnEndDrag($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnPointerDown($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public ProcessEvent($e: UnityEngine.Event):void;
        
        public OnUpdateSelected($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
        public OnScroll($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public ForceLabelUpdate():void;
        
        public Rebuild($update: UnityEngine_UI.CanvasUpdate):void;
        
        public LayoutComplete():void;
        
        public GraphicUpdateComplete():void;
        
        public ActivateInputField():void;
        
        public OnSelect($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
        public OnPointerClick($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnControlClick():void;
        
        public ReleaseSelection():void;
        
        public DeactivateInputField($clearSelection?: boolean):void;
        
        public OnDeselect($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
        public OnSubmit($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
        public CalculateLayoutInputHorizontal():void;
        
        public CalculateLayoutInputVertical():void;
        
        public SetGlobalPointSize($pointSize: number):void;
        
        public SetGlobalFontAsset($fontAsset: TMP_FontAsset):void;
        
                    
    }
    
    class TMP_InputValidator extends UnityEngine.ScriptableObject {
        
        public Validate($text: $Ref<string>, $pos: $Ref<number>, $ch: number):number;
        
                    
    }
    
    class TMP_LineInfo extends System.ValueType {
        
        public characterCount: number;
        
        public visibleCharacterCount: number;
        
        public spaceCount: number;
        
        public wordCount: number;
        
        public firstCharacterIndex: number;
        
        public firstVisibleCharacterIndex: number;
        
        public lastCharacterIndex: number;
        
        public lastVisibleCharacterIndex: number;
        
        public length: number;
        
        public lineHeight: number;
        
        public ascender: number;
        
        public baseline: number;
        
        public descender: number;
        
        public maxAdvance: number;
        
        public width: number;
        
        public marginLeft: number;
        
        public marginRight: number;
        
        public alignment: HorizontalAlignmentOptions;
        
        public lineExtents: Extents;
        
        public get_Clone(): TMP_LineInfo;            
    }
    
    enum HorizontalAlignmentOptions { Left = 1, Center = 2, Right = 4, Justified = 8, Flush = 16, Geometry = 32 }
    
    class Extents extends System.ValueType {
        
        public min: UnityEngine.Vector2;
        
        public max: UnityEngine.Vector2;
        
        public constructor($min: UnityEngine.Vector2, $max: UnityEngine.Vector2);
        
        public ToString():string;
        
        public get_Clone(): Extents;            
    }
    
    class TMP_MaterialManager extends System.Object {
        
        public static GetStencilMaterial($baseMaterial: UnityEngine.Material, $stencilID: number):UnityEngine.Material;
        
        public static ReleaseStencilMaterial($stencilMaterial: UnityEngine.Material):void;
        
        public static GetBaseMaterial($stencilMaterial: UnityEngine.Material):UnityEngine.Material;
        
        public static SetStencil($material: UnityEngine.Material, $stencilID: number):UnityEngine.Material;
        
        public static AddMaskingMaterial($baseMaterial: UnityEngine.Material, $stencilMaterial: UnityEngine.Material, $stencilID: number):void;
        
        public static RemoveStencilMaterial($stencilMaterial: UnityEngine.Material):void;
        
        public static ReleaseBaseMaterial($baseMaterial: UnityEngine.Material):void;
        
        public static ClearMaterials():void;
        
        public static GetStencilID($obj: UnityEngine.GameObject):number;
        
        public static GetMaterialForRendering($graphic: UnityEngine_UI.MaskableGraphic, $baseMaterial: UnityEngine.Material):UnityEngine.Material;
        
        public static GetFallbackMaterial($sourceMaterial: UnityEngine.Material, $targetMaterial: UnityEngine.Material):UnityEngine.Material;
        
        public static AddFallbackMaterialReference($targetMaterial: UnityEngine.Material):void;
        
        public static RemoveFallbackMaterialReference($targetMaterial: UnityEngine.Material):void;
        
        public static CleanupFallbackMaterials():void;
        
        public static ReleaseFallbackMaterial($fallbackMaterial: UnityEngine.Material):void;
        
        public static CopyMaterialPresetProperties($source: UnityEngine.Material, $destination: UnityEngine.Material):void;
        
                    
    }
    
    enum VertexSortingOrder { Normal = 0, Reverse = 1 }
    
    class TMP_MeshInfo extends System.ValueType {
        
        public mesh: UnityEngine.Mesh;
        
        public vertexCount: number;
        
        public vertices: UnityEngine.Vector3[];
        
        public normals: UnityEngine.Vector3[];
        
        public tangents: UnityEngine.Vector4[];
        
        public uvs0: UnityEngine.Vector2[];
        
        public uvs2: UnityEngine.Vector2[];
        
        public colors32: UnityEngine.Color32[];
        
        public triangles: number[];
        
        public material: UnityEngine.Material;
        
        public constructor($mesh: UnityEngine.Mesh, $size: number);
        
        public constructor($mesh: UnityEngine.Mesh, $size: number, $isVolumetric: boolean);
        
        public ResizeMeshInfo($size: number):void;
        
        public ResizeMeshInfo($size: number, $isVolumetric: boolean):void;
        
        public Clear():void;
        
        public Clear($uploadChanges: boolean):void;
        
        public ClearUnusedVertices():void;
        
        public ClearUnusedVertices($startIndex: number):void;
        
        public ClearUnusedVertices($startIndex: number, $updateMesh: boolean):void;
        
        public SortGeometry($order: VertexSortingOrder):void;
        
        public SortGeometry($sortingOrder: System_Collections_Generic.IList$1<number>):void;
        
        public SwapVertexData($src: number, $dst: number):void;
        
                    
    }
    
    class TMP_PackageResourceImporter extends System.Object {
        
        public constructor();
        
        public OnDestroy():void;
        
        public OnGUI():void;
        
        public static ImportResources($importEssentials: boolean, $importExamples: boolean, $interactive: boolean):void;
        
                    
    }
    
    class TMP_PackageResourceImporterWindow extends UnityEditor.EditorWindow {
        
        public constructor();
        
        public static ShowPackageImporterWindow():void;
        
                    
    }
    
    class TMP_ResourceManager extends System.Object {
        
        public constructor();
        
        public static AddFontAsset($fontAsset: TMP_FontAsset):void;
        
        public static TryGetFontAsset($hashcode: number, $fontAsset: $Ref<TMP_FontAsset>):boolean;
        
                    
    }
    
    enum TagValueType { None = 0, NumericalValue = 1, StringValue = 2, ColorValue = 4 }
    
    enum TagUnitType { Pixels = 0, FontUnits = 1, Percentage = 2 }
    
    class TMP_ScrollbarEventHandler extends UnityEngine.MonoBehaviour {
        
        public isSelected: boolean;
        
        public constructor();
        
        public OnPointerClick($eventData: UnityEngine_EventSystems.PointerEventData):void;
        
        public OnSelect($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
        public OnDeselect($eventData: UnityEngine_EventSystems.BaseEventData):void;
        
                    
    }
    
    class TMP_SelectionCaret extends UnityEngine_UI.MaskableGraphic {
        
        public constructor();
        
        public Cull($clipRect: UnityEngine.Rect, $validRect: boolean):void;
        
                    
    }
    
    class TMP_Settings extends UnityEngine.ScriptableObject {
        
        public static get version(): string;
        
        public static get enableWordWrapping(): boolean;
        
        public static get enableKerning(): boolean;
        
        public static get enableExtraPadding(): boolean;
        
        public static get enableTintAllSprites(): boolean;
        
        public static get enableParseEscapeCharacters(): boolean;
        
        public static get enableRaycastTarget(): boolean;
        
        public static get getFontFeaturesAtRuntime(): boolean;
        
        public static get missingGlyphCharacter(): number;
        public static set missingGlyphCharacter(value: number);
        
        public static get warningsDisabled(): boolean;
        
        public static get defaultFontAsset(): TMP_FontAsset;
        
        public static get defaultFontAssetPath(): string;
        
        public static get defaultFontSize(): number;
        
        public static get defaultTextAutoSizingMinRatio(): number;
        
        public static get defaultTextAutoSizingMaxRatio(): number;
        
        public static get defaultTextMeshProTextContainerSize(): UnityEngine.Vector2;
        
        public static get defaultTextMeshProUITextContainerSize(): UnityEngine.Vector2;
        
        public static get autoSizeTextContainer(): boolean;
        
        public static get isTextObjectScaleStatic(): boolean;
        public static set isTextObjectScaleStatic(value: boolean);
        
        public static get fallbackFontAssets(): System_Collections_Generic.List$1<TMP_FontAsset>;
        
        public static get matchMaterialPreset(): boolean;
        
        public static get defaultSpriteAsset(): TMP_SpriteAsset;
        
        public static get defaultSpriteAssetPath(): string;
        
        public static get enableEmojiSupport(): boolean;
        public static set enableEmojiSupport(value: boolean);
        
        public static get missingCharacterSpriteUnicode(): number;
        public static set missingCharacterSpriteUnicode(value: number);
        
        public static get defaultColorGradientPresetsPath(): string;
        
        public static get defaultStyleSheet(): TMP_StyleSheet;
        
        public static get styleSheetsResourcePath(): string;
        
        public static get leadingCharacters(): UnityEngine.TextAsset;
        
        public static get followingCharacters(): UnityEngine.TextAsset;
        
        public static get linebreakingRules(): TMPro_TMP_Settings.LineBreakingTable;
        
        public static get useModernHangulLineBreakingRules(): boolean;
        public static set useModernHangulLineBreakingRules(value: boolean);
        
        public static get instance(): TMP_Settings;
        
        public constructor();
        
        public static LoadDefaultSettings():TMP_Settings;
        
        public static GetSettings():TMP_Settings;
        
        public static GetFontAsset():TMP_FontAsset;
        
        public static GetSpriteAsset():TMP_SpriteAsset;
        
        public static GetStyleSheet():TMP_StyleSheet;
        
        public static LoadLinebreakingRules():void;
        
                    
    }
    
    class TMP_StyleSheet extends UnityEngine.ScriptableObject {
        
        public constructor();
        
        public GetStyle($hashCode: number):TMP_Style;
        
        public GetStyle($name: string):TMP_Style;
        
        public RefreshStyles():void;
        
                    
    }
    
    class ShaderUtilities extends System.Object {
        
        public static ID_MainTex: number;
        
        public static ID_FaceTex: number;
        
        public static ID_FaceColor: number;
        
        public static ID_FaceDilate: number;
        
        public static ID_Shininess: number;
        
        public static ID_UnderlayColor: number;
        
        public static ID_UnderlayOffsetX: number;
        
        public static ID_UnderlayOffsetY: number;
        
        public static ID_UnderlayDilate: number;
        
        public static ID_UnderlaySoftness: number;
        
        public static ID_UnderlayOffset: number;
        
        public static ID_UnderlayIsoPerimeter: number;
        
        public static ID_WeightNormal: number;
        
        public static ID_WeightBold: number;
        
        public static ID_OutlineTex: number;
        
        public static ID_OutlineWidth: number;
        
        public static ID_OutlineSoftness: number;
        
        public static ID_OutlineColor: number;
        
        public static ID_Outline2Color: number;
        
        public static ID_Outline2Width: number;
        
        public static ID_Padding: number;
        
        public static ID_GradientScale: number;
        
        public static ID_ScaleX: number;
        
        public static ID_ScaleY: number;
        
        public static ID_PerspectiveFilter: number;
        
        public static ID_Sharpness: number;
        
        public static ID_TextureWidth: number;
        
        public static ID_TextureHeight: number;
        
        public static ID_BevelAmount: number;
        
        public static ID_GlowColor: number;
        
        public static ID_GlowOffset: number;
        
        public static ID_GlowPower: number;
        
        public static ID_GlowOuter: number;
        
        public static ID_GlowInner: number;
        
        public static ID_LightAngle: number;
        
        public static ID_EnvMap: number;
        
        public static ID_EnvMatrix: number;
        
        public static ID_EnvMatrixRotation: number;
        
        public static ID_MaskCoord: number;
        
        public static ID_ClipRect: number;
        
        public static ID_MaskSoftnessX: number;
        
        public static ID_MaskSoftnessY: number;
        
        public static ID_VertexOffsetX: number;
        
        public static ID_VertexOffsetY: number;
        
        public static ID_UseClipRect: number;
        
        public static ID_StencilID: number;
        
        public static ID_StencilOp: number;
        
        public static ID_StencilComp: number;
        
        public static ID_StencilReadMask: number;
        
        public static ID_StencilWriteMask: number;
        
        public static ID_ShaderFlags: number;
        
        public static ID_ScaleRatio_A: number;
        
        public static ID_ScaleRatio_B: number;
        
        public static ID_ScaleRatio_C: number;
        
        public static Keyword_Bevel: string;
        
        public static Keyword_Glow: string;
        
        public static Keyword_Underlay: string;
        
        public static Keyword_Ratios: string;
        
        public static Keyword_MASK_SOFT: string;
        
        public static Keyword_MASK_HARD: string;
        
        public static Keyword_MASK_TEX: string;
        
        public static Keyword_Outline: string;
        
        public static ShaderTag_ZTestMode: string;
        
        public static ShaderTag_CullMode: string;
        
        public static isInitialized: boolean;
        
        public static GetShaderPropertyIDs():void;
        
        public static UpdateShaderRatios($mat: UnityEngine.Material):void;
        
        public static GetFontExtent($material: UnityEngine.Material):UnityEngine.Vector4;
        
        public static IsMaskingEnabled($material: UnityEngine.Material):boolean;
        
        public static GetPadding($material: UnityEngine.Material, $enableExtraPadding: boolean, $isBold: boolean):number;
        
        public static GetPadding($materials: UnityEngine.Material[], $enableExtraPadding: boolean, $isBold: boolean):number;
        
                    
    }
    
    class TMP_Sprite extends TMP_TextElement_Legacy {
        
        public name: string;
        
        public hashCode: number;
        
        public unicode: number;
        
        public pivot: UnityEngine.Vector2;
        
        public sprite: UnityEngine.Sprite;
        
        public constructor();
        
                    
    }
    
    class TMP_SpriteAnimator extends UnityEngine.MonoBehaviour {
        
        public constructor();
        
        public StopAllAnimations():void;
        
        public DoSpriteAnimation($currentCharacter: number, $spriteAsset: TMP_SpriteAsset, $start: number, $end: number, $framerate: number):void;
        
                    
    }
    
    class TMP_SpriteGlyph extends UnityEngine_TextCore.Glyph {
        
        public sprite: UnityEngine.Sprite;
        
        public constructor();
        
        public constructor($index: number, $metrics: UnityEngine_TextCore.GlyphMetrics, $glyphRect: UnityEngine_TextCore.GlyphRect, $scale: number, $atlasIndex: number);
        
        public constructor($index: number, $metrics: UnityEngine_TextCore.GlyphMetrics, $glyphRect: UnityEngine_TextCore.GlyphRect, $scale: number, $atlasIndex: number, $sprite: UnityEngine.Sprite);
        
                    
    }
    
    class TMP_Style extends System.Object {
        
        public static get NormalStyle(): TMP_Style;
        
        public get name(): string;
        public set name(value: string);
        
        public get hashCode(): number;
        public set hashCode(value: number);
        
        public get styleOpeningDefinition(): string;
        
        public get styleClosingDefinition(): string;
        
        public get styleOpeningTagArray(): number[];
        
        public get styleClosingTagArray(): number[];
        
        public RefreshStyle():void;
        
                    
    }
    
    class TMP_SubMesh extends UnityEngine.MonoBehaviour {
        
        public get fontAsset(): TMP_FontAsset;
        public set fontAsset(value: TMP_FontAsset);
        
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        
        public get sharedMaterial(): UnityEngine.Material;
        public set sharedMaterial(value: UnityEngine.Material);
        
        public get fallbackMaterial(): UnityEngine.Material;
        public set fallbackMaterial(value: UnityEngine.Material);
        
        public get fallbackSourceMaterial(): UnityEngine.Material;
        public set fallbackSourceMaterial(value: UnityEngine.Material);
        
        public get isDefaultMaterial(): boolean;
        public set isDefaultMaterial(value: boolean);
        
        public get padding(): number;
        public set padding(value: number);
        
        public get renderer(): UnityEngine.Renderer;
        
        public get meshFilter(): UnityEngine.MeshFilter;
        
        public get mesh(): UnityEngine.Mesh;
        public set mesh(value: UnityEngine.Mesh);
        
        public get textComponent(): TMP_Text;
        
        public constructor();
        
        public static AddSubTextObject($textComponent: TextMeshPro, $materialReference: MaterialReference):TMP_SubMesh;
        
        public DestroySelf():void;
        
        public GetPaddingForMaterial():number;
        
        public UpdateMeshPadding($isExtraPadding: boolean, $isUsingBold: boolean):void;
        
        public SetVerticesDirty():void;
        
        public SetMaterialDirty():void;
        
                    
    }
    
    class TextMeshPro extends TMP_Text {
        
        public get sortingLayerID(): number;
        public set sortingLayerID(value: number);
        
        public get sortingOrder(): number;
        public set sortingOrder(value: number);
        
        public get autoSizeTextContainer(): boolean;
        public set autoSizeTextContainer(value: boolean);
        
        public get transform(): UnityEngine.Transform;
        
        public get renderer(): UnityEngine.Renderer;
        
        public get mesh(): UnityEngine.Mesh;
        
        public get meshFilter(): UnityEngine.MeshFilter;
        
        public get maskType(): MaskingTypes;
        public set maskType(value: MaskingTypes);
        
        public constructor();
        
        public SetMask($type: MaskingTypes, $maskCoords: UnityEngine.Vector4):void;
        
        public SetMask($type: MaskingTypes, $maskCoords: UnityEngine.Vector4, $softnessX: number, $softnessY: number):void;
        
        public SetVerticesDirty():void;
        
        public SetLayoutDirty():void;
        
        public SetMaterialDirty():void;
        
        public SetAllDirty():void;
        
        public Rebuild($update: UnityEngine_UI.CanvasUpdate):void;
        
        public UpdateFontAsset():void;
        
        public CalculateLayoutInputHorizontal():void;
        
        public CalculateLayoutInputVertical():void;
        
        public OnPreRenderText;
        
                    
    }
    
    class TMP_SubMeshUI extends UnityEngine_UI.MaskableGraphic {
        
        public get fontAsset(): TMP_FontAsset;
        public set fontAsset(value: TMP_FontAsset);
        
        public get spriteAsset(): TMP_SpriteAsset;
        public set spriteAsset(value: TMP_SpriteAsset);
        
        public get mainTexture(): UnityEngine.Texture;
        
        public get material(): UnityEngine.Material;
        public set material(value: UnityEngine.Material);
        
        public get sharedMaterial(): UnityEngine.Material;
        public set sharedMaterial(value: UnityEngine.Material);
        
        public get fallbackMaterial(): UnityEngine.Material;
        public set fallbackMaterial(value: UnityEngine.Material);
        
        public get fallbackSourceMaterial(): UnityEngine.Material;
        public set fallbackSourceMaterial(value: UnityEngine.Material);
        
        public get materialForRendering(): UnityEngine.Material;
        
        public get isDefaultMaterial(): boolean;
        public set isDefaultMaterial(value: boolean);
        
        public get padding(): number;
        public set padding(value: number);
        
        public get mesh(): UnityEngine.Mesh;
        public set mesh(value: UnityEngine.Mesh);
        
        public get textComponent(): TMP_Text;
        
        public constructor();
        
        public static AddSubTextObject($textComponent: TextMeshProUGUI, $materialReference: MaterialReference):TMP_SubMeshUI;
        
        public GetModifiedMaterial($baseMaterial: UnityEngine.Material):UnityEngine.Material;
        
        public GetPaddingForMaterial():number;
        
        public GetPaddingForMaterial($mat: UnityEngine.Material):number;
        
        public UpdateMeshPadding($isExtraPadding: boolean, $isUsingBold: boolean):void;
        
        public SetAllDirty():void;
        
        public SetVerticesDirty():void;
        
        public SetLayoutDirty():void;
        
        public SetMaterialDirty():void;
        
        public SetPivotDirty():void;
        
        public Cull($clipRect: UnityEngine.Rect, $validRect: boolean):void;
        
        public Rebuild($update: UnityEngine_UI.CanvasUpdate):void;
        
        public RefreshMaterial():void;
        
        public RecalculateClipping():void;
        
                    
    }
    
    class TextMeshProUGUI extends TMP_Text {
        
        public get materialForRendering(): UnityEngine.Material;
        
        public get autoSizeTextContainer(): boolean;
        public set autoSizeTextContainer(value: boolean);
        
        public get mesh(): UnityEngine.Mesh;
        
        public get canvasRenderer(): UnityEngine.CanvasRenderer;
        
        public get maskOffset(): UnityEngine.Vector4;
        public set maskOffset(value: UnityEngine.Vector4);
        
        public constructor();
        
        public CalculateLayoutInputHorizontal():void;
        
        public CalculateLayoutInputVertical():void;
        
        public SetVerticesDirty():void;
        
        public SetLayoutDirty():void;
        
        public SetMaterialDirty():void;
        
        public SetAllDirty():void;
        
        public Rebuild($update: UnityEngine_UI.CanvasUpdate):void;
        
        public GetModifiedMaterial($baseMaterial: UnityEngine.Material):UnityEngine.Material;
        
        public RecalculateClipping():void;
        
        public Cull($clipRect: UnityEngine.Rect, $validRect: boolean):void;
        
        public UpdateFontAsset():void;
        
        public OnPreRenderText;
        
                    
    }
    
    interface ITextElement {
        
        sharedMaterial: UnityEngine.Material;
        
        Rebuild($update: UnityEngine_UI.CanvasUpdate):void;
        
        GetInstanceID():number;
        
                    
    }
    
    enum VerticalAlignmentOptions { Top = 256, Middle = 512, Bottom = 1024, Baseline = 2048, Geometry = 4096, Capline = 8192 }
    
    enum TextRenderFlags { DontRender = 0, Render = 255 }
    
    enum MaskingTypes { MaskOff = 0, MaskHard = 1, MaskSoft = 2 }
    
    enum TextOverflowModes { Overflow = 0, Ellipsis = 1, Masking = 2, Truncate = 3, ScrollRect = 4, Page = 5, Linked = 6 }
    
    enum MaskingOffsetMode { Percentage = 0, Pixel = 1 }
    
    enum TextureMappingOptions { Character = 0, Line = 1, Paragraph = 2, MatchAspect = 3 }
    
    class VertexGradient extends System.ValueType {
        
        public topLeft: UnityEngine.Color;
        
        public topRight: UnityEngine.Color;
        
        public bottomLeft: UnityEngine.Color;
        
        public bottomRight: UnityEngine.Color;
        
        public constructor($color: UnityEngine.Color);
        
        public constructor($color0: UnityEngine.Color, $color1: UnityEngine.Color, $color2: UnityEngine.Color, $color3: UnityEngine.Color);
        
        public get_Clone(): VertexGradient;            
    }
    
    class TMP_TextInfo extends System.Object {
        
        public textComponent: TMP_Text;
        
        public characterCount: number;
        
        public spriteCount: number;
        
        public spaceCount: number;
        
        public wordCount: number;
        
        public linkCount: number;
        
        public lineCount: number;
        
        public pageCount: number;
        
        public materialCount: number;
        
        public characterInfo: TMP_CharacterInfo[];
        
        public wordInfo: TMP_WordInfo[];
        
        public linkInfo: TMP_LinkInfo[];
        
        public lineInfo: TMP_LineInfo[];
        
        public pageInfo: TMP_PageInfo[];
        
        public meshInfo: TMP_MeshInfo[];
        
        public constructor();
        
        public constructor($textComponent: TMP_Text);
        
        public Clear():void;
        
        public ClearMeshInfo($updateMesh: boolean):void;
        
        public ClearAllMeshInfo():void;
        
        public ResetVertexLayout($isVolumetric: boolean):void;
        
        public ClearUnusedVertices($materials: MaterialReference[]):void;
        
        public ClearLineInfo():void;
        
        public CopyMeshInfoVertexData():TMP_MeshInfo[];
        
        public static Resize<T>($array: $Ref<T[]>, $size: number):void;
        
        public static Resize<T>($array: $Ref<T[]>, $size: number, $isBlockAllocated: boolean):void;
        
                    
    }
    
    enum TMP_VertexDataUpdateFlags { None = 0, Vertices = 1, Uv0 = 2, Uv2 = 4, Uv4 = 8, Colors32 = 16, All = 255 }
    
    enum TextElementType { Character = 1, Sprite = 2 }
    
    class TMP_WordInfo extends System.ValueType {
        
        public textComponent: TMP_Text;
        
        public firstCharacterIndex: number;
        
        public lastCharacterIndex: number;
        
        public characterCount: number;
        
        public GetWord():string;
        
                    
    }
    
    class TMP_LinkInfo extends System.ValueType {
        
        public textComponent: TMP_Text;
        
        public hashCode: number;
        
        public linkIdFirstCharacterIndex: number;
        
        public linkIdLength: number;
        
        public linkTextfirstCharacterIndex: number;
        
        public linkTextLength: number;
        
        public GetLinkText():string;
        
        public GetLinkID():string;
        
                    
    }
    
    class TMP_PageInfo extends System.ValueType {
        
        public firstCharacterIndex: number;
        
        public lastCharacterIndex: number;
        
        public ascender: number;
        
        public baseLine: number;
        
        public descender: number;
        
        public get_Clone(): TMP_PageInfo;            
    }
    
    class TMP_TextParsingUtilities extends System.Object {
        
        public static get instance(): TMP_TextParsingUtilities;
        
        public constructor();
        
        public static GetHashCode($s: string):number;
        
        public static GetHashCodeCaseSensitive($s: string):number;
        
        public static ToLowerASCIIFast($c: number):number;
        
        public static ToUpperASCIIFast($c: number):number;
        
        public static ToUpperASCIIFast($c: number):number;
        
        public static ToLowerASCIIFast($c: number):number;
        
        public static IsHighSurrogate($c: number):boolean;
        
        public static IsLowSurrogate($c: number):boolean;
        
                    
    }
    
    class TMP_FontStyleStack extends System.ValueType {
        
        public bold: number;
        
        public italic: number;
        
        public underline: number;
        
        public strikethrough: number;
        
        public highlight: number;
        
        public superscript: number;
        
        public subscript: number;
        
        public uppercase: number;
        
        public lowercase: number;
        
        public smallcaps: number;
        
        public Clear():void;
        
        public Add($style: FontStyles):number;
        
        public Remove($style: FontStyles):number;
        
        public get_Clone(): TMP_FontStyleStack;            
    }
    
    enum CaretPosition { None = 0, Left = 1, Right = 2 }
    
    class CaretInfo extends System.ValueType {
        
        public index: number;
        
        public position: CaretPosition;
        
        public constructor($index: number, $position: CaretPosition);
        
        public get_Clone(): CaretInfo;            
    }
    
    class TMP_TextUtilities extends System.Object {
        
        public static GetCursorIndexFromPosition($textComponent: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):number;
        
        public static GetCursorIndexFromPosition($textComponent: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera, $cursor: $Ref<CaretPosition>):number;
        
        public static FindNearestLine($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):number;
        
        public static FindNearestCharacterOnLine($text: TMP_Text, $position: UnityEngine.Vector3, $line: number, $camera: UnityEngine.Camera, $visibleOnly: boolean):number;
        
        public static IsIntersectingRectTransform($rectTransform: UnityEngine.RectTransform, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):boolean;
        
        public static FindIntersectingCharacter($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera, $visibleOnly: boolean):number;
        
        public static FindNearestCharacter($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera, $visibleOnly: boolean):number;
        
        public static FindIntersectingWord($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):number;
        
        public static FindNearestWord($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):number;
        
        public static FindIntersectingLine($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):number;
        
        public static FindIntersectingLink($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):number;
        
        public static FindNearestLink($text: TMP_Text, $position: UnityEngine.Vector3, $camera: UnityEngine.Camera):number;
        
        public static ScreenPointToWorldPointInRectangle($transform: UnityEngine.Transform, $screenPoint: UnityEngine.Vector2, $cam: UnityEngine.Camera, $worldPoint: $Ref<UnityEngine.Vector3>):boolean;
        
        public static DistanceToLine($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $point: UnityEngine.Vector3):number;
        
        public static ToLowerFast($c: number):number;
        
        public static ToUpperFast($c: number):number;
        
        public static GetHashCode($s: string):number;
        
        public static GetSimpleHashCode($s: string):number;
        
        public static GetSimpleHashCodeLowercase($s: string):number;
        
        public static HexToInt($hex: number):number;
        
        public static StringHexToInt($s: string):number;
        
                    
    }
    
    class TMP_UpdateManager extends System.Object {
        
        public static RegisterTextElementForLayoutRebuild($element: TMP_Text):void;
        
        public static RegisterTextElementForGraphicRebuild($element: TMP_Text):void;
        
        public static RegisterTextElementForCullingUpdate($element: TMP_Text):void;
        
        public static UnRegisterTextElementForRebuild($element: TMP_Text):void;
        
                    
    }
    
    class TMP_UpdateRegistry extends System.Object {
        
        public static get instance(): TMP_UpdateRegistry;
        
        public static RegisterCanvasElementForLayoutRebuild($element: UnityEngine_UI.ICanvasElement):void;
        
        public static RegisterCanvasElementForGraphicRebuild($element: UnityEngine_UI.ICanvasElement):void;
        
        public static UnRegisterCanvasElementForRebuild($element: UnityEngine_UI.ICanvasElement):void;
        
                    
    }
    
    enum Compute_DistanceTransform_EventTypes { Processing = 0, Completed = 1 }
    
    class TMPro_EventManager extends System.Object {
        
        public static COMPUTE_DT_EVENT: FastAction$2<any, Compute_DT_EventArgs>;
        
        public static MATERIAL_PROPERTY_EVENT: FastAction$2<boolean, UnityEngine.Material>;
        
        public static FONT_PROPERTY_EVENT: FastAction$2<boolean, UnityEngine.Object>;
        
        public static SPRITE_ASSET_PROPERTY_EVENT: FastAction$2<boolean, UnityEngine.Object>;
        
        public static TEXTMESHPRO_PROPERTY_EVENT: FastAction$2<boolean, UnityEngine.Object>;
        
        public static DRAG_AND_DROP_MATERIAL_EVENT: FastAction$3<UnityEngine.GameObject, UnityEngine.Material, UnityEngine.Material>;
        
        public static TEXT_STYLE_PROPERTY_EVENT: FastAction$1<boolean>;
        
        public static COLOR_GRADIENT_PROPERTY_EVENT: FastAction$1<UnityEngine.Object>;
        
        public static TMP_SETTINGS_PROPERTY_EVENT: FastAction;
        
        public static RESOURCE_LOAD_EVENT: FastAction;
        
        public static TEXTMESHPRO_UGUI_PROPERTY_EVENT: FastAction$2<boolean, UnityEngine.Object>;
        
        public static TEXT_CHANGED_EVENT: FastAction$1<UnityEngine.Object>;
        
        public static ON_MATERIAL_PROPERTY_CHANGED($isChanged: boolean, $mat: UnityEngine.Material):void;
        
        public static ON_FONT_PROPERTY_CHANGED($isChanged: boolean, $obj: UnityEngine.Object):void;
        
        public static ON_SPRITE_ASSET_PROPERTY_CHANGED($isChanged: boolean, $obj: UnityEngine.Object):void;
        
        public static ON_TEXTMESHPRO_PROPERTY_CHANGED($isChanged: boolean, $obj: UnityEngine.Object):void;
        
        public static ON_DRAG_AND_DROP_MATERIAL_CHANGED($sender: UnityEngine.GameObject, $currentMaterial: UnityEngine.Material, $newMaterial: UnityEngine.Material):void;
        
        public static ON_TEXT_STYLE_PROPERTY_CHANGED($isChanged: boolean):void;
        
        public static ON_COLOR_GRADIENT_PROPERTY_CHANGED($obj: UnityEngine.Object):void;
        
        public static ON_TEXT_CHANGED($obj: UnityEngine.Object):void;
        
        public static ON_TMP_SETTINGS_CHANGED():void;
        
        public static ON_RESOURCES_LOADED():void;
        
        public static ON_TEXTMESHPRO_UGUI_PROPERTY_CHANGED($isChanged: boolean, $obj: UnityEngine.Object):void;
        
        public static ON_COMPUTE_DT_EVENT($Sender: any, $e: Compute_DT_EventArgs):void;
        
                    
    }
    
    class Compute_DT_EventArgs extends System.Object {
        
        public EventType: Compute_DistanceTransform_EventTypes;
        
        public ProgressPercentage: number;
        
        public Colors: UnityEngine.Color[];
        
        public constructor($type: Compute_DistanceTransform_EventTypes, $progress: number);
        
        public constructor($type: Compute_DistanceTransform_EventTypes, $colors: UnityEngine.Color[]);
        
                    
    }
    
    interface FastAction$2<A,B> extends System.Object {
        
                    
    }
    
    interface FastAction$3<A,B,C> extends System.Object {
        
                    
    }
    
    interface FastAction$1<A> extends System.Object {
        
                    
    }
    
    class TMPro_ExtensionMethods extends System.Object {
        
        public static ToIntArray($text: string):number[];
        
        public static ArrayToString($chars: number[]):string;
        
        public static IntToString($unicodes: number[]):string;
        
        public static IntToString($unicodes: number[], $start: number, $length: number):string;
        
        public static FindInstanceID<T extends UnityEngine.Object>($list: System_Collections_Generic.List$1<T>, $target: T):number;
        
        public static Compare($a: UnityEngine.Color32, $b: UnityEngine.Color32):boolean;
        
        public static CompareRGB($a: UnityEngine.Color32, $b: UnityEngine.Color32):boolean;
        
        public static Compare($a: UnityEngine.Color, $b: UnityEngine.Color):boolean;
        
        public static CompareRGB($a: UnityEngine.Color, $b: UnityEngine.Color):boolean;
        
        public static Multiply($c1: UnityEngine.Color32, $c2: UnityEngine.Color32):UnityEngine.Color32;
        
        public static Tint($c1: UnityEngine.Color32, $c2: UnityEngine.Color32):UnityEngine.Color32;
        
        public static Tint($c1: UnityEngine.Color32, $tint: number):UnityEngine.Color32;
        
        public static MinAlpha($c1: UnityEngine.Color, $c2: UnityEngine.Color):UnityEngine.Color;
        
        public static Compare($v1: UnityEngine.Vector3, $v2: UnityEngine.Vector3, $accuracy: number):boolean;
        
        public static Compare($q1: UnityEngine.Quaternion, $q2: UnityEngine.Quaternion, $accuracy: number):boolean;
        
                    
    }
    
    class TMP_Math extends System.Object {
        
        public static FLOAT_MAX: number;
        
        public static FLOAT_MIN: number;
        
        public static INT_MAX: number;
        
        public static INT_MIN: number;
        
        public static FLOAT_UNSET: number;
        
        public static INT_UNSET: number;
        
        public static MAX_16BIT: UnityEngine.Vector2;
        
        public static MIN_16BIT: UnityEngine.Vector2;
        
        public static Approximately($a: number, $b: number):boolean;
        
        public static Mod($a: number, $b: number):number;
        
                    
    }
    
    class TMP_SpriteInfo extends System.ValueType {
        
        public spriteIndex: number;
        
        public characterIndex: number;
        
        public vertexIndex: number;
        
        public get_Clone(): TMP_SpriteInfo;            
    }
    
    class Mesh_Extents extends System.ValueType {
        
        public min: UnityEngine.Vector2;
        
        public max: UnityEngine.Vector2;
        
        public constructor($min: UnityEngine.Vector2, $max: UnityEngine.Vector2);
        
        public ToString():string;
        
        public get_Clone(): Mesh_Extents;            
    }
    
    class WordWrapState extends System.ValueType {
        
        public previous_WordBreak: number;
        
        public total_CharacterCount: number;
        
        public visible_CharacterCount: number;
        
        public visible_SpriteCount: number;
        
        public visible_LinkCount: number;
        
        public firstCharacterIndex: number;
        
        public firstVisibleCharacterIndex: number;
        
        public lastCharacterIndex: number;
        
        public lastVisibleCharIndex: number;
        
        public lineNumber: number;
        
        public maxCapHeight: number;
        
        public maxAscender: number;
        
        public maxDescender: number;
        
        public startOfLineAscender: number;
        
        public maxLineAscender: number;
        
        public maxLineDescender: number;
        
        public pageAscender: number;
        
        public horizontalAlignment: HorizontalAlignmentOptions;
        
        public marginLeft: number;
        
        public marginRight: number;
        
        public xAdvance: number;
        
        public preferredWidth: number;
        
        public preferredHeight: number;
        
        public previousLineScale: number;
        
        public wordCount: number;
        
        public fontStyle: FontStyles;
        
        public italicAngle: number;
        
        public fontScaleMultiplier: number;
        
        public currentFontSize: number;
        
        public baselineOffset: number;
        
        public lineOffset: number;
        
        public isDrivenLineSpacing: boolean;
        
        public glyphHorizontalAdvanceAdjustment: number;
        
        public cSpace: number;
        
        public mSpace: number;
        
        public textInfo: TMP_TextInfo;
        
        public lineInfo: TMP_LineInfo;
        
        public vertexColor: UnityEngine.Color32;
        
        public underlineColor: UnityEngine.Color32;
        
        public strikethroughColor: UnityEngine.Color32;
        
        public highlightColor: UnityEngine.Color32;
        
        public basicStyleStack: TMP_FontStyleStack;
        
        public italicAngleStack: TMP_TextProcessingStack$1<number>;
        
        public colorStack: TMP_TextProcessingStack$1<UnityEngine.Color32>;
        
        public underlineColorStack: TMP_TextProcessingStack$1<UnityEngine.Color32>;
        
        public strikethroughColorStack: TMP_TextProcessingStack$1<UnityEngine.Color32>;
        
        public highlightColorStack: TMP_TextProcessingStack$1<UnityEngine.Color32>;
        
        public highlightStateStack: TMP_TextProcessingStack$1<HighlightState>;
        
        public colorGradientStack: TMP_TextProcessingStack$1<TMP_ColorGradient>;
        
        public sizeStack: TMP_TextProcessingStack$1<number>;
        
        public indentStack: TMP_TextProcessingStack$1<number>;
        
        public fontWeightStack: TMP_TextProcessingStack$1<FontWeight>;
        
        public styleStack: TMP_TextProcessingStack$1<number>;
        
        public baselineStack: TMP_TextProcessingStack$1<number>;
        
        public actionStack: TMP_TextProcessingStack$1<number>;
        
        public materialReferenceStack: TMP_TextProcessingStack$1<MaterialReference>;
        
        public lineJustificationStack: TMP_TextProcessingStack$1<HorizontalAlignmentOptions>;
        
        public spriteAnimationID: number;
        
        public currentFontAsset: TMP_FontAsset;
        
        public currentSpriteAsset: TMP_SpriteAsset;
        
        public currentMaterial: UnityEngine.Material;
        
        public currentMaterialIndex: number;
        
        public meshExtents: Extents;
        
        public tagNoParsing: boolean;
        
        public isNonBreakingSpace: boolean;
        
                    
    }
    
    interface TMP_TextProcessingStack$1<T> extends System.ValueType {
        
                    
    }
    
    class TagAttribute extends System.ValueType {
        
        public startIndex: number;
        
        public length: number;
        
        public hashCode: number;
        
        public get_Clone(): TagAttribute;            
    }
    
    class RichTextTagAttribute extends System.ValueType {
        
        public nameHashCode: number;
        
        public valueHashCode: number;
        
        public valueType: TagValueType;
        
        public valueStartIndex: number;
        
        public valueLength: number;
        
        public unitType: TagUnitType;
        
        public get_Clone(): RichTextTagAttribute;            
    }
    
    class TextContainer extends UnityEngine_EventSystems.UIBehaviour {
        
        public get hasChanged(): boolean;
        public set hasChanged(value: boolean);
        
        public get pivot(): UnityEngine.Vector2;
        public set pivot(value: UnityEngine.Vector2);
        
        public get anchorPosition(): TextContainerAnchors;
        public set anchorPosition(value: TextContainerAnchors);
        
        public get rect(): UnityEngine.Rect;
        public set rect(value: UnityEngine.Rect);
        
        public get size(): UnityEngine.Vector2;
        public set size(value: UnityEngine.Vector2);
        
        public get width(): number;
        public set width(value: number);
        
        public get height(): number;
        public set height(value: number);
        
        public get isDefaultWidth(): boolean;
        
        public get isDefaultHeight(): boolean;
        
        public get isAutoFitting(): boolean;
        public set isAutoFitting(value: boolean);
        
        public get corners(): UnityEngine.Vector3[];
        
        public get worldCorners(): UnityEngine.Vector3[];
        
        public get margins(): UnityEngine.Vector4;
        public set margins(value: UnityEngine.Vector4);
        
        public get rectTransform(): UnityEngine.RectTransform;
        
        public get textMeshPro(): TextMeshPro;
        
        public constructor();
        
                    
    }
    
    enum TextContainerAnchors { TopLeft = 0, Top = 1, TopRight = 2, Left = 3, Middle = 4, Right = 5, BottomLeft = 6, Bottom = 7, BottomRight = 8, Custom = 9 }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Char extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    type Func$3<T1,T2,TResult> = (arg1: T1, arg2: T2) => TResult;
    
    type Action$1<T> = (obj: T) => void;
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    interface String {
        /** @extension TMPro.TMPro_ExtensionMethods */
        ToIntArray():number[];
        
                    
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
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Representation of RGBA colors in 32 bit format.
     */
    interface Color32 extends System.ValueType {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
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
     * Position, size, anchor and pivot information for a rectangle.
     */
    interface RectTransform extends Transform {
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Represents a Sprite object for use in 2D gameplay.
     */
    interface Sprite extends Object {
        
                    
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
     * Script interface for.
     */
    interface Font extends Object {
        
                    
    }
    /**
     * Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported.
     */
    interface TouchScreenKeyboard extends System.Object {
        
                    
    }
    /**
     * Enumeration of the different types of supported touchscreen keyboards.
     */
    enum TouchScreenKeyboardType { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10, DecimalPad = 11, OneTimeCode = 12 }
    /**
     * A UnityGUI event.
     */
    interface Event extends System.Object {
        
                    
    }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * Text file assets.
     */
    interface TextAsset extends Object {
        
                    
    }
    /**
     * General functionality for all renderers.
     */
    interface Renderer extends Component {
        
                    
    }
    /**
     * A class to access the Mesh of the.
     */
    interface MeshFilter extends Component {
        
                    
    }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    /**
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
    }
    /**
     * A component that will render to the screen after all normal rendering has completed when attached to a Canvas. Designed for GUI application.
     */
    interface CanvasRenderer extends Component {
        
                    
    }    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface IList$1<T> {
        
                    
    }
    
    interface List$1 {
        /** @extension TMPro.TMPro_ExtensionMethods */
        FindInstanceID<T extends UnityEngine.Object>($target: T):number;
        
                    
    }
    
}
declare module 'UnityEngine.TextCore' {

    import * as System from 'System';
        
    /**
     * A Glyph is the visual representation of a text element or character.
     */
    interface Glyph extends System.Object {
        
                    
    }
    /**
     * A structure that contains information about a given typeface and for a specific point size.
     */
    interface FaceInfo extends System.ValueType {
        
                    
    }
    /**
     * A set of values that define the size, position and spacing of a glyph when performing text layout.
     */
    interface GlyphMetrics extends System.ValueType {
        
                    
    }
    /**
     * A rectangle that defines the position of a glyph within an atlas texture.
     */
    interface GlyphRect extends System.ValueType {
        
                    
    }
    
}
declare module 'TMPro.TMP_DefaultControls' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    
    class Resources extends System.ValueType {
        
        public standard: UnityEngine.Sprite;
        
        public background: UnityEngine.Sprite;
        
        public inputField: UnityEngine.Sprite;
        
        public knob: UnityEngine.Sprite;
        
        public checkmark: UnityEngine.Sprite;
        
        public dropdown: UnityEngine.Sprite;
        
        public mask: UnityEngine.Sprite;
        
                    
    }
    
}
declare module 'UnityEngine.UI' {

    import * as UnityEngine_EventSystems from 'UnityEngine.EventSystems';
        
    
    interface Selectable extends UnityEngine_EventSystems.UIBehaviour {
        
                    
    }
    
    interface MaskableGraphic extends Graphic {
        
                    
    }
    
    interface Graphic extends UnityEngine_EventSystems.UIBehaviour {
        
                    
    }
    
    interface Image extends MaskableGraphic {
        
                    
    }
    
    interface Scrollbar extends Selectable {
        
                    
    }
    
    enum CanvasUpdate { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
    
    interface ICanvasElement {
        
                    
    }
    
}
declare module 'UnityEngine.EventSystems' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    interface UIBehaviour extends UnityEngine.MonoBehaviour {
        
                    
    }
    
    interface PointerEventData extends BaseEventData {
        
                    
    }
    
    interface BaseEventData extends AbstractEventData {
        
                    
    }
    
    interface AbstractEventData extends System.Object {
        
                    
    }
    
}
declare module 'TMPro.TMP_Dropdown' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Events from 'UnityEngine.Events';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    
    class OptionData extends System.Object {
        
        public get text(): string;
        public set text(value: string);
        
        public get image(): UnityEngine.Sprite;
        public set image(value: UnityEngine.Sprite);
        
        public constructor();
        
        public constructor($text: string);
        
        public constructor($image: UnityEngine.Sprite);
        
        public constructor($text: string, $image: UnityEngine.Sprite);
        
                    
    }
    
    class DropdownEvent extends UnityEngine_Events.UnityEvent$1<number> {
        
        public constructor();
        
                    
    }
    
    class OptionDataList extends System.Object {
        
        public get options(): System_Collections_Generic.List$1<OptionData>;
        public set options(value: System_Collections_Generic.List$1<OptionData>);
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.Events' {

    import * as System from 'System';
        
    /**
     * One argument version of UnityEvent.
     */
    interface UnityEvent$1<T0> extends UnityEventBase {
        
                    
    }
    /**
     * Abstract base class for UnityEvents.
     */
    interface UnityEventBase extends System.Object {
        
                    
    }
    /**
     * Three argument version of UnityEvent.
     */
    interface UnityEvent$3<T0,T1,T2> extends UnityEventBase {
        
                    
    }
    
}
declare module 'UnityEngine.TextCore.LowLevel' {

        
    /**
     * The rendering modes used by the Font Engine to render glyphs.
     */
    enum GlyphRenderMode { SMOOTH_HINTED = 4121, SMOOTH = 4117, RASTER_HINTED = 4122, RASTER = 4118, SDF = 4134, SDF8 = 8230, SDF16 = 16422, SDF32 = 32806, SDFAA_HINTED = 4169, SDFAA = 4165 }
    
}
declare module 'TMPro.TMP_InputField' {

    import * as UnityEngine_Events from 'UnityEngine.Events';
    import * as System from 'System';
        
    
    class SubmitEvent extends UnityEngine_Events.UnityEvent$1<string> {
        
        public constructor();
        
                    
    }
    
    class SelectionEvent extends UnityEngine_Events.UnityEvent$1<string> {
        
        public constructor();
        
                    
    }
    
    class TextSelectionEvent extends UnityEngine_Events.UnityEvent$3<string, number, number> {
        
        public constructor();
        
                    
    }
    
    class OnChangeEvent extends UnityEngine_Events.UnityEvent$1<string> {
        
        public constructor();
        
                    
    }
    
    class TouchScreenKeyboardEvent extends UnityEngine_Events.UnityEvent$1<UnityEngine_TouchScreenKeyboard.Status> {
        
        public constructor();
        
                    
    }
    
    type OnValidateInput = (text: string, charIndex: number, addedChar: number) => number;
    var OnValidateInput: {new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput;}
    
    enum ContentType { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
    
    enum LineType { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
    
    enum InputType { Standard = 0, AutoCorrect = 1, Password = 2 }
    
    enum CharacterValidation { None = 0, Digit = 1, Integer = 2, Decimal = 3, Alphanumeric = 4, Name = 5, Regex = 6, EmailAddress = 7, CustomValidator = 8 }
    
}
declare module 'UnityEngine.TouchScreenKeyboard' {

        
    /**
     * The status of the on-screen keyboard.
     */
    enum Status { Visible = 0, Done = 1, Canceled = 2, LostFocus = 3 }
    
}
declare module 'UnityEditor' {

    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Derive from this class to create an editor window.
     */
    interface EditorWindow extends UnityEngine.ScriptableObject {
        
                    
    }
    
}
declare module 'TMPro.TMP_Settings' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    
    class LineBreakingTable extends System.Object {
        
        public leadingCharacters: System_Collections_Generic.Dictionary$2<number, number>;
        
        public followingCharacters: System_Collections_Generic.Dictionary$2<number, number>;
        
        public constructor();
        
                    
    }
    
}
declare module 'System.Text' {

    import * as System from 'System';
        
    
    interface StringBuilder extends System.Object {
        
                    
    }
    
}
declare module 'TMPro.SpriteAssetUtilities' {

    import * as System from 'System';
        
    
    enum SpriteAssetImportFormats { None = 0, TexturePackerJsonArray = 1 }
    
    class TexturePacker_JsonArray extends System.Object {
        
        public constructor();
        
                    
    }
    
}
declare module 'TMPro.TMP_Compatibility' {

    import * as System from 'System';
        
    
    enum AnchorPositions { TopLeft = 0, Top = 1, TopRight = 2, Left = 3, Center = 4, Right = 5, BottomLeft = 6, Bottom = 7, BottomRight = 8, BaseLine = 9, None = 10 }
    
}
declare module 'TMPro.SpriteAssetUtilities.TexturePacker_JsonArray' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    
    class SpriteFrame extends System.ValueType {
        
        public x: number;
        
        public y: number;
        
        public w: number;
        
        public h: number;
        
        public ToString():string;
        
        public get_Clone(): SpriteFrame;            
    }
    
    class SpriteSize extends System.ValueType {
        
        public w: number;
        
        public h: number;
        
        public ToString():string;
        
        public get_Clone(): SpriteSize;            
    }
    
    class Frame extends System.ValueType {
        
        public filename: string;
        
        public frame: SpriteFrame;
        
        public rotated: boolean;
        
        public trimmed: boolean;
        
        public spriteSourceSize: SpriteFrame;
        
        public sourceSize: SpriteSize;
        
        public pivot: UnityEngine.Vector2;
        
                    
    }
    
    class Meta extends System.ValueType {
        
        public app: string;
        
        public version: string;
        
        public image: string;
        
        public format: string;
        
        public size: SpriteSize;
        
        public scale: number;
        
        public smartupdate: string;
        
                    
    }
    
    class SpriteDataObject extends System.Object {
        
        public frames: System_Collections_Generic.List$1<Frame>;
        
        public meta: Meta;
        
        public constructor();
        
                    
    }
    
}

