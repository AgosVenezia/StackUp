//# signature=UnityEngine.TerrainPhysicsModule#5c4dd76ef115c4771dc5db2622b48105#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * A heightmap based collider.
     */
    class TerrainCollider extends Collider {
        /**
         * The terrain that stores the heightmap.
         */
        public get terrainData(): TerrainData;
        public set terrainData(value: TerrainData);
        
        public constructor();
        
                    
    }
    /**
     * A base class of all colliders.
     */
    interface Collider extends Component {
        
                    
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
     * The TerrainData class stores heightmaps, detail mesh positions, tree instances, and terrain texture alpha maps.
     */
    interface TerrainData extends Object {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

