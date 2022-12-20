//# signature=UnityEngine.Physics2DModule#afcd565f43f0aaab2dd2c691eeb236eb#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_SceneManagement from 'UnityEngine.SceneManagement';
    import * as UnityEngine_CompositeCollider2D from 'UnityEngine.CompositeCollider2D';
        
    /**
     * Represents a single instance of a 2D physics Scene.
     */
    class PhysicsScene2D extends System.ValueType {
        
        public ToString():string;
        
        public static op_Equality($lhs: PhysicsScene2D, $rhs: PhysicsScene2D):boolean;
        
        public static op_Inequality($lhs: PhysicsScene2D, $rhs: PhysicsScene2D):boolean;
        
        public GetHashCode():number;
        
        public Equals($other: any):boolean;
        
        public Equals($other: PhysicsScene2D):boolean;
        /**
         * Determines whether the physics Scene is valid or not.
         * @returns True when the physics Scene valid.
         */
        public IsValid():boolean;
        /**
         * Determines whether the physics Scene is empty or not.
         * @returns True when the physics Scene is empty.
         */
        public IsEmpty():boolean;
        /**
         * Simulate physics associated with this PhysicsScene.
         * @param step The time to advance physics by.
         * @returns Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail.
         */
        public Simulate($step: number):boolean;
        /**
         * Casts a line segment against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public Linecast($start: Vector2, $end: Vector2, $layerMask?: number):RaycastHit2D;
        /**
         * Casts a line segment against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public Linecast($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D):RaycastHit2D;
        /**
         * Casts a line segment against colliders in the PhysicsScene2D.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public Linecast($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask?: number):number;
        /**
         * Casts a line segment against colliders in the PhysicsScene2D.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public Linecast($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        
        public Linecast($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>):number;
        /**
         * Casts a ray against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the ray originates.
         * @param direction The vector representing the direction of the ray.
         * @param distance Maximum distance over which to cast the ray.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public Raycast($origin: Vector2, $direction: Vector2, $distance: number, $layerMask?: number):RaycastHit2D;
        /**
         * Casts a ray against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the ray originates.
         * @param direction The vector representing the direction of the ray.
         * @param distance Maximum distance over which to cast the ray.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public Raycast($origin: Vector2, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D):RaycastHit2D;
        /**
         * Casts a ray against colliders the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the ray originates.
         * @param direction The vector representing the direction of the ray.
         * @param distance Maximum distance over which to cast the ray.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public Raycast($origin: Vector2, $direction: Vector2, $distance: number, $results: RaycastHit2D[], $layerMask?: number):number;
        /**
         * Casts a ray against colliders the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the ray originates.
         * @param direction The vector representing the direction of the ray.
         * @param distance Maximum distance over which to cast the ray.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth, or normal angle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public Raycast($origin: Vector2, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        
        public Raycast($origin: Vector2, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>):number;
        /**
         * Casts a circle against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction Vector representing the direction to cast the circle.
         * @param distance Maximum distance over which to cast the circle.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $layerMask?: number):RaycastHit2D;
        /**
         * Casts a circle against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction Vector representing the direction to cast the circle.
         * @param distance Maximum distance over which to cast the circle.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D):RaycastHit2D;
        /**
         * Casts a circle against the colliders in the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction Vector representing the direction to cast the circle.
         * @param distance Maximum distance over which to cast the circle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $results: RaycastHit2D[], $layerMask?: number):number;
        /**
         * Casts a circle against the colliders in the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction Vector representing the direction to cast the circle.
         * @param distance Maximum distance over which to cast the circle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        
        public CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>):number;
        /**
         * Casts a box against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction Vector representing the direction to cast the box.
         * @param distance Maximum distance over which to cast the box.
         * @param layerMask Filter to detect colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $layerMask?: number):RaycastHit2D;
        /**
         * Casts a box against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction Vector representing the direction to cast the box.
         * @param distance Maximum distance over which to cast the box.
         * @param layerMask Filter to detect colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D):RaycastHit2D;
        /**
         * Casts a box against the colliders in the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction Vector representing the direction to cast the box.
         * @param distance Maximum distance over which to cast the box.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to detect colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $results: RaycastHit2D[], $layerMask?: number):number;
        /**
         * Casts a box against the colliders in the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction Vector representing the direction to cast the box.
         * @param distance Maximum distance over which to cast the box.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to detect colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        
        public BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>):number;
        /**
         * Casts a capsule against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param distance Maximum distance over which to cast the capsule.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $layerMask?: number):RaycastHit2D;
        /**
         * Casts a capsule against colliders in the PhysicsScene2D, returning the first intersection only.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param distance Maximum distance over which to cast the capsule.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns The cast results returned.
         */
        public CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D):RaycastHit2D;
        /**
         * Casts a capsule against the Colliders in the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param distance Maximum distance over which to cast the capsule.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $results: RaycastHit2D[], $layerMask?: number):number;
        /**
         * Casts a capsule against the Colliders in the PhysicsScene2D, returning all intersections.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param distance Maximum distance over which to cast the capsule.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask The filter used to detect Colliders only on certain layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        
        public CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>):number;
        /**
         * Cast a 3D ray against the colliders in the PhysicsScene2D, returning the first intersection only.
         * @param ray The 3D ray defining origin and direction to test.
         * @param distance Maximum distance over which to cast the ray.
         * @param layerMask Filter to detect colliders only on certain layers.
         * @returns The cast results returned.
         */
        public GetRayIntersection($ray: Ray, $distance: number, $layerMask?: number):RaycastHit2D;
        /**
         * Cast a 3D ray against the colliders in the PhysicsScene2D, returning all intersections.
         * @param ray The 3D ray defining origin and direction to test.
         * @param distance Maximum distance over which to cast the ray.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to detect colliders only on certain layers.
         * @returns The number of results returned.
         */
        public GetRayIntersection($ray: Ray, $distance: number, $results: RaycastHit2D[], $layerMask?: number):number;
        /**
         * Checks a point against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point A point in world space.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the point.
         */
        public OverlapPoint($point: Vector2, $layerMask?: number):Collider2D;
        /**
         * Checks a point against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point A point in world space.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the point.
         */
        public OverlapPoint($point: Vector2, $contactFilter: ContactFilter2D):Collider2D;
        /**
         * Checks a point against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point A point in world space.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapPoint($point: Vector2, $results: Collider2D[], $layerMask?: number):number;
        /**
         * Checks a point against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point A point in world space.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapPoint($point: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public OverlapPoint($point: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Checks a circle against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point The centre of the circle.
         * @param radius The radius of the circle.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the circle.
         */
        public OverlapCircle($point: Vector2, $radius: number, $layerMask?: number):Collider2D;
        /**
         * Checks a circle against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point The centre of the circle.
         * @param radius The radius of the circle.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the circle.
         */
        public OverlapCircle($point: Vector2, $radius: number, $contactFilter: ContactFilter2D):Collider2D;
        /**
         * Checks a circle against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point The centre of the circle.
         * @param radius The radius of the circle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapCircle($point: Vector2, $radius: number, $results: Collider2D[], $layerMask?: number):number;
        /**
         * Checks a circle against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point The centre of the circle.
         * @param radius The radius of the circle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapCircle($point: Vector2, $radius: number, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public OverlapCircle($point: Vector2, $radius: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Checks a box against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the box.
         */
        public OverlapBox($point: Vector2, $size: Vector2, $angle: number, $layerMask?: number):Collider2D;
        /**
         * Checks a box against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the box.
         */
        public OverlapBox($point: Vector2, $size: Vector2, $angle: number, $contactFilter: ContactFilter2D):Collider2D;
        /**
         * Checks a box against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapBox($point: Vector2, $size: Vector2, $angle: number, $results: Collider2D[], $layerMask?: number):number;
        /**
         * Checks a box against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapBox($point: Vector2, $size: Vector2, $angle: number, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public OverlapBox($point: Vector2, $size: Vector2, $angle: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param pointA One corner of the rectangle.
         * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the area.
         */
        public OverlapArea($pointA: Vector2, $pointB: Vector2, $layerMask?: number):Collider2D;
        /**
         * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param pointA One corner of the rectangle.
         * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the area.
         */
        public OverlapArea($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D):Collider2D;
        /**
         * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning all intersections.
         * @param pointA One corner of the rectangle.
         * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapArea($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask?: number):number;
        /**
         * Checks an area (non-rotated box) against Colliders in the PhysicsScene2D, returning all intersections.
         * @param pointA One corner of the rectangle.
         * @param pointB The corner of the rectangle diagonally opposite the pointA corner.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapArea($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public OverlapArea($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Checks a capsule against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the capsule.
         */
        public OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $layerMask?: number):Collider2D;
        /**
         * Checks a capsule against Colliders in the PhysicsScene2D, returning the first intersection only.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns The collider overlapping the capsule.
         */
        public OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $contactFilter: ContactFilter2D):Collider2D;
        /**
         * Checks a capsule against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $results: Collider2D[], $layerMask?: number):number;
        /**
         * Checks a capsule against Colliders in the PhysicsScene2D, returning all intersections.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Checks a Collider against Colliders in the PhysicsScene2D, returning all intersections.
         * @param collider The Collider that defines the area used to query for other Collider overlaps.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapCollider($collider: Collider2D, $results: Collider2D[], $layerMask?: number):number;
        /**
         * Checks a Collider against Colliders in the PhysicsScene2D, returning all intersections.
         * @param collider The Collider that defines the area used to query for other Collider overlaps.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param layerMask Filter to check objects only on specific layers.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask and Z depth. Note that the normal angle is not used for overlap testing.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapCollider($collider: Collider2D, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public static OverlapCollider($collider: Collider2D, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        
        public get_Clone(): PhysicsScene2D;            
    }
    /**
     * Information returned about an object detected by a raycast in 2D physics.
     */
    class RaycastHit2D extends System.ValueType {
        /**
         * The centroid of the primitive used to perform the cast.
         */
        public get centroid(): Vector2;
        public set centroid(value: Vector2);
        /**
         * The point in world space where the ray hit the collider's surface.
         */
        public get point(): Vector2;
        public set point(value: Vector2);
        /**
         * The normal vector of the surface hit by the ray.
         */
        public get normal(): Vector2;
        public set normal(value: Vector2);
        /**
         * The distance from the ray origin to the impact point.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * Fraction of the distance along the ray that the hit occurred.
         */
        public get fraction(): number;
        public set fraction(value: number);
        /**
         * The collider hit by the ray.
         */
        public get collider(): Collider2D;
        /**
         * The Rigidbody2D attached to the object that was hit.
         */
        public get rigidbody(): Rigidbody2D;
        /**
         * The Transform of the object that was hit.
         */
        public get transform(): Transform;
        
        public static op_Implicit($hit: RaycastHit2D):boolean;
        
        public CompareTo($other: RaycastHit2D):number;
        
        public get_Clone(): RaycastHit2D;            
    }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * A set of parameters for filtering contact results. Define the angle by referring to their position in world space, where 0 degrees is parallel to the positive x-axis, 90 degrees is parallel to the positive y-axis, 180 degrees is parallel to the negative x-axis, and 270 degrees is parallel to the negative y-axis.
     */
    class ContactFilter2D extends System.ValueType {
        /**
         * Sets to filter contact results based on trigger collider involvement.
         */
        public useTriggers: boolean;
        /**
         * Sets the contact filter to filter results by layer mask.
         */
        public useLayerMask: boolean;
        /**
         * Sets the contact filter to filter the results by depth using minDepth and maxDepth.
         */
        public useDepth: boolean;
        /**
         * Sets the contact filter to filter within the minDepth and maxDepth range, or outside that range.
         */
        public useOutsideDepth: boolean;
        /**
         * Sets the contact filter to filter the results by the collision's normal angle using minNormalAngle and maxNormalAngle.
         */
        public useNormalAngle: boolean;
        /**
         * Sets the contact filter to filter within the minNormalAngle and maxNormalAngle range, or outside that range.
         */
        public useOutsideNormalAngle: boolean;
        /**
         * Sets the contact filter to filter the results that only include Collider2D on the layers defined by the layer mask.
         */
        public layerMask: LayerMask;
        /**
         * Sets the contact filter to filter the results to only include Collider2D with a Z coordinate (depth) greater than this value.
         */
        public minDepth: number;
        /**
         * Sets the contact filter to filter the results to only include Collider2D with a Z coordinate (depth) less than this value.
         */
        public maxDepth: number;
        /**
         * Sets the contact filter to filter the results to only include contacts with collision normal angles that are greater than this angle.
         */
        public minNormalAngle: number;
        /**
         * Sets the contact filter to filter the results to only include contacts with collision normal angles that are less than this angle.
         */
        public maxNormalAngle: number;
        
        public static NormalAngleUpperLimit: number;
        /**
         * Given the current state of the contact filter, determine whether it would filter anything.
         */
        public get isFiltering(): boolean;
        /**
         * Sets the contact filter to not filter any ContactPoint2D.
         * @returns A copy of the contact filter set to not filter any ContactPoint2D.
         */
        public NoFilter():ContactFilter2D;
        /**
         * Turns off layer mask filtering by setting useLayerMask to false.  The associated value of layerMask is not changed.
         */
        public ClearLayerMask():void;
        /**
         * Sets the layerMask filter property using the layerMask parameter provided and also enables layer mask filtering by setting useLayerMask to true.
         * @param layerMask The value used to set the layerMask.
         */
        public SetLayerMask($layerMask: LayerMask):void;
        /**
         * Turns off depth filtering by setting useDepth to false.  The associated values of minDepth and maxDepth are not changed.
         */
        public ClearDepth():void;
        /**
         * Sets the minDepth and maxDepth filter properties and turns on depth filtering by setting useDepth to true.
         * @param minDepth The value used to set minDepth.
         * @param maxDepth The value used to set maxDepth.
         */
        public SetDepth($minDepth: number, $maxDepth: number):void;
        /**
         * Turns off normal angle filtering by setting useNormalAngle to false. The associated values of minNormalAngle and maxNormalAngle are not changed.
         */
        public ClearNormalAngle():void;
        /**
         * Sets the minNormalAngle and maxNormalAngle filter properties and turns on normal angle filtering by setting useNormalAngle to true.
         * @param minNormalAngle The value used to set the minNormalAngle.
         * @param maxNormalAngle The value used to set the maxNormalAngle.
         */
        public SetNormalAngle($minNormalAngle: number, $maxNormalAngle: number):void;
        /**
         * Checks if the collider is a trigger and should be filtered by the useTriggers to be filtered.
         * @param collider The Collider2D used to check for a trigger.
         * @returns Returns true when collider is excluded by the filter and false if otherwise.
         */
        public IsFilteringTrigger($collider: Collider2D):boolean;
        /**
         * Checks if the GameObject.layer for obj is included in the layerMask to be filtered.
         * @param obj The GameObject used to check the GameObject.layer.
         * @returns Returns true when obj is excluded by the filter and false if otherwise.
         */
        public IsFilteringLayerMask($obj: GameObject):boolean;
        /**
         * Checks if the Transform for obj is within the depth range to be filtered.
         * @param obj The GameObject used to check the z-position (depth) of Transform.position.
         * @returns Returns true when obj is excluded by the filter and false if otherwise.
         */
        public IsFilteringDepth($obj: GameObject):boolean;
        /**
         * Checks if the angle of normal is within the normal angle range to be filtered.
         * @param normal The normal used to calculate an angle.
         * @returns Returns true when normal is excluded by the filter and false if otherwise.
         */
        public IsFilteringNormalAngle($normal: Vector2):boolean;
        /**
         * Checks if the angle is within the normal angle range to be filtered.
         * @param angle The angle used for comparison in the filter.
         * @returns Returns true when angle is excluded by the filter and false if otherwise.
         */
        public IsFilteringNormalAngle($angle: number):boolean;
        
                    
    }
    /**
     * The direction that the capsule sides can extend.
     */
    enum CapsuleDirection2D { Vertical = 0, Horizontal = 1 }
    /**
     * Representation of rays.
     */
    interface Ray extends System.ValueType {
        
                    
    }
    /**
     * Parent class for collider types used with 2D gameplay.
     */
    class Collider2D extends Behaviour {
        /**
         * The density of the collider used to calculate its mass (when auto mass is enabled).
         */
        public get density(): number;
        public set density(value: number);
        /**
         * Is this collider configured as a trigger?
         */
        public get isTrigger(): boolean;
        public set isTrigger(value: boolean);
        /**
         * Whether the collider is used by an attached effector or not.
         */
        public get usedByEffector(): boolean;
        public set usedByEffector(value: boolean);
        /**
         * Sets whether the Collider will be used or not used by a CompositeCollider2D.
         */
        public get usedByComposite(): boolean;
        public set usedByComposite(value: boolean);
        /**
         * Get the CompositeCollider2D that is available to be attached to the collider.
         */
        public get composite(): CompositeCollider2D;
        /**
         * The local offset of the collider geometry.
         */
        public get offset(): Vector2;
        public set offset(value: Vector2);
        /**
         * The Rigidbody2D attached to the Collider2D.
         */
        public get attachedRigidbody(): Rigidbody2D;
        /**
         * The number of separate shaped regions in the collider.
         */
        public get shapeCount(): number;
        /**
         * The world space bounding area of the collider.
         */
        public get bounds(): Bounds;
        /**
         * The PhysicsMaterial2D that is applied to this collider.
         */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
         * Get the friction used by the collider.
         */
        public get friction(): number;
        /**
         * Get the bounciness used by the collider.
         */
        public get bounciness(): number;
        
        public constructor();
        /**
         * Creates a planar Mesh that is identical to the area defined by the Collider2D geometry.
         * @param useBodyPosition Should the mesh be transformed by the position of the attached Rigidbody2D?
         * @param useBodyRotation Should the mesh be transformed by the rotation of the attached Rigidbody2D?
         * @returns The planar Mesh created that matches the collider geometry or NULL if no Mesh could be created.
         */
        public CreateMesh($useBodyPosition: boolean, $useBodyRotation: boolean):Mesh;
        /**
         * Generates a simple hash value based upon the geometry of the Collider2D.
         * @returns A hash value that uniquely identifies the configured geometry of the Collider2D.
         */
        public GetShapeHash():number;
        /**
         * Check whether this collider is touching the collider or not.
         * @param collider The collider to check if it is touching this collider.
         * @returns Whether this collider is touching the collider or not.
         */
        public IsTouching($collider: Collider2D):boolean;
        /**
         * Check whether this collider is touching the collider or not with the results filtered by the contactFilter.
         * @param collider The collider to check if it is touching this collider.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Whether this collider is touching the collider or not.
         */
        public IsTouching($collider: Collider2D, $contactFilter: ContactFilter2D):boolean;
        /**
         * Check whether this collider is touching other colliders or not with the results filtered by the contactFilter.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Whether this collider is touching the collider or not.
         */
        public IsTouching($contactFilter: ContactFilter2D):boolean;
        
        public IsTouchingLayers():boolean;
        /**
         * Checks whether this collider is touching any colliders on the specified layerMask or not.
         * @param layerMask Any colliders on any of these layers count as touching.
         * @returns Whether this collider is touching any collider on the specified layerMask or not.
         */
        public IsTouchingLayers($layerMask: number):boolean;
        /**
         * Check if a collider overlaps a point in space.
         * @param point A point in world space.
         * @returns Does point overlap the collider?
         */
        public OverlapPoint($point: Vector2):boolean;
        /**
         * Calculates the minimum separation of this collider against another collider.
         * @param collider A collider used to calculate the minimum separation against this collider.
         * @returns The minimum separation of collider and this collider.
         */
        public Distance($collider: Collider2D):ColliderDistance2D;
        /**
         * Get a list of all colliders that overlap this collider.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapCollider($contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public OverlapCollider($contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Retrieves all contact points for this Collider.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public GetContacts($contacts: ContactPoint2D[]):number;
        
        public GetContacts($contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        /**
         * Retrieves all contact points for this Collider, with the results filtered by the contactFilter.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public GetContacts($contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]):number;
        
        public GetContacts($contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        /**
         * Retrieves all colliders in contact with this Collider.
         * @param colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of contacts placed in the colliders array.
         */
        public GetContacts($colliders: Collider2D[]):number;
        
        public GetContacts($colliders: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Retrieves all colliders in contact with this Collider, with the results filtered by the contactFilter.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of colliders placed in the colliders array.
         */
        public GetContacts($contactFilter: ContactFilter2D, $colliders: Collider2D[]):number;
        
        public GetContacts($contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>):number;
        
        public Cast($direction: Vector2, $results: RaycastHit2D[]):number;
        
        public Cast($direction: Vector2, $results: RaycastHit2D[], $distance: number):number;
        /**
         * Casts the Collider shape into the Scene starting at the Collider position ignoring the Collider itself.
         * @param direction Vector representing the direction to cast the shape.
         * @param results Array to receive results.
         * @param distance Maximum distance over which to cast the shape.
         * @param ignoreSiblingColliders Determines whether the cast should ignore Colliders attached to the same Rigidbody2D (known as sibling Colliders).
         * @returns The number of results returned.
         */
        public Cast($direction: Vector2, $results: RaycastHit2D[], $distance: number, $ignoreSiblingColliders: boolean):number;
        
        public Cast($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        
        public Cast($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number):number;
        /**
         * Casts the Collider shape into the Scene starting at the Collider position ignoring the Collider itself.
         * @param direction Vector representing the direction to cast the shape.
         * @param contactFilter Filter results defined by the contact filter.
         * @param results Array to receive results.
         * @param distance Maximum distance over which to cast the shape.
         * @param ignoreSiblingColliders Determines whether the cast should ignore Colliders attached to the same Rigidbody2D (known as sibling Colliders).
         * @returns The number of results returned.
         */
        public Cast($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number, $ignoreSiblingColliders: boolean):number;
        
        public Cast($direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: number, $ignoreSiblingColliders?: boolean):number;
        
        public Raycast($direction: Vector2, $results: RaycastHit2D[]):number;
        
        public Raycast($direction: Vector2, $results: RaycastHit2D[], $distance: number):number;
        
        public Raycast($direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number):number;
        
        public Raycast($direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number):number;
        /**
         * Casts a ray into the Scene that starts at the Collider position and ignores the Collider itself.
         * @param direction Vector representing the direction of the ray.
         * @param results Array to receive results.
         * @param distance Maximum distance over which to cast the ray.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @param contactFilter Filter results defined by the contact filter.
         * @returns The number of results returned.
         */
        public Raycast($direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public Raycast($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        /**
         * Casts a ray into the Scene that starts at the Collider position and ignores the Collider itself.
         * @param direction Vector representing the direction of the ray.
         * @param results Array to receive results.
         * @param distance Maximum distance over which to cast the ray.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @param contactFilter Filter results defined by the contact filter.
         * @returns The number of results returned.
         */
        public Raycast($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number):number;
        
        public Raycast($direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: number):number;
        /**
         * Returns a point on the perimeter of this Collider that is closest to the specified position.
         * @param position The position from which to find the closest point on this Collider.
         * @returns A point on the perimeter of this Collider that is closest to the specified position.
         */
        public ClosestPoint($position: Vector2):Vector2;
        
                    
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
     * Scene extensions to access the underlying physics scene.
     */
    class PhysicsSceneExtensions2D extends System.Object {
        /**
         * An extension method that returns the 2D physics Scene from the Scene.
         * @param scene The Scene from which to return the 2D physics Scene.
         * @returns The 2D physics Scene used by the Scene.
         */
        public static GetPhysicsScene2D($scene: UnityEngine_SceneManagement.Scene):PhysicsScene2D;
        
                    
    }
    /**
     * Global settings and helpers for 2D physics.
     */
    class Physics2D extends System.Object {
        /**
         * Layer mask constant for the default layer that ignores raycasts.
         */
        public static IgnoreRaycastLayer: number;
        /**
         * Layer mask constant that includes all layers participating in raycasts by default.
         */
        public static DefaultRaycastLayers: number;
        /**
         * Layer mask constant that includes all layers.
         */
        public static AllLayers: number;
        /**
         * The PhysicsScene2D automatically created when Unity starts.
         */
        public static get defaultPhysicsScene(): PhysicsScene2D;
        /**
         * The number of iterations of the physics solver when considering objects' velocities.
         */
        public static get velocityIterations(): number;
        public static set velocityIterations(value: number);
        /**
         * The number of iterations of the physics solver when considering objects' positions.
         */
        public static get positionIterations(): number;
        public static set positionIterations(value: number);
        /**
         * Acceleration due to gravity.
         */
        public static get gravity(): Vector2;
        public static set gravity(value: Vector2);
        /**
         * Do raycasts detect Colliders configured as triggers?
         */
        public static get queriesHitTriggers(): boolean;
        public static set queriesHitTriggers(value: boolean);
        /**
         * Set the raycasts or linecasts that start inside Colliders to detect or not detect those Colliders.
         */
        public static get queriesStartInColliders(): boolean;
        public static set queriesStartInColliders(value: boolean);
        /**
         * Use this to control whether or not the appropriate OnCollisionExit2D or OnTriggerExit2D callbacks should be called when a Collider2D is disabled.
         */
        public static get callbacksOnDisable(): boolean;
        public static set callbacksOnDisable(value: boolean);
        /**
         * Determines whether the garbage collector should reuse only a single instance of a Collision2D type for all collision callbacks.
         */
        public static get reuseCollisionCallbacks(): boolean;
        public static set reuseCollisionCallbacks(value: boolean);
        /**
         * Set whether to automatically sync changes to the Transform component with the physics engine.
         */
        public static get autoSyncTransforms(): boolean;
        public static set autoSyncTransforms(value: boolean);
        /**
         * Controls when Unity executes the 2D physics simulation.
         */
        public static get simulationMode(): SimulationMode2D;
        public static set simulationMode(value: SimulationMode2D);
        /**
         * A set of options that control how physics operates when using the job system to multithread the physics simulation.
         */
        public static get jobOptions(): PhysicsJobOptions2D;
        public static set jobOptions(value: PhysicsJobOptions2D);
        /**
         * Any collisions with a relative linear velocity below this threshold will be treated as inelastic.
         */
        public static get velocityThreshold(): number;
        public static set velocityThreshold(value: number);
        /**
         * The maximum linear position correction used when solving constraints.  This helps to prevent overshoot.
         */
        public static get maxLinearCorrection(): number;
        public static set maxLinearCorrection(value: number);
        /**
         * The maximum angular position correction used when solving constraints.  This helps to prevent overshoot.
         */
        public static get maxAngularCorrection(): number;
        public static set maxAngularCorrection(value: number);
        /**
         * The maximum linear speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
         */
        public static get maxTranslationSpeed(): number;
        public static set maxTranslationSpeed(value: number);
        /**
         * The maximum angular speed of a rigid-body per physics update.  Increasing this can cause numerical problems.
         */
        public static get maxRotationSpeed(): number;
        public static set maxRotationSpeed(value: number);
        /**
         * The default contact offset of the newly created Colliders.
         */
        public static get defaultContactOffset(): number;
        public static set defaultContactOffset(value: number);
        /**
         * The scale factor that controls how fast overlaps are resolved.
         */
        public static get baumgarteScale(): number;
        public static set baumgarteScale(value: number);
        /**
         * The scale factor that controls how fast TOI overlaps are resolved.
         */
        public static get baumgarteTOIScale(): number;
        public static set baumgarteTOIScale(value: number);
        /**
         * The time in seconds that a rigid-body must be still before it will go to sleep.
         */
        public static get timeToSleep(): number;
        public static set timeToSleep(value: number);
        /**
         * A rigid-body cannot sleep if its linear velocity is above this tolerance.
         */
        public static get linearSleepTolerance(): number;
        public static set linearSleepTolerance(value: number);
        /**
         * A Rigidbody cannot sleep if its angular velocity is above this tolerance threshold.
         */
        public static get angularSleepTolerance(): number;
        public static set angularSleepTolerance(value: number);
        /**
         * Enable to always show the Collider Gizmos even when they are not selected.
         */
        public static get alwaysShowColliders(): boolean;
        public static set alwaysShowColliders(value: boolean);
        /**
         * Should the Collider Gizmos show the sleep-state for each Collider?
         */
        public static get showColliderSleep(): boolean;
        public static set showColliderSleep(value: boolean);
        /**
         * Should the Collider Gizmos show current contacts for each Collider?
         */
        public static get showColliderContacts(): boolean;
        public static set showColliderContacts(value: boolean);
        /**
         * Should the Collider Gizmos show the AABBs for each Collider?
         */
        public static get showColliderAABB(): boolean;
        public static set showColliderAABB(value: boolean);
        /**
         * The scale of the contact arrow used by the Collider Gizmos.
         */
        public static get contactArrowScale(): number;
        public static set contactArrowScale(value: number);
        /**
         * The color used by the Gizmos to show all awake Colliders (Collider is awake when the body is awake).
         */
        public static get colliderAwakeColor(): Color;
        public static set colliderAwakeColor(value: Color);
        /**
         * The color used by the Gizmos to show all asleep Colliders (Collider is asleep when the body is asleep).
         */
        public static get colliderAsleepColor(): Color;
        public static set colliderAsleepColor(value: Color);
        /**
         * The color used by the Gizmos to show all Collider contacts.
         */
        public static get colliderContactColor(): Color;
        public static set colliderContactColor(value: Color);
        /**
         * Set the color used by the Gizmos to show all Collider axis-aligned bounding boxes (AABBs).
         */
        public static get colliderAABBColor(): Color;
        public static set colliderAABBColor(value: Color);
        
        public constructor();
        /**
         * Simulate physics in the Scene.
         * @param step The time to advance physics by.
         * @returns Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail.
         */
        public static Simulate($step: number):boolean;
        /**
         * Synchronizes.
         */
        public static SyncTransforms():void;
        
        public static IgnoreCollision($collider1: Collider2D, $collider2: Collider2D):void;
        /**
         * Makes the collision detection system ignore all collisionstriggers between collider1 and collider2/.
         * @param collider1 The first Collider to compare to collider2.
         * @param collider2 The second Collider to compare to collider1.
         * @param ignore Whether collisionstriggers between collider1 and collider2/ should be ignored or not.
         */
        public static IgnoreCollision($collider1: Collider2D, $collider2: Collider2D, $ignore: boolean):void;
        /**
         * Checks whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
         * @param collider1 The first Collider to compare to collider2.
         * @param collider2 The second Collider to compare to collider1.
         * @returns Whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
         */
        public static GetIgnoreCollision($collider1: Collider2D, $collider2: Collider2D):boolean;
        
        public static IgnoreLayerCollision($layer1: number, $layer2: number):void;
        /**
         * Choose whether to detect or ignore collisions between a specified pair of layers.
         * @param layer1 ID of the first layer.
         * @param layer2 ID of the second layer.
         * @param ignore Should collisions between these layers be ignored?
         */
        public static IgnoreLayerCollision($layer1: number, $layer2: number, $ignore: boolean):void;
        /**
         * Checks whether collisions between the specified layers be ignored or not.
         * @param layer1 ID of first layer.
         * @param layer2 ID of second layer.
         * @returns Whether collisions between the specified layers be ignored or not.
         */
        public static GetIgnoreLayerCollision($layer1: number, $layer2: number):boolean;
        /**
         * Set the collision layer mask that indicates which layer(s) the specified layer can collide with.
         * @param layer The layer to set the collision layer mask for.
         * @param layerMask A mask where each bit indicates a layer and whether it can collide with layer or not.
         */
        public static SetLayerCollisionMask($layer: number, $layerMask: number):void;
        /**
         * Get the collision layer mask that indicates which layer(s) the specified layer can collide with.
         * @param layer The layer to retrieve the collision layer mask for.
         * @returns A mask where each bit indicates a layer and whether it can collide with layer or not.
         */
        public static GetLayerCollisionMask($layer: number):number;
        /**
         * Checks whether the passed Colliders are in contact or not.
         * @param collider1 The Collider to check if it is touching collider2.
         * @param collider2 The Collider to check if it is touching collider1.
         * @returns Whether collider1 is touching collider2 or not.
         */
        public static IsTouching($collider1: Collider2D, $collider2: Collider2D):boolean;
        /**
         * Checks whether the passed Colliders are in contact or not.
         * @param collider1 The Collider to check if it is touching collider2.
         * @param collider2 The Collider to check if it is touching collider1.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Whether collider1 is touching collider2 or not.
         */
        public static IsTouching($collider1: Collider2D, $collider2: Collider2D, $contactFilter: ContactFilter2D):boolean;
        /**
         * Checks whether the passed Colliders are in contact or not.
         * @param Collider The Collider to check if it is touching any other Collider filtered by the contactFilter.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Whether the Collider is touching any other Collider filtered by the contactFilter or not.
         */
        public static IsTouching($collider: Collider2D, $contactFilter: ContactFilter2D):boolean;
        
        public static IsTouchingLayers($collider: Collider2D):boolean;
        /**
         * Checks whether the Collider is touching any Colliders on the specified layerMask or not.
         * @param Collider The Collider to check if it is touching Colliders on the layerMask.
         * @param layerMask Any Colliders on any of these layers count as touching.
         * @returns Whether the Collider is touching any Colliders on the specified layerMask or not.
         */
        public static IsTouchingLayers($collider: Collider2D, $layerMask: number):boolean;
        /**
         * Calculates the minimum distance between two Colliders.
         * @param colliderA A Collider used to calculate the minimum distance against colliderB.
         * @param colliderB A Collider used to calculate the minimum distance against colliderA.
         * @returns The minimum distance between colliderA and colliderB.
         */
        public static Distance($colliderA: Collider2D, $colliderB: Collider2D):ColliderDistance2D;
        /**
         * Returns a point on the perimeter of the Collider that is closest to the specified position.
         * @param position The position from which to find the closest point on the specified Collider.
         * @param Collider The Collider on which to find the closest specified position.
         * @returns A point on the perimeter of the Collider that is closest to the specified position.
         */
        public static ClosestPoint($position: Vector2, $collider: Collider2D):Vector2;
        /**
         * Returns a point on the perimeter of all enabled Colliders attached to the rigidbody that is closest to the specified position.
         * @param position The position from which to find the closest point on the specified rigidbody.
         * @param rigidbody The Rigidbody on which to find the closest specified position.
         * @returns A point on the perimeter of a Collider attached to the rigidbody that is closest to the specified position.
         */
        public static ClosestPoint($position: Vector2, $rigidbody: Rigidbody2D):Vector2;
        
        public static Linecast($start: Vector2, $end: Vector2):RaycastHit2D;
        
        public static Linecast($start: Vector2, $end: Vector2, $layerMask: number):RaycastHit2D;
        
        public static Linecast($start: Vector2, $end: Vector2, $layerMask: number, $minDepth: number):RaycastHit2D;
        /**
         * Casts a line segment against Colliders in the Scene.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static Linecast($start: Vector2, $end: Vector2, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D;
        /**
         * Casts a line segment against Colliders in the Scene with results filtered by ContactFilter2D.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public static Linecast($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        
        public static Linecast($start: Vector2, $end: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>):number;
        
        public static LinecastAll($start: Vector2, $end: Vector2):RaycastHit2D[];
        
        public static LinecastAll($start: Vector2, $end: Vector2, $layerMask: number):RaycastHit2D[];
        
        public static LinecastAll($start: Vector2, $end: Vector2, $layerMask: number, $minDepth: number):RaycastHit2D[];
        /**
         * Casts a line against Colliders in the Scene.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static LinecastAll($start: Vector2, $end: Vector2, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D[];
        
        public static LinecastNonAlloc($start: Vector2, $end: Vector2, $results: RaycastHit2D[]):number;
        
        public static LinecastNonAlloc($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask: number):number;
        
        public static LinecastNonAlloc($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask: number, $minDepth: number):number;
        /**
         * Casts a line against Colliders in the Scene. Note: This method will be deprecated in a future build and it is recommended to use Linecast instead.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @param start The start point of the line in world space.
         * @param end The end point of the line in world space.
         * @param results Returned array of objects that intersect the line.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @returns Returns the number of results placed in the results array.
         */
        public static LinecastNonAlloc($start: Vector2, $end: Vector2, $results: RaycastHit2D[], $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static Raycast($origin: Vector2, $direction: Vector2):RaycastHit2D;
        
        public static Raycast($origin: Vector2, $direction: Vector2, $distance: number):RaycastHit2D;
        
        public static Raycast($origin: Vector2, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D;
        
        public static Raycast($origin: Vector2, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D;
        /**
         * Casts a ray against Colliders in the Scene.
         * @param origin The point in 2D space where the ray originates.
         * @param direction A vector representing the direction of the ray.
         * @param distance The maximum distance over which to cast the ray.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static Raycast($origin: Vector2, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D;
        
        public static Raycast($origin: Vector2, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        /**
         * Casts a ray against Colliders in the Scene.
         * @param origin The point in 2D space where the ray originates.
         * @param direction A vector representing the direction of the ray.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param distance The maximum distance over which to cast the ray.
         * @returns Returns the number of results placed in the results array.
         */
        public static Raycast($origin: Vector2, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number):number;
        
        public static Raycast($origin: Vector2, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: number):number;
        
        public static RaycastNonAlloc($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[]):number;
        
        public static RaycastNonAlloc($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: number):number;
        
        public static RaycastNonAlloc($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number):number;
        
        public static RaycastNonAlloc($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number):number;
        /**
         * Casts a ray into the Scene. Note: This method will be deprecated in a future build and it is recommended to use Raycast instead.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @param origin The point in 2D space where the ray originates.
         * @param direction A vector representing the direction of the ray.
         * @param results Array to receive results.
         * @param distance The maximum distance over which to cast the ray.
         * @param layerMask Filter to check objects only on specific layers.
         * @returns Returns the number of results placed in the results array.
         */
        public static RaycastNonAlloc($origin: Vector2, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static RaycastAll($origin: Vector2, $direction: Vector2):RaycastHit2D[];
        
        public static RaycastAll($origin: Vector2, $direction: Vector2, $distance: number):RaycastHit2D[];
        
        public static RaycastAll($origin: Vector2, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D[];
        
        public static RaycastAll($origin: Vector2, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D[];
        /**
         * Casts a ray against Colliders in the Scene, returning all Colliders that contact with it.
         * @param origin The point in 2D space where the ray originates.
         * @param direction A vector representing the direction of the ray.
         * @param distance The maximum distance over which to cast the ray.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static RaycastAll($origin: Vector2, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D[];
        
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2):RaycastHit2D;
        
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number):RaycastHit2D;
        
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D;
        
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D;
        /**
         * Casts a circle against Colliders in the Scene, returning the first Collider to contact with it.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction A vector representing the direction of the circle.
         * @param distance The maximum distance over which to cast the circle.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D;
        
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        /**
         * Casts a circle against Colliders in the Scene, returning all Colliders that contact with it.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction A vector representing the direction of the circle.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param distance The maximum distance over which to cast the circle.
         * @returns Returns the number of results placed in the results array.
         */
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number):number;
        
        public static CircleCast($origin: Vector2, $radius: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: number):number;
        
        public static CircleCastAll($origin: Vector2, $radius: number, $direction: Vector2):RaycastHit2D[];
        
        public static CircleCastAll($origin: Vector2, $radius: number, $direction: Vector2, $distance: number):RaycastHit2D[];
        
        public static CircleCastAll($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D[];
        
        public static CircleCastAll($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D[];
        /**
         * Casts a circle against Colliders in the Scene, returning all Colliders that contact with it.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction A vector representing the direction of the circle.
         * @param distance The maximum distance over which to cast the circle.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static CircleCastAll($origin: Vector2, $radius: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D[];
        
        public static CircleCastNonAlloc($origin: Vector2, $radius: number, $direction: Vector2, $results: RaycastHit2D[]):number;
        
        public static CircleCastNonAlloc($origin: Vector2, $radius: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number):number;
        
        public static CircleCastNonAlloc($origin: Vector2, $radius: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number):number;
        
        public static CircleCastNonAlloc($origin: Vector2, $radius: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number):number;
        /**
         * Casts a circle into the Scene, returning Colliders that contact with it into the provided results array. Note: This method will be deprecated in a future build and it is recommended to use CircleCast instead.
         * @param origin The point in 2D space where the circle originates.
         * @param radius The radius of the circle.
         * @param direction A vector representing the direction of the circle.
         * @param results Array to receive results.
         * @param distance The maximum distance over which to cast the circle.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns Returns the number of results placed in the results array.
         */
        public static CircleCastNonAlloc($origin: Vector2, $radius: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2):RaycastHit2D;
        
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number):RaycastHit2D;
        
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D;
        
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D;
        /**
         * Casts a box against Colliders in the Scene, returning the first Collider to contact with it.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction A vector representing the direction of the box.
         * @param distance The maximum distance over which to cast the box.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D;
        
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        /**
         * Casts a box against the Colliders in the Scene and returns all Colliders that are in contact with it.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction A vector representing the direction of the box.
         * @param distance The maximum distance over which to cast the box.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Returns the number of results placed in the results array.
         */
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number):number;
        
        public static BoxCast($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: number):number;
        
        public static BoxCastAll($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2):RaycastHit2D[];
        
        public static BoxCastAll($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number):RaycastHit2D[];
        
        public static BoxCastAll($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D[];
        
        public static BoxCastAll($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D[];
        /**
         * Casts a box against Colliders in the Scene, returning all Colliders that contact with it.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction A vector representing the direction of the box.
         * @param distance The maximum distance over which to cast the box.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static BoxCastAll($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D[];
        
        public static BoxCastNonAlloc($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $results: RaycastHit2D[]):number;
        
        public static BoxCastNonAlloc($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number):number;
        
        public static BoxCastNonAlloc($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number):number;
        
        public static BoxCastNonAlloc($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number):number;
        /**
         * Casts a box into the Scene, returning Colliders that contact with it into the provided results array. Note: This method will be deprecated in a future build and it is recommended to use BoxCast instead.
         * @param origin The point in 2D space where the box originates.
         * @param size The size of the box.
         * @param angle The angle of the box (in degrees).
         * @param direction A vector representing the direction of the box.
         * @param results Array to receive results.
         * @param distance The maximum distance over which to cast the box.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns Returns the number of results placed in the results array.
         */
        public static BoxCastNonAlloc($origin: Vector2, $size: Vector2, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2):RaycastHit2D;
        
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number):RaycastHit2D;
        
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D;
        
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D;
        /**
         * Casts a capsule against Colliders in the Scene, returning the first Collider to contact with it.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param distance The maximum distance over which to cast the capsule.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns The cast results returned.
         */
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D;
        
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        /**
         * Casts a capsule against the Colliders in the Scene and returns all Colliders that are in contact with it.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @param distance The maximum distance over which to cast the capsule.
         * @returns Returns the number of results placed in the results array.
         */
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number):number;
        
        public static CapsuleCast($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: number):number;
        
        public static CapsuleCastAll($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2):RaycastHit2D[];
        
        public static CapsuleCastAll($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number):RaycastHit2D[];
        
        public static CapsuleCastAll($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $layerMask: number):RaycastHit2D[];
        
        public static CapsuleCastAll($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number):RaycastHit2D[];
        /**
         * Casts a capsule against Colliders in the Scene, returning all Colliders that contact with it.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param distance The maximum distance over which to cast the capsule.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns The cast results returned.
         */
        public static CapsuleCastAll($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):RaycastHit2D[];
        
        public static CapsuleCastNonAlloc($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $results: RaycastHit2D[]):number;
        
        public static CapsuleCastNonAlloc($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number):number;
        
        public static CapsuleCastNonAlloc($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number):number;
        
        public static CapsuleCastNonAlloc($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number):number;
        /**
         * Casts a capsule into the Scene, returning Colliders that contact with it into the provided results array. Note: This method will be deprecated in a future build and it is recommended to use CapsuleCast instead.
         * @param origin The point in 2D space where the capsule originates.
         * @param size The size of the capsule.
         * @param capsuleDirection The direction of the capsule.
         * @param angle The angle of the capsule (in degrees).
         * @param direction Vector representing the direction to cast the capsule.
         * @param results Array to receive results.
         * @param distance The maximum distance over which to cast the capsule.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns Returns the number of results placed in the results array.
         */
        public static CapsuleCastNonAlloc($origin: Vector2, $size: Vector2, $capsuleDirection: CapsuleDirection2D, $angle: number, $direction: Vector2, $results: RaycastHit2D[], $distance: number, $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static GetRayIntersection($ray: Ray):RaycastHit2D;
        
        public static GetRayIntersection($ray: Ray, $distance: number):RaycastHit2D;
        /**
         * Cast a 3D ray against the Colliders in the Scene returning the first Collider along the ray.
         * @param ray The 3D ray defining origin and direction to test.
         * @param distance The maximum distance over which to cast the ray.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @returns The cast results returned.
         */
        public static GetRayIntersection($ray: Ray, $distance: number, $layerMask: number):RaycastHit2D;
        
        public static GetRayIntersectionAll($ray: Ray):RaycastHit2D[];
        
        public static GetRayIntersectionAll($ray: Ray, $distance: number):RaycastHit2D[];
        /**
         * Cast a 3D ray against the Colliders in the Scene returning all the Colliders along the ray.
         * @param ray The 3D ray defining origin and direction to test.
         * @param distance The maximum distance over which to cast the ray.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @returns The cast results returned.
         */
        public static GetRayIntersectionAll($ray: Ray, $distance: number, $layerMask: number):RaycastHit2D[];
        
        public static GetRayIntersectionNonAlloc($ray: Ray, $results: RaycastHit2D[]):number;
        
        public static GetRayIntersectionNonAlloc($ray: Ray, $results: RaycastHit2D[], $distance: number):number;
        /**
         * Cast a 3D ray against the Colliders in the Scene returning the Colliders along the ray. Note: This method will be deprecated in a future build and it is recommended to use GetRayIntersection instead.
         * @param ray The 3D ray defining origin and direction to test.
         * @param distance The maximum distance over which to cast the ray.
         * @param layerMask Filter to detect Colliders only on certain layers.
         * @param results Array to receive results.
         * @returns The number of results returned.
         */
        public static GetRayIntersectionNonAlloc($ray: Ray, $results: RaycastHit2D[], $distance: number, $layerMask: number):number;
        
        public static OverlapPoint($point: Vector2):Collider2D;
        
        public static OverlapPoint($point: Vector2, $layerMask: number):Collider2D;
        
        public static OverlapPoint($point: Vector2, $layerMask: number, $minDepth: number):Collider2D;
        /**
         * Checks if a Collider overlaps a point in space.
         * @param point A point in world space.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The Collider overlapping the point.
         */
        public static OverlapPoint($point: Vector2, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D;
        /**
         * Checks if a Collider overlaps a point in world space.
         * @param point A point in world space.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapPoint($point: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public static OverlapPoint($point: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static OverlapPointAll($point: Vector2):Collider2D[];
        
        public static OverlapPointAll($point: Vector2, $layerMask: number):Collider2D[];
        
        public static OverlapPointAll($point: Vector2, $layerMask: number, $minDepth: number):Collider2D[];
        /**
         * Get a list of all Colliders that overlap a point in space.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @param point A point in space.
         * @param layerMask Filter to check objects only on specific layers.
         * @returns The cast results returned.
         */
        public static OverlapPointAll($point: Vector2, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D[];
        
        public static OverlapPointNonAlloc($point: Vector2, $results: Collider2D[]):number;
        
        public static OverlapPointNonAlloc($point: Vector2, $results: Collider2D[], $layerMask: number):number;
        
        public static OverlapPointNonAlloc($point: Vector2, $results: Collider2D[], $layerMask: number, $minDepth: number):number;
        /**
         * Get a list of all Colliders that overlap a point in space. Note: This method will be deprecated in a future build and it is recommended to use OverlapPoint instead.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @param point A point in space.
         * @param results Array to receive results.
         * @param layerMask Filter to check objects only on specific layers.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapPointNonAlloc($point: Vector2, $results: Collider2D[], $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static OverlapCircle($point: Vector2, $radius: number):Collider2D;
        
        public static OverlapCircle($point: Vector2, $radius: number, $layerMask: number):Collider2D;
        
        public static OverlapCircle($point: Vector2, $radius: number, $layerMask: number, $minDepth: number):Collider2D;
        /**
         * Checks if a Collider falls within a circular area.
         * @param point Centre of the circle.
         * @param radius The radius of the circle.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The Collider overlapping the circle.
         */
        public static OverlapCircle($point: Vector2, $radius: number, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D;
        /**
         * Checks if a Collider is within a circular area.
         * @param point Centre of the circle.
         * @param radius The radius of the circle.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapCircle($point: Vector2, $radius: number, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public static OverlapCircle($point: Vector2, $radius: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static OverlapCircleAll($point: Vector2, $radius: number):Collider2D[];
        
        public static OverlapCircleAll($point: Vector2, $radius: number, $layerMask: number):Collider2D[];
        
        public static OverlapCircleAll($point: Vector2, $radius: number, $layerMask: number, $minDepth: number):Collider2D[];
        /**
         * Get a list of all Colliders that fall within a circular area.
         * @param point The center of the circle.
         * @param radius The radius of the circle.
         * @param layerMask Filter to check objects only on specified layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results.
         */
        public static OverlapCircleAll($point: Vector2, $radius: number, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D[];
        
        public static OverlapCircleNonAlloc($point: Vector2, $radius: number, $results: Collider2D[]):number;
        
        public static OverlapCircleNonAlloc($point: Vector2, $radius: number, $results: Collider2D[], $layerMask: number):number;
        
        public static OverlapCircleNonAlloc($point: Vector2, $radius: number, $results: Collider2D[], $layerMask: number, $minDepth: number):number;
        /**
         * Get a list of all Colliders that fall within a circular area. Note: This method will be deprecated in a future build and it is recommended to use OverlapCircle instead.
         * @param point The center of the circle.
         * @param radius The radius of the circle.
         * @param results Array to receive results.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapCircleNonAlloc($point: Vector2, $radius: number, $results: Collider2D[], $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static OverlapBox($point: Vector2, $size: Vector2, $angle: number):Collider2D;
        
        public static OverlapBox($point: Vector2, $size: Vector2, $angle: number, $layerMask: number):Collider2D;
        
        public static OverlapBox($point: Vector2, $size: Vector2, $angle: number, $layerMask: number, $minDepth: number):Collider2D;
        /**
         * Checks if a Collider falls within a box area.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns The Collider overlapping the box.
         */
        public static OverlapBox($point: Vector2, $size: Vector2, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D;
        /**
         * Checks if a Collider falls within a box area.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapBox($point: Vector2, $size: Vector2, $angle: number, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public static OverlapBox($point: Vector2, $size: Vector2, $angle: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static OverlapBoxAll($point: Vector2, $size: Vector2, $angle: number):Collider2D[];
        
        public static OverlapBoxAll($point: Vector2, $size: Vector2, $angle: number, $layerMask: number):Collider2D[];
        
        public static OverlapBoxAll($point: Vector2, $size: Vector2, $angle: number, $layerMask: number, $minDepth: number):Collider2D[];
        /**
         * Get a list of all Colliders that fall within a box area.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns The cast results returned.
         */
        public static OverlapBoxAll($point: Vector2, $size: Vector2, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D[];
        
        public static OverlapBoxNonAlloc($point: Vector2, $size: Vector2, $angle: number, $results: Collider2D[]):number;
        
        public static OverlapBoxNonAlloc($point: Vector2, $size: Vector2, $angle: number, $results: Collider2D[], $layerMask: number):number;
        
        public static OverlapBoxNonAlloc($point: Vector2, $size: Vector2, $angle: number, $results: Collider2D[], $layerMask: number, $minDepth: number):number;
        /**
         * Get a list of all Colliders that fall within a box area. Note: This method will be deprecated in a future build and it is recommended to use OverlapBox instead.
         * @param point The center of the box.
         * @param size The size of the box.
         * @param angle The angle of the box.
         * @param results Array to receive results.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapBoxNonAlloc($point: Vector2, $size: Vector2, $angle: number, $results: Collider2D[], $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static OverlapArea($pointA: Vector2, $pointB: Vector2):Collider2D;
        
        public static OverlapArea($pointA: Vector2, $pointB: Vector2, $layerMask: number):Collider2D;
        
        public static OverlapArea($pointA: Vector2, $pointB: Vector2, $layerMask: number, $minDepth: number):Collider2D;
        /**
         * Checks if a Collider falls within a rectangular area.
         * @param pointA One corner of the rectangle.
         * @param pointB Diagonally opposite the point A corner of the rectangle.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The Collider overlapping the area.
         */
        public static OverlapArea($pointA: Vector2, $pointB: Vector2, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D;
        /**
         * Checks if a Collider falls within a rectangular area.
         * @param pointA One corner of the rectangle.
         * @param pointB Diagonally opposite the point A corner of the rectangle.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapArea($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public static OverlapArea($pointA: Vector2, $pointB: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static OverlapAreaAll($pointA: Vector2, $pointB: Vector2):Collider2D[];
        
        public static OverlapAreaAll($pointA: Vector2, $pointB: Vector2, $layerMask: number):Collider2D[];
        
        public static OverlapAreaAll($pointA: Vector2, $pointB: Vector2, $layerMask: number, $minDepth: number):Collider2D[];
        /**
         * Get a list of all Colliders that fall within a rectangular area.
         * @param pointA One corner of the rectangle.
         * @param pointB Diagonally opposite the point A corner of the rectangle.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns The cast results returned.
         */
        public static OverlapAreaAll($pointA: Vector2, $pointB: Vector2, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D[];
        
        public static OverlapAreaNonAlloc($pointA: Vector2, $pointB: Vector2, $results: Collider2D[]):number;
        
        public static OverlapAreaNonAlloc($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask: number):number;
        
        public static OverlapAreaNonAlloc($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask: number, $minDepth: number):number;
        /**
         * Get a list of all Colliders that fall within a specified area. Note: This method will be deprecated in a future build and it is recommended to use OverlapArea instead.
         * @param pointA One corner of the rectangle.
         * @param pointB Diagonally opposite the point A corner of the rectangle.
         * @param results Array to receive results.
         * @param layerMask Filter to check objects only on specified layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than or equal to this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than or equal to this value.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapAreaNonAlloc($pointA: Vector2, $pointB: Vector2, $results: Collider2D[], $layerMask: number, $minDepth: number, $maxDepth: number):number;
        
        public static OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number):Collider2D;
        
        public static OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $layerMask: number):Collider2D;
        
        public static OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number):Collider2D;
        /**
         * Checks if a Collider falls within a capsule area.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns The Collider overlapping the capsule.
         */
        public static OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D;
        /**
         * Checks if a Collider falls within a capsule area.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public static OverlapCapsule($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static OverlapCapsuleAll($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number):Collider2D[];
        
        public static OverlapCapsuleAll($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $layerMask: number):Collider2D[];
        
        public static OverlapCapsuleAll($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number):Collider2D[];
        /**
         * Get a list of all Colliders that fall within a capsule area.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns The cast results returned.
         */
        public static OverlapCapsuleAll($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $layerMask: number, $minDepth: number, $maxDepth: number):Collider2D[];
        
        public static OverlapCapsuleNonAlloc($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $results: Collider2D[]):number;
        
        public static OverlapCapsuleNonAlloc($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $results: Collider2D[], $layerMask: number):number;
        
        public static OverlapCapsuleNonAlloc($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $results: Collider2D[], $layerMask: number, $minDepth: number):number;
        /**
         * Get a list of all Colliders that fall within a capsule area. Note: This method will be deprecated in a future build and it is recommended to use OverlapCapsule instead.
         * @param point The center of the capsule.
         * @param size The size of the capsule.
         * @param direction The direction of the capsule.
         * @param angle The angle of the capsule.
         * @param results Array to receive results.
         * @param layerMask Filter to check objects only on specific layers.
         * @param minDepth Only include objects with a Z coordinate (depth) greater than this value.
         * @param maxDepth Only include objects with a Z coordinate (depth) less than this value.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapCapsuleNonAlloc($point: Vector2, $size: Vector2, $direction: CapsuleDirection2D, $angle: number, $results: Collider2D[], $layerMask: number, $minDepth: number, $maxDepth: number):number;
        /**
         * Gets a list of all Colliders that overlap the given Collider.
         * @param Collider The Collider that defines the area used to query for other Collider overlaps.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public static OverlapCollider($collider: Collider2D, $contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public static OverlapCollider($collider: Collider2D, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Retrieves all contact points in for contacts between with the collider1 and collider2, with the results filtered by the ContactFilter2D.
         * @param collider1 The Collider to check if it has contacts against collider2.
         * @param collider2 The Collider to check if it has contacts against collider1.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public static GetContacts($collider1: Collider2D, $collider2: Collider2D, $contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]):number;
        /**
         * Retrieves all contact points in contact with the Collider.
         * @param Collider The Collider to retrieve contacts for.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public static GetContacts($collider: Collider2D, $contacts: ContactPoint2D[]):number;
        /**
         * Retrieves all contact points in contact with the Collider, with the results filtered by the ContactFilter2D.
         * @param Collider The Collider to retrieve contacts for.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public static GetContacts($collider: Collider2D, $contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]):number;
        /**
         * Retrieves all Colliders in contact with the Collider.
         * @param Collider The Collider to retrieve contacts for.
         * @param Colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of Colliders placed in the Colliders array.
         */
        public static GetContacts($collider: Collider2D, $colliders: Collider2D[]):number;
        /**
         * Retrieves all Colliders in contact with the Collider, with the results filtered by the ContactFilter2D.
         * @param Collider The Collider to retrieve contacts for.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param Colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of Colliders placed in the Colliders array.
         */
        public static GetContacts($collider: Collider2D, $contactFilter: ContactFilter2D, $colliders: Collider2D[]):number;
        /**
         * Retrieves all contact points in contact with any of the Collider(s) attached to this rigidbody.
         * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public static GetContacts($rigidbody: Rigidbody2D, $contacts: ContactPoint2D[]):number;
        /**
         * Retrieves all contact points in contact with any of the Collider(s) attached to this rigidbody, with the results filtered by the ContactFilter2D.
         * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public static GetContacts($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]):number;
        /**
         * Retrieves all Colliders in contact with any of the Collider(s) attached to this rigidbody.
         * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
         * @param Colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of Colliders placed in the Colliders array.
         */
        public static GetContacts($rigidbody: Rigidbody2D, $colliders: Collider2D[]):number;
        /**
         * Retrieves all Colliders in contact with any of the Collider(s) attached to this rigidbody, with the results filtered by the ContactFilter2D.
         * @param rigidbody The rigidbody to retrieve contacts for.  All Colliders attached to this rigidbody will be checked.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param Colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of Colliders placed in the Colliders array.
         */
        public static GetContacts($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $colliders: Collider2D[]):number;
        
        public static GetContacts($collider1: Collider2D, $collider2: Collider2D, $contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        
        public static GetContacts($collider: Collider2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        
        public static GetContacts($collider: Collider2D, $contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        
        public static GetContacts($collider: Collider2D, $colliders: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static GetContacts($collider: Collider2D, $contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static GetContacts($rigidbody: Rigidbody2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        
        public static GetContacts($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        
        public static GetContacts($rigidbody: Rigidbody2D, $colliders: System_Collections_Generic.List$1<Collider2D>):number;
        
        public static GetContacts($rigidbody: Rigidbody2D, $contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>):number;
        
                    
    }
    /**
     * A selection of modes that control when Unity executes the 2D physics simulation.
     */
    enum SimulationMode2D { FixedUpdate = 0, Update = 1, Script = 2 }
    /**
     * A set of options that control how physics operates when using the job system to multithread the physics simulation.
     */
    class PhysicsJobOptions2D extends System.ValueType {
        /**
         * Should physics simulation use multithreading?
         */
        public get useMultithreading(): boolean;
        public set useMultithreading(value: boolean);
        /**
         * Should physics simulation sort multi-threaded results to maintain processing order consistency?
         */
        public get useConsistencySorting(): boolean;
        public set useConsistencySorting(value: boolean);
        /**
         * Controls the minimum number of Rigidbody2D being interpolated in each simulation job.
         */
        public get interpolationPosesPerJob(): number;
        public set interpolationPosesPerJob(value: number);
        /**
         * Controls the minimum number of new contacts to find in each simulation job.
         */
        public get newContactsPerJob(): number;
        public set newContactsPerJob(value: number);
        /**
         * Controls the minimum number of contacts to collide in each simulation job.
         */
        public get collideContactsPerJob(): number;
        public set collideContactsPerJob(value: number);
        /**
         * Controls the minimum number of flags to be cleared in each simulation job.
         */
        public get clearFlagsPerJob(): number;
        public set clearFlagsPerJob(value: number);
        /**
         * Controls the minimum number of bodies to be cleared in each simulation job.
         */
        public get clearBodyForcesPerJob(): number;
        public set clearBodyForcesPerJob(value: number);
        /**
         * Controls the minimum number of fixtures to synchronize in the broadphase during discrete island solving in each simulation job.
         */
        public get syncDiscreteFixturesPerJob(): number;
        public set syncDiscreteFixturesPerJob(value: number);
        /**
         * Controls the minimum number of fixtures to synchronize in the broadphase during continuous island solving in each simulation job.
         */
        public get syncContinuousFixturesPerJob(): number;
        public set syncContinuousFixturesPerJob(value: number);
        /**
         * Controls the minimum number of nearest contacts to find in each simulation job.
         */
        public get findNearestContactsPerJob(): number;
        public set findNearestContactsPerJob(value: number);
        /**
         * Controls the minimum number of trigger contacts to update in each simulation job.
         */
        public get updateTriggerContactsPerJob(): number;
        public set updateTriggerContactsPerJob(value: number);
        /**
         * The minimum threshold cost of all bodies, contacts and joints in an island during discrete island solving.
         */
        public get islandSolverCostThreshold(): number;
        public set islandSolverCostThreshold(value: number);
        /**
         * Scales the cost of each body during discrete island solving.
         */
        public get islandSolverBodyCostScale(): number;
        public set islandSolverBodyCostScale(value: number);
        /**
         * Scales the cost of each contact during discrete island solving.
         */
        public get islandSolverContactCostScale(): number;
        public set islandSolverContactCostScale(value: number);
        /**
         * Scales the cost of each joint during discrete island solving.
         */
        public get islandSolverJointCostScale(): number;
        public set islandSolverJointCostScale(value: number);
        /**
         * Controls the minimum number of bodies to solve in each simulation job when performing island solving.
         */
        public get islandSolverBodiesPerJob(): number;
        public set islandSolverBodiesPerJob(value: number);
        /**
         * Controls the minimum number of contacts to solve in each simulation job when performing island solving.
         */
        public get islandSolverContactsPerJob(): number;
        public set islandSolverContactsPerJob(value: number);
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * Represents the separation or overlap of two Collider2D.
     */
    class ColliderDistance2D extends System.ValueType {
        /**
         * A point on a Collider2D that is a specific distance away from pointB.
         */
        public get pointA(): Vector2;
        public set pointA(value: Vector2);
        /**
         * A point on a Collider2D that is a specific distance away from pointA.
         */
        public get pointB(): Vector2;
        public set pointB(value: Vector2);
        /**
         * A normalized vector that points from pointB to pointA.
         */
        public get normal(): Vector2;
        /**
         * Gets the distance between two colliders.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * Gets whether the distance represents an overlap or not.
         */
        public get isOverlapped(): boolean;
        /**
         * Gets whether the distance is valid or not.
         */
        public get isValid(): boolean;
        public set isValid(value: boolean);
        
        public get_Clone(): ColliderDistance2D;            
    }
    /**
     * Rigidbody physics component for 2D sprites.
     */
    class Rigidbody2D extends Component {
        /**
         * The position of the rigidbody.
         */
        public get position(): Vector2;
        public set position(value: Vector2);
        /**
         * The rotation of the rigidbody.
         */
        public get rotation(): number;
        public set rotation(value: number);
        /**
         * Linear velocity of the Rigidbody in units per second.
         */
        public get velocity(): Vector2;
        public set velocity(value: Vector2);
        /**
         * Angular velocity in degrees per second.
         */
        public get angularVelocity(): number;
        public set angularVelocity(value: number);
        /**
         * Should the total rigid-body mass be automatically calculated from the Collider2D.density of attached colliders?
         */
        public get useAutoMass(): boolean;
        public set useAutoMass(value: boolean);
        /**
         * Mass of the Rigidbody.
         */
        public get mass(): number;
        public set mass(value: number);
        /**
         * The PhysicsMaterial2D that is applied to all Collider2D attached to this Rigidbody2D.
         */
        public get sharedMaterial(): PhysicsMaterial2D;
        public set sharedMaterial(value: PhysicsMaterial2D);
        /**
         * The center of mass of the rigidBody in local space.
         */
        public get centerOfMass(): Vector2;
        public set centerOfMass(value: Vector2);
        /**
         * Gets the center of mass of the rigidBody in global space.
         */
        public get worldCenterOfMass(): Vector2;
        /**
         * The Rigidbody's resistance to changes in angular velocity (rotation).
         */
        public get inertia(): number;
        public set inertia(value: number);
        /**
         * Coefficient of drag.
         */
        public get drag(): number;
        public set drag(value: number);
        /**
         * Coefficient of angular drag.
         */
        public get angularDrag(): number;
        public set angularDrag(value: number);
        /**
         * The degree to which this object is affected by gravity.
         */
        public get gravityScale(): number;
        public set gravityScale(value: number);
        /**
         * The physical behaviour type of the Rigidbody2D.
         */
        public get bodyType(): RigidbodyType2D;
        public set bodyType(value: RigidbodyType2D);
        /**
         * Should kinematickinematic and kinematicstatic collisions be allowed?
         */
        public get useFullKinematicContacts(): boolean;
        public set useFullKinematicContacts(value: boolean);
        /**
         * Should this rigidbody be taken out of physics control?
         */
        public get isKinematic(): boolean;
        public set isKinematic(value: boolean);
        /**
         * Controls whether physics will change the rotation of the object.
         */
        public get freezeRotation(): boolean;
        public set freezeRotation(value: boolean);
        /**
         * Controls which degrees of freedom are allowed for the simulation of this Rigidbody2D.
         */
        public get constraints(): RigidbodyConstraints2D;
        public set constraints(value: RigidbodyConstraints2D);
        /**
         * Indicates whether the rigid body should be simulated or not by the physics system.
         */
        public get simulated(): boolean;
        public set simulated(value: boolean);
        /**
         * Physics interpolation used between updates.
         */
        public get interpolation(): RigidbodyInterpolation2D;
        public set interpolation(value: RigidbodyInterpolation2D);
        /**
         * The sleep state that the rigidbody will initially be in.
         */
        public get sleepMode(): RigidbodySleepMode2D;
        public set sleepMode(value: RigidbodySleepMode2D);
        /**
         * The method used by the physics engine to check if two objects have collided.
         */
        public get collisionDetectionMode(): CollisionDetectionMode2D;
        public set collisionDetectionMode(value: CollisionDetectionMode2D);
        /**
         * Returns the number of Collider2D attached to this Rigidbody2D.
         */
        public get attachedColliderCount(): number;
        
        public constructor();
        /**
         * Sets the rotation of the Rigidbody2D to angle (given in degrees).
         * @param angle The rotation of the Rigidbody (in degrees).
         */
        public SetRotation($angle: number):void;
        /**
         * Sets the rotation of the Rigidbody2D to the z-axis rotation extracted from the full 3D rotation.
         * @param rotation Full 3D rotation used to extract only the z-axis rotation.
         */
        public SetRotation($rotation: Quaternion):void;
        /**
         * Moves the rigidbody to position.
         * @param position The new position for the Rigidbody object.
         */
        public MovePosition($position: Vector2):void;
        /**
         * Rotates the Rigidbody to angle (given in degrees).
         * @param angle The new rotation angle for the Rigidbody object.
         */
        public MoveRotation($angle: number):void;
        /**
         * An overload of MoveRotation that allows a full 3D rotation as an argument.
         * @param rotation Full 3D rotation used to extract only the z-axis rotation.
         */
        public MoveRotation($rotation: Quaternion):void;
        /**
         * Is the rigidbody "sleeping"?
         */
        public IsSleeping():boolean;
        /**
         * Is the rigidbody "awake"?
         */
        public IsAwake():boolean;
        /**
         * Make the rigidbody "sleep".
         */
        public Sleep():void;
        /**
         * Disables the "sleeping" state of a rigidbody.
         */
        public WakeUp():void;
        /**
         * Checks whether the collider  is touching any of the collider(s) attached to this rigidbody or not.
         * @param collider The collider to check if it is touching any of the collider(s) attached to this rigidbody.
         * @returns Whether the collider is touching any of the collider(s) attached to this rigidbody or not.
         */
        public IsTouching($collider: Collider2D):boolean;
        /**
         * Checks whether the collider  is touching any of the collider(s) attached to this rigidbody or not with the results filtered by the ContactFilter2D.
         * @param collider The collider to check if it is touching any of the collider(s) attached to this rigidbody.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Whether the collider is touching any of the collider(s) attached to this rigidbody or not.
         */
        public IsTouching($collider: Collider2D, $contactFilter: ContactFilter2D):boolean;
        /**
         * Checks whether any collider is touching any of the collider(s) attached to this rigidbody or not with the results filtered by the ContactFilter2D.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @returns Whether any collider is touching any of the collider(s) attached to this rigidbody or not.
         */
        public IsTouching($contactFilter: ContactFilter2D):boolean;
        
        public IsTouchingLayers():boolean;
        /**
         * Checks whether any of the collider(s) attached to this rigidbody are touching any colliders on the specified layerMask or not.
         * @param layerMask Any colliders on any of these layers count as touching.
         * @returns Whether any of the collider(s) attached to this rigidbody are touching any colliders on the specified layerMask or not.
         */
        public IsTouchingLayers($layerMask: number):boolean;
        /**
         * Check if any of the Rigidbody2D colliders overlap a point in space.
         * @param point A point in world space.
         * @returns Whether the point overlapped any of the Rigidbody2D colliders.
         */
        public OverlapPoint($point: Vector2):boolean;
        /**
         * Calculates the minimum distance of this collider against all Collider2D attached to this Rigidbody2D.
         * @param collider A collider used to calculate the minimum distance against all colliders attached to this Rigidbody2D.
         * @returns The minimum distance of collider against all colliders attached to this Rigidbody2D.
         */
        public Distance($collider: Collider2D):ColliderDistance2D;
        /**
         * Returns a point on the perimeter of all enabled Colliders attached to this Rigidbody that is closest to the specified position.
         * @param position The position from which to find the closest point on this Rigidbody.
         * @returns A point on the perimeter of a Collider attached to this rigidbody that is closest to the specified position.
         */
        public ClosestPoint($position: Vector2):Vector2;
        
        public AddForce($force: Vector2):void;
        /**
         * Apply a force to the rigidbody.
         * @param force Components of the force in the X and Y axes.
         * @param mode The method used to apply the specified force.
         */
        public AddForce($force: Vector2, $mode: ForceMode2D):void;
        
        public AddRelativeForce($relativeForce: Vector2):void;
        /**
         * Adds a force to the rigidbody2D relative to its coordinate system.
         * @param relativeForce Components of the force in the X and Y axes.
         * @param mode The method used to apply the specified force.
         */
        public AddRelativeForce($relativeForce: Vector2, $mode: ForceMode2D):void;
        
        public AddForceAtPosition($force: Vector2, $position: Vector2):void;
        /**
         * Apply a force at a given position in space.
         * @param force Components of the force in the X and Y axes.
         * @param position Position in world space to apply the force.
         * @param mode The method used to apply the specified force.
         */
        public AddForceAtPosition($force: Vector2, $position: Vector2, $mode: ForceMode2D):void;
        
        public AddTorque($torque: number):void;
        /**
         * Apply a torque at the rigidbody's centre of mass.
         * @param torque Torque to apply.
         * @param mode The force mode to use.
         */
        public AddTorque($torque: number, $mode: ForceMode2D):void;
        /**
         * Get a local space point given the point point in rigidBody global space.
         * @param point The global space point to transform into local space.
         */
        public GetPoint($point: Vector2):Vector2;
        /**
         * Get a global space point given the point relativePoint in rigidBody local space.
         * @param relativePoint The local space point to transform into global space.
         */
        public GetRelativePoint($relativePoint: Vector2):Vector2;
        /**
         * Get a local space vector given the vector vector in rigidBody global space.
         * @param vector The global space vector to transform into a local space vector.
         */
        public GetVector($vector: Vector2):Vector2;
        /**
         * Get a global space vector given the vector relativeVector in rigidBody local space.
         * @param relativeVector The local space vector to transform into a global space vector.
         */
        public GetRelativeVector($relativeVector: Vector2):Vector2;
        /**
         * The velocity of the rigidbody at the point Point in global space.
         * @param point The global space point to calculate velocity for.
         */
        public GetPointVelocity($point: Vector2):Vector2;
        /**
         * The velocity of the rigidbody at the point Point in local space.
         * @param relativePoint The local space point to calculate velocity for.
         */
        public GetRelativePointVelocity($relativePoint: Vector2):Vector2;
        /**
         * Get a list of all Colliders that overlap all Colliders attached to this Rigidbody2D.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth.  Note that normal angle is not used for overlap testing.
         * @param results The array to receive results.  The size of the array determines the maximum number of results that can be returned.
         * @returns Returns the number of results placed in the results array.
         */
        public OverlapCollider($contactFilter: ContactFilter2D, $results: Collider2D[]):number;
        
        public OverlapCollider($contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Retrieves all contact points for all of the Collider(s) attached to this Rigidbody.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public GetContacts($contacts: ContactPoint2D[]):number;
        
        public GetContacts($contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        /**
         * Retrieves all contact points for all of the Collider(s) attached to this Rigidbody, with the results filtered by the ContactFilter2D.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public GetContacts($contactFilter: ContactFilter2D, $contacts: ContactPoint2D[]):number;
        
        public GetContacts($contactFilter: ContactFilter2D, $contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        /**
         * Retrieves all Colliders in contact with any of the Collider(s) attached to this Rigidbody.
         * @param colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of colliders placed in the colliders array.
         */
        public GetContacts($colliders: Collider2D[]):number;
        
        public GetContacts($colliders: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Retrieves all Colliders in contact with any of the Collider(s) attached to this rigidbody, with the results filtered by the ContactFilter2D.
         * @param contactFilter The contact filter used to filter the results differently, such as by layer mask, Z depth, or normal angle.
         * @param colliders An array of Collider2D used to receive the results.
         * @returns Returns the number of colliders placed in the colliders array.
         */
        public GetContacts($contactFilter: ContactFilter2D, $colliders: Collider2D[]):number;
        
        public GetContacts($contactFilter: ContactFilter2D, $colliders: System_Collections_Generic.List$1<Collider2D>):number;
        /**
         * Returns all Collider2D that are attached to this Rigidbody2D.
         * @param results An array of Collider2D used to receive the results.
         * @returns Returns the number of Collider2D placed in the results array.
         */
        public GetAttachedColliders($results: Collider2D[]):number;
        
        public GetAttachedColliders($results: System_Collections_Generic.List$1<Collider2D>):number;
        
        public Cast($direction: Vector2, $results: RaycastHit2D[]):number;
        /**
         * All the Collider2D shapes attached to the Rigidbody2D are cast into the Scene starting at each Collider position ignoring the Colliders attached to the same Rigidbody2D.
         * @param direction Vector representing the direction to cast each Collider2D shape.
         * @param results Array to receive results.
         * @param distance Maximum distance over which to cast the Collider(s).
         * @returns Returns the number of results placed in the results array.
         */
        public Cast($direction: Vector2, $results: RaycastHit2D[], $distance: number):number;
        
        public Cast($direction: Vector2, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance?: number):number;
        
        public Cast($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[]):number;
        /**
         * All the Collider2D shapes attached to the Rigidbody2D are cast into the Scene starting at each Collider position ignoring the Colliders attached to the same Rigidbody2D.
         * @param direction Vector representing the direction to cast each Collider2D shape.
         * @param contactFilter Filter results defined by the contact filter.
         * @param results Array to receive results.
         * @param distance Maximum distance over which to cast the Collider(s).
         * @returns Returns the number of results placed in the results array.
         */
        public Cast($direction: Vector2, $contactFilter: ContactFilter2D, $results: RaycastHit2D[], $distance: number):number;
        
        public Cast($direction: Vector2, $contactFilter: ContactFilter2D, $results: System_Collections_Generic.List$1<RaycastHit2D>, $distance: number):number;
        
                    
    }
    /**
     * Details about a specific point of contact involved in a 2D physics collision.
     */
    class ContactPoint2D extends System.ValueType {
        /**
         * The point of contact between the two colliders in world space.
         */
        public get point(): Vector2;
        /**
         * Surface normal at the contact point.
         */
        public get normal(): Vector2;
        /**
         * Gets the distance between the colliders at the contact point.
         */
        public get separation(): number;
        /**
         * Gets the impulse applied at the contact point along the ContactPoint2D.normal.
         */
        public get normalImpulse(): number;
        /**
         * Gets the impulse applied at the contact point which is perpendicular to the ContactPoint2D.normal.
         */
        public get tangentImpulse(): number;
        /**
         * Gets the relative velocity of the two colliders at the contact point (Read Only).
         */
        public get relativeVelocity(): Vector2;
        /**
         * The incoming Collider2D involved in the collision with the otherCollider.
         */
        public get collider(): Collider2D;
        /**
         * The other Collider2D involved in the collision with the collider.
         */
        public get otherCollider(): Collider2D;
        /**
         * The incoming Rigidbody2D involved in the collision with the otherRigidbody.
         */
        public get rigidbody(): Rigidbody2D;
        /**
         * The other Rigidbody2D involved in the collision with the rigidbody.
         */
        public get otherRigidbody(): Rigidbody2D;
        /**
         * Indicates whether the collision response or reaction is enabled or disabled.
         */
        public get enabled(): boolean;
        
        public get_Clone(): ContactPoint2D;            
    }
    /**
     * Use these flags to constrain motion of the Rigidbody2D.
     */
    enum RigidbodyConstraints2D { None = 0, FreezePositionX = 1, FreezePositionY = 2, FreezeRotation = 4, FreezePosition = 3, FreezeAll = 7 }
    /**
     * Interpolation mode for Rigidbody2D objects.
     */
    enum RigidbodyInterpolation2D { None = 0, Interpolate = 1, Extrapolate = 2 }
    /**
     * Settings for a Rigidbody2D's initial sleep state.
     */
    enum RigidbodySleepMode2D { NeverSleep = 0, StartAwake = 1, StartAsleep = 2 }
    /**
     * Controls how collisions are detected when a Rigidbody2D moves.
     */
    enum CollisionDetectionMode2D { None = 0, Discrete = 0, Continuous = 1 }
    /**
     * The physical behaviour type of the Rigidbody2D.
     */
    enum RigidbodyType2D { Dynamic = 0, Kinematic = 1, Static = 2 }
    /**
     * Option for how to apply a force using Rigidbody2D.AddForce.
     */
    enum ForceMode2D { Force = 0, Impulse = 1 }
    /**
     * Represents the state of a joint limit.
     */
    enum JointLimitState2D { Inactive = 0, LowerLimit = 1, UpperLimit = 2, EqualLimits = 3 }
    /**
     * Selects the source and/or target to be used by an Effector2D.
     */
    enum EffectorSelection2D { Rigidbody = 0, Collider = 1 }
    /**
     * The mode used to apply Effector2D forces.
     */
    enum EffectorForceMode2D { Constant = 0, InverseLinear = 1, InverseSquared = 2 }
    /**
     * Specifies Layers to use in a Physics.Raycast.
     */
    interface LayerMask extends System.ValueType {
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Collision details returned by 2D physics callback functions.
     */
    class Collision2D extends System.Object {
        /**
         * The incoming Collider2D involved in the collision with the otherCollider.
         */
        public get collider(): Collider2D;
        /**
         * The other Collider2D involved in the collision with the collider.
         */
        public get otherCollider(): Collider2D;
        /**
         * The incoming Rigidbody2D involved in the collision with the otherRigidbody.
         */
        public get rigidbody(): Rigidbody2D;
        /**
         * The other Rigidbody2D involved in the collision with the rigidbody.
         */
        public get otherRigidbody(): Rigidbody2D;
        /**
         * The Transform of the incoming object involved in the collision.
         */
        public get transform(): Transform;
        /**
         * The incoming GameObject involved in the collision.
         */
        public get gameObject(): GameObject;
        /**
         * The relative linear velocity of the two colliding objects (Read Only).
         */
        public get relativeVelocity(): Vector2;
        /**
         * Indicates whether the collision response or reaction is enabled or disabled.
         */
        public get enabled(): boolean;
        /**
         * The specific points of contact with the incoming Collider2D. You should avoid using this as it produces memory garbage. Use GetContact or GetContacts instead.
         */
        public get contacts(): ContactPoint2D[];
        /**
         * Gets the number of contacts for this collision.
         */
        public get contactCount(): number;
        
        public constructor();
        /**
         * Gets the contact point at the specified index.
         * @param index The index of the contact to retrieve.
         * @returns The contact at the specified index.
         */
        public GetContact($index: number):ContactPoint2D;
        /**
         * Retrieves all contact points for contacts between collider and otherCollider.
         * @param contacts An array of ContactPoint2D used to receive the results.
         * @returns Returns the number of contacts placed in the contacts array.
         */
        public GetContacts($contacts: ContactPoint2D[]):number;
        
        public GetContacts($contacts: System_Collections_Generic.List$1<ContactPoint2D>):number;
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Angular limits on the rotation of a Rigidbody2D object around a HingeJoint2D.
     */
    class JointAngleLimits2D extends System.ValueType {
        /**
         * Lower angular limit of rotation.
         */
        public get min(): number;
        public set min(value: number);
        /**
         * Upper angular limit of rotation.
         */
        public get max(): number;
        public set max(value: number);
        
        public get_Clone(): JointAngleLimits2D;            
    }
    /**
     * Motion limits of a Rigidbody2D object along a SliderJoint2D.
     */
    class JointTranslationLimits2D extends System.ValueType {
        /**
         * Minimum distance the Rigidbody2D object can move from the Slider Joint's anchor.
         */
        public get min(): number;
        public set min(value: number);
        /**
         * Maximum distance the Rigidbody2D object can move from the Slider Joint's anchor.
         */
        public get max(): number;
        public set max(value: number);
        
        public get_Clone(): JointTranslationLimits2D;            
    }
    /**
     * Parameters for the optional motor force applied to a Joint2D.
     */
    class JointMotor2D extends System.ValueType {
        /**
         * The desired speed for the Rigidbody2D to reach as it moves with the joint.
         */
        public get motorSpeed(): number;
        public set motorSpeed(value: number);
        /**
         * The maximum force that can be applied to the Rigidbody2D at the joint to attain the target speed.
         */
        public get maxMotorTorque(): number;
        public set maxMotorTorque(value: number);
        
        public get_Clone(): JointMotor2D;            
    }
    /**
     * Joint suspension is used to define how suspension works on a WheelJoint2D.
     */
    class JointSuspension2D extends System.ValueType {
        /**
         * The amount by which the suspension spring force is reduced in proportion to the movement speed.
         */
        public get dampingRatio(): number;
        public set dampingRatio(value: number);
        /**
         * The frequency at which the suspension spring oscillates.
         */
        public get frequency(): number;
        public set frequency(value: number);
        /**
         * The world angle (in degrees) along which the suspension will move.
         */
        public get angle(): number;
        public set angle(value: number);
        
        public get_Clone(): JointSuspension2D;            
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
    }
    /**
     * Asset type that defines the surface properties of a Collider2D.
     */
    class PhysicsMaterial2D extends Object {
        /**
         * The degree of elasticity during collisions.
         */
        public get bounciness(): number;
        public set bounciness(value: number);
        /**
         * Coefficient of friction.
         */
        public get friction(): number;
        public set friction(value: number);
        
        public constructor();
        
        public constructor($name: string);
        
                    
    }
    /**
     * A Collider that can merge other Colliders together.
     */
    class CompositeCollider2D extends Collider2D {
        /**
         * Specifies the type of geometry the Composite Collider should generate.
         */
        public get geometryType(): UnityEngine_CompositeCollider2D.GeometryType;
        public set geometryType(value: UnityEngine_CompositeCollider2D.GeometryType);
        /**
         * Specifies when to generate the Composite Collider geometry.
         */
        public get generationType(): UnityEngine_CompositeCollider2D.GenerationType;
        public set generationType(value: UnityEngine_CompositeCollider2D.GenerationType);
        /**
         * Controls the minimum distance allowed between generated vertices.
         */
        public get vertexDistance(): number;
        public set vertexDistance(value: number);
        /**
         * Controls the radius of all edges created by the Collider.
         */
        public get edgeRadius(): number;
        public set edgeRadius(value: number);
        /**
         * Vertices are offset by this distance when compositing multiple physic shapes. Any vertices between shapes within this distance are combined.
         */
        public get offsetDistance(): number;
        public set offsetDistance(value: number);
        /**
         * The number of paths in the Collider.
         */
        public get pathCount(): number;
        /**
         * Gets the total number of points in all the paths within the Collider.
         */
        public get pointCount(): number;
        
        public constructor();
        /**
         * Regenerates the Composite Collider geometry.
         */
        public GenerateGeometry():void;
        /**
         * Gets the number of points in the specified path from the Collider by its index.
         * @param index The index of the path from 0 to pathCount minus 1.
         * @returns Returns the number of points in the path specified by index.
         */
        public GetPathPointCount($index: number):number;
        /**
         * Gets a path from the Collider by its index.
         * @param index The index of the path from 0 to pathCount minus 1.
         * @param points An ordered array of the vertices (points) in the selected path.
         * @returns Returns the number of points placed in the points array.
         */
        public GetPath($index: number, $points: Vector2[]):number;
        
        public GetPath($index: number, $points: System_Collections_Generic.List$1<Vector2>):number;
        
                    
    }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    /**
     * Collider for 2D physics representing an circle.
     */
    class CircleCollider2D extends Collider2D {
        /**
         * Radius of the circle.
         */
        public get radius(): number;
        public set radius(value: number);
        
        public constructor();
        
                    
    }
    /**
     * A capsule-shaped primitive collider.
     */
    class CapsuleCollider2D extends Collider2D {
        /**
         * The width and height of the capsule area.
         */
        public get size(): Vector2;
        public set size(value: Vector2);
        /**
         * The direction that the capsule sides can extend.
         */
        public get direction(): CapsuleDirection2D;
        public set direction(value: CapsuleDirection2D);
        
        public constructor();
        
                    
    }
    /**
     * Collider for 2D physics representing an arbitrary set of connected edges (lines) defined by its vertices.
     */
    class EdgeCollider2D extends Collider2D {
        /**
         * Controls the radius of all edges created by the collider.
         */
        public get edgeRadius(): number;
        public set edgeRadius(value: number);
        /**
         * Gets the number of edges.
         */
        public get edgeCount(): number;
        /**
         * Gets the number of points.
         */
        public get pointCount(): number;
        /**
         * Get or set the points defining multiple continuous edges.
         */
        public get points(): Vector2[];
        public set points(value: Vector2[]);
        /**
         * Set this to true to use the adjacentStartPoint to form the collision normal that is used to calculate the collision response when a collision occurs at the Edge Collider's start point. Set this to false to not use the adjacentStartPoint, and the collision normal becomes the direction of motion of the collision.
         */
        public get useAdjacentStartPoint(): boolean;
        public set useAdjacentStartPoint(value: boolean);
        /**
         * Set this to true to use the adjacentEndPoint to form the collision normal that is used to calculate the collision response when a collision occurs at the Edge Collider's end point. Set this to false to not use the adjacentEndPoint, and the collision normal becomes the direction of motion of the collision.
         */
        public get useAdjacentEndPoint(): boolean;
        public set useAdjacentEndPoint(value: boolean);
        /**
         * Defines the position of a virtual point adjacent to the start point of the EdgeCollider2D.
         */
        public get adjacentStartPoint(): Vector2;
        public set adjacentStartPoint(value: Vector2);
        /**
         * Defines the position of a virtual point adjacent to the end point of the EdgeCollider2D.
         */
        public get adjacentEndPoint(): Vector2;
        public set adjacentEndPoint(value: Vector2);
        
        public constructor();
        /**
         * Reset to a single edge consisting of two points.
         */
        public Reset():void;
        
        public GetPoints($points: System_Collections_Generic.List$1<Vector2>):number;
        
        public SetPoints($points: System_Collections_Generic.List$1<Vector2>):boolean;
        
                    
    }
    /**
     * Collider for 2D physics representing an axis-aligned rectangle.
     */
    class BoxCollider2D extends Collider2D {
        /**
         * The width and height of the rectangle.
         */
        public get size(): Vector2;
        public set size(value: Vector2);
        /**
         * Controls the radius of all edges created by the collider.
         */
        public get edgeRadius(): number;
        public set edgeRadius(value: number);
        /**
         * Determines whether the BoxCollider2D's shape is automatically updated based on a SpriteRenderer's tiling properties.
         */
        public get autoTiling(): boolean;
        public set autoTiling(value: boolean);
        
        public constructor();
        
                    
    }
    /**
     * Collider for 2D physics representing an arbitrary polygon defined by its vertices.
     */
    class PolygonCollider2D extends Collider2D {
        /**
         * Determines whether the PolygonCollider2D's shape is automatically updated based on a SpriteRenderer's tiling properties.
         */
        public get autoTiling(): boolean;
        public set autoTiling(value: boolean);
        /**
         * Corner points that define the collider's shape in local space.
         */
        public get points(): Vector2[];
        public set points(value: Vector2[]);
        /**
         * The number of paths in the polygon.
         */
        public get pathCount(): number;
        public set pathCount(value: number);
        
        public constructor();
        /**
         * Return the total number of points in the polygon in all paths.
         */
        public GetTotalPointCount():number;
        /**
         * Gets a path from the Collider by its index.
         * @param index The index of the path to retrieve.
         * @returns An ordered array of the vertices (points) in the selected path.
         */
        public GetPath($index: number):Vector2[];
        /**
         * Define a path by its constituent points.
         * @param index Index of the path to set.
         * @param points An ordered array of the vertices (points) that define the path.
         */
        public SetPath($index: number, $points: Vector2[]):void;
        
        public GetPath($index: number, $points: System_Collections_Generic.List$1<Vector2>):number;
        
        public SetPath($index: number, $points: System_Collections_Generic.List$1<Vector2>):void;
        
        public CreatePrimitive($sides: number):void;
        
        public CreatePrimitive($sides: number, $scale: Vector2):void;
        /**
         * Creates as regular primitive polygon with the specified number of sides.
         * @param sides The number of sides in the polygon.  This must be greater than two.
         * @param scale The X/Y scale of the polygon.  These must be greater than zero.
         * @param offset The X/Y offset of the polygon.
         */
        public CreatePrimitive($sides: number, $scale: Vector2, $offset: Vector2):void;
        
                    
    }
    /**
     * Parent class for joints to connect Rigidbody2D objects.
     */
    class Joint2D extends Behaviour {
        /**
         * The Rigidbody2D attached to the Joint2D.
         */
        public get attachedRigidbody(): Rigidbody2D;
        /**
         * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
         */
        public get connectedBody(): Rigidbody2D;
        public set connectedBody(value: Rigidbody2D);
        /**
         * Should the two rigid bodies connected with this joint collide with each other?
         */
        public get enableCollision(): boolean;
        public set enableCollision(value: boolean);
        /**
         * The force that needs to be applied for this joint to break.
         */
        public get breakForce(): number;
        public set breakForce(value: number);
        /**
         * The torque that needs to be applied for this joint to break.
         */
        public get breakTorque(): number;
        public set breakTorque(value: number);
        /**
         * Gets the reaction force of the joint.
         */
        public get reactionForce(): Vector2;
        /**
         * Gets the reaction torque of the joint.
         */
        public get reactionTorque(): number;
        
        public constructor();
        /**
         * Gets the reaction force of the joint given the specified timeStep.
         * @param timeStep The time to calculate the reaction force for.
         * @returns The reaction force of the joint in the specified timeStep.
         */
        public GetReactionForce($timeStep: number):Vector2;
        /**
         * Gets the reaction torque of the joint given the specified timeStep.
         * @param timeStep The time to calculate the reaction torque for.
         * @returns The reaction torque of the joint in the specified timeStep.
         */
        public GetReactionTorque($timeStep: number):number;
        
                    
    }
    /**
     * Parent class for all joints that have anchor points.
     */
    class AnchoredJoint2D extends Joint2D {
        /**
         * The joint's anchor point on the object that has the joint component.
         */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
         * The joint's anchor point on the second object (ie, the one which doesn't have the joint component).
         */
        public get connectedAnchor(): Vector2;
        public set connectedAnchor(value: Vector2);
        /**
         * Should the connectedAnchor be calculated automatically?
         */
        public get autoConfigureConnectedAnchor(): boolean;
        public set autoConfigureConnectedAnchor(value: boolean);
        
        public constructor();
        
                    
    }
    /**
     * Joint that attempts to keep two Rigidbody2D objects a set distance apart by applying a force between them.
     */
    class SpringJoint2D extends AnchoredJoint2D {
        /**
         * Should the distance be calculated automatically?
         */
        public get autoConfigureDistance(): boolean;
        public set autoConfigureDistance(value: boolean);
        /**
         * The distance the spring will try to keep between the two objects.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * The amount by which the spring force is reduced in proportion to the movement speed.
         */
        public get dampingRatio(): number;
        public set dampingRatio(value: number);
        /**
         * The frequency at which the spring oscillates around the distance distance between the objects.
         */
        public get frequency(): number;
        public set frequency(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Joint that keeps two Rigidbody2D objects a fixed distance apart.
     */
    class DistanceJoint2D extends AnchoredJoint2D {
        /**
         * Should the distance be calculated automatically?
         */
        public get autoConfigureDistance(): boolean;
        public set autoConfigureDistance(value: boolean);
        /**
         * The distance separating the two ends of the joint.
         */
        public get distance(): number;
        public set distance(value: number);
        /**
         * Whether to maintain a maximum distance only or not.  If not then the absolute distance will be maintained instead.
         */
        public get maxDistanceOnly(): boolean;
        public set maxDistanceOnly(value: boolean);
        
        public constructor();
        
                    
    }
    /**
     * Applies both force and torque to reduce both the linear and angular velocities to zero.
     */
    class FrictionJoint2D extends AnchoredJoint2D {
        /**
         * The maximum force that can be generated when trying to maintain the friction joint constraint.
         */
        public get maxForce(): number;
        public set maxForce(value: number);
        /**
         * The maximum torque that can be generated when trying to maintain the friction joint constraint.
         */
        public get maxTorque(): number;
        public set maxTorque(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Joint that allows a Rigidbody2D object to rotate around a point in space or a point on another object.
     */
    class HingeJoint2D extends AnchoredJoint2D {
        /**
         * Should the joint be rotated automatically by a motor torque?
         */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
         * Should limits be placed on the range of rotation?
         */
        public get useLimits(): boolean;
        public set useLimits(value: boolean);
        /**
         * Parameters for the motor force applied to the joint.
         */
        public get motor(): JointMotor2D;
        public set motor(value: JointMotor2D);
        /**
         * Limit of angular rotation (in degrees) on the joint.
         */
        public get limits(): JointAngleLimits2D;
        public set limits(value: JointAngleLimits2D);
        /**
         * Gets the state of the joint limit.
         */
        public get limitState(): JointLimitState2D;
        /**
         * The angle (in degrees) referenced between the two bodies used as the constraint for the joint.
         */
        public get referenceAngle(): number;
        /**
         * The current joint angle (in degrees) with respect to the reference angle.
         */
        public get jointAngle(): number;
        /**
         * The current joint speed.
         */
        public get jointSpeed(): number;
        
        public constructor();
        /**
         * Gets the motor torque of the joint given the specified timestep.
         * @param timeStep The time to calculate the motor torque for.
         */
        public GetMotorTorque($timeStep: number):number;
        
                    
    }
    /**
     * Keeps two Rigidbody2D at their relative orientations.
     */
    class RelativeJoint2D extends Joint2D {
        /**
         * The maximum force that can be generated when trying to maintain the relative joint constraint.
         */
        public get maxForce(): number;
        public set maxForce(value: number);
        /**
         * The maximum torque that can be generated when trying to maintain the relative joint constraint.
         */
        public get maxTorque(): number;
        public set maxTorque(value: number);
        /**
         * Scales both the linear and angular forces used to correct the required relative orientation.
         */
        public get correctionScale(): number;
        public set correctionScale(value: number);
        /**
         * Should both the linearOffset and angularOffset be calculated automatically?
         */
        public get autoConfigureOffset(): boolean;
        public set autoConfigureOffset(value: boolean);
        /**
         * The current linear offset between the Rigidbody2D that the joint connects.
         */
        public get linearOffset(): Vector2;
        public set linearOffset(value: Vector2);
        /**
         * The current angular offset between the Rigidbody2D that the joint connects.
         */
        public get angularOffset(): number;
        public set angularOffset(value: number);
        /**
         * The world-space position that is currently trying to be maintained.
         */
        public get target(): Vector2;
        
        public constructor();
        
                    
    }
    /**
     * Joint that restricts the motion of a Rigidbody2D object to a single line.
     */
    class SliderJoint2D extends AnchoredJoint2D {
        /**
         * Should the angle be calculated automatically?
         */
        public get autoConfigureAngle(): boolean;
        public set autoConfigureAngle(value: boolean);
        /**
         * The angle of the line in space (in degrees).
         */
        public get angle(): number;
        public set angle(value: number);
        /**
         * Should a motor force be applied automatically to the Rigidbody2D?
         */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
         * Should motion limits be used?
         */
        public get useLimits(): boolean;
        public set useLimits(value: boolean);
        /**
         * Parameters for a motor force that is applied automatically to the Rigibody2D along the line.
         */
        public get motor(): JointMotor2D;
        public set motor(value: JointMotor2D);
        /**
         * Restrictions on how far the joint can slide in each direction along the line.
         */
        public get limits(): JointTranslationLimits2D;
        public set limits(value: JointTranslationLimits2D);
        /**
         * Gets the state of the joint limit.
         */
        public get limitState(): JointLimitState2D;
        /**
         * The angle (in degrees) referenced between the two bodies used as the constraint for the joint.
         */
        public get referenceAngle(): number;
        /**
         * The current joint translation.
         */
        public get jointTranslation(): number;
        /**
         * The current joint speed.
         */
        public get jointSpeed(): number;
        
        public constructor();
        /**
         * Gets the motor force of the joint given the specified timestep.
         * @param timeStep The time to calculate the motor force for.
         */
        public GetMotorForce($timeStep: number):number;
        
                    
    }
    /**
     * The joint attempts to move a Rigidbody2D to a specific target position.
     */
    class TargetJoint2D extends Joint2D {
        /**
         * The local-space anchor on the rigid-body the joint is attached to.
         */
        public get anchor(): Vector2;
        public set anchor(value: Vector2);
        /**
         * The world-space position that the joint will attempt to move the body to.
         */
        public get target(): Vector2;
        public set target(value: Vector2);
        /**
         * Should the target be calculated automatically?
         */
        public get autoConfigureTarget(): boolean;
        public set autoConfigureTarget(value: boolean);
        /**
         * The maximum force that can be generated when trying to maintain the target joint constraint.
         */
        public get maxForce(): number;
        public set maxForce(value: number);
        /**
         * The amount by which the target spring force is reduced in proportion to the movement speed.
         */
        public get dampingRatio(): number;
        public set dampingRatio(value: number);
        /**
         * The frequency at which the target spring oscillates around the target position.
         */
        public get frequency(): number;
        public set frequency(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Connects two Rigidbody2D together at their anchor points using a configurable spring.
     */
    class FixedJoint2D extends AnchoredJoint2D {
        /**
         * The amount by which the spring force is reduced in proportion to the movement speed.
         */
        public get dampingRatio(): number;
        public set dampingRatio(value: number);
        /**
         * The frequency at which the spring oscillates around the distance between the objects.
         */
        public get frequency(): number;
        public set frequency(value: number);
        /**
         * The angle referenced between the two bodies used as the constraint for the joint.
         */
        public get referenceAngle(): number;
        
        public constructor();
        
                    
    }
    /**
     * The wheel joint allows the simulation of wheels by providing a constraining suspension motion with an optional motor.
     */
    class WheelJoint2D extends AnchoredJoint2D {
        /**
         * Set the joint suspension configuration.
         */
        public get suspension(): JointSuspension2D;
        public set suspension(value: JointSuspension2D);
        /**
         * Should a motor force be applied automatically to the Rigidbody2D?
         */
        public get useMotor(): boolean;
        public set useMotor(value: boolean);
        /**
         * Parameters for a motor force that is applied automatically to the Rigibody2D along the line.
         */
        public get motor(): JointMotor2D;
        public set motor(value: JointMotor2D);
        /**
         * The current joint translation.
         */
        public get jointTranslation(): number;
        /**
         * The current joint linear speed in meters/sec.
         */
        public get jointLinearSpeed(): number;
        /**
         * The current joint rotational speed in degrees/sec.
         */
        public get jointSpeed(): number;
        /**
         * The current joint angle (in degrees) defined as the relative angle between the two Rigidbody2D that the joint connects to.
         */
        public get jointAngle(): number;
        
        public constructor();
        /**
         * Gets the motor torque of the joint given the specified timestep.
         * @param timeStep The time to calculate the motor torque for.
         */
        public GetMotorTorque($timeStep: number):number;
        
                    
    }
    /**
     * A base class for all 2D effectors.
     */
    class Effector2D extends Behaviour {
        /**
         * Should the collider-mask be used or the global collision matrix?
         */
        public get useColliderMask(): boolean;
        public set useColliderMask(value: boolean);
        /**
         * The mask used to select specific layers allowed to interact with the effector.
         */
        public get colliderMask(): number;
        public set colliderMask(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Applies forces within an area.
     */
    class AreaEffector2D extends Effector2D {
        /**
         * The angle of the force to be applied.
         */
        public get forceAngle(): number;
        public set forceAngle(value: number);
        /**
         * Should the forceAngle use global space?
         */
        public get useGlobalAngle(): boolean;
        public set useGlobalAngle(value: boolean);
        /**
         * The magnitude of the force to be applied.
         */
        public get forceMagnitude(): number;
        public set forceMagnitude(value: number);
        /**
         * The variation of the magnitude of the force to be applied.
         */
        public get forceVariation(): number;
        public set forceVariation(value: number);
        /**
         * The linear drag to apply to rigid-bodies.
         */
        public get drag(): number;
        public set drag(value: number);
        /**
         * The angular drag to apply to rigid-bodies.
         */
        public get angularDrag(): number;
        public set angularDrag(value: number);
        /**
         * The target for where the effector applies any force.
         */
        public get forceTarget(): EffectorSelection2D;
        public set forceTarget(value: EffectorSelection2D);
        
        public constructor();
        
                    
    }
    /**
     * Applies forces to simulate buoyancy, fluid-flow and fluid drag.
     */
    class BuoyancyEffector2D extends Effector2D {
        /**
         * Defines an arbitrary horizontal line that represents the fluid surface level.
         */
        public get surfaceLevel(): number;
        public set surfaceLevel(value: number);
        /**
         * The density of the fluid used to calculate the buoyancy forces.
         */
        public get density(): number;
        public set density(value: number);
        /**
         * A force applied to slow linear movement of any Collider2D in contact with the effector.
         */
        public get linearDrag(): number;
        public set linearDrag(value: number);
        /**
         * A force applied to slow angular movement of any Collider2D in contact with the effector.
         */
        public get angularDrag(): number;
        public set angularDrag(value: number);
        /**
         * The angle of the force used to similate fluid flow.
         */
        public get flowAngle(): number;
        public set flowAngle(value: number);
        /**
         * The magnitude of the force used to similate fluid flow.
         */
        public get flowMagnitude(): number;
        public set flowMagnitude(value: number);
        /**
         * The random variation of the force used to similate fluid flow.
         */
        public get flowVariation(): number;
        public set flowVariation(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Applies forces to attract/repulse against a point.
     */
    class PointEffector2D extends Effector2D {
        /**
         * The magnitude of the force to be applied.
         */
        public get forceMagnitude(): number;
        public set forceMagnitude(value: number);
        /**
         * The variation of the magnitude of the force to be applied.
         */
        public get forceVariation(): number;
        public set forceVariation(value: number);
        /**
         * The scale applied to the calculated distance between source and target.
         */
        public get distanceScale(): number;
        public set distanceScale(value: number);
        /**
         * The linear drag to apply to rigid-bodies.
         */
        public get drag(): number;
        public set drag(value: number);
        /**
         * The angular drag to apply to rigid-bodies.
         */
        public get angularDrag(): number;
        public set angularDrag(value: number);
        /**
         * The source which is used to calculate the centroid point of the effector.  The distance from the target is defined from this point.
         */
        public get forceSource(): EffectorSelection2D;
        public set forceSource(value: EffectorSelection2D);
        /**
         * The target for where the effector applies any force.
         */
        public get forceTarget(): EffectorSelection2D;
        public set forceTarget(value: EffectorSelection2D);
        /**
         * The mode used to apply the effector force.
         */
        public get forceMode(): EffectorForceMode2D;
        public set forceMode(value: EffectorForceMode2D);
        
        public constructor();
        
                    
    }
    /**
     * Applies "platform" behaviour such as one-way collisions etc.
     */
    class PlatformEffector2D extends Effector2D {
        /**
         * Should the one-way collision behaviour be used?
         */
        public get useOneWay(): boolean;
        public set useOneWay(value: boolean);
        /**
         * Ensures that all contacts controlled by the one-way behaviour act the same.
         */
        public get useOneWayGrouping(): boolean;
        public set useOneWayGrouping(value: boolean);
        /**
         * Should friction be used on the platform sides?
         */
        public get useSideFriction(): boolean;
        public set useSideFriction(value: boolean);
        /**
         * Should bounce be used on the platform sides?
         */
        public get useSideBounce(): boolean;
        public set useSideBounce(value: boolean);
        /**
         * The angle of an arc that defines the surface of the platform centered of the local 'up' of the effector.
         */
        public get surfaceArc(): number;
        public set surfaceArc(value: number);
        /**
         * The angle of an arc that defines the sides of the platform centered on the local 'left' and 'right' of the effector. Any collision normals within this arc are considered for the 'side' behaviours.
         */
        public get sideArc(): number;
        public set sideArc(value: number);
        /**
         * The rotational offset angle from the local 'up'.
         */
        public get rotationalOffset(): number;
        public set rotationalOffset(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Applies tangent forces along the surfaces of colliders.
     */
    class SurfaceEffector2D extends Effector2D {
        /**
         * The speed to be maintained along the surface.
         */
        public get speed(): number;
        public set speed(value: number);
        /**
         * The speed variation (from zero to the variation) added to base speed to be applied.
         */
        public get speedVariation(): number;
        public set speedVariation(value: number);
        /**
         * The scale of the impulse force applied while attempting to reach the surface speed.
         */
        public get forceScale(): number;
        public set forceScale(value: number);
        /**
         * Should the impulse force but applied to the contact point?
         */
        public get useContactForce(): boolean;
        public set useContactForce(value: boolean);
        /**
         * Should friction be used for any contact with the surface?
         */
        public get useFriction(): boolean;
        public set useFriction(value: boolean);
        /**
         * Should bounce be used for any contact with the surface?
         */
        public get useBounce(): boolean;
        public set useBounce(value: boolean);
        
        public constructor();
        
                    
    }
    /**
     * A base type for 2D physics components that required a callback during FixedUpdate.
     */
    class PhysicsUpdateBehaviour2D extends Behaviour {
        
        public constructor();
        
                    
    }
    /**
     * Applies both linear and angular (torque) forces continuously to the rigidbody each physics update.
     */
    class ConstantForce2D extends PhysicsUpdateBehaviour2D {
        /**
         * The linear force applied to the rigidbody each physics update.
         */
        public get force(): Vector2;
        public set force(value: Vector2);
        /**
         * The linear force, relative to the rigid-body coordinate system, applied each physics update.
         */
        public get relativeForce(): Vector2;
        public set relativeForce(value: Vector2);
        /**
         * The torque applied to the rigidbody each physics update.
         */
        public get torque(): number;
        public set torque(value: number);
        
        public constructor();
        
                    
    }
    
}
declare module 'System' {

        
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
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
         * An extension method that returns the 2D physics Scene from the Scene.
         * @param scene The Scene from which to return the 2D physics Scene.
         * @returns The 2D physics Scene used by the Scene.
         * @extension UnityEngine.PhysicsSceneExtensions2D
         */
        GetPhysicsScene2D():PhysicsScene2D;
        
                    
    }
    
}
declare module 'UnityEngine.CompositeCollider2D' {

    import * as System from 'System';
        
    /**
     * Specifies the type of geometry the Composite Collider generates.
     */
    enum GeometryType { Outlines = 0, Polygons = 1 }
    /**
     * Specifies when to generate the Composite Collider geometry.
     */
    enum GenerationType { Synchronous = 0, Manual = 1 }
    
}

