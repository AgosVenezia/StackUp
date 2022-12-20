//# signature=UnityEngine.TextRenderingModule#fc06703b989af2a4cf28c93d85980a01#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Font Style applied to GUI Texts, Text Meshes or GUIStyles.
     */
    enum FontStyle { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
    /**
     * A struct that stores the settings for TextGeneration.
     */
    class TextGenerationSettings extends System.ValueType {
        /**
         * Font to use for generation.
         */
        public font: Font;
        /**
         * The base color for the text generation.
         */
        public color: Color;
        /**
         * Font size.
         */
        public fontSize: number;
        /**
         * The line spacing multiplier.
         */
        public lineSpacing: number;
        /**
         * Allow rich text markup in generation.
         */
        public richText: boolean;
        /**
         * A scale factor for the text. This is useful if the Text is on a Canvas and the canvas is scaled.
         */
        public scaleFactor: number;
        /**
         * Font style.
         */
        public fontStyle: FontStyle;
        /**
         * How is the generated text anchored.
         */
        public textAnchor: TextAnchor;
        /**
         * Use the extents of glyph geometry to perform horizontal alignment rather than glyph metrics.
         */
        public alignByGeometry: boolean;
        /**
         * Should the text be resized to fit the configured bounds?
         */
        public resizeTextForBestFit: boolean;
        /**
         * Minimum size for resized text.
         */
        public resizeTextMinSize: number;
        /**
         * Maximum size for resized text.
         */
        public resizeTextMaxSize: number;
        /**
         * Should the text generator update the bounds from the generated text.
         */
        public updateBounds: boolean;
        /**
         * What happens to text when it reaches the bottom generation bounds.
         */
        public verticalOverflow: VerticalWrapMode;
        /**
         * What happens to text when it reaches the horizontal generation bounds.
         */
        public horizontalOverflow: HorizontalWrapMode;
        /**
         * Extents that the generator will attempt to fit the text in.
         */
        public generationExtents: Vector2;
        /**
         * Generated vertices are offset by the pivot.
         */
        public pivot: Vector2;
        /**
         * Continue to generate characters even if the text runs out of bounds.
         */
        public generateOutOfBounds: boolean;
        
        public Equals($other: TextGenerationSettings):boolean;
        
                    
    }
    /**
     * Script interface for.
     */
    class Font extends Object {
        /**
         * The material used for the font display.
         */
        public get material(): Material;
        public set material(value: Material);
        
        public get fontNames(): string[];
        public set fontNames(value: string[]);
        /**
         * Is the font a dynamic font.
         */
        public get dynamic(): boolean;
        /**
         * The ascent of the font.
         */
        public get ascent(): number;
        /**
         * The default size of the font.
         */
        public get fontSize(): number;
        /**
         * Access an array of all characters contained in the font texture.
         */
        public get characterInfo(): CharacterInfo[];
        public set characterInfo(value: CharacterInfo[]);
        /**
         * The line height of the font.
         */
        public get lineHeight(): number;
        /**
         * Create a new Font.
         * @param name The name of the created Font object.
         */
        public constructor();
        /**
         * Create a new Font.
         * @param name The name of the created Font object.
         */
        public constructor($name: string);
        
        public static add_textureRebuilt($value: System.Action$1<Font>):void;
        
        public static remove_textureRebuilt($value: System.Action$1<Font>):void;
        /**
         * Creates a Font object which lets you render a font installed on the user machine.
         * @param fontname The name of the OS font to use for this font object.
         * @param size The default character size of the generated font.
         * @param fontnames Am array of names of OS fonts to use for this font object. When rendering characters using this font object, the first font which is installed on the machine, which contains the requested character will be used.
         * @returns The generate Font object.
         */
        public static CreateDynamicFontFromOSFont($fontname: string, $size: number):Font;
        /**
         * Creates a Font object which lets you render a font installed on the user machine.
         * @param fontname The name of the OS font to use for this font object.
         * @param size The default character size of the generated font.
         * @param fontnames Am array of names of OS fonts to use for this font object. When rendering characters using this font object, the first font which is installed on the machine, which contains the requested character will be used.
         * @returns The generate Font object.
         */
        public static CreateDynamicFontFromOSFont($fontnames: string[], $size: number):Font;
        /**
         * Returns the maximum number of verts that the text generator may return for a given string.
         * @param str Input string.
         */
        public static GetMaxVertsForString($str: string):number;
        /**
         * Does this font have a specific character?
         * @param c The character to check for.
         * @returns Whether or not the font has the character specified.
         */
        public HasCharacter($c: number):boolean;
        /**
         * Get names of fonts installed on the machine.
         * @returns An array of the names of all fonts installed on the machine.
         */
        public static GetOSInstalledFontNames():string[];
        /**
         * Gets the file paths of the fonts that are installed on the operating system.
         * @returns An array of the file paths of all fonts installed on the machine.
         */
        public static GetPathsToOSFonts():string[];
        /**
         * Get rendering info for a specific character.
         * @param ch The character you need rendering information for.
         * @param info Returns the CharacterInfo struct with the rendering information for the character (if available).
         * @param size The size of the character (default value of zero will use font default size).
         * @param style The style of the character.
         */
        public GetCharacterInfo($ch: number, $info: $Ref<CharacterInfo>, $size: number, $style: FontStyle):boolean;
        /**
         * Get rendering info for a specific character.
         * @param ch The character you need rendering information for.
         * @param info Returns the CharacterInfo struct with the rendering information for the character (if available).
         * @param size The size of the character (default value of zero will use font default size).
         * @param style The style of the character.
         */
        public GetCharacterInfo($ch: number, $info: $Ref<CharacterInfo>, $size: number):boolean;
        /**
         * Get rendering info for a specific character.
         * @param ch The character you need rendering information for.
         * @param info Returns the CharacterInfo struct with the rendering information for the character (if available).
         * @param size The size of the character (default value of zero will use font default size).
         * @param style The style of the character.
         */
        public GetCharacterInfo($ch: number, $info: $Ref<CharacterInfo>):boolean;
        /**
         * Request characters to be added to the font texture (dynamic fonts only).
         * @param characters The characters which are needed to be in the font texture.
         * @param size The size of the requested characters (the default value of zero will use the font's default size).
         * @param style The style of the requested characters.
         */
        public RequestCharactersInTexture($characters: string, $size: number, $style: FontStyle):void;
        
        public RequestCharactersInTexture($characters: string, $size: number):void;
        
        public RequestCharactersInTexture($characters: string):void;
        
        public static textureRebuilt;
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * Where the anchor of the text is placed.
     */
    enum TextAnchor { UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
    /**
     * Wrapping modes for text that reaches the vertical boundary.
     */
    enum VerticalWrapMode { Truncate = 0, Overflow = 1 }
    /**
     * Wrapping modes for text that reaches the horizontal boundary.
     */
    enum HorizontalWrapMode { Wrap = 0, Overflow = 1 }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Class that can be used to generate text for rendering.
     */
    class TextGenerator extends System.Object {
        /**
         * The number of characters that have been generated and are included in the visible lines.
         */
        public get characterCountVisible(): number;
        /**
         * Array of generated vertices.
         */
        public get verts(): System_Collections_Generic.IList$1<UIVertex>;
        /**
         * Array of generated characters.
         */
        public get characters(): System_Collections_Generic.IList$1<UICharInfo>;
        /**
         * Information about each generated text line.
         */
        public get lines(): System_Collections_Generic.IList$1<UILineInfo>;
        /**
         * Extents of the generated text in rect format.
         */
        public get rectExtents(): Rect;
        /**
         * Number of vertices generated.
         */
        public get vertexCount(): number;
        /**
         * The number of characters that have been generated.
         */
        public get characterCount(): number;
        /**
         * Number of text lines generated.
         */
        public get lineCount(): number;
        /**
         * The size of the font that was found if using best fit mode.
         */
        public get fontSizeUsedForBestFit(): number;
        /**
         * Create a TextGenerator.
         */
        public constructor();
        /**
         * Create a TextGenerator.
         */
        public constructor($initialCapacity: number);
        /**
         * Mark the text generator as invalid. This will force a full text generation the next time Populate is called.
         */
        public Invalidate():void;
        
        public GetCharacters($characters: System_Collections_Generic.List$1<UICharInfo>):void;
        
        public GetLines($lines: System_Collections_Generic.List$1<UILineInfo>):void;
        
        public GetVertices($vertices: System_Collections_Generic.List$1<UIVertex>):void;
        /**
         * Given a string and settings, returns the preferred width for a container that would hold this text.
         * @param str Generation text.
         * @param settings Settings for generation.
         * @returns Preferred width.
         */
        public GetPreferredWidth($str: string, $settings: TextGenerationSettings):number;
        /**
         * Given a string and settings, returns the preferred height for a container that would hold this text.
         * @param str Generation text.
         * @param settings Settings for generation.
         * @returns Preferred height.
         */
        public GetPreferredHeight($str: string, $settings: TextGenerationSettings):number;
        /**
         * Will generate the vertices and other data for the given string with the given settings.
         * @param str String to generate.
         * @param settings Generation settings.
         * @param context The object used as context of the error log message, if necessary.
         * @returns True if the generation is a success, false otherwise.
         */
        public PopulateWithErrors($str: string, $settings: TextGenerationSettings, $context: GameObject):boolean;
        /**
         * Will generate the vertices and other data for the given string with the given settings.
         * @param str String to generate.
         * @param settings Settings.
         */
        public Populate($str: string, $settings: TextGenerationSettings):boolean;
        /**
         * Returns the current UIVertex array.
         * @returns Vertices.
         */
        public GetVerticesArray():UIVertex[];
        /**
         * Returns the current UICharInfo.
         * @returns Character information.
         */
        public GetCharactersArray():UICharInfo[];
        /**
         * Returns the current UILineInfo.
         * @returns Line information.
         */
        public GetLinesArray():UILineInfo[];
        
                    
    }
    /**
     * Class that specifies some information about a renderable character.
     */
    class UICharInfo extends System.ValueType {
        /**
         * Position of the character cursor in local (text generated) space.
         */
        public cursorPos: Vector2;
        /**
         * Character width.
         */
        public charWidth: number;
        
        public get_Clone(): UICharInfo;            
    }
    /**
     * Information about a generated line of text.
     */
    class UILineInfo extends System.ValueType {
        /**
         * Index of the first character in the line.
         */
        public startCharIdx: number;
        /**
         * Height of the line.
         */
        public height: number;
        /**
         * The upper Y position of the line in pixels. This is used for text annotation such as the caret and selection box in the InputField.
         */
        public topY: number;
        /**
         * Space in pixels between this line and the next line.
         */
        public leading: number;
        
        public get_Clone(): UILineInfo;            
    }
    /**
     * Vertex class used by a Canvas for managing vertices.
     */
    class UIVertex extends System.ValueType {
        /**
         * Vertex position.
         */
        public position: Vector3;
        /**
         * Normal.
         */
        public normal: Vector3;
        /**
         * Tangent.
         */
        public tangent: Vector4;
        /**
         * Vertex color.
         */
        public color: Color32;
        /**
         * The first texture coordinate set of the mesh. Used by UI elements by default.
         */
        public uv0: Vector4;
        /**
         * The second texture coordinate set of the mesh, if present.
         */
        public uv1: Vector4;
        /**
         * The Third texture coordinate set of the mesh, if present.
         */
        public uv2: Vector4;
        /**
         * The forth texture coordinate set of the mesh, if present.
         */
        public uv3: Vector4;
        /**
         * Simple UIVertex with sensible settings for use in the UI system.
         */
        public static simpleVert: UIVertex;
        
        public get_Clone(): UIVertex;            
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * How multiline text should be aligned.
     */
    enum TextAlignment { Left = 0, Center = 1, Right = 2 }
    /**
     * A script interface for the.
     */
    class TextMesh extends Component {
        /**
         * The text that is displayed.
         */
        public get text(): string;
        public set text(value: string);
        /**
         * The Font used.
         */
        public get font(): Font;
        public set font(value: Font);
        /**
         * The font size to use (for dynamic fonts).
         */
        public get fontSize(): number;
        public set fontSize(value: number);
        /**
         * The font style to use (for dynamic fonts).
         */
        public get fontStyle(): FontStyle;
        public set fontStyle(value: FontStyle);
        /**
         * How far should the text be offset from the transform.position.z when drawing.
         */
        public get offsetZ(): number;
        public set offsetZ(value: number);
        /**
         * How lines of text are aligned (Left, Right, Center).
         */
        public get alignment(): TextAlignment;
        public set alignment(value: TextAlignment);
        /**
         * Which point of the text shares the position of the Transform.
         */
        public get anchor(): TextAnchor;
        public set anchor(value: TextAnchor);
        /**
         * The size of each character (This scales the whole text).
         */
        public get characterSize(): number;
        public set characterSize(value: number);
        /**
         * How much space will be in-between lines of text.
         */
        public get lineSpacing(): number;
        public set lineSpacing(value: number);
        /**
         * How much space will be inserted for a tab '\t' character. This is a multiplum of the 'spacebar' character offset.
         */
        public get tabSize(): number;
        public set tabSize(value: number);
        /**
         * Enable HTML-style tags for Text Formatting Markup.
         */
        public get richText(): boolean;
        public set richText(value: boolean);
        /**
         * The color used to render the text.
         */
        public get color(): Color;
        public set color(value: Color);
        
        public constructor();
        
                    
    }
    /**
     * Base class for everything attached to GameObjects.
     */
    interface Component extends Object {
        
                    
    }
    /**
     * Specification for how to render a character from the font texture. See Font.characterInfo.
     */
    class CharacterInfo extends System.ValueType {
        /**
         * Unicode value of the character.
         */
        public index: number;
        /**
         * The size of the character or 0 if it is the default font size.
         */
        public size: number;
        /**
         * The style of the character.
         */
        public style: FontStyle;
        /**
         * The horizontal distance, rounded to the nearest integer, from the origin of this character to the origin of the next character.
         */
        public get advance(): number;
        public set advance(value: number);
        /**
         * The width of the glyph image.
         */
        public get glyphWidth(): number;
        public set glyphWidth(value: number);
        /**
         * The height of the glyph image.
         */
        public get glyphHeight(): number;
        public set glyphHeight(value: number);
        /**
         * The horizontal distance from the origin of this glyph to the begining of the glyph image.
         */
        public get bearing(): number;
        public set bearing(value: number);
        /**
         * The minimum extend of the glyph image in the y-axis.
         */
        public get minY(): number;
        public set minY(value: number);
        /**
         * The maximum extend of the glyph image in the y-axis.
         */
        public get maxY(): number;
        public set maxY(value: number);
        /**
         * The minium extend of the glyph image in the x-axis.
         */
        public get minX(): number;
        public set minX(value: number);
        /**
         * The maximum extend of the glyph image in the x-axis.
         */
        public get maxX(): number;
        public set maxX(value: number);
        /**
         * The uv coordinate matching the bottom left of the glyph image in the font texture.
         */
        public get uvBottomLeft(): Vector2;
        public set uvBottomLeft(value: Vector2);
        /**
         * The uv coordinate matching the bottom right of the glyph image in the font texture.
         */
        public get uvBottomRight(): Vector2;
        public set uvBottomRight(value: Vector2);
        /**
         * The uv coordinate matching the top right of the glyph image in the font texture.
         */
        public get uvTopRight(): Vector2;
        public set uvTopRight(value: Vector2);
        /**
         * The uv coordinate matching the top left of the glyph image in the font texture.
         */
        public get uvTopLeft(): Vector2;
        public set uvTopLeft(value: Vector2);
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * Representation of RGBA colors in 32 bit format.
     */
    interface Color32 extends System.ValueType {
        
                    
    }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
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
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Char extends ValueType {
        
                    
    }
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface IList$1<T> {
        
                    
    }
    
}
declare module 'UnityEngine.Font' {

    import * as System from 'System';
        
    
    type FontTextureRebuildCallback = () => void;
    var FontTextureRebuildCallback: {new (func: () => void): FontTextureRebuildCallback;}
    
}

