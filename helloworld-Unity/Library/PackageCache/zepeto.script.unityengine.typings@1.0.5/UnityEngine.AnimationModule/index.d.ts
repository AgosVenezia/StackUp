//# signature=UnityEngine.AnimationModule#187f627971b51a296891b894b587f77e#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as RootNamespace from 'RootNamespace';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_Playables from 'UnityEngine.Playables';
    import * as UnityEngine_Animations from 'UnityEngine.Animations';
    import * as System_Collections from 'System.Collections';
    import * as Unity_Collections from 'Unity.Collections';
    import * as Unity_Jobs from 'Unity.Jobs';
        
    /**
     * Interface to control the Mecanim animation system.
     */
    class Animator extends Behaviour {
        /**
         * Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy.
         */
        public get isOptimizable(): boolean;
        /**
         * Returns true if the current rig is humanoid, false if it is generic.
         */
        public get isHuman(): boolean;
        /**
         * Returns true if the current rig has root motion.
         */
        public get hasRootMotion(): boolean;
        /**
         * Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic).
         */
        public get humanScale(): number;
        /**
         * Returns whether the animator is initialized successfully.
         */
        public get isInitialized(): boolean;
        /**
         * Gets the avatar delta position for the last evaluated frame.
         */
        public get deltaPosition(): Vector3;
        /**
         * Gets the avatar delta rotation for the last evaluated frame.
         */
        public get deltaRotation(): Quaternion;
        /**
         * Gets the avatar velocity  for the last evaluated frame.
         */
        public get velocity(): Vector3;
        /**
         * Gets the avatar angular velocity for the last evaluated frame.
         */
        public get angularVelocity(): Vector3;
        /**
         * The root position, the position of the game object.
         */
        public get rootPosition(): Vector3;
        public set rootPosition(value: Vector3);
        /**
         * The root rotation, the rotation of the game object.
         */
        public get rootRotation(): Quaternion;
        public set rootRotation(value: Quaternion);
        /**
         * Should root motion be applied?
         */
        public get applyRootMotion(): boolean;
        public set applyRootMotion(value: boolean);
        /**
         * Specifies the update mode of the Animator.
         */
        public get updateMode(): AnimatorUpdateMode;
        public set updateMode(value: AnimatorUpdateMode);
        /**
         * Returns true if the object has a transform hierarchy.
         */
        public get hasTransformHierarchy(): boolean;
        /**
         * The current gravity weight based on current animations that are played.
         */
        public get gravityWeight(): number;
        /**
         * The position of the body center of mass.
         */
        public get bodyPosition(): Vector3;
        public set bodyPosition(value: Vector3);
        /**
         * The rotation of the body center of mass.
         */
        public get bodyRotation(): Quaternion;
        public set bodyRotation(value: Quaternion);
        /**
         * Automatic stabilization of feet during transition and blending.
         */
        public get stabilizeFeet(): boolean;
        public set stabilizeFeet(value: boolean);
        /**
         * Returns the number of layers in the controller.
         */
        public get layerCount(): number;
        /**
         * The AnimatorControllerParameter list used by the animator. (Read Only)
         */
        public get parameters(): AnimatorControllerParameter[];
        /**
         * Returns the number of parameters in the controller.
         */
        public get parameterCount(): number;
        /**
         * Blends pivot point between body center of mass and feet pivot.
         */
        public get feetPivotActive(): number;
        public set feetPivotActive(value: number);
        /**
         * Gets the pivot weight.
         */
        public get pivotWeight(): number;
        /**
         * Get the current position of the pivot.
         */
        public get pivotPosition(): Vector3;
        /**
         * If automatic matching is active.
         */
        public get isMatchingTarget(): boolean;
        /**
         * The playback speed of the Animator. 1 is normal playback speed.
         */
        public get speed(): number;
        public set speed(value: number);
        /**
         * Returns the position of the target specified by SetTarget.
         */
        public get targetPosition(): Vector3;
        /**
         * Returns the rotation of the target specified by SetTarget.
         */
        public get targetRotation(): Quaternion;
        /**
         * Controls culling of this Animator component.
         */
        public get cullingMode(): AnimatorCullingMode;
        public set cullingMode(value: AnimatorCullingMode);
        /**
         * Sets the playback position in the recording buffer.
         */
        public get playbackTime(): number;
        public set playbackTime(value: number);
        /**
         * Start time of the first frame of the buffer relative to the frame at which StartRecording was called.
         */
        public get recorderStartTime(): number;
        public set recorderStartTime(value: number);
        /**
         * End time of the recorded clip relative to when StartRecording was called.
         */
        public get recorderStopTime(): number;
        public set recorderStopTime(value: number);
        /**
         * Gets the mode of the Animator recorder.
         */
        public get recorderMode(): AnimatorRecorderMode;
        /**
         * The runtime representation of AnimatorController that controls the Animator.
         */
        public get runtimeAnimatorController(): RuntimeAnimatorController;
        public set runtimeAnimatorController(value: RuntimeAnimatorController);
        /**
         * Returns true if Animator has any playables assigned to it.
         */
        public get hasBoundPlayables(): boolean;
        /**
         * Gets/Sets the current Avatar.
         */
        public get avatar(): Avatar;
        public set avatar(value: Avatar);
        /**
         * The PlayableGraph created by the Animator.
         */
        public get playableGraph(): UnityEngine_Playables.PlayableGraph;
        /**
         * Additional layers affects the center of mass.
         */
        public get layersAffectMassCenter(): boolean;
        public set layersAffectMassCenter(value: boolean);
        /**
         * Get left foot bottom height.
         */
        public get leftFeetBottomHeight(): number;
        /**
         * Get right foot bottom height.
         */
        public get rightFeetBottomHeight(): number;
        
        public get logWarnings(): boolean;
        public set logWarnings(value: boolean);
        /**
         * Sets whether the Animator sends events of type AnimationEvent.
         */
        public get fireEvents(): boolean;
        public set fireEvents(value: boolean);
        /**
         * Controls the behaviour of the Animator component when a GameObject is disabled.
         */
        public get keepAnimatorControllerStateOnDisable(): boolean;
        public set keepAnimatorControllerStateOnDisable(value: boolean);
        
        public constructor();
        /**
         * Returns the value of the given float parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetFloat($name: string):number;
        /**
         * Returns the value of the given float parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetFloat($id: number):number;
        /**
         * Send float values to the Animator to affect transitions.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         * @param dampTime The damper total time.
         * @param deltaTime The delta time to give to the damper.
         */
        public SetFloat($name: string, $value: number):void;
        /**
         * Send float values to the Animator to affect transitions.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         * @param dampTime The damper total time.
         * @param deltaTime The delta time to give to the damper.
         */
        public SetFloat($name: string, $value: number, $dampTime: number, $deltaTime: number):void;
        /**
         * Send float values to the Animator to affect transitions.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         * @param dampTime The damper total time.
         * @param deltaTime The delta time to give to the damper.
         */
        public SetFloat($id: number, $value: number):void;
        /**
         * Send float values to the Animator to affect transitions.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         * @param dampTime The damper total time.
         * @param deltaTime The delta time to give to the damper.
         */
        public SetFloat($id: number, $value: number, $dampTime: number, $deltaTime: number):void;
        /**
         * Returns the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetBool($name: string):boolean;
        /**
         * Returns the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetBool($id: number):boolean;
        /**
         * Sets the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetBool($name: string, $value: boolean):void;
        /**
         * Sets the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetBool($id: number, $value: boolean):void;
        /**
         * Returns the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetInteger($name: string):number;
        /**
         * Returns the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetInteger($id: number):number;
        /**
         * Sets the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetInteger($name: string, $value: number):void;
        /**
         * Sets the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetInteger($id: number, $value: number):void;
        /**
         * Sets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public SetTrigger($name: string):void;
        /**
         * Sets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public SetTrigger($id: number):void;
        /**
         * Resets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public ResetTrigger($name: string):void;
        /**
         * Resets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public ResetTrigger($id: number):void;
        /**
         * Returns true if the parameter is controlled by a curve, false otherwise.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns True if the parameter is controlled by a curve, false otherwise.
         */
        public IsParameterControlledByCurve($name: string):boolean;
        /**
         * Returns true if the parameter is controlled by a curve, false otherwise.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns True if the parameter is controlled by a curve, false otherwise.
         */
        public IsParameterControlledByCurve($id: number):boolean;
        /**
         * Gets the position of an IK goal.
         * @param goal The AvatarIKGoal that is queried.
         * @returns Return the current position of this IK goal in world space.
         */
        public GetIKPosition($goal: AvatarIKGoal):Vector3;
        /**
         * Sets the position of an IK goal.
         * @param goal The AvatarIKGoal that is set.
         * @param goalPosition The position in world space.
         */
        public SetIKPosition($goal: AvatarIKGoal, $goalPosition: Vector3):void;
        /**
         * Gets the rotation of an IK goal.
         * @param goal The AvatarIKGoal that is is queried.
         */
        public GetIKRotation($goal: AvatarIKGoal):Quaternion;
        /**
         * Sets the rotation of an IK goal.
         * @param goal The AvatarIKGoal that is set.
         * @param goalRotation The rotation in world space.
         */
        public SetIKRotation($goal: AvatarIKGoal, $goalRotation: Quaternion):void;
        /**
         * Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
         * @param goal The AvatarIKGoal that is queried.
         */
        public GetIKPositionWeight($goal: AvatarIKGoal):number;
        /**
         * Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal).
         * @param goal The AvatarIKGoal that is set.
         * @param value The translative weight.
         */
        public SetIKPositionWeight($goal: AvatarIKGoal, $value: number):void;
        /**
         * Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
         * @param goal The AvatarIKGoal that is queried.
         */
        public GetIKRotationWeight($goal: AvatarIKGoal):number;
        /**
         * Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal).
         * @param goal The AvatarIKGoal that is set.
         * @param value The rotational weight.
         */
        public SetIKRotationWeight($goal: AvatarIKGoal, $value: number):void;
        /**
         * Gets the position of an IK hint.
         * @param hint The AvatarIKHint that is queried.
         * @returns Return the current position of this IK hint in world space.
         */
        public GetIKHintPosition($hint: AvatarIKHint):Vector3;
        /**
         * Sets the position of an IK hint.
         * @param hint The AvatarIKHint that is set.
         * @param hintPosition The position in world space.
         */
        public SetIKHintPosition($hint: AvatarIKHint, $hintPosition: Vector3):void;
        /**
         * Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
         * @param hint The AvatarIKHint that is queried.
         * @returns Return translative weight.
         */
        public GetIKHintPositionWeight($hint: AvatarIKHint):number;
        /**
         * Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint).
         * @param hint The AvatarIKHint that is set.
         * @param value The translative weight.
         */
        public SetIKHintPositionWeight($hint: AvatarIKHint, $value: number):void;
        /**
         * Sets the look at position.
         * @param lookAtPosition The position to lookAt.
         */
        public SetLookAtPosition($lookAtPosition: Vector3):void;
        /**
         * Set look at weights.
         * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
         * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
         * @param headWeight (0-1) determines how much the head is involved in the LookAt.
         * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
         * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
         */
        public SetLookAtWeight($weight: number):void;
        /**
         * Set look at weights.
         * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
         * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
         * @param headWeight (0-1) determines how much the head is involved in the LookAt.
         * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
         * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
         */
        public SetLookAtWeight($weight: number, $bodyWeight: number):void;
        /**
         * Set look at weights.
         * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
         * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
         * @param headWeight (0-1) determines how much the head is involved in the LookAt.
         * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
         * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
         */
        public SetLookAtWeight($weight: number, $bodyWeight: number, $headWeight: number):void;
        /**
         * Set look at weights.
         * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
         * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
         * @param headWeight (0-1) determines how much the head is involved in the LookAt.
         * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
         * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
         */
        public SetLookAtWeight($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number):void;
        /**
         * Set look at weights.
         * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
         * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
         * @param headWeight (0-1) determines how much the head is involved in the LookAt.
         * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
         * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
         */
        public SetLookAtWeight($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number, $clampWeight: number):void;
        /**
         * Sets local rotation of a human bone during a IK pass.
         * @param humanBoneId The human bone Id.
         * @param rotation The local rotation.
         */
        public SetBoneLocalRotation($humanBoneId: HumanBodyBones, $rotation: Quaternion):void;
        /**
         * Returns the first StateMachineBehaviour that matches type T or is derived from T. Returns null if none are found.
         */
        public GetBehaviour<T>():StateMachineBehaviour;
        /**
         * Returns all StateMachineBehaviour that match type T or are derived from T. Returns null if none are found.
         */
        public GetBehaviours<T>():T[];
        
        public GetBehaviours($fullPathHash: number, $layerIndex: number):StateMachineBehaviour[];
        /**
         * Returns the layer name.
         * @param layerIndex The layer index.
         * @returns The layer name.
         */
        public GetLayerName($layerIndex: number):string;
        /**
         * Returns the index of the layer with the given name.
         * @param layerName The layer name.
         * @returns The layer index.
         */
        public GetLayerIndex($layerName: string):number;
        /**
         * Returns the weight of the layer at the specified index.
         * @param layerIndex The layer index.
         * @returns The layer weight.
         */
        public GetLayerWeight($layerIndex: number):number;
        /**
         * Sets the weight of the layer at the given index.
         * @param layerIndex The layer index.
         * @param weight The new layer weight.
         */
        public SetLayerWeight($layerIndex: number, $weight: number):void;
        /**
         * Returns an AnimatorStateInfo with the information on the current state.
         * @param layerIndex The layer index.
         * @returns An AnimatorStateInfo with the information on the current state.
         */
        public GetCurrentAnimatorStateInfo($layerIndex: number):AnimatorStateInfo;
        /**
         * Returns an AnimatorStateInfo with the information on the next state.
         * @param layerIndex The layer index.
         * @returns An AnimatorStateInfo with the information on the next state.
         */
        public GetNextAnimatorStateInfo($layerIndex: number):AnimatorStateInfo;
        /**
         * Returns an AnimatorTransitionInfo with the informations on the current transition.
         * @param layerIndex The layer's index.
         * @returns An AnimatorTransitionInfo with the informations on the current transition.
         */
        public GetAnimatorTransitionInfo($layerIndex: number):AnimatorTransitionInfo;
        /**
         * Returns the number of AnimatorClipInfo in the current state.
         * @param layerIndex The layer index.
         * @returns The number of AnimatorClipInfo in the current state.
         */
        public GetCurrentAnimatorClipInfoCount($layerIndex: number):number;
        /**
         * Returns the number of AnimatorClipInfo in the next state.
         * @param layerIndex The layer index.
         * @returns The number of AnimatorClipInfo in the next state.
         */
        public GetNextAnimatorClipInfoCount($layerIndex: number):number;
        /**
         * Returns an array of all the AnimatorClipInfo in the current state of the given layer.
         * @param layerIndex The layer index.
         * @returns An array of all the AnimatorClipInfo in the current state.
         */
        public GetCurrentAnimatorClipInfo($layerIndex: number):AnimatorClipInfo[];
        /**
         * Returns an array of all the AnimatorClipInfo in the next state of the given layer.
         * @param layerIndex The layer index.
         * @returns An array of all the AnimatorClipInfo in the next state.
         */
        public GetNextAnimatorClipInfo($layerIndex: number):AnimatorClipInfo[];
        
        public GetCurrentAnimatorClipInfo($layerIndex: number, $clips: System_Collections_Generic.List$1<AnimatorClipInfo>):void;
        
        public GetNextAnimatorClipInfo($layerIndex: number, $clips: System_Collections_Generic.List$1<AnimatorClipInfo>):void;
        /**
         * Returns true if there is a transition on the given layer, false otherwise.
         * @param layerIndex The layer index.
         * @returns True if there is a transition on the given layer, false otherwise.
         */
        public IsInTransition($layerIndex: number):boolean;
        /**
         * See AnimatorController.parameters.
         */
        public GetParameter($index: number):AnimatorControllerParameter;
        
        public MatchTarget($matchPosition: Vector3, $matchRotation: Quaternion, $targetBodyPart: AvatarTarget, $weightMask: MatchTargetWeightMask, $startNormalizedTime: number):void;
        /**
         * Automatically adjust the GameObject position and rotation.
         * @param matchPosition The position we want the body part to reach.
         * @param matchRotation The rotation in which we want the body part to be.
         * @param targetBodyPart The body part that is involved in the match.
         * @param weightMask Structure that contains weights for matching position and rotation.
         * @param startNormalizedTime Start time within the animation clip (0 - beginning of clip, 1 - end of clip).
         * @param targetNormalizedTime End time within the animation clip (0 - beginning of clip, 1 - end of clip), values greater than 1 can be set to trigger a match after a certain number of loops. Ex: 2.3 means at 30% of 2nd loop.
         * @param completeMatch Allows you to specify what should happen if the MatchTarget function is interrupted. A value of true causes the GameObject to immediately move to the matchPosition if interrupted. A value of false causes the GameObject to stay at its current position if interrupted.
         */
        public MatchTarget($matchPosition: Vector3, $matchRotation: Quaternion, $targetBodyPart: AvatarTarget, $weightMask: MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number):void;
        
        public MatchTarget($matchPosition: Vector3, $matchRotation: Quaternion, $targetBodyPart: AvatarTarget, $weightMask: MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number, $completeMatch: boolean):void;
        /**
         * Interrupts the automatic target matching.
         */
        public InterruptMatchTarget():void;
        /**
         * Interrupts the automatic target matching.
         */
        public InterruptMatchTarget($completeMatch: boolean):void;
        
        public CrossFadeInFixedTime($stateName: string, $fixedTransitionDuration: number):void;
        
        public CrossFadeInFixedTime($stateName: string, $fixedTransitionDuration: number, $layer: number):void;
        
        public CrossFadeInFixedTime($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number):void;
        /**
         * Creates a crossfade from the current state to any other state using times in seconds.
         * @param stateName The name of the state.
         * @param stateHashName The hash name of the state.
         * @param fixedTransitionDuration The duration of the transition (in seconds).
         * @param layer The layer where the crossfade occurs.
         * @param fixedTimeOffset The time of the state (in seconds).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        public CrossFadeInFixedTime($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number):void;
        
        public CrossFadeInFixedTime($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number):void;
        
        public CrossFadeInFixedTime($stateHashName: number, $fixedTransitionDuration: number, $layer: number):void;
        
        public CrossFadeInFixedTime($stateHashName: number, $fixedTransitionDuration: number):void;
        /**
         * Creates a crossfade from the current state to any other state using times in seconds.
         * @param stateName The name of the state.
         * @param stateHashName The hash name of the state.
         * @param fixedTransitionDuration The duration of the transition (in seconds).
         * @param layer The layer where the crossfade occurs.
         * @param fixedTimeOffset The time of the state (in seconds).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        public CrossFadeInFixedTime($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number):void;
        /**
         * Forces a write of the default values stored in the animator.
         */
        public WriteDefaultValues():void;
        
        public CrossFade($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number):void;
        
        public CrossFade($stateName: string, $normalizedTransitionDuration: number, $layer: number):void;
        
        public CrossFade($stateName: string, $normalizedTransitionDuration: number):void;
        /**
         * Creates a crossfade from the current state to any other state using normalized times.
         * @param stateName The name of the state.
         * @param stateHashName The hash name of the state.
         * @param normalizedTransitionDuration The duration of the transition (normalized).
         * @param layer The layer where the crossfade occurs.
         * @param normalizedTimeOffset The time of the state (normalized).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        public CrossFade($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number):void;
        /**
         * Creates a crossfade from the current state to any other state using normalized times.
         * @param stateName The name of the state.
         * @param stateHashName The hash name of the state.
         * @param normalizedTransitionDuration The duration of the transition (normalized).
         * @param layer The layer where the crossfade occurs.
         * @param normalizedTimeOffset The time of the state (normalized).
         * @param normalizedTransitionTime The time of the transition (normalized).
         */
        public CrossFade($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number):void;
        
        public CrossFade($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number):void;
        
        public CrossFade($stateHashName: number, $normalizedTransitionDuration: number, $layer: number):void;
        
        public CrossFade($stateHashName: number, $normalizedTransitionDuration: number):void;
        
        public PlayInFixedTime($stateName: string, $layer: number):void;
        
        public PlayInFixedTime($stateName: string):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param fixedTime The time offset (in seconds).
         */
        public PlayInFixedTime($stateName: string, $layer: number, $fixedTime: number):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param fixedTime The time offset (in seconds).
         */
        public PlayInFixedTime($stateNameHash: number, $layer: number, $fixedTime: number):void;
        
        public PlayInFixedTime($stateNameHash: number, $layer: number):void;
        
        public PlayInFixedTime($stateNameHash: number):void;
        
        public Play($stateName: string, $layer: number):void;
        
        public Play($stateName: string):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param normalizedTime The time offset between zero and one.
         */
        public Play($stateName: string, $layer: number, $normalizedTime: number):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param normalizedTime The time offset between zero and one.
         */
        public Play($stateNameHash: number, $layer: number, $normalizedTime: number):void;
        
        public Play($stateNameHash: number, $layer: number):void;
        
        public Play($stateNameHash: number):void;
        /**
         * Sets an AvatarTarget and a targetNormalizedTime for the current state.
         * @param targetIndex The avatar body part that is queried.
         * @param targetNormalizedTime The current state Time that is queried.
         */
        public SetTarget($targetIndex: AvatarTarget, $targetNormalizedTime: number):void;
        /**
         * Returns Transform mapped to this human bone id.
         * @param humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
         */
        public GetBoneTransform($humanBoneId: HumanBodyBones):Transform;
        /**
         * Sets the animator in playback mode.
         */
        public StartPlayback():void;
        /**
         * Stops the animator playback mode. When playback stops, the avatar resumes getting control from game logic.
         */
        public StopPlayback():void;
        /**
         * Sets the animator in recording mode, and allocates a circular buffer of size frameCount.
         * @param frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
         */
        public StartRecording($frameCount: number):void;
        /**
         * Stops animator record mode.
         */
        public StopRecording():void;
        /**
         * Returns true if the state exists in this layer, false otherwise.
         * @param layerIndex The layer index.
         * @param stateID The state ID.
         * @returns True if the state exists in this layer, false otherwise.
         */
        public HasState($layerIndex: number, $stateID: number):boolean;
        /**
         * Generates an parameter id from a string.
         * @param name The string to convert to Id.
         */
        public static StringToHash($name: string):number;
        /**
         * Evaluates the animator based on deltaTime.
         * @param deltaTime The time delta.
         */
        public Update($deltaTime: number):void;
        /**
         * Rebind all the animated properties and mesh data with the Animator.
         */
        public Rebind():void;
        /**
         * Apply the default Root Motion.
         */
        public ApplyBuiltinRootMotion():void;
        
                    
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
     * Information about what animation clips is played and its weight.
     */
    interface AnimationInfo extends System.ValueType {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Quaternions are used to represent rotations.
     */
    interface Quaternion extends System.ValueType {
        
                    
    }
    /**
     * The update mode of the Animator.
     */
    enum AnimatorUpdateMode { Normal = 0, AnimatePhysics = 1, UnscaledTime = 2 }
    /**
     * IK Goal.
     */
    enum AvatarIKGoal { LeftFoot = 0, RightFoot = 1, LeftHand = 2, RightHand = 3 }
    /**
     * IK Hint.
     */
    enum AvatarIKHint { LeftKnee = 0, RightKnee = 1, LeftElbow = 2, RightElbow = 3 }
    /**
     * Human Body Bones.
     */
    enum HumanBodyBones { Hips = 0, LeftUpperLeg = 1, RightUpperLeg = 2, LeftLowerLeg = 3, RightLowerLeg = 4, LeftFoot = 5, RightFoot = 6, Spine = 7, Chest = 8, UpperChest = 54, Neck = 9, Head = 10, LeftShoulder = 11, RightShoulder = 12, LeftUpperArm = 13, RightUpperArm = 14, LeftLowerArm = 15, RightLowerArm = 16, LeftHand = 17, RightHand = 18, LeftToes = 19, RightToes = 20, LeftEye = 21, RightEye = 22, Jaw = 23, LeftThumbProximal = 24, LeftThumbIntermediate = 25, LeftThumbDistal = 26, LeftIndexProximal = 27, LeftIndexIntermediate = 28, LeftIndexDistal = 29, LeftMiddleProximal = 30, LeftMiddleIntermediate = 31, LeftMiddleDistal = 32, LeftRingProximal = 33, LeftRingIntermediate = 34, LeftRingDistal = 35, LeftLittleProximal = 36, LeftLittleIntermediate = 37, LeftLittleDistal = 38, RightThumbProximal = 39, RightThumbIntermediate = 40, RightThumbDistal = 41, RightIndexProximal = 42, RightIndexIntermediate = 43, RightIndexDistal = 44, RightMiddleProximal = 45, RightMiddleIntermediate = 46, RightMiddleDistal = 47, RightRingProximal = 48, RightRingIntermediate = 49, RightRingDistal = 50, RightLittleProximal = 51, RightLittleIntermediate = 52, RightLittleDistal = 53, LastBone = 55 }
    /**
     * StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from.
     */
    class StateMachineBehaviour extends ScriptableObject {
        
        public OnStateEnter($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number):void;
        
        public OnStateUpdate($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number):void;
        
        public OnStateExit($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number):void;
        
        public OnStateMove($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number):void;
        
        public OnStateIK($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number):void;
        /**
         * Called on the first Update frame when making a transition to a state machine. This is not called when making a transition into a state machine sub-state.
         * @param animator The Animator playing this state machine.
         * @param stateMachinePathHash The full path hash for this state machine.
         */
        public OnStateMachineEnter($animator: Animator, $stateMachinePathHash: number):void;
        /**
         * Called on the last Update frame when making a transition out of a StateMachine. This is not called when making a transition into a StateMachine sub-state.
         * @param animator The Animator playing this state machine.
         * @param stateMachinePathHash The full path hash for this state machine.
         */
        public OnStateMachineExit($animator: Animator, $stateMachinePathHash: number):void;
        
        public OnStateEnter($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number, $controller: UnityEngine_Animations.AnimatorControllerPlayable):void;
        
        public OnStateUpdate($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number, $controller: UnityEngine_Animations.AnimatorControllerPlayable):void;
        
        public OnStateExit($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number, $controller: UnityEngine_Animations.AnimatorControllerPlayable):void;
        
        public OnStateMove($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number, $controller: UnityEngine_Animations.AnimatorControllerPlayable):void;
        
        public OnStateIK($animator: Animator, $stateInfo: AnimatorStateInfo, $layerIndex: number, $controller: UnityEngine_Animations.AnimatorControllerPlayable):void;
        
        public OnStateMachineEnter($animator: Animator, $stateMachinePathHash: number, $controller: UnityEngine_Animations.AnimatorControllerPlayable):void;
        
        public OnStateMachineExit($animator: Animator, $stateMachinePathHash: number, $controller: UnityEngine_Animations.AnimatorControllerPlayable):void;
        
                    
    }
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Information about the current or next state.
     */
    class AnimatorStateInfo extends System.ValueType {
        /**
         * The full path hash for this state.
         */
        public get fullPathHash(): number;
        /**
         * The hash is generated using Animator.StringToHash. The hash does not include the name of the parent layer.
         */
        public get shortNameHash(): number;
        /**
         * Normalized time of the State.
         */
        public get normalizedTime(): number;
        /**
         * Current duration of the state.
         */
        public get length(): number;
        /**
         * The playback speed of the animation. 1 is the normal playback speed.
         */
        public get speed(): number;
        /**
         * The speed multiplier for this state.
         */
        public get speedMultiplier(): number;
        /**
         * The Tag of the State.
         */
        public get tagHash(): number;
        /**
         * Is the state looping.
         */
        public get loop(): boolean;
        /**
         * Does name match the name of the active state in the statemachine?
         */
        public IsName($name: string):boolean;
        /**
         * Does tag match the tag of the active state in the statemachine.
         */
        public IsTag($tag: string):boolean;
        
        public get_Clone(): AnimatorStateInfo;            
    }
    /**
     * Information about the current transition.
     */
    class AnimatorTransitionInfo extends System.ValueType {
        /**
         * The hash name of the Transition.
         */
        public get fullPathHash(): number;
        /**
         * The simplified name of the Transition.
         */
        public get nameHash(): number;
        /**
         * The user-specified name of the Transition.
         */
        public get userNameHash(): number;
        /**
         * The unit of the transition duration.
         */
        public get durationUnit(): DurationUnit;
        /**
         * Duration of the transition.
         */
        public get duration(): number;
        /**
         * Normalized time of the Transition.
         */
        public get normalizedTime(): number;
        /**
         * Returns true if the transition is from an AnyState node, or from Animator.CrossFade.
         */
        public get anyState(): boolean;
        /**
         * Does name match the name of the active Transition.
         */
        public IsName($name: string):boolean;
        /**
         * Does userName match the name of the active Transition.
         */
        public IsUserName($name: string):boolean;
        
                    
    }
    /**
     * Information about clip being played and blended by the Animator.
     */
    class AnimatorClipInfo extends System.ValueType {
        /**
         * Returns the animation clip played by the Animator.
         */
        public get clip(): AnimationClip;
        /**
         * Returns the blending weight used by the Animator to blend this clip.
         */
        public get weight(): number;
        
        public get_Clone(): AnimatorClipInfo;            
    }
    /**
     * Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API.
     */
    class AnimatorControllerParameter extends System.Object {
        /**
         * The name of the parameter.
         */
        public get name(): string;
        public set name(value: string);
        /**
         * Returns the hash of the parameter based on its name.
         */
        public get nameHash(): number;
        /**
         * The type of the parameter.
         */
        public get type(): AnimatorControllerParameterType;
        public set type(value: AnimatorControllerParameterType);
        /**
         * The default float value for the parameter.
         */
        public get defaultFloat(): number;
        public set defaultFloat(value: number);
        /**
         * The default int value for the parameter.
         */
        public get defaultInt(): number;
        public set defaultInt(value: number);
        /**
         * The default bool value for the parameter.
         */
        public get defaultBool(): boolean;
        public set defaultBool(value: boolean);
        
        public constructor();
        
        public Equals($o: any):boolean;
        
        public GetHashCode():number;
        
                    
    }
    /**
     * Target.
     */
    enum AvatarTarget { Root = 0, Body = 1, LeftFoot = 2, RightFoot = 3, LeftHand = 4, RightHand = 5 }
    /**
     * Use this struct to specify the position and rotation weight mask for Animator.MatchTarget.
     */
    class MatchTargetWeightMask extends System.ValueType {
        /**
         * Position XYZ weight.
         */
        public get positionXYZWeight(): Vector3;
        public set positionXYZWeight(value: Vector3);
        /**
         * Rotation weight.
         */
        public get rotationWeight(): number;
        public set rotationWeight(value: number);
        /**
         * MatchTargetWeightMask contructor.
         * @param positionXYZWeight Position XYZ weight.
         * @param rotationWeight Rotation weight.
         */
        public constructor($positionXYZWeight: Vector3, $rotationWeight: number);
        
        public get_Clone(): MatchTargetWeightMask;            
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Culling mode for the Animator.
     */
    enum AnimatorCullingMode { AlwaysAnimate = 0, CullUpdateTransforms = 1, CullCompletely = 2, BasedOnRenderers = 1 }
    /**
     * The mode of the Animator's recorder.
     */
    enum AnimatorRecorderMode { Offline = 0, Playback = 1, Record = 2 }
    /**
     * The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime.
     */
    class RuntimeAnimatorController extends Object {
        /**
         * Retrieves all AnimationClip used by the controller.
         */
        public get animationClips(): AnimationClip[];
        
                    
    }
    /**
     * Avatar definition.
     */
    class Avatar extends Object {
        /**
         * Return true if this avatar is a valid mecanim avatar. It can be a generic avatar or a human avatar.
         */
        public get isValid(): boolean;
        /**
         * Return true if this avatar is a valid human avatar.
         */
        public get isHuman(): boolean;
        /**
         * Returns the HumanDescription used to create this Avatar.
         */
        public get humanDescription(): HumanDescription;
        
                    
    }
    /**
     * The animation component is used to play back animations.
     */
    class Animation extends Behaviour {
        /**
         * The default animation.
         */
        public get clip(): AnimationClip;
        public set clip(value: AnimationClip);
        /**
         * Should the default animation clip (the Animation.clip property) automatically start playing on startup?
         */
        public get playAutomatically(): boolean;
        public set playAutomatically(value: boolean);
        /**
         * How should time beyond the playback range of the clip be treated?
         */
        public get wrapMode(): WrapMode;
        public set wrapMode(value: WrapMode);
        /**
         * Is an animation currently being played?
         */
        public get isPlaying(): boolean;
        /**
         * When turned on, animations will be executed in the physics loop. This is only useful in conjunction with kinematic rigidbodies.
         */
        public get animatePhysics(): boolean;
        public set animatePhysics(value: boolean);
        /**
         * Controls culling of this Animation component.
         */
        public get cullingType(): AnimationCullingType;
        public set cullingType(value: AnimationCullingType);
        /**
         * AABB of this Animation animation component in local space.
         */
        public get localBounds(): Bounds;
        public set localBounds(value: Bounds);
        
        public constructor();
        /**
         * Stops all playing animations that were started with this Animation.
         */
        public Stop():void;
        /**
         * Stops an animation named name.
         */
        public Stop($name: string):void;
        /**
         * Rewinds all animations.
         */
        public Rewind():void;
        /**
         * Rewinds the animation named name.
         */
        public Rewind($name: string):void;
        /**
         * Samples animations at the current state.
         */
        public Sample():void;
        /**
         * Is the animation named name playing?
         */
        public IsPlaying($name: string):boolean;
        
        public get_Item($name: string):AnimationState;
        
        public Play():boolean;
        /**
         * Plays an animation without blending.
         */
        public Play($mode: PlayMode):boolean;
        /**
         * Plays an animation without blending.
         */
        public Play($animation: string):boolean;
        /**
         * Plays an animation without blending.
         */
        public Play($animation: string, $mode: PlayMode):boolean;
        /**
         * Fades the animation with name animation in over a period of time seconds and fades other animations out.
         */
        public CrossFade($animation: string):void;
        /**
         * Fades the animation with name animation in over a period of time seconds and fades other animations out.
         */
        public CrossFade($animation: string, $fadeLength: number):void;
        /**
         * Fades the animation with name animation in over a period of time seconds and fades other animations out.
         */
        public CrossFade($animation: string, $fadeLength: number, $mode: PlayMode):void;
        /**
         * Blends the animation named animation towards targetWeight over the next time seconds.
         */
        public Blend($animation: string):void;
        /**
         * Blends the animation named animation towards targetWeight over the next time seconds.
         */
        public Blend($animation: string, $targetWeight: number):void;
        /**
         * Blends the animation named animation towards targetWeight over the next time seconds.
         */
        public Blend($animation: string, $targetWeight: number, $fadeLength: number):void;
        /**
         * Cross fades an animation after previous animations has finished playing.
         */
        public CrossFadeQueued($animation: string):AnimationState;
        /**
         * Cross fades an animation after previous animations has finished playing.
         */
        public CrossFadeQueued($animation: string, $fadeLength: number):AnimationState;
        /**
         * Cross fades an animation after previous animations has finished playing.
         */
        public CrossFadeQueued($animation: string, $fadeLength: number, $queue: QueueMode):AnimationState;
        /**
         * Cross fades an animation after previous animations has finished playing.
         */
        public CrossFadeQueued($animation: string, $fadeLength: number, $queue: QueueMode, $mode: PlayMode):AnimationState;
        /**
         * Plays an animation after previous animations has finished playing.
         */
        public PlayQueued($animation: string):AnimationState;
        /**
         * Plays an animation after previous animations has finished playing.
         */
        public PlayQueued($animation: string, $queue: QueueMode):AnimationState;
        /**
         * Plays an animation after previous animations has finished playing.
         */
        public PlayQueued($animation: string, $queue: QueueMode, $mode: PlayMode):AnimationState;
        /**
         * Adds a clip to the animation with name newName.
         */
        public AddClip($clip: AnimationClip, $newName: string):void;
        /**
         * Adds clip to the only play between firstFrame and lastFrame. The new clip will also be added to the animation with name newName.
         * @param addLoopFrame Should an extra frame be inserted at the end that matches the first frame? Turn this on if you are making a looping animation.
         */
        public AddClip($clip: AnimationClip, $newName: string, $firstFrame: number, $lastFrame: number):void;
        /**
         * Adds clip to the only play between firstFrame and lastFrame. The new clip will also be added to the animation with name newName.
         * @param addLoopFrame Should an extra frame be inserted at the end that matches the first frame? Turn this on if you are making a looping animation.
         */
        public AddClip($clip: AnimationClip, $newName: string, $firstFrame: number, $lastFrame: number, $addLoopFrame: boolean):void;
        /**
         * Remove clip from the animation list.
         */
        public RemoveClip($clip: AnimationClip):void;
        /**
         * Remove clip from the animation list.
         */
        public RemoveClip($clipName: string):void;
        /**
         * Get the number of clips currently assigned to this animation.
         */
        public GetClipCount():number;
        
        public SyncLayer($layer: number):void;
        
        public GetEnumerator():System_Collections.IEnumerator;
        
        public GetClip($name: string):AnimationClip;
        
                    
    }
    /**
     * Stores keyframe based animations.
     */
    class AnimationClip extends Motion {
        /**
         * Animation length in seconds. (Read Only)
         */
        public get length(): number;
        /**
         * Frame rate at which keyframes are sampled. (Read Only)
         */
        public get frameRate(): number;
        public set frameRate(value: number);
        /**
         * Sets the default wrap mode used in the animation state.
         */
        public get wrapMode(): WrapMode;
        public set wrapMode(value: WrapMode);
        /**
         * AABB of this Animation Clip in local space of Animation component that it is attached too.
         */
        public get localBounds(): Bounds;
        public set localBounds(value: Bounds);
        /**
         * Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).
         */
        public get legacy(): boolean;
        public set legacy(value: boolean);
        /**
         * Returns true if the animation contains curve that drives a humanoid rig.
         */
        public get humanMotion(): boolean;
        /**
         * Returns true if the animation clip has no curves and no events.
         */
        public get empty(): boolean;
        /**
         * Returns true if the Animation has animation on the root transform.
         */
        public get hasGenericRootTransform(): boolean;
        /**
         * Returns true if the AnimationClip has editor curves for its root motion.
         */
        public get hasMotionFloatCurves(): boolean;
        /**
         * Returns true if the AnimationClip has root motion curves.
         */
        public get hasMotionCurves(): boolean;
        /**
         * Returns true if the AnimationClip has root Curves.
         */
        public get hasRootCurves(): boolean;
        /**
         * Animation Events for this animation clip.
         */
        public get events(): AnimationEvent[];
        public set events(value: AnimationEvent[]);
        /**
         * Creates a new animation clip.
         */
        public constructor();
        /**
         * Samples an animation at a given time for any animated properties.
         * @param go The animated game object.
         * @param time The time to sample an animation.
         */
        public SampleAnimation($go: GameObject, $time: number):void;
        /**
         * Assigns the curve to animate a specific property.
         * @param relativePath Path to the game object this curve applies to. The relativePath
                is formatted similar to a pathname, e.g. "rootspineleftArm".  If relativePath
                is empty it refers to the game object the animation clip is attached to.
         * @param type The class type of the component that is animated.
         * @param propertyName The name or path to the property being animated.
         * @param curve The animation curve.
         */
        public SetCurve($relativePath: string, $type: System.Type, $propertyName: string, $curve: AnimationCurve):void;
        /**
         * Realigns quaternion keys to ensure shortest interpolation paths.
         */
        public EnsureQuaternionContinuity():void;
        /**
         * Clears all curves from the clip.
         */
        public ClearCurves():void;
        /**
         * Adds an animation event to the clip.
         * @param evt AnimationEvent to add.
         */
        public AddEvent($evt: AnimationEvent):void;
        
                    
    }
    /**
     * Base class for AnimationClips and BlendTrees.
     */
    class Motion extends Object {
        
        public get averageDuration(): number;
        
        public get averageAngularSpeed(): number;
        
        public get averageSpeed(): Vector3;
        
        public get apparentSpeed(): number;
        
        public get isLooping(): boolean;
        
        public get legacy(): boolean;
        
        public get isHumanMotion(): boolean;
        
                    
    }
    /**
     * Determines how time is treated outside of the keyframed range of an AnimationClip or AnimationCurve.
     */
    enum WrapMode { Once = 1, Loop = 2, PingPong = 4, Default = 0, ClampForever = 8, Clamp = 1 }
    /**
     * The AnimationState gives full control over animation blending.
     */
    class AnimationState extends TrackedReference {
        /**
         * Enables / disables the animation.
         */
        public get enabled(): boolean;
        public set enabled(value: boolean);
        /**
         * The weight of animation.
         */
        public get weight(): number;
        public set weight(value: number);
        /**
         * Wrapping mode of the animation.
         */
        public get wrapMode(): WrapMode;
        public set wrapMode(value: WrapMode);
        /**
         * The current time of the animation.
         */
        public get time(): number;
        public set time(value: number);
        /**
         * The normalized time of the animation.
         */
        public get normalizedTime(): number;
        public set normalizedTime(value: number);
        /**
         * The playback speed of the animation. 1 is normal playback speed.
         */
        public get speed(): number;
        public set speed(value: number);
        /**
         * The normalized playback speed.
         */
        public get normalizedSpeed(): number;
        public set normalizedSpeed(value: number);
        /**
         * The length of the animation clip in seconds.
         */
        public get length(): number;
        
        public get layer(): number;
        public set layer(value: number);
        /**
         * The clip that is being played by this animation state.
         */
        public get clip(): AnimationClip;
        /**
         * The name of the animation.
         */
        public get name(): string;
        public set name(value: string);
        /**
         * Which blend mode should be used?
         */
        public get blendMode(): AnimationBlendMode;
        public set blendMode(value: AnimationBlendMode);
        
        public constructor();
        /**
         * Adds a transform which should be animated. This allows you to reduce the number of animations you have to create.
         * @param mix The transform to animate.
         * @param recursive Whether to also animate all children of the specified transform.
         */
        public AddMixingTransform($mix: Transform):void;
        /**
         * Adds a transform which should be animated. This allows you to reduce the number of animations you have to create.
         * @param mix The transform to animate.
         * @param recursive Whether to also animate all children of the specified transform.
         */
        public AddMixingTransform($mix: Transform, $recursive: boolean):void;
        /**
         * Removes a transform which should be animated.
         */
        public RemoveMixingTransform($mix: Transform):void;
        
                    
    }
    
    interface TrackedReference extends System.Object {
        
                    
    }
    /**
     * Used by Animation.Play function.
     */
    enum PlayMode { StopSameLayer = 0, StopAll = 4 }
    /**
     * Used by Animation.Play function.
     */
    enum QueueMode { CompleteOthers = 0, PlayNow = 2 }
    
    enum AnimationPlayMode { Stop = 0, Queue = 1, Mix = 2 }
    /**
     * This enum controlls culling of Animation component.
     */
    enum AnimationCullingType { AlwaysAnimate = 0, BasedOnRenderers = 1, BasedOnClipBounds = 2, BasedOnUserBounds = 3 }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Store a collection of Keyframes that can be evaluated over time.
     */
    interface AnimationCurve extends System.Object {
        
                    
    }
    /**
     * AnimationEvent lets you call a script function similar to SendMessage as part of playing back an animation.
     */
    class AnimationEvent extends System.Object {
        /**
         * String parameter that is stored in the event and will be sent to the function.
         */
        public get stringParameter(): string;
        public set stringParameter(value: string);
        /**
         * Float parameter that is stored in the event and will be sent to the function.
         */
        public get floatParameter(): number;
        public set floatParameter(value: number);
        /**
         * Int parameter that is stored in the event and will be sent to the function.
         */
        public get intParameter(): number;
        public set intParameter(value: number);
        /**
         * Object reference parameter that is stored in the event and will be sent to the function.
         */
        public get objectReferenceParameter(): Object;
        public set objectReferenceParameter(value: Object);
        /**
         * The name of the function that will be called.
         */
        public get functionName(): string;
        public set functionName(value: string);
        /**
         * The time at which the event will be fired off.
         */
        public get time(): number;
        public set time(value: number);
        /**
         * Function call options.
         */
        public get messageOptions(): SendMessageOptions;
        public set messageOptions(value: SendMessageOptions);
        /**
         * Returns true if this Animation event has been fired by an Animation component.
         */
        public get isFiredByLegacy(): boolean;
        /**
         * Returns true if this Animation event has been fired by an Animator component.
         */
        public get isFiredByAnimator(): boolean;
        /**
         * The animation state that fired this event (Read Only).
         */
        public get animationState(): AnimationState;
        /**
         * The animator state info related to this event (Read Only).
         */
        public get animatorStateInfo(): AnimatorStateInfo;
        /**
         * The animator clip info related to this event (Read Only).
         */
        public get animatorClipInfo(): AnimatorClipInfo;
        /**
         * Creates a new animation event.
         */
        public constructor();
        
                    
    }
    /**
     * Use this interface to have a class provide its own list of Animation Clips to the Animation Window.  The class must inherit from MonoBehaviour.
     */
    interface IAnimationClipSource {
        
        GetAnimationClips($results: System_Collections_Generic.List$1<AnimationClip>):void;
        
                    
    }
    /**
     * SharedBetweenAnimatorsAttribute is an attribute that specify that this StateMachineBehaviour should be instantiate only once and shared among all Animator instance. This attribute reduce the memory footprint for each controller instance.
     */
    class SharedBetweenAnimatorsAttribute extends System.Attribute {
        
        public constructor();
        
                    
    }
    /**
     * Used by Animation.Play function.
     */
    enum AnimationBlendMode { Blend = 0, Additive = 1 }
    /**
     * Options for how to send a message.
     */
    enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
    /**
     * The type of the parameter.
     */
    enum AnimatorControllerParameterType { Float = 1, Int = 3, Bool = 4, Trigger = 9 }
    /**
     * Describe the unit of a duration.
     */
    enum DurationUnit { Fixed = 0, Normalized = 1 }
    /**
     * Interface to control Animator Override Controller.
     */
    class AnimatorOverrideController extends RuntimeAnimatorController {
        /**
         * The Runtime Animator Controller that the Animator Override Controller overrides.
         */
        public get runtimeAnimatorController(): RuntimeAnimatorController;
        public set runtimeAnimatorController(value: RuntimeAnimatorController);
        /**
         * Returns the count of overrides.
         */
        public get overridesCount(): number;
        /**
         * Creates an empty Animator Override Controller.
         */
        public constructor();
        /**
         * Creates an Animator Override Controller that overrides controller.
         * @param controller Runtime Animator Controller to override.
         */
        public constructor($controller: RuntimeAnimatorController);
        
        public get_Item($name: string):AnimationClip;
        
        public set_Item($name: string, $value: AnimationClip):void;
        
        public get_Item($clip: AnimationClip):AnimationClip;
        
        public set_Item($clip: AnimationClip, $value: AnimationClip):void;
        
        public GetOverrides($overrides: System_Collections_Generic.List$1<System_Collections_Generic.KeyValuePair$2<AnimationClip, AnimationClip>>):void;
        
        public ApplyOverrides($overrides: System_Collections_Generic.IList$1<System_Collections_Generic.KeyValuePair$2<AnimationClip, AnimationClip>>):void;
        
                    
    }
    /**
     * This class defines a pair of clips used by AnimatorOverrideController.
     */
    interface AnimationClipPair extends System.Object {
        
                    
    }
    /**
     * Various utilities for animator manipulation.
     */
    class AnimatorUtility extends System.Object {
        
        public constructor();
        /**
         * This function will remove all transform hierarchy under GameObject, the animator will write directly transform matrices into the skin mesh matrices saving alot of CPU cycles.
         * @param go GameObject to Optimize.
         * @param exposedTransforms List of transform name to expose.
         */
        public static OptimizeTransformHierarchy($go: GameObject, $exposedTransforms: string[]):void;
        /**
         * This function will recreate all transform hierarchy under GameObject.
         * @param go GameObject to Deoptimize.
         */
        public static DeoptimizeTransformHierarchy($go: GameObject):void;
        
                    
    }
    /**
     * Enumeration of all the muscles in the body.
     */
    enum BodyDof { SpineFrontBack = 0, SpineLeftRight = 1, SpineRollLeftRight = 2, ChestFrontBack = 3, ChestLeftRight = 4, ChestRollLeftRight = 5, UpperChestFrontBack = 6, UpperChestLeftRight = 7, UpperChestRollLeftRight = 8, LastBodyDof = 9 }
    /**
     * Enumeration of all the muscles in the head.
     */
    enum HeadDof { NeckFrontBack = 0, NeckLeftRight = 1, NeckRollLeftRight = 2, HeadFrontBack = 3, HeadLeftRight = 4, HeadRollLeftRight = 5, LeftEyeDownUp = 6, LeftEyeInOut = 7, RightEyeDownUp = 8, RightEyeInOut = 9, JawDownUp = 10, JawLeftRight = 11, LastHeadDof = 12 }
    /**
     * Enumeration of all the muscles in a leg.
     */
    enum LegDof { UpperLegFrontBack = 0, UpperLegInOut = 1, UpperLegRollInOut = 2, LegCloseOpen = 3, LegRollInOut = 4, FootCloseOpen = 5, FootInOut = 6, ToesUpDown = 7, LastLegDof = 8 }
    /**
     * Enumeration of all the muscles in an arm.
     */
    enum ArmDof { ShoulderDownUp = 0, ShoulderFrontBack = 1, ArmDownUp = 2, ArmFrontBack = 3, ArmRollInOut = 4, ForeArmCloseOpen = 5, ForeArmRollInOut = 6, HandDownUp = 7, HandInOut = 8, LastArmDof = 9 }
    /**
     * Enumeration of all the muscles in a finger.
     */
    enum FingerDof { ProximalDownUp = 0, ProximalInOut = 1, IntermediateCloseOpen = 2, DistalCloseOpen = 3, LastFingerDof = 4 }
    /**
     * Enumeration of all the parts in a human.
     */
    enum HumanPartDof { Body = 0, Head = 1, LeftLeg = 2, RightLeg = 3, LeftArm = 4, RightArm = 5, LeftThumb = 6, LeftIndex = 7, LeftMiddle = 8, LeftRing = 9, LeftLittle = 10, RightThumb = 11, RightIndex = 12, RightMiddle = 13, RightRing = 14, RightLittle = 15, LastHumanPartDof = 16 }
    /**
     * Class that holds humanoid avatar parameters to pass to the AvatarBuilder.BuildHumanAvatar function.
     */
    class HumanDescription extends System.ValueType {
        /**
         * Mapping between Mecanim bone names and bone names in the rig.
         */
        public human: HumanBone[];
        /**
         * List of bone Transforms to include in the model.
         */
        public skeleton: SkeletonBone[];
        /**
         * Defines how the upper arm's roll/twisting is distributed between the shoulder and elbow joints.
         */
        public get upperArmTwist(): number;
        public set upperArmTwist(value: number);
        /**
         * Defines how the lower arm's roll/twisting is distributed between the elbow and wrist joints.
         */
        public get lowerArmTwist(): number;
        public set lowerArmTwist(value: number);
        /**
         * Defines how the upper leg's roll/twisting is distributed between the thigh and knee joints.
         */
        public get upperLegTwist(): number;
        public set upperLegTwist(value: number);
        /**
         * Defines how the lower leg's roll/twisting is distributed between the knee and ankle.
         */
        public get lowerLegTwist(): number;
        public set lowerLegTwist(value: number);
        /**
         * Amount by which the arm's length is allowed to stretch when using IK.
         */
        public get armStretch(): number;
        public set armStretch(value: number);
        /**
         * Amount by which the leg's length is allowed to stretch when using IK.
         */
        public get legStretch(): number;
        public set legStretch(value: number);
        /**
         * Modification to the minimum distance between the feet of a humanoid model.
         */
        public get feetSpacing(): number;
        public set feetSpacing(value: number);
        /**
         * True for any human that has a translation Degree of Freedom (DoF). It is set to false by default.
         */
        public get hasTranslationDoF(): boolean;
        public set hasTranslationDoF(value: boolean);
        
                    
    }
    /**
     * Details of the Transform name mapped to the skeleton bone of a model and its default position and rotation in the T-pose.
     */
    class SkeletonBone extends System.ValueType {
        /**
         * The name of the Transform mapped to the bone.
         */
        public name: string;
        /**
         * The T-pose position of the bone in local space.
         */
        public position: Vector3;
        /**
         * The T-pose rotation of the bone in local space.
         */
        public rotation: Quaternion;
        /**
         * The T-pose scaling of the bone in local space.
         */
        public scale: Vector3;
        
                    
    }
    /**
     * This class stores the rotation limits that define the muscle for a single human bone.
     */
    class HumanLimit extends System.ValueType {
        /**
         * Should this limit use the default values?
         */
        public get useDefaultValues(): boolean;
        public set useDefaultValues(value: boolean);
        /**
         * The maximum negative rotation away from the initial value that this muscle can apply.
         */
        public get min(): Vector3;
        public set min(value: Vector3);
        /**
         * The maximum rotation away from the initial value that this muscle can apply.
         */
        public get max(): Vector3;
        public set max(value: Vector3);
        /**
         * The default orientation of a bone when no muscle action is applied.
         */
        public get center(): Vector3;
        public set center(value: Vector3);
        /**
         * Length of the bone to which the limit is applied.
         */
        public get axisLength(): number;
        public set axisLength(value: number);
        
        public get_Clone(): HumanLimit;            
    }
    /**
     * The mapping between a bone in the model and the conceptual bone in the Mecanim human anatomy.
     */
    class HumanBone extends System.ValueType {
        /**
         * The rotation limits that define the muscle for this bone.
         */
        public limit: HumanLimit;
        /**
         * The name of the bone to which the Mecanim human bone is mapped.
         */
        public get boneName(): string;
        public set boneName(value: string);
        /**
         * The name of the Mecanim human bone to which the bone from the model is mapped.
         */
        public get humanName(): string;
        public set humanName(value: string);
        
                    
    }
    /**
     * Class to build avatars from user scripts.
     */
    class AvatarBuilder extends System.Object {
        
        public constructor();
        /**
         * Create a humanoid avatar.
         * @param go Root object of your transform hierachy. It must be the top most gameobject when you create the avatar.
         * @param humanDescription Humanoid description of the avatar.
         * @returns Returns the Avatar, you must always always check the avatar is valid before using it with Avatar.isValid.
         */
        public static BuildHumanAvatar($go: GameObject, $humanDescription: HumanDescription):Avatar;
        /**
         * Create a new generic avatar.
         * @param go Root object of your transform hierarchy.
         * @param rootMotionTransformName Transform name of the root motion transform. If empty no root motion is defined and you must take care of avatar movement yourself.
         */
        public static BuildGenericAvatar($go: GameObject, $rootMotionTransformName: string):Avatar;
        
                    
    }
    /**
     * Avatar body part.
     */
    enum AvatarMaskBodyPart { Root = 0, Body = 1, Head = 2, LeftLeg = 3, RightLeg = 4, LeftArm = 5, RightArm = 6, LeftFingers = 7, RightFingers = 8, LeftFootIK = 9, RightFootIK = 10, LeftHandIK = 11, RightHandIK = 12, LastBodyPart = 13 }
    /**
     * AvatarMask is used to mask out humanoid body parts and transforms.
     */
    class AvatarMask extends Object {
        /**
         * Number of transforms.
         */
        public get transformCount(): number;
        public set transformCount(value: number);
        /**
         * Creates a new AvatarMask.
         */
        public constructor();
        /**
         * Returns true if the humanoid body part at the given index is active.
         * @param index The index of the humanoid body part.
         */
        public GetHumanoidBodyPartActive($index: AvatarMaskBodyPart):boolean;
        /**
         * Sets the humanoid body part at the given index to active or not.
         * @param index The index of the humanoid body part.
         * @param value Active or not.
         */
        public SetHumanoidBodyPartActive($index: AvatarMaskBodyPart, $value: boolean):void;
        
        public AddTransformPath($transform: Transform):void;
        /**
         * Adds a transform path into the AvatarMask.
         * @param transform The transform to add into the AvatarMask.
         * @param recursive Whether to also add all children of the specified transform.
         */
        public AddTransformPath($transform: Transform, $recursive: boolean):void;
        
        public RemoveTransformPath($transform: Transform):void;
        /**
         * Removes a transform path from the AvatarMask.
         * @param transform The Transform that should be removed from the AvatarMask.
         * @param recursive Whether to also remove all children of the specified transform.
         */
        public RemoveTransformPath($transform: Transform, $recursive: boolean):void;
        /**
         * Returns the path of the transform at the given index.
         * @param index The index of the transform.
         */
        public GetTransformPath($index: number):string;
        /**
         * Sets the path of the transform at the given index.
         * @param index The index of the transform.
         * @param path The path of the transform.
         */
        public SetTransformPath($index: number, $path: string):void;
        /**
         * Returns true if the transform at the given index is active.
         * @param index The index of the transform.
         */
        public GetTransformActive($index: number):boolean;
        /**
         * Sets the tranform at the given index to active or not.
         * @param index The index of the transform.
         * @param value Active or not.
         */
        public SetTransformActive($index: number, $value: boolean):void;
        
                    
    }
    /**
     * Retargetable humanoid pose.
     */
    class HumanPose extends System.ValueType {
        /**
         * The human body position for that pose.
         */
        public bodyPosition: Vector3;
        /**
         * The human body orientation for that pose.
         */
        public bodyRotation: Quaternion;
        /**
         * The array of muscle values for that pose.
         */
        public muscles: number[];
        
                    
    }
    /**
     * Use this class to create, read, and write the HumanPose for a humanoid avatar skeleton hierarchy or an avatar pose.
     */
    class HumanPoseHandler extends System.Object {
        /**
         * Creates a human pose handler from an avatar and a root transform and either a list of joint paths.
         * @param avatar The avatar from which HumanPose will be read or written. The avatar must be a humanoid.
         * @param root The top most parent of the skeleton hierarchy defined in the humanoid avatar. This must match the avatar definition.
         * @param jointPaths A list that defines the avatar joint paths. Each joint path starts from the node after the root transform and continues down the avatar skeleton hierarchy. The root transform joint path is an empty string.
         */
        public constructor($avatar: Avatar, $root: Transform);
        /**
         * Creates a human pose handler from an avatar and a root transform and either a list of joint paths.
         * @param avatar The avatar from which HumanPose will be read or written. The avatar must be a humanoid.
         * @param root The top most parent of the skeleton hierarchy defined in the humanoid avatar. This must match the avatar definition.
         * @param jointPaths A list that defines the avatar joint paths. Each joint path starts from the node after the root transform and continues down the avatar skeleton hierarchy. The root transform joint path is an empty string.
         */
        public constructor($avatar: Avatar, $jointPaths: string[]);
        
        public Dispose():void;
        /**
         * Computes a human pose from the avatar skeleton, stores the pose in the human pose handler, and returns the human pose.
         * @param humanPose The output human pose. In the human pose, the bodyPosition and bodyRotation are the position and rotation of the approximate center of mass of the humanoid in world space. bodyPosition is normalized: the position is divided by avatar human scale.
         */
        public GetHumanPose($humanPose: $Ref<HumanPose>):void;
        /**
         * Stores the specified human pose inside the human pose handler.
         * @param humanPose The human pose to set. In the human pose, the bodyPosition and bodyRotation are the position and rotation of the approximate center of mass of the humanoid. This is relative to the humanoid root transform and it is normalized: the local position is divided by avatar human scale.
         */
        public SetHumanPose($humanPose: $Ref<HumanPose>):void;
        /**
         * Gets the internal human pose stored in the human pose handler.
         * @param humanPose The output human pose. In the human pose, the bodyPosition and bodyRotation are the position and rotation of the approximate center of mass of the humanoid in world space. bodyPosition is normalized: the position is divided by avatar human scale.
         */
        public GetInternalHumanPose($humanPose: $Ref<HumanPose>):void;
        /**
         * Stores the specified human pose as the internal human pose inside the human pose handler.
         * @param humanPose The human pose to set. In the human pose, the bodyPosition and bodyRotation are the position and rotation of the approximate center of mass of the humanoid. This is relative to the humanoid root transform and it is normalized: the local position is divided by avatar human scale.
         */
        public SetInternalHumanPose($humanPose: $Ref<HumanPose>):void;
        
        public GetInternalAvatarPose($avatarPose: Unity_Collections.NativeArray$1<number>):void;
        
        public SetInternalAvatarPose($avatarPose: Unity_Collections.NativeArray$1<number>):void;
        
                    
    }
    /**
     * Details of all the human bone and muscle types defined by Mecanim.
     */
    class HumanTrait extends System.Object {
        /**
         * The number of human muscle types defined by Mecanim.
         */
        public static get MuscleCount(): number;
        /**
         * Array of the names of all human muscle types defined by Mecanim.
         */
        public static get MuscleName(): string[];
        /**
         * The number of human bone types defined by Mecanim.
         */
        public static get BoneCount(): number;
        /**
         * Array of the names of all human bone types defined by Mecanim.
         */
        public static get BoneName(): string[];
        /**
         * The number of bone types that are required by Mecanim for any human model.
         */
        public static get RequiredBoneCount(): number;
        
        public constructor();
        /**
         * Obtain the muscle index for a particular bone index and "degree of freedom".
         * @param i Bone index.
         * @param dofIndex Number representing a "degree of freedom": 0 for X-Axis, 1 for Y-Axis, 2 for Z-Axis.
         */
        public static MuscleFromBone($i: number, $dofIndex: number):number;
        /**
         * Return the bone to which a particular muscle is connected.
         * @param i Muscle index.
         */
        public static BoneFromMuscle($i: number):number;
        /**
         * Is the bone a member of the minimal set of bones that Mecanim requires for a human model?
         * @param i Index of the bone to test.
         */
        public static RequiredBone($i: number):boolean;
        /**
         * Get the default minimum value of rotation for a muscle in degrees.
         * @param i Muscle index.
         */
        public static GetMuscleDefaultMin($i: number):number;
        /**
         * Get the default maximum value of rotation for a muscle in degrees.
         * @param i Muscle index.
         */
        public static GetMuscleDefaultMax($i: number):number;
        /**
         * Gets the bone hierarchy mass.
         * @param i The humanoid bone index.
         * @returns The bone hierarchy mass.
         */
        public static GetBoneDefaultHierarchyMass($i: number):number;
        /**
         * Returns parent humanoid bone index of a bone.
         * @param i Humanoid bone index to get parent from.
         * @returns Humanoid bone index of parent.
         */
        public static GetParentBone($i: number):number;
        
                    
    }
    
    interface Animator {
        /**
         * Creates a dependency between animator jobs and the job represented by the supplied job handle. To add multiple job dependencies, call this method for each job that need to run before the Animator's jobs.
         * @param animator The Animator instance that calls this method.
         * @param jobHandle The JobHandle of the job that needs to run before animator jobs.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        AddJobDependency($jobHandle: Unity_Jobs.JobHandle):void;
        /**
         * Create a TransformStreamHandle representing the new binding between the Animator and a Transform already bound to the Animator.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to bind.
         * @returns Returns the TransformStreamHandle that represents the new binding.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        BindStreamTransform($transform: UnityEngine.Transform):TransformStreamHandle;
        /**
         * Create a PropertyStreamHandle representing the new binding on the Component property of a Transform already bound to the Animator.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does animate an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertyStreamHandle that represents the new binding.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        BindStreamProperty($transform: UnityEngine.Transform, $type: System.Type, $property: string):PropertyStreamHandle;
        /**
         * Create a custom property in the AnimationStream to pass extra data to downstream animation jobs in your graph. Custom properties created in the AnimationStream do not exist in the scene.
         * @param animator The Animator instance that calls this method.
         * @param name The name of the property.
         * @param type The type of property to create (float, integer or boolean).
         * @returns Returns the PropertyStreamHandle that represents the new binding.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        BindCustomStreamProperty($property: string, $type: CustomStreamPropertyType):PropertyStreamHandle;
        /**
         * Create a PropertyStreamHandle representing the new binding on the Component property of a Transform already bound to the Animator.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does animate an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertyStreamHandle that represents the new binding.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        BindStreamProperty($transform: UnityEngine.Transform, $type: System.Type, $property: string, $isObjectReference: boolean):PropertyStreamHandle;
        /**
         * Create a TransformSceneHandle representing the new binding between the Animator and a Transform in the Scene.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to bind.
         * @returns Returns the TransformSceneHandle that represents the new binding.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        BindSceneTransform($transform: UnityEngine.Transform):TransformSceneHandle;
        /**
         * Create a PropertySceneHandle representing the new binding on the Component property of a Transform in the Scene.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does access an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertySceneHandle that represents the new binding.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        BindSceneProperty($transform: UnityEngine.Transform, $type: System.Type, $property: string):PropertySceneHandle;
        /**
         * Create a PropertySceneHandle representing the new binding on the Component property of a Transform in the Scene.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does access an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertySceneHandle that represents the new binding.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        BindSceneProperty($transform: UnityEngine.Transform, $type: System.Type, $property: string, $isObjectReference: boolean):PropertySceneHandle;
        /**
         * Open a new stream on the Animator.
         * @param animator The Animator instance that calls this method.
         * @param stream The new stream.
         * @returns Returns whether or not the stream has been opened.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        OpenAnimationStream($stream: $Ref<AnimationStream>):boolean;
        /**
         * Close a stream that has been opened using OpenAnimationStream.
         * @param animator The Animator instance that calls this method.
         * @param stream The stream to close.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        CloseAnimationStream($stream: $Ref<AnimationStream>):void;
        /**
         * Newly created handles are always resolved lazily on the next access when the jobs are run. To avoid a cpu spike while evaluating the jobs you can manually resolve all handles from the main thread.
         * @param animator The Animator instance that calls this method.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        ResolveAllStreamHandles():void;
        /**
         * Newly created handles are always resolved lazily on the next access when the jobs are run. To avoid a cpu spike while evaluating the jobs you can manually resolve all handles from the main thread.
         * @param animator The Animator instance that calls this method.
         * @extension UnityEngine.Animations.AnimatorJobExtensions
         */
        ResolveAllSceneHandles():void;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Attribute extends Object {
        
                    
    }
    
    interface UInt16 extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface KeyValuePair$2<TKey,TValue> extends System.ValueType {
        
                    
    }
    
    interface IList$1<T> {
        
                    
    }
    
}
declare module 'UnityEngine.Playables' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Animations from 'UnityEngine.Animations';
        
    /**
     * Use the PlayableGraph to manage Playable creations and destructions.
     */
    interface PlayableGraph extends System.ValueType {
        
                    
    }
    /**
     * Implements high-level utility methods to simplify use of the Playable API with Animations.
     */
    class AnimationPlayableUtilities extends System.Object {
        /**
         * Plays the Playable on  the given Animator.
         * @param animator Target Animator.
         * @param playable The Playable that will be played.
         * @param graph The Graph that owns the Playable.
         */
        public static Play($animator: UnityEngine.Animator, $playable: Playable, $graph: PlayableGraph):void;
        /**
         * Creates a PlayableGraph to be played on the given Animator. An AnimationClipPlayable is also created for the given AnimationClip.
         * @param animator Target Animator.
         * @param clip The AnimationClip to create an AnimationClipPlayable for.
         * @param graph The created PlayableGraph.
         * @returns A handle to the newly-created AnimationClipPlayable.
         */
        public static PlayClip($animator: UnityEngine.Animator, $clip: UnityEngine.AnimationClip, $graph: $Ref<PlayableGraph>):UnityEngine_Animations.AnimationClipPlayable;
        /**
         * Creates a PlayableGraph to be played on the given Animator. An AnimationMixerPlayable is also created.
         * @param animator Target Animator.
         * @param inputCount The input count for the AnimationMixerPlayable.
         * @param graph The created PlayableGraph.
         * @returns A handle to the newly-created AnimationMixerPlayable.
         */
        public static PlayMixer($animator: UnityEngine.Animator, $inputCount: number, $graph: $Ref<PlayableGraph>):UnityEngine_Animations.AnimationMixerPlayable;
        /**
         * Creates a PlayableGraph to be played on the given Animator. An AnimationLayerMixerPlayable is also created.
         * @param animator Target Animator.
         * @param inputCount The input count for the AnimationLayerMixerPlayable. Defines the number of layers.
         * @param graph The created PlayableGraph.
         * @returns A handle to the newly-created AnimationLayerMixerPlayable.
         */
        public static PlayLayerMixer($animator: UnityEngine.Animator, $inputCount: number, $graph: $Ref<PlayableGraph>):UnityEngine_Animations.AnimationLayerMixerPlayable;
        /**
         * Creates a PlayableGraph to be played on the given Animator. An AnimatorControllerPlayable is also created for the given RuntimeAnimatorController.
         * @param animator Target Animator.
         * @param controller The RuntimeAnimatorController to create an AnimatorControllerPlayable for.
         * @param graph The created PlayableGraph.
         * @returns A handle to the newly-created AnimatorControllerPlayable.
         */
        public static PlayAnimatorController($animator: UnityEngine.Animator, $controller: UnityEngine.RuntimeAnimatorController, $graph: $Ref<PlayableGraph>):UnityEngine_Animations.AnimatorControllerPlayable;
        
                    
    }
    /**
     * Playables are customizable runtime objects that can be connected together and are contained in a PlayableGraph to create complex behaviours.
     */
    interface Playable extends System.ValueType {
        
                    
    }
    /**
     * Struct that holds information regarding an output of a PlayableAsset.
     */
    interface PlayableBinding extends System.ValueType {
        
                    
    }
    
    interface PlayableHandle extends System.ValueType {
        
                    
    }
    
    interface PlayableOutputHandle extends System.ValueType {
        
                    
    }
    /**
     * See: Playables.IPlayableOutput.
     */
    interface PlayableOutput extends System.ValueType {
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IEnumerator {
        
                    
    }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Animations' {

    import * as System from 'System';
    import * as UnityEngine_Playables from 'UnityEngine.Playables';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_Animations_AimConstraint from 'UnityEngine.Animations.AimConstraint';
    import * as Unity_Collections from 'Unity.Collections';
    import * as Unity_Jobs from 'Unity.Jobs';
    import * as UnityEngine_Experimental_Animations from 'UnityEngine.Experimental.Animations';
        
    /**
     * An implementation of IPlayable that controls an animation RuntimeAnimatorController.
     */
    class AnimatorControllerPlayable extends System.ValueType {
        /**
         * Returns an invalid AnimatorControllerPlayable.
         */
        public static get Null(): AnimatorControllerPlayable;
        /**
         * Creates an AnimatorControllerPlayable in the PlayableGraph.
         * @param graph The PlayableGraph object that will own the AnimatorControllerPlayable.
         * @param controller The RuntimeAnimatorController that will be added in the graph.
         * @returns A AnimatorControllerPlayable.
         */
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $controller: UnityEngine.RuntimeAnimatorController):AnimatorControllerPlayable;
        
        public GetHandle():UnityEngine_Playables.PlayableHandle;
        
        public SetHandle($handle: UnityEngine_Playables.PlayableHandle):void;
        
        public static op_Implicit($playable: AnimatorControllerPlayable):UnityEngine_Playables.Playable;
        
        public static op_Explicit($playable: UnityEngine_Playables.Playable):AnimatorControllerPlayable;
        
        public Equals($other: AnimatorControllerPlayable):boolean;
        /**
         * Returns the value of the given float parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetFloat($name: string):number;
        /**
         * Returns the value of the given float parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetFloat($id: number):number;
        /**
         * Send float values to the AnimatorController to affect transitions.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         * @param dampTime The damper total time.
         * @param deltaTime The delta time to give to the damper.
         */
        public SetFloat($name: string, $value: number):void;
        /**
         * Send float values to the AnimatorController to affect transitions.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         * @param dampTime The damper total time.
         * @param deltaTime The delta time to give to the damper.
         */
        public SetFloat($id: number, $value: number):void;
        /**
         * Returns the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetBool($name: string):boolean;
        /**
         * Returns the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetBool($id: number):boolean;
        /**
         * Sets the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetBool($name: string, $value: boolean):void;
        /**
         * Sets the value of the given boolean parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetBool($id: number, $value: boolean):void;
        /**
         * Returns the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetInteger($name: string):number;
        /**
         * Returns the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns The value of the parameter.
         */
        public GetInteger($id: number):number;
        /**
         * Sets the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetInteger($name: string, $value: number):void;
        /**
         * Sets the value of the given integer parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @param value The new parameter value.
         */
        public SetInteger($id: number, $value: number):void;
        /**
         * Sets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public SetTrigger($name: string):void;
        /**
         * Sets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public SetTrigger($id: number):void;
        /**
         * Resets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public ResetTrigger($name: string):void;
        /**
         * Resets the value of the given trigger parameter.
         * @param name The parameter name.
         * @param id The parameter ID.
         */
        public ResetTrigger($id: number):void;
        /**
         * Returns true if the parameter is controlled by a curve, false otherwise.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns True if the parameter is controlled by a curve, false otherwise.
         */
        public IsParameterControlledByCurve($name: string):boolean;
        /**
         * Returns true if the parameter is controlled by a curve, false otherwise.
         * @param name The parameter name.
         * @param id The parameter ID.
         * @returns True if the parameter is controlled by a curve, false otherwise.
         */
        public IsParameterControlledByCurve($id: number):boolean;
        
        public GetLayerCount():number;
        /**
         * Returns the layer name.
         * @param layerIndex The layer index.
         * @returns The layer name.
         */
        public GetLayerName($layerIndex: number):string;
        /**
         * Returns the index of the layer with the given name.
         * @param layerName The layer name.
         * @returns The layer index.
         */
        public GetLayerIndex($layerName: string):number;
        /**
         * Returns the weight of the layer at the specified index.
         * @param layerIndex The layer index.
         * @returns The layer weight.
         */
        public GetLayerWeight($layerIndex: number):number;
        /**
         * Sets the weight of the layer at the given index.
         * @param layerIndex The layer index.
         * @param weight The new layer weight.
         */
        public SetLayerWeight($layerIndex: number, $weight: number):void;
        /**
         * Returns an AnimatorStateInfo with the information on the current state.
         * @param layerIndex The layer index.
         * @returns An AnimatorStateInfo with the information on the current state.
         */
        public GetCurrentAnimatorStateInfo($layerIndex: number):UnityEngine.AnimatorStateInfo;
        /**
         * Returns an AnimatorStateInfo with the information on the next state.
         * @param layerIndex The layer index.
         * @returns An AnimatorStateInfo with the information on the next state.
         */
        public GetNextAnimatorStateInfo($layerIndex: number):UnityEngine.AnimatorStateInfo;
        /**
         * Returns an AnimatorTransitionInfo with the informations on the current transition.
         * @param layerIndex The layer's index.
         * @returns An AnimatorTransitionInfo with the informations on the current transition.
         */
        public GetAnimatorTransitionInfo($layerIndex: number):UnityEngine.AnimatorTransitionInfo;
        /**
         * Returns an array of all the AnimatorClipInfo in the current state of the given layer.
         * @param layerIndex The layer index.
         * @returns An array of all the AnimatorClipInfo in the current state.
         */
        public GetCurrentAnimatorClipInfo($layerIndex: number):UnityEngine.AnimatorClipInfo[];
        
        public GetCurrentAnimatorClipInfo($layerIndex: number, $clips: System_Collections_Generic.List$1<UnityEngine.AnimatorClipInfo>):void;
        
        public GetNextAnimatorClipInfo($layerIndex: number, $clips: System_Collections_Generic.List$1<UnityEngine.AnimatorClipInfo>):void;
        /**
         * Returns the number of AnimatorClipInfo in the current state.
         * @param layerIndex The layer index.
         * @returns The number of AnimatorClipInfo in the current state.
         */
        public GetCurrentAnimatorClipInfoCount($layerIndex: number):number;
        /**
         * Returns the number of AnimatorClipInfo in the next state.
         * @param layerIndex The layer index.
         * @returns The number of AnimatorClipInfo in the next state.
         */
        public GetNextAnimatorClipInfoCount($layerIndex: number):number;
        /**
         * Returns an array of all the AnimatorClipInfo in the next state of the given layer.
         * @param layerIndex The layer index.
         * @returns An array of all the AnimatorClipInfo in the next state.
         */
        public GetNextAnimatorClipInfo($layerIndex: number):UnityEngine.AnimatorClipInfo[];
        /**
         * Returns true if there is a transition on the given layer, false otherwise.
         * @param layerIndex The layer index.
         * @returns True if there is a transition on the given layer, false otherwise.
         */
        public IsInTransition($layerIndex: number):boolean;
        
        public GetParameterCount():number;
        /**
         * See AnimatorController.parameters.
         */
        public GetParameter($index: number):UnityEngine.AnimatorControllerParameter;
        
        public CrossFadeInFixedTime($stateName: string, $transitionDuration: number):void;
        
        public CrossFadeInFixedTime($stateName: string, $transitionDuration: number, $layer: number):void;
        
        public CrossFadeInFixedTime($stateName: string, $transitionDuration: number, $layer: number, $fixedTime: number):void;
        
        public CrossFadeInFixedTime($stateNameHash: number, $transitionDuration: number):void;
        
        public CrossFadeInFixedTime($stateNameHash: number, $transitionDuration: number, $layer: number):void;
        
        public CrossFadeInFixedTime($stateNameHash: number, $transitionDuration: number, $layer: number, $fixedTime: number):void;
        
        public CrossFade($stateName: string, $transitionDuration: number):void;
        
        public CrossFade($stateName: string, $transitionDuration: number, $layer: number):void;
        
        public CrossFade($stateName: string, $transitionDuration: number, $layer: number, $normalizedTime: number):void;
        
        public CrossFade($stateNameHash: number, $transitionDuration: number):void;
        
        public CrossFade($stateNameHash: number, $transitionDuration: number, $layer: number):void;
        
        public CrossFade($stateNameHash: number, $transitionDuration: number, $layer: number, $normalizedTime: number):void;
        
        public PlayInFixedTime($stateName: string):void;
        
        public PlayInFixedTime($stateName: string, $layer: number):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param fixedTime The time offset (in seconds).
         */
        public PlayInFixedTime($stateName: string, $layer: number, $fixedTime: number):void;
        
        public PlayInFixedTime($stateNameHash: number):void;
        
        public PlayInFixedTime($stateNameHash: number, $layer: number):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param fixedTime The time offset (in seconds).
         */
        public PlayInFixedTime($stateNameHash: number, $layer: number, $fixedTime: number):void;
        
        public Play($stateName: string):void;
        
        public Play($stateName: string, $layer: number):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param normalizedTime The time offset between zero and one.
         */
        public Play($stateName: string, $layer: number, $normalizedTime: number):void;
        
        public Play($stateNameHash: number):void;
        
        public Play($stateNameHash: number, $layer: number):void;
        /**
         * Plays a state.
         * @param stateName The state name.
         * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
         * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
         * @param normalizedTime The time offset between zero and one.
         */
        public Play($stateNameHash: number, $layer: number, $normalizedTime: number):void;
        /**
         * Returns true if the state exists in this layer, false otherwise.
         * @param layerIndex The layer index.
         * @param stateID The state ID.
         * @returns True if the state exists in this layer, false otherwise.
         */
        public HasState($layerIndex: number, $stateID: number):boolean;
        
        public get_Clone(): AnimatorControllerPlayable;            
    }
    /**
     * A IPlayableOutput implementation that connects the PlayableGraph to an Animator in the Scene.
     */
    class AnimationPlayableOutput extends System.ValueType {
        
        public static get Null(): AnimationPlayableOutput;
        /**
         * Creates an AnimationPlayableOutput in the PlayableGraph.
         * @param graph The PlayableGraph that will contain the AnimationPlayableOutput.
         * @param name The name of the output.
         * @param target The Animator that will process the PlayableGraph.
         * @returns A new AnimationPlayableOutput attached to the PlayableGraph.
         */
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $name: string, $target: UnityEngine.Animator):AnimationPlayableOutput;
        
        public GetHandle():UnityEngine_Playables.PlayableOutputHandle;
        
        public static op_Implicit($output: AnimationPlayableOutput):UnityEngine_Playables.PlayableOutput;
        
        public static op_Explicit($output: UnityEngine_Playables.PlayableOutput):AnimationPlayableOutput;
        /**
         * Returns the Animator that plays the animation graph.
         * @returns The targeted Animator.
         */
        public GetTarget():UnityEngine.Animator;
        /**
         * Sets the Animator that plays the animation graph.
         * @param value The targeted Animator.
         */
        public SetTarget($value: UnityEngine.Animator):void;
        
        public get_Clone(): AnimationPlayableOutput;            
    }
    /**
     * A Playable that controls an AnimationClip.
     */
    class AnimationClipPlayable extends System.ValueType {
        /**
         * Creates an AnimationClipPlayable in the PlayableGraph.
         * @param graph The PlayableGraph object that will own the AnimationClipPlayable.
         * @param clip The AnimationClip that will be added in the PlayableGraph.
         * @returns A AnimationClipPlayable linked to the PlayableGraph.
         */
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $clip: UnityEngine.AnimationClip):AnimationClipPlayable;
        
        public GetHandle():UnityEngine_Playables.PlayableHandle;
        
        public static op_Implicit($playable: AnimationClipPlayable):UnityEngine_Playables.Playable;
        
        public static op_Explicit($playable: UnityEngine_Playables.Playable):AnimationClipPlayable;
        
        public Equals($other: AnimationClipPlayable):boolean;
        /**
         * Returns the AnimationClip stored in the AnimationClipPlayable.
         */
        public GetAnimationClip():UnityEngine.AnimationClip;
        /**
         * Returns the state of the ApplyFootIK flag.
         */
        public GetApplyFootIK():boolean;
        /**
         * Sets the value of the ApplyFootIK flag.
         * @param value The new value of the ApplyFootIK flag.
         */
        public SetApplyFootIK($value: boolean):void;
        /**
         * Returns the state of the ApplyPlayableIK flag.
         */
        public GetApplyPlayableIK():boolean;
        /**
         * Requests OnAnimatorIK to be called on the animated GameObject.
         */
        public SetApplyPlayableIK($value: boolean):void;
        
        public get_Clone(): AnimationClipPlayable;            
    }
    /**
     * An implementation of IPlayable that controls an animation mixer.
     */
    class AnimationMixerPlayable extends System.ValueType {
        /**
         * Returns an invalid AnimationMixerPlayable.
         */
        public static get Null(): AnimationMixerPlayable;
        /**
         * Creates an AnimationMixerPlayable in the PlayableGraph.
         * @param graph The PlayableGraph that will contain the new AnimationMixerPlayable.
         * @param inputCount The number of inputs that the mixer will update.
         * @param normalizeWeights True to force a weight normalization of the inputs.
         * @returns A new AnimationMixerPlayable linked to the PlayableGraph.
         */
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $inputCount?: number, $normalizeWeights?: boolean):AnimationMixerPlayable;
        
        public GetHandle():UnityEngine_Playables.PlayableHandle;
        
        public static op_Implicit($playable: AnimationMixerPlayable):UnityEngine_Playables.Playable;
        
        public static op_Explicit($playable: UnityEngine_Playables.Playable):AnimationMixerPlayable;
        
        public Equals($other: AnimationMixerPlayable):boolean;
        
        public get_Clone(): AnimationMixerPlayable;            
    }
    /**
     * An implementation of IPlayable that controls an animation layer mixer.
     */
    class AnimationLayerMixerPlayable extends System.ValueType {
        /**
         * Returns an invalid AnimationLayerMixerPlayable.
         */
        public static get Null(): AnimationLayerMixerPlayable;
        /**
         * Creates an AnimationLayerMixerPlayable in the PlayableGraph.
         * @param graph The PlayableGraph that will contain the new AnimationLayerMixerPlayable.
         * @param inputCount The number of layers.
         * @returns A new AnimationLayerMixerPlayable linked to the PlayableGraph.
         */
        public static Create($graph: UnityEngine_Playables.PlayableGraph, $inputCount?: number):AnimationLayerMixerPlayable;
        
        public GetHandle():UnityEngine_Playables.PlayableHandle;
        
        public static op_Implicit($playable: AnimationLayerMixerPlayable):UnityEngine_Playables.Playable;
        
        public static op_Explicit($playable: UnityEngine_Playables.Playable):AnimationLayerMixerPlayable;
        
        public Equals($other: AnimationLayerMixerPlayable):boolean;
        /**
         * Returns true if the layer is additive, false otherwise.
         * @param layerIndex The layer index.
         * @returns True if the layer is additive, false otherwise.
         */
        public IsLayerAdditive($layerIndex: number):boolean;
        /**
         * Specifies whether a layer is additive or not. Additive layers blend with previous layers.
         * @param layerIndex The layer index.
         * @param value Whether the layer is additive or not. Set to true for an additive blend, or false for a regular blend.
         */
        public SetLayerAdditive($layerIndex: number, $value: boolean):void;
        /**
         * Sets the mask for the current layer.
         * @param layerIndex The layer index.
         * @param mask The AvatarMask used to create the new LayerMask.
         */
        public SetLayerMaskFromAvatarMask($layerIndex: number, $mask: UnityEngine.AvatarMask):void;
        
        public get_Clone(): AnimationLayerMixerPlayable;            
    }
    /**
     * A PlayableBinding that contains information representing an AnimationPlayableOutput.
     */
    class AnimationPlayableBinding extends System.Object {
        /**
         * Creates a PlayableBinding that contains information representing an AnimationPlayableOutput.
         * @param name The name of the AnimationPlayableOutput.
         * @param key A reference to a UnityEngine.Object that acts as a key for this binding.
         * @returns Returns a PlayableBinding that contains information that is used to create an AnimationPlayableOutput.
         */
        public static Create($name: string, $key: UnityEngine.Object):UnityEngine_Playables.PlayableBinding;
        
                    
    }
    /**
     * The interface defining an animation job to use with an IAnimationJobPlayable.
     */
    interface IAnimationJob {
        /**
         * Defines what to do when processing the animation.
         * @param stream The animation stream to work on.
         */
        ProcessAnimation($stream: AnimationStream):void;
        /**
         * Defines what to do when processing the root motion.
         * @param stream The animation stream to work on.
         */
        ProcessRootMotion($stream: AnimationStream):void;
        
                    
    }
    /**
     * The stream of animation data passed from one Playable to another.
     */
    class AnimationStream extends System.ValueType {
        /**
         * Returns true if the stream is valid; false otherwise. (Read Only)
         */
        public get isValid(): boolean;
        /**
         * Gets the delta time for the evaluated frame. (Read Only)
         */
        public get deltaTime(): number;
        /**
         * Gets or sets the avatar velocity for the evaluated frame.
         */
        public get velocity(): UnityEngine.Vector3;
        public set velocity(value: UnityEngine.Vector3);
        /**
         * Gets or sets the avatar angular velocity for the evaluated frame.
         */
        public get angularVelocity(): UnityEngine.Vector3;
        public set angularVelocity(value: UnityEngine.Vector3);
        /**
         * Gets the root motion position for the evaluated frame. (Read Only)
         */
        public get rootMotionPosition(): UnityEngine.Vector3;
        /**
         * Gets the root motion rotation for the evaluated frame. (Read Only)
         */
        public get rootMotionRotation(): UnityEngine.Quaternion;
        /**
         * Returns true if the stream is from a humanoid avatar; false otherwise. (Read Only)
         */
        public get isHumanStream(): boolean;
        /**
         * Gets the number of input streams. (Read Only)
         */
        public get inputStreamCount(): number;
        /**
         * Gets the same stream, but as an AnimationHumanStream.
         * @returns Returns the same stream, but as an AnimationHumanStream.
         */
        public AsHuman():AnimationHumanStream;
        /**
         * Gets the AnimationStream of the playable input at index.
         * @param index The input index.
         * @returns Returns the AnimationStream of the playable input at index. Returns an invalid stream if the input is not an animation Playable.
         */
        public GetInputStream($index: number):AnimationStream;
        /**
         * Gets the weight of the Playable connected at a specific input index.
         * @param index The input index.
         * @returns Returns the weight of the Playable input as a float.
         */
        public GetInputWeight($index: number):number;
        /**
         * Deep copies motion from a source animation stream to the current animation stream.
         * @param animationStream The source animation stream with the motion to deep copy.
         */
        public CopyAnimationStreamMotion($animationStream: AnimationStream):void;
        
        public get_Clone(): AnimationStream;            
    }
    /**
     * The interface defining an animation playable that uses IAnimationJob.
     */
    interface IAnimationJobPlayable {
        /**
         * Gets the job data contained in the playable.
         * @returns Returns the IAnimationJob data contained in the playable.
         */
        GetJobData<T>():T;
        
        SetJobData<T>($jobData: T):void;
        
                    
    }
    /**
     * Allows a class to modify how an AnimationClip is sampled in the Animation window by providing its own Playable nodes to the Animation window PlayableGraph. The class must also inherit from MonoBehaviour.
     */
    interface IAnimationWindowPreview {
        /**
         * Notification callback when the Animation window starts previewing an AnimationClip.
         */
        StartPreview():void;
        /**
         * Notification callback when the Animation window stops previewing an AnimationClip.
         */
        StopPreview():void;
        /**
         * Notification callback when the Animation Window updates its PlayableGraph before sampling an AnimationClip.
         * @param graph The Animation window PlayableGraph.
         */
        UpdatePreviewGraph($graph: UnityEngine_Playables.PlayableGraph):void;
        /**
         * Appends custom Playable nodes to the Animation window PlayableGraph.
         * @param graph The Animation window PlayableGraph.
         * @param inputPlayable Current root of the PlayableGraph.
         * @returns Returns the new root of the PlayableGraph.
         */
        BuildPreviewGraph($graph: UnityEngine_Playables.PlayableGraph, $inputPlayable: UnityEngine_Playables.Playable):UnityEngine_Playables.Playable;
        
                    
    }
    /**
     * Use this attribute in a script to mark a property as non-animatable.
     */
    class NotKeyableAttribute extends System.Attribute {
        /**
         * Use this attribute in a script to mark a property as non-animatable.
         */
        public constructor();
        
                    
    }
    /**
     * Constrains the orientation of an object relative to the position of one or more source objects, such that the object is facing the average position of the sources.
     */
    class AimConstraint extends UnityEngine.Behaviour {
        /**
         * The weight of the constraint component.
         */
        public get weight(): number;
        public set weight(value: number);
        /**
         * Activates or deactivates the constraint.
         */
        public get constraintActive(): boolean;
        public set constraintActive(value: boolean);
        /**
         * Locks the offset and rotation at rest.
         */
        public get locked(): boolean;
        public set locked(value: boolean);
        /**
         * The rotation used when the sources have a total weight of 0.
         */
        public get rotationAtRest(): UnityEngine.Vector3;
        public set rotationAtRest(value: UnityEngine.Vector3);
        /**
         * Represents an offset from the constrained orientation.
         */
        public get rotationOffset(): UnityEngine.Vector3;
        public set rotationOffset(value: UnityEngine.Vector3);
        /**
         * The axes affected by the AimConstraint.
         */
        public get rotationAxis(): Axis;
        public set rotationAxis(value: Axis);
        /**
         * The axis towards which the constrained object orients.
         */
        public get aimVector(): UnityEngine.Vector3;
        public set aimVector(value: UnityEngine.Vector3);
        /**
         * The up vector.
         */
        public get upVector(): UnityEngine.Vector3;
        public set upVector(value: UnityEngine.Vector3);
        /**
         * The world up Vector used when the world up type is AimConstraint.WorldUpType.Vector or AimConstraint.WorldUpType.ObjectRotationUp.
         */
        public get worldUpVector(): UnityEngine.Vector3;
        public set worldUpVector(value: UnityEngine.Vector3);
        /**
         * The world up object, used to calculate the world up vector when the world up Type is AimConstraint.WorldUpType.ObjectUp or AimConstraint.WorldUpType.ObjectRotationUp.
         */
        public get worldUpObject(): UnityEngine.Transform;
        public set worldUpObject(value: UnityEngine.Transform);
        /**
         * The type of the world up vector.
         */
        public get worldUpType(): UnityEngine_Animations_AimConstraint.WorldUpType;
        public set worldUpType(value: UnityEngine_Animations_AimConstraint.WorldUpType);
        /**
         * The number of sources set on the component (read-only).
         */
        public get sourceCount(): number;
        
        public GetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
        public SetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        /**
         * Adds a constraint source.
         * @param source The source object and its weight.
         * @returns Returns the index of the added source.
         */
        public AddSource($source: ConstraintSource):number;
        /**
         * Removes a source from the component.
         * @param index The index of the source to remove.
         */
        public RemoveSource($index: number):void;
        /**
         * Gets a constraint source by index.
         * @param index The index of the source.
         * @returns The source object and its weight.
         */
        public GetSource($index: number):ConstraintSource;
        /**
         * Sets a source at a specified index.
         * @param index The index of the source to set.
         * @param source The source object and its weight.
         */
        public SetSource($index: number, $source: ConstraintSource):void;
        
                    
    }
    /**
     * Represents the axes used in 3D space.
     */
    enum Axis { None = 0, X = 1, Y = 2, Z = 4 }
    /**
     * Represents a source for the constraint.
     */
    class ConstraintSource extends System.ValueType {
        /**
         * The transform component of the source object.
         */
        public get sourceTransform(): UnityEngine.Transform;
        public set sourceTransform(value: UnityEngine.Transform);
        /**
         * The weight of the source in the evaluation of the constraint.
         */
        public get weight(): number;
        public set weight(value: number);
        
                    
    }
    /**
     * The humanoid stream of animation data passed from one Playable to another.
     */
    class AnimationHumanStream extends System.ValueType {
        /**
         * Returns true if the stream is valid; false otherwise. (Read Only)
         */
        public get isValid(): boolean;
        /**
         * The scale of the Avatar. (Read Only)
         */
        public get humanScale(): number;
        /**
         * The left foot height from the floor. (Read Only)
         */
        public get leftFootHeight(): number;
        /**
         * The right foot height from the floor. (Read Only)
         */
        public get rightFootHeight(): number;
        /**
         * The position of the body center of mass relative to the root.
         */
        public get bodyLocalPosition(): UnityEngine.Vector3;
        public set bodyLocalPosition(value: UnityEngine.Vector3);
        /**
         * The rotation of the body center of mass relative to the root.
         */
        public get bodyLocalRotation(): UnityEngine.Quaternion;
        public set bodyLocalRotation(value: UnityEngine.Quaternion);
        /**
         * The position of the body center of mass in world space.
         */
        public get bodyPosition(): UnityEngine.Vector3;
        public set bodyPosition(value: UnityEngine.Vector3);
        /**
         * The rotation of the body center of mass in world space.
         */
        public get bodyRotation(): UnityEngine.Quaternion;
        public set bodyRotation(value: UnityEngine.Quaternion);
        /**
         * The left foot velocity from the last evaluated frame. (Read Only)
         */
        public get leftFootVelocity(): UnityEngine.Vector3;
        /**
         * The right foot velocity from the last evaluated frame. (Read Only)
         */
        public get rightFootVelocity(): UnityEngine.Vector3;
        /**
         * Returns the muscle value.
         * @param muscle The Muscle that is queried.
         * @returns The muscle value.
         */
        public GetMuscle($muscle: MuscleHandle):number;
        /**
         * Sets the muscle value.
         * @param muscle The Muscle that is queried.
         * @param value The muscle value.
         */
        public SetMuscle($muscle: MuscleHandle, $value: number):void;
        /**
         * Reset the current pose to the stance pose (T Pose).
         */
        public ResetToStancePose():void;
        /**
         * Returns the position of this IK goal in world space computed from the stream current pose.
         * @param index The AvatarIKGoal that is queried.
         * @returns The position of this IK goal.
         */
        public GetGoalPositionFromPose($index: UnityEngine.AvatarIKGoal):UnityEngine.Vector3;
        /**
         * Returns the rotation of this IK goal in world space computed from the stream current pose.
         * @param index The AvatarIKGoal that is queried.
         * @returns The rotation of this IK goal.
         */
        public GetGoalRotationFromPose($index: UnityEngine.AvatarIKGoal):UnityEngine.Quaternion;
        /**
         * Returns the position of this IK goal relative to the root.
         * @param index The AvatarIKGoal that is queried.
         * @returns The position of this IK goal.
         */
        public GetGoalLocalPosition($index: UnityEngine.AvatarIKGoal):UnityEngine.Vector3;
        /**
         * Sets the position of this IK goal relative to the root.
         * @param index The AvatarIKGoal that is queried.
         * @param pos The position of this IK goal.
         */
        public SetGoalLocalPosition($index: UnityEngine.AvatarIKGoal, $pos: UnityEngine.Vector3):void;
        /**
         * Returns the rotation of this IK goal relative to the root.
         * @param index The AvatarIKGoal that is queried.
         * @returns The rotation of this IK goal.
         */
        public GetGoalLocalRotation($index: UnityEngine.AvatarIKGoal):UnityEngine.Quaternion;
        /**
         * Sets the rotation of this IK goal relative to the root.
         * @param index The AvatarIKGoal that is queried.
         * @param rot The rotation of this IK goal.
         */
        public SetGoalLocalRotation($index: UnityEngine.AvatarIKGoal, $rot: UnityEngine.Quaternion):void;
        /**
         * Returns the position of this IK goal in world space.
         * @param index The AvatarIKGoal that is queried.
         * @returns The position of this IK goal.
         */
        public GetGoalPosition($index: UnityEngine.AvatarIKGoal):UnityEngine.Vector3;
        /**
         * Sets the position of this IK goal in world space.
         * @param index The AvatarIKGoal that is queried.
         * @param pos The position of this IK goal.
         */
        public SetGoalPosition($index: UnityEngine.AvatarIKGoal, $pos: UnityEngine.Vector3):void;
        /**
         * Returns the rotation of this IK goal in world space.
         * @param index The AvatarIKGoal that is queried.
         * @returns The rotation of this IK goal.
         */
        public GetGoalRotation($index: UnityEngine.AvatarIKGoal):UnityEngine.Quaternion;
        /**
         * Sets the rotation of this IK goal in world space.
         * @param index The AvatarIKGoal that is queried.
         * @param rot The rotation of this IK goal.
         */
        public SetGoalRotation($index: UnityEngine.AvatarIKGoal, $rot: UnityEngine.Quaternion):void;
        /**
         * Sets the position weight of the IK goal.
         * @param index The AvatarIKGoal that is queried.
         * @param value The position weight of the IK goal.
         */
        public SetGoalWeightPosition($index: UnityEngine.AvatarIKGoal, $value: number):void;
        /**
         * Sets the rotation weight of the IK goal.
         * @param index The AvatarIKGoal that is queried.
         * @param value The rotation weight of the IK goal.
         */
        public SetGoalWeightRotation($index: UnityEngine.AvatarIKGoal, $value: number):void;
        /**
         * Returns the position weight of the IK goal.
         * @param index The AvatarIKGoal that is queried.
         * @returns The position weight of the IK goal.
         */
        public GetGoalWeightPosition($index: UnityEngine.AvatarIKGoal):number;
        /**
         * Returns the rotation weight of the IK goal.
         * @param index The AvatarIKGoal that is queried.
         * @returns The rotation weight of the IK goal.
         */
        public GetGoalWeightRotation($index: UnityEngine.AvatarIKGoal):number;
        /**
         * Returns the position of this IK Hint in world space.
         * @param index The AvatarIKHint that is queried.
         * @returns The position of this IK Hint.
         */
        public GetHintPosition($index: UnityEngine.AvatarIKHint):UnityEngine.Vector3;
        /**
         * Sets the position of this IK hint in world space.
         * @param index The AvatarIKHint that is queried.
         * @param pos The position of this IK hint.
         */
        public SetHintPosition($index: UnityEngine.AvatarIKHint, $pos: UnityEngine.Vector3):void;
        /**
         * Sets the position weight of the IK Hint.
         * @param index The AvatarIKHint that is queried.
         * @param value The position weight of the IK Hint.
         */
        public SetHintWeightPosition($index: UnityEngine.AvatarIKHint, $value: number):void;
        /**
         * Returns the position weight of the IK Hint.
         * @param index The AvatarIKHint that is queried.
         * @returns The position weight of the IK Hint.
         */
        public GetHintWeightPosition($index: UnityEngine.AvatarIKHint):number;
        /**
         * Sets the look at position in world space.
         * @param lookAtPosition The look at position.
         */
        public SetLookAtPosition($lookAtPosition: UnityEngine.Vector3):void;
        /**
         * Sets the LookAt clamp weight.
         * @param weight The LookAt clamp weight.
         */
        public SetLookAtClampWeight($weight: number):void;
        /**
         * Sets the LookAt body weight.
         * @param weight The LookAt body weight.
         */
        public SetLookAtBodyWeight($weight: number):void;
        /**
         * Sets the LookAt head weight.
         * @param weight The LookAt head weight.
         */
        public SetLookAtHeadWeight($weight: number):void;
        /**
         * Sets the LookAt eyes weight.
         * @param weight The LookAt eyes weight.
         */
        public SetLookAtEyesWeight($weight: number):void;
        /**
         * Execute the IK solver.
         */
        public SolveIK():void;
        
        public get_Clone(): AnimationHumanStream;            
    }
    /**
     * Handle for a muscle in the AnimationHumanStream.
     */
    class MuscleHandle extends System.ValueType {
        /**
         * The muscle human part. (Read Only)
         */
        public get humanPartDof(): UnityEngine.HumanPartDof;
        /**
         * The muscle human sub-part. (Read Only)
         */
        public get dof(): number;
        /**
         * The name of the muscle. (Read Only)
         */
        public get name(): string;
        /**
         * The total number of DoF parts in a humanoid. (Read Only)
         */
        public static get muscleHandleCount(): number;
        /**
         * The different constructors that creates the muscle handle.
         * @param bodyDof The muscle body sub-part.
         * @param headDof The muscle head sub-part.
         * @param partDof The muscle human part.
         * @param legDof The muscle leg sub-part.
         * @param armDof The muscle arm sub-part.
         * @param fingerDof The muscle finger sub-part.
         */
        public constructor($bodyDof: UnityEngine.BodyDof);
        /**
         * The different constructors that creates the muscle handle.
         * @param bodyDof The muscle body sub-part.
         * @param headDof The muscle head sub-part.
         * @param partDof The muscle human part.
         * @param legDof The muscle leg sub-part.
         * @param armDof The muscle arm sub-part.
         * @param fingerDof The muscle finger sub-part.
         */
        public constructor($headDof: UnityEngine.HeadDof);
        /**
         * The different constructors that creates the muscle handle.
         * @param bodyDof The muscle body sub-part.
         * @param headDof The muscle head sub-part.
         * @param partDof The muscle human part.
         * @param legDof The muscle leg sub-part.
         * @param armDof The muscle arm sub-part.
         * @param fingerDof The muscle finger sub-part.
         */
        public constructor($partDof: UnityEngine.HumanPartDof, $legDof: UnityEngine.LegDof);
        /**
         * The different constructors that creates the muscle handle.
         * @param bodyDof The muscle body sub-part.
         * @param headDof The muscle head sub-part.
         * @param partDof The muscle human part.
         * @param legDof The muscle leg sub-part.
         * @param armDof The muscle arm sub-part.
         * @param fingerDof The muscle finger sub-part.
         */
        public constructor($partDof: UnityEngine.HumanPartDof, $armDof: UnityEngine.ArmDof);
        /**
         * The different constructors that creates the muscle handle.
         * @param bodyDof The muscle body sub-part.
         * @param headDof The muscle head sub-part.
         * @param partDof The muscle human part.
         * @param legDof The muscle leg sub-part.
         * @param armDof The muscle arm sub-part.
         * @param fingerDof The muscle finger sub-part.
         */
        public constructor($partDof: UnityEngine.HumanPartDof, $fingerDof: UnityEngine.FingerDof);
        /**
         * Fills the array with all the possible muscle handles on a humanoid.
         * @param muscleHandles An array of MuscleHandle.
         */
        public static GetMuscleHandles($muscleHandles: MuscleHandle[]):void;
        
        public get_Clone(): MuscleHandle;            
    }
    
    class AnimationPlayableExtensions extends System.Object {
        
        public static SetAnimatedProperties<U>($playable: U, $clip: UnityEngine.AnimationClip):void;
        
                    
    }
    /**
     * A Playable that can run a custom, multi-threaded animation job.
     */
    class AnimationScriptPlayable extends System.ValueType {
        
        public static get Null(): AnimationScriptPlayable;
        
        public static Create<T>($graph: UnityEngine_Playables.PlayableGraph, $jobData: T, $inputCount?: number):AnimationScriptPlayable;
        
        public GetHandle():UnityEngine_Playables.PlayableHandle;
        /**
         * Gets the job data contained in the playable.
         * @returns Returns the IAnimationJob data contained in the playable.
         */
        public GetJobData<T>():T;
        
        public SetJobData<T>($jobData: T):void;
        
        public static op_Implicit($playable: AnimationScriptPlayable):UnityEngine_Playables.Playable;
        
        public static op_Explicit($playable: UnityEngine_Playables.Playable):AnimationScriptPlayable;
        
        public Equals($other: AnimationScriptPlayable):boolean;
        /**
         * Sets the new value for processing the inputs or not.
         * @param value The new value for processing the inputs or not.
         */
        public SetProcessInputs($value: boolean):void;
        /**
         * Returns whether the playable inputs will be processed or not.
         * @returns true if the inputs will be processed; false otherwise.
         */
        public GetProcessInputs():boolean;
        
        public get_Clone(): AnimationScriptPlayable;            
    }
    /**
     * Position, rotation and scale of an object in the AnimationStream.
     */
    class TransformStreamHandle extends System.ValueType {
        /**
         * Returns whether this is a valid handle.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Whether this is a valid handle.
         */
        public IsValid($stream: AnimationStream):boolean;
        /**
         * Bind this handle with an animated values from the AnimationStream.
         * @param stream The AnimationStream that holds the animated values.
         */
        public Resolve($stream: AnimationStream):void;
        /**
         * Returns whether this handle is resolved.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Returns true if the handle is resolved, false otherwise.
         */
        public IsResolved($stream: AnimationStream):boolean;
        /**
         * Gets the position of the transform in world space.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The position of the transform in world space.
         */
        public GetPosition($stream: AnimationStream):UnityEngine.Vector3;
        /**
         * Sets the position of the transform in world space.
         * @param position The position of the transform in world space.
         * @param stream The AnimationStream that holds the animated values.
         */
        public SetPosition($stream: AnimationStream, $position: UnityEngine.Vector3):void;
        /**
         * Gets the rotation of the transform in world space.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The rotation of the transform in world space.
         */
        public GetRotation($stream: AnimationStream):UnityEngine.Quaternion;
        /**
         * Sets the rotation of the transform in world space.
         * @param stream The AnimationStream that holds the animated values.
         * @param rotation The rotation of the transform in world space.
         */
        public SetRotation($stream: AnimationStream, $rotation: UnityEngine.Quaternion):void;
        /**
         * Gets the position of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The position of the transform relative to the parent.
         */
        public GetLocalPosition($stream: AnimationStream):UnityEngine.Vector3;
        /**
         * Sets the position of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         * @param position The position of the transform relative to the parent.
         */
        public SetLocalPosition($stream: AnimationStream, $position: UnityEngine.Vector3):void;
        /**
         * Gets the rotation of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The rotation of the transform relative to the parent.
         */
        public GetLocalRotation($stream: AnimationStream):UnityEngine.Quaternion;
        /**
         * Sets the rotation of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         * @param rotation The rotation of the transform relative to the parent.
         */
        public SetLocalRotation($stream: AnimationStream, $rotation: UnityEngine.Quaternion):void;
        /**
         * Gets the scale of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The scale of the transform relative to the parent.
         */
        public GetLocalScale($stream: AnimationStream):UnityEngine.Vector3;
        /**
         * Sets the scale of the transform relative to the parent.
         * @param scale The scale of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         */
        public SetLocalScale($stream: AnimationStream, $scale: UnityEngine.Vector3):void;
        /**
         * Gets the position read mask of the transform.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Returns true if the position can be read.
         */
        public GetPositionReadMask($stream: AnimationStream):boolean;
        /**
         * Gets the rotation read mask of the transform.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Returns true if the rotation can be read.
         */
        public GetRotationReadMask($stream: AnimationStream):boolean;
        /**
         * Gets the scale read mask of the transform.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Returns true if the scale can be read.
         */
        public GetScaleReadMask($stream: AnimationStream):boolean;
        /**
         * Gets the position, rotation and scale of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         * @param position The position of the transform relative to the parent.
         * @param rotation The rotation of the transform relative to the parent.
         * @param scale The scale of the transform relative to the parent.
         */
        public GetLocalTRS($stream: AnimationStream, $position: $Ref<UnityEngine.Vector3>, $rotation: $Ref<UnityEngine.Quaternion>, $scale: $Ref<UnityEngine.Vector3>):void;
        /**
         * Sets the position, rotation and scale of the transform relative to the parent.
         * @param stream The AnimationStream that holds the animated values.
         * @param position The position of the transform relative to the parent.
         * @param rotation The rotation of the transform relative to the parent.
         * @param scale The scale of the transform relative to the parent.
         * @param useMask Set to true to write the specified parameters if the matching stream parameters have not already been modified.
         */
        public SetLocalTRS($stream: AnimationStream, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $scale: UnityEngine.Vector3, $useMask: boolean):void;
        /**
         * Gets the position and scaled rotation of the transform in world space.
         * @param stream The AnimationStream that holds the animated values.
         * @param position The position of the transform in world space.
         * @param rotation The rotation of the transform in world space.
         */
        public GetGlobalTR($stream: AnimationStream, $position: $Ref<UnityEngine.Vector3>, $rotation: $Ref<UnityEngine.Quaternion>):void;
        /**
         * Sets the position and rotation of the transform in world space.
         * @param stream The AnimationStream that holds the animated values.
         * @param position The position of the transform in world space.
         * @param rotation The rotation of the transform in world space.
         * @param useMask Set to true to write the specified parameters if the matching stream parameters have not already been modified.
         */
        public SetGlobalTR($stream: AnimationStream, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $useMask: boolean):void;
        
        public get_Clone(): TransformStreamHandle;            
    }
    /**
     * Handle for a Component property on an object in the AnimationStream.
     */
    class PropertyStreamHandle extends System.ValueType {
        /**
         * Returns whether or not the handle is valid.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Whether or not the handle is valid.
         */
        public IsValid($stream: AnimationStream):boolean;
        /**
         * Resolves the handle.
         * @param stream The AnimationStream that holds the animated values.
         */
        public Resolve($stream: AnimationStream):void;
        /**
         * Returns whether or not the handle is resolved.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Returns true if the handle is resolved, false otherwise.
         */
        public IsResolved($stream: AnimationStream):boolean;
        /**
         * Gets the float property value from a stream.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The float property value.
         */
        public GetFloat($stream: AnimationStream):number;
        /**
         * Sets the float property value into a stream.
         * @param stream The AnimationStream that holds the animated values.
         * @param value The new float property value.
         */
        public SetFloat($stream: AnimationStream, $value: number):void;
        /**
         * Gets the integer property value from a stream.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The integer property value.
         */
        public GetInt($stream: AnimationStream):number;
        /**
         * Sets the integer property value into a stream.
         * @param stream The AnimationStream that holds the animated values.
         * @param value The new integer property value.
         */
        public SetInt($stream: AnimationStream, $value: number):void;
        /**
         * Gets the boolean property value from a stream.
         * @param stream The AnimationStream that holds the animated values.
         * @returns The boolean property value.
         */
        public GetBool($stream: AnimationStream):boolean;
        /**
         * Sets the boolean property value into a stream.
         * @param stream The AnimationStream that holds the animated values.
         * @param value The new boolean property value.
         */
        public SetBool($stream: AnimationStream, $value: boolean):void;
        /**
         * Gets the read mask of the property.
         * @param stream The AnimationStream that holds the animated values.
         * @returns Returns true if the property can be read.
         */
        public GetReadMask($stream: AnimationStream):boolean;
        
        public get_Clone(): PropertyStreamHandle;            
    }
    /**
     * Handle to read position, rotation and scale of an object in the Scene.
     */
    class TransformSceneHandle extends System.ValueType {
        /**
         * Returns whether this is a valid handle.
         * @param stream The AnimationStream that manages this handle.
         * @returns Whether this is a valid handle.
         */
        public IsValid($stream: AnimationStream):boolean;
        /**
         * Gets the position of the transform in world space.
         * @param stream The AnimationStream that manages this handle.
         * @returns The position of the transform in world space.
         */
        public GetPosition($stream: AnimationStream):UnityEngine.Vector3;
        /**
         * Gets the position of the transform relative to the parent.
         * @param stream The AnimationStream that manages this handle.
         * @returns The position of the transform relative to the parent.
         */
        public GetLocalPosition($stream: AnimationStream):UnityEngine.Vector3;
        /**
         * Gets the rotation of the transform in world space.
         * @param stream The AnimationStream that manages this handle.
         * @returns The rotation of the transform in world space.
         */
        public GetRotation($stream: AnimationStream):UnityEngine.Quaternion;
        /**
         * Gets the rotation of the transform relative to the parent.
         * @param stream The AnimationStream that manages this handle.
         * @returns The rotation of the transform relative to the parent.
         */
        public GetLocalRotation($stream: AnimationStream):UnityEngine.Quaternion;
        /**
         * Gets the scale of the transform relative to the parent.
         * @param stream The AnimationStream that manages this handle.
         * @returns The scale of the transform relative to the parent.
         */
        public GetLocalScale($stream: AnimationStream):UnityEngine.Vector3;
        /**
         * Gets the position, rotation and scale of the transform relative to the parent.
         * @param stream The AnimationStream that manages this handle.
         * @param position The position of the transform relative to the parent.
         * @param rotation The rotation of the transform relative to the parent.
         * @param scale The scale of the transform relative to the parent.
         */
        public GetLocalTRS($stream: AnimationStream, $position: $Ref<UnityEngine.Vector3>, $rotation: $Ref<UnityEngine.Quaternion>, $scale: $Ref<UnityEngine.Vector3>):void;
        /**
         * Gets the position and scaled rotation of the transform in world space.
         * @param stream The AnimationStream that manages this handle.
         * @param position The position of the transform in world space.
         * @param rotation The rotation of the transform in world space.
         */
        public GetGlobalTR($stream: AnimationStream, $position: $Ref<UnityEngine.Vector3>, $rotation: $Ref<UnityEngine.Quaternion>):void;
        
        public get_Clone(): TransformSceneHandle;            
    }
    /**
     * Handle to read a Component property on an object in the Scene.
     */
    class PropertySceneHandle extends System.ValueType {
        /**
         * Returns whether or not the handle is valid.
         * @param stream The AnimationStream managing this handle.
         * @returns Whether or not the handle is valid.
         */
        public IsValid($stream: AnimationStream):boolean;
        /**
         * Resolves the handle.
         * @param stream The AnimationStream managing this handle.
         */
        public Resolve($stream: AnimationStream):void;
        /**
         * Returns whether or not the handle is resolved.
         * @param stream The AnimationStream managing this handle.
         * @returns Returns true if the handle is resolved, false otherwise.
         */
        public IsResolved($stream: AnimationStream):boolean;
        /**
         * Gets the float property value from an object in the Scene.
         * @param stream The AnimationStream managing this handle.
         * @returns The float property value.
         */
        public GetFloat($stream: AnimationStream):number;
        /**
         * Gets the integer property value from an object in the Scene.
         * @param stream The AnimationStream managing this handle.
         * @returns The integer property value.
         */
        public GetInt($stream: AnimationStream):number;
        /**
         * Gets the boolean property value from an object in the Scene.
         * @param stream The AnimationStream managing this handle.
         * @returns The boolean property value.
         */
        public GetBool($stream: AnimationStream):boolean;
        
        public get_Clone(): PropertySceneHandle;            
    }
    /**
     * Static class providing utility functions for animation scene handles.
     */
    class AnimationSceneHandleUtility extends System.Object {
        
        public static ReadInts($stream: AnimationStream, $handles: Unity_Collections.NativeArray$1<PropertySceneHandle>, $buffer: Unity_Collections.NativeArray$1<number>):void;
        
        public static ReadFloats($stream: AnimationStream, $handles: Unity_Collections.NativeArray$1<PropertySceneHandle>, $buffer: Unity_Collections.NativeArray$1<number>):void;
        
                    
    }
    /**
     * Static class providing utility functions for animation stream handles.
     */
    class AnimationStreamHandleUtility extends System.Object {
        
        public static WriteInts($stream: AnimationStream, $handles: Unity_Collections.NativeArray$1<PropertyStreamHandle>, $buffer: Unity_Collections.NativeArray$1<number>, $useMask: boolean):void;
        
        public static WriteFloats($stream: AnimationStream, $handles: Unity_Collections.NativeArray$1<PropertyStreamHandle>, $buffer: Unity_Collections.NativeArray$1<number>, $useMask: boolean):void;
        
        public static ReadInts($stream: AnimationStream, $handles: Unity_Collections.NativeArray$1<PropertyStreamHandle>, $buffer: Unity_Collections.NativeArray$1<number>):void;
        
        public static ReadFloats($stream: AnimationStream, $handles: Unity_Collections.NativeArray$1<PropertyStreamHandle>, $buffer: Unity_Collections.NativeArray$1<number>):void;
        
                    
    }
    /**
     * The type of custom stream property to create using BindCustomStreamProperty
     */
    enum CustomStreamPropertyType { Float = 5, Bool = 6, Int = 10 }
    /**
     * Static class providing extension methods for Animator and the animation C# jobs.
     */
    class AnimatorJobExtensions extends System.Object {
        /**
         * Creates a dependency between animator jobs and the job represented by the supplied job handle. To add multiple job dependencies, call this method for each job that need to run before the Animator's jobs.
         * @param animator The Animator instance that calls this method.
         * @param jobHandle The JobHandle of the job that needs to run before animator jobs.
         */
        public static AddJobDependency($animator: UnityEngine.Animator, $jobHandle: Unity_Jobs.JobHandle):void;
        /**
         * Create a TransformStreamHandle representing the new binding between the Animator and a Transform already bound to the Animator.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to bind.
         * @returns Returns the TransformStreamHandle that represents the new binding.
         */
        public static BindStreamTransform($animator: UnityEngine.Animator, $transform: UnityEngine.Transform):TransformStreamHandle;
        /**
         * Create a PropertyStreamHandle representing the new binding on the Component property of a Transform already bound to the Animator.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does animate an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertyStreamHandle that represents the new binding.
         */
        public static BindStreamProperty($animator: UnityEngine.Animator, $transform: UnityEngine.Transform, $type: System.Type, $property: string):PropertyStreamHandle;
        /**
         * Create a custom property in the AnimationStream to pass extra data to downstream animation jobs in your graph. Custom properties created in the AnimationStream do not exist in the scene.
         * @param animator The Animator instance that calls this method.
         * @param name The name of the property.
         * @param type The type of property to create (float, integer or boolean).
         * @returns Returns the PropertyStreamHandle that represents the new binding.
         */
        public static BindCustomStreamProperty($animator: UnityEngine.Animator, $property: string, $type: CustomStreamPropertyType):PropertyStreamHandle;
        /**
         * Create a PropertyStreamHandle representing the new binding on the Component property of a Transform already bound to the Animator.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does animate an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertyStreamHandle that represents the new binding.
         */
        public static BindStreamProperty($animator: UnityEngine.Animator, $transform: UnityEngine.Transform, $type: System.Type, $property: string, $isObjectReference: boolean):PropertyStreamHandle;
        /**
         * Create a TransformSceneHandle representing the new binding between the Animator and a Transform in the Scene.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to bind.
         * @returns Returns the TransformSceneHandle that represents the new binding.
         */
        public static BindSceneTransform($animator: UnityEngine.Animator, $transform: UnityEngine.Transform):TransformSceneHandle;
        /**
         * Create a PropertySceneHandle representing the new binding on the Component property of a Transform in the Scene.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does access an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertySceneHandle that represents the new binding.
         */
        public static BindSceneProperty($animator: UnityEngine.Animator, $transform: UnityEngine.Transform, $type: System.Type, $property: string):PropertySceneHandle;
        /**
         * Create a PropertySceneHandle representing the new binding on the Component property of a Transform in the Scene.
         * @param animator The Animator instance that calls this method.
         * @param transform The Transform to target.
         * @param type The Component type.
         * @param property The property to bind.
         * @param isObjectReference isObjectReference need to be set to true if the property to bind does access an Object like SpriteRenderer.sprite.
         * @returns Returns the PropertySceneHandle that represents the new binding.
         */
        public static BindSceneProperty($animator: UnityEngine.Animator, $transform: UnityEngine.Transform, $type: System.Type, $property: string, $isObjectReference: boolean):PropertySceneHandle;
        /**
         * Open a new stream on the Animator.
         * @param animator The Animator instance that calls this method.
         * @param stream The new stream.
         * @returns Returns whether or not the stream has been opened.
         */
        public static OpenAnimationStream($animator: UnityEngine.Animator, $stream: $Ref<AnimationStream>):boolean;
        /**
         * Close a stream that has been opened using OpenAnimationStream.
         * @param animator The Animator instance that calls this method.
         * @param stream The stream to close.
         */
        public static CloseAnimationStream($animator: UnityEngine.Animator, $stream: $Ref<AnimationStream>):void;
        /**
         * Newly created handles are always resolved lazily on the next access when the jobs are run. To avoid a cpu spike while evaluating the jobs you can manually resolve all handles from the main thread.
         * @param animator The Animator instance that calls this method.
         */
        public static ResolveAllStreamHandles($animator: UnityEngine.Animator):void;
        /**
         * Newly created handles are always resolved lazily on the next access when the jobs are run. To avoid a cpu spike while evaluating the jobs you can manually resolve all handles from the main thread.
         * @param animator The Animator instance that calls this method.
         */
        public static ResolveAllSceneHandles($animator: UnityEngine.Animator):void;
        
                    
    }
    /**
     * The common interface for constraint components.
     */
    interface IConstraint {
        /**
         * The weight of the constraint component.
         */
        weight: number;
        /**
         * Activate or deactivate the constraint.
         */
        constraintActive: boolean;
        /**
         * Lock or unlock the offset and position at rest.
         */
        locked: boolean;
        /**
         * Gets the number of sources currently set on the component.
         */
        sourceCount: number;
        /**
         * Add a constraint source.
         * @param source The source object and its weight.
         * @returns Returns the index of the added source.
         */
        AddSource($source: ConstraintSource):number;
        /**
         * Removes a source from the component.
         * @param index The index of the source to remove.
         */
        RemoveSource($index: number):void;
        /**
         * Gets a constraint source by index.
         * @param index The index of the source.
         * @returns The source object and its weight.
         */
        GetSource($index: number):ConstraintSource;
        /**
         * Sets a source at a specified index.
         * @param index The index of the source to set.
         * @param source The source object and its weight.
         */
        SetSource($index: number, $source: ConstraintSource):void;
        
        GetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
        SetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
                    
    }
    /**
     * Constrains the position of an object relative to the position of one or more source objects.
     */
    class PositionConstraint extends UnityEngine.Behaviour {
        /**
         * The weight of the constraint component.
         */
        public get weight(): number;
        public set weight(value: number);
        /**
         * The translation used when the sources have a total weight of 0.
         */
        public get translationAtRest(): UnityEngine.Vector3;
        public set translationAtRest(value: UnityEngine.Vector3);
        /**
         * The offset from the constrained position.
         */
        public get translationOffset(): UnityEngine.Vector3;
        public set translationOffset(value: UnityEngine.Vector3);
        /**
         * The axes affected by the PositionConstraint.
         */
        public get translationAxis(): Axis;
        public set translationAxis(value: Axis);
        /**
         * Activates or deactivates the constraint.
         */
        public get constraintActive(): boolean;
        public set constraintActive(value: boolean);
        /**
         * Locks the offset and position at rest.
         */
        public get locked(): boolean;
        public set locked(value: boolean);
        /**
         * The number of sources set on the component (read-only).
         */
        public get sourceCount(): number;
        
        public GetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
        public SetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        /**
         * Adds a constraint source.
         * @param source The source object and its weight.
         * @returns Returns the index of the added source.
         */
        public AddSource($source: ConstraintSource):number;
        /**
         * Removes a source from the component.
         * @param index The index of the source to remove.
         */
        public RemoveSource($index: number):void;
        /**
         * Gets a constraint source by index.
         * @param index The index of the source.
         * @returns The source object and its weight.
         */
        public GetSource($index: number):ConstraintSource;
        /**
         * Sets a source at a specified index.
         * @param index The index of the source to set.
         * @param source The source object and its weight.
         */
        public SetSource($index: number, $source: ConstraintSource):void;
        
                    
    }
    /**
     * Constrains the rotation of an object relative to the rotation of one or more source objects.
     */
    class RotationConstraint extends UnityEngine.Behaviour {
        /**
         * The weight of the constraint component.
         */
        public get weight(): number;
        public set weight(value: number);
        /**
         * The rotation used when the sources have a total weight of 0.
         */
        public get rotationAtRest(): UnityEngine.Vector3;
        public set rotationAtRest(value: UnityEngine.Vector3);
        /**
         * The offset from the constrained rotation.
         */
        public get rotationOffset(): UnityEngine.Vector3;
        public set rotationOffset(value: UnityEngine.Vector3);
        /**
         * The axes affected by the RotationConstraint.
         */
        public get rotationAxis(): Axis;
        public set rotationAxis(value: Axis);
        /**
         * Activates or deactivates the constraint.
         */
        public get constraintActive(): boolean;
        public set constraintActive(value: boolean);
        /**
         * Locks the offset and rotation at rest.
         */
        public get locked(): boolean;
        public set locked(value: boolean);
        /**
         * The number of sources set on the component (read-only).
         */
        public get sourceCount(): number;
        
        public GetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
        public SetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        /**
         * Adds a constraint source.
         * @param source The source object and its weight.
         * @returns Returns the index of the added source.
         */
        public AddSource($source: ConstraintSource):number;
        /**
         * Removes a source from the component.
         * @param index The index of the source to remove.
         */
        public RemoveSource($index: number):void;
        /**
         * Gets a constraint source by index.
         * @param index The index of the source.
         * @returns The source object and its weight.
         */
        public GetSource($index: number):ConstraintSource;
        /**
         * Sets a source at a specified index.
         * @param index The index of the source to set.
         * @param source The source object and its weight.
         */
        public SetSource($index: number, $source: ConstraintSource):void;
        
                    
    }
    /**
     * Constrains the scale of an object relative to the scale of one or more source objects.
     */
    class ScaleConstraint extends UnityEngine.Behaviour {
        /**
         * The weight of the constraint component.
         */
        public get weight(): number;
        public set weight(value: number);
        /**
         * The scale used when the sources have a total weight of 0.
         */
        public get scaleAtRest(): UnityEngine.Vector3;
        public set scaleAtRest(value: UnityEngine.Vector3);
        /**
         * The offset from the constrained scale.
         */
        public get scaleOffset(): UnityEngine.Vector3;
        public set scaleOffset(value: UnityEngine.Vector3);
        /**
         * The axes affected by the ScaleConstraint.
         */
        public get scalingAxis(): Axis;
        public set scalingAxis(value: Axis);
        /**
         * Activates or deactivates the constraint.
         */
        public get constraintActive(): boolean;
        public set constraintActive(value: boolean);
        /**
         * Locks the offset and scale at rest.
         */
        public get locked(): boolean;
        public set locked(value: boolean);
        /**
         * The number of sources set on the component (read-only).
         */
        public get sourceCount(): number;
        
        public GetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
        public SetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        /**
         * Adds a constraint source.
         * @param source The source object and its weight.
         * @returns Returns the index of the added source.
         */
        public AddSource($source: ConstraintSource):number;
        /**
         * Removes a source from the component.
         * @param index The index of the source to remove.
         */
        public RemoveSource($index: number):void;
        /**
         * Gets a constraint source by index.
         * @param index The index of the source.
         * @returns The source object and its weight.
         */
        public GetSource($index: number):ConstraintSource;
        /**
         * Sets a source at a specified index.
         * @param index The index of the source to set.
         * @param source The source object and its weight.
         */
        public SetSource($index: number, $source: ConstraintSource):void;
        
                    
    }
    /**
     * Constrains the orientation of an object relative to the position of one or more source objects, such that the object is facing the average position of the sources.
     * The LookAtConstraint is a simplified Animations.AimConstraint typically used with a Camera.
     */
    class LookAtConstraint extends UnityEngine.Behaviour {
        /**
         * The weight of the constraint component.
         */
        public get weight(): number;
        public set weight(value: number);
        /**
         * The rotation angle along the z axis of the object. The constraint uses this property to calculate the world up vector when Animations.LookAtConstraint.UseUpObject is false.
         */
        public get roll(): number;
        public set roll(value: number);
        /**
         * Activates or deactivates the constraint.
         */
        public get constraintActive(): boolean;
        public set constraintActive(value: boolean);
        /**
         * Locks the offset and rotation at rest.
         */
        public get locked(): boolean;
        public set locked(value: boolean);
        /**
         * The rotation used when the sources have a total weight of 0.
         */
        public get rotationAtRest(): UnityEngine.Vector3;
        public set rotationAtRest(value: UnityEngine.Vector3);
        /**
         * Represents an offset from the constrained orientation.
         */
        public get rotationOffset(): UnityEngine.Vector3;
        public set rotationOffset(value: UnityEngine.Vector3);
        /**
         * The world up object, used to calculate the world up vector when Animations.LookAtConstraint.UseUpObject is true.
         */
        public get worldUpObject(): UnityEngine.Transform;
        public set worldUpObject(value: UnityEngine.Transform);
        /**
         * Determines how the up vector is calculated.
         */
        public get useUpObject(): boolean;
        public set useUpObject(value: boolean);
        /**
         * The number of sources set on the component (Read Only).
         */
        public get sourceCount(): number;
        
        public GetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
        public SetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        /**
         * Adds a constraint source.
         * @param source The source object and its weight.
         * @returns Returns the index of the added source.
         */
        public AddSource($source: ConstraintSource):number;
        /**
         * Removes a source from the component.
         * @param index The index of the source to remove.
         */
        public RemoveSource($index: number):void;
        /**
         * Gets a constraint source by index.
         * @param index The index of the source.
         * @returns Returns the source object and its weight.
         */
        public GetSource($index: number):ConstraintSource;
        /**
         * Sets a source at a specified index.
         * @param index The index of the source to set.
         * @param source The source object and its weight.
         */
        public SetSource($index: number, $source: ConstraintSource):void;
        
                    
    }
    /**
     * Constrains the orientation and translation of an object to one or more source objects. The constrained object behaves as if it is in the hierarchy of the sources.
     */
    class ParentConstraint extends UnityEngine.Behaviour {
        /**
         * The weight of the constraint component.
         */
        public get weight(): number;
        public set weight(value: number);
        /**
         * Activates or deactivates the constraint.
         */
        public get constraintActive(): boolean;
        public set constraintActive(value: boolean);
        /**
         * Locks the offsets and position (translation and rotation) at rest.
         */
        public get locked(): boolean;
        public set locked(value: boolean);
        /**
         * The number of sources set on the component (read-only).
         */
        public get sourceCount(): number;
        /**
         * The position of the object in local space, used when the sources have a total weight of 0.
         */
        public get translationAtRest(): UnityEngine.Vector3;
        public set translationAtRest(value: UnityEngine.Vector3);
        /**
         * The rotation used when the sources have a total weight of 0.
         */
        public get rotationAtRest(): UnityEngine.Vector3;
        public set rotationAtRest(value: UnityEngine.Vector3);
        /**
         * The translation offsets from the constrained orientation.
         */
        public get translationOffsets(): UnityEngine.Vector3[];
        public set translationOffsets(value: UnityEngine.Vector3[]);
        /**
         * The rotation offsets from the constrained orientation.
         */
        public get rotationOffsets(): UnityEngine.Vector3[];
        public set rotationOffsets(value: UnityEngine.Vector3[]);
        /**
         * The translation axes affected by the ParentConstraint.
         */
        public get translationAxis(): Axis;
        public set translationAxis(value: Axis);
        /**
         * The rotation axes affected by the ParentConstraint.
         */
        public get rotationAxis(): Axis;
        public set rotationAxis(value: Axis);
        /**
         * Gets the rotation offset associated with a source by index.
         * @param index The index of the constraint source.
         * @returns The translation offset.
         */
        public GetTranslationOffset($index: number):UnityEngine.Vector3;
        /**
         * Sets the translation offset associated with a source by index.
         * @param index The index of the constraint source.
         * @param value The new translation offset.
         */
        public SetTranslationOffset($index: number, $value: UnityEngine.Vector3):void;
        /**
         * Gets the rotation offset associated with a source by index.
         * @param index The index of the constraint source.
         * @returns The rotation offset, as Euler angles.
         */
        public GetRotationOffset($index: number):UnityEngine.Vector3;
        /**
         * Sets the rotation offset associated with a source by index.
         * @param index The index of the constraint source.
         * @param value The new rotation offset.
         */
        public SetRotationOffset($index: number, $value: UnityEngine.Vector3):void;
        
        public GetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        
        public SetSources($sources: System_Collections_Generic.List$1<ConstraintSource>):void;
        /**
         * Adds a constraint source.
         * @param source The source object and its weight.
         * @returns Returns the index of the added source.
         */
        public AddSource($source: ConstraintSource):number;
        /**
         * Removes a source from the component.
         * @param index The index of the source to remove.
         */
        public RemoveSource($index: number):void;
        /**
         * Gets a constraint source by index.
         * @param index The index of the source.
         * @returns The source object and its weight.
         */
        public GetSource($index: number):ConstraintSource;
        /**
         * Sets a source at a specified index.
         * @param index The index of the source to set.
         * @param source The source object and its weight.
         */
        public SetSource($index: number, $source: ConstraintSource):void;
        
                    
    }
    
    interface AnimationPlayableOutput {
        /**
         * Gets the stream source of the specified AnimationPlayableOutput.
         * @param output The AnimationPlayableOutput instance that calls this method.
         * @returns Returns the AnimationStreamSource of the output.
         * @extension UnityEngine.Experimental.Animations.AnimationPlayableOutputExtensions
         */
        GetAnimationStreamSource():AnimationStreamSource;
        /**
         * Sets the stream source for the specified AnimationPlayableOutput.
         * @param output The AnimationPlayableOutput instance that calls this method.
         * @param streamSource The AnimationStreamSource to apply on this output.
         * @extension UnityEngine.Experimental.Animations.AnimationPlayableOutputExtensions
         */
        SetAnimationStreamSource($streamSource: AnimationStreamSource):void;
        /**
         * Gets the priority index of the specified AnimationPlayableOutput.
         * @param output The AnimationPlayableOutput instance that calls this method.
         * @returns Returns the sorting order of the output.
         * @extension UnityEngine.Experimental.Animations.AnimationPlayableOutputExtensions
         */
        GetSortingOrder():number;
        /** @extension UnityEngine.Experimental.Animations.AnimationPlayableOutputExtensions */
        SetSortingOrder($sortingOrder: number):void;
        
                    
    }
    
    interface U {
        /** @extension UnityEngine.Animations.AnimationPlayableExtensions */
        SetAnimatedProperties<U>($clip: UnityEngine.AnimationClip):void;
        
                    
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
declare module 'UnityEngine.Experimental.Animations' {

    import * as System from 'System';
    import * as UnityEngine_Animations from 'UnityEngine.Animations';
        
    /**
     * Describes how an AnimationStream is initialized
     */
    enum AnimationStreamSource { DefaultValues = 0, PreviousInputs = 1 }
    /**
     * Static class providing experimental extension methods for AnimationPlayableOutput .
     */
    class AnimationPlayableOutputExtensions extends System.Object {
        /**
         * Gets the stream source of the specified AnimationPlayableOutput.
         * @param output The AnimationPlayableOutput instance that calls this method.
         * @returns Returns the AnimationStreamSource of the output.
         */
        public static GetAnimationStreamSource($output: UnityEngine_Animations.AnimationPlayableOutput):AnimationStreamSource;
        /**
         * Sets the stream source for the specified AnimationPlayableOutput.
         * @param output The AnimationPlayableOutput instance that calls this method.
         * @param streamSource The AnimationStreamSource to apply on this output.
         */
        public static SetAnimationStreamSource($output: UnityEngine_Animations.AnimationPlayableOutput, $streamSource: AnimationStreamSource):void;
        /**
         * Gets the priority index of the specified AnimationPlayableOutput.
         * @param output The AnimationPlayableOutput instance that calls this method.
         * @returns Returns the sorting order of the output.
         */
        public static GetSortingOrder($output: UnityEngine_Animations.AnimationPlayableOutput):number;
        
        public static SetSortingOrder($output: UnityEngine_Animations.AnimationPlayableOutput, $sortingOrder: number):void;
        
                    
    }
    
}
declare module 'UnityEngine.Animations.AimConstraint' {

    import * as System from 'System';
        
    /**
     * Specifies how the world up vector used by the aim constraint is defined.
     */
    enum WorldUpType { SceneUp = 0, ObjectUp = 1, ObjectRotationUp = 2, Vector = 3, None = 4 }
    
}
declare module 'Unity.Jobs' {

    import * as System from 'System';
        
    /**
     * JobHandle.
     */
    interface JobHandle extends System.ValueType {
        
                    
    }
    
}

