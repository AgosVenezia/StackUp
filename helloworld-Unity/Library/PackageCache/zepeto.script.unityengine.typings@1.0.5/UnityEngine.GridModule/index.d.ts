//# signature=UnityEngine.GridModule#a09e602fadf70b9afcde4fced198f9aa#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as UnityEngine_GridLayout from 'UnityEngine.GridLayout';
    import * as System from 'System';
        
    /**
     * Grid is the base class for plotting a layout of uniformly spaced points and lines.
     */
    class Grid extends GridLayout {
        /**
         * The size of each cell in the Grid.
         */
        public get cellSize(): Vector3;
        public set cellSize(value: Vector3);
        /**
         * The size of the gap between each cell in the Grid.
         */
        public get cellGap(): Vector3;
        public set cellGap(value: Vector3);
        /**
         * The layout of the cells in the Grid.
         */
        public get cellLayout(): UnityEngine_GridLayout.CellLayout;
        public set cellLayout(value: UnityEngine_GridLayout.CellLayout);
        /**
         * The cell swizzle for the Grid.
         */
        public get cellSwizzle(): UnityEngine_GridLayout.CellSwizzle;
        public set cellSwizzle(value: UnityEngine_GridLayout.CellSwizzle);
        
        public constructor();
        /**
         * Get the logical center coordinate of a grid cell in local space.
         * @param position Grid cell position.
         * @returns Center of the cell transformed into local space coordinates.
         */
        public GetCellCenterLocal($position: Vector3Int):Vector3;
        /**
         * Get the logical center coordinate of a grid cell in world space.
         * @param position Grid cell position.
         * @returns Center of the cell transformed into world space coordinates.
         */
        public GetCellCenterWorld($position: Vector3Int):Vector3;
        /**
         * Swizzles the given position with the given swizzle order.
         * @param swizzle Determines the rearrangement order for the swizzle.
         * @param position Position to swizzle.
         * @returns The swizzled position.
         */
        public static Swizzle($swizzle: UnityEngine_GridLayout.CellSwizzle, $position: Vector3):Vector3;
        /**
         * Does the inverse swizzle of the given position for given swizzle order.
         * @param swizzle Determines the rearrangement order for the inverse swizzle.
         * @param position Position to inverse swizzle.
         * @returns The inversed swizzled position.
         */
        public static InverseSwizzle($swizzle: UnityEngine_GridLayout.CellSwizzle, $position: Vector3):Vector3;
        
                    
    }
    /**
     * An abstract class that defines a grid layout.
     */
    class GridLayout extends Behaviour {
        /**
         * The size of each cell in the layout.
         */
        public get cellSize(): Vector3;
        /**
         * The size of the gap between each cell in the layout.
         */
        public get cellGap(): Vector3;
        /**
         * The layout of the cells.
         */
        public get cellLayout(): UnityEngine_GridLayout.CellLayout;
        /**
         * The cell swizzle for the layout.
         */
        public get cellSwizzle(): UnityEngine_GridLayout.CellSwizzle;
        
        public constructor();
        /**
         * Returns the local bounds for a cell at the location.
         * @param cellPosition Location of the cell.
         * @returns Local bounds of cell at the location.
         */
        public GetBoundsLocal($cellPosition: Vector3Int):Bounds;
        /**
         * Returns the local bounds for the groups of cells at the location.
         * @param origin Origin of the group of cells.
         * @param size Size of the group of cells.
         * @returns Local bounds of the group of cells at the location.
         */
        public GetBoundsLocal($origin: Vector3, $size: Vector3):Bounds;
        /**
         * Converts a cell position to local position space.
         * @param cellPosition Cell position to convert.
         * @returns Local position of the cell position.
         */
        public CellToLocal($cellPosition: Vector3Int):Vector3;
        /**
         * Converts a local position to cell position.
         * @param localPosition Local Position to convert.
         * @returns Cell position of the local position.
         */
        public LocalToCell($localPosition: Vector3):Vector3Int;
        /**
         * Converts an interpolated cell position in floats to local position space.
         * @param cellPosition Interpolated cell position to convert.
         * @returns Local position of the cell position.
         */
        public CellToLocalInterpolated($cellPosition: Vector3):Vector3;
        /**
         * Converts a local position to cell position.
         * @param localPosition Local Position to convert.
         * @returns Interpolated cell position of the local position.
         */
        public LocalToCellInterpolated($localPosition: Vector3):Vector3;
        /**
         * Converts a cell position to world position space.
         * @param cellPosition Cell position to convert.
         * @returns World position of the cell position.
         */
        public CellToWorld($cellPosition: Vector3Int):Vector3;
        /**
         * Converts a world position to cell position.
         * @param worldPosition World Position to convert.
         * @returns Cell position of the world position.
         */
        public WorldToCell($worldPosition: Vector3):Vector3Int;
        /**
         * Converts a local position to world position.
         * @param localPosition Local Position to convert.
         * @returns World position of the local position.
         */
        public LocalToWorld($localPosition: Vector3):Vector3;
        /**
         * Converts a world position to local position.
         * @param worldPosition World Position to convert.
         * @returns Local position of the world position.
         */
        public WorldToLocal($worldPosition: Vector3):Vector3;
        /**
         * Get the default center coordinate of a cell for the set layout of the Grid.
         * @returns Cell Center coordinate.
         */
        public GetLayoutCellCenter():Vector3;
        
                    
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
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Representation of 3D vectors and points using integers.
     */
    interface Vector3Int extends System.ValueType {
        
                    
    }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.GridLayout' {

    import * as System from 'System';
        
    /**
     * The layout of the GridLayout.
     */
    enum CellLayout { Rectangle = 0, Hexagon = 1, Isometric = 2, IsometricZAsY = 3 }
    /**
     * Swizzles cell positions to other positions.
     */
    enum CellSwizzle { XYZ = 0, XZY = 1, YXZ = 2, YZX = 3, ZXY = 4, ZYX = 5 }
    
}

