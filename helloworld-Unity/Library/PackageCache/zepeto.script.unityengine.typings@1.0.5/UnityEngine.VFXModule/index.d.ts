//# signature=UnityEngine.VFXModule#708c45c2de31421b6a108393e58b9397#0.0.4
// @ts-nocheck
declare module 'UnityEngine.VFX' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * This enumeration describes Camera buffer types.
     */
    enum VFXCameraBufferTypes { None = 0, Depth = 1, Color = 2, Normal = 4 }
    /**
     * This class handles the properties that you transmit to a system using a VFX.VisualEffect.SendEvent.
     */
    class VFXEventAttribute extends System.Object {
        /**
         * The copy constructor for the VFXEventAttribute class.
         * @param original The source VFXEventAttribute to copy from.
         */
        public constructor($original: VFXEventAttribute);
        
        public Dispose():void;
        /**
         * Use this method to check if the VFXEventAttribute stores a bool with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasBool($nameID: number):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasInt($nameID: number):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a unsigned integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasUint($nameID: number):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a float with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasFloat($nameID: number):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Vector2 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector2($nameID: number):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Vector3 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector3($nameID: number):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Vector4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector4($nameID: number):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Matrix4x4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasMatrix4x4($nameID: number):boolean;
        /**
         * Use this method to set the value of a bool with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param b The new bool value.
         */
        public SetBool($nameID: number, $b: boolean):void;
        /**
         * Use this method to set the value of an integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new integer value.
         */
        public SetInt($nameID: number, $i: number):void;
        /**
         * Use this method to set the value of an unsigned integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new unsigned integer value.
         */
        public SetUint($nameID: number, $i: number):void;
        /**
         * Use this method to set the value of a float with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param f The new float value.
         */
        public SetFloat($nameID: number, $f: number):void;
        /**
         * Use this method to set the value of a Vector2 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector2 value.
         */
        public SetVector2($nameID: number, $v: UnityEngine.Vector2):void;
        /**
         * Use this method to set the value of a Vector3 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector3 value.
         */
        public SetVector3($nameID: number, $v: UnityEngine.Vector3):void;
        /**
         * Use this method to set the value of a Vector4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector4 value.
         */
        public SetVector4($nameID: number, $v: UnityEngine.Vector4):void;
        /**
         * Use this method to set the value of a Matrix4x4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Matrix4x4 value.
         */
        public SetMatrix4x4($nameID: number, $v: UnityEngine.Matrix4x4):void;
        /**
         * Use this method to get the value of a named bool property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the bool you specify. Returns false if VFX.VFXEventAttribute.HasBool returns false.
         */
        public GetBool($nameID: number):boolean;
        /**
         * Use this method to get the value of a named integer property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the integer you specify. Returns 0 if VFX.VFXEventAttribute.HasInt returns false.
         */
        public GetInt($nameID: number):number;
        /**
         * Use this method to get the value of a named unsigned integer property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the int you specify. Returns 0 if VFX.VFXEventAttribute.HasUint returns false.
         */
        public GetUint($nameID: number):number;
        /**
         * Use this method to get the value of a named float property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the float you specify. Returns 0.0f if VFX.VFXEventAttribute.HasFloat returns false.
         */
        public GetFloat($nameID: number):number;
        /**
         * Use this method to get the value of a named Vector2 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector2 you specify. Returns Vector2.zero if VFX.VFXEventAttribute.HasVector2 returns false.
         */
        public GetVector2($nameID: number):UnityEngine.Vector2;
        /**
         * Use this method to get the value of a named Vector3 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector3 you specify. Returns Vector3.zero if VFX.VFXEventAttribute.HasVector3 returns false.
         */
        public GetVector3($nameID: number):UnityEngine.Vector3;
        /**
         * Use this method to get the value of a named Vector4 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector4 you specify. Returns Vector4.zero if VFX.VFXEventAttribute.HasVector4 returns false.
         */
        public GetVector4($nameID: number):UnityEngine.Vector4;
        /**
         * Use this method to get the value of a named Matrix4x4 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Matrix4x4 you specify. Returns Matrix4x4.identity if VFX.VFXEventAttribute.HasMatrix4x4 returns false.
         */
        public GetMatrix4x4($nameID: number):UnityEngine.Matrix4x4;
        /**
         * Use this method to check if the VFXEventAttribute stores a bool with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasBool($name: string):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasInt($name: string):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a unsigned integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasUint($name: string):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a float with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasFloat($name: string):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Vector2 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector2($name: string):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Vector3 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector3($name: string):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Vector4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector4($name: string):boolean;
        /**
         * Use this method to check if the VFXEventAttribute stores a Matrix4x4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasMatrix4x4($name: string):boolean;
        /**
         * Use this method to set the value of a bool with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param b The new bool value.
         */
        public SetBool($name: string, $b: boolean):void;
        /**
         * Use this method to set the value of an integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new integer value.
         */
        public SetInt($name: string, $i: number):void;
        /**
         * Use this method to set the value of an unsigned integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new unsigned integer value.
         */
        public SetUint($name: string, $i: number):void;
        /**
         * Use this method to set the value of a float with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param f The new float value.
         */
        public SetFloat($name: string, $f: number):void;
        /**
         * Use this method to set the value of a Vector2 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector2 value.
         */
        public SetVector2($name: string, $v: UnityEngine.Vector2):void;
        /**
         * Use this method to set the value of a Vector3 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector3 value.
         */
        public SetVector3($name: string, $v: UnityEngine.Vector3):void;
        /**
         * Use this method to set the value of a Vector4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector4 value.
         */
        public SetVector4($name: string, $v: UnityEngine.Vector4):void;
        /**
         * Use this method to set the value of a Matrix4x4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Matrix4x4 value.
         */
        public SetMatrix4x4($name: string, $v: UnityEngine.Matrix4x4):void;
        /**
         * Use this method to get the value of a named bool property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the bool you specify. Returns false if VFX.VFXEventAttribute.HasBool returns false.
         */
        public GetBool($name: string):boolean;
        /**
         * Use this method to get the value of a named integer property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the integer you specify. Returns 0 if VFX.VFXEventAttribute.HasInt returns false.
         */
        public GetInt($name: string):number;
        /**
         * Use this method to get the value of a named unsigned integer property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the int you specify. Returns 0 if VFX.VFXEventAttribute.HasUint returns false.
         */
        public GetUint($name: string):number;
        /**
         * Use this method to get the value of a named float property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the float you specify. Returns 0.0f if VFX.VFXEventAttribute.HasFloat returns false.
         */
        public GetFloat($name: string):number;
        /**
         * Use this method to get the value of a named Vector2 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector2 you specify. Returns Vector2.zero if VFX.VFXEventAttribute.HasVector2 returns false.
         */
        public GetVector2($name: string):UnityEngine.Vector2;
        /**
         * Use this method to get the value of a named Vector3 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector3 you specify. Returns Vector3.zero if VFX.VFXEventAttribute.HasVector3 returns false.
         */
        public GetVector3($name: string):UnityEngine.Vector3;
        /**
         * Use this method to get the value of a named Vector4 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector4 you specify. Returns Vector4.zero if VFX.VFXEventAttribute.HasVector4 returns false.
         */
        public GetVector4($name: string):UnityEngine.Vector4;
        /**
         * Use this method to get the value of a named Matrix4x4 property from the VFXEventAttribute.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Matrix4x4 you specify. Returns Matrix4x4.identity if VFX.VFXEventAttribute.HasMatrix4x4 returns false.
         */
        public GetMatrix4x4($name: string):UnityEngine.Matrix4x4;
        /**
         * Copies the values from a VFXEventAttribute to the one you call this function from.
         * @param eventAttibute The source event attribute.
         */
        public CopyValuesFrom($eventAttibute: VFXEventAttribute):void;
        
                    
    }
    /**
     * This class is a wrapper to the set of expression values.
     */
    class VFXExpressionValues extends System.Object {
        /**
         * Returns a boolean that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetBool($nameID: number):boolean;
        /**
         * Returns an integer that corresponds to the bound named expression. IF this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetInt($nameID: number):number;
        /**
         * Returns an unsigned integer that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetUInt($nameID: number):number;
        /**
         * Returns a float that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetFloat($nameID: number):number;
        /**
         * Returns a Vector2 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetVector2($nameID: number):UnityEngine.Vector2;
        /**
         * Returns a Vector3 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetVector3($nameID: number):UnityEngine.Vector3;
        /**
         * Returns a Vector4 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetVector4($nameID: number):UnityEngine.Vector4;
        /**
         * Returns a Matrix4 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetMatrix4x4($nameID: number):UnityEngine.Matrix4x4;
        /**
         * Returns a texture that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetTexture($nameID: number):UnityEngine.Texture;
        /**
         * Returns a mesh that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetMesh($nameID: number):UnityEngine.Mesh;
        /**
         * Returns a an animation curve that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetAnimationCurve($nameID: number):UnityEngine.AnimationCurve;
        /**
         * Returns a gradient that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetGradient($nameID: number):UnityEngine.Gradient;
        /**
         * Returns a boolean that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetBool($name: string):boolean;
        /**
         * Returns an integer that corresponds to the bound named expression. IF this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetInt($name: string):number;
        /**
         * Returns an unsigned integer that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetUInt($name: string):number;
        /**
         * Returns a float that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetFloat($name: string):number;
        /**
         * Returns a Vector2 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetVector2($name: string):UnityEngine.Vector2;
        /**
         * Returns a Vector3 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetVector3($name: string):UnityEngine.Vector3;
        /**
         * Returns a Vector4 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetVector4($name: string):UnityEngine.Vector4;
        /**
         * Returns a Matrix4 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetMatrix4x4($name: string):UnityEngine.Matrix4x4;
        /**
         * Returns a texture that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetTexture($name: string):UnityEngine.Texture;
        /**
         * Returns a an animation curve that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetAnimationCurve($name: string):UnityEngine.AnimationCurve;
        /**
         * Returns a gradient that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetGradient($name: string):UnityEngine.Gradient;
        /**
         * Returns a mesh that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.
         * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
         * @param name The name of the property.
         */
        public GetMesh($name: string):UnityEngine.Mesh;
        
                    
    }
    /**
     * Use this class to set a number of properties that control VisualEffect behavior within your Unity Project.
     */
    class VFXManager extends System.Object {
        /**
         * The fixed interval in which the frame rate updates. The tick rate is in seconds.
         */
        public static get fixedTimeStep(): number;
        public static set fixedTimeStep(value: number);
        /**
         * The maximum allowed delta time for an update interval. This limit affects fixedDeltaTime and deltaTime. The tick rate is in seconds.
         */
        public static get maxDeltaTime(): number;
        public static set maxDeltaTime(value: number);
        
        public static GetComponents():VisualEffect[];
        /**
         * Use this method to prepare and process per-Camera VFX commands for this frame.
         * @param cam The Camera to prepare for processing VFX commands.
         */
        public static ProcessCamera($cam: UnityEngine.Camera):void;
        /**
         * Use this method to prepare per-Camera VFX commands for this frame.
         * @param cam The Camera to prepare for processing VFX commands.
         */
        public static PrepareCamera($cam: UnityEngine.Camera):void;
        /**
         * Use this method to process per-Camera VFX commands for the current frame.
         * @param cam The Camera to process the VFX commands for.
         * @param cmd The CommandBuffer to push commands to (can be null).
         */
        public static ProcessCameraCommand($cam: UnityEngine.Camera, $cmd: UnityEngine_Rendering.CommandBuffer):void;
        /**
         * Queries which buffers the VFX Manager needs for the given Camera.
         * @param cam The Camera for which to query needed buffers.
         * @returns A list of all needed buffer flags.
         */
        public static IsCameraBufferNeeded($cam: UnityEngine.Camera):VFXCameraBufferTypes;
        /**
         * Use this method to set the buffer of a given type for this Camera. This allows the VFX Manager to use the buffer.
         * @param cam The Camera to set the buffer for.
         * @param type The type of buffer to set.
         * @param buffer The buffer to set.
         * @param x X offset of the viewport in the buffer.
         * @param y Y offset of the viewport in the buffer.
         * @param width Width of the viewport in the buffer.
         * @param height Height of the viewport in the buffer.
         */
        public static SetCameraBuffer($cam: UnityEngine.Camera, $type: VFXCameraBufferTypes, $buffer: UnityEngine.Texture, $x: number, $y: number, $width: number, $height: number):void;
        
                    
    }
    /**
     * The visual effect class that references an VFX.VisualEffectAsset instance within the Scene.
     */
    class VisualEffect extends UnityEngine.Behaviour {
        /**
         * Output event are reported trough this callback.
         */
        public outputEventReceived: System.Action$1<VFXOutputEventArgs>;
        /**
         * Use this property to set the pause state of the visual effect.
         */
        public get pause(): boolean;
        public set pause(value: boolean);
        /**
         * A multiplier that Unity applies to the delta time when it updates the VisualEffect. The default value is 1.0f.
         */
        public get playRate(): number;
        public set playRate(value: number);
        /**
         * The initial seed used for internal random number generator.
         */
        public get startSeed(): number;
        public set startSeed(value: number);
        /**
         * This property controls whether the visual effect generates a new seed for the random number generator with each call to VFX.VisualEffect.Play function.
         */
        public get resetSeedOnPlay(): boolean;
        public set resetSeedOnPlay(value: boolean);
        /**
         * The default event name ID. To retrieve this value, use the Shader.PropertyID after VisualEffect has awakened or after you've invoked VFX.VisualEffect.Reinit.
         */
        public get initialEventID(): number;
        public set initialEventID(value: number);
        /**
         * The default event name. Unity calls this event when the VisualEffect awakes, or when you call VisualEffect.Reinit.
         */
        public get initialEventName(): string;
        public set initialEventName(value: string);
        /**
         * Use this property to determine if this visual effect is not visible from any Camera. (Read Only)
         */
        public get culled(): boolean;
        /**
         * The VisualEffectAsset that the VisualEffect uses.
         */
        public get visualEffectAsset(): VisualEffectAsset;
        public set visualEffectAsset(value: VisualEffectAsset);
        /**
         * Returns the sum of all alive particles within the visual effect.
         */
        public get aliveParticleCount(): number;
        /**
         * The VisualEffect constructor.
         */
        public constructor();
        /**
         * Use this method to create a new VFXEventAttribute.
         */
        public CreateVFXEventAttribute():VFXEventAttribute;
        /**
         * Use this method to send a custom named event.
         * @param eventName The name of the event.
         * @param eventNameID The ID of the event. This is the same ID that Shader.PropertyToID returns.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public SendEvent($eventNameID: number, $eventAttribute: VFXEventAttribute):void;
        /**
         * Use this method to send a custom named event.
         * @param eventName The name of the event.
         * @param eventNameID The ID of the event. This is the same ID that Shader.PropertyToID returns.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public SendEvent($eventName: string, $eventAttribute: VFXEventAttribute):void;
        /**
         * Use this method to send a custom named event.
         * @param eventName The name of the event.
         * @param eventNameID The ID of the event. This is the same ID that Shader.PropertyToID returns.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public SendEvent($eventNameID: number):void;
        /**
         * Use this method to send a custom named event.
         * @param eventName The name of the event.
         * @param eventNameID The ID of the event. This is the same ID that Shader.PropertyToID returns.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public SendEvent($eventName: string):void;
        /**
         * Use this method to send a play event to every Spawn system.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public Play($eventAttribute: VFXEventAttribute):void;
        /**
         * Use this method to send a play event to every Spawn system.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public Play():void;
        /**
         * Use this method to send a stop event to all Spawn systems.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public Stop($eventAttribute: VFXEventAttribute):void;
        /**
         * Use this method to send a stop event to all Spawn systems.
         * @param eventAttribute Can be null or a VFXEventAttribute. To create a VFXEventAttribute, use VFX.VisualEffect.CreateVFXEventAttribute.
         */
        public Stop():void;
        /**
         * Reintialize visual effect.
         */
        public Reinit():void;
        /**
         * If VFX.VisualEffect._pause is true, this method processes the next visual effect update for exactly one frame with the current delta time.
         */
        public AdvanceOneFrame():void;
        /**
         * Use this method to set the overridden state to false. This restores the default value that the Visual Effect Asset specifies.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public ResetOverride($nameID: number):void;
        /**
         * Gets expected texture dimension for a named exposed texture.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public GetTextureDimension($nameID: number):UnityEngine_Rendering.TextureDimension;
        /**
         * Use this method to check if the visual effect can override a bool with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasBool($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override an integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasInt($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override an unsigned integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasUInt($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a float with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasFloat($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a Vector2 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector2($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a Vector3 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector3($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a Vector4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector4($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a Matrix4x4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasMatrix4x4($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a texture with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasTexture($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override an animation curve with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasAnimationCurve($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a gradient with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasGradient($nameID: number):boolean;
        /**
         * Use this method to check if the visual effect can override a Mesh with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasMesh($nameID: number):boolean;
        /**
         * The new bool value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param b The new boolean value.
         */
        public SetBool($nameID: number, $b: boolean):void;
        /**
         * The new integer value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new integer value.
         */
        public SetInt($nameID: number, $i: number):void;
        /**
         * The new unsigned integer value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new unsigned integer value.
         */
        public SetUInt($nameID: number, $i: number):void;
        /**
         * The new float value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param f The new float value.
         */
        public SetFloat($nameID: number, $f: number):void;
        /**
         * The new Vector2 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector2 value.
         */
        public SetVector2($nameID: number, $v: UnityEngine.Vector2):void;
        /**
         * The new Vector3 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector3 value.
         */
        public SetVector3($nameID: number, $v: UnityEngine.Vector3):void;
        /**
         * The new Vector4 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector4 value.
         */
        public SetVector4($nameID: number, $v: UnityEngine.Vector4):void;
        /**
         * The new Matrix4x4 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Matrix4x4 value.
         */
        public SetMatrix4x4($nameID: number, $v: UnityEngine.Matrix4x4):void;
        /**
         * The new texture value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param t The new texture value.
         */
        public SetTexture($nameID: number, $t: UnityEngine.Texture):void;
        /**
         * The new animation curve value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param c The new animation curve.
         * @param name The name of the property.
         */
        public SetAnimationCurve($nameID: number, $c: UnityEngine.AnimationCurve):void;
        /**
         * The new gradient value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param g The new gradient value.
         */
        public SetGradient($nameID: number, $g: UnityEngine.Gradient):void;
        /**
         * The new mesh value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param m The new mesh value.
         */
        public SetMesh($nameID: number, $m: UnityEngine.Mesh):void;
        /**
         * Gets the value of a named bool property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the bool you specify. Returns false if VFX.VisualEffect.HasBool returns false.
         */
        public GetBool($nameID: number):boolean;
        /**
         * Get a named exposed integer.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the integer you specify. Returns 0 if VFX.VisualEffect.HasInt returns false.
         */
        public GetInt($nameID: number):number;
        /**
         * Gets the value of a named unsigned integer property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the unsigned integer you specify. Returns 0 if VFX.VisualEffect.HasUInt returns false.
         */
        public GetUInt($nameID: number):number;
        /**
         * Gets the value of a named float property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the float you specify. Returns 0.0f if VFX.VisualEffect.HasFloat returns false.
         */
        public GetFloat($nameID: number):number;
        /**
         * Gets the value of a named Vector2 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector2 you specify. Returns Vector2.zero if VFX.VisualEffect.HasVector2 returns false.
         */
        public GetVector2($nameID: number):UnityEngine.Vector2;
        /**
         * Gets the value of a named Vector3 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector3 you specify. Returns Vector3.zero if VFX.VisualEffect.HasVector3 returns false.
         */
        public GetVector3($nameID: number):UnityEngine.Vector3;
        /**
         * Gets the value of a named Vector4 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector4 you specify. Returns Vector4.zero if VFX.VisualEffect.HasVector4 returns false.
         */
        public GetVector4($nameID: number):UnityEngine.Vector4;
        /**
         * Gets the value of a named Matrix4x4 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Matrix4x4 you specify. Returns Matrix4x4.identity if VFX.VisualEffect.HasMatrix4x4 returns false.
         */
        public GetMatrix4x4($nameID: number):UnityEngine.Matrix4x4;
        /**
         * Gets the value of a named texture property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the texture you specify. Returns null if VFX.VisualEffect.HasTexture returns false.
         */
        public GetTexture($nameID: number):UnityEngine.Texture;
        /**
         * Gets the value of a named mesh property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the mesh you specify. Returns null if VFX.VisualEffect.HasMesh returns false.
         */
        public GetMesh($nameID: number):UnityEngine.Mesh;
        /**
         * Gets the value of a named gradient property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the gradient you specify. Returns an empty gradient if VFX.VisualEffect.HasGradient returns false.
         */
        public GetGradient($nameID: number):UnityEngine.Gradient;
        /**
         * Gets the value of a named animation curve property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the animation curve you specify. Returns an empty animation curve if VFX.VisualEffect.HasAnimationCurve returns false.
         */
        public GetAnimationCurve($nameID: number):UnityEngine.AnimationCurve;
        /**
         * Use this function to determine if the VisualEffect has the system you pass in.
         * @param nameID The system ID. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns true if the VisualEffect has the system you pass in. Returns false otherwise.
         */
        public HasSystem($nameID: number):boolean;
        /**
         * Gets information on a particle system.
         * @param nameID The system ID. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the particle system.
         * @returns A VFXSystemInfo instance.
         */
        public GetParticleSystemInfo($nameID: number):VFXParticleSystemInfo;
        /**
         * Gets state on a spawn system.
         * @param nameID The system ID. This is the same ID that Shader.PropertyToID returns.
         * @param spawnState A modified  VFXSpawnerState instance.
         */
        public GetSpawnSystemInfo($nameID: number, $spawnState: VFXSpawnerState):void;
        /**
         * Gets state on a spawn system.
         * @param nameID The system ID. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the spawn system.
         * @returns A VFXSpawnerState instance.
         */
        public GetSpawnSystemInfo($nameID: number):VFXSpawnerState;
        
        public GetSystemNames($names: System_Collections_Generic.List$1<string>):void;
        
        public GetParticleSystemNames($names: System_Collections_Generic.List$1<string>):void;
        
        public GetOutputEventNames($names: System_Collections_Generic.List$1<string>):void;
        
        public GetSpawnSystemNames($names: System_Collections_Generic.List$1<string>):void;
        /**
         * Use this method to set the overridden state to false. This restores the default value that the Visual Effect Asset specifies.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public ResetOverride($name: string):void;
        /**
         * Use this method to check if the visual effect can override an integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasInt($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override an unsigned integer with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasUInt($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a float with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasFloat($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a Vector2 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector2($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a Vector3 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector3($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a Vector4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasVector4($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a Matrix4x4 with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasMatrix4x4($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a texture with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasTexture($name: string):boolean;
        /**
         * Gets expected texture dimension for a named exposed texture.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public GetTextureDimension($name: string):UnityEngine_Rendering.TextureDimension;
        /**
         * Use this method to check if the visual effect can override an animation curve with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasAnimationCurve($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a gradient with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasGradient($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a Mesh with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasMesh($name: string):boolean;
        /**
         * Use this method to check if the visual effect can override a bool with the name you pass in.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public HasBool($name: string):boolean;
        /**
         * The new integer value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new integer value.
         */
        public SetInt($name: string, $i: number):void;
        /**
         * The new unsigned integer value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param i The new unsigned integer value.
         */
        public SetUInt($name: string, $i: number):void;
        /**
         * The new float value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param f The new float value.
         */
        public SetFloat($name: string, $f: number):void;
        /**
         * The new Vector2 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector2 value.
         */
        public SetVector2($name: string, $v: UnityEngine.Vector2):void;
        /**
         * The new Vector3 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector3 value.
         */
        public SetVector3($name: string, $v: UnityEngine.Vector3):void;
        /**
         * The new Vector4 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Vector4 value.
         */
        public SetVector4($name: string, $v: UnityEngine.Vector4):void;
        /**
         * The new Matrix4x4 value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param v The new Matrix4x4 value.
         */
        public SetMatrix4x4($name: string, $v: UnityEngine.Matrix4x4):void;
        /**
         * The new texture value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param t The new texture value.
         */
        public SetTexture($name: string, $t: UnityEngine.Texture):void;
        /**
         * The new animation curve value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param c The new animation curve.
         * @param name The name of the property.
         */
        public SetAnimationCurve($name: string, $c: UnityEngine.AnimationCurve):void;
        /**
         * The new gradient value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param g The new gradient value.
         */
        public SetGradient($name: string, $g: UnityEngine.Gradient):void;
        /**
         * The new mesh value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param m The new mesh value.
         */
        public SetMesh($name: string, $m: UnityEngine.Mesh):void;
        /**
         * The new bool value.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @param b The new boolean value.
         */
        public SetBool($name: string, $b: boolean):void;
        /**
         * Get a named exposed integer.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the integer you specify. Returns 0 if VFX.VisualEffect.HasInt returns false.
         */
        public GetInt($name: string):number;
        /**
         * Gets the value of a named unsigned integer property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the unsigned integer you specify. Returns 0 if VFX.VisualEffect.HasUInt returns false.
         */
        public GetUInt($name: string):number;
        /**
         * Gets the value of a named float property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the float you specify. Returns 0.0f if VFX.VisualEffect.HasFloat returns false.
         */
        public GetFloat($name: string):number;
        /**
         * Gets the value of a named Vector2 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector2 you specify. Returns Vector2.zero if VFX.VisualEffect.HasVector2 returns false.
         */
        public GetVector2($name: string):UnityEngine.Vector2;
        /**
         * Gets the value of a named Vector3 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector3 you specify. Returns Vector3.zero if VFX.VisualEffect.HasVector3 returns false.
         */
        public GetVector3($name: string):UnityEngine.Vector3;
        /**
         * Gets the value of a named Vector4 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Vector4 you specify. Returns Vector4.zero if VFX.VisualEffect.HasVector4 returns false.
         */
        public GetVector4($name: string):UnityEngine.Vector4;
        /**
         * Gets the value of a named Matrix4x4 property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the Matrix4x4 you specify. Returns Matrix4x4.identity if VFX.VisualEffect.HasMatrix4x4 returns false.
         */
        public GetMatrix4x4($name: string):UnityEngine.Matrix4x4;
        /**
         * Gets the value of a named texture property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the texture you specify. Returns null if VFX.VisualEffect.HasTexture returns false.
         */
        public GetTexture($name: string):UnityEngine.Texture;
        /**
         * Gets the value of a named mesh property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the mesh you specify. Returns null if VFX.VisualEffect.HasMesh returns false.
         */
        public GetMesh($name: string):UnityEngine.Mesh;
        /**
         * Gets the value of a named bool property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the bool you specify. Returns false if VFX.VisualEffect.HasBool returns false.
         */
        public GetBool($name: string):boolean;
        /**
         * Gets the value of a named animation curve property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the animation curve you specify. Returns an empty animation curve if VFX.VisualEffect.HasAnimationCurve returns false.
         */
        public GetAnimationCurve($name: string):UnityEngine.AnimationCurve;
        /**
         * Gets the value of a named gradient property
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns The value for the gradient you specify. Returns an empty gradient if VFX.VisualEffect.HasGradient returns false.
         */
        public GetGradient($name: string):UnityEngine.Gradient;
        /**
         * Use this function to determine if the VisualEffect has the system you pass in.
         * @param nameID The system ID. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         * @returns true if the VisualEffect has the system you pass in. Returns false otherwise.
         */
        public HasSystem($name: string):boolean;
        /**
         * Gets information on a particle system.
         * @param nameID The system ID. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the particle system.
         * @returns A VFXSystemInfo instance.
         */
        public GetParticleSystemInfo($name: string):VFXParticleSystemInfo;
        /**
         * Gets state on a spawn system.
         * @param nameID The system ID. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the spawn system.
         * @returns A VFXSpawnerState instance.
         */
        public GetSpawnSystemInfo($name: string):VFXSpawnerState;
        /**
         * Use this method to fast-forward the visual effect by simulating all systems for several step counts using the specified delta time.
         * @param stepDeltaTime The delta time, in seconds, the simulation applies to each step.
         * @param stepCount Number of steps to proceed.
         */
        public Simulate($stepDeltaTime: number, $stepCount?: number):void;
        
                    
    }
    /**
     * This abstract class provides a way to implement custom spawner block in C#.
     */
    class VFXSpawnerCallbacks extends UnityEngine.ScriptableObject {
        /**
         * Unity invokes this method when a parent spawner system triggers Play.
         * @param state The spawner state.
         * @param vfxValues The values of expression (input properties for a spawner block).
         * @param vfxComponent The visual effect.
         */
        public OnPlay($state: VFXSpawnerState, $vfxValues: VFXExpressionValues, $vfxComponent: VisualEffect):void;
        /**
         * Unity invokes this method when a parent spawner system triggers Update.
         * @param state The spawner state.
         * @param vfxValues The values of expression (input properties for a spawner block).
         * @param vfxComponent The visual effect.
         */
        public OnUpdate($state: VFXSpawnerState, $vfxValues: VFXExpressionValues, $vfxComponent: VisualEffect):void;
        /**
         * Unity invokes this method when a parent spawner system triggers Stop.
         * @param state The spawner state.
         * @param vfxValues The values of expression (input properties for a spawner block).
         * @param vfxComponent The visual effect.
         */
        public OnStop($state: VFXSpawnerState, $vfxValues: VFXExpressionValues, $vfxComponent: VisualEffect):void;
        
                    
    }
    /**
     * The spawn state of a Spawn system.
     */
    class VFXSpawnerState extends System.Object {
        /**
         * The current playing state.
         */
        public get playing(): boolean;
        public set playing(value: boolean);
        /**
         * This boolean indicates if a new loop has just started.
         */
        public get newLoop(): boolean;
        /**
         * The current state of VFXSpawnerState.
         */
        public get loopState(): VFXSpawnerLoopState;
        public set loopState(value: VFXSpawnerLoopState);
        /**
         * The current Spawn count.
         */
        public get spawnCount(): number;
        public set spawnCount(value: number);
        /**
         * The current delta time.
         */
        public get deltaTime(): number;
        public set deltaTime(value: number);
        /**
         * The accumulated delta time since the last Play event.
         */
        public get totalTime(): number;
        public set totalTime(value: number);
        /**
         * The current delay time that the VFXSpawner waits for before it starts a loop.
         */
        public get delayBeforeLoop(): number;
        public set delayBeforeLoop(value: number);
        /**
         * The duration of the looping state.
         */
        public get loopDuration(): number;
        public set loopDuration(value: number);
        /**
         * The current delay time that the VFXSpawner waits for after it finishes a loop.
         */
        public get delayAfterLoop(): number;
        public set delayAfterLoop(value: number);
        /**
         * The current index of loop.
         */
        public get loopIndex(): number;
        public set loopIndex(value: number);
        /**
         * The current loop count.
         */
        public get loopCount(): number;
        public set loopCount(value: number);
        /**
         * Gets the modifiable current event attribute (Read Only).
         */
        public get vfxEventAttribute(): VFXEventAttribute;
        
        public constructor();
        
        public Dispose():void;
        
                    
    }
    /**
     * This enum describes the state of VFXSpawner.
     */
    enum VFXSpawnerLoopState { Finished = 0, DelayingBeforeLoop = 1, Looping = 2, DelayingAfterLoop = 3 }
    /**
     * This structure describes an exposed property on a VisualEffectAsset.
     */
    class VFXExposedProperty extends System.ValueType {
        /**
         * The name of the exposed property.
         */
        public name: string;
        /**
         * The type of the exposed property.
         */
        public type: System.Type;
        
                    
    }
    /**
     * This class is the base for VFX.VisualEffectAsset and VFX.VisualEffectSubgraph.
     */
    class VisualEffectObject extends UnityEngine.Object {
        
                    
    }
    /**
     * This class contains a graph of the elements needed to describe a visual effect. These include: the visual effects system, generated shaders, and compiled data.
     */
    class VisualEffectAsset extends VisualEffectObject {
        /**
         * The default name of the play event.
         */
        public static PlayEventName: string;
        /**
         * The default name of the stop event.
         */
        public static StopEventName: string;
        /**
         * The default name ID of the play event.
         */
        public static PlayEventID: number;
        /**
         * The default name ID of the stop event.
         */
        public static StopEventID: number;
        /**
         * The visual effect Asset constructor.
         */
        public constructor();
        /**
         * Gets the TextureDimension of a named exposed Texture.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public GetTextureDimension($nameID: number):UnityEngine_Rendering.TextureDimension;
        
        public GetExposedProperties($exposedProperties: System_Collections_Generic.List$1<VFXExposedProperty>):void;
        
        public GetEvents($names: System_Collections_Generic.List$1<string>):void;
        /**
         * Gets the TextureDimension of a named exposed Texture.
         * @param nameID The ID of the property. This is the same ID that Shader.PropertyToID returns.
         * @param name The name of the property.
         */
        public GetTextureDimension($name: string):UnityEngine_Rendering.TextureDimension;
        
                    
    }
    /**
     * This struct holds information about an output event.
     */
    class VFXOutputEventArgs extends System.ValueType {
        /**
         * Stores the nameId of the source output event context that triggered this event.
         */
        public get nameId(): number;
        /**
         * Stores the current event attribute.
         */
        public get eventAttribute(): VFXEventAttribute;
        
        public constructor($nameId: number, $eventAttribute: VFXEventAttribute);
        
                    
    }
    /**
     * This structure provides information data on a particle system.
     */
    class VFXParticleSystemInfo extends System.ValueType {
        /**
         * Number of alive particles within the particle system, the value is lower than [[VFXParticleSystemInfo._capacity].
         */
        public aliveCount: number;
        /**
         * The capacity (maximum VFXParticleSystemInfo._aliveCount) of the particle system.
         */
        public capacity: number;
        /**
         * The sleep state of the particle system.
         */
        public sleeping: boolean;
        /**
         * The rendering bound of this particle system.
         */
        public bounds: UnityEngine.Bounds;
        
        public constructor($aliveCount: number, $capacity: number, $sleeping: boolean, $bounds: UnityEngine.Bounds);
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * A standard 4x4 transformation matrix.
     */
    interface Matrix4x4 extends System.ValueType {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * A class that allows you to create or modify meshes.
     */
    interface Mesh extends Object {
        
                    
    }
    /**
     * Store a collection of Keyframes that can be evaluated over time.
     */
    interface AnimationCurve extends System.Object {
        
                    
    }
    /**
     * Gradient used for animating colors.
     */
    interface Gradient extends System.Object {
        
                    
    }
    /**
     * A Camera is a device through which the player views the world.
     */
    interface Camera extends Behaviour {
        
                    
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
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.Rendering' {

    import * as System from 'System';
        
    /**
     * List of graphics commands to execute.
     */
    interface CommandBuffer extends System.Object {
        
                    
    }
    /**
     * Texture "dimension" (type).
     */
    enum TextureDimension { Unknown = -1, None = 0, Any = 1, Tex2D = 2, Tex3D = 3, Cube = 4, Tex2DArray = 5, CubeArray = 6 }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
}

