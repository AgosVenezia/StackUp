//# signature=UnityEngine.TextCoreModule#cd3d1c58cfe381ec0675fd9b34edb005#0.0.4
// @ts-nocheck
declare module 'UnityEngine.TextCore' {

    import * as System from 'System';
        
    /**
     * A structure that contains information about a given typeface and for a specific point size.
     */
    class FaceInfo extends System.ValueType {
        /**
         * The name of the font typeface also known as family name.
         */
        public get familyName(): string;
        public set familyName(value: string);
        /**
         * The style name of the typeface which defines both the visual style and weight of the typeface.
         */
        public get styleName(): string;
        public set styleName(value: string);
        /**
         * The point size used for sampling the typeface.
         */
        public get pointSize(): number;
        public set pointSize(value: number);
        /**
         * The relative scale of the typeface.
         */
        public get scale(): number;
        public set scale(value: number);
        /**
         * The line height represents the distance between consecutive lines of text.
         */
        public get lineHeight(): number;
        public set lineHeight(value: number);
        /**
         * The Ascent line is typically located at the top of the tallest glyph in the typeface.
         */
        public get ascentLine(): number;
        public set ascentLine(value: number);
        /**
         * The Cap line is typically located at the top of capital letters.
         */
        public get capLine(): number;
        public set capLine(value: number);
        /**
         * The Mean line is typically located at the top of lowercase letters.
         */
        public get meanLine(): number;
        public set meanLine(value: number);
        /**
         * The Baseline is an imaginary line upon which all glyphs appear to rest on.
         */
        public get baseline(): number;
        public set baseline(value: number);
        /**
         * The Descent line is typically located at the bottom of the glyph with the lowest descender in the typeface.
         */
        public get descentLine(): number;
        public set descentLine(value: number);
        /**
         * The position of characters using superscript.
         */
        public get superscriptOffset(): number;
        public set superscriptOffset(value: number);
        /**
         * The relative size / scale of superscript characters.
         */
        public get superscriptSize(): number;
        public set superscriptSize(value: number);
        /**
         * The position of characters using subscript.
         */
        public get subscriptOffset(): number;
        public set subscriptOffset(value: number);
        /**
         * The relative size / scale of subscript characters.
         */
        public get subscriptSize(): number;
        public set subscriptSize(value: number);
        /**
         * The position of the underline.
         */
        public get underlineOffset(): number;
        public set underlineOffset(value: number);
        /**
         * The thickness of the underline.
         */
        public get underlineThickness(): number;
        public set underlineThickness(value: number);
        /**
         * The position of the strikethrough.
         */
        public get strikethroughOffset(): number;
        public set strikethroughOffset(value: number);
        /**
         * The thickness of the strikethrough.
         */
        public get strikethroughThickness(): number;
        public set strikethroughThickness(value: number);
        /**
         * The width of the tab character.
         */
        public get tabWidth(): number;
        public set tabWidth(value: number);
        /**
         * Compares the information in this FaceInfo structure with the information in the given FaceInfo structure to determine whether they have the same values.
         * @param other The FaceInfo structure to compare this FaceInfo structure with.
         * @returns Returns true if the FaceInfo structures have the same values. False if not.
         */
        public Compare($other: FaceInfo):boolean;
        
                    
    }
    /**
     * A rectangle that defines the position of a glyph within an atlas texture.
     */
    class GlyphRect extends System.ValueType {
        /**
         * The x position of the glyph in the font atlas texture.
         */
        public get x(): number;
        public set x(value: number);
        /**
         * The y position of the glyph in the font atlas texture.
         */
        public get y(): number;
        public set y(value: number);
        /**
         * The width of the glyph.
         */
        public get width(): number;
        public set width(value: number);
        /**
         * The height of the glyph.
         */
        public get height(): number;
        public set height(value: number);
        /**
         * A GlyphRect with all values set to zero. Shorthand for writing GlyphRect(0, 0, 0, 0).
         */
        public static get zero(): GlyphRect;
        /**
         * Constructor for a new GlyphRect.
         * @param x The x position of the glyph in the atlas texture.
         * @param y The y position of the glyph in the atlas texture.
         * @param width The width of the glyph.
         * @param height The height of the glyph.
         * @param rect The Rect used to construct the new GlyphRect.
         */
        public constructor($x: number, $y: number, $width: number, $height: number);
        /**
         * Constructor for a new GlyphRect.
         * @param x The x position of the glyph in the atlas texture.
         * @param y The y position of the glyph in the atlas texture.
         * @param width The width of the glyph.
         * @param height The height of the glyph.
         * @param rect The Rect used to construct the new GlyphRect.
         */
        public constructor($rect: UnityEngine.Rect);
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: GlyphRect):boolean;
        
        public static op_Equality($lhs: GlyphRect, $rhs: GlyphRect):boolean;
        
        public static op_Inequality($lhs: GlyphRect, $rhs: GlyphRect):boolean;
        
        public get_Clone(): GlyphRect;            
    }
    /**
     * A set of values that define the size, position and spacing of a glyph when performing text layout.
     */
    class GlyphMetrics extends System.ValueType {
        /**
         * The width of the glyph.
         */
        public get width(): number;
        public set width(value: number);
        /**
         * The height of the glyph.
         */
        public get height(): number;
        public set height(value: number);
        /**
         * The horizontal distance from the current drawing position (origin) relative to the element's left bounding box edge (bbox).
         */
        public get horizontalBearingX(): number;
        public set horizontalBearingX(value: number);
        /**
         * The vertical distance from the current baseline relative to the element's top bounding box edge (bbox).
         */
        public get horizontalBearingY(): number;
        public set horizontalBearingY(value: number);
        /**
         * The horizontal distance to increase (left to right) or decrease (right to left) the drawing position relative to the origin of the text element.
         */
        public get horizontalAdvance(): number;
        public set horizontalAdvance(value: number);
        /**
         * Constructs a new GlyphMetrics structure.
         * @param width The width of the glyph.
         * @param height The height of the glyph.
         * @param bearingX The horizontal bearingX.
         * @param bearingY The horizontal bearingY.
         * @param advance The horizontal advance.
         */
        public constructor($width: number, $height: number, $bearingX: number, $bearingY: number, $advance: number);
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: GlyphMetrics):boolean;
        
        public static op_Equality($lhs: GlyphMetrics, $rhs: GlyphMetrics):boolean;
        
        public static op_Inequality($lhs: GlyphMetrics, $rhs: GlyphMetrics):boolean;
        
        public get_Clone(): GlyphMetrics;            
    }
    /**
     * A Glyph is the visual representation of a text element or character.
     */
    class Glyph extends System.Object {
        /**
         * The index of the glyph in the source font file.
         */
        public get index(): number;
        public set index(value: number);
        /**
         * The metrics that define the size, position and spacing of a glyph when performing text layout.
         */
        public get metrics(): GlyphMetrics;
        public set metrics(value: GlyphMetrics);
        /**
         * A rectangle that defines the position of a glyph within an atlas texture.
         */
        public get glyphRect(): GlyphRect;
        public set glyphRect(value: GlyphRect);
        /**
         * The relative scale of the glyph. The default value is 1.0.
         */
        public get scale(): number;
        public set scale(value: number);
        /**
         * The index of the atlas texture that contains this glyph.
         */
        public get atlasIndex(): number;
        public set atlasIndex(value: number);
        /**
         * Constructor for a new glyph.
         * @param glyph Glyph used as a reference for the new glyph.
         * @param index The index of the glyph in the font file.
         * @param metrics The metrics of the glyph.
         * @param glyphRect The GlyphRect defining the position of the glyph in the atlas texture.
         * @param scale The relative scale of the glyph.
         * @param atlasIndex The index of the atlas texture that contains the glyph.
         */
        public constructor();
        /**
         * Constructor for a new glyph.
         * @param glyph Glyph used as a reference for the new glyph.
         * @param index The index of the glyph in the font file.
         * @param metrics The metrics of the glyph.
         * @param glyphRect The GlyphRect defining the position of the glyph in the atlas texture.
         * @param scale The relative scale of the glyph.
         * @param atlasIndex The index of the atlas texture that contains the glyph.
         */
        public constructor($glyph: Glyph);
        /**
         * Constructor for a new glyph.
         * @param glyph Glyph used as a reference for the new glyph.
         * @param index The index of the glyph in the font file.
         * @param metrics The metrics of the glyph.
         * @param glyphRect The GlyphRect defining the position of the glyph in the atlas texture.
         * @param scale The relative scale of the glyph.
         * @param atlasIndex The index of the atlas texture that contains the glyph.
         */
        public constructor($index: number, $metrics: GlyphMetrics, $glyphRect: GlyphRect);
        /**
         * Constructor for a new glyph.
         * @param glyph Glyph used as a reference for the new glyph.
         * @param index The index of the glyph in the font file.
         * @param metrics The metrics of the glyph.
         * @param glyphRect The GlyphRect defining the position of the glyph in the atlas texture.
         * @param scale The relative scale of the glyph.
         * @param atlasIndex The index of the atlas texture that contains the glyph.
         */
        public constructor($index: number, $metrics: GlyphMetrics, $glyphRect: GlyphRect, $scale: number, $atlasIndex: number);
        /**
         * Compares two glyphs to determine if they have the same values.
         * @param other The glyph to compare with.
         * @returns Returns true if the glyphs have the same values. False if not.
         */
        public Compare($other: Glyph):boolean;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * Script interface for.
     */
    interface Font extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.TextCore.LowLevel' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_TextCore from 'UnityEngine.TextCore';
        
    
    enum FontFeatureLookupFlags { None = 0, IgnoreLigatures = 4, IgnoreSpacingAdjustments = 256 }
    /**
     * The values used to adjust the position of a glyph or set of glyphs.
     */
    class GlyphValueRecord extends System.ValueType {
        /**
         * The positional adjustment that affects the horizontal bearing X of the glyph.
         */
        public get xPlacement(): number;
        public set xPlacement(value: number);
        /**
         * The positional adjustment that affectsthe horizontal bearing Y of the glyph.
         */
        public get yPlacement(): number;
        public set yPlacement(value: number);
        /**
         * The positional adjustment that affects the horizontal advance of the glyph.
         */
        public get xAdvance(): number;
        public set xAdvance(value: number);
        /**
         * The positional adjustment that affects the vertical advance of the glyph.
         */
        public get yAdvance(): number;
        public set yAdvance(value: number);
        /**
         * Constructor for new glyph value record.
         * @param xPlacement The positional adjustment that affects the horizontal bearing X of the glyph.
         * @param yPlacement The positional adjustment that affects the horizontal bearing Y of the glyph.
         * @param xAdvance The positional adjustment that affects the horizontal advance of the glyph.
         * @param yAdvance The positional adjustment that affects the vertical advance of the glyph.
         */
        public constructor($xPlacement: number, $yPlacement: number, $xAdvance: number, $yAdvance: number);
        
        public static op_Addition($a: GlyphValueRecord, $b: GlyphValueRecord):GlyphValueRecord;
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: GlyphValueRecord):boolean;
        
        public static op_Equality($lhs: GlyphValueRecord, $rhs: GlyphValueRecord):boolean;
        
        public static op_Inequality($lhs: GlyphValueRecord, $rhs: GlyphValueRecord):boolean;
        
        public get_Clone(): GlyphValueRecord;            
    }
    /**
     * The positional adjustment values of a glyph.
     */
    class GlyphAdjustmentRecord extends System.ValueType {
        /**
         * The index of the glyph in the source font file.
         */
        public get glyphIndex(): number;
        public set glyphIndex(value: number);
        /**
         * The GlyphValueRecord contains the positional adjustments of the glyph.
         */
        public get glyphValueRecord(): GlyphValueRecord;
        public set glyphValueRecord(value: GlyphValueRecord);
        /**
         * Constructor for new glyph adjustment record.
         * @param glyphIndex The index of the glyph in the source font file.
         * @param glyphValueRecord The GlyphValueRecord contains the positional adjustments of the glyph.
         */
        public constructor($glyphIndex: number, $glyphValueRecord: GlyphValueRecord);
        
        public get_Clone(): GlyphAdjustmentRecord;            
    }
    /**
     * The positional adjustment  values of a pair of glyphs.
     */
    class GlyphPairAdjustmentRecord extends System.ValueType {
        /**
         * The positional adjustment values for the first glyph.
         */
        public get firstAdjustmentRecord(): GlyphAdjustmentRecord;
        public set firstAdjustmentRecord(value: GlyphAdjustmentRecord);
        /**
         * The positional adjustment values for the second glyph.
         */
        public get secondAdjustmentRecord(): GlyphAdjustmentRecord;
        public set secondAdjustmentRecord(value: GlyphAdjustmentRecord);
        
        public get featureLookupFlags(): FontFeatureLookupFlags;
        public set featureLookupFlags(value: FontFeatureLookupFlags);
        /**
         * Constructor for new glyph pair adjustment record.
         * @param firstAdjustmentRecord The positional adjustment values for the first glyph.
         * @param secondAdjustmentRecord The positional adjustment values for the second glyph.
         */
        public constructor($firstAdjustmentRecord: GlyphAdjustmentRecord, $secondAdjustmentRecord: GlyphAdjustmentRecord);
        
        public get_Clone(): GlyphPairAdjustmentRecord;            
    }
    /**
     * The various options (flags) used by the FontEngine when loading glyphs from a font face.
     */
    enum GlyphLoadFlags { LOAD_DEFAULT = 0, LOAD_NO_SCALE = 1, LOAD_NO_HINTING = 2, LOAD_RENDER = 4, LOAD_NO_BITMAP = 8, LOAD_FORCE_AUTOHINT = 32, LOAD_MONOCHROME = 4096, LOAD_NO_AUTOHINT = 32768, LOAD_COMPUTE_METRICS = 2097152, LOAD_BITMAP_METRICS_ONLY = 4194304 }
    /**
     * Error code returned by the various FontEngine functions.
     */
    enum FontEngineError { Success = 0, Invalid_File_Path = 1, Invalid_File_Format = 2, Invalid_File_Structure = 3, Invalid_File = 4, Invalid_Table = 8, Invalid_Glyph_Index = 16, Invalid_Character_Code = 17, Invalid_Pixel_Size = 23, Invalid_Library = 33, Invalid_Face = 35, Invalid_Library_or_Face = 41, Atlas_Generation_Cancelled = 100, Invalid_SharedTextureData = 101 }
    /**
     * The rendering modes used by the Font Engine to render glyphs.
     */
    enum GlyphRenderMode { SMOOTH_HINTED = 4121, SMOOTH = 4117, RASTER_HINTED = 4122, RASTER = 4118, SDF = 4134, SDF8 = 8230, SDF16 = 16422, SDF32 = 32806, SDFAA_HINTED = 4169, SDFAA = 4165 }
    /**
     * The modes available when packing glyphs into an atlas texture.
     */
    enum GlyphPackingMode { BestShortSideFit = 0, BestLongSideFit = 1, BestAreaFit = 2, BottomLeftRule = 3, ContactPointRule = 4 }
    /**
     * The FontEngine is used to access data from source font files. This includes information about individual characters, glyphs and relevant metrics typically used in the process of text parsing, layout and rendering.
     * The types of font files supported are TrueType (.ttf, .ttc) and OpenType (.otf).
     * The FontEngine is also used to raster the visual representation of characters known as glyphs in a given font atlas texture.
     */
    class FontEngine extends System.Object {
        /**
         * Initialize the Font Engine and required resources.
         * @returns A value of zero (0) if the initialization of the Font Engine was successful.
         */
        public static InitializeFontEngine():FontEngineError;
        /**
         * Destroy and unload resources used by the Font Engine.
         * @returns A value of zero (0) if the Font Engine and used resources were successfully released.
         */
        public static DestroyFontEngine():FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($filePath: string):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($filePath: string, $pointSize: number):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($filePath: string, $pointSize: number, $faceIndex: number):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($sourceFontFile: number[]):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($sourceFontFile: number[], $pointSize: number):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($sourceFontFile: number[], $pointSize: number, $faceIndex: number):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($font: UnityEngine.Font):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($font: UnityEngine.Font, $pointSize: number):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($font: UnityEngine.Font, $pointSize: number, $faceIndex: number):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($familyName: string, $styleName: string):FontEngineError;
        /**
         * Load a source font file.
         * @param filePath The path of the source font file relative to the project.
         * @param pointSize The point size used to scale the font face.
         * @param sourceFontFile The byte array that contains the source font file.
         * @param font The font to load the data from. The Unity font must be set to Dynamic mode with Include Font Data selected.
         * @param faceIndex The face index of the font face to load. When the font file is a TrueType collection (.TTC), this specifies the face index of the font face to load. If the font file is a TrueType Font (.TTF) or OpenType Font (.OTF) file, the face index is always zero (0).
         * @param familyName The family name of the font face to load.
         * @param styleName The style name of the font face to load.
         * @returns A value of zero (0) if the font face was loaded successfully.
         */
        public static LoadFontFace($familyName: string, $styleName: string, $pointSize: number):FontEngineError;
        /**
         * Unloads current font face and removes it from the cache.
         * @returns A value of zero (0) if the font face was successfully unloaded and removed from the cache.
         */
        public static UnloadFontFace():FontEngineError;
        /**
         * Unloads all currently loaded font faces and removes them from the cache.
         * @returns A value of zero (0) if the font faces were successfully unloaded and removed from the cache.
         */
        public static UnloadAllFontFaces():FontEngineError;
        /**
         * Gets the family names and styles of the system fonts.
         * @returns The names and styles of the system fonts.
         */
        public static GetSystemFontNames():string[];
        /**
         * Set the size of the currently loaded font face.
         * @param pointSize The point size used to scale the font face.
         * @returns A value of zero (0) if the font face was successfully scaled to the given point size.
         */
        public static SetFaceSize($pointSize: number):FontEngineError;
        /**
         * Get the FaceInfo for the currently loaded and sized typeface.
         * @returns Returns the FaceInfo of the currently loaded typeface.
         */
        public static GetFaceInfo():UnityEngine_TextCore.FaceInfo;
        /**
         * Gets the font faces and styles for the currently loaded font.
         * @returns An array that contains the names of the font faces and styles.
         */
        public static GetFontFaces():string[];
        /**
         * Try to get the glyph index for the character at the given Unicode value.
         * @param unicode The unicode value of the character for which to lookup the glyph index.
         * @param glyphIndex The index of the glyph for the given unicode character or the .notdef glyph (index 0) if no glyph is available for the given Unicode value.
         * @returns Returns true if the given unicode has a glyph index.
         */
        public static TryGetGlyphIndex($unicode: number, $glyphIndex: $Ref<number>):boolean;
        /**
         * Try loading a glyph for the given unicode value. If available, populates the glyph and returns true. Otherwise returns false and populates the glyph with the .notdef / missing glyph data.
         * @param flags The glyph loading flag that should be used to load the glyph.
         * @param glyph The glyph using the provided index or the .notdef glyph (index 0) if no glyph was found at that index.
         * @param unicode The Unicode value of the character whose glyph should be loaded.
         * @returns Returns true if a glyph exists for the given unicode value. Otherwise returns false.
         */
        public static TryGetGlyphWithUnicodeValue($unicode: number, $flags: GlyphLoadFlags, $glyph: $Ref<UnityEngine_TextCore.Glyph>):boolean;
        /**
         * Try loading the glyph for the given index value and if available populate the glyph.
         * @param glyphIndex The index of the glyph that should be loaded.
         * @param flags The glyph loading flag that should be used to load the glyph.
         * @param glyph The glyph using the provided index or the .notdef glyph (index 0) if no glyph was found at that index.
         * @returns Returns true if a glyph exists at the given index. Otherwise returns false.
         */
        public static TryGetGlyphWithIndexValue($glyphIndex: number, $flags: GlyphLoadFlags, $glyph: $Ref<UnityEngine_TextCore.Glyph>):boolean;
        
                    
    }
    
}

