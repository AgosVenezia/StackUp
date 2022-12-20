//# signature=UnityEngine.ParticleSystemModule#678dc479a9dfdd9d8b746608e4daacd5#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as UnityEngine_ParticleSystem from 'UnityEngine.ParticleSystem';
    import * as System from 'System';
    import * as Unity_Collections from 'Unity.Collections';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation.
     */
    class ParticleSystem extends Component {
        /**
         * Determines whether the Particle System is playing.
         */
        public get isPlaying(): boolean;
        /**
         * Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play.
         */
        public get isEmitting(): boolean;
        /**
         * Determines whether the Particle System is in the stopped state.
         */
        public get isStopped(): boolean;
        /**
         * Determines whether the Particle System is paused.
         */
        public get isPaused(): boolean;
        /**
         * The current number of particles (Read Only).
         */
        public get particleCount(): number;
        /**
         * Playback position in seconds.
         */
        public get time(): number;
        public set time(value: number);
        /**
         * Override the random seed used for the Particle System emission.
         */
        public get randomSeed(): number;
        public set randomSeed(value: number);
        /**
         * Controls whether the Particle System uses an automatically-generated random number to seed the random number generator.
         */
        public get useAutoRandomSeed(): boolean;
        public set useAutoRandomSeed(value: boolean);
        /**
         * Does this system support Procedural Simulation?
         */
        public get proceduralSimulationSupported(): boolean;
        /**
         * Access the main Particle System settings.
         */
        public get main(): UnityEngine_ParticleSystem.MainModule;
        /**
         * Script interface for the EmissionModule of a Particle System.
         */
        public get emission(): UnityEngine_ParticleSystem.EmissionModule;
        /**
         * Script interface for the ShapeModule of a Particle System.
         */
        public get shape(): UnityEngine_ParticleSystem.ShapeModule;
        /**
         * Script interface for the VelocityOverLifetimeModule of a Particle System.
         */
        public get velocityOverLifetime(): UnityEngine_ParticleSystem.VelocityOverLifetimeModule;
        /**
         * Script interface for the LimitVelocityOverLifetimeModule of a Particle System. .
         */
        public get limitVelocityOverLifetime(): UnityEngine_ParticleSystem.LimitVelocityOverLifetimeModule;
        /**
         * Script interface for the InheritVelocityModule of a Particle System.
         */
        public get inheritVelocity(): UnityEngine_ParticleSystem.InheritVelocityModule;
        /**
         * Script interface for the Particle System Lifetime By Emitter Speed module.
         */
        public get lifetimeByEmitterSpeed(): UnityEngine_ParticleSystem.LifetimeByEmitterSpeedModule;
        /**
         * Script interface for the ForceOverLifetimeModule of a Particle System.
         */
        public get forceOverLifetime(): UnityEngine_ParticleSystem.ForceOverLifetimeModule;
        /**
         * Script interface for the ColorOverLifetimeModule of a Particle System.
         */
        public get colorOverLifetime(): UnityEngine_ParticleSystem.ColorOverLifetimeModule;
        /**
         * Script interface for the ColorByLifetimeModule of a Particle System.
         */
        public get colorBySpeed(): UnityEngine_ParticleSystem.ColorBySpeedModule;
        /**
         * Script interface for the SizeOverLifetimeModule of a Particle System.
         */
        public get sizeOverLifetime(): UnityEngine_ParticleSystem.SizeOverLifetimeModule;
        /**
         * Script interface for the SizeBySpeedModule of a Particle System.
         */
        public get sizeBySpeed(): UnityEngine_ParticleSystem.SizeBySpeedModule;
        /**
         * Script interface for the RotationOverLifetimeModule of a Particle System.
         */
        public get rotationOverLifetime(): UnityEngine_ParticleSystem.RotationOverLifetimeModule;
        /**
         * Script interface for the RotationBySpeedModule of a Particle System.
         */
        public get rotationBySpeed(): UnityEngine_ParticleSystem.RotationBySpeedModule;
        /**
         * Script interface for the ExternalForcesModule of a Particle System.
         */
        public get externalForces(): UnityEngine_ParticleSystem.ExternalForcesModule;
        /**
         * Script interface for the NoiseModule of a Particle System.
         */
        public get noise(): UnityEngine_ParticleSystem.NoiseModule;
        /**
         * Script interface for the CollisionModule of a Particle System.
         */
        public get collision(): UnityEngine_ParticleSystem.CollisionModule;
        /**
         * Script interface for the TriggerModule of a Particle System.
         */
        public get trigger(): UnityEngine_ParticleSystem.TriggerModule;
        /**
         * Script interface for the SubEmittersModule of a Particle System.
         */
        public get subEmitters(): UnityEngine_ParticleSystem.SubEmittersModule;
        /**
         * Script interface for the TextureSheetAnimationModule of a Particle System.
         */
        public get textureSheetAnimation(): UnityEngine_ParticleSystem.TextureSheetAnimationModule;
        /**
         * Script interface for the LightsModule of a Particle System.
         */
        public get lights(): UnityEngine_ParticleSystem.LightsModule;
        /**
         * Script interface for the TrailsModule of a Particle System.
         */
        public get trails(): UnityEngine_ParticleSystem.TrailModule;
        /**
         * Script interface for the CustomDataModule of a Particle System.
         */
        public get customData(): UnityEngine_ParticleSystem.CustomDataModule;
        
        public constructor();
        /**
         * Sets the particles of this Particle System.
         * @param particles Input particle buffer, containing the desired particle state.
         * @param size The number of elements in the particles array that is written to the Particle System.
         * @param offset The offset into the destination particle list, to assign these particles.
         */
        public SetParticles($particles: UnityEngine_ParticleSystem.Particle[], $size: number, $offset: number):void;
        /**
         * Sets the particles of this Particle System.
         * @param particles Input particle buffer, containing the desired particle state.
         * @param size The number of elements in the particles array that is written to the Particle System.
         * @param offset The offset into the destination particle list, to assign these particles.
         */
        public SetParticles($particles: UnityEngine_ParticleSystem.Particle[], $size: number):void;
        /**
         * Sets the particles of this Particle System.
         * @param particles Input particle buffer, containing the desired particle state.
         * @param size The number of elements in the particles array that is written to the Particle System.
         * @param offset The offset into the destination particle list, to assign these particles.
         */
        public SetParticles($particles: UnityEngine_ParticleSystem.Particle[]):void;
        
        public SetParticles($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: number, $offset: number):void;
        
        public SetParticles($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: number):void;
        
        public SetParticles($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>):void;
        /**
         * Gets the particles of this Particle System.
         * @param particles Output particle buffer, containing the current particle state.
         * @param size The number of elements that are read from the Particle System.
         * @param offset The offset into the active particle list, from which to copy the particles.
         * @returns The number of particles written to the input particle array (the number of particles currently alive).
         */
        public GetParticles($particles: UnityEngine_ParticleSystem.Particle[], $size: number, $offset: number):number;
        /**
         * Gets the particles of this Particle System.
         * @param particles Output particle buffer, containing the current particle state.
         * @param size The number of elements that are read from the Particle System.
         * @param offset The offset into the active particle list, from which to copy the particles.
         * @returns The number of particles written to the input particle array (the number of particles currently alive).
         */
        public GetParticles($particles: UnityEngine_ParticleSystem.Particle[], $size: number):number;
        /**
         * Gets the particles of this Particle System.
         * @param particles Output particle buffer, containing the current particle state.
         * @param size The number of elements that are read from the Particle System.
         * @param offset The offset into the active particle list, from which to copy the particles.
         * @returns The number of particles written to the input particle array (the number of particles currently alive).
         */
        public GetParticles($particles: UnityEngine_ParticleSystem.Particle[]):number;
        
        public GetParticles($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: number, $offset: number):number;
        
        public GetParticles($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>, $size: number):number;
        
        public GetParticles($particles: Unity_Collections.NativeArray$1<UnityEngine_ParticleSystem.Particle>):number;
        
        public SetCustomParticleData($customData: System_Collections_Generic.List$1<Vector4>, $streamIndex: ParticleSystemCustomData):void;
        
        public GetCustomParticleData($customData: System_Collections_Generic.List$1<Vector4>, $streamIndex: ParticleSystemCustomData):number;
        /**
         * Returns all the data that relates to the current internal state of the Particle System.
         * @returns The current internal state of the Particle System.
         */
        public GetPlaybackState():UnityEngine_ParticleSystem.PlaybackState;
        /**
         * Use this method with the results of an earlier call to ParticleSystem.GetPlaybackState, in order to restore the Particle System to the state stored in the playbackState object.
         * @param playbackState The PlaybackState to apply to the Particle System.
         */
        public SetPlaybackState($playbackState: UnityEngine_ParticleSystem.PlaybackState):void;
        /**
         * Returns all the data relating to the current internal state of the Particle System Trails.
         * @returns The current Trails belonging to the Particle System.
         */
        public GetTrails():UnityEngine_ParticleSystem.Trails;
        /**
         * Use this method with the results of an earlier call to ParticleSystem.GetTrails, in order to restore the Particle System to the state stored in the Trails object.
         * @param Trails The Trails to apply to the Particle System.
         */
        public SetTrails($trailData: UnityEngine_ParticleSystem.Trails):void;
        /**
         * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
         * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
         * @param withChildren Fast-forward all child Particle Systems as well.
         * @param restart Restart and start from the beginning.
         * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
         */
        public Simulate($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean):void;
        /**
         * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
         * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
         * @param withChildren Fast-forward all child Particle Systems as well.
         * @param restart Restart and start from the beginning.
         * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
         */
        public Simulate($t: number, $withChildren: boolean, $restart: boolean):void;
        /**
         * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
         * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
         * @param withChildren Fast-forward all child Particle Systems as well.
         * @param restart Restart and start from the beginning.
         * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
         */
        public Simulate($t: number, $withChildren: boolean):void;
        /**
         * Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
         * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
         * @param withChildren Fast-forward all child Particle Systems as well.
         * @param restart Restart and start from the beginning.
         * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
         */
        public Simulate($t: number):void;
        /**
         * Starts the Particle System.
         * @param withChildren Play all child Particle Systems as well.
         */
        public Play($withChildren: boolean):void;
        /**
         * Starts the Particle System.
         * @param withChildren Play all child Particle Systems as well.
         */
        public Play():void;
        /**
         * Pauses the system so no new particles are emitted and the existing particles are not updated.
         * @param withChildren Pause all child Particle Systems as well.
         */
        public Pause($withChildren: boolean):void;
        /**
         * Pauses the system so no new particles are emitted and the existing particles are not updated.
         * @param withChildren Pause all child Particle Systems as well.
         */
        public Pause():void;
        /**
         * Stops playing the Particle System using the supplied stop behaviour.
         * @param withChildren Stop all child Particle Systems as well.
         * @param stopBehavior Stop emitting or stop emitting and clear the system.
         */
        public Stop($withChildren: boolean, $stopBehavior: ParticleSystemStopBehavior):void;
        /**
         * Stops playing the Particle System using the supplied stop behaviour.
         * @param withChildren Stop all child Particle Systems as well.
         * @param stopBehavior Stop emitting or stop emitting and clear the system.
         */
        public Stop($withChildren: boolean):void;
        /**
         * Stops playing the Particle System using the supplied stop behaviour.
         * @param withChildren Stop all child Particle Systems as well.
         * @param stopBehavior Stop emitting or stop emitting and clear the system.
         */
        public Stop():void;
        /**
         * Remove all particles in the Particle System.
         * @param withChildren Clear all child Particle Systems as well.
         */
        public Clear($withChildren: boolean):void;
        /**
         * Remove all particles in the Particle System.
         * @param withChildren Clear all child Particle Systems as well.
         */
        public Clear():void;
        /**
         * Does the Particle System contain any live particles, or will it produce more?
         * @param withChildren Check all child Particle Systems as well.
         * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead.
         */
        public IsAlive($withChildren: boolean):boolean;
        /**
         * Does the Particle System contain any live particles, or will it produce more?
         * @param withChildren Check all child Particle Systems as well.
         * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead.
         */
        public IsAlive():boolean;
        /**
         * Emit count particles immediately.
         * @param count Number of particles to emit.
         */
        public Emit($count: number):void;
        /**
         * Emit a number of particles from script.
         * @param emitParams Overidden particle properties.
         * @param count Number of particles to emit.
         */
        public Emit($emitParams: UnityEngine_ParticleSystem.EmitParams, $count: number):void;
        /**
         * Triggers the specified sub emitter on all particles of the Particle System.
         * @param subEmitterIndex Index of the sub emitter to trigger.
         */
        public TriggerSubEmitter($subEmitterIndex: number):void;
        /**
         * Triggers the specified sub emitter on the specified particle(s) of the Particle System.
         * @param subEmitterIndex Index of the sub emitter to trigger.
         * @param particle Triggers the sub emtter on a single particle.
         * @param particles Triggers the sub emtter on a list of particles.
         */
        public TriggerSubEmitter($subEmitterIndex: number, $particle: $Ref<UnityEngine_ParticleSystem.Particle>):void;
        
        public TriggerSubEmitter($subEmitterIndex: number, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>):void;
        /**
         * Reset the cache of reserved graphics memory used for efficient rendering of Particle Systems.
         */
        public static ResetPreMappedBufferMemory():void;
        /**
         * Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems.
         * @param vertexBuffersCount The maximum number of cached vertex buffers.
         * @param indexBuffersCount The maximum number of cached index buffers.
         */
        public static SetMaximumPreMappedBufferCounts($vertexBuffersCount: number, $indexBuffersCount: number):void;
        /**
         * Ensures that the ParticleSystemJobs.ParticleSystemJobData._axisOfRotations|axisOfRotations particle attribute array is allocated.
         */
        public AllocateAxisOfRotationAttribute():void;
        /**
         * Ensures that the ParticleSystemJobs.ParticleSystemJobData._meshIndices|meshIndices particle attribute array is allocated.
         */
        public AllocateMeshIndexAttribute():void;
        /**
         * Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated.
         * @param stream The custom data stream to allocate.
         */
        public AllocateCustomDataAttribute($stream: ParticleSystemCustomData):void;
        
                    
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
     * Representation of RGBA colors in 32 bit format.
     */
    interface Color32 extends System.ValueType {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * The space to simulate particles in.
     */
    enum ParticleSystemSimulationSpace { Local = 0, World = 1, Custom = 2 }
    /**
     * Control how particle systems apply transform scale.
     */
    enum ParticleSystemScalingMode { Hierarchy = 0, Local = 1, Shape = 2 }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * Which stream of custom particle data to set.
     */
    enum ParticleSystemCustomData { Custom1 = 0, Custom2 = 1 }
    /**
     * The behavior to apply when calling ParticleSystem.Stop|Stop.
     */
    enum ParticleSystemStopBehavior { StopEmittingAndClear = 0, StopEmitting = 1 }
    /**
     * The particle curve mode.
     */
    enum ParticleSystemCurveMode { Constant = 0, Curve = 1, TwoCurves = 2, TwoConstants = 3 }
    /**
     * Store a collection of Keyframes that can be evaluated over time.
     */
    interface AnimationCurve extends System.Object {
        
                    
    }
    /**
     * Position, rotation and scale of an object.
     */
    interface Transform extends Component {
        
                    
    }
    /**
     * Control how a Particle System calculates its velocity.
     */
    enum ParticleSystemEmitterVelocityMode { Transform = 0, Rigidbody = 1 }
    /**
     * The action to perform when the Particle System stops.
     */
    enum ParticleSystemStopAction { None = 0, Disable = 1, Destroy = 2, Callback = 3 }
    /**
     * Control how particles are removed from the Particle System.
     */
    enum ParticleSystemRingBufferMode { Disabled = 0, PauseUntilReplaced = 1, LoopUntilReplaced = 2 }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * The action to perform when the Particle System is offscreen.
     */
    enum ParticleSystemCullingMode { Automatic = 0, PauseAndCatchup = 1, Pause = 2, AlwaysSimulate = 3 }
    /**
     * The mode in which particles are emitted.
     */
    enum ParticleSystemEmissionType { Time = 0, Distance = 1 }
    /**
     * The emission shape.
     */
    enum ParticleSystemShapeType { Sphere = 0, SphereShell = 1, Hemisphere = 2, HemisphereShell = 3, Cone = 4, Box = 5, Mesh = 6, ConeShell = 7, ConeVolume = 8, ConeVolumeShell = 9, Circle = 10, CircleEdge = 11, SingleSidedEdge = 12, MeshRenderer = 13, SkinnedMeshRenderer = 14, BoxShell = 15, BoxEdge = 16, Donut = 17, Rectangle = 18, Sprite = 19, SpriteRenderer = 20 }
    /**
     * The mode used to generate new points in a shape.
     */
    enum ParticleSystemShapeMultiModeValue { Random = 0, Loop = 1, PingPong = 2, BurstSpread = 3 }
    /**
     * The mesh emission type.
     */
    enum ParticleSystemMeshShapeType { Vertex = 0, Edge = 1, Triangle = 2 }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * Renders meshes inserted by the MeshFilter or TextMesh.
     */
    interface MeshRenderer extends Renderer {
        
                    
    }
    /**
     * General functionality for all renderers.
     */
    interface Renderer extends Component {
        
                    
    }
    /**
     * The Skinned Mesh filter.
     */
    interface SkinnedMeshRenderer extends Renderer {
        
                    
    }
    /**
     * Represents a Sprite object for use in 2D gameplay.
     */
    interface Sprite extends Object {
        
                    
    }
    /**
     * Renders a Sprite for 2D graphics.
     */
    interface SpriteRenderer extends Renderer {
        
                    
    }
    /**
     * Class that represents textures in C# code.
     */
    interface Texture2D extends Texture {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * The texture channel.
     */
    enum ParticleSystemShapeTextureChannel { Red = 0, Green = 1, Blue = 2, Alpha = 3 }
    /**
     * The type of collisions to use for a given Particle System.
     */
    enum ParticleSystemCollisionType { Planes = 0, World = 1 }
    /**
     * Whether to use 2D or 3D colliders for particle collisions.
     */
    enum ParticleSystemCollisionMode { Collision3D = 0, Collision2D = 1 }
    /**
     * Specifies Layers to use in a Physics.Raycast.
     */
    interface LayerMask extends System.ValueType {
        
                    
    }
    /**
     * Quality of world collisions. Medium and low quality are approximate and may leak particles.
     */
    enum ParticleSystemCollisionQuality { High = 0, Medium = 1, Low = 2 }
    /**
     * What action to perform when the particle trigger module passes a test.
     */
    enum ParticleSystemOverlapAction { Ignore = 0, Kill = 1, Callback = 2 }
    /**
     * Whether collider information is available when using the ParticleSystem::GetTriggerParticles method.
     */
    enum ParticleSystemColliderQueryMode { Disabled = 0, One = 1, All = 2 }
    /**
     * The events that cause new particles to be spawned.
     */
    enum ParticleSystemSubEmitterType { Birth = 0, Collision = 1, Death = 2, Trigger = 3, Manual = 4 }
    /**
     * The properties of sub-emitter particles.
     */
    enum ParticleSystemSubEmitterProperties { InheritNothing = 0, InheritEverything = 31, InheritColor = 1, InheritSize = 2, InheritRotation = 4, InheritLifetime = 8, InheritDuration = 16 }
    /**
     * The animation mode.
     */
    enum ParticleSystemAnimationMode { Grid = 0, Sprites = 1 }
    /**
     * Control how animation frames are selected.
     */
    enum ParticleSystemAnimationTimeMode { Lifetime = 0, Speed = 1, FPS = 2 }
    /**
     * The animation type.
     */
    enum ParticleSystemAnimationType { WholeSheet = 0, SingleRow = 1 }
    /**
     * The mode used for selecting rows of an animation in the Texture Sheet Animation Module.
     */
    enum ParticleSystemAnimationRowMode { Custom = 0, Random = 1, MeshIndex = 2 }
    /**
     * The particle gradient mode.
     */
    enum ParticleSystemGradientMode { Color = 0, Gradient = 1, TwoColors = 2, TwoGradients = 3, RandomColor = 4 }
    /**
     * Gradient used for animating colors.
     */
    interface Gradient extends System.Object {
        
                    
    }
    /**
     * How to apply emitter velocity to particles.
     */
    enum ParticleSystemInheritVelocityMode { Initial = 0, Current = 1 }
    /**
     * The particle GameObject filtering mode that specifies which objects are used by specific Particle System modules.
     */
    enum ParticleSystemGameObjectFilter { LayerMask = 0, List = 1, LayerMaskAndList = 2 }
    /**
     * Script interface for Particle System Force Fields.
     */
    class ParticleSystemForceField extends Component {
        /**
         * Selects the type of shape used for influencing particles.
         */
        public get shape(): ParticleSystemForceFieldShape;
        public set shape(value: ParticleSystemForceFieldShape);
        /**
         * Setting a value greater than 0 creates a hollow Force Field shape. This will cause particles to not be affected by the Force Field when closer to the center of the volume than the startRange property.
         */
        public get startRange(): number;
        public set startRange(value: number);
        /**
         * Determines the size of the shape used for influencing particles.
         */
        public get endRange(): number;
        public set endRange(value: number);
        /**
         * Describes the length of the Cylinder when using the Cylinder Force Field shape to influence particles.
         */
        public get length(): number;
        public set length(value: number);
        /**
         * When using the gravity force, set this value between 0 and 1 to control the focal point of the gravity effect.
         */
        public get gravityFocus(): number;
        public set gravityFocus(value: number);
        /**
         * Apply randomness to the Force Field axis that particles will travel around.
         */
        public get rotationRandomness(): Vector2;
        public set rotationRandomness(value: Vector2);
        /**
         * When using Drag, the drag strength will be multiplied by the size of the particles if this toggle is enabled.
         */
        public get multiplyDragByParticleSize(): boolean;
        public set multiplyDragByParticleSize(value: boolean);
        /**
         * When using Drag, the drag strength will be multiplied by the speed of the particles if this toggle is enabled.
         */
        public get multiplyDragByParticleVelocity(): boolean;
        public set multiplyDragByParticleVelocity(value: boolean);
        /**
         * Apply forces to particles within the volume of the Force Field, by using a 3D texture containing vector field data.
         */
        public get vectorField(): Texture3D;
        public set vectorField(value: Texture3D);
        /**
         * Apply a linear force along the local X axis to particles within the volume of the Force Field.
         */
        public get directionX(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set directionX(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * Apply a linear force along the local Y axis to particles within the volume of the Force Field.
         */
        public get directionY(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set directionY(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * Apply a linear force along the local Z axis to particles within the volume of the Force Field.
         */
        public get directionZ(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set directionZ(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * Apply gravity to particles within the volume of the Force Field.
         */
        public get gravity(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set gravity(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * The speed at which particles are propelled around a vortex.
         */
        public get rotationSpeed(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set rotationSpeed(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * Controls how strongly particles are dragged into the vortex motion.
         */
        public get rotationAttraction(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set rotationAttraction(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * Apply drag to particles within the volume of the Force Field.
         */
        public get drag(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set drag(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * The speed at which particles are propelled through the vector field.
         */
        public get vectorFieldSpeed(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set vectorFieldSpeed(value: UnityEngine_ParticleSystem.MinMaxCurve);
        /**
         * Controls how strongly particles are dragged into the vector field motion.
         */
        public get vectorFieldAttraction(): UnityEngine_ParticleSystem.MinMaxCurve;
        public set vectorFieldAttraction(value: UnityEngine_ParticleSystem.MinMaxCurve);
        
        public constructor();
        
        public static FindAll():ParticleSystemForceField[];
        
                    
    }
    /**
     * The quality of the generated noise.
     */
    enum ParticleSystemNoiseQuality { Low = 0, Medium = 1, High = 2 }
    /**
     * Script interface for.
     */
    interface Light extends Behaviour {
        
                    
    }
    /**
     * Behaviours are Components that can be enabled or disabled.
     */
    interface Behaviour extends Component {
        
                    
    }
    /**
     * Choose how Particle Trails are generated.
     */
    enum ParticleSystemTrailMode { PerParticle = 0, Ribbon = 1 }
    /**
     * Choose how textures are applied to Particle Trails.
     */
    enum ParticleSystemTrailTextureMode { Stretch = 0, Tile = 1, DistributePerSegment = 2, RepeatPerSegment = 3 }
    /**
     * Which mode CustomDataModule uses to generate its data.
     */
    enum ParticleSystemCustomDataMode { Disabled = 0, Vector = 1, Color = 2 }
    /**
     * Method extension for Physics in Particle System.
     */
    class ParticlePhysicsExtensions extends System.Object {
        /**
         * Safe array size for use with ParticleSystem.GetCollisionEvents.
         */
        public static GetSafeCollisionEventSize($ps: ParticleSystem):number;
        
        public static GetCollisionEvents($ps: ParticleSystem, $go: GameObject, $collisionEvents: System_Collections_Generic.List$1<ParticleCollisionEvent>):number;
        /**
         * Safe array size for use with ParticleSystem.GetTriggerParticles.
         * @param ps Particle system.
         * @param type Type of trigger to return size for.
         * @returns Number of particles with this trigger event type.
         */
        public static GetSafeTriggerParticlesSize($ps: ParticleSystem, $type: ParticleSystemTriggerEventType):number;
        
        public static GetTriggerParticles($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>):number;
        
        public static GetTriggerParticles($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $colliderData: $Ref<UnityEngine_ParticleSystem.ColliderData>):number;
        
        public static SetTriggerParticles($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $offset: number, $count: number):void;
        
        public static SetTriggerParticles($ps: ParticleSystem, $type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>):void;
        
                    
    }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Information about a particle collision.
     */
    class ParticleCollisionEvent extends System.ValueType {
        /**
         * Intersection point of the collision in world coordinates.
         */
        public get intersection(): Vector3;
        /**
         * Geometry normal at the intersection point of the collision.
         */
        public get normal(): Vector3;
        /**
         * Incident velocity at the intersection point of the collision.
         */
        public get velocity(): Vector3;
        /**
         * The Collider or Collider2D for the GameObject struck by the particles.
         */
        public get colliderComponent(): Component;
        
        public get_Clone(): ParticleCollisionEvent;            
    }
    /**
     * The different types of particle triggers.
     */
    enum ParticleSystemTriggerEventType { Inside = 0, Outside = 1, Enter = 2, Exit = 3 }
    /**
     * The rendering mode for particle systems.
     */
    enum ParticleSystemRenderMode { Billboard = 0, Stretch = 1, HorizontalBillboard = 2, VerticalBillboard = 3, Mesh = 4, None = 5 }
    /**
     * The sorting mode for particle systems.
     */
    enum ParticleSystemSortMode { None = 0, Distance = 1, OldestInFront = 2, YoungestInFront = 3, Depth = 4 }
    /**
     * How particles are aligned when rendered.
     */
    enum ParticleSystemRenderSpace { View = 0, World = 1, Local = 2, Facing = 3, Velocity = 4 }
    /**
     * All possible Particle System vertex shader inputs.
     */
    enum ParticleSystemVertexStream { Position = 0, Normal = 1, Tangent = 2, Color = 3, UV = 4, UV2 = 5, UV3 = 6, UV4 = 7, AnimBlend = 8, AnimFrame = 9, Center = 10, VertexID = 11, SizeX = 12, SizeXY = 13, SizeXYZ = 14, Rotation = 15, Rotation3D = 16, RotationSpeed = 17, RotationSpeed3D = 18, Velocity = 19, Speed = 20, AgePercent = 21, InvStartLifetime = 22, StableRandomX = 23, StableRandomXY = 24, StableRandomXYZ = 25, StableRandomXYZW = 26, VaryingRandomX = 27, VaryingRandomXY = 28, VaryingRandomXYZ = 29, VaryingRandomXYZW = 30, Custom1X = 31, Custom1XY = 32, Custom1XYZ = 33, Custom1XYZW = 34, Custom2X = 35, Custom2XY = 36, Custom2XYZ = 37, Custom2XYZW = 38, NoiseSumX = 39, NoiseSumXY = 40, NoiseSumXYZ = 41, NoiseImpulseX = 42, NoiseImpulseXY = 43, NoiseImpulseXYZ = 44, MeshIndex = 45 }
    /**
     * The type of shape used for influencing particles in the Force Field Component.
     */
    enum ParticleSystemForceFieldShape { Sphere = 0, Hemisphere = 1, Cylinder = 2, Box = 3 }
    /**
     * Use this class to render particles on to the screen.
     */
    class ParticleSystemRenderer extends Renderer {
        /**
         * Control the direction that particles face.
         */
        public get alignment(): ParticleSystemRenderSpace;
        public set alignment(value: ParticleSystemRenderSpace);
        /**
         * Specifies how the system draws particles.
         */
        public get renderMode(): ParticleSystemRenderMode;
        public set renderMode(value: ParticleSystemRenderMode);
        /**
         * Specifies how to sort particles within a system.
         */
        public get sortMode(): ParticleSystemSortMode;
        public set sortMode(value: ParticleSystemSortMode);
        /**
         * How much are the particles stretched in their direction of motion, defined as the length of the particle compared to its width.
         */
        public get lengthScale(): number;
        public set lengthScale(value: number);
        /**
         * Specifies how much particles stretch depending on their velocity.
         */
        public get velocityScale(): number;
        public set velocityScale(value: number);
        /**
         * How much do the particles stretch depending on the Camera's speed.
         */
        public get cameraVelocityScale(): number;
        public set cameraVelocityScale(value: number);
        /**
         * Specifies how much a billboard particle orients its normals towards the Camera.
         */
        public get normalDirection(): number;
        public set normalDirection(value: number);
        /**
         * Apply a shadow bias to prevent self-shadowing artifacts. The specified value is the proportion of the particle size.
         */
        public get shadowBias(): number;
        public set shadowBias(value: number);
        /**
         * Biases Particle System sorting amongst other transparencies.
         */
        public get sortingFudge(): number;
        public set sortingFudge(value: number);
        /**
         * Clamp the minimum particle size.
         */
        public get minParticleSize(): number;
        public set minParticleSize(value: number);
        /**
         * Clamp the maximum particle size.
         */
        public get maxParticleSize(): number;
        public set maxParticleSize(value: number);
        /**
         * Modify the pivot point used for rotating particles.
         */
        public get pivot(): Vector3;
        public set pivot(value: Vector3);
        /**
         * Flip a percentage of the particles, along each axis.
         */
        public get flip(): Vector3;
        public set flip(value: Vector3);
        /**
         * Specifies how the Particle System Renderer interacts with SpriteMask.
         */
        public get maskInteraction(): SpriteMaskInteraction;
        public set maskInteraction(value: SpriteMaskInteraction);
        /**
         * Set the Material that the TrailModule uses to attach trails to particles.
         */
        public get trailMaterial(): Material;
        public set trailMaterial(value: Material);
        /**
         * Enables GPU Instancing on platforms that support it.
         */
        public get enableGPUInstancing(): boolean;
        public set enableGPUInstancing(value: boolean);
        /**
         * Allow billboard particles to roll around their z-axis.
         */
        public get allowRoll(): boolean;
        public set allowRoll(value: boolean);
        /**
         * Enables freeform stretching behavior.
         */
        public get freeformStretching(): boolean;
        public set freeformStretching(value: boolean);
        /**
         * Rotate the particles based on the direction they are stretched in. This is added on top of other particle rotation.
         */
        public get rotateWithStretchDirection(): boolean;
        public set rotateWithStretchDirection(value: boolean);
        /**
         * The Mesh that the particle uses instead of a billboarded Texture.
         */
        public get mesh(): Mesh;
        public set mesh(value: Mesh);
        /**
         * The number of Meshes the system uses for particle rendering.
         */
        public get meshCount(): number;
        /**
         * The number of currently active custom vertex streams.
         */
        public get activeVertexStreamsCount(): number;
        /**
         * Determines whether the Particle System can be rendered using GPU Instancing.
         */
        public get supportsMeshInstancing(): boolean;
        
        public constructor();
        /**
         * Get the array of Meshes to be used as particles.
         * @param meshes This array is populated with the list of Meshes being used for particle rendering.
         * @returns The number of Meshes actually written to the destination array.
         */
        public GetMeshes($meshes: Mesh[]):number;
        /**
         * Set an array of Meshes to use as particles when the ParticleSystemRenderer.renderMode is set to ParticleSystemRenderMode.Mesh.
         * @param meshes Array of Meshes to use.
         * @param size Number of elements from the Mesh array to apply.
         */
        public SetMeshes($meshes: Mesh[], $size: number):void;
        /**
         * Set an array of Meshes to use as particles when the ParticleSystemRenderer.renderMode is set to ParticleSystemRenderMode.Mesh.
         * @param meshes Array of Meshes to use.
         * @param size Number of elements from the Mesh array to apply.
         */
        public SetMeshes($meshes: Mesh[]):void;
        /**
         * Creates a snapshot of ParticleSystemRenderer and stores it in mesh.
         * @param mesh A static Mesh to receive the snapshot of the particles.
         * @param camera The Camera used to determine which way camera-space particles face.
         * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
         */
        public BakeMesh($mesh: Mesh, $useTransform?: boolean):void;
        /**
         * Creates a snapshot of ParticleSystemRenderer and stores it in mesh.
         * @param mesh A static Mesh to receive the snapshot of the particles.
         * @param camera The Camera used to determine which way camera-space particles face.
         * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
         */
        public BakeMesh($mesh: Mesh, $camera: Camera, $useTransform?: boolean):void;
        /**
         * Creates a snapshot of ParticleSystem Trails and stores them in mesh.
         * @param mesh A static Mesh to receive the snapshot of the particle trails.
         * @param camera The Camera used to determine which way camera-space trails face.
         * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
         */
        public BakeTrailsMesh($mesh: Mesh, $useTransform?: boolean):void;
        /**
         * Creates a snapshot of ParticleSystem Trails and stores them in mesh.
         * @param mesh A static Mesh to receive the snapshot of the particle trails.
         * @param camera The Camera used to determine which way camera-space trails face.
         * @param useTransform Specifies whether to include the rotation and scale of the Transform in the baked Mesh.
         */
        public BakeTrailsMesh($mesh: Mesh, $camera: Camera, $useTransform?: boolean):void;
        
        public SetActiveVertexStreams($streams: System_Collections_Generic.List$1<ParticleSystemVertexStream>):void;
        
        public GetActiveVertexStreams($streams: System_Collections_Generic.List$1<ParticleSystemVertexStream>):void;
        
                    
    }
    /**
     * All possible Particle System vertex shader inputs.
     */
    enum ParticleSystemVertexStreams { Position = 1, Normal = 2, Tangent = 4, Color = 8, UV = 16, UV2BlendAndFrame = 32, CenterAndVertexID = 64, Size = 128, Rotation = 256, Velocity = 512, Lifetime = 1024, Custom1 = 2048, Custom2 = 4096, Random = 8192, None = 0, All = 2147483647 }
    /**
     * This enum controls the mode under which the sprite will interact with the masking system.
     */
    enum SpriteMaskInteraction { None = 0, VisibleInsideMask = 1, VisibleOutsideMask = 2 }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
    }
    /**
     * Class for handling 3D Textures, Use this to create.
     */
    interface Texture3D extends Texture {
        
                    
    }
    
    interface ParticleSystem {
        /**
         * Safe array size for use with ParticleSystem.GetCollisionEvents.
         * @extension UnityEngine.ParticlePhysicsExtensions
         */
        GetSafeCollisionEventSize():number;
        /** @extension UnityEngine.ParticlePhysicsExtensions */
        GetCollisionEvents($go: GameObject, $collisionEvents: System_Collections_Generic.List$1<ParticleCollisionEvent>):number;
        /**
         * Safe array size for use with ParticleSystem.GetTriggerParticles.
         * @param ps Particle system.
         * @param type Type of trigger to return size for.
         * @returns Number of particles with this trigger event type.
         * @extension UnityEngine.ParticlePhysicsExtensions
         */
        GetSafeTriggerParticlesSize($type: ParticleSystemTriggerEventType):number;
        /** @extension UnityEngine.ParticlePhysicsExtensions */
        GetTriggerParticles($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>):number;
        /** @extension UnityEngine.ParticlePhysicsExtensions */
        GetTriggerParticles($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $colliderData: $Ref<UnityEngine_ParticleSystem.ColliderData>):number;
        /** @extension UnityEngine.ParticlePhysicsExtensions */
        SetTriggerParticles($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>, $offset: number, $count: number):void;
        /** @extension UnityEngine.ParticlePhysicsExtensions */
        SetTriggerParticles($type: ParticleSystemTriggerEventType, $particles: System_Collections_Generic.List$1<UnityEngine_ParticleSystem.Particle>):void;
        
                    
    }
    
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
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Int16 extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.ParticleSystem' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
        
    /**
     * Script interface for a Particle.
     */
    class Particle extends System.ValueType {
        
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        
        public get velocity(): UnityEngine.Vector3;
        public set velocity(value: UnityEngine.Vector3);
        
        public get animatedVelocity(): UnityEngine.Vector3;
        
        public get totalVelocity(): UnityEngine.Vector3;
        
        public get remainingLifetime(): number;
        public set remainingLifetime(value: number);
        
        public get startLifetime(): number;
        public set startLifetime(value: number);
        
        public get startColor(): UnityEngine.Color32;
        public set startColor(value: UnityEngine.Color32);
        
        public get randomSeed(): number;
        public set randomSeed(value: number);
        
        public get axisOfRotation(): UnityEngine.Vector3;
        public set axisOfRotation(value: UnityEngine.Vector3);
        
        public get startSize(): number;
        public set startSize(value: number);
        
        public get startSize3D(): UnityEngine.Vector3;
        public set startSize3D(value: UnityEngine.Vector3);
        
        public get rotation(): number;
        public set rotation(value: number);
        
        public get rotation3D(): UnityEngine.Vector3;
        public set rotation3D(value: UnityEngine.Vector3);
        
        public get angularVelocity(): number;
        public set angularVelocity(value: number);
        
        public get angularVelocity3D(): UnityEngine.Vector3;
        public set angularVelocity3D(value: UnityEngine.Vector3);
        
        public GetCurrentSize($system: UnityEngine.ParticleSystem):number;
        
        public GetCurrentSize3D($system: UnityEngine.ParticleSystem):UnityEngine.Vector3;
        
        public GetCurrentColor($system: UnityEngine.ParticleSystem):UnityEngine.Color32;
        
        public SetMeshIndex($index: number):void;
        
        public GetMeshIndex($system: UnityEngine.ParticleSystem):number;
        
        public get_Clone(): Particle;            
    }
    /**
     * Script interface for storing the particle playback state.
     */
    class PlaybackState extends System.ValueType {
        
        public get_Clone(): PlaybackState;            
    }
    
    class Trails extends System.ValueType {
        
                    
    }
    /**
     * Script interface for Particle System emission parameters.
     */
    class EmitParams extends System.ValueType {
        
        public get particle(): Particle;
        public set particle(value: Particle);
        
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        
        public get applyShapeToPosition(): boolean;
        public set applyShapeToPosition(value: boolean);
        
        public get velocity(): UnityEngine.Vector3;
        public set velocity(value: UnityEngine.Vector3);
        
        public get startLifetime(): number;
        public set startLifetime(value: number);
        
        public get startSize(): number;
        public set startSize(value: number);
        
        public get startSize3D(): UnityEngine.Vector3;
        public set startSize3D(value: UnityEngine.Vector3);
        
        public get axisOfRotation(): UnityEngine.Vector3;
        public set axisOfRotation(value: UnityEngine.Vector3);
        
        public get rotation(): number;
        public set rotation(value: number);
        
        public get rotation3D(): UnityEngine.Vector3;
        public set rotation3D(value: UnityEngine.Vector3);
        
        public get angularVelocity(): number;
        public set angularVelocity(value: number);
        
        public get angularVelocity3D(): UnityEngine.Vector3;
        public set angularVelocity3D(value: UnityEngine.Vector3);
        
        public get startColor(): UnityEngine.Color32;
        public set startColor(value: UnityEngine.Color32);
        
        public get randomSeed(): number;
        public set randomSeed(value: number);
        
        public set meshIndex(value: number);
        
        public ResetPosition():void;
        
        public ResetVelocity():void;
        
        public ResetAxisOfRotation():void;
        
        public ResetRotation():void;
        
        public ResetAngularVelocity():void;
        
        public ResetStartSize():void;
        
        public ResetStartColor():void;
        
        public ResetRandomSeed():void;
        
        public ResetStartLifetime():void;
        
        public ResetMeshIndex():void;
        
                    
    }
    /**
     * Script interface for the MainModule of a Particle System.
     */
    class MainModule extends System.ValueType {
        
        public get duration(): number;
        public set duration(value: number);
        
        public get loop(): boolean;
        public set loop(value: boolean);
        
        public get prewarm(): boolean;
        public set prewarm(value: boolean);
        
        public get startDelay(): MinMaxCurve;
        public set startDelay(value: MinMaxCurve);
        
        public get startDelayMultiplier(): number;
        public set startDelayMultiplier(value: number);
        
        public get startLifetime(): MinMaxCurve;
        public set startLifetime(value: MinMaxCurve);
        
        public get startLifetimeMultiplier(): number;
        public set startLifetimeMultiplier(value: number);
        
        public get startSpeed(): MinMaxCurve;
        public set startSpeed(value: MinMaxCurve);
        
        public get startSpeedMultiplier(): number;
        public set startSpeedMultiplier(value: number);
        
        public get startSize3D(): boolean;
        public set startSize3D(value: boolean);
        
        public get startSize(): MinMaxCurve;
        public set startSize(value: MinMaxCurve);
        
        public get startSizeMultiplier(): number;
        public set startSizeMultiplier(value: number);
        
        public get startSizeX(): MinMaxCurve;
        public set startSizeX(value: MinMaxCurve);
        
        public get startSizeXMultiplier(): number;
        public set startSizeXMultiplier(value: number);
        
        public get startSizeY(): MinMaxCurve;
        public set startSizeY(value: MinMaxCurve);
        
        public get startSizeYMultiplier(): number;
        public set startSizeYMultiplier(value: number);
        
        public get startSizeZ(): MinMaxCurve;
        public set startSizeZ(value: MinMaxCurve);
        
        public get startSizeZMultiplier(): number;
        public set startSizeZMultiplier(value: number);
        
        public get startRotation3D(): boolean;
        public set startRotation3D(value: boolean);
        
        public get startRotation(): MinMaxCurve;
        public set startRotation(value: MinMaxCurve);
        
        public get startRotationMultiplier(): number;
        public set startRotationMultiplier(value: number);
        
        public get startRotationX(): MinMaxCurve;
        public set startRotationX(value: MinMaxCurve);
        
        public get startRotationXMultiplier(): number;
        public set startRotationXMultiplier(value: number);
        
        public get startRotationY(): MinMaxCurve;
        public set startRotationY(value: MinMaxCurve);
        
        public get startRotationYMultiplier(): number;
        public set startRotationYMultiplier(value: number);
        
        public get startRotationZ(): MinMaxCurve;
        public set startRotationZ(value: MinMaxCurve);
        
        public get startRotationZMultiplier(): number;
        public set startRotationZMultiplier(value: number);
        
        public get flipRotation(): number;
        public set flipRotation(value: number);
        
        public get startColor(): MinMaxGradient;
        public set startColor(value: MinMaxGradient);
        
        public get gravityModifier(): MinMaxCurve;
        public set gravityModifier(value: MinMaxCurve);
        
        public get gravityModifierMultiplier(): number;
        public set gravityModifierMultiplier(value: number);
        
        public get simulationSpace(): UnityEngine.ParticleSystemSimulationSpace;
        public set simulationSpace(value: UnityEngine.ParticleSystemSimulationSpace);
        
        public get customSimulationSpace(): UnityEngine.Transform;
        public set customSimulationSpace(value: UnityEngine.Transform);
        
        public get simulationSpeed(): number;
        public set simulationSpeed(value: number);
        
        public get useUnscaledTime(): boolean;
        public set useUnscaledTime(value: boolean);
        
        public get scalingMode(): UnityEngine.ParticleSystemScalingMode;
        public set scalingMode(value: UnityEngine.ParticleSystemScalingMode);
        
        public get playOnAwake(): boolean;
        public set playOnAwake(value: boolean);
        
        public get maxParticles(): number;
        public set maxParticles(value: number);
        
        public get emitterVelocityMode(): UnityEngine.ParticleSystemEmitterVelocityMode;
        public set emitterVelocityMode(value: UnityEngine.ParticleSystemEmitterVelocityMode);
        
        public get stopAction(): UnityEngine.ParticleSystemStopAction;
        public set stopAction(value: UnityEngine.ParticleSystemStopAction);
        
        public get ringBufferMode(): UnityEngine.ParticleSystemRingBufferMode;
        public set ringBufferMode(value: UnityEngine.ParticleSystemRingBufferMode);
        
        public get ringBufferLoopRange(): UnityEngine.Vector2;
        public set ringBufferLoopRange(value: UnityEngine.Vector2);
        
        public get cullingMode(): UnityEngine.ParticleSystemCullingMode;
        public set cullingMode(value: UnityEngine.ParticleSystemCullingMode);
        
                    
    }
    /**
     * Script interface for the EmissionModule of a Particle System.
     */
    class EmissionModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get rateOverTime(): MinMaxCurve;
        public set rateOverTime(value: MinMaxCurve);
        
        public get rateOverTimeMultiplier(): number;
        public set rateOverTimeMultiplier(value: number);
        
        public get rateOverDistance(): MinMaxCurve;
        public set rateOverDistance(value: MinMaxCurve);
        
        public get rateOverDistanceMultiplier(): number;
        public set rateOverDistanceMultiplier(value: number);
        
        public get burstCount(): number;
        public set burstCount(value: number);
        
        public SetBursts($bursts: Burst[]):void;
        
        public SetBursts($bursts: Burst[], $size: number):void;
        
        public GetBursts($bursts: Burst[]):number;
        
        public SetBurst($index: number, $burst: Burst):void;
        
        public GetBurst($index: number):Burst;
        
                    
    }
    /**
     * Script interface for the ShapeModule of a Particle System.
     */
    class ShapeModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get shapeType(): UnityEngine.ParticleSystemShapeType;
        public set shapeType(value: UnityEngine.ParticleSystemShapeType);
        
        public get randomDirectionAmount(): number;
        public set randomDirectionAmount(value: number);
        
        public get sphericalDirectionAmount(): number;
        public set sphericalDirectionAmount(value: number);
        
        public get randomPositionAmount(): number;
        public set randomPositionAmount(value: number);
        
        public get alignToDirection(): boolean;
        public set alignToDirection(value: boolean);
        
        public get radius(): number;
        public set radius(value: number);
        
        public get radiusMode(): UnityEngine.ParticleSystemShapeMultiModeValue;
        public set radiusMode(value: UnityEngine.ParticleSystemShapeMultiModeValue);
        
        public get radiusSpread(): number;
        public set radiusSpread(value: number);
        
        public get radiusSpeed(): MinMaxCurve;
        public set radiusSpeed(value: MinMaxCurve);
        
        public get radiusSpeedMultiplier(): number;
        public set radiusSpeedMultiplier(value: number);
        
        public get radiusThickness(): number;
        public set radiusThickness(value: number);
        
        public get angle(): number;
        public set angle(value: number);
        
        public get length(): number;
        public set length(value: number);
        
        public get boxThickness(): UnityEngine.Vector3;
        public set boxThickness(value: UnityEngine.Vector3);
        
        public get meshShapeType(): UnityEngine.ParticleSystemMeshShapeType;
        public set meshShapeType(value: UnityEngine.ParticleSystemMeshShapeType);
        
        public get mesh(): UnityEngine.Mesh;
        public set mesh(value: UnityEngine.Mesh);
        
        public get meshRenderer(): UnityEngine.MeshRenderer;
        public set meshRenderer(value: UnityEngine.MeshRenderer);
        
        public get skinnedMeshRenderer(): UnityEngine.SkinnedMeshRenderer;
        public set skinnedMeshRenderer(value: UnityEngine.SkinnedMeshRenderer);
        
        public get sprite(): UnityEngine.Sprite;
        public set sprite(value: UnityEngine.Sprite);
        
        public get spriteRenderer(): UnityEngine.SpriteRenderer;
        public set spriteRenderer(value: UnityEngine.SpriteRenderer);
        
        public get useMeshMaterialIndex(): boolean;
        public set useMeshMaterialIndex(value: boolean);
        
        public get meshMaterialIndex(): number;
        public set meshMaterialIndex(value: number);
        
        public get useMeshColors(): boolean;
        public set useMeshColors(value: boolean);
        
        public get normalOffset(): number;
        public set normalOffset(value: number);
        
        public get meshSpawnMode(): UnityEngine.ParticleSystemShapeMultiModeValue;
        public set meshSpawnMode(value: UnityEngine.ParticleSystemShapeMultiModeValue);
        
        public get meshSpawnSpread(): number;
        public set meshSpawnSpread(value: number);
        
        public get meshSpawnSpeed(): MinMaxCurve;
        public set meshSpawnSpeed(value: MinMaxCurve);
        
        public get meshSpawnSpeedMultiplier(): number;
        public set meshSpawnSpeedMultiplier(value: number);
        
        public get arc(): number;
        public set arc(value: number);
        
        public get arcMode(): UnityEngine.ParticleSystemShapeMultiModeValue;
        public set arcMode(value: UnityEngine.ParticleSystemShapeMultiModeValue);
        
        public get arcSpread(): number;
        public set arcSpread(value: number);
        
        public get arcSpeed(): MinMaxCurve;
        public set arcSpeed(value: MinMaxCurve);
        
        public get arcSpeedMultiplier(): number;
        public set arcSpeedMultiplier(value: number);
        
        public get donutRadius(): number;
        public set donutRadius(value: number);
        
        public get position(): UnityEngine.Vector3;
        public set position(value: UnityEngine.Vector3);
        
        public get rotation(): UnityEngine.Vector3;
        public set rotation(value: UnityEngine.Vector3);
        
        public get scale(): UnityEngine.Vector3;
        public set scale(value: UnityEngine.Vector3);
        
        public get texture(): UnityEngine.Texture2D;
        public set texture(value: UnityEngine.Texture2D);
        
        public get textureClipChannel(): UnityEngine.ParticleSystemShapeTextureChannel;
        public set textureClipChannel(value: UnityEngine.ParticleSystemShapeTextureChannel);
        
        public get textureClipThreshold(): number;
        public set textureClipThreshold(value: number);
        
        public get textureColorAffectsParticles(): boolean;
        public set textureColorAffectsParticles(value: boolean);
        
        public get textureAlphaAffectsParticles(): boolean;
        public set textureAlphaAffectsParticles(value: boolean);
        
        public get textureBilinearFiltering(): boolean;
        public set textureBilinearFiltering(value: boolean);
        
        public get textureUVChannel(): number;
        public set textureUVChannel(value: number);
        
                    
    }
    /**
     * Script interface for the VelocityOverLifetimeModule of a Particle System.
     */
    class VelocityOverLifetimeModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        
        public get xMultiplier(): number;
        public set xMultiplier(value: number);
        
        public get yMultiplier(): number;
        public set yMultiplier(value: number);
        
        public get zMultiplier(): number;
        public set zMultiplier(value: number);
        
        public get orbitalX(): MinMaxCurve;
        public set orbitalX(value: MinMaxCurve);
        
        public get orbitalY(): MinMaxCurve;
        public set orbitalY(value: MinMaxCurve);
        
        public get orbitalZ(): MinMaxCurve;
        public set orbitalZ(value: MinMaxCurve);
        
        public get orbitalXMultiplier(): number;
        public set orbitalXMultiplier(value: number);
        
        public get orbitalYMultiplier(): number;
        public set orbitalYMultiplier(value: number);
        
        public get orbitalZMultiplier(): number;
        public set orbitalZMultiplier(value: number);
        
        public get orbitalOffsetX(): MinMaxCurve;
        public set orbitalOffsetX(value: MinMaxCurve);
        
        public get orbitalOffsetY(): MinMaxCurve;
        public set orbitalOffsetY(value: MinMaxCurve);
        
        public get orbitalOffsetZ(): MinMaxCurve;
        public set orbitalOffsetZ(value: MinMaxCurve);
        
        public get orbitalOffsetXMultiplier(): number;
        public set orbitalOffsetXMultiplier(value: number);
        
        public get orbitalOffsetYMultiplier(): number;
        public set orbitalOffsetYMultiplier(value: number);
        
        public get orbitalOffsetZMultiplier(): number;
        public set orbitalOffsetZMultiplier(value: number);
        
        public get radial(): MinMaxCurve;
        public set radial(value: MinMaxCurve);
        
        public get radialMultiplier(): number;
        public set radialMultiplier(value: number);
        
        public get speedModifier(): MinMaxCurve;
        public set speedModifier(value: MinMaxCurve);
        
        public get speedModifierMultiplier(): number;
        public set speedModifierMultiplier(value: number);
        
        public get space(): UnityEngine.ParticleSystemSimulationSpace;
        public set space(value: UnityEngine.ParticleSystemSimulationSpace);
        
                    
    }
    /**
     * Script interface for the Limit Velocity Over Lifetime module.
     */
    class LimitVelocityOverLifetimeModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get limitX(): MinMaxCurve;
        public set limitX(value: MinMaxCurve);
        
        public get limitXMultiplier(): number;
        public set limitXMultiplier(value: number);
        
        public get limitY(): MinMaxCurve;
        public set limitY(value: MinMaxCurve);
        
        public get limitYMultiplier(): number;
        public set limitYMultiplier(value: number);
        
        public get limitZ(): MinMaxCurve;
        public set limitZ(value: MinMaxCurve);
        
        public get limitZMultiplier(): number;
        public set limitZMultiplier(value: number);
        
        public get limit(): MinMaxCurve;
        public set limit(value: MinMaxCurve);
        
        public get limitMultiplier(): number;
        public set limitMultiplier(value: number);
        
        public get dampen(): number;
        public set dampen(value: number);
        
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        
        public get space(): UnityEngine.ParticleSystemSimulationSpace;
        public set space(value: UnityEngine.ParticleSystemSimulationSpace);
        
        public get drag(): MinMaxCurve;
        public set drag(value: MinMaxCurve);
        
        public get dragMultiplier(): number;
        public set dragMultiplier(value: number);
        
        public get multiplyDragByParticleSize(): boolean;
        public set multiplyDragByParticleSize(value: boolean);
        
        public get multiplyDragByParticleVelocity(): boolean;
        public set multiplyDragByParticleVelocity(value: boolean);
        
                    
    }
    /**
     * The Inherit Velocity Module controls how the velocity of the emitter is transferred to the particles as they are emitted.
     */
    class InheritVelocityModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get mode(): UnityEngine.ParticleSystemInheritVelocityMode;
        public set mode(value: UnityEngine.ParticleSystemInheritVelocityMode);
        
        public get curve(): MinMaxCurve;
        public set curve(value: MinMaxCurve);
        
        public get curveMultiplier(): number;
        public set curveMultiplier(value: number);
        
                    
    }
    /**
     * The Lifetime By Emitter Speed Module controls the initial lifetime of each particle based on the speed of the emitter when the particle was spawned.
     */
    class LifetimeByEmitterSpeedModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get curve(): MinMaxCurve;
        public set curve(value: MinMaxCurve);
        
        public get curveMultiplier(): number;
        public set curveMultiplier(value: number);
        
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);
        
                    
    }
    /**
     * Script interface for the ForceOverLifetimeModule of a Particle System.
     */
    class ForceOverLifetimeModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        
        public get xMultiplier(): number;
        public set xMultiplier(value: number);
        
        public get yMultiplier(): number;
        public set yMultiplier(value: number);
        
        public get zMultiplier(): number;
        public set zMultiplier(value: number);
        
        public get space(): UnityEngine.ParticleSystemSimulationSpace;
        public set space(value: UnityEngine.ParticleSystemSimulationSpace);
        
        public get randomized(): boolean;
        public set randomized(value: boolean);
        
                    
    }
    /**
     * Script interface for the ColorOverLifetimeModule of a Particle System.
     */
    class ColorOverLifetimeModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get color(): MinMaxGradient;
        public set color(value: MinMaxGradient);
        
                    
    }
    /**
     * Script interface for the ColorBySpeedModule of a Particle System.
     */
    class ColorBySpeedModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get color(): MinMaxGradient;
        public set color(value: MinMaxGradient);
        
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);
        
                    
    }
    /**
     * Script interface for the SizeOverLifetimeModule of a Particle System.
     */
    class SizeOverLifetimeModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get size(): MinMaxCurve;
        public set size(value: MinMaxCurve);
        
        public get sizeMultiplier(): number;
        public set sizeMultiplier(value: number);
        
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        
        public get xMultiplier(): number;
        public set xMultiplier(value: number);
        
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        
        public get yMultiplier(): number;
        public set yMultiplier(value: number);
        
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        
        public get zMultiplier(): number;
        public set zMultiplier(value: number);
        
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        
                    
    }
    /**
     * Script interface for the SizeBySpeedModule of a Particle System.
     */
    class SizeBySpeedModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get size(): MinMaxCurve;
        public set size(value: MinMaxCurve);
        
        public get sizeMultiplier(): number;
        public set sizeMultiplier(value: number);
        
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        
        public get xMultiplier(): number;
        public set xMultiplier(value: number);
        
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        
        public get yMultiplier(): number;
        public set yMultiplier(value: number);
        
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        
        public get zMultiplier(): number;
        public set zMultiplier(value: number);
        
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);
        
                    
    }
    /**
     * Script interface for the RotationOverLifetimeModule of a Particle System.
     */
    class RotationOverLifetimeModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        
        public get xMultiplier(): number;
        public set xMultiplier(value: number);
        
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        
        public get yMultiplier(): number;
        public set yMultiplier(value: number);
        
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        
        public get zMultiplier(): number;
        public set zMultiplier(value: number);
        
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        
                    
    }
    /**
     * Script interface for the RotationBySpeedModule of a Particle System.
     */
    class RotationBySpeedModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get x(): MinMaxCurve;
        public set x(value: MinMaxCurve);
        
        public get xMultiplier(): number;
        public set xMultiplier(value: number);
        
        public get y(): MinMaxCurve;
        public set y(value: MinMaxCurve);
        
        public get yMultiplier(): number;
        public set yMultiplier(value: number);
        
        public get z(): MinMaxCurve;
        public set z(value: MinMaxCurve);
        
        public get zMultiplier(): number;
        public set zMultiplier(value: number);
        
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        
        public get range(): UnityEngine.Vector2;
        public set range(value: UnityEngine.Vector2);
        
                    
    }
    /**
     * Script interface for the ExternalForcesModule of a Particle System.
     */
    class ExternalForcesModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get multiplier(): number;
        public set multiplier(value: number);
        
        public get multiplierCurve(): MinMaxCurve;
        public set multiplierCurve(value: MinMaxCurve);
        
        public get influenceFilter(): UnityEngine.ParticleSystemGameObjectFilter;
        public set influenceFilter(value: UnityEngine.ParticleSystemGameObjectFilter);
        
        public get influenceMask(): UnityEngine.LayerMask;
        public set influenceMask(value: UnityEngine.LayerMask);
        
        public get influenceCount(): number;
        
        public IsAffectedBy($field: UnityEngine.ParticleSystemForceField):boolean;
        
        public AddInfluence($field: UnityEngine.ParticleSystemForceField):void;
        
        public RemoveInfluence($index: number):void;
        
        public RemoveInfluence($field: UnityEngine.ParticleSystemForceField):void;
        
        public RemoveAllInfluences():void;
        
        public SetInfluence($index: number, $field: UnityEngine.ParticleSystemForceField):void;
        
        public GetInfluence($index: number):UnityEngine.ParticleSystemForceField;
        
                    
    }
    /**
     * Script interface for the NoiseModule of a Particle System.
     * The Noise Module allows you to apply turbulence to the movement of your particles. Use the low quality settings to create computationally efficient Noise, or simulate smoother, richer Noise with the higher quality settings. You can also choose to define the behavior of the Noise individually for each axis.
     */
    class NoiseModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get separateAxes(): boolean;
        public set separateAxes(value: boolean);
        
        public get strength(): MinMaxCurve;
        public set strength(value: MinMaxCurve);
        
        public get strengthMultiplier(): number;
        public set strengthMultiplier(value: number);
        
        public get strengthX(): MinMaxCurve;
        public set strengthX(value: MinMaxCurve);
        
        public get strengthXMultiplier(): number;
        public set strengthXMultiplier(value: number);
        
        public get strengthY(): MinMaxCurve;
        public set strengthY(value: MinMaxCurve);
        
        public get strengthYMultiplier(): number;
        public set strengthYMultiplier(value: number);
        
        public get strengthZ(): MinMaxCurve;
        public set strengthZ(value: MinMaxCurve);
        
        public get strengthZMultiplier(): number;
        public set strengthZMultiplier(value: number);
        
        public get frequency(): number;
        public set frequency(value: number);
        
        public get damping(): boolean;
        public set damping(value: boolean);
        
        public get octaveCount(): number;
        public set octaveCount(value: number);
        
        public get octaveMultiplier(): number;
        public set octaveMultiplier(value: number);
        
        public get octaveScale(): number;
        public set octaveScale(value: number);
        
        public get quality(): UnityEngine.ParticleSystemNoiseQuality;
        public set quality(value: UnityEngine.ParticleSystemNoiseQuality);
        
        public get scrollSpeed(): MinMaxCurve;
        public set scrollSpeed(value: MinMaxCurve);
        
        public get scrollSpeedMultiplier(): number;
        public set scrollSpeedMultiplier(value: number);
        
        public get remapEnabled(): boolean;
        public set remapEnabled(value: boolean);
        
        public get remap(): MinMaxCurve;
        public set remap(value: MinMaxCurve);
        
        public get remapMultiplier(): number;
        public set remapMultiplier(value: number);
        
        public get remapX(): MinMaxCurve;
        public set remapX(value: MinMaxCurve);
        
        public get remapXMultiplier(): number;
        public set remapXMultiplier(value: number);
        
        public get remapY(): MinMaxCurve;
        public set remapY(value: MinMaxCurve);
        
        public get remapYMultiplier(): number;
        public set remapYMultiplier(value: number);
        
        public get remapZ(): MinMaxCurve;
        public set remapZ(value: MinMaxCurve);
        
        public get remapZMultiplier(): number;
        public set remapZMultiplier(value: number);
        
        public get positionAmount(): MinMaxCurve;
        public set positionAmount(value: MinMaxCurve);
        
        public get rotationAmount(): MinMaxCurve;
        public set rotationAmount(value: MinMaxCurve);
        
        public get sizeAmount(): MinMaxCurve;
        public set sizeAmount(value: MinMaxCurve);
        
                    
    }
    /**
     * Script interface for the CollisionMmodule of a Particle System.
     */
    class CollisionModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get type(): UnityEngine.ParticleSystemCollisionType;
        public set type(value: UnityEngine.ParticleSystemCollisionType);
        
        public get mode(): UnityEngine.ParticleSystemCollisionMode;
        public set mode(value: UnityEngine.ParticleSystemCollisionMode);
        
        public get dampen(): MinMaxCurve;
        public set dampen(value: MinMaxCurve);
        
        public get dampenMultiplier(): number;
        public set dampenMultiplier(value: number);
        
        public get bounce(): MinMaxCurve;
        public set bounce(value: MinMaxCurve);
        
        public get bounceMultiplier(): number;
        public set bounceMultiplier(value: number);
        
        public get lifetimeLoss(): MinMaxCurve;
        public set lifetimeLoss(value: MinMaxCurve);
        
        public get lifetimeLossMultiplier(): number;
        public set lifetimeLossMultiplier(value: number);
        
        public get minKillSpeed(): number;
        public set minKillSpeed(value: number);
        
        public get maxKillSpeed(): number;
        public set maxKillSpeed(value: number);
        
        public get collidesWith(): UnityEngine.LayerMask;
        public set collidesWith(value: UnityEngine.LayerMask);
        
        public get enableDynamicColliders(): boolean;
        public set enableDynamicColliders(value: boolean);
        
        public get maxCollisionShapes(): number;
        public set maxCollisionShapes(value: number);
        
        public get quality(): UnityEngine.ParticleSystemCollisionQuality;
        public set quality(value: UnityEngine.ParticleSystemCollisionQuality);
        
        public get voxelSize(): number;
        public set voxelSize(value: number);
        
        public get radiusScale(): number;
        public set radiusScale(value: number);
        
        public get sendCollisionMessages(): boolean;
        public set sendCollisionMessages(value: boolean);
        
        public get colliderForce(): number;
        public set colliderForce(value: number);
        
        public get multiplyColliderForceByCollisionAngle(): boolean;
        public set multiplyColliderForceByCollisionAngle(value: boolean);
        
        public get multiplyColliderForceByParticleSpeed(): boolean;
        public set multiplyColliderForceByParticleSpeed(value: boolean);
        
        public get multiplyColliderForceByParticleSize(): boolean;
        public set multiplyColliderForceByParticleSize(value: boolean);
        
        public get planeCount(): number;
        
        public AddPlane($transform: UnityEngine.Transform):void;
        
        public RemovePlane($index: number):void;
        
        public RemovePlane($transform: UnityEngine.Transform):void;
        
        public SetPlane($index: number, $transform: UnityEngine.Transform):void;
        
        public GetPlane($index: number):UnityEngine.Transform;
        
                    
    }
    /**
     * Script interface for the TriggerModule of a Particle System.
     */
    class TriggerModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get inside(): UnityEngine.ParticleSystemOverlapAction;
        public set inside(value: UnityEngine.ParticleSystemOverlapAction);
        
        public get outside(): UnityEngine.ParticleSystemOverlapAction;
        public set outside(value: UnityEngine.ParticleSystemOverlapAction);
        
        public get enter(): UnityEngine.ParticleSystemOverlapAction;
        public set enter(value: UnityEngine.ParticleSystemOverlapAction);
        
        public get exit(): UnityEngine.ParticleSystemOverlapAction;
        public set exit(value: UnityEngine.ParticleSystemOverlapAction);
        
        public get colliderQueryMode(): UnityEngine.ParticleSystemColliderQueryMode;
        public set colliderQueryMode(value: UnityEngine.ParticleSystemColliderQueryMode);
        
        public get radiusScale(): number;
        public set radiusScale(value: number);
        
        public get colliderCount(): number;
        
        public AddCollider($collider: UnityEngine.Component):void;
        
        public RemoveCollider($index: number):void;
        
        public RemoveCollider($collider: UnityEngine.Component):void;
        
        public SetCollider($index: number, $collider: UnityEngine.Component):void;
        
        public GetCollider($index: number):UnityEngine.Component;
        
                    
    }
    /**
     * Script interface for the SubEmittersModule of a Particle System.
     */
    class SubEmittersModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get subEmittersCount(): number;
        
        public AddSubEmitter($subEmitter: UnityEngine.ParticleSystem, $type: UnityEngine.ParticleSystemSubEmitterType, $properties: UnityEngine.ParticleSystemSubEmitterProperties, $emitProbability: number):void;
        
        public AddSubEmitter($subEmitter: UnityEngine.ParticleSystem, $type: UnityEngine.ParticleSystemSubEmitterType, $properties: UnityEngine.ParticleSystemSubEmitterProperties):void;
        
        public RemoveSubEmitter($index: number):void;
        
        public RemoveSubEmitter($subEmitter: UnityEngine.ParticleSystem):void;
        
        public SetSubEmitterSystem($index: number, $subEmitter: UnityEngine.ParticleSystem):void;
        
        public SetSubEmitterType($index: number, $type: UnityEngine.ParticleSystemSubEmitterType):void;
        
        public SetSubEmitterProperties($index: number, $properties: UnityEngine.ParticleSystemSubEmitterProperties):void;
        
        public SetSubEmitterEmitProbability($index: number, $emitProbability: number):void;
        
        public GetSubEmitterSystem($index: number):UnityEngine.ParticleSystem;
        
        public GetSubEmitterType($index: number):UnityEngine.ParticleSystemSubEmitterType;
        
        public GetSubEmitterProperties($index: number):UnityEngine.ParticleSystemSubEmitterProperties;
        
        public GetSubEmitterEmitProbability($index: number):number;
        
                    
    }
    /**
     * Script interface for the TextureSheetAnimationModule of a Particle System.
     */
    class TextureSheetAnimationModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get mode(): UnityEngine.ParticleSystemAnimationMode;
        public set mode(value: UnityEngine.ParticleSystemAnimationMode);
        
        public get timeMode(): UnityEngine.ParticleSystemAnimationTimeMode;
        public set timeMode(value: UnityEngine.ParticleSystemAnimationTimeMode);
        
        public get fps(): number;
        public set fps(value: number);
        
        public get numTilesX(): number;
        public set numTilesX(value: number);
        
        public get numTilesY(): number;
        public set numTilesY(value: number);
        
        public get animation(): UnityEngine.ParticleSystemAnimationType;
        public set animation(value: UnityEngine.ParticleSystemAnimationType);
        
        public get rowMode(): UnityEngine.ParticleSystemAnimationRowMode;
        public set rowMode(value: UnityEngine.ParticleSystemAnimationRowMode);
        
        public get frameOverTime(): MinMaxCurve;
        public set frameOverTime(value: MinMaxCurve);
        
        public get frameOverTimeMultiplier(): number;
        public set frameOverTimeMultiplier(value: number);
        
        public get startFrame(): MinMaxCurve;
        public set startFrame(value: MinMaxCurve);
        
        public get startFrameMultiplier(): number;
        public set startFrameMultiplier(value: number);
        
        public get cycleCount(): number;
        public set cycleCount(value: number);
        
        public get rowIndex(): number;
        public set rowIndex(value: number);
        
        public get uvChannelMask(): UnityEngine_Rendering.UVChannelFlags;
        public set uvChannelMask(value: UnityEngine_Rendering.UVChannelFlags);
        
        public get spriteCount(): number;
        
        public get speedRange(): UnityEngine.Vector2;
        public set speedRange(value: UnityEngine.Vector2);
        
        public AddSprite($sprite: UnityEngine.Sprite):void;
        
        public RemoveSprite($index: number):void;
        
        public SetSprite($index: number, $sprite: UnityEngine.Sprite):void;
        
        public GetSprite($index: number):UnityEngine.Sprite;
        
                    
    }
    /**
     * Access the ParticleSystem Lights Module.
     */
    class LightsModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get ratio(): number;
        public set ratio(value: number);
        
        public get useRandomDistribution(): boolean;
        public set useRandomDistribution(value: boolean);
        
        public get light(): UnityEngine.Light;
        public set light(value: UnityEngine.Light);
        
        public get useParticleColor(): boolean;
        public set useParticleColor(value: boolean);
        
        public get sizeAffectsRange(): boolean;
        public set sizeAffectsRange(value: boolean);
        
        public get alphaAffectsIntensity(): boolean;
        public set alphaAffectsIntensity(value: boolean);
        
        public get range(): MinMaxCurve;
        public set range(value: MinMaxCurve);
        
        public get rangeMultiplier(): number;
        public set rangeMultiplier(value: number);
        
        public get intensity(): MinMaxCurve;
        public set intensity(value: MinMaxCurve);
        
        public get intensityMultiplier(): number;
        public set intensityMultiplier(value: number);
        
        public get maxLights(): number;
        public set maxLights(value: number);
        
                    
    }
    /**
     * Script interface for the TrailsModule of a Particle System
     */
    class TrailModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public get mode(): UnityEngine.ParticleSystemTrailMode;
        public set mode(value: UnityEngine.ParticleSystemTrailMode);
        
        public get ratio(): number;
        public set ratio(value: number);
        
        public get lifetime(): MinMaxCurve;
        public set lifetime(value: MinMaxCurve);
        
        public get lifetimeMultiplier(): number;
        public set lifetimeMultiplier(value: number);
        
        public get minVertexDistance(): number;
        public set minVertexDistance(value: number);
        
        public get textureMode(): UnityEngine.ParticleSystemTrailTextureMode;
        public set textureMode(value: UnityEngine.ParticleSystemTrailTextureMode);
        
        public get worldSpace(): boolean;
        public set worldSpace(value: boolean);
        
        public get dieWithParticles(): boolean;
        public set dieWithParticles(value: boolean);
        
        public get sizeAffectsWidth(): boolean;
        public set sizeAffectsWidth(value: boolean);
        
        public get sizeAffectsLifetime(): boolean;
        public set sizeAffectsLifetime(value: boolean);
        
        public get inheritParticleColor(): boolean;
        public set inheritParticleColor(value: boolean);
        
        public get colorOverLifetime(): MinMaxGradient;
        public set colorOverLifetime(value: MinMaxGradient);
        
        public get widthOverTrail(): MinMaxCurve;
        public set widthOverTrail(value: MinMaxCurve);
        
        public get widthOverTrailMultiplier(): number;
        public set widthOverTrailMultiplier(value: number);
        
        public get colorOverTrail(): MinMaxGradient;
        public set colorOverTrail(value: MinMaxGradient);
        
        public get generateLightingData(): boolean;
        public set generateLightingData(value: boolean);
        
        public get ribbonCount(): number;
        public set ribbonCount(value: number);
        
        public get shadowBias(): number;
        public set shadowBias(value: number);
        
        public get splitSubEmitterRibbons(): boolean;
        public set splitSubEmitterRibbons(value: boolean);
        
        public get attachRibbonsToTransform(): boolean;
        public set attachRibbonsToTransform(value: boolean);
        
                    
    }
    /**
     * Script interface for the CustomDataModule of a Particle System.
     */
    class CustomDataModule extends System.ValueType {
        
        public get enabled(): boolean;
        public set enabled(value: boolean);
        
        public SetMode($stream: UnityEngine.ParticleSystemCustomData, $mode: UnityEngine.ParticleSystemCustomDataMode):void;
        
        public GetMode($stream: UnityEngine.ParticleSystemCustomData):UnityEngine.ParticleSystemCustomDataMode;
        
        public SetVectorComponentCount($stream: UnityEngine.ParticleSystemCustomData, $count: number):void;
        
        public GetVectorComponentCount($stream: UnityEngine.ParticleSystemCustomData):number;
        
        public SetVector($stream: UnityEngine.ParticleSystemCustomData, $component: number, $curve: MinMaxCurve):void;
        
        public GetVector($stream: UnityEngine.ParticleSystemCustomData, $component: number):MinMaxCurve;
        
        public SetColor($stream: UnityEngine.ParticleSystemCustomData, $gradient: MinMaxGradient):void;
        
        public GetColor($stream: UnityEngine.ParticleSystemCustomData):MinMaxGradient;
        
                    
    }
    /**
     * Script interface for a Min-Max Curve.
     */
    class MinMaxCurve extends System.ValueType {
        
        public get mode(): UnityEngine.ParticleSystemCurveMode;
        public set mode(value: UnityEngine.ParticleSystemCurveMode);
        
        public get curveMultiplier(): number;
        public set curveMultiplier(value: number);
        
        public get curveMax(): UnityEngine.AnimationCurve;
        public set curveMax(value: UnityEngine.AnimationCurve);
        
        public get curveMin(): UnityEngine.AnimationCurve;
        public set curveMin(value: UnityEngine.AnimationCurve);
        
        public get constantMax(): number;
        public set constantMax(value: number);
        
        public get constantMin(): number;
        public set constantMin(value: number);
        
        public get constant(): number;
        public set constant(value: number);
        
        public get curve(): UnityEngine.AnimationCurve;
        public set curve(value: UnityEngine.AnimationCurve);
        
        public constructor($constant: number);
        
        public constructor($multiplier: number, $curve: UnityEngine.AnimationCurve);
        
        public constructor($multiplier: number, $min: UnityEngine.AnimationCurve, $max: UnityEngine.AnimationCurve);
        
        public constructor($min: number, $max: number);
        
        public Evaluate($time: number):number;
        
        public Evaluate($time: number, $lerpFactor: number):number;
        
        public static op_Implicit($constant: number):MinMaxCurve;
        
                    
    }
    /**
     * MinMaxGradient contains two Gradients, and returns a Color based on ParticleSystem.MinMaxGradient.mode. Depending on the mode, the Color returned may be randomized.
     * Gradients are edited via the ParticleSystem Inspector once a ParticleSystemGradientMode requiring them has been selected. Some modes do not require gradients, only colors.
     */
    class MinMaxGradient extends System.ValueType {
        
        public get mode(): UnityEngine.ParticleSystemGradientMode;
        public set mode(value: UnityEngine.ParticleSystemGradientMode);
        
        public get gradientMax(): UnityEngine.Gradient;
        public set gradientMax(value: UnityEngine.Gradient);
        
        public get gradientMin(): UnityEngine.Gradient;
        public set gradientMin(value: UnityEngine.Gradient);
        
        public get colorMax(): UnityEngine.Color;
        public set colorMax(value: UnityEngine.Color);
        
        public get colorMin(): UnityEngine.Color;
        public set colorMin(value: UnityEngine.Color);
        
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        
        public get gradient(): UnityEngine.Gradient;
        public set gradient(value: UnityEngine.Gradient);
        
        public constructor($color: UnityEngine.Color);
        
        public constructor($gradient: UnityEngine.Gradient);
        
        public constructor($min: UnityEngine.Color, $max: UnityEngine.Color);
        
        public constructor($min: UnityEngine.Gradient, $max: UnityEngine.Gradient);
        
        public Evaluate($time: number):UnityEngine.Color;
        
        public Evaluate($time: number, $lerpFactor: number):UnityEngine.Color;
        
        public static op_Implicit($color: UnityEngine.Color):MinMaxGradient;
        
        public static op_Implicit($gradient: UnityEngine.Gradient):MinMaxGradient;
        
                    
    }
    /**
     * Script interface for a Burst.
     */
    class Burst extends System.ValueType {
        
        public get time(): number;
        public set time(value: number);
        
        public get count(): MinMaxCurve;
        public set count(value: MinMaxCurve);
        
        public get minCount(): number;
        public set minCount(value: number);
        
        public get maxCount(): number;
        public set maxCount(value: number);
        
        public get cycleCount(): number;
        public set cycleCount(value: number);
        
        public get repeatInterval(): number;
        public set repeatInterval(value: number);
        
        public get probability(): number;
        public set probability(value: number);
        
        public constructor($_time: number, $_count: number);
        
        public constructor($_time: number, $_minCount: number, $_maxCount: number);
        
        public constructor($_time: number, $_minCount: number, $_maxCount: number, $_cycleCount: number, $_repeatInterval: number);
        
        public constructor($_time: number, $_count: MinMaxCurve);
        
        public constructor($_time: number, $_count: MinMaxCurve, $_cycleCount: number, $_repeatInterval: number);
        
                    
    }
    /**
     * Script interface for particle Collider data.
     */
    class ColliderData extends System.ValueType {
        
        public GetColliderCount($particleIndex: number):number;
        
        public GetCollider($particleIndex: number, $colliderIndex: number):UnityEngine.Component;
        
                    
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
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Rendering' {

    import * as System from 'System';
        
    /**
     * A flag representing each UV channel.
     */
    enum UVChannelFlags { UV0 = 1, UV1 = 2, UV2 = 4, UV3 = 8 }
    
}
declare module 'UnityEngine.ParticleSystemJobs' {

    import * as System from 'System';
    import * as Unity_Collections from 'Unity.Collections';
    import * as Unity_Jobs from 'Unity.Jobs';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Inherit from this interface to implement a Particle System job.
     */
    interface IJobParticleSystem {
        /**
         * Implement this method to access and modify particle properties.
         * @param jobData Contains the particle properties.
         */
        Execute($jobData: ParticleSystemJobData):void;
        
                    
    }
    /**
     * This struct specifies all the per-particle data.
     */
    class ParticleSystemJobData extends System.ValueType {
        /**
         * Specifies the number of particles alive in the Particle System.
         */
        public get count(): number;
        /**
         * The position of each particle.
         */
        public get positions(): ParticleSystemNativeArray3;
        /**
         * The velocity of each particle.
         */
        public get velocities(): ParticleSystemNativeArray3;
        /**
         * Specifies an axis of rotation for each particles, in radians.
         */
        public get axisOfRotations(): ParticleSystemNativeArray3;
        /**
         * The rotation of each particle.
         */
        public get rotations(): ParticleSystemNativeArray3;
        /**
         * The angular velocity of each particle.
         */
        public get rotationalSpeeds(): ParticleSystemNativeArray3;
        /**
         * The size of each particle.
         */
        public get sizes(): ParticleSystemNativeArray3;
        /**
         * The initial color of each particle.
         */
        public get startColors(): Unity_Collections.NativeArray$1<UnityEngine.Color32>;
        /**
         * Specifies how long each particle has been alive.
         */
        public get aliveTimePercent(): Unity_Collections.NativeArray$1<number>;
        /**
         * The lifetime of each particle, stored as 1.0f / lifetime.
         */
        public get inverseStartLifetimes(): Unity_Collections.NativeArray$1<number>;
        /**
         * The random seed assigned to each particle.
         */
        public get randomSeeds(): Unity_Collections.NativeArray$1<number>;
        /**
         * This array contains the custom data values when you use a CustomDataModule, or when you call SetCustomParticleData.
         */
        public get customData1(): ParticleSystemNativeArray4;
        /**
         * This array contains the custom data values when you use a CustomDataModule, or when you call SetCustomParticleData.
         */
        public get customData2(): ParticleSystemNativeArray4;
        /**
         * Specifies a mesh index for each particle.
         */
        public get meshIndices(): Unity_Collections.NativeArray$1<number>;
        
                    
    }
    /**
     * Inherit from this interface to implement a Particle System job.
     */
    interface IJobParticleSystemParallelFor {
        /**
         * Implement this method to access and modify particle properties.
         * @param jobData Contains the particle properties.
         * @param index The index of the current particle.
         */
        Execute($jobData: ParticleSystemJobData, $index: number):void;
        
                    
    }
    /**
     * Inherit from this interface to implement a Particle System job.
     */
    interface IJobParticleSystemParallelForBatch {
        /**
         * Implement this method to access and modify particle properties.
         * @param jobData Contains the particle properties.
         * @param startIndex The first particle index that this job should process.
         * @param count The number of particles that this job should process.
         */
        Execute($jobData: ParticleSystemJobData, $startIndex: number, $count: number):void;
        
                    
    }
    
    class IParticleSystemJobExtensions extends System.Object {
        
        public static Schedule<T>($jobData: T, $ps: UnityEngine.ParticleSystem, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
        public static Schedule<T>($jobData: T, $ps: UnityEngine.ParticleSystem, $minIndicesPerJobCount: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
        public static ScheduleBatch<T>($jobData: T, $ps: UnityEngine.ParticleSystem, $innerLoopBatchCount: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
                    
    }
    /**
     * A container to hold x, y, and z-axis data for particles.
     */
    class ParticleSystemNativeArray3 extends System.ValueType {
        /**
         * The x-axis value for each particle.
         */
        public x: Unity_Collections.NativeArray$1<number>;
        /**
         * The y-axis value for each particle.
         */
        public y: Unity_Collections.NativeArray$1<number>;
        /**
         * The z-axis value for each particle.
         */
        public z: Unity_Collections.NativeArray$1<number>;
        
        public get_Item($index: number):UnityEngine.Vector3;
        
        public set_Item($index: number, $value: UnityEngine.Vector3):void;
        
                    
    }
    /**
     * A container to hold 4 arrays of data for particles.
     */
    class ParticleSystemNativeArray4 extends System.ValueType {
        /**
         * The x-axis value for each particle.
         */
        public x: Unity_Collections.NativeArray$1<number>;
        /**
         * The y-axis value for each particle.
         */
        public y: Unity_Collections.NativeArray$1<number>;
        /**
         * The z-axis value for each particle.
         */
        public z: Unity_Collections.NativeArray$1<number>;
        /**
         * The w-axis value for each particle.
         */
        public w: Unity_Collections.NativeArray$1<number>;
        
        public get_Item($index: number):UnityEngine.Vector4;
        
        public set_Item($index: number, $value: UnityEngine.Vector4):void;
        
                    
    }
    
    interface T {
        /** @extension UnityEngine.ParticleSystemJobs.IParticleSystemJobExtensions */
        Schedule<T>($ps: UnityEngine.ParticleSystem, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        /** @extension UnityEngine.ParticleSystemJobs.IParticleSystemJobExtensions */
        Schedule<T>($ps: UnityEngine.ParticleSystem, $minIndicesPerJobCount: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        /** @extension UnityEngine.ParticleSystemJobs.IParticleSystemJobExtensions */
        ScheduleBatch<T>($ps: UnityEngine.ParticleSystem, $innerLoopBatchCount: number, $dependsOn?: Unity_Jobs.JobHandle):Unity_Jobs.JobHandle;
        
                    
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

