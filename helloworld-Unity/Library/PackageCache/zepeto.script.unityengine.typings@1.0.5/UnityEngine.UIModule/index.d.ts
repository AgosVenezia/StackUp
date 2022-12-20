//# signature=UnityEngine.UIModule#b8b1426bf5f95b69bd3fa757133a35c5#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_CanvasRenderer from 'UnityEngine.CanvasRenderer';
    import * as UnityEngine_Canvas from 'UnityEngine.Canvas';
    import * as UnityEngine_UISystemProfilerApi from 'UnityEngine.UISystemProfilerApi';
        
    /**
     * This element can filter raycasts. If the top level element is hit it can further 'check' if the location is valid.
     */
    interface ICanvasRaycastFilter {
        /**
         * Given a point and a camera is the raycast valid.
         * @param sp Screen position.
         * @param eventCamera Raycast camera.
         * @returns Valid.
         */
        IsRaycastLocationValid($sp: Vector2, $eventCamera: Camera):boolean;
        
                    
    }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
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
     * A Canvas placable element that can be used to modify children Alpha, Raycasting, Enabled state.
     */
    class CanvasGroup extends Behaviour {
        /**
         * Set the alpha of the group.
         */
        public get alpha(): number;
        public set alpha(value: number);
        /**
         * Is the group interactable (are the elements beneath the group enabled).
         */
        public get interactable(): boolean;
        public set interactable(value: boolean);
        /**
         * Does this group block raycasting (allow collision).
         */
        public get blocksRaycasts(): boolean;
        public set blocksRaycasts(value: boolean);
        /**
         * Should the group ignore parent groups?
         */
        public get ignoreParentGroups(): boolean;
        public set ignoreParentGroups(value: boolean);
        
        public constructor();
        /**
         * Returns true if the Group allows raycasts.
         */
        public IsRaycastLocationValid($sp: Vector2, $eventCamera: Camera):boolean;
        
                    
    }
    /**
     * A component that will render to the screen after all normal rendering has completed when attached to a Canvas. Designed for GUI application.
     */
    class CanvasRenderer extends Component {
        /**
         * Enable 'render stack' pop draw call.
         */
        public get hasPopInstruction(): boolean;
        public set hasPopInstruction(value: boolean);
        /**
         * The number of materials usable by this renderer.
         */
        public get materialCount(): number;
        public set materialCount(value: number);
        /**
         * The number of materials usable by this renderer. Used internally for masking.
         */
        public get popMaterialCount(): number;
        public set popMaterialCount(value: number);
        /**
         * Depth of the renderer relative to the root canvas.
         */
        public get absoluteDepth(): number;
        /**
         * True if any change has occured that would invalidate the positions of generated geometry.
         */
        public get hasMoved(): boolean;
        /**
         * Indicates whether geometry emitted by this renderer can be ignored when the vertex color alpha is close to zero for every vertex of the mesh.
         */
        public get cullTransparentMesh(): boolean;
        public set cullTransparentMesh(value: boolean);
        /**
         * True if rect clipping has been enabled on this renderer.
         * See Also: CanvasRenderer.EnableRectClipping, CanvasRenderer.DisableRectClipping.
         */
        public get hasRectClipping(): boolean;
        /**
         * Depth of the renderer realative to the parent canvas.
         */
        public get relativeDepth(): number;
        /**
         * Indicates whether geometry emitted by this renderer is ignored.
         */
        public get cull(): boolean;
        public set cull(value: boolean);
        /**
         * The clipping softness to apply to the renderer.
         */
        public get clippingSoftness(): Vector2;
        public set clippingSoftness(value: Vector2);
        
        public constructor();
        /**
         * Set the color of the renderer. Will be multiplied with the UIVertex color and the Canvas color.
         * @param color Renderer multiply color.
         */
        public SetColor($color: Color):void;
        /**
         * Get the current color of the renderer.
         */
        public GetColor():Color;
        /**
         * Enables rect clipping on the CanvasRendered. Geometry outside of the specified rect will be clipped (not rendered).
         */
        public EnableRectClipping($rect: Rect):void;
        /**
         * Disables rectangle clipping for this CanvasRenderer.
         */
        public DisableRectClipping():void;
        /**
         * Set the material for the canvas renderer. If a texture is specified then it will be used as the 'MainTex' instead of the material's 'MainTex'.
         * See Also: CanvasRenderer.SetMaterialCount, CanvasRenderer.SetTexture.
         * @param material Material for rendering.
         * @param texture Material texture overide.
         * @param index Material index.
         */
        public SetMaterial($material: Material, $index: number):void;
        /**
         * Gets the current Material assigned to the CanvasRenderer.
         * @param index The material index to retrieve (0 if this parameter is omitted).
         * @returns Result.
         */
        public GetMaterial($index: number):Material;
        /**
         * Set the material for the canvas renderer. Used internally for masking.
         */
        public SetPopMaterial($material: Material, $index: number):void;
        /**
         * Gets the current Material assigned to the CanvasRenderer. Used internally for masking.
         */
        public GetPopMaterial($index: number):Material;
        /**
         * Sets the texture used by this renderer's material.
         */
        public SetTexture($texture: Texture):void;
        /**
         * The Alpha Texture that will be passed to the Shader under the _AlphaTex property.
         * @param texture The Texture to be passed.
         */
        public SetAlphaTexture($texture: Texture):void;
        /**
         * Sets the Mesh used by this renderer. Note the Mesh must be read/write enabled.
         */
        public SetMesh($mesh: Mesh):void;
        /**
         * Remove all cached vertices.
         */
        public Clear():void;
        /**
         * Get the current alpha of the renderer.
         */
        public GetAlpha():number;
        /**
         * Set the alpha of the renderer. Will be multiplied with the UIVertex alpha and the Canvas alpha.
         * @param alpha Alpha.
         */
        public SetAlpha($alpha: number):void;
        /**
         * Get the final inherited alpha calculated by including all the parent alphas from included parent CanvasGroups.
         * @returns The calculated inherited alpha.
         */
        public GetInheritedAlpha():number;
        /**
         * Set the material for the canvas renderer. If a texture is specified then it will be used as the 'MainTex' instead of the material's 'MainTex'.
         * See Also: CanvasRenderer.SetMaterialCount, CanvasRenderer.SetTexture.
         * @param material Material for rendering.
         * @param texture Material texture overide.
         * @param index Material index.
         */
        public SetMaterial($material: Material, $texture: Texture):void;
        /**
         * Gets the current Material assigned to the CanvasRenderer.
         * @param index The material index to retrieve (0 if this parameter is omitted).
         * @returns Result.
         */
        public GetMaterial():Material;
        
        public static SplitUIVertexStreams($verts: System_Collections_Generic.List$1<UIVertex>, $positions: System_Collections_Generic.List$1<Vector3>, $colors: System_Collections_Generic.List$1<Color32>, $uv0S: System_Collections_Generic.List$1<Vector4>, $uv1S: System_Collections_Generic.List$1<Vector4>, $normals: System_Collections_Generic.List$1<Vector3>, $tangents: System_Collections_Generic.List$1<Vector4>, $indices: System_Collections_Generic.List$1<number>):void;
        
        public static SplitUIVertexStreams($verts: System_Collections_Generic.List$1<UIVertex>, $positions: System_Collections_Generic.List$1<Vector3>, $colors: System_Collections_Generic.List$1<Color32>, $uv0S: System_Collections_Generic.List$1<Vector4>, $uv1S: System_Collections_Generic.List$1<Vector4>, $uv2S: System_Collections_Generic.List$1<Vector4>, $uv3S: System_Collections_Generic.List$1<Vector4>, $normals: System_Collections_Generic.List$1<Vector3>, $tangents: System_Collections_Generic.List$1<Vector4>, $indices: System_Collections_Generic.List$1<number>):void;
        
        public static CreateUIVertexStream($verts: System_Collections_Generic.List$1<UIVertex>, $positions: System_Collections_Generic.List$1<Vector3>, $colors: System_Collections_Generic.List$1<Color32>, $uv0S: System_Collections_Generic.List$1<Vector4>, $uv1S: System_Collections_Generic.List$1<Vector4>, $normals: System_Collections_Generic.List$1<Vector3>, $tangents: System_Collections_Generic.List$1<Vector4>, $indices: System_Collections_Generic.List$1<number>):void;
        
        public static CreateUIVertexStream($verts: System_Collections_Generic.List$1<UIVertex>, $positions: System_Collections_Generic.List$1<Vector3>, $colors: System_Collections_Generic.List$1<Color32>, $uv0S: System_Collections_Generic.List$1<Vector4>, $uv1S: System_Collections_Generic.List$1<Vector4>, $uv2S: System_Collections_Generic.List$1<Vector4>, $uv3S: System_Collections_Generic.List$1<Vector4>, $normals: System_Collections_Generic.List$1<Vector3>, $tangents: System_Collections_Generic.List$1<Vector4>, $indices: System_Collections_Generic.List$1<number>):void;
        
        public static AddUIVertexStream($verts: System_Collections_Generic.List$1<UIVertex>, $positions: System_Collections_Generic.List$1<Vector3>, $colors: System_Collections_Generic.List$1<Color32>, $uv0S: System_Collections_Generic.List$1<Vector4>, $uv1S: System_Collections_Generic.List$1<Vector4>, $normals: System_Collections_Generic.List$1<Vector3>, $tangents: System_Collections_Generic.List$1<Vector4>):void;
        
        public static AddUIVertexStream($verts: System_Collections_Generic.List$1<UIVertex>, $positions: System_Collections_Generic.List$1<Vector3>, $colors: System_Collections_Generic.List$1<Color32>, $uv0S: System_Collections_Generic.List$1<Vector4>, $uv1S: System_Collections_Generic.List$1<Vector4>, $uv2S: System_Collections_Generic.List$1<Vector4>, $uv3S: System_Collections_Generic.List$1<Vector4>, $normals: System_Collections_Generic.List$1<Vector3>, $tangents: System_Collections_Generic.List$1<Vector4>):void;
        
        public static add_onRequestRebuild($value: UnityEngine_CanvasRenderer.OnRequestRebuild):void;
        
        public static remove_onRequestRebuild($value: UnityEngine_CanvasRenderer.OnRequestRebuild):void;
        /**
         * (Editor Only) Event that gets fired whenever the data in the CanvasRenderer gets invalidated and needs to be rebuilt.
         */
        public static onRequestRebuild;
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * Vertex class used by a Canvas for managing vertices.
     */
    interface UIVertex extends System.ValueType {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Representation of RGBA colors in 32 bit format.
     */
    interface Color32 extends System.ValueType {
        
                    
    }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * Utility class containing helper methods for working with  RectTransform.
     */
    class RectTransformUtility extends System.Object {
        /**
         * Convert a given point in screen space into a pixel correct point.
         * @returns Pixel adjusted point.
         */
        public static PixelAdjustPoint($point: Vector2, $elementTransform: Transform, $canvas: Canvas):Vector2;
        /**
         * Given a rect transform, return the corner points in pixel accurate coordinates.
         * @returns Pixel adjusted rect.
         */
        public static PixelAdjustRect($rectTransform: RectTransform, $canvas: Canvas):Rect;
        
        public static RectangleContainsScreenPoint($rect: RectTransform, $screenPoint: Vector2):boolean;
        /**
         * Does the RectTransform contain the screen point as seen from the given camera?
         * @param rect The RectTransform to test with.
         * @param screenPoint The screen point to test.
         * @param cam The camera from which the test is performed from. (Optional)
         * @returns True if the point is inside the rectangle.
         */
        public static RectangleContainsScreenPoint($rect: RectTransform, $screenPoint: Vector2, $cam: Camera):boolean;
        
        public static RectangleContainsScreenPoint($rect: RectTransform, $screenPoint: Vector2, $cam: Camera, $offset: Vector4):boolean;
        /**
         * Transform a screen space point to a position in world space that is on the plane of the given RectTransform.
         * @param rect The RectTransform to find a point inside.
         * @param cam The camera associated with the screen space position.
         * @param screenPoint Screen space position.
         * @param worldPoint Point in world space.
         * @returns Returns true if the plane of the RectTransform is hit, regardless of whether the point is inside the rectangle.
         */
        public static ScreenPointToWorldPointInRectangle($rect: RectTransform, $screenPoint: Vector2, $cam: Camera, $worldPoint: $Ref<Vector3>):boolean;
        /**
         * Transform a screen space point to a position in the local space of a RectTransform that is on the plane of its rectangle.
         * @param rect The RectTransform to find a point inside.
         * @param cam The camera associated with the screen space position.
         * @param screenPoint Screen space position.
         * @param localPoint Point in local space of the rect transform.
         * @returns Returns true if the plane of the RectTransform is hit, regardless of whether the point is inside the rectangle.
         */
        public static ScreenPointToLocalPointInRectangle($rect: RectTransform, $screenPoint: Vector2, $cam: Camera, $localPoint: $Ref<Vector2>):boolean;
        
        public static ScreenPointToRay($cam: Camera, $screenPos: Vector2):Ray;
        
        public static WorldToScreenPoint($cam: Camera, $worldPoint: Vector3):Vector2;
        
        public static CalculateRelativeRectTransformBounds($root: Transform, $child: Transform):Bounds;
        
        public static CalculateRelativeRectTransformBounds($trans: Transform):Bounds;
        /**
         * Flips the alignment of the RectTransform along the horizontal or vertical axis, and optionally its children as well.
         * @param rect The RectTransform to flip.
         * @param keepPositioning Flips around the pivot if true. Flips within the parent rect if false.
         * @param recursive Flip the children as well?
         * @param axis The axis to flip along. 0 is horizontal and 1 is vertical.
         */
        public static FlipLayoutOnAxis($rect: RectTransform, $axis: number, $keepPositioning: boolean, $recursive: boolean):void;
        /**
         * Flips the horizontal and vertical axes of the RectTransform size and alignment, and optionally its children as well.
         * @param rect The RectTransform to flip.
         * @param keepPositioning Flips around the pivot if true. Flips within the parent rect if false.
         * @param recursive Flip the children as well?
         */
        public static FlipLayoutAxes($rect: RectTransform, $keepPositioning: boolean, $recursive: boolean):void;
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Element that can be used for screen rendering.
     */
    class Canvas extends Behaviour {
        /**
         * Is the Canvas in World or Overlay mode?
         */
        public get renderMode(): RenderMode;
        public set renderMode(value: RenderMode);
        /**
         * Is this the root Canvas?
         */
        public get isRootCanvas(): boolean;
        /**
         * Get the render rect for the Canvas.
         */
        public get pixelRect(): Rect;
        /**
         * Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space.
         */
        public get scaleFactor(): number;
        public set scaleFactor(value: number);
        /**
         * The number of pixels per unit that is considered the default.
         */
        public get referencePixelsPerUnit(): number;
        public set referencePixelsPerUnit(value: number);
        /**
         * Allows for nested canvases to override pixelPerfect settings inherited from parent canvases.
         */
        public get overridePixelPerfect(): boolean;
        public set overridePixelPerfect(value: boolean);
        /**
         * Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space.
         */
        public get pixelPerfect(): boolean;
        public set pixelPerfect(value: boolean);
        /**
         * How far away from the camera is the Canvas generated.
         */
        public get planeDistance(): number;
        public set planeDistance(value: number);
        /**
         * The render order in which the canvas is being emitted to the Scene. (Read Only)
         */
        public get renderOrder(): number;
        /**
         * Override the sorting of canvas.
         */
        public get overrideSorting(): boolean;
        public set overrideSorting(value: boolean);
        /**
         * Canvas' order within a sorting layer.
         */
        public get sortingOrder(): number;
        public set sortingOrder(value: number);
        /**
         * For Overlay mode, display index on which the UI canvas will appear.
         */
        public get targetDisplay(): number;
        public set targetDisplay(value: number);
        /**
         * Unique ID of the Canvas' sorting layer.
         */
        public get sortingLayerID(): number;
        public set sortingLayerID(value: number);
        /**
         * Cached calculated value based upon SortingLayerID.
         */
        public get cachedSortingLayerValue(): number;
        /**
         * Get or set the mask of additional shader channels to be used when creating the Canvas mesh.
         */
        public get additionalShaderChannels(): AdditionalCanvasShaderChannels;
        public set additionalShaderChannels(value: AdditionalCanvasShaderChannels);
        /**
         * Name of the Canvas' sorting layer.
         */
        public get sortingLayerName(): string;
        public set sortingLayerName(value: string);
        /**
         * Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself.
         */
        public get rootCanvas(): Canvas;
        /**
         * Returns the canvas display size based on the selected render mode and target display.
         */
        public get renderingDisplaySize(): Vector2;
        /**
         * Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas].
         */
        public get worldCamera(): Camera;
        public set worldCamera(value: Camera);
        /**
         * The normalized grid size that the canvas will split the renderable area into.
         */
        public get normalizedSortingGridSize(): number;
        public set normalizedSortingGridSize(value: number);
        
        public constructor();
        
        public static add_preWillRenderCanvases($value: UnityEngine_Canvas.WillRenderCanvases):void;
        
        public static remove_preWillRenderCanvases($value: UnityEngine_Canvas.WillRenderCanvases):void;
        
        public static add_willRenderCanvases($value: UnityEngine_Canvas.WillRenderCanvases):void;
        
        public static remove_willRenderCanvases($value: UnityEngine_Canvas.WillRenderCanvases):void;
        /**
         * Returns the default material that can be used for rendering normal elements on the Canvas.
         */
        public static GetDefaultCanvasMaterial():Material;
        /**
         * Gets or generates the ETC1 Material.
         * @returns The generated ETC1 Material from the Canvas.
         */
        public static GetETC1SupportedCanvasMaterial():Material;
        /**
         * Force all canvases to update their content.
         */
        public static ForceUpdateCanvases():void;
        /**
         * Event that is called just before Canvas rendering happens.
         */
        public static preWillRenderCanvases;
        /**
         * Event that is called just before Canvas rendering happens.
         */
        public static willRenderCanvases;
        
                    
    }
    /**
     * Position, size, anchor and pivot information for a rectangle.
     */
    interface RectTransform extends Transform {
        
                    
    }
    /**
     * Representation of rays.
     */
    interface Ray extends System.ValueType {
        
                    
    }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    /**
     * RenderMode for the Canvas.
     */
    enum RenderMode { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
    /**
     * Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created.
     */
    enum AdditionalCanvasShaderChannels { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
    
    class UISystemProfilerApi extends System.Object {
        
        public static BeginSample($type: UnityEngine_UISystemProfilerApi.SampleType):void;
        
        public static EndSample($type: UnityEngine_UISystemProfilerApi.SampleType):void;
        
        public static AddMarker($name: string, $obj: Object):void;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
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
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.CanvasRenderer' {

    import * as System from 'System';
        
    
    type OnRequestRebuild = () => void;
    var OnRequestRebuild: {new (func: () => void): OnRequestRebuild;}
    
}
declare module 'UnityEngine.Canvas' {

    import * as System from 'System';
        
    
    type WillRenderCanvases = () => void;
    var WillRenderCanvases: {new (func: () => void): WillRenderCanvases;}
    
}
declare module 'UnityEngine.UISystemProfilerApi' {

    import * as System from 'System';
        
    
    enum SampleType { Layout = 0, Render = 1 }
    
}

