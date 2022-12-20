//# signature=UnityEngine.SpriteMaskModule#4d80ac7ec27d8d1305d9b6645c5b97b6#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * A component for masking Sprites and Particles.
     */
    class SpriteMask extends Renderer {
        /**
         * Unique ID of the sorting layer defining the start of the custom range.
         */
        public get frontSortingLayerID(): number;
        public set frontSortingLayerID(value: number);
        /**
         * Order within the front sorting layer defining the start of the custom range.
         */
        public get frontSortingOrder(): number;
        public set frontSortingOrder(value: number);
        /**
         * Unique ID of the sorting layer defining the end of the custom range.
         */
        public get backSortingLayerID(): number;
        public set backSortingLayerID(value: number);
        /**
         * Order within the back sorting layer defining the end of the custom range.
         */
        public get backSortingOrder(): number;
        public set backSortingOrder(value: number);
        /**
         * The minimum alpha value used by the mask to select the area of influence defined over the mask's sprite.
         */
        public get alphaCutoff(): number;
        public set alphaCutoff(value: number);
        /**
         * The Sprite used to define the mask.
         */
        public get sprite(): Sprite;
        public set sprite(value: Sprite);
        /**
         * Mask sprites from front to back sorting values only.
         */
        public get isCustomRangeActive(): boolean;
        public set isCustomRangeActive(value: boolean);
        /**
         * Determines the position of the Sprite used for sorting the SpriteMask.
         */
        public get spriteSortPoint(): SpriteSortPoint;
        public set spriteSortPoint(value: SpriteSortPoint);
        
        public constructor();
        
                    
    }
    /**
     * General functionality for all renderers.
     */
    interface Renderer extends Component {
        
                    
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
     * Represents a Sprite object for use in 2D gameplay.
     */
    interface Sprite extends Object {
        
                    
    }
    /**
     * Determines the position of the Sprite used for sorting the Renderer.
     */
    enum SpriteSortPoint { Center = 0, Pivot = 1 }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

