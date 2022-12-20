//# signature=UnityEngine.PhysicsModule#08736acd979e62eceda6e02da41eabc4#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_SceneManagement from 'UnityEngine.SceneManagement';
    import * as Unity_Jobs from 'Unity.Jobs';
    import * as Unity_Collections from 'Unity.Collections';
        
    /**
     * Global physics properties and helper methods.
     */
    class Physics extends System.Object {
        /**
         * Layer mask constant to select ignore raycast layer.
         */
        public static IgnoreRaycastLayer: number;
        /**
         * Layer mask constant to select default raycast layers.
         */
        public static DefaultRaycastLayers: number;
        /**
         * Layer mask constant to select all layers.
         */
        public static AllLayers: number;
        /**
         * The gravity applied to all rigid bodies in the Scene.
         */
        public static get gravity(): Vector3;
        public static set gravity(value: Vector3);
        /**
         * The default contact offset of the newly created colliders.
         */
        public static get defaultContactOffset(): number;
        public static set defaultContactOffset(value: number);
        /**
         * The mass-normalized energy threshold, below which objects start going to sleep.
         */
        public static get sleepThreshold(): number;
        public static set sleepThreshold(value: number);
        /**
         * Specifies whether queries (raycasts, spherecasts, overlap tests, etc.) hit Triggers by default.
         */
        public static get queriesHitTriggers(): boolean;
        public static set queriesHitTriggers(value: boolean);
        /**
         * Whether physics queries should hit back-face triangles.
         */
        public static get queriesHitBackfaces(): boolean;
        public static set queriesHitBackfaces(value: boolean);
        /**
         * Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive.
         */
        public static get bounceThreshold(): number;
        public static set bounceThreshold(value: number);
        /**
         * The maximum default velocity needed to move a Rigidbody's collider out of another collider's surface penetration. Must be positive.
         */
        public static get defaultMaxDepenetrationVelocity(): number;
        public static set defaultMaxDepenetrationVelocity(value: number);
        /**
         * The defaultSolverIterations determines how accurately Rigidbody joints and collision contacts are resolved. (default 6). Must be positive.
         */
        public static get defaultSolverIterations(): number;
        public static set defaultSolverIterations(value: number);
        /**
         * The defaultSolverVelocityIterations affects how accurately the Rigidbody joints and collision contacts are resolved. (default 1). Must be positive.
         */
        public static get defaultSolverVelocityIterations(): number;
        public static set defaultSolverVelocityIterations(value: number);
        /**
         * Default maximum angular speed of the dynamic Rigidbody, in radians (default 50).
         */
        public static get defaultMaxAngularSpeed(): number;
        public static set defaultMaxAngularSpeed(value: number);
        /**
         * The PhysicsScene automatically created when Unity starts.
         */
        public static get defaultPhysicsScene(): PhysicsScene;
        /**
         * Sets whether the physics should be simulated automatically or not.
         */
        public static get autoSimulation(): boolean;
        public static set autoSimulation(value: boolean);
        /**
         * Whether or not to automatically sync transform changes with the physics system whenever a Transform component changes.
         */
        public static get autoSyncTransforms(): boolean;
        public static set autoSyncTransforms(value: boolean);
        /**
         * Determines whether the garbage collector should reuse only a single instance of a Collision type for all collision callbacks.
         */
        public static get reuseCollisionCallbacks(): boolean;
        public static set reuseCollisionCallbacks(value: boolean);
        /**
         * Sets the minimum separation distance for cloth inter-collision.
         */
        public static get interCollisionDistance(): number;
        public static set interCollisionDistance(value: number);
        /**
         * Sets the cloth inter-collision stiffness.
         */
        public static get interCollisionStiffness(): number;
        public static set interCollisionStiffness(value: number);
        
        public static get interCollisionSettingsToggle(): boolean;
        public static set interCollisionSettingsToggle(value: boolean);
        /**
         * Cloth Gravity setting.
         * Set gravity for all cloth components.
         */
        public static get clothGravity(): Vector3;
        public static set clothGravity(value: Vector3);
        
        public constructor();
        /**
         * Makes the collision detection system ignore all collisions between collider1 and collider2.
         * @param collider1 Any collider.
         * @param collider2 Another collider you want to have collider1 to start or stop ignoring collisions with.
         * @param ignore Whether or not the collisions between the two colliders should be ignored or not.
         */
        public static IgnoreCollision($collider1: Collider, $collider2: Collider, $ignore: boolean):void;
        
        public static IgnoreCollision($collider1: Collider, $collider2: Collider):void;
        /**
         * Makes the collision detection system ignore all collisions between any collider in layer1 and any collider in layer2.
         * Note that IgnoreLayerCollision will reset the trigger state of affected colliders, so you might receive OnTriggerExit and OnTriggerEnter messages in response to calling this.
         */
        public static IgnoreLayerCollision($layer1: number, $layer2: number, $ignore: boolean):void;
        
        public static IgnoreLayerCollision($layer1: number, $layer2: number):void;
        /**
         * Are collisions between layer1 and layer2 being ignored?
         */
        public static GetIgnoreLayerCollision($layer1: number, $layer2: number):boolean;
        /**
         * Checks whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
         * @param collider1 The first collider to compare to collider2.
         * @param collider2 The second collider to compare to collider1.
         * @returns Whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
         */
        public static GetIgnoreCollision($collider1: Collider, $collider2: Collider):boolean;
        /**
         * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
         * @param origin The starting point of the ray in world coordinates.
         * @param direction The direction of the ray.
         * @param maxDistance The max distance the ray should check for collisions.
         * @param layerMask A that is used to selectively ignore Colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Returns true if the ray intersects with a Collider, otherwise false.
         */
        public static Raycast($origin: Vector3, $direction: Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static Raycast($origin: Vector3, $direction: Vector3, $maxDistance: number, $layerMask: number):boolean;
        
        public static Raycast($origin: Vector3, $direction: Vector3, $maxDistance: number):boolean;
        
        public static Raycast($origin: Vector3, $direction: Vector3):boolean;
        /**
         * Casts a ray against all colliders in the Scene and returns detailed information on what was hit.
         * @param origin The starting point of the ray in world coordinates.
         * @param direction The direction of the ray.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (See Also: RaycastHit).
         * @param maxDistance The max distance the ray should check for collisions.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Returns true when the ray intersects any collider, otherwise false.
         */
        public static Raycast($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static Raycast($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
        
        public static Raycast($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number):boolean;
        
        public static Raycast($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Same as above using ray.origin and ray.direction instead of origin and direction.
         * @param ray The starting point and direction of the ray.
         * @param maxDistance The max distance the ray should check for collisions.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Returns true when the ray intersects any collider, otherwise false.
         */
        public static Raycast($ray: Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static Raycast($ray: Ray, $maxDistance: number, $layerMask: number):boolean;
        
        public static Raycast($ray: Ray, $maxDistance: number):boolean;
        
        public static Raycast($ray: Ray):boolean;
        /**
         * Same as above using ray.origin and ray.direction instead of origin and direction.
         * @param ray The starting point and direction of the ray.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (See Also: RaycastHit).
         * @param maxDistance The max distance the ray should check for collisions.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Returns true when the ray intersects any collider, otherwise false.
         */
        public static Raycast($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static Raycast($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
        
        public static Raycast($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: number):boolean;
        
        public static Raycast($ray: Ray, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Returns true if there is any collider intersecting the line between start and end.
         * @param start Start point.
         * @param end End point.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         */
        public static Linecast($start: Vector3, $end: Vector3, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static Linecast($start: Vector3, $end: Vector3, $layerMask: number):boolean;
        
        public static Linecast($start: Vector3, $end: Vector3):boolean;
        /**
         * Returns true if there is any collider intersecting the line between start and end.
         * @param start Start point.
         * @param end End point.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         */
        public static Linecast($start: Vector3, $end: Vector3, $hitInfo: $Ref<RaycastHit>, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static Linecast($start: Vector3, $end: Vector3, $hitInfo: $Ref<RaycastHit>, $layerMask: number):boolean;
        
        public static Linecast($start: Vector3, $end: Vector3, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Casts a capsule against all colliders in the Scene and returns detailed information on what was hit.
         * @param point1 The center of the sphere at the start of the capsule.
         * @param point2 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param direction The direction into which to sweep the capsule.
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True when the capsule sweep intersects any collider, otherwise false.
         */
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $maxDistance: number, $layerMask: number):boolean;
        
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $maxDistance: number):boolean;
        
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3):boolean;
        /**
         * @param point1 The center of the sphere at the start of the capsule.
         * @param point2 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param direction The direction into which to sweep the capsule.
         * @param maxDistance The max length of the sweep.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         */
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
        
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number):boolean;
        
        public static CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Casts a sphere along a ray and returns detailed information on what was hit.
         * @param origin The center of the sphere at the start of the sweep.
         * @param radius The radius of the sphere.
         * @param direction The direction into which to sweep the sphere.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True when the sphere sweep intersects any collider, otherwise false.
         */
        public static SphereCast($origin: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static SphereCast($origin: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
        
        public static SphereCast($origin: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number):boolean;
        
        public static SphereCast($origin: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Casts a sphere along a ray and returns detailed information on what was hit.
         * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
         * @param radius The radius of the sphere.
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True when the sphere sweep intersects any collider, otherwise false.
         */
        public static SphereCast($ray: Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static SphereCast($ray: Ray, $radius: number, $maxDistance: number, $layerMask: number):boolean;
        
        public static SphereCast($ray: Ray, $radius: number, $maxDistance: number):boolean;
        
        public static SphereCast($ray: Ray, $radius: number):boolean;
        /**
         * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
         * @param radius The radius of the sphere.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         */
        public static SphereCast($ray: Ray, $radius: number, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static SphereCast($ray: Ray, $radius: number, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $layerMask: number):boolean;
        
        public static SphereCast($ray: Ray, $radius: number, $hitInfo: $Ref<RaycastHit>, $maxDistance: number):boolean;
        
        public static SphereCast($ray: Ray, $radius: number, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Casts the box along a ray and returns detailed information on what was hit.
         * @param center Center of the box.
         * @param halfExtents Half the size of the box in each dimension.
         * @param direction The direction in which to cast the box.
         * @param orientation Rotation of the box.
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True, if any intersections were found.
         */
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: number, $layerMask: number):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: number):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3):boolean;
        /**
         * Casts the box along a ray and returns detailed information on what was hit.
         * @param center Center of the box.
         * @param halfExtents Half the size of the box in each dimension.
         * @param direction The direction in which to cast the box.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param orientation Rotation of the box.
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True, if any intersections were found.
         */
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance: number, $layerMask: number):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance: number):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion):boolean;
        
        public static BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * See Also: Raycast.
         * @param origin The starting point of the ray in world coordinates.
         * @param direction The direction of the ray.
         * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
         * @param layermask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         */
        public static RaycastAll($origin: Vector3, $direction: Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):RaycastHit[];
        
        public static RaycastAll($origin: Vector3, $direction: Vector3, $maxDistance: number, $layerMask: number):RaycastHit[];
        
        public static RaycastAll($origin: Vector3, $direction: Vector3, $maxDistance: number):RaycastHit[];
        
        public static RaycastAll($origin: Vector3, $direction: Vector3):RaycastHit[];
        /**
         * Casts a ray through the Scene and returns all hits. Note that order of the results is undefined.
         * @param ray The starting point and direction of the ray.
         * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns An array of RaycastHit objects. Note that the order of the results is undefined.
         */
        public static RaycastAll($ray: Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):RaycastHit[];
        
        public static RaycastAll($ray: Ray, $maxDistance: number, $layerMask: number):RaycastHit[];
        
        public static RaycastAll($ray: Ray, $maxDistance: number):RaycastHit[];
        
        public static RaycastAll($ray: Ray):RaycastHit[];
        /**
         * Cast a ray through the Scene and store the hits into the buffer.
         * @param ray The starting point and direction of the ray.
         * @param results The buffer to store the hits into.
         * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of hits stored into the results buffer.
         */
        public static RaycastNonAlloc($ray: Ray, $results: RaycastHit[], $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static RaycastNonAlloc($ray: Ray, $results: RaycastHit[], $maxDistance: number, $layerMask: number):number;
        
        public static RaycastNonAlloc($ray: Ray, $results: RaycastHit[], $maxDistance: number):number;
        
        public static RaycastNonAlloc($ray: Ray, $results: RaycastHit[]):number;
        /**
         * Cast a ray through the Scene and store the hits into the buffer.
         * @param origin The starting point and direction of the ray.
         * @param results The buffer to store the hits into.
         * @param direction The direction of the ray.
         * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @returns The amount of hits stored into the results buffer.
         */
        public static RaycastNonAlloc($origin: Vector3, $direction: Vector3, $results: RaycastHit[], $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static RaycastNonAlloc($origin: Vector3, $direction: Vector3, $results: RaycastHit[], $maxDistance: number, $layerMask: number):number;
        
        public static RaycastNonAlloc($origin: Vector3, $direction: Vector3, $results: RaycastHit[], $maxDistance: number):number;
        
        public static RaycastNonAlloc($origin: Vector3, $direction: Vector3, $results: RaycastHit[]):number;
        /**
         * Like Physics.CapsuleCast, but this function will return all hits the capsule sweep intersects.
         * @param point1 The center of the sphere at the start of the capsule.
         * @param point2 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param direction The direction into which to sweep the capsule.
         * @param maxDistance The max length of the sweep.
         * @param layermask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns An array of all colliders hit in the sweep.
         */
        public static CapsuleCastAll($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):RaycastHit[];
        
        public static CapsuleCastAll($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $maxDistance: number, $layerMask: number):RaycastHit[];
        
        public static CapsuleCastAll($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $maxDistance: number):RaycastHit[];
        
        public static CapsuleCastAll($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3):RaycastHit[];
        /**
         * Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
         * @param origin The center of the sphere at the start of the sweep.
         * @param radius The radius of the sphere.
         * @param direction The direction in which to sweep the sphere.
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns An array of all colliders hit in the sweep.
         */
        public static SphereCastAll($origin: Vector3, $radius: number, $direction: Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):RaycastHit[];
        
        public static SphereCastAll($origin: Vector3, $radius: number, $direction: Vector3, $maxDistance: number, $layerMask: number):RaycastHit[];
        
        public static SphereCastAll($origin: Vector3, $radius: number, $direction: Vector3, $maxDistance: number):RaycastHit[];
        
        public static SphereCastAll($origin: Vector3, $radius: number, $direction: Vector3):RaycastHit[];
        /**
         * Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
         * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
         * @param radius The radius of the sphere.
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         */
        public static SphereCastAll($ray: Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):RaycastHit[];
        
        public static SphereCastAll($ray: Ray, $radius: number, $maxDistance: number, $layerMask: number):RaycastHit[];
        
        public static SphereCastAll($ray: Ray, $radius: number, $maxDistance: number):RaycastHit[];
        
        public static SphereCastAll($ray: Ray, $radius: number):RaycastHit[];
        /**
         * Check the given capsule against the physics world and return all overlapping colliders.
         * @param point0 The center of the sphere at the start of the capsule.
         * @param point1 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Colliders touching or inside the capsule.
         */
        public static OverlapCapsule($point0: Vector3, $point1: Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):Collider[];
        
        public static OverlapCapsule($point0: Vector3, $point1: Vector3, $radius: number, $layerMask: number):Collider[];
        
        public static OverlapCapsule($point0: Vector3, $point1: Vector3, $radius: number):Collider[];
        /**
         * Computes and stores colliders touching or inside the sphere.
         * @param position Center of the sphere.
         * @param radius Radius of the sphere.
         * @param layerMask A defines which layers of colliders to include in the query.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Returns an array with all colliders touching or inside the sphere.
         */
        public static OverlapSphere($position: Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):Collider[];
        
        public static OverlapSphere($position: Vector3, $radius: number, $layerMask: number):Collider[];
        
        public static OverlapSphere($position: Vector3, $radius: number):Collider[];
        /**
         * Simulate physics in the Scene.
         * @param step The time to advance physics by.
         */
        public static Simulate($step: number):void;
        /**
         * Apply Transform changes to the physics engine.
         */
        public static SyncTransforms():void;
        /**
         * Compute the minimal translation required to separate the given colliders apart at specified poses.
         * @param colliderA The first collider.
         * @param positionA Position of the first collider.
         * @param rotationA Rotation of the first collider.
         * @param colliderB The second collider.
         * @param positionB Position of the second collider.
         * @param rotationB Rotation of the second collider.
         * @param direction Direction along which the translation required to separate the colliders apart is minimal.
         * @param distance The distance along direction that is required to separate the colliders apart.
         * @returns True, if the colliders overlap at the given poses.
         */
        public static ComputePenetration($colliderA: Collider, $positionA: Vector3, $rotationA: Quaternion, $colliderB: Collider, $positionB: Vector3, $rotationB: Quaternion, $direction: $Ref<Vector3>, $distance: $Ref<number>):boolean;
        /**
         * Returns a point on the given collider that is closest to the specified location.
         * @param point Location you want to find the closest point to.
         * @param collider The collider that you find the closest point on.
         * @param position The position of the collider.
         * @param rotation The rotation of the collider.
         * @returns The point on the collider that is closest to the specified location.
         */
        public static ClosestPoint($point: Vector3, $collider: Collider, $position: Vector3, $rotation: Quaternion):Vector3;
        /**
         * Computes and stores colliders touching or inside the sphere into the provided buffer.
         * @param position Center of the sphere.
         * @param radius Radius of the sphere.
         * @param results The buffer to store the results into.
         * @param layerMask A defines which layers of colliders to include in the query.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Returns the amount of colliders stored into the results buffer.
         */
        public static OverlapSphereNonAlloc($position: Vector3, $radius: number, $results: Collider[], $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static OverlapSphereNonAlloc($position: Vector3, $radius: number, $results: Collider[], $layerMask: number):number;
        
        public static OverlapSphereNonAlloc($position: Vector3, $radius: number, $results: Collider[]):number;
        /**
         * Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates.
         * @param position Center of the sphere.
         * @param radius Radius of the sphere.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         */
        public static CheckSphere($position: Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static CheckSphere($position: Vector3, $radius: number, $layerMask: number):boolean;
        
        public static CheckSphere($position: Vector3, $radius: number):boolean;
        /**
         * Casts a capsule against all colliders in the Scene and returns detailed information on what was hit into the buffer.
         * @param point1 The center of the sphere at the start of the capsule.
         * @param point2 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param direction The direction into which to sweep the capsule.
         * @param results The buffer to store the hits into.
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of hits stored into the buffer.
         */
        public static CapsuleCastNonAlloc($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static CapsuleCastNonAlloc($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance: number, $layerMask: number):number;
        
        public static CapsuleCastNonAlloc($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance: number):number;
        
        public static CapsuleCastNonAlloc($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[]):number;
        /**
         * Cast sphere along the direction and store the results into buffer.
         * @param origin The center of the sphere at the start of the sweep.
         * @param radius The radius of the sphere.
         * @param direction The direction in which to sweep the sphere.
         * @param results The buffer to save the hits into.
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of hits stored into the results buffer.
         */
        public static SphereCastNonAlloc($origin: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static SphereCastNonAlloc($origin: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance: number, $layerMask: number):number;
        
        public static SphereCastNonAlloc($origin: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance: number):number;
        
        public static SphereCastNonAlloc($origin: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[]):number;
        /**
         * Cast sphere along the direction and store the results into buffer.
         * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
         * @param radius The radius of the sphere.
         * @param results The buffer to save the results to.
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of hits stored into the results buffer.
         */
        public static SphereCastNonAlloc($ray: Ray, $radius: number, $results: RaycastHit[], $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static SphereCastNonAlloc($ray: Ray, $radius: number, $results: RaycastHit[], $maxDistance: number, $layerMask: number):number;
        
        public static SphereCastNonAlloc($ray: Ray, $radius: number, $results: RaycastHit[], $maxDistance: number):number;
        
        public static SphereCastNonAlloc($ray: Ray, $radius: number, $results: RaycastHit[]):number;
        /**
         * Checks if any colliders overlap a capsule-shaped volume in world space.
         * @param start The center of the sphere at the start of the capsule.
         * @param end The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param layermask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         */
        public static CheckCapsule($start: Vector3, $end: Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static CheckCapsule($start: Vector3, $end: Vector3, $radius: number, $layerMask: number):boolean;
        
        public static CheckCapsule($start: Vector3, $end: Vector3, $radius: number):boolean;
        /**
         * Check whether the given box overlaps with other colliders or not.
         * @param center Center of the box.
         * @param halfExtents Half the size of the box in each dimension.
         * @param orientation Rotation of the box.
         * @param layermask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True, if the box overlaps with any colliders.
         */
        public static CheckBox($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layermask: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public static CheckBox($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layerMask: number):boolean;
        
        public static CheckBox($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion):boolean;
        
        public static CheckBox($center: Vector3, $halfExtents: Vector3):boolean;
        /**
         * Find all colliders touching or inside of the given box.
         * @param center Center of the box.
         * @param halfExtents Half of the size of the box in each dimension.
         * @param orientation Rotation of the box.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns Colliders that overlap with the given box.
         */
        public static OverlapBox($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):Collider[];
        
        public static OverlapBox($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $layerMask: number):Collider[];
        
        public static OverlapBox($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion):Collider[];
        
        public static OverlapBox($center: Vector3, $halfExtents: Vector3):Collider[];
        /**
         * Find all colliders touching or inside of the given box, and store them into the buffer.
         * @param center Center of the box.
         * @param halfExtents Half of the size of the box in each dimension.
         * @param results The buffer to store the results in.
         * @param orientation Rotation of the box.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of colliders stored in results.
         */
        public static OverlapBoxNonAlloc($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion, $mask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static OverlapBoxNonAlloc($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion, $mask: number):number;
        
        public static OverlapBoxNonAlloc($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion):number;
        
        public static OverlapBoxNonAlloc($center: Vector3, $halfExtents: Vector3, $results: Collider[]):number;
        /**
         * Cast the box along the direction, and store hits in the provided buffer.
         * @param center Center of the box.
         * @param halfExtents Half the size of the box in each dimension.
         * @param direction The direction in which to cast the box.
         * @param results The buffer to store the results in.
         * @param orientation Rotation of the box.
         * @param maxDistance The max length of the cast.
         * @param layermask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of hits stored to the results buffer.
         */
        public static BoxCastNonAlloc($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static BoxCastNonAlloc($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion):number;
        
        public static BoxCastNonAlloc($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance: number):number;
        
        public static BoxCastNonAlloc($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance: number, $layerMask: number):number;
        
        public static BoxCastNonAlloc($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[]):number;
        /**
         * Like Physics.BoxCast, but returns all hits.
         * @param center Center of the box.
         * @param halfExtents Half the size of the box in each dimension.
         * @param direction The direction in which to cast the box.
         * @param orientation Rotation of the box.
         * @param maxDistance The max length of the cast.
         * @param layermask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns All colliders that were hit.
         */
        public static BoxCastAll($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):RaycastHit[];
        
        public static BoxCastAll($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: number, $layerMask: number):RaycastHit[];
        
        public static BoxCastAll($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion, $maxDistance: number):RaycastHit[];
        
        public static BoxCastAll($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $orientation: Quaternion):RaycastHit[];
        
        public static BoxCastAll($center: Vector3, $halfExtents: Vector3, $direction: Vector3):RaycastHit[];
        /**
         * Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
         * @param point0 The center of the sphere at the start of the capsule.
         * @param point1 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param results The buffer to store the results into.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of entries written to the buffer.
         */
        public static OverlapCapsuleNonAlloc($point0: Vector3, $point1: Vector3, $radius: number, $results: Collider[], $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        
        public static OverlapCapsuleNonAlloc($point0: Vector3, $point1: Vector3, $radius: number, $results: Collider[], $layerMask: number):number;
        
        public static OverlapCapsuleNonAlloc($point0: Vector3, $point1: Vector3, $radius: number, $results: Collider[]):number;
        /**
         * Rebuild the broadphase interest regions as well as set the world boundaries.
         * @param worldBounds Boundaries of the physics world.
         * @param subdivisions How many cells to create along x and z axis.
         */
        public static RebuildBroadphaseRegions($worldBounds: Bounds, $subdivisions: number):void;
        /**
         * Prepares the Mesh for use with a MeshCollider.
         * @param meshID The instance ID of the Mesh to bake collision data from.
         * @param convex A flag to indicate whether to bake convex geometry or not.
         */
        public static BakeMesh($meshID: number, $convex: boolean):void;
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Represents a single instance of a 3D physics Scene.
     */
    class PhysicsScene extends System.ValueType {
        
        public ToString():string;
        
        public static op_Equality($lhs: PhysicsScene, $rhs: PhysicsScene):boolean;
        
        public static op_Inequality($lhs: PhysicsScene, $rhs: PhysicsScene):boolean;
        
        public GetHashCode():number;
        
        public Equals($other: any):boolean;
        
        public Equals($other: PhysicsScene):boolean;
        /**
         * Gets whether the physics Scene is valid or not.
         * @returns Is the physics scene valid?
         */
        public IsValid():boolean;
        /**
         * Gets whether the physics Scene is empty or not.
         * @returns Is the physics Scene is empty?
         */
        public IsEmpty():boolean;
        /**
         * Simulate physics associated with this PhysicsScene.
         * @param step The time to advance physics by.
         * @returns Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail.
         */
        public Simulate($step: number):void;
        /**
         * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
         * @param origin The starting point of the ray in world coordinates.
         * @param direction The direction of the ray.
         * @param maxDistance The max distance the ray should check for collisions.
         * @param layerMask A that is used to selectively ignore Colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True if the ray intersects with a Collider, otherwise false.
         */
        public Raycast($origin: Vector3, $direction: Vector3, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):boolean;
        /**
         * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
         * @param origin The starting point of the ray in world coordinates.
         * @param direction The direction of the ray.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param maxDistance The max distance the ray should check for collisions.
         * @param layerMask A that is used to selectively ignore Colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True if the ray intersects with a Collider, otherwise false.
         */
        public Raycast($origin: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):boolean;
        /**
         * Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
         * @param origin The starting point and direction of the ray.
         * @param direction The direction of the ray.
         * @param raycastHits The buffer to store the hits into.
         * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction The amount of hits stored into the results buffer.
         * @returns True if the ray intersects with a Collider, otherwise false.
         */
        public Raycast($origin: Vector3, $direction: Vector3, $raycastHits: RaycastHit[], $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):number;
        /**
         * Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.
         * @param point1 The center of the sphere at the start of the capsule.
         * @param point2 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param direction The direction into which to sweep the capsule.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True when the capsule sweep intersects any collider, otherwise false.
         */
        public CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):boolean;
        /**
         * Casts a capsule against all colliders in this physics scene and returns detailed information on what was hit.
         * @param point1 The center of the sphere at the start of the capsule.
         * @param point2 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param direction The direction into which to sweep the capsule.
         * @param results The buffer to store the results in.
         * @param maxDistance The max length of the sweep.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of hits stored to the results buffer.
         */
        public CapsuleCast($point1: Vector3, $point2: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):number;
        /**
         * Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
         * @param point0 The center of the sphere at the start of the capsule.
         * @param point1 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param results The buffer to store the results into.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of entries written to the buffer.
         */
        public OverlapCapsule($point0: Vector3, $point1: Vector3, $radius: number, $results: Collider[], $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):number;
        /**
         * Casts a sphere along a ray and returns detailed information on what was hit.
         * @param origin The center of the sphere at the start of the sweep.
         * @param radius The radius of the sphere.
         * @param direction The direction into which to sweep the sphere.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True when the sphere sweep intersects any collider, otherwise false.
         */
        public SphereCast($origin: Vector3, $radius: number, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):boolean;
        /**
         * Cast sphere along the direction and store the results into buffer.
         * @param origin The center of the sphere at the start of the sweep.
         * @param radius The radius of the sphere.
         * @param direction The direction into which to sweep the sphere.
         * @param results The buffer to save the results to.
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction A that is used to selectively ignore colliders when casting a capsule.
         * @returns The amount of hits stored into the results buffer.
         */
        public SphereCast($origin: Vector3, $radius: number, $direction: Vector3, $results: RaycastHit[], $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):number;
        /**
         * Computes and stores colliders touching or inside the sphere into the provided buffer.
         * @param position Center of the sphere.
         * @param radius Radius of the sphere.
         * @param results The buffer to store the results into.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of colliders stored into the results buffer.
         */
        public OverlapSphere($position: Vector3, $radius: number, $results: Collider[], $layerMask: number, $queryTriggerInteraction: QueryTriggerInteraction):number;
        /**
         * Casts the box along a ray and returns detailed information on what was hit.
         * @param center Center of the box.
         * @param halfExtents Half the size of the box in each dimension.
         * @param direction The direction in which to cast the box.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
         * @param orientation Rotation of the box.
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True, if any intersections were found.
         */
        public BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>, $orientation: Quaternion, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):boolean;
        
        public BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Find all colliders touching or inside of the given box, and store them into the buffer.
         * @param center Center of the box.
         * @param halfExtents Half of the size of the box in each dimension.
         * @param results The buffer to store the results in.
         * @param orientation Rotation of the box.
         * @param layerMask A that is used to selectively ignore colliders when casting a ray.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of colliders stored in results.
         */
        public OverlapBox($center: Vector3, $halfExtents: Vector3, $results: Collider[], $orientation: Quaternion, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):number;
        
        public OverlapBox($center: Vector3, $halfExtents: Vector3, $results: Collider[]):number;
        /**
         * Casts the box along a ray and returns detailed information on what was hit.
         * @param center Center of the box.
         * @param halfExtents Half the size of the box in each dimension.
         * @param direction The direction in which to cast the box.
         * @param results The buffer to store the results in.
         * @param orientation Rotation of the box.
         * @param maxDistance The max length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns The amount of hits stored to the results buffer.
         */
        public BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[], $orientation: Quaternion, $maxDistance?: number, $layerMask?: number, $queryTriggerInteraction?: QueryTriggerInteraction):number;
        
        public BoxCast($center: Vector3, $halfExtents: Vector3, $direction: Vector3, $results: RaycastHit[]):number;
        
        public get_Clone(): PhysicsScene;            
    }
    /**
     * A base class of all colliders.
     */
    class Collider extends Component {
        /**
         * Enabled Colliders will collide with other Colliders, disabled Colliders won't.
         */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
         * The rigidbody the collider is attached to.
         */
        public get attachedRigidbody(): Rigidbody;
        /**
         * The articulation body the collider is attached to.
         */
        public get attachedArticulationBody(): ArticulationBody;
        /**
         * Is the collider a trigger?
         */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
         * Contact offset value of this collider.
         */
        public get contactOffset(): number;
        public set contactOffset(value: number);
        /**
         * The world space bounding volume of the collider (Read Only).
         */
        public get bounds(): Bounds;
        /**
         * The shared physic material of this collider.
         */
        public get sharedMaterial(): PhysicMaterial;
        public set sharedMaterial(value: PhysicMaterial);
        /**
         * The material used by the collider.
         */
        public get material(): PhysicMaterial;
        public set material(value: PhysicMaterial);
        
        public constructor();
        /**
         * Returns a point on the collider that is closest to a given location.
         * @param position Location you want to find the closest point to.
         * @returns The point on the collider that is closest to the specified location.
         */
        public ClosestPoint($position: Vector3):Vector3;
        /**
         * Casts a Ray that ignores all Colliders except this one.
         * @param ray The starting point and direction of the ray.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit.
         * @param maxDistance The max length of the ray.
         * @returns True when the ray intersects the collider, otherwise false.
         */
        public Raycast($ray: Ray, $hitInfo: $Ref<RaycastHit>, $maxDistance: number):boolean;
        /**
         * The closest point to the bounding box of the attached collider.
         */
        public ClosestPointOnBounds($position: Vector3):Vector3;
        
                    
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
     * Overrides the global Physics.queriesHitTriggers.
     */
    enum QueryTriggerInteraction { UseGlobal = 0, Ignore = 1, Collide = 2 }
    /**
     * Structure used to get information back from a raycast.
     */
    class RaycastHit extends System.ValueType {
        /**
         * The Collider that was hit.
         */
        public get collider(): Collider;
        /**
         * The impact point in world space where the ray hit the collider.
         */
        public get point(): Vector3;
        public set point(value: Vector3);
        /**
         * The normal of the surface the ray hit.
         */
        public get normal(): Vector3;
        public set normal(value: Vector3);
        /**
         * The barycentric coordinate of the triangle we hit.
         */
        public get barycentricCoordinate(): Vector3;
        public set barycentricCoordinate(value: Vector3);
        /**
         * The distance from the ray's origin to the impact point.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * The index of the triangle that was hit.
         */
        public get triangleIndex(): number;
        /**
         * The uv texture coordinate at the collision location.
         */
        public get textureCoord(): Vector2;
        /**
         * The secondary uv texture coordinate at the impact point.
         */
        public get textureCoord2(): Vector2;
        /**
         * The Transform of the rigidbody or collider that was hit.
         */
        public get transform(): Transform;
        /**
         * The Rigidbody of the collider that was hit. If the collider is not attached to a rigidbody then it is null.
         */
        public get rigidbody(): Rigidbody;
        /**
         * The ArticulationBody of the collider that was hit. If the collider is not attached to an articulation body then it is null.
         */
        public get articulationBody(): ArticulationBody;
        /**
         * The uv lightmap coordinate at the impact point.
         */
        public get lightmapCoord(): Vector2;
        
        public get_Clone(): RaycastHit;            
    }
    /**
     * Representation of rays.
     */
    interface Ray extends System.ValueType {
        
                    
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
    }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    /**
     * Control of an object's position through physics simulation.
     */
    class Rigidbody extends Component {
        /**
         * The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position.
         */
        public get velocity(): Vector3;
        public set velocity(value: Vector3);
        /**
         * The angular velocity vector of the rigidbody measured in radians per second.
         */
        public get angularVelocity(): Vector3;
        public set angularVelocity(value: Vector3);
        /**
         * The drag of the object.
         */
        public get drag(): number;
        public set drag(value: number);
        /**
         * The angular drag of the object.
         */
        public get angularDrag(): number;
        public set angularDrag(value: number);
        /**
         * The mass of the rigidbody.
         */
        public get mass(): number;
        public set mass(value: number);
        /**
         * Controls whether gravity affects this rigidbody.
         */
        public get useGravity(): boolean;
        public set useGravity(value: boolean);
        /**
         * Maximum velocity of a rigidbody when moving out of penetrating state.
         */
        public get maxDepenetrationVelocity(): number;
        public set maxDepenetrationVelocity(value: number);
        /**
         * Controls whether physics affects the rigidbody.
         */
        public get isKinematic(): boolean;
        public set isKinematic(value: boolean);
        /**
         * Controls whether physics will change the rotation of the object.
         */
        public get freezeRotation(): boolean;
        public set freezeRotation(value: boolean);
        /**
         * Controls which degrees of freedom are allowed for the simulation of this Rigidbody.
         */
        public get constraints(): RigidbodyConstraints;
        public set constraints(value: RigidbodyConstraints);
        /**
         * The Rigidbody's collision detection mode.
         */
        public get collisionDetectionMode(): CollisionDetectionMode;
        public set collisionDetectionMode(value: CollisionDetectionMode);
        /**
         * The center of mass relative to the transform's origin.
         */
        public get centerOfMass(): Vector3;
        public set centerOfMass(value: Vector3);
        /**
         * The center of mass of the rigidbody in world space (Read Only).
         */
        public get worldCenterOfMass(): Vector3;
        /**
         * The rotation of the inertia tensor.
         */
        public get inertiaTensorRotation(): Quaternion;
        public set inertiaTensorRotation(value: Quaternion);
        /**
         * The diagonal inertia tensor of mass relative to the center of mass.
         */
        public get inertiaTensor(): Vector3;
        public set inertiaTensor(value: Vector3);
        /**
         * Should collision detection be enabled? (By default always enabled).
         */
        public get detectCollisions(): boolean;
        public set detectCollisions(value: boolean);
        /**
         * The position of the rigidbody.
         */
        public get position(): Vector3;
        public set position(value: Vector3);
        /**
         * The rotation of the Rigidbody.
         */
        public get rotation(): Quaternion;
        public set rotation(value: Quaternion);
        /**
         * Interpolation allows you to smooth out the effect of running physics at a fixed frame rate.
         */
        public get interpolation(): RigidbodyInterpolation;
        public set interpolation(value: RigidbodyInterpolation);
        /**
         * The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive.
         */
        public get solverIterations(): number;
        public set solverIterations(value: number);
        /**
         * The mass-normalized energy threshold, below which objects start going to sleep.
         */
        public get sleepThreshold(): number;
        public set sleepThreshold(value: number);
        /**
         * The maximimum angular velocity of the rigidbody measured in radians per second. (Default 7) range { 0, infinity }.
         */
        public get maxAngularVelocity(): number;
        public set maxAngularVelocity(value: number);
        /**
         * The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive.
         */
        public get solverVelocityIterations(): number;
        public set solverVelocityIterations(value: number);
        
        public constructor();
        /**
         * Sets the mass based on the attached colliders assuming a constant density.
         */
        public SetDensity($density: number):void;
        /**
         * Moves the kinematic Rigidbody towards position.
         * @param position Provides the new position for the Rigidbody object.
         */
        public MovePosition($position: Vector3):void;
        /**
         * Rotates the rigidbody to rotation.
         * @param rot The new rotation for the Rigidbody.
         */
        public MoveRotation($rot: Quaternion):void;
        /**
         * Forces a rigidbody to sleep at least one frame.
         */
        public Sleep():void;
        /**
         * Is the rigidbody sleeping?
         */
        public IsSleeping():boolean;
        /**
         * Forces a rigidbody to wake up.
         */
        public WakeUp():void;
        /**
         * Reset the center of mass of the rigidbody.
         */
        public ResetCenterOfMass():void;
        /**
         * Reset the inertia tensor value and rotation.
         */
        public ResetInertiaTensor():void;
        /**
         * The velocity relative to the rigidbody at the point relativePoint.
         */
        public GetRelativePointVelocity($relativePoint: Vector3):Vector3;
        /**
         * The velocity of the rigidbody at the point worldPoint in global space.
         */
        public GetPointVelocity($worldPoint: Vector3):Vector3;
        /**
         * Adds a force to the Rigidbody.
         * @param force Force vector in world coordinates.
         * @param mode Type of force to apply.
         */
        public AddForce($force: Vector3, $mode: ForceMode):void;
        /**
         * Adds a force to the Rigidbody.
         * @param force Force vector in world coordinates.
         * @param mode Type of force to apply.
         */
        public AddForce($force: Vector3):void;
        /**
         * Adds a force to the Rigidbody.
         * @param x Size of force along the world x-axis.
         * @param y Size of force along the world y-axis.
         * @param z Size of force along the world z-axis.
         * @param mode Type of force to apply.
         */
        public AddForce($x: number, $y: number, $z: number, $mode: ForceMode):void;
        /**
         * Adds a force to the Rigidbody.
         * @param x Size of force along the world x-axis.
         * @param y Size of force along the world y-axis.
         * @param z Size of force along the world z-axis.
         * @param mode Type of force to apply.
         */
        public AddForce($x: number, $y: number, $z: number):void;
        /**
         * Adds a force to the rigidbody relative to its coordinate system.
         * @param force Force vector in local coordinates.
         */
        public AddRelativeForce($force: Vector3, $mode: ForceMode):void;
        /**
         * Adds a force to the rigidbody relative to its coordinate system.
         * @param force Force vector in local coordinates.
         */
        public AddRelativeForce($force: Vector3):void;
        /**
         * Adds a force to the rigidbody relative to its coordinate system.
         * @param x Size of force along the local x-axis.
         * @param y Size of force along the local y-axis.
         * @param z Size of force along the local z-axis.
         */
        public AddRelativeForce($x: number, $y: number, $z: number, $mode: ForceMode):void;
        /**
         * Adds a force to the rigidbody relative to its coordinate system.
         * @param x Size of force along the local x-axis.
         * @param y Size of force along the local y-axis.
         * @param z Size of force along the local z-axis.
         */
        public AddRelativeForce($x: number, $y: number, $z: number):void;
        /**
         * Adds a torque to the rigidbody.
         * @param torque Torque vector in world coordinates.
         */
        public AddTorque($torque: Vector3, $mode: ForceMode):void;
        /**
         * Adds a torque to the rigidbody.
         * @param torque Torque vector in world coordinates.
         */
        public AddTorque($torque: Vector3):void;
        /**
         * Adds a torque to the rigidbody.
         * @param x Size of torque along the world x-axis.
         * @param y Size of torque along the world y-axis.
         * @param z Size of torque along the world z-axis.
         */
        public AddTorque($x: number, $y: number, $z: number, $mode: ForceMode):void;
        /**
         * Adds a torque to the rigidbody.
         * @param x Size of torque along the world x-axis.
         * @param y Size of torque along the world y-axis.
         * @param z Size of torque along the world z-axis.
         */
        public AddTorque($x: number, $y: number, $z: number):void;
        /**
         * Adds a torque to the rigidbody relative to its coordinate system.
         * @param torque Torque vector in local coordinates.
         */
        public AddRelativeTorque($torque: Vector3, $mode: ForceMode):void;
        /**
         * Adds a torque to the rigidbody relative to its coordinate system.
         * @param torque Torque vector in local coordinates.
         */
        public AddRelativeTorque($torque: Vector3):void;
        /**
         * Adds a torque to the rigidbody relative to its coordinate system.
         * @param x Size of torque along the local x-axis.
         * @param y Size of torque along the local y-axis.
         * @param z Size of torque along the local z-axis.
         */
        public AddRelativeTorque($x: number, $y: number, $z: number, $mode: ForceMode):void;
        /**
         * Adds a torque to the rigidbody relative to its coordinate system.
         * @param x Size of torque along the local x-axis.
         * @param y Size of torque along the local y-axis.
         * @param z Size of torque along the local z-axis.
         */
        public AddRelativeTorque($x: number, $y: number, $z: number):void;
        /**
         * Applies force at position. As a result this will apply a torque and force on the object.
         * @param force Force vector in world coordinates.
         * @param position Position in world coordinates.
         */
        public AddForceAtPosition($force: Vector3, $position: Vector3, $mode: ForceMode):void;
        /**
         * Applies force at position. As a result this will apply a torque and force on the object.
         * @param force Force vector in world coordinates.
         * @param position Position in world coordinates.
         */
        public AddForceAtPosition($force: Vector3, $position: Vector3):void;
        /**
         * Applies a force to a rigidbody that simulates explosion effects.
         * @param explosionForce The force of the explosion (which may be modified by distance).
         * @param explosionPosition The centre of the sphere within which the explosion has its effect.
         * @param explosionRadius The radius of the sphere within which the explosion has its effect.
         * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
         * @param mode The method used to apply the force to its targets.
         */
        public AddExplosionForce($explosionForce: number, $explosionPosition: Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: ForceMode):void;
        /**
         * Applies a force to a rigidbody that simulates explosion effects.
         * @param explosionForce The force of the explosion (which may be modified by distance).
         * @param explosionPosition The centre of the sphere within which the explosion has its effect.
         * @param explosionRadius The radius of the sphere within which the explosion has its effect.
         * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
         * @param mode The method used to apply the force to its targets.
         */
        public AddExplosionForce($explosionForce: number, $explosionPosition: Vector3, $explosionRadius: number, $upwardsModifier: number):void;
        /**
         * Applies a force to a rigidbody that simulates explosion effects.
         * @param explosionForce The force of the explosion (which may be modified by distance).
         * @param explosionPosition The centre of the sphere within which the explosion has its effect.
         * @param explosionRadius The radius of the sphere within which the explosion has its effect.
         * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
         * @param mode The method used to apply the force to its targets.
         */
        public AddExplosionForce($explosionForce: number, $explosionPosition: Vector3, $explosionRadius: number):void;
        /**
         * The closest point to the bounding box of the attached colliders.
         */
        public ClosestPointOnBounds($position: Vector3):Vector3;
        /**
         * Tests if a rigidbody would collide with anything, if it was moved through the Scene.
         * @param direction The direction into which to sweep the rigidbody.
         * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit (See Also: RaycastHit).
         * @param maxDistance The length of the sweep.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns True when the rigidbody sweep intersects any collider, otherwise false.
         */
        public SweepTest($direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number, $queryTriggerInteraction: QueryTriggerInteraction):boolean;
        
        public SweepTest($direction: Vector3, $hitInfo: $Ref<RaycastHit>, $maxDistance: number):boolean;
        
        public SweepTest($direction: Vector3, $hitInfo: $Ref<RaycastHit>):boolean;
        /**
         * Like Rigidbody.SweepTest, but returns all hits.
         * @param direction The direction into which to sweep the rigidbody.
         * @param maxDistance The length of the sweep.
         * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
         * @returns An array of all colliders hit in the sweep.
         */
        public SweepTestAll($direction: Vector3, $maxDistance: number, $queryTriggerInteraction: QueryTriggerInteraction):RaycastHit[];
        
        public SweepTestAll($direction: Vector3, $maxDistance: number):RaycastHit[];
        
        public SweepTestAll($direction: Vector3):RaycastHit[];
        
                    
    }
    /**
     * A body that forms part of a Physics articulation.
     */
    class ArticulationBody extends Behaviour {
        /**
         * The type of joint connecting this body to its parent body.
         */
        public get jointType(): ArticulationJointType;
        public set jointType(value: ArticulationJointType);
        /**
         * Position of the anchor relative to this body.
         */
        public get anchorPosition(): Vector3;
        public set anchorPosition(value: Vector3);
        /**
         * Position of the anchor relative to this body's parent.
         */
        public get parentAnchorPosition(): Vector3;
        public set parentAnchorPosition(value: Vector3);
        /**
         * Position of the anchor relative to this body.
         */
        public get anchorRotation(): Quaternion;
        public set anchorRotation(value: Quaternion);
        /**
         * Position of the anchor relative to this body's parent.
         */
        public get parentAnchorRotation(): Quaternion;
        public set parentAnchorRotation(value: Quaternion);
        /**
         * Indicates whether this body is the root body of the articulation (Read Only).
         */
        public get isRoot(): boolean;
        /**
         * The type of lock along X axis of movement.
         */
        public get linearLockX(): ArticulationDofLock;
        public set linearLockX(value: ArticulationDofLock);
        /**
         * The type of lock along Y axis of movement.
         */
        public get linearLockY(): ArticulationDofLock;
        public set linearLockY(value: ArticulationDofLock);
        /**
         * The type of lock along Z axis of movement.
         */
        public get linearLockZ(): ArticulationDofLock;
        public set linearLockZ(value: ArticulationDofLock);
        /**
         * The magnitude of the conical swing angle relative to Y axis.
         */
        public get swingYLock(): ArticulationDofLock;
        public set swingYLock(value: ArticulationDofLock);
        /**
         * The magnitude of the conical swing angle relative to Z axis.
         */
        public get swingZLock(): ArticulationDofLock;
        public set swingZLock(value: ArticulationDofLock);
        /**
         * The type of lock for twist movement.
         */
        public get twistLock(): ArticulationDofLock;
        public set twistLock(value: ArticulationDofLock);
        /**
         * The properties of drive along or around X.
         */
        public get xDrive(): ArticulationDrive;
        public set xDrive(value: ArticulationDrive);
        /**
         * The properties of drive along or around Y.
         */
        public get yDrive(): ArticulationDrive;
        public set yDrive(value: ArticulationDrive);
        /**
         * The properties of drive along or around Z.
         */
        public get zDrive(): ArticulationDrive;
        public set zDrive(value: ArticulationDrive);
        /**
         * Allows you to specify that this body is not movable.
         */
        public get immovable(): boolean;
        public set immovable(value: boolean);
        /**
         * Controls whether gravity affects this articulation body.
         */
        public get useGravity(): boolean;
        public set useGravity(value: boolean);
        /**
         * Damping factor that affects how this body resists linear motion.
         */
        public get linearDamping(): number;
        public set linearDamping(value: number);
        /**
         * Damping factor that affects how this body resists rotations.
         */
        public get angularDamping(): number;
        public set angularDamping(value: number);
        /**
         * Allows you to specify the amount of friction that is applied as a result of connected bodies moving relative to this body.
         */
        public get jointFriction(): number;
        public set jointFriction(value: number);
        /**
         * Linear velocity of the body defined in world space.
         */
        public get velocity(): Vector3;
        public set velocity(value: Vector3);
        /**
         * The angular velocity of the body defined in world space.
         */
        public get angularVelocity(): Vector3;
        public set angularVelocity(value: Vector3);
        /**
         * The mass of this articulation body.
         */
        public get mass(): number;
        public set mass(value: number);
        /**
         * The center of mass of the body defined in local space.
         */
        public get centerOfMass(): Vector3;
        public set centerOfMass(value: Vector3);
        /**
         * The center of mass of the body defined in world space (Read Only).
         */
        public get worldCenterOfMass(): Vector3;
        /**
         * The inertia tensor of this body.
         */
        public get inertiaTensor(): Vector3;
        public set inertiaTensor(value: Vector3);
        /**
         * The rotation of the inertia tensor.
         */
        public get inertiaTensorRotation(): Quaternion;
        public set inertiaTensorRotation(value: Quaternion);
        /**
         * The mass-normalized energy threshold, below which objects start going to sleep.
         */
        public get sleepThreshold(): number;
        public set sleepThreshold(value: number);
        /**
         * The solverIterations determines how accurately articulation body joints and collision contacts are resolved.
         */
        public get solverIterations(): number;
        public set solverIterations(value: number);
        /**
         * The solverVelocityIterations affects how accurately articulation body joints and collision contacts are resolved during bounce.
         */
        public get solverVelocityIterations(): number;
        public set solverVelocityIterations(value: number);
        /**
         * The maximimum angular velocity of the articulation body measured in radians per second.
         */
        public get maxAngularVelocity(): number;
        public set maxAngularVelocity(value: number);
        /**
         * The maximum linear velocity of the articulation body measured in meters per second.
         */
        public get maxLinearVelocity(): number;
        public set maxLinearVelocity(value: number);
        /**
         * The maximum joint velocity of the articulation body joint in reduced coordinates.
         */
        public get maxJointVelocity(): number;
        public set maxJointVelocity(value: number);
        /**
         * The maximum velocity of an articulation body when moving out of penetrating state.
         */
        public get maxDepenetrationVelocity(): number;
        public set maxDepenetrationVelocity(value: number);
        /**
         * The joint position in reduced coordinates.
         */
        public get jointPosition(): ArticulationReducedSpace;
        public set jointPosition(value: ArticulationReducedSpace);
        /**
         * The joint velocity in reduced coordinates.
         */
        public get jointVelocity(): ArticulationReducedSpace;
        public set jointVelocity(value: ArticulationReducedSpace);
        /**
         * The joint acceleration in reduced coordinates.
         */
        public get jointAcceleration(): ArticulationReducedSpace;
        public set jointAcceleration(value: ArticulationReducedSpace);
        /**
         * The joint force in reduced coordinates.
         */
        public get jointForce(): ArticulationReducedSpace;
        public set jointForce(value: ArticulationReducedSpace);
        /**
         * The amount of degrees of freedom of a body.
         */
        public get dofCount(): number;
        /**
         * The index of the body in the hierarchy of articulation bodies.
         */
        public get index(): number;
        /**
         * The ArticulationBody's collision detection mode.
         */
        public get collisionDetectionMode(): CollisionDetectionMode;
        public set collisionDetectionMode(value: CollisionDetectionMode);
        
        public constructor();
        /**
         * Add force to the articulation body.
         * @param force The force vector to apply.
         */
        public AddForce($force: Vector3):void;
        /**
         * Applies a force to the articulation body, relative to its local coordinate system.
         * @param force Force vector in local coordinates.
         */
        public AddRelativeForce($force: Vector3):void;
        /**
         * Add torque to the articulation body.
         * @param torque The torque to apply.
         */
        public AddTorque($torque: Vector3):void;
        /**
         * Applies a torque to the articulation body, relative to its local coordinate system.
         * @param torque Torque vector in local coordinates.
         */
        public AddRelativeTorque($torque: Vector3):void;
        /**
         * Applies a force at a specific position, resulting in applying a torque and force on the object.
         * @param force Force vector in world coordinates.
         * @param position Position in world coordinates.
         */
        public AddForceAtPosition($force: Vector3, $position: Vector3):void;
        /**
         * Resets the center of mass of the articulation body.
         */
        public ResetCenterOfMass():void;
        /**
         * Resets the inertia tensor value and rotation.
         */
        public ResetInertiaTensor():void;
        /**
         * Forces an articulation body to sleep.
         */
        public Sleep():void;
        /**
         * Indicates whether the articulation body is sleeping.
         */
        public IsSleeping():boolean;
        /**
         * Forces an articulation body to wake up.
         */
        public WakeUp():void;
        /**
         * Teleport the root body of the articulation to a new pose.
         * @param position The new position of the root articulation body.
         * @param rotation The new orientation of the root articulation body.
         */
        public TeleportRoot($position: Vector3, $rotation: Quaternion):void;
        /**
         * Return the point on the articulation body that is closest to a given one.
         * @param point The point of interest.
         * @returns The point on the surfaces of all Colliders attached to this articulation body that is closest to the given one.
         */
        public GetClosestPoint($point: Vector3):Vector3;
        /**
         * The velocity relative to the articulation body at the point relativePoint.
         */
        public GetRelativePointVelocity($relativePoint: Vector3):Vector3;
        /**
         * Gets the velocity of the articulation body at the specified worldPoint in global space.
         */
        public GetPointVelocity($worldPoint: Vector3):Vector3;
        /**
         * Calculates and writes dense Jacobian matrix of the articulation body hierarchy to the supplied struct.
         * @param jacobian Supplied struct to read back and store Jacobian matrix values. 
         * @returns Number of elements in Jacobian matrix.
         */
        public GetDenseJacobian($jacobian: $Ref<ArticulationJacobian>):number;
        
        public GetJointPositions($positions: System_Collections_Generic.List$1<number>):number;
        
        public SetJointPositions($positions: System_Collections_Generic.List$1<number>):void;
        
        public GetJointVelocities($velocities: System_Collections_Generic.List$1<number>):number;
        
        public SetJointVelocities($velocities: System_Collections_Generic.List$1<number>):void;
        
        public GetJointAccelerations($accelerations: System_Collections_Generic.List$1<number>):number;
        
        public SetJointAccelerations($accelerations: System_Collections_Generic.List$1<number>):void;
        
        public GetJointForces($forces: System_Collections_Generic.List$1<number>):number;
        
        public SetJointForces($forces: System_Collections_Generic.List$1<number>):void;
        
        public GetDriveTargets($targets: System_Collections_Generic.List$1<number>):number;
        
        public SetDriveTargets($targets: System_Collections_Generic.List$1<number>):void;
        
        public GetDriveTargetVelocities($targetVelocities: System_Collections_Generic.List$1<number>):number;
        
        public SetDriveTargetVelocities($targetVelocities: System_Collections_Generic.List$1<number>):void;
        
        public GetDofStartIndices($dofStartIndices: System_Collections_Generic.List$1<number>):number;
        
                    
    }
    /**
     * Behaviours are Components that can be enabled or disabled.
     */
    interface Behaviour extends Component {
        
                    
    }
    /**
     * Physics material describes how to handle colliding objects (friction, bounciness).
     */
    class PhysicMaterial extends Object {
        /**
         * How bouncy is the surface? A value of 0 will not bounce. A value of 1 will bounce without any loss of energy.
         */
        public get bounciness(): number;
        public set bounciness(value: number);
        /**
         * The friction used when already moving.  This value is usually between 0 and 1.
         */
        public get dynamicFriction(): number;
        public set dynamicFriction(value: number);
        /**
         * The friction coefficient used when an object is lying on a surface.
         */
        public get staticFriction(): number;
        public set staticFriction(value: number);
        /**
         * Determines how the friction is combined.
         */
        public get frictionCombine(): PhysicMaterialCombine;
        public set frictionCombine(value: PhysicMaterialCombine);
        /**
         * Determines how the bounciness is combined.
         */
        public get bounceCombine(): PhysicMaterialCombine;
        public set bounceCombine(value: PhysicMaterialCombine);
        /**
         * Creates a new material.
         */
        public constructor();
        /**
         * Creates a new material named name.
         */
        public constructor($name: string);
        
                    
    }
    /**
     * Use these flags to constrain motion of Rigidbodies.
     */
    enum RigidbodyConstraints { None = 0, FreezePositionX = 2, FreezePositionY = 4, FreezePositionZ = 8, FreezeRotationX = 16, FreezeRotationY = 32, FreezeRotationZ = 64, FreezePosition = 14, FreezeRotation = 112, FreezeAll = 126 }
    /**
     * The collision detection mode constants used for Rigidbody.collisionDetectionMode.
     */
    enum CollisionDetectionMode { Discrete = 0, Continuous = 1, ContinuousDynamic = 2, ContinuousSpeculative = 3 }
    /**
     * Rigidbody interpolation mode.
     */
    enum RigidbodyInterpolation { None = 0, Interpolate = 1, Extrapolate = 2 }
    /**
     * Use ForceMode to specify how to apply a force using Rigidbody.AddForce.
     */
    enum ForceMode { Force = 0, Acceleration = 5, Impulse = 1, VelocityChange = 2 }
    /**
     * Determines how to snap physics joints back to its constrained position when it drifts off too much.
     */
    enum JointProjectionMode { None = 0, PositionAndRotation = 1, PositionOnly = 2 }
    /**
     * Cooking options that are available with MeshCollider.
     */
    enum MeshColliderCookingOptions { None = 0, InflateConvexMesh = 1, CookForFasterSimulation = 2, EnableMeshCleaning = 4, WeldColocatedVertices = 8, UseFastMidphase = 16 }
    /**
     * WheelFrictionCurve is used by the WheelCollider to describe friction properties of the wheel tire.
     */
    class WheelFrictionCurve extends System.ValueType {
        /**
         * Extremum point slip (default 1).
         */
        public get extremumSlip(): number;
        public set extremumSlip(value: number);
        /**
         * Force at the extremum slip (default 20000).
         */
        public get extremumValue(): number;
        public set extremumValue(value: number);
        /**
         * Asymptote point slip (default 2).
         */
        public get asymptoteSlip(): number;
        public set asymptoteSlip(value: number);
        /**
         * Force at the asymptote slip (default 10000).
         */
        public get asymptoteValue(): number;
        public set asymptoteValue(value: number);
        /**
         * Multiplier for the extremumValue and asymptoteValue values (default 1).
         */
        public get stiffness(): number;
        public set stiffness(value: number);
        
        public get_Clone(): WheelFrictionCurve;            
    }
    /**
     * The limits defined by the CharacterJoint.
     */
    class SoftJointLimit extends System.ValueType {
        /**
         * The limit position/angle of the joint (in degrees).
         */
        public get limit(): number;
        public set limit(value: number);
        /**
         * When the joint hits the limit, it can be made to bounce off it.
         */
        public get bounciness(): number;
        public set bounciness(value: number);
        /**
         * Determines how far ahead in space the solver can "see" the joint limit.
         */
        public get contactDistance(): number;
        public set contactDistance(value: number);
        
        public get_Clone(): SoftJointLimit;            
    }
    /**
     * The configuration of the spring attached to the joint's limits: linear and angular. Used by CharacterJoint and ConfigurableJoint.
     */
    class SoftJointLimitSpring extends System.ValueType {
        /**
         * The stiffness of the spring limit. When stiffness is zero the limit is hard, otherwise soft.
         */
        public get spring(): number;
        public set spring(value: number);
        /**
         * The damping of the spring limit. In effect when the stiffness of the sprint limit is not zero.
         */
        public get damper(): number;
        public set damper(value: number);
        
        public get_Clone(): SoftJointLimitSpring;            
    }
    /**
     * How the joint's movement will behave along its local X axis.
     */
    class JointDrive extends System.ValueType {
        /**
         * Strength of a rubber-band pull toward the defined direction. Only used if mode includes Position.
         */
        public get positionSpring(): number;
        public set positionSpring(value: number);
        /**
         * Resistance strength against the Position Spring. Only used if mode includes Position.
         */
        public get positionDamper(): number;
        public set positionDamper(value: number);
        /**
         * Amount of force applied to push the object toward the defined direction.
         */
        public get maximumForce(): number;
        public set maximumForce(value: number);
        
        public get_Clone(): JointDrive;            
    }
    /**
     * The ConfigurableJoint attempts to attain position / velocity targets based on this flag.
     */
    enum JointDriveMode { None = 0, Position = 1, Velocity = 2, PositionAndVelocity = 3 }
    /**
     * The JointMotor is used to motorize a joint.
     */
    class JointMotor extends System.ValueType {
        /**
         * The motor will apply a force up to force to achieve targetVelocity.
         */
        public get targetVelocity(): number;
        public set targetVelocity(value: number);
        /**
         * The motor will apply a force.
         */
        public get force(): number;
        public set force(value: number);
        /**
         * If freeSpin is enabled the motor will only accelerate but never slow down.
         */
        public get freeSpin(): boolean;
        public set freeSpin(value: boolean);
        
        public get_Clone(): JointMotor;            
    }
    /**
     * JointSpring is used add a spring force to HingeJoint and PhysicMaterial.
     */
    class JointSpring extends System.ValueType {
        /**
         * The spring forces used to reach the target position.
         */
        public spring: number;
        /**
         * The damper force uses to dampen the spring.
         */
        public damper: number;
        /**
         * The target position the joint attempts to reach.
         */
        public targetPosition: number;
        
        public get_Clone(): JointSpring;            
    }
    /**
     * JointLimits is used by the HingeJoint to limit the joints angle.
     */
    class JointLimits extends System.ValueType {
        /**
         * The lower angular limit (in degrees) of the joint.
         */
        public get min(): number;
        public set min(value: number);
        /**
         * The upper angular limit (in degrees) of the joint.
         */
        public get max(): number;
        public set max(value: number);
        /**
         * Determines the size of the bounce when the joint hits it's limit. Also known as restitution.
         */
        public get bounciness(): number;
        public set bounciness(value: number);
        /**
         * The minimum impact velocity which will cause the joint to bounce.
         */
        public get bounceMinVelocity(): number;
        public set bounceMinVelocity(value: number);
        /**
         * Distance inside the limit value at which the limit will be considered to be active by the solver.
         */
        public get contactDistance(): number;
        public set contactDistance(value: number);
        
        public get_Clone(): JointLimits;            
    }
    /**
     * ControllerColliderHit is used by CharacterController.OnControllerColliderHit to give detailed information about the collision and how to deal with it.
     */
    class ControllerColliderHit extends System.Object {
        /**
         * The controller that hit the collider.
         */
        public get controller(): CharacterController;
        /**
         * The collider that was hit by the controller.
         */
        public get collider(): Collider;
        /**
         * The rigidbody that was hit by the controller.
         */
        public get rigidbody(): Rigidbody;
        /**
         * The game object that was hit by the controller.
         */
        public get gameObject(): GameObject;
        /**
         * The transform that was hit by the controller.
         */
        public get transform(): Transform;
        /**
         * The impact point in world space.
         */
        public get point(): Vector3;
        /**
         * The normal of the surface we collided with in world space.
         */
        public get normal(): Vector3;
        /**
         * The direction the CharacterController was moving in when the collision occured.
         */
        public get moveDirection(): Vector3;
        /**
         * How far the character has travelled until it hit the collider.
         */
        public get moveLength(): number;
        
        public constructor();
        
                    
    }
    /**
     * A CharacterController allows you to easily do movement constrained by collisions without having to deal with a rigidbody.
     */
    class CharacterController extends Collider {
        /**
         * The current relative velocity of the Character (see notes).
         */
        public get velocity(): Vector3;
        /**
         * Was the CharacterController touching the ground during the last move?
         */
        public get isGrounded(): boolean;
        /**
         * What part of the capsule collided with the environment during the last CharacterController.Move call.
         */
        public get collisionFlags(): CollisionFlags;
        /**
         * The radius of the character's capsule.
         */
        public get radius(): number;
        public set radius(value: number);
        /**
         * The height of the character's capsule.
         */
        public get height(): number;
        public set height(value: number);
        /**
         * The center of the character's capsule relative to the transform's position.
         */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
         * The character controllers slope limit in degrees.
         */
        public get slopeLimit(): number;
        public set slopeLimit(value: number);
        /**
         * The character controllers step offset in meters.
         */
        public get stepOffset(): number;
        public set stepOffset(value: number);
        /**
         * The character's collision skin width.
         */
        public get skinWidth(): number;
        public set skinWidth(value: number);
        /**
         * Gets or sets the minimum move distance of the character controller.
         */
        public get minMoveDistance(): number;
        public set minMoveDistance(value: number);
        /**
         * Determines whether other rigidbodies or character controllers collide with this character controller (by default this is always enabled).
         */
        public get detectCollisions(): boolean;
        public set detectCollisions(value: boolean);
        /**
         * Enables or disables overlap recovery.
         * Enables or disables overlap recovery. Used to depenetrate character controllers from static objects when an overlap is detected.
         */
        public get enableOverlapRecovery(): boolean;
        public set enableOverlapRecovery(value: boolean);
        
        public constructor();
        /**
         * Moves the character with speed.
         */
        public SimpleMove($speed: Vector3):boolean;
        /**
         * Supplies the movement of a GameObject with an attached CharacterController component.
         */
        public Move($motion: Vector3):CollisionFlags;
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Describes how physics materials of the colliding objects are combined.
     * The friction force as well as the residual bounce impulse are applied symmertrically to both of the colliders in contact, so each pair of overlapping colliders must have a single set of friction and bouciness settings. However, one can set arbitrary physics materials to any colliders. For that particular reason, there is a mechanism that allows the combination of two different sets of properties that correspond to each of the colliders in contact into one set to be used in the solver.
     * Specifying Average, Maximum, Minimum or Multiply as the physics material combine mode, you directly set the function that is used to combine the settings corresponding to the two overlapping colliders into one set of settings that can be used to apply the material effect.
     * Note that there is a special case when the two overlapping colliders have physics materials with different combine modes set. In this particular case, the function that has the highest priority is used. The priority order is as follows: Average < Minimum < Multiply < Maximum. For example, if one material has Average set but the other one has Maximum, then the combine function to be used is Maximum, since it has higher priority.
     */
    enum PhysicMaterialCombine { Average = 0, Minimum = 2, Multiply = 1, Maximum = 3 }
    /**
     * Describes a collision.
     */
    class Collision extends System.Object {
        /**
         * The relative linear velocity of the two colliding objects (Read Only).
         */
        public get relativeVelocity(): Vector3;
        /**
         * The Rigidbody we hit (Read Only). This is null if the object we hit is a collider with no rigidbody attached.
         */
        public get rigidbody(): Rigidbody;
        /**
         * The Collider we hit (Read Only).
         */
        public get collider(): Collider;
        /**
         * The Transform of the object we hit (Read Only).
         */
        public get transform(): Transform;
        /**
         * The GameObject whose collider you are colliding with. (Read Only).
         */
        public get gameObject(): GameObject;
        /**
         * Gets the number of contacts for this collision.
         */
        public get contactCount(): number;
        /**
         * The contact points generated by the physics engine. You should avoid using this as it produces memory garbage. Use GetContact or GetContacts instead.
         */
        public get contacts(): ContactPoint[];
        /**
         * The total impulse applied to this contact pair to resolve the collision.
         */
        public get impulse(): Vector3;
        
        public constructor();
        /**
         * Gets the contact point at the specified index.
         * @param index The index of the contact to retrieve.
         * @returns The contact at the specified index.
         */
        public GetContact($index: number):ContactPoint;
        /**
         * Retrieves all contact points for this collision.
         * @param contacts An array of ContactPoint used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public GetContacts($contacts: ContactPoint[]):number;
        
        public GetContacts($contacts: System_Collections_Generic.List$1<ContactPoint>):number;
        
                    
    }
    /**
     * Describes a contact point where the collision occurs.
     */
    class ContactPoint extends System.ValueType {
        /**
         * The point of contact.
         */
        public get point(): Vector3;
        /**
         * Normal of the contact point.
         */
        public get normal(): Vector3;
        /**
         * The first collider in contact at the point.
         */
        public get thisCollider(): Collider;
        /**
         * The other collider in contact at the point.
         */
        public get otherCollider(): Collider;
        /**
         * The distance between the colliders at the contact point.
         */
        public get separation(): number;
        
        public get_Clone(): ContactPoint;            
    }
    /**
     * CollisionFlags is a bitmask returned by CharacterController.Move.
     */
    enum CollisionFlags { None = 0, Sides = 1, Above = 2, Below = 4, CollidedSides = 1, CollidedAbove = 2, CollidedBelow = 4 }
    /**
     * Constrains movement for a ConfigurableJoint along the 6 axes.
     */
    enum ConfigurableJointMotion { Locked = 0, Limited = 1, Free = 2 }
    /**
     * Control ConfigurableJoint's rotation with either X & YZ or Slerp Drive.
     */
    enum RotationDriveMode { XYAndZ = 0, Slerp = 1 }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * A mesh collider allows you to do between meshes and primitives.
     */
    class MeshCollider extends Collider {
        /**
         * The mesh object used for collision detection.
         */
        public get sharedMesh(): Mesh;
        public set sharedMesh(value: Mesh);
        /**
         * Use a convex collider from the mesh.
         */
        public get convex(): boolean;
        public set convex(value: boolean);
        /**
         * Options used to enable or disable certain features in mesh cooking.
         */
        public get cookingOptions(): MeshColliderCookingOptions;
        public set cookingOptions(value: MeshColliderCookingOptions);
        
        public constructor();
        
                    
    }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * A capsule-shaped primitive collider.
     */
    class CapsuleCollider extends Collider {
        /**
         * The center of the capsule, measured in the object's local space.
         */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
         * The radius of the sphere, measured in the object's local space.
         */
        public get radius(): number;
        public set radius(value: number);
        /**
         * The height of the capsule measured in the object's local space.
         */
        public get height(): number;
        public set height(value: number);
        /**
         * The direction of the capsule.
         */
        public get direction(): number;
        public set direction(value: number);
        
        public constructor();
        
                    
    }
    /**
     * A box-shaped primitive collider.
     */
    class BoxCollider extends Collider {
        /**
         * The center of the box, measured in the object's local space.
         */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
         * The size of the box, measured in the object's local space.
         */
        public get size(): Vector3;
        public set size(value: Vector3);
        
        public constructor();
        
                    
    }
    /**
     * A sphere-shaped primitive collider.
     */
    class SphereCollider extends Collider {
        /**
         * The center of the sphere in the object's local space.
         */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
         * The radius of the sphere measured in the object's local space.
         */
        public get radius(): number;
        public set radius(value: number);
        
        public constructor();
        
                    
    }
    /**
     * A force applied constantly.
     */
    class ConstantForce extends Behaviour {
        /**
         * The force applied to the rigidbody every frame.
         */
        public get force(): Vector3;
        public set force(value: Vector3);
        /**
         * The force - relative to the rigid bodies coordinate system - applied every frame.
         */
        public get relativeForce(): Vector3;
        public set relativeForce(value: Vector3);
        /**
         * The torque applied to the rigidbody every frame.
         */
        public get torque(): Vector3;
        public set torque(value: Vector3);
        /**
         * The torque - relative to the rigid bodies coordinate system - applied every frame.
         */
        public get relativeTorque(): Vector3;
        public set relativeTorque(value: Vector3);
        
        public constructor();
        
                    
    }
    /**
     * Joint is the base class for all joints.
     */
    class Joint extends Component {
        /**
         * A reference to another rigidbody this joint connects to.
         */
        public get connectedBody(): Rigidbody;
        public set connectedBody(value: Rigidbody);
        /**
         * A reference to an articulation body this joint connects to.
         */
        public get connectedArticulationBody(): ArticulationBody;
        public set connectedArticulationBody(value: ArticulationBody);
        /**
         * The Direction of the axis around which the body is constrained.
         */
        public get axis(): Vector3;
        public set axis(value: Vector3);
        /**
         * The Position of the anchor around which the joints motion is constrained.
         */
        public get anchor(): Vector3;
        public set anchor(value: Vector3);
        /**
         * Position of the anchor relative to the connected Rigidbody.
         */
        public get connectedAnchor(): Vector3;
        public set connectedAnchor(value: Vector3);
        /**
         * Should the connectedAnchor be calculated automatically?
         */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        /**
         * The force that needs to be applied for this joint to break.
         */
        public get breakForce(): number;
        public set breakForce(value: number);
        /**
         * The torque that needs to be applied for this joint to break. To be able to break, a joint must be _Locked_ or _Limited_ on the axis of rotation where the torque is being applied. This means that some joints cannot break, such as an unconstrained Configurable Joint.
         */
        public get breakTorque(): number;
        public set breakTorque(value: number);
        /**
         * Enable collision between bodies connected with the joint.
         */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
         * Toggle preprocessing for this joint.
         */
        public get enablePreprocessing(): boolean;
        public set enablePreprocessing(value: boolean);
        /**
         * The scale to apply to the inverse mass and inertia tensor of the body prior to solving the constraints.
         */
        public get massScale(): number;
        public set massScale(value: number);
        /**
         * The scale to apply to the inverse mass and inertia tensor of the connected body prior to solving the constraints.
         */
        public get connectedMassScale(): number;
        public set connectedMassScale(value: number);
        /**
         * The force applied by the solver to satisfy all constraints.
         */
        public get currentForce(): Vector3;
        /**
         * The torque applied by the solver to satisfy all constraints.
         */
        public get currentTorque(): Vector3;
        
        public constructor();
        
                    
    }
    /**
     * The HingeJoint groups together 2 rigid bodies, constraining them to move like connected by a hinge.
     */
    class HingeJoint extends Joint {
        /**
         * The motor will apply a force up to a maximum force to achieve the target velocity in degrees per second.
         */
        public get motor(): JointMotor;
        public set motor(value: JointMotor);
        /**
         * Limit of angular rotation (in degrees) on the hinge joint.
         */
        public get limits(): JointLimits;
        public set limits(value: JointLimits);
        /**
         * The spring attempts to reach a target angle by adding spring and damping forces.
         */
        public get spring(): JointSpring;
        public set spring(value: JointSpring);
        /**
         * Enables the joint's motor. Disabled by default.
         */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
         * Enables the joint's limits. Disabled by default.
         */
        public get useLimits(): boolean;
        public set useLimits(value: boolean);
        /**
         * Enables the joint's spring. Disabled by default.
         */
        public get useSpring(): boolean;
        public set useSpring(value: boolean);
        /**
         * The angular velocity of the joint in degrees per second. (Read Only)
         */
        public get velocity(): number;
        /**
         * The current angle in degrees of the joint relative to its rest position. (Read Only)
         */
        public get angle(): number;
        
        public constructor();
        
                    
    }
    /**
     * The spring joint ties together 2 rigid bodies, spring forces will be automatically applied to keep the object at the given distance.
     */
    class SpringJoint extends Joint {
        /**
         * The spring force used to keep the two objects together.
         */
        public get spring(): number;
        public set spring(value: number);
        /**
         * The damper force used to dampen the spring force.
         */
        public get damper(): number;
        public set damper(value: number);
        /**
         * The minimum distance between the bodies relative to their initial distance.
         */
        public get minDistance(): number;
        public set minDistance(value: number);
        /**
         * The maximum distance between the bodies relative to their initial distance.
         */
        public get maxDistance(): number;
        public set maxDistance(value: number);
        /**
         * The maximum allowed error between the current spring length and the length defined by minDistance and maxDistance.
         */
        public get tolerance(): number;
        public set tolerance(value: number);
        
        public constructor();
        
                    
    }
    /**
     * The Fixed joint groups together 2 rigidbodies, making them stick together in their bound position.
     */
    class FixedJoint extends Joint {
        
        public constructor();
        
                    
    }
    /**
     * Character Joints are mainly used for Ragdoll effects.
     */
    class CharacterJoint extends Joint {
        /**
         * The secondary axis around which the joint can rotate.
         */
        public get swingAxis(): Vector3;
        public set swingAxis(value: Vector3);
        /**
         * The configuration of the spring attached to the twist limits of the joint.
         */
        public get twistLimitSpring(): SoftJointLimitSpring;
        public set twistLimitSpring(value: SoftJointLimitSpring);
        /**
         * The configuration of the spring attached to the swing limits of the joint.
         */
        public get swingLimitSpring(): SoftJointLimitSpring;
        public set swingLimitSpring(value: SoftJointLimitSpring);
        /**
         * The lower limit around the primary axis of the character joint.
         */
        public get lowTwistLimit(): SoftJointLimit;
        public set lowTwistLimit(value: SoftJointLimit);
        /**
         * The upper limit around the primary axis of the character joint.
         */
        public get highTwistLimit(): SoftJointLimit;
        public set highTwistLimit(value: SoftJointLimit);
        /**
         * The angular limit of rotation (in degrees) around the primary axis of the character joint.
         */
        public get swing1Limit(): SoftJointLimit;
        public set swing1Limit(value: SoftJointLimit);
        /**
         * The angular limit of rotation (in degrees) around the primary axis of the character joint.
         */
        public get swing2Limit(): SoftJointLimit;
        public set swing2Limit(value: SoftJointLimit);
        /**
         * Brings violated constraints back into alignment even when the solver fails.
         */
        public get enableProjection(): boolean;
        public set enableProjection(value: boolean);
        /**
         * Set the linear tolerance threshold for projection.
         */
        public get projectionDistance(): number;
        public set projectionDistance(value: number);
        /**
         * Set the angular tolerance threshold (in degrees) for projection.
         */
        public get projectionAngle(): number;
        public set projectionAngle(value: number);
        
        public constructor();
        
                    
    }
    /**
     * The configurable joint is an extremely flexible joint giving you complete control over rotation and linear motion.
     */
    class ConfigurableJoint extends Joint {
        /**
         * The joint's secondary axis.
         */
        public get secondaryAxis(): Vector3;
        public set secondaryAxis(value: Vector3);
        /**
         * Allow movement along the X axis to be Free, completely Locked, or Limited according to Linear Limit.
         */
        public get xMotion(): ConfigurableJointMotion;
        public set xMotion(value: ConfigurableJointMotion);
        /**
         * Allow movement along the Y axis to be Free, completely Locked, or Limited according to Linear Limit.
         */
        public get yMotion(): ConfigurableJointMotion;
        public set yMotion(value: ConfigurableJointMotion);
        /**
         * Allow movement along the Z axis to be Free, completely Locked, or Limited according to Linear Limit.
         */
        public get zMotion(): ConfigurableJointMotion;
        public set zMotion(value: ConfigurableJointMotion);
        /**
         * Allow rotation around the X axis to be Free, completely Locked, or Limited according to Low and High Angular XLimit.
         */
        public get angularXMotion(): ConfigurableJointMotion;
        public set angularXMotion(value: ConfigurableJointMotion);
        /**
         * Allow rotation around the Y axis to be Free, completely Locked, or Limited according to Angular YLimit.
         */
        public get angularYMotion(): ConfigurableJointMotion;
        public set angularYMotion(value: ConfigurableJointMotion);
        /**
         * Allow rotation around the Z axis to be Free, completely Locked, or Limited according to Angular ZLimit.
         */
        public get angularZMotion(): ConfigurableJointMotion;
        public set angularZMotion(value: ConfigurableJointMotion);
        /**
         * The configuration of the spring attached to the linear limit of the joint.
         */
        public get linearLimitSpring(): SoftJointLimitSpring;
        public set linearLimitSpring(value: SoftJointLimitSpring);
        /**
         * The configuration of the spring attached to the angular X limit of the joint.
         */
        public get angularXLimitSpring(): SoftJointLimitSpring;
        public set angularXLimitSpring(value: SoftJointLimitSpring);
        /**
         * The configuration of the spring attached to the angular Y and angular Z limits of the joint.
         */
        public get angularYZLimitSpring(): SoftJointLimitSpring;
        public set angularYZLimitSpring(value: SoftJointLimitSpring);
        /**
         * Boundary defining movement restriction, based on distance from the joint's origin.
         */
        public get linearLimit(): SoftJointLimit;
        public set linearLimit(value: SoftJointLimit);
        /**
         * Boundary defining lower rotation restriction, based on delta from original rotation.
         */
        public get lowAngularXLimit(): SoftJointLimit;
        public set lowAngularXLimit(value: SoftJointLimit);
        /**
         * Boundary defining upper rotation restriction, based on delta from original rotation.
         */
        public get highAngularXLimit(): SoftJointLimit;
        public set highAngularXLimit(value: SoftJointLimit);
        /**
         * Boundary defining rotation restriction, based on delta from original rotation.
         */
        public get angularYLimit(): SoftJointLimit;
        public set angularYLimit(value: SoftJointLimit);
        /**
         * Boundary defining rotation restriction, based on delta from original rotation.
         */
        public get angularZLimit(): SoftJointLimit;
        public set angularZLimit(value: SoftJointLimit);
        /**
         * The desired position that the joint should move into.
         */
        public get targetPosition(): Vector3;
        public set targetPosition(value: Vector3);
        /**
         * The desired velocity that the joint should move along.
         */
        public get targetVelocity(): Vector3;
        public set targetVelocity(value: Vector3);
        /**
         * Definition of how the joint's movement will behave along its local X axis.
         */
        public get xDrive(): JointDrive;
        public set xDrive(value: JointDrive);
        /**
         * Definition of how the joint's movement will behave along its local Y axis.
         */
        public get yDrive(): JointDrive;
        public set yDrive(value: JointDrive);
        /**
         * Definition of how the joint's movement will behave along its local Z axis.
         */
        public get zDrive(): JointDrive;
        public set zDrive(value: JointDrive);
        /**
         * This is a Quaternion. It defines the desired rotation that the joint should rotate into.
         */
        public get targetRotation(): Quaternion;
        public set targetRotation(value: Quaternion);
        /**
         * This is a Vector3. It defines the desired angular velocity that the joint should rotate into.
         */
        public get targetAngularVelocity(): Vector3;
        public set targetAngularVelocity(value: Vector3);
        /**
         * Control the object's rotation with either X & YZ or Slerp Drive by itself.
         */
        public get rotationDriveMode(): RotationDriveMode;
        public set rotationDriveMode(value: RotationDriveMode);
        /**
         * Definition of how the joint's rotation will behave around its local X axis. Only used if Rotation Drive Mode is Swing & Twist.
         */
        public get angularXDrive(): JointDrive;
        public set angularXDrive(value: JointDrive);
        /**
         * Definition of how the joint's rotation will behave around its local Y and Z axes. Only used if Rotation Drive Mode is Swing & Twist.
         */
        public get angularYZDrive(): JointDrive;
        public set angularYZDrive(value: JointDrive);
        /**
         * Definition of how the joint's rotation will behave around all local axes. Only used if Rotation Drive Mode is Slerp Only.
         */
        public get slerpDrive(): JointDrive;
        public set slerpDrive(value: JointDrive);
        /**
         * Brings violated constraints back into alignment even when the solver fails. Projection is not a physical process and does not preserve momentum or respect collision geometry. It is best avoided if practical, but can be useful in improving simulation quality where joint separation results in unacceptable artifacts.
         */
        public get projectionMode(): JointProjectionMode;
        public set projectionMode(value: JointProjectionMode);
        /**
         * Set the linear tolerance threshold for projection.
         * If the joint separates by more than this distance along its locked degrees of freedom, the solver
         * will move the bodies to close the distance.
         * Setting a very small tolerance may result in simulation jitter or other artifacts.
         * Sometimes it is not possible to project (for example when the joints form a cycle).
         */
        public get projectionDistance(): number;
        public set projectionDistance(value: number);
        /**
         * Set the angular tolerance threshold (in degrees) for projection.
         * If the joint deviates by more than this angle around its locked angular degrees of freedom,
         * the solver will move the bodies to close the angle.
         * Setting a very small tolerance may result in simulation jitter or other artifacts.
         * Sometimes it is not possible to project (for example when the joints form a cycle).
         */
        public get projectionAngle(): number;
        public set projectionAngle(value: number);
        /**
         * If enabled, all Target values will be calculated in world space instead of the object's local space.
         */
        public get configuredInWorldSpace(): boolean;
        public set configuredInWorldSpace(value: boolean);
        /**
         * Enable this property to swap the order in which the physics engine processes the Rigidbodies involved in the joint. This results in different joint motion but has no impact on Rigidbodies and anchors.
         */
        public get swapBodies(): boolean;
        public set swapBodies(value: boolean);
        
        public constructor();
        
                    
    }
    /**
     * Scene extensions to access the underlying physics scene.
     */
    class PhysicsSceneExtensions extends System.Object {
        /**
         * An extension method that returns the 3D physics Scene from the Scene.
         * @param scene The Scene from which to return the 3D physics Scene.
         * @returns The 3D physics Scene used by the Scene.
         */
        public static GetPhysicsScene($scene: UnityEngine_SceneManagement.Scene):PhysicsScene;
        
                    
    }
    /**
     * The type of the joint that restricts movement of the two connected articulation bodies.
     */
    enum ArticulationJointType { FixedJoint = 0, PrismaticJoint = 1, RevoluteJoint = 2, SphericalJoint = 3 }
    /**
     * The lock type applied to a particular degree of freedom of an articulation body.
     */
    enum ArticulationDofLock { LockedMotion = 0, LimitedMotion = 1, FreeMotion = 2 }
    /**
     * Drive applies forces and torques to the connected bodies.
     */
    class ArticulationDrive extends System.ValueType {
        /**
         * The lower limit of motion for a particular degree of freedom.
         */
        public lowerLimit: number;
        /**
         * The upperlimit of motion for a particular degree of freedom.
         */
        public upperLimit: number;
        /**
         * The stiffness of the spring connected to this drive.
         */
        public stiffness: number;
        /**
         * The damping of the spring attached to this drive.
         */
        public damping: number;
        /**
         * The maximum force this drive can apply to a body.
         */
        public forceLimit: number;
        /**
         * The target value the drive will try to reach.
         */
        public target: number;
        /**
         * The velocity of the body this drive will try to reach.
         */
        public targetVelocity: number;
        
        public get_Clone(): ArticulationDrive;            
    }
    /**
     * Coordinates in reduced space.
     */
    class ArticulationReducedSpace extends System.ValueType {
        /**
         * The number of degrees of freedom of a body.
         */
        public dofCount: number;
        /**
         * Stores coordinates in reduced space.
         * @param a Coordinate of the first degree of freedom.
         * @param b Coordinate of the second degree of freedom.
         * @param c Coordinate of the third degree of freedom.
         */
        public constructor($a: number);
        /**
         * Stores coordinates in reduced space.
         * @param a Coordinate of the first degree of freedom.
         * @param b Coordinate of the second degree of freedom.
         * @param c Coordinate of the third degree of freedom.
         */
        public constructor($a: number, $b: number);
        /**
         * Stores coordinates in reduced space.
         * @param a Coordinate of the first degree of freedom.
         * @param b Coordinate of the second degree of freedom.
         * @param c Coordinate of the third degree of freedom.
         */
        public constructor($a: number, $b: number, $c: number);
        
        public get_Item($i: number):number;
        
        public set_Item($i: number, $value: number):void;
        
        public get_Clone(): ArticulationReducedSpace;            
    }
    /**
     * The floating point dense Jacobian matrix of the articulation body hierarchy.
     */
    class ArticulationJacobian extends System.ValueType {
        /**
         * Number of rows of the matrix is equal to the number of articulation bodies in hierarchy times 6: 3 rows of linearpositional DOF and 3 rows of angularrotational DOF for each body.
         */
        public get rows(): number;
        public set rows(value: number);
        /**
         * Number of columns of the matrix is equal to the total number of all joint degrees of freedom(DOF), plus 6 if ArticulationBody.immovable is false.
         */
        public get columns(): number;
        public set columns(value: number);
        /**
         * List of floats representing Jacobian matrix.
         */
        public get elements(): System_Collections_Generic.List$1<number>;
        public set elements(value: System_Collections_Generic.List$1<number>);
        
        public constructor($rows: number, $cols: number);
        
                    
    }
    /**
     * Struct used to set up a raycast command to be performed asynchronously during a job.
     */
    class RaycastCommand extends System.ValueType {
        /**
         * The starting point of the ray in world coordinates.
         */
        public get from(): Vector3;
        public set from(value: Vector3);
        /**
         * The direction of the ray.
         */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
         * The maximum distance the ray should check for collisions.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * A LayerMask that is used to selectively ignore Colliders when casting a ray.
         */
        public get layerMask(): number;
        public set layerMask(value: number);
        /**
         * The maximum number of Colliders the ray can hit.
         */
        public get maxHits(): number;
        public set maxHits(value: number);
        /**
         * Create a RaycastCommand.
         * @param from The starting point of the ray in world coordinates.
         * @param direction The direction of the ray.
         * @param distance The maximum distance the ray should check for collisions.
         * @param layerMask A LayerMask that is used to selectively ignore Colliders when casting a ray.
         * @param maxHits The maximum number of Colliders the ray can hit.
         */
        public constructor($from: Vector3, $direction: Vector3, $distance?: number, $layerMask?: number, $maxHits?: number);
        
        public static ScheduleBatch($commands: Unity_Collections.NativeArray$1<RaycastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
        public get_Clone(): RaycastCommand;            
    }
    /**
     * Use this struct to set up a sphere cast command that is performed asynchronously during a job.
     */
    class SpherecastCommand extends System.ValueType {
        /**
         * The starting point of the sphere cast in world coordinates.
         */
        public get origin(): Vector3;
        public set origin(value: Vector3);
        /**
         * The radius of the casting sphere.
         */
        public get radius(): number;
        public set radius(value: number);
        /**
         * The direction of the sphere cast.
         */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
         * The maximum distance the sphere should check for collisions.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * The LayerMask that selectively ignores Colliders when casting a sphere.
         */
        public get layerMask(): number;
        public set layerMask(value: number);
        /**
         * Creates a SpherecastCommand.
         * @param origin The starting point of the sphere cast.
         * @param radius The radius of the casting sphere.
         * @param direction The direction of the sphere cast.
         * @param distance The maximum distance the cast should check for collisions.
         * @param layerMask The LayerMask that selectively ignores Colliders when casting a sphere.
         */
        public constructor($origin: Vector3, $radius: number, $direction: Vector3, $distance?: number, $layerMask?: number);
        
        public static ScheduleBatch($commands: Unity_Collections.NativeArray$1<SpherecastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
        public get_Clone(): SpherecastCommand;            
    }
    /**
     * Use this struct to set up a capsule cast command that is performed asynchronously during a job.
     */
    class CapsulecastCommand extends System.ValueType {
        /**
         * The center of the sphere at the start of the capsule.
         */
        public get point1(): Vector3;
        public set point1(value: Vector3);
        /**
         * The center of the sphere at the end of the capsule.
         */
        public get point2(): Vector3;
        public set point2(value: Vector3);
        /**
         * The radius of the capsule.
         */
        public get radius(): number;
        public set radius(value: number);
        /**
         * The direction of the capsule cast.
         */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
         * The maximum distance the capsule cast checks for collision.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * A LayerMask that selectively ignores Colliders when casting a capsule.
         */
        public get layerMask(): number;
        public set layerMask(value: number);
        /**
         * Creates a CapsulecastCommand.
         * @param p1 The center of the sphere at the start of the capsule.
         * @param p2 The center of the sphere at the end of the capsule.
         * @param radius The radius of the capsule.
         * @param direction The direction of the capsule cast
         * @param distance The maximum length of the sweep.
         * @param layerMask The LayerMask that selectively ignores Colliders when casting a capsule.
         */
        public constructor($p1: Vector3, $p2: Vector3, $radius: number, $direction: Vector3, $distance?: number, $layerMask?: number);
        
        public static ScheduleBatch($commands: Unity_Collections.NativeArray$1<CapsulecastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
        public get_Clone(): CapsulecastCommand;            
    }
    /**
     * Use this struct to set up a box cast command to be performed asynchronously during a job.
     */
    class BoxcastCommand extends System.ValueType {
        /**
         * Center of the box.
         */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
         * Half the size of the box in each dimension.
         */
        public get halfExtents(): Vector3;
        public set halfExtents(value: Vector3);
        /**
         * Rotation of the box.
         */
        public get orientation(): Quaternion;
        public set orientation(value: Quaternion);
        /**
         * The direction in which to sweep the box.
         */
        public get direction(): Vector3;
        public set direction(value: Vector3);
        /**
         * The maximum distance of the sweep.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * A LayerMask that is used to selectively ignore Colliders when casting a box.
         */
        public get layerMask(): number;
        public set layerMask(value: number);
        /**
         * Creates a BoxcastCommand.
         * @param center Center of the box.
         * @param halfExtend Half the size of the box in each dimension.
         * @param orientation Rotation of the box.
         * @param direction The direction in which to sweep the box.
         * @param distance The maximum length of the cast.
         * @param layerMask A that is used to selectively ignore colliders when casting a box.
         */
        public constructor($center: Vector3, $halfExtents: Vector3, $orientation: Quaternion, $direction: Vector3, $distance?: number, $layerMask?: number);
        
        public static ScheduleBatch($commands: Unity_Collections.NativeArray$1<BoxcastCommand>, $results: Unity_Collections.NativeArray$1<RaycastHit>, $minCommandsPerJob: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
        public get_Clone(): BoxcastCommand;            
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IEnumerator {
        
                    
    }
    
}
declare module 'UnityEngine.SceneManagement' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Run-time data structure for *.unity file.
     */
    interface Scene extends System.ValueType {
        
                    
    }
    
    interface Scene {
        /**
         * An extension method that returns the 3D physics Scene from the Scene.
         * @param scene The Scene from which to return the 3D physics Scene.
         * @returns The 3D physics Scene used by the Scene.
         * @extension UnityEngine.PhysicsSceneExtensions
         */
        GetPhysicsScene():PhysicsScene;
        
                    
    }
    
}
declare module 'Unity.Jobs' {

    import * as System from 'System';
        
    /**
     * JobHandle.
     */
    interface JobHandle extends System.ValueType {
        
                    
    }
    
}
declare module 'Unity.Collections' {

    import * as System from 'System';
        
    /**
     * A NativeArray exposes a buffer of native memory to managed code, making it possible to share data between managed and native without marshalling costs.
     */
    interface NativeArray$1<T> extends System.ValueType {
        
                    
    }
    
}

