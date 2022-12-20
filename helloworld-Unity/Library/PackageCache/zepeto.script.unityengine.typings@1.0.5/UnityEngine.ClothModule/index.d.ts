//# signature=UnityEngine.ClothModule#a97817ac159686aa24dcabf7751fc717#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * A pair of SphereColliders used to define shapes for Cloth objects to collide against.
     */
    class ClothSphereColliderPair extends System.ValueType {
        /**
         * The first SphereCollider of a ClothSphereColliderPair.
         */
        public get first(): SphereCollider;
        public set first(value: SphereCollider);
        /**
         * The second SphereCollider of a ClothSphereColliderPair.
         */
        public get second(): SphereCollider;
        public set second(value: SphereCollider);
        /**
         * Creates a ClothSphereColliderPair. If only one SphereCollider is given, the ClothSphereColliderPair will define a simple sphere. If two SphereColliders are given, the ClothSphereColliderPair defines a conic capsule shape, composed of the two spheres and the cone connecting the two.
         * @param a The first SphereCollider of a ClothSphereColliderPair.
         * @param b The second SphereCollider of a ClothSphereColliderPair.
         */
        public constructor($a: SphereCollider);
        /**
         * Creates a ClothSphereColliderPair. If only one SphereCollider is given, the ClothSphereColliderPair will define a simple sphere. If two SphereColliders are given, the ClothSphereColliderPair defines a conic capsule shape, composed of the two spheres and the cone connecting the two.
         * @param a The first SphereCollider of a ClothSphereColliderPair.
         * @param b The second SphereCollider of a ClothSphereColliderPair.
         */
        public constructor($a: SphereCollider, $b: SphereCollider);
        
                    
    }
    /**
     * A sphere-shaped primitive collider.
     */
    interface SphereCollider extends Collider {
        
                    
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
     * The ClothSkinningCoefficient struct is used to set up how a Cloth component is allowed to move with respect to the SkinnedMeshRenderer it is attached to.
     */
    class ClothSkinningCoefficient extends System.ValueType {
        /**
         * Distance a vertex is allowed to travel from the skinned mesh vertex position.
         */
        public maxDistance: number;
        /**
         * Definition of a sphere a vertex is not allowed to enter. This allows collision against the animated cloth.
         */
        public collisionSphereDistance: number;
        
        public get_Clone(): ClothSkinningCoefficient;            
    }
    /**
     * The Cloth class provides an interface to cloth simulation physics.
     */
    class Cloth extends Component {
        /**
         * The current vertex positions of the cloth object.
         */
        public get vertices(): Vector3[];
        /**
         * The current normals of the cloth object.
         */
        public get normals(): Vector3[];
        /**
         * The cloth skinning coefficients used to set up how the cloth interacts with the skinned mesh.
         */
        public get coefficients(): ClothSkinningCoefficient[];
        public set coefficients(value: ClothSkinningCoefficient[]);
        /**
         * An array of CapsuleColliders which this Cloth instance should collide with.
         */
        public get capsuleColliders(): CapsuleCollider[];
        public set capsuleColliders(value: CapsuleCollider[]);
        /**
         * An array of ClothSphereColliderPairs which this Cloth instance should collide with.
         */
        public get sphereColliders(): ClothSphereColliderPair[];
        public set sphereColliders(value: ClothSphereColliderPair[]);
        /**
         * Cloth's sleep threshold.
         */
        public get sleepThreshold(): number;
        public set sleepThreshold(value: number);
        /**
         * Bending stiffness of the cloth.
         */
        public get bendingStiffness(): number;
        public set bendingStiffness(value: number);
        /**
         * Stretching stiffness of the cloth.
         */
        public get stretchingStiffness(): number;
        public set stretchingStiffness(value: number);
        /**
         * Damp cloth motion.
         */
        public get damping(): number;
        public set damping(value: number);
        /**
         * A constant, external acceleration applied to the cloth.
         */
        public get externalAcceleration(): Vector3;
        public set externalAcceleration(value: Vector3);
        /**
         * A random, external acceleration applied to the cloth.
         */
        public get randomAcceleration(): Vector3;
        public set randomAcceleration(value: Vector3);
        /**
         * Should gravity affect the cloth simulation?
         */
        public get useGravity(): boolean;
        public set useGravity(value: boolean);
        /**
         * Is this cloth enabled?
         */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
         * The friction of the cloth when colliding with the character.
         */
        public get friction(): number;
        public set friction(value: number);
        /**
         * How much to increase mass of colliding particles.
         */
        public get collisionMassScale(): number;
        public set collisionMassScale(value: number);
        /**
         * Enable continuous collision to improve collision stability.
         */
        public get enableContinuousCollision(): boolean;
        public set enableContinuousCollision(value: boolean);
        /**
         * Add one virtual particle per triangle to improve collision stability.
         */
        public get useVirtualParticles(): number;
        public set useVirtualParticles(value: number);
        /**
         * How much world-space movement of the character will affect cloth vertices.
         */
        public get worldVelocityScale(): number;
        public set worldVelocityScale(value: number);
        /**
         * How much world-space acceleration of the character will affect cloth vertices.
         */
        public get worldAccelerationScale(): number;
        public set worldAccelerationScale(value: number);
        /**
         * Number of cloth solver iterations per second.
         */
        public get clothSolverFrequency(): number;
        public set clothSolverFrequency(value: number);
        /**
         * Use Tether Anchors.
         */
        public get useTethers(): boolean;
        public set useTethers(value: boolean);
        /**
         * Sets the stiffness frequency parameter.
         */
        public get stiffnessFrequency(): number;
        public set stiffnessFrequency(value: number);
        /**
         * Minimum distance at which two cloth particles repel each other (default: 0.0).
         */
        public get selfCollisionDistance(): number;
        public set selfCollisionDistance(value: number);
        /**
         * Self-collision stiffness defines how strong the separating impulse should be for colliding particles.
         */
        public get selfCollisionStiffness(): number;
        public set selfCollisionStiffness(value: number);
        
        public constructor();
        /**
         * Clear the pending transform changes from affecting the cloth simulation.
         */
        public ClearTransformMotion():void;
        
        public GetSelfAndInterCollisionIndices($indices: System_Collections_Generic.List$1<number>):void;
        
        public SetSelfAndInterCollisionIndices($indices: System_Collections_Generic.List$1<number>):void;
        
        public GetVirtualParticleIndices($indicesOutList: System_Collections_Generic.List$1<number>):void;
        
        public SetVirtualParticleIndices($indicesIn: System_Collections_Generic.List$1<number>):void;
        
        public GetVirtualParticleWeights($weightsOutList: System_Collections_Generic.List$1<Vector3>):void;
        
        public SetVirtualParticleWeights($weights: System_Collections_Generic.List$1<Vector3>):void;
        /**
         * Fade the cloth simulation in or out.
         * @param enabled Fading enabled or not.
         */
        public SetEnabledFading($enabled: boolean, $interpolationTime: number):void;
        
        public SetEnabledFading($enabled: boolean):void;
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * A capsule-shaped primitive collider.
     */
    interface CapsuleCollider extends Collider {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}

