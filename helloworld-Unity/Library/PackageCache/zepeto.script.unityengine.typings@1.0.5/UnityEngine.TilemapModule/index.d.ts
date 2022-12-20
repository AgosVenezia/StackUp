//# signature=UnityEngine.TilemapModule#7eaba6f64915764a0d1eace1dedfce02#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as UnityEngine_GridBrushBase from 'UnityEngine.GridBrushBase';
    import * as UnityEngine_GridLayout from 'UnityEngine.GridLayout';
        
    /**
     * Attribute to define the class as a grid brush and to make it available in the palette window.
     */
    class CustomGridBrushAttribute extends System.Attribute {
        /**
         * Hide all asset instances of this brush in the tile palette window.
         */
        public get hideAssetInstances(): boolean;
        /**
         * Hide the default instance of brush in the tile palette window.
         */
        public get hideDefaultInstance(): boolean;
        /**
         * If set to true, brush will replace Unity built-in brush as the default brush in palette window.
         * Only one class at any one time should set defaultBrush to true.
         */
        public get defaultBrush(): boolean;
        /**
         * Name of the default instance of this brush.
         */
        public get defaultName(): string;
        /**
         * Attribute to define the class as a grid brush and to make it available in the palette window.
         * @param defaultBrush If set to true, brush will replace Unity built-in brush as the default brush in palette window.
         * @param defaultName Name of the default instance of this brush.
         * @param hideAssetInstanes Hide all asset instances of this brush in the tile palette window.
         * @param hideDefaultInstance Hide the default instance of brush in the tile palette window.
         */
        public constructor();
        /**
         * Attribute to define the class as a grid brush and to make it available in the palette window.
         * @param defaultBrush If set to true, brush will replace Unity built-in brush as the default brush in palette window.
         * @param defaultName Name of the default instance of this brush.
         * @param hideAssetInstanes Hide all asset instances of this brush in the tile palette window.
         * @param hideDefaultInstance Hide the default instance of brush in the tile palette window.
         */
        public constructor($hideAssetInstances: boolean, $hideDefaultInstance: boolean, $defaultBrush: boolean, $defaultName: string);
        
                    
    }
    /**
     * Base class for authoring data on a grid with grid painting tools like paint, erase, pick, select and fill.
     */
    class GridBrushBase extends ScriptableObject {
        /**
         * Paints data into a grid within the given bounds.
         * @param grid Grid used for layout.
         * @param brushTarget Target of the paint operation. By default the currently selected GameObject.
         * @param position The coordinates of the cell to paint data to.
         */
        public Paint($gridLayout: GridLayout, $brushTarget: GameObject, $position: Vector3Int):void;
        /**
         * Erases data on a grid within the given bounds.
         * @param grid Grid used for layout.
         * @param brushTarget Target of the erase operation. By default the currently selected GameObject.
         * @param position The coordinates of the cell to erase data from.
         */
        public Erase($gridLayout: GridLayout, $brushTarget: GameObject, $position: Vector3Int):void;
        /**
         * Box fills tiles and GameObjects into given bounds within the selected layers.
         * @param gridLayout Grid used for layout.
         * @param brushTarget Target of box fill operation. By default the currently selected GameObject.
         * @param position The bounds to box fill data to.
         */
        public BoxFill($gridLayout: GridLayout, $brushTarget: GameObject, $position: BoundsInt):void;
        /**
         * Erases data on a grid within the given bounds.
         * @param gridLayout Grid used for layout.
         * @param brushTarget Target of the erase operation. By default the currently selected GameObject.
         * @param position The bounds to erase data from.
         */
        public BoxErase($gridLayout: GridLayout, $brushTarget: GameObject, $position: BoundsInt):void;
        /**
         * Select an area of a grid.
         * @param grid Grid used for layout.
         * @param brushTarget Targets of paint operation. By default the currently selected GameObject.
         * @param position Area to get selected.
         */
        public Select($gridLayout: GridLayout, $brushTarget: GameObject, $position: BoundsInt):void;
        /**
         * Flood fills data onto a grid given the starting coordinates of the cell.
         * @param gridLayout Grid used for layout.
         * @param brushTarget Targets of flood fill operation. By default the currently selected GameObject.
         * @param position Starting position of the flood fill.
         */
        public FloodFill($gridLayout: GridLayout, $brushTarget: GameObject, $position: Vector3Int):void;
        /**
         * Rotates all tiles on the grid brush with the given RotationDirection.
         * @param direction Direction to rotate by.
         * @param layout CellLayout for rotating.
         */
        public Rotate($direction: UnityEngine_GridBrushBase.RotationDirection, $layout: UnityEngine_GridLayout.CellLayout):void;
        /**
         * Flips the grid brush in the given FlipAxis.
         * @param flip Axis to flip by.
         * @param layout CellLayout for flipping.
         */
        public Flip($flip: UnityEngine_GridBrushBase.FlipAxis, $layout: UnityEngine_GridLayout.CellLayout):void;
        /**
         * Picks data from a grid given the coordinates of the cells.
         * @param grid Grid used for layout.
         * @param brushTarget Target of the paint operation. By default the currently selected GameObject.
         * @param position The coordinates of the cells to paint data from.
         * @param pivot Pivot of the picking brush.
         */
        public Pick($gridLayout: GridLayout, $brushTarget: GameObject, $position: BoundsInt, $pivot: Vector3Int):void;
        /**
         * Move is called when user moves the area previously selected with the selection marquee.
         * @param grid Grid used for layout.
         * @param brushTarget Target of the move operation. By default the currently selected GameObject.
         * @param from Source bounds of the move.
         * @param to Target bounds of the move.
         */
        public Move($gridLayout: GridLayout, $brushTarget: GameObject, $from: BoundsInt, $to: BoundsInt):void;
        /**
         * MoveEnd is called when user starts moving the area previously selected with the selection marquee.
         * @param grid Grid used for layout.
         * @param brushTarget Target of the move operation. By default the currently selected GameObject.
         * @param position Position where the move operation has started.
         */
        public MoveStart($gridLayout: GridLayout, $brushTarget: GameObject, $position: BoundsInt):void;
        /**
         * MoveEnd is called when user has ended the move of the area previously selected with the selection marquee.
         * @param position Layers affected by the move operation.
         * @param brushTarget Target of the move operation. By default the currently selected GameObject.
         * @param grid Grid used for layout.
         */
        public MoveEnd($gridLayout: GridLayout, $brushTarget: GameObject, $position: BoundsInt):void;
        /**
         * Changes the Z position of the GridBrushBase.
         * @param change Modify the Z position of GridBrushBase by this value.
         */
        public ChangeZPosition($change: number):void;
        /**
         * Resets Z position changes of the GridBrushBase.
         */
        public ResetZPosition():void;
        
                    
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
     * An abstract class that defines a grid layout.
     */
    interface GridLayout extends Behaviour {
        
                    
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
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Representation of 3D vectors and points using integers.
     */
    interface Vector3Int extends System.ValueType {
        
                    
    }
    /**
     * Represents an axis aligned bounding box with all values as integers.
     */
    interface BoundsInt extends System.ValueType {
        
                    
    }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    /**
     * Represents a Sprite object for use in 2D gameplay.
     */
    interface Sprite extends Object {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * A standard 4x4 transformation matrix.
     */
    interface Matrix4x4 extends System.ValueType {
        
                    
    }
    /**
     * Grid is the base class for plotting a layout of uniformly spaced points and lines.
     */
    interface Grid extends GridLayout {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * General functionality for all renderers.
     */
    interface Renderer extends Component {
        
                    
    }
    /**
     * This enum controls the mode under which the sprite will interact with the masking system.
     */
    enum SpriteMaskInteraction { None = 0, VisibleInsideMask = 1, VisibleOutsideMask = 2 }
    /**
     * Parent class for collider types used with 2D gameplay.
     */
    interface Collider2D extends Behaviour {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Attribute extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.GridBrushBase' {

    import * as System from 'System';
        
    /**
     * Direction to rotate tiles in the GridBrushBase by.
     */
    enum RotationDirection { Clockwise = 0, CounterClockwise = 1 }
    /**
     * Axis to flip tiles in the GridBrushBase by.
     */
    enum FlipAxis { X = 0, Y = 1 }
    /**
     * Tool mode for the GridBrushBase.
     */
    enum Tool { Select = 0, Move = 1, Paint = 2, Box = 3, Pick = 4, Erase = 5, FloodFill = 6 }
    
}
declare module 'UnityEngine.GridLayout' {

        
    /**
     * The layout of the GridLayout.
     */
    enum CellLayout { Rectangle = 0, Hexagon = 1, Isometric = 2, IsometricZAsY = 3 }
    
}
declare module 'UnityEngine.Tilemaps' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Tilemaps_Tile from 'UnityEngine.Tilemaps.Tile';
    import * as UnityEngine_Tilemaps_Tilemap from 'UnityEngine.Tilemaps.Tilemap';
    import * as UnityEngine_Tilemaps_TilemapRenderer from 'UnityEngine.Tilemaps.TilemapRenderer';
        
    /**
     * Class passed onto Tiles when information is queried from the Tiles.
     */
    class ITilemap extends System.Object {
        /**
         * The origin of the Tilemap in cell position.
         */
        public get origin(): UnityEngine.Vector3Int;
        /**
         * The size of the Tilemap in cells.
         */
        public get size(): UnityEngine.Vector3Int;
        /**
         * Returns the boundaries of the Tilemap in local space size.
         */
        public get localBounds(): UnityEngine.Bounds;
        /**
         * Returns the boundaries of the Tilemap in cell size.
         */
        public get cellBounds(): UnityEngine.BoundsInt;
        /**
         * Gets the Sprite used in a Tile given the XYZ coordinates of a cell in the Tilemap.
         * @param position Position of the Tile on the Tilemap.
         * @returns Sprite at the XY coordinate.
         */
        public GetSprite($position: UnityEngine.Vector3Int):UnityEngine.Sprite;
        /**
         * Gets the color of a Tile given the XYZ coordinates of a cell in the Tilemap.
         * @param position Position of the Tile on the Tilemap.
         * @returns Color of the at the XY coordinate.
         */
        public GetColor($position: UnityEngine.Vector3Int):UnityEngine.Color;
        /**
         * Gets the transform matrix of a Tile given the XYZ coordinates of a cell in the Tilemap.
         * @param position Position of the Tile on the Tilemap.
         * @returns The transform matrix.
         */
        public GetTransformMatrix($position: UnityEngine.Vector3Int):UnityEngine.Matrix4x4;
        /**
         * Gets the Tile Flags of the Tile at the given position.
         * @param position Position of the Tile on the Tilemap.
         * @returns TileFlags from the Tile.
         */
        public GetTileFlags($position: UnityEngine.Vector3Int):TileFlags;
        /**
         * Gets the Tile of type T at the given XYZ coordinates of a cell in the Tilemap.
         * @param position Position of the Tile on the Tilemap.
         * @returns  placed at the cell.
         */
        public GetTile($position: UnityEngine.Vector3Int):TileBase;
        /**
         * Gets the Tile of type T at the given XYZ coordinates of a cell in the Tilemap.
         * @param position Position of the Tile on the Tilemap.
         * @returns  placed at the cell.
         */
        public GetTile<T>($position: UnityEngine.Vector3Int):TileBase;
        /**
         * Refreshes a Tile at the given XYZ coordinates of a cell in the :Tilemap.
         * @param position Position of the Tile on the Tilemap.
         */
        public RefreshTile($position: UnityEngine.Vector3Int):void;
        /**
         * Returns the component of type T if the GameObject of the tile map has one attached, null if it doesn't.
         * @returns The Component of type T to retrieve.
         */
        public GetComponent<T>():T;
        
                    
    }
    /**
     * Flags controlling behavior for the TileBase.
     */
    enum TileFlags { None = 0, LockColor = 1, LockTransform = 2, InstantiateGameObjectRuntimeOnly = 4, LockAll = 3 }
    /**
     * Base class for a tile in the Tilemap.
     */
    class TileBase extends UnityEngine.ScriptableObject {
        /**
         * This method is called when the tile is refreshed.
         * @param position Position of the Tile on the Tilemap.
         * @param tilemap The Tilemap the tile is present on.
         */
        public RefreshTile($position: UnityEngine.Vector3Int, $tilemap: ITilemap):void;
        /**
         * Retrieves any tile rendering data from the scripted tile.
         * @param position Position of the Tile on the Tilemap.
         * @param tilemap The Tilemap the tile is present on.
         * @param tileData Data to render the tile.
         * @returns Whether the call was successful.
         */
        public GetTileData($position: UnityEngine.Vector3Int, $tilemap: ITilemap, $tileData: $Ref<TileData>):void;
        /**
         * Retrieves any tile animation data from the scripted tile.
         * @param position Position of the Tile on the Tilemap.
         * @param tilemap The Tilemap the tile is present on.
         * @param tileAnimationData Data to run an animation on the tile.
         * @returns Whether the call was successful.
         */
        public GetTileAnimationData($position: UnityEngine.Vector3Int, $tilemap: ITilemap, $tileAnimationData: $Ref<TileAnimationData>):boolean;
        /**
         * StartUp is called on the first frame of the running Scene.
         * @param position Position of the Tile on the Tilemap.
         * @param tilemap The Tilemap the tile is present on.
         * @param go The GameObject instantiated for the Tile.
         * @returns Whether the call was successful.
         */
        public StartUp($position: UnityEngine.Vector3Int, $tilemap: ITilemap, $go: UnityEngine.GameObject):boolean;
        
                    
    }
    /**
     * Class for a default tile in the Tilemap.
     */
    class Tile extends TileBase {
        /**
         * Sprite to be rendered at the Tile.
         */
        public get sprite(): UnityEngine.Sprite;
        public set sprite(value: UnityEngine.Sprite);
        /**
         * Color of the Tile.
         */
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        /**
         * Matrix4x4|Transform matrix of the Tile.
         */
        public get transform(): UnityEngine.Matrix4x4;
        public set transform(value: UnityEngine.Matrix4x4);
        /**
         * GameObject of the Tile.
         */
        public get gameObject(): UnityEngine.GameObject;
        public set gameObject(value: UnityEngine.GameObject);
        /**
         * TileFlags of the Tile.
         */
        public get flags(): TileFlags;
        public set flags(value: TileFlags);
        
        public get colliderType(): UnityEngine_Tilemaps_Tile.ColliderType;
        public set colliderType(value: UnityEngine_Tilemaps_Tile.ColliderType);
        
        public constructor();
        
                    
    }
    /**
     * A Struct for the required data for rendering a Tile.
     */
    class TileData extends System.ValueType {
        /**
         * Sprite to be rendered at the Tile.
         */
        public get sprite(): UnityEngine.Sprite;
        public set sprite(value: UnityEngine.Sprite);
        /**
         * Color of the Tile.
         */
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        /**
         * Matrix4x4|Transform matrix of the Tile.
         */
        public get transform(): UnityEngine.Matrix4x4;
        public set transform(value: UnityEngine.Matrix4x4);
        /**
         * GameObject of the Tile.
         */
        public get gameObject(): UnityEngine.GameObject;
        public set gameObject(value: UnityEngine.GameObject);
        /**
         * TileFlags of the Tile.
         */
        public get flags(): TileFlags;
        public set flags(value: TileFlags);
        
        public get colliderType(): UnityEngine_Tilemaps_Tile.ColliderType;
        public set colliderType(value: UnityEngine_Tilemaps_Tile.ColliderType);
        
                    
    }
    /**
     * A Struct for the required data for animating a Tile.
     */
    class TileAnimationData extends System.ValueType {
        /**
         * The array of that are ordered by appearance in the animation.
         */
        public get animatedSprites(): UnityEngine.Sprite[];
        public set animatedSprites(value: UnityEngine.Sprite[]);
        /**
         * The animation speed.
         */
        public get animationSpeed(): number;
        public set animationSpeed(value: number);
        /**
         * The start time of the animation. The animation will begin at this time offset.
         */
        public get animationStartTime(): number;
        public set animationStartTime(value: number);
        
                    
    }
    /**
     * The tile map stores component.
     */
    class Tilemap extends UnityEngine.GridLayout {
        /**
         * Gets the Grid associated with this tile map.
         */
        public get layoutGrid(): UnityEngine.Grid;
        /**
         * Returns the boundaries of the Tilemap in cell size.
         */
        public get cellBounds(): UnityEngine.BoundsInt;
        /**
         * Returns the boundaries of the Tilemap in local space size.
         */
        public get localBounds(): UnityEngine.Bounds;
        /**
         * The frame rate for all tile animations in the tile map.
         */
        public get animationFrameRate(): number;
        public set animationFrameRate(value: number);
        /**
         * The color of the tile map layer.
         */
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        /**
         * The origin of the Tilemap in cell position.
         */
        public get origin(): UnityEngine.Vector3Int;
        public set origin(value: UnityEngine.Vector3Int);
        /**
         * The size of the Tilemap in cells.
         */
        public get size(): UnityEngine.Vector3Int;
        public set size(value: UnityEngine.Vector3Int);
        /**
         * Gets the anchor point of tiles in the Tilemap.
         */
        public get tileAnchor(): UnityEngine.Vector3;
        public set tileAnchor(value: UnityEngine.Vector3);
        /**
         * Orientation of the tiles in the Tilemap.
         */
        public get orientation(): UnityEngine_Tilemaps_Tilemap.Orientation;
        public set orientation(value: UnityEngine_Tilemaps_Tilemap.Orientation);
        /**
         * Orientation Matrix of the orientation of the tiles in the Tilemap.
         */
        public get orientationMatrix(): UnityEngine.Matrix4x4;
        public set orientationMatrix(value: UnityEngine.Matrix4x4);
        /**
         * The origin of the Tilemap in cell position inclusive of editor preview tiles.
         */
        public get editorPreviewOrigin(): UnityEngine.Vector3Int;
        /**
         * The size of the Tilemap in cells inclusive of editor preview tiles.
         */
        public get editorPreviewSize(): UnityEngine.Vector3Int;
        
        public constructor();
        
        public static add_tilemapTileChanged($value: System.Action$2<Tilemap, UnityEngine_Tilemaps_Tilemap.SyncTile[]>):void;
        
        public static remove_tilemapTileChanged($value: System.Action$2<Tilemap, UnityEngine_Tilemaps_Tilemap.SyncTile[]>):void;
        /**
         * Get the logical center coordinate of a grid cell in local space.
         * @param position Grid cell position.
         * @returns Center of the cell transformed into local space coordinates.
         */
        public GetCellCenterLocal($position: UnityEngine.Vector3Int):UnityEngine.Vector3;
        /**
         * Get the logical center coordinate of a grid cell in world space.
         * @param position Grid cell position.
         * @returns Center of the cell transformed into world space coordinates.
         */
        public GetCellCenterWorld($position: UnityEngine.Vector3Int):UnityEngine.Vector3;
        /**
         * Gets the.
         * @param position Position of the Tile on the Tilemap.
         * @returns Tilemaps.TileBase|Tile of type T placed at the cell.
         */
        public GetTile($position: UnityEngine.Vector3Int):TileBase;
        /**
         * Gets the.
         * @param position Position of the Tile on the Tilemap.
         * @returns Tilemaps.TileBase|Tile of type T placed at the cell.
         */
        public GetTile<T>($position: UnityEngine.Vector3Int):TileBase;
        /**
         * Retrieves an array of tiles with the given bounds.
         * @param bounds Bounds to retrieve from.
         * @returns An array of at the given bounds.
         */
        public GetTilesBlock($bounds: UnityEngine.BoundsInt):TileBase[];
        /**
         * Sets a.
         * @param position Position of the Tile on the Tilemap.
         * @param tile  to be placed the cell.
         */
        public SetTile($position: UnityEngine.Vector3Int, $tile: TileBase):void;
        /**
         * Sets an array of.
         * @param positionArray An array of positions of Tiles on the Tilemap.
         * @param tileArray An array of to be placed.
         */
        public SetTiles($positionArray: UnityEngine.Vector3Int[], $tileArray: TileBase[]):void;
        /**
         * Fills bounds with array of tiles.
         * @param position Bounds to be filled.
         * @param tileArray An array of to be placed.
         */
        public SetTilesBlock($position: UnityEngine.BoundsInt, $tileArray: TileBase[]):void;
        /**
         * Returns whether there is a tile at the position.
         * @param position Position to check.
         * @returns Returns true if there is a Tile at the position. Returns false otherwise.
         */
        public HasTile($position: UnityEngine.Vector3Int):boolean;
        /**
         * Refreshes a.
         * @param position Position of the Tile on the Tilemap.
         */
        public RefreshTile($position: UnityEngine.Vector3Int):void;
        /**
         * Refreshes all. The tile map will retrieve the rendering data, animation data and other data for all tiles and update all relevant components.
         */
        public RefreshAllTiles():void;
        /**
         * Swaps all existing tiles of changeTile to newTile and refreshes all the swapped tiles.
         * @param changeTile Tile to swap.
         * @param newTile Tile to swap to.
         */
        public SwapTile($changeTile: TileBase, $newTile: TileBase):void;
        /**
         * Returns true if the Tilemap contains the given. Returns false if not.
         * @param tileAsset Tile to check.
         * @returns Whether the Tilemap contains the tile.
         */
        public ContainsTile($tileAsset: TileBase):boolean;
        /**
         * Get the total number of different.
         * @returns The total number of different.
         */
        public GetUsedTilesCount():number;
        /**
         * Fills the given array with the total number of different and returns the number of tiles filled.
         * @param usedTiles The array to be filled.
         * @returns The number of tiles filled.
         */
        public GetUsedTilesNonAlloc($usedTiles: TileBase[]):number;
        /**
         * Gets the.
         * @param position Position of the Tile on the Tilemap.
         * @returns Sprite at the XY coordinate.
         */
        public GetSprite($position: UnityEngine.Vector3Int):UnityEngine.Sprite;
        /**
         * Gets the transform matrix of a.
         * @param position Position of the Tile on the Tilemap.
         * @returns The transform matrix.
         */
        public GetTransformMatrix($position: UnityEngine.Vector3Int):UnityEngine.Matrix4x4;
        /**
         * Sets the transform matrix of a tile given the XYZ coordinates of a cell in the.
         * @param position Position of the Tile on the Tilemap.
         * @param transform The transform matrix.
         */
        public SetTransformMatrix($position: UnityEngine.Vector3Int, $transform: UnityEngine.Matrix4x4):void;
        /**
         * Gets the color of a.
         * @param position Position of the Tile on the Tilemap.
         * @returns Color of the at the XY coordinate.
         */
        public GetColor($position: UnityEngine.Vector3Int):UnityEngine.Color;
        /**
         * Sets the color of a.
         * @param position Position of the Tile on the Tilemap.
         * @param color Color to set the to at the XY coordinate.
         */
        public SetColor($position: UnityEngine.Vector3Int, $color: UnityEngine.Color):void;
        /**
         * Gets the TileFlags of the Tile at the given position.
         * @param position Position of the Tile on the Tilemap.
         * @returns TileFlags from the Tile.
         */
        public GetTileFlags($position: UnityEngine.Vector3Int):TileFlags;
        /**
         * Sets the TileFlags onto the Tile at the given position.
         * @param position Position of the Tile on the Tilemap.
         * @param flags TileFlags to add onto the Tile.
         */
        public SetTileFlags($position: UnityEngine.Vector3Int, $flags: TileFlags):void;
        /**
         * Adds the TileFlags onto the Tile at the given position.
         * @param position Position of the Tile on the Tilemap.
         * @param flags TileFlags to add (with bitwise or) onto the flags provided by Tile.TileBase.
         */
        public AddTileFlags($position: UnityEngine.Vector3Int, $flags: TileFlags):void;
        /**
         * Removes the TileFlags onto the Tile at the given position.
         * @param position Position of the Tile on the Tilemap.
         * @param flags TileFlags to remove from the Tile.
         */
        public RemoveTileFlags($position: UnityEngine.Vector3Int, $flags: TileFlags):void;
        /**
         * Gets the.
         * @param position Position of the Tile on the Tilemap.
         * @returns GameObject instantiated by the Tile at the position.
         */
        public GetInstantiatedObject($position: UnityEngine.Vector3Int):UnityEngine.GameObject;
        /**
         * Gets the.
         * @param position The position of the Tile on the Tilemap.
         * @returns Returns the GameObject to be instantiated by the Tile at the position.
         */
        public GetObjectToInstantiate($position: UnityEngine.Vector3Int):UnityEngine.GameObject;
        /**
         * Sets the collider type of a.
         * @param position Position of the Tile on the Tilemap.
         * @param colliderType Collider type to set the to at the XYZ coordinate.
         */
        public SetColliderType($position: UnityEngine.Vector3Int, $colliderType: UnityEngine_Tilemaps_Tile.ColliderType):void;
        /**
         * Gets the collider type of a.
         * @param position Position of the Tile on the Tilemap.
         * @returns Collider type of the at the XY coordinate.
         */
        public GetColliderType($position: UnityEngine.Vector3Int):UnityEngine_Tilemaps_Tile.ColliderType;
        /**
         * Does a flood fill with the given starting from the given coordinates.
         * @param position Start position of the flood fill on the Tilemap.
         * @param tile  to place.
         */
        public FloodFill($position: UnityEngine.Vector3Int, $tile: TileBase):void;
        /**
         * Does a box fill with the given. Starts from given coordinates and fills the limits from start to end (inclusive).
         * @param position Position of the Tile on the Tilemap.
         * @param tile  to place.
         * @param startX The minimum X coordinate limit to fill to.
         * @param startY The minimum Y coordinate limit to fill to.
         * @param endX The maximum X coordinate limit to fill to.
         * @param endY The maximum Y coordinate limit to fill to.
         */
        public BoxFill($position: UnityEngine.Vector3Int, $tile: TileBase, $startX: number, $startY: number, $endX: number, $endY: number):void;
        /**
         * Inserts cells into the Tilemap.
         * @param position The target position to insert at.
         * @param insertCells The number of columns, rows or layers of cells to insert.
         */
        public InsertCells($position: UnityEngine.Vector3Int, $insertCells: UnityEngine.Vector3Int):void;
        /**
         * Inserts cells into the Tilemap.
         * @param position The target position to insert at.
         * @param numColumns The number of columns to insert.
         * @param numRows The number of rows to insert.
         * @param numLayers The number of layers of cells to insert.
         */
        public InsertCells($position: UnityEngine.Vector3Int, $numColumns: number, $numRows: number, $numLayers: number):void;
        /**
         * Removes cells from within the Tilemap's bounds.
         * @param position The target position to remove from.
         * @param deleteCells The number of columns, rows and layers of cells to remove.
         */
        public DeleteCells($position: UnityEngine.Vector3Int, $deleteCells: UnityEngine.Vector3Int):void;
        /**
         * Removes cells from within the Tilemap's bounds.
         * @param position Target position to delete from.
         * @param numColumns The number of columns to remove.
         * @param numRows The number of rows to remove.
         * @param numLayers The number of layers of cells to remove.
         */
        public DeleteCells($position: UnityEngine.Vector3Int, $numColumns: number, $numRows: number, $numLayers: number):void;
        /**
         * Clears all tiles that are placed in the Tilemap.
         */
        public ClearAllTiles():void;
        /**
         * Resizes tiles in the Tilemap to bounds defined by origin and size.
         */
        public ResizeBounds():void;
        /**
         * Compresses the origin and size of the Tilemap to bounds where tiles exist.
         */
        public CompressBounds():void;
        /**
         * Gets the editor preview.
         * @param position Position of the editor preview Tile on the Tilemap.
         * @returns The editor preview placed at the cell.
         */
        public GetEditorPreviewTile($position: UnityEngine.Vector3Int):TileBase;
        /**
         * Gets the editor preview.
         * @param position Position of the editor preview Tile on the Tilemap.
         * @returns The editor preview placed at the cell.
         */
        public GetEditorPreviewTile<T>($position: UnityEngine.Vector3Int):TileBase;
        /**
         * Sets an editor preview.
         * @param position Position of the editor preview Tile on the Tilemap.
         * @param tile The editor preview to be placed the cell.
         */
        public SetEditorPreviewTile($position: UnityEngine.Vector3Int, $tile: TileBase):void;
        /**
         * Returns whether there is an editor preview tile at the position.
         * @param position Position to check.
         * @returns Returns true if there is an Editor Preview Tile at the position. Returns false otherwise.
         */
        public HasEditorPreviewTile($position: UnityEngine.Vector3Int):boolean;
        /**
         * Gets the.
         * @param position Position of the editor preview Tile on the Tilemap.
         * @returns Sprite at the XY coordinate.
         */
        public GetEditorPreviewSprite($position: UnityEngine.Vector3Int):UnityEngine.Sprite;
        /**
         * Gets the transform matrix of an editor preview.
         * @param position Position of the editor preview Tile on the Tilemap.
         * @returns The transform matrix.
         */
        public GetEditorPreviewTransformMatrix($position: UnityEngine.Vector3Int):UnityEngine.Matrix4x4;
        /**
         * Sets the transform matrix of an editor preview tile given the XYZ coordinates of a cell in the.
         * @param position Position of the editor preview Tile on the Tilemap.
         * @param transform The transform matrix.
         */
        public SetEditorPreviewTransformMatrix($position: UnityEngine.Vector3Int, $transform: UnityEngine.Matrix4x4):void;
        /**
         * Gets the Color of an editor preview.
         * @param position Position of the Tile on the Tilemap.
         * @returns Color of the editor preview at the XY coordinate.
         */
        public GetEditorPreviewColor($position: UnityEngine.Vector3Int):UnityEngine.Color;
        /**
         * Sets the color of an editor preview.
         * @param position Position of the editor preview Tile on the Tilemap.
         * @param color Color to set the editor preview to at the XY coordinate.
         */
        public SetEditorPreviewColor($position: UnityEngine.Vector3Int, $color: UnityEngine.Color):void;
        /**
         * Gets the TileFlags of the editor preview Tile at the given position.
         * @param position Position of the Tile on the Tilemap.
         * @returns TileFlags from the editor preview Tile.
         */
        public GetEditorPreviewTileFlags($position: UnityEngine.Vector3Int):TileFlags;
        /**
         * Does an editor preview of a flood fill with the given starting from the given coordinates.
         * @param position Start position of the flood fill on the Tilemap.
         * @param tile TileBase to place.
         */
        public EditorPreviewFloodFill($position: UnityEngine.Vector3Int, $tile: TileBase):void;
        /**
         * Does an editor preview of a box fill with the given. Starts from given coordinates and fills the limits from start to end (inclusive).
         * @param position Position of the Tile on the Tilemap.
         * @param tile  to place.
         * @param startX The start X coordinate limit to fill to.
         * @param startY The start Y coordinate limit to fill to.
         * @param endX The ending X coordinate limit to fill to.
         * @param endY The ending Y coordinate limit to fill to.
         */
        public EditorPreviewBoxFill($position: UnityEngine.Vector3Int, $tile: UnityEngine.Object, $startX: number, $startY: number, $endX: number, $endY: number):void;
        /**
         * Clears all editor preview tiles that are placed in the Tilemap.
         */
        public ClearAllEditorPreviewTiles():void;
        
        public static tilemapTileChanged;
        
                    
    }
    /**
     * The tile map renderer is used to render the tile map marked out by a component.
     */
    class TilemapRenderer extends UnityEngine.Renderer {
        /**
         * Size in number of tiles of each chunk created by the TilemapRenderer.
         */
        public get chunkSize(): UnityEngine.Vector3Int;
        public set chunkSize(value: UnityEngine.Vector3Int);
        /**
         * Bounds used for culling of Tilemap chunks.
         */
        public get chunkCullingBounds(): UnityEngine.Vector3;
        public set chunkCullingBounds(value: UnityEngine.Vector3);
        /**
         * Maximum number of chunks the TilemapRenderer caches in memory.
         */
        public get maxChunkCount(): number;
        public set maxChunkCount(value: number);
        /**
         * Maximum number of frames the TilemapRenderer keeps unused chunks in memory.
         */
        public get maxFrameAge(): number;
        public set maxFrameAge(value: number);
        /**
         * Active sort order for the TilemapRenderer.
         */
        public get sortOrder(): UnityEngine_Tilemaps_TilemapRenderer.SortOrder;
        public set sortOrder(value: UnityEngine_Tilemaps_TilemapRenderer.SortOrder);
        /**
         * The mode in which the TileMapRenderer batches the for rendering.
         */
        public get mode(): UnityEngine_Tilemaps_TilemapRenderer.Mode;
        public set mode(value: UnityEngine_Tilemaps_TilemapRenderer.Mode);
        /**
         * Returns whether the TilemapRenderer automatically detects the bounds to extend chunk culling by.
         */
        public get detectChunkCullingBounds(): UnityEngine_Tilemaps_TilemapRenderer.DetectChunkCullingBounds;
        public set detectChunkCullingBounds(value: UnityEngine_Tilemaps_TilemapRenderer.DetectChunkCullingBounds);
        /**
         * Specifies how the Tilemap interacts with the masks.
         */
        public get maskInteraction(): UnityEngine.SpriteMaskInteraction;
        public set maskInteraction(value: UnityEngine.SpriteMaskInteraction);
        
        public constructor();
        
                    
    }
    /**
     * Collider for 2D physics representing shapes defined by the corresponding Tilemap.
     */
    class TilemapCollider2D extends UnityEngine.Collider2D {
        /**
         * Maximum number of Tile Changes accumulated before doing a full collider rebuild instead of an incremental rebuild.
         */
        public get maximumTileChangeCount(): number;
        public set maximumTileChangeCount(value: number);
        /**
         * The amount of Collider shapes each Tile extrudes to facilitate compositing with neighboring Tiles. This eliminates fine gaps between Tiles when using a CompositeCollider2D. This is calculated in Unity units within world space.
         */
        public get extrusionFactor(): number;
        public set extrusionFactor(value: number);
        /**
         * Returns true if there are Tilemap changes that require processing for Collider updates. Returns false otherwise.
         */
        public get hasTilemapChanges(): boolean;
        
        public constructor();
        /**
         * Processes Tilemap changes for Collider updates immediately, if there are any.
         */
        public ProcessTilemapChanges():void;
        
                    
    }
    
}
declare module 'UnityEngine.Tilemaps.Tile' {

    import * as System from 'System';
        
    /**
     * Enum for determining what collider shape is generated for this Tile by the TilemapCollider2D.
     */
    enum ColliderType { None = 0, Sprite = 1, Grid = 2 }
    
}
declare module 'UnityEngine.Tilemaps.Tilemap' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Tilemaps from 'UnityEngine.Tilemaps';
        
    /**
     * A Struct for containing changes to a Tile when it has been changed on a Tilemap.
     */
    class SyncTile extends System.ValueType {
        
        public get position(): UnityEngine.Vector3Int;
        
        public get tile(): UnityEngine_Tilemaps.TileBase;
        
        public get tileData(): UnityEngine_Tilemaps.TileData;
        
                    
    }
    /**
     * Sets which orientation to use for.
     */
    enum Orientation { XY = 0, XZ = 1, YX = 2, YZ = 3, ZX = 4, ZY = 5, Custom = 6 }
    
}
declare module 'UnityEngine.Tilemaps.TilemapRenderer' {

    import * as System from 'System';
        
    /**
     * Sort order for all tiles rendered by the TilemapRenderer.
     */
    enum SortOrder { BottomLeft = 0, BottomRight = 1, TopLeft = 2, TopRight = 3 }
    /**
     * Determines how the TilemapRenderer should batch the for rendering.
     */
    enum Mode { Chunk = 0, Individual = 1 }
    /**
     * Returns whether the TilemapRenderer automatically detects the bounds to extend chunk culling by.
     */
    enum DetectChunkCullingBounds { Auto = 0, Manual = 1 }
    
}

