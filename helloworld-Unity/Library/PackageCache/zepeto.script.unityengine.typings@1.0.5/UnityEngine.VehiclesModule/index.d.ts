//# signature=UnityEngine.VehiclesModule#7cca8d8ec4804d805b71d99ceb74f3ce#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Contact information for the wheel, reported by WheelCollider.
     */
    class WheelHit extends System.ValueType {
        /**
         * The other Collider the wheel is hitting.
         */
        public get collider(): Collider;
        public set collider(value: Collider);
        /**
         * The point of contact between the wheel and the ground.
         */
        public get point(): Vector3;
        public set point(value: Vector3);
        /**
         * The normal at the point of contact.
         */
        public get normal(): Vector3;
        public set normal(value: Vector3);
        /**
         * The direction the wheel is pointing in.
         */
        public get forwardDir(): Vector3;
        public set forwardDir(value: Vector3);
        /**
         * The sideways direction of the wheel.
         */
        public get sidewaysDir(): Vector3;
        public set sidewaysDir(value: Vector3);
        /**
         * The magnitude of the force being applied for the contact.
         */
        public get force(): number;
        public set force(value: number);
        /**
         * Tire slip in the rolling direction. Acceleration slip is negative, braking slip is positive.
         */
        public get forwardSlip(): number;
        public set forwardSlip(value: number);
        /**
         * Tire slip in the sideways direction.
         */
        public get sidewaysSlip(): number;
        public set sidewaysSlip(value: number);
        
                    
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
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * A special collider for vehicle wheels.
     */
    class WheelCollider extends Collider {
        /**
         * The center of the wheel, measured in the object's local space.
         */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
         * The radius of the wheel, measured in local space.
         */
        public get radius(): number;
        public set radius(value: number);
        /**
         * Maximum extension distance of wheel suspension, measured in local space.
         */
        public get suspensionDistance(): number;
        public set suspensionDistance(value: number);
        /**
         * The parameters of wheel's suspension. The suspension attempts to reach a target position by applying a linear force and a damping force.
         */
        public get suspensionSpring(): JointSpring;
        public set suspensionSpring(value: JointSpring);
        /**
         * Limits the expansion velocity of the Wheel Collider's suspension. If you set this property on a Rigidbody that has several Wheel Colliders, such as a vehicle, then it affects all other Wheel Colliders on the Rigidbody.
         * @param active Turns on/off the property
         */
        public get suspensionExpansionLimited(): boolean;
        public set suspensionExpansionLimited(value: boolean);
        /**
         * Application point of the suspension and tire forces measured from the base of the resting wheel.
         */
        public get forceAppPointDistance(): number;
        public set forceAppPointDistance(value: number);
        /**
         * The mass of the wheel, expressed in kilograms. Must be larger than zero. Typical values would be in range (20,80).
         */
        public get mass(): number;
        public set mass(value: number);
        /**
         * The damping rate of the wheel. Must be larger than zero.
         */
        public get wheelDampingRate(): number;
        public set wheelDampingRate(value: number);
        /**
         * Properties of tire friction in the direction the wheel is pointing in.
         */
        public get forwardFriction(): WheelFrictionCurve;
        public set forwardFriction(value: WheelFrictionCurve);
        /**
         * Properties of tire friction in the sideways direction.
         */
        public get sidewaysFriction(): WheelFrictionCurve;
        public set sidewaysFriction(value: WheelFrictionCurve);
        /**
         * Motor torque on the wheel axle expressed in Newton metres. Positive or negative depending on direction.
         */
        public get motorTorque(): number;
        public set motorTorque(value: number);
        /**
         * Brake torque expressed in Newton metres.
         */
        public get brakeTorque(): number;
        public set brakeTorque(value: number);
        /**
         * Steering angle in degrees, always around the local y-axis.
         */
        public get steerAngle(): number;
        public set steerAngle(value: number);
        /**
         * Indicates whether the wheel currently collides with something (Read Only).
         */
        public get isGrounded(): boolean;
        /**
         * Current wheel axle rotation speed, in rotations per minute (Read Only).
         */
        public get rpm(): number;
        /**
         * The mass supported by this WheelCollider.
         */
        public get sprungMass(): number;
        public set sprungMass(value: number);
        
        public constructor();
        /**
         * Reset the sprung masses of the vehicle.
         */
        public ResetSprungMasses():void;
        /**
         * Configure vehicle sub-stepping parameters.
         * @param speedThreshold The speed threshold of the sub-stepping algorithm.
         * @param stepsBelowThreshold Amount of simulation sub-steps when vehicle's speed is below speedThreshold.
         * @param stepsAboveThreshold Amount of simulation sub-steps when vehicle's speed is above speedThreshold.
         */
        public ConfigureVehicleSubsteps($speedThreshold: number, $stepsBelowThreshold: number, $stepsAboveThreshold: number):void;
        /**
         * Gets the world space pose of the wheel accounting for ground contact, suspension limits, steer angle, and rotation angle (angles in degrees).
         * @param pos Position of the wheel in world space.
         * @param quat Rotation of the wheel in world space.
         */
        public GetWorldPose($pos: $Ref<Vector3>, $quat: $Ref<Quaternion>):void;
        /**
         * Gets ground collision data for the wheel.
         */
        public GetGroundHit($hit: $Ref<WheelHit>):boolean;
        
                    
    }
    /**
     * JointSpring is used add a spring force to HingeJoint and PhysicMaterial.
     */
    interface JointSpring extends System.ValueType {
        
                    
    }
    /**
     * WheelFrictionCurve is used by the WheelCollider to describe friction properties of the wheel tire.
     */
    interface WheelFrictionCurve extends System.ValueType {
        
                    
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
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
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}

