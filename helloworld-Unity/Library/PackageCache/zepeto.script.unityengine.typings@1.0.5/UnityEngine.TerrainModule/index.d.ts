//# signature=UnityEngine.TerrainModule#0e1793a31ff49d353c0156063f58aca6#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System from 'System';
    import * as UnityEngine_Rendering from 'UnityEngine.Rendering';
    import * as UnityEngine_Experimental_Rendering from 'UnityEngine.Experimental.Rendering';
        
    /**
     * The Terrain component renders the terrain.
     */
    class Terrain extends Behaviour {
        /**
         * The Terrain Data that stores heightmaps, terrain textures, detail meshes and trees.
         */
        public get terrainData(): TerrainData;
        public set terrainData(value: TerrainData);
        /**
         * The maximum distance at which trees are rendered.
         */
        public get treeDistance(): number;
        public set treeDistance(value: number);
        /**
         * Distance from the camera where trees will be rendered as billboards only.
         */
        public get treeBillboardDistance(): number;
        public set treeBillboardDistance(value: number);
        /**
         * Total distance delta that trees will use to transition from billboard orientation to mesh orientation.
         */
        public get treeCrossFadeLength(): number;
        public set treeCrossFadeLength(value: number);
        /**
         * Maximum number of trees rendered at full LOD.
         */
        public get treeMaximumFullLODCount(): number;
        public set treeMaximumFullLODCount(value: number);
        /**
         * Detail objects will be displayed up to this distance.
         */
        public get detailObjectDistance(): number;
        public set detailObjectDistance(value: number);
        /**
         * Density of detail objects.
         */
        public get detailObjectDensity(): number;
        public set detailObjectDensity(value: number);
        /**
         * An approximation of how many pixels the terrain will pop in the worst case when switching lod.
         */
        public get heightmapPixelError(): number;
        public set heightmapPixelError(value: number);
        /**
         * Lets you essentially lower the heightmap resolution used for rendering.
         */
        public get heightmapMaximumLOD(): number;
        public set heightmapMaximumLOD(value: number);
        /**
         * Heightmap patches beyond basemap distance will use a precomputed low res basemap.
         */
        public get basemapDistance(): number;
        public set basemapDistance(value: number);
        /**
         * The index of the baked lightmap applied to this terrain.
         */
        public get lightmapIndex(): number;
        public set lightmapIndex(value: number);
        /**
         * The index of the realtime lightmap applied to this terrain.
         */
        public get realtimeLightmapIndex(): number;
        public set realtimeLightmapIndex(value: number);
        /**
         * The UV scale & offset used for a baked lightmap.
         */
        public get lightmapScaleOffset(): Vector4;
        public set lightmapScaleOffset(value: Vector4);
        /**
         * The UV scale & offset used for a realtime lightmap.
         */
        public get realtimeLightmapScaleOffset(): Vector4;
        public set realtimeLightmapScaleOffset(value: Vector4);
        /**
         * Whether some per-camera rendering resources for the terrain should be freed after not being used for some frames.
         */
        public get freeUnusedRenderingResources(): boolean;
        public set freeUnusedRenderingResources(value: boolean);
        /**
         * Allows you to set the shadow casting mode for the terrain.
         */
        public get shadowCastingMode(): UnityEngine_Rendering.ShadowCastingMode;
        public set shadowCastingMode(value: UnityEngine_Rendering.ShadowCastingMode);
        /**
         * How reflection probes are used for terrain. See Rendering.ReflectionProbeUsage.
         */
        public get reflectionProbeUsage(): UnityEngine_Rendering.ReflectionProbeUsage;
        public set reflectionProbeUsage(value: UnityEngine_Rendering.ReflectionProbeUsage);
        /**
         * The custom material Unity uses to render the Terrain.
         */
        public get materialTemplate(): Material;
        public set materialTemplate(value: Material);
        /**
         * Indicates whether Unity draws the Terrain geometry itself.
         */
        public get drawHeightmap(): boolean;
        public set drawHeightmap(value: boolean);
        /**
         * Specifies if the terrain tile will be automatically connected to adjacent tiles.
         */
        public get allowAutoConnect(): boolean;
        public set allowAutoConnect(value: boolean);
        /**
         * Grouping ID for auto connect.
         */
        public get groupingID(): number;
        public set groupingID(value: number);
        /**
         * Set to true to enable the terrain instance renderer. The default value is false.
         */
        public get drawInstanced(): boolean;
        public set drawInstanced(value: boolean);
        /**
         * Returns the normal map texture computed from sampling the heightmap. It is only used when terrain is rendered using instancing.
         */
        public get normalmapTexture(): RenderTexture;
        /**
         * Specify if terrain trees and details should be drawn.
         */
        public get drawTreesAndFoliage(): boolean;
        public set drawTreesAndFoliage(value: boolean);
        /**
         * Set the terrain bounding box scale.
         */
        public get patchBoundsMultiplier(): Vector3;
        public set patchBoundsMultiplier(value: Vector3);
        /**
         * The multiplier to the current LOD bias used for rendering LOD trees (i.e. SpeedTree trees).
         */
        public get treeLODBiasMultiplier(): number;
        public set treeLODBiasMultiplier(value: number);
        /**
         * Collect detail patches from memory.
         */
        public get collectDetailPatches(): boolean;
        public set collectDetailPatches(value: boolean);
        /**
         * Controls what part of the terrain should be rendered.
         */
        public get editorRenderFlags(): TerrainRenderFlags;
        public set editorRenderFlags(value: TerrainRenderFlags);
        /**
         * Specifies if an array of internal light probes should be baked for terrain trees. Available only in editor.
         */
        public get bakeLightProbesForTrees(): boolean;
        public set bakeLightProbesForTrees(value: boolean);
        /**
         * Removes ringing from probes on trees if enabled.
         */
        public get deringLightProbesForTrees(): boolean;
        public set deringLightProbesForTrees(value: boolean);
        /**
         * Allows you to specify how Unity chooses the for tree instances.
         */
        public get preserveTreePrototypeLayers(): boolean;
        public set preserveTreePrototypeLayers(value: boolean);
        /**
         * Graphics format of the Terrain heightmap.
         */
        public static get heightmapFormat(): UnityEngine_Experimental_Rendering.GraphicsFormat;
        
        public static get heightmapTextureFormat(): TextureFormat;
        /**
         * RenderTextureFormat of the terrain heightmap.
         */
        public static get heightmapRenderTextureFormat(): RenderTextureFormat;
        /**
         * Graphics format of the Terrain normal map texture.
         */
        public static get normalmapFormat(): UnityEngine_Experimental_Rendering.GraphicsFormat;
        /**
         * Texture format of the Terrain normal map texture.
         */
        public static get normalmapTextureFormat(): TextureFormat;
        /**
         * Render texture format of the Terrain normal map texture.
         */
        public static get normalmapRenderTextureFormat(): RenderTextureFormat;
        /**
         * Graphics format of the Terrain holes Texture when it is not compressed.
         */
        public static get holesFormat(): UnityEngine_Experimental_Rendering.GraphicsFormat;
        /**
         * Render texture format of the Terrain holes Texture.
         */
        public static get holesRenderTextureFormat(): RenderTextureFormat;
        /**
         * Graphics format of the Terrain holes Texture when it is compressed.
         */
        public static get compressedHolesFormat(): UnityEngine_Experimental_Rendering.GraphicsFormat;
        /**
         * Texture format of the Terrain holes Texture when it is compressed.
         */
        public static get compressedHolesTextureFormat(): TextureFormat;
        /**
         * The active Terrain. This is a convenient function to get to the main Terrain in the Scene.
         */
        public static get activeTerrain(): Terrain;
        /**
         * The active terrains in the Scene.
         */
        public static get activeTerrains(): Terrain[];
        /**
         * The Terrain tile to the left, which is in the negative X direction.
         */
        public get leftNeighbor(): Terrain;
        /**
         * The Terrain tile to the left, which is in the positive X direction.
         */
        public get rightNeighbor(): Terrain;
        /**
         * Terrain top neighbor.
         */
        public get topNeighbor(): Terrain;
        /**
         * Terrain bottom neighbor.
         */
        public get bottomNeighbor(): Terrain;
        /**
         * Determines which rendering layers the Terrain renderer lives on.
         */
        public get renderingLayerMask(): number;
        public set renderingLayerMask(value: number);
        
        public constructor();
        
        public GetClosestReflectionProbes($result: System_Collections_Generic.List$1<UnityEngine_Rendering.ReflectionProbeBlendInfo>):void;
        /**
         * Samples the height at the given position defined in world space, relative to the Terrain space.
         */
        public SampleHeight($worldPosition: Vector3):number;
        /**
         * Adds a tree instance to the terrain.
         */
        public AddTreeInstance($instance: TreeInstance):void;
        /**
         * Lets you set up the connection between neighboring Terrain tiles. This ensures LOD matches up on neighboring Terrain tiles.
         * @param left The Terrain tile to the left is in the negative X direction.
         * @param top The Terrain tile to the top is in the positive Z direction.
         * @param right The Terrain tile to the right is in the positive X direction.
         * @param bottom The Terrain tile to the bottom is in the negative Z direction.
         */
        public SetNeighbors($left: Terrain, $top: Terrain, $right: Terrain, $bottom: Terrain):void;
        /**
         * Get the position of the terrain.
         */
        public GetPosition():Vector3;
        /**
         * Flushes any change done in the terrain so it takes effect.
         */
        public Flush():void;
        /**
         * Set the additional material properties when rendering the terrain heightmap using the splat material.
         */
        public SetSplatMaterialPropertyBlock($properties: MaterialPropertyBlock):void;
        /**
         * Get the previously set splat material properties by copying to the dest MaterialPropertyBlock object.
         */
        public GetSplatMaterialPropertyBlock($dest: MaterialPropertyBlock):void;
        /**
         * Marks the current connectivity status as invalid.
         */
        public static SetConnectivityDirty():void;
        /**
         * Creates a Terrain including collider from TerrainData.
         */
        public static CreateTerrainGameObject($assignTerrain: TerrainData):GameObject;
        
                    
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
     * The TerrainData class stores heightmaps, detail mesh positions, tree instances, and terrain texture alpha maps.
     */
    class TerrainData extends Object {
        /**
         * The name for the Terrain alpha map textures.
         */
        public static get AlphamapTextureName(): string;
        /**
         * The name for the Terrain holes Texture.
         */
        public static get HolesTextureName(): string;
        /**
         * Returns the heightmap texture.
         */
        public get heightmapTexture(): RenderTexture;
        /**
         * The size of the heightmap in texels for either the width or the height.
         */
        public get heightmapResolution(): number;
        public set heightmapResolution(value: number);
        /**
         * Returns a Vector3 where the x and z components are the size of each heightmap sample (i.e. the space between two neighboring heightmap samples), and the y component is the entire Terrain's height range in world space.
         */
        public get heightmapScale(): Vector3;
        /**
         * Returns the Terrain holes Texture.
         */
        public get holesTexture(): Texture;
        /**
         * Enable the Terrain holes Texture compression.
         */
        public get enableHolesTextureCompression(): boolean;
        public set enableHolesTextureCompression(value: boolean);
        /**
         * Returns the Terrain holes resolution for both the data and the Texture.
         */
        public get holesResolution(): number;
        /**
         * The total size in world units of the terrain.
         */
        public get size(): Vector3;
        public set size(value: Vector3);
        /**
         * The local bounding box of the TerrainData object.
         */
        public get bounds(): Bounds;
        /**
         * Strength of the waving grass in the terrain.
         */
        public get wavingGrassStrength(): number;
        public set wavingGrassStrength(value: number);
        /**
         * Amount of waving grass in the terrain.
         */
        public get wavingGrassAmount(): number;
        public set wavingGrassAmount(value: number);
        /**
         * Speed of the waving grass.
         */
        public get wavingGrassSpeed(): number;
        public set wavingGrassSpeed(value: number);
        /**
         * Color of the waving grass that the terrain has.
         */
        public get wavingGrassTint(): Color;
        public set wavingGrassTint(value: Color);
        /**
         * The resolution of the detail data stored in TerrainData.
         */
        public get detailWidth(): number;
        /**
         * The resolution of the detail data stored in TerrainData.
         */
        public get detailHeight(): number;
        /**
         * The number of patches along a terrain tile edge. This is squared to make a grid of patches.
         */
        public get detailPatchCount(): number;
        /**
         * Detail Resolution of the TerrainData.
         */
        public get detailResolution(): number;
        /**
         * Detail Resolution of each patch. A larger value will decrease the number of batches used by detail objects.
         */
        public get detailResolutionPerPatch(): number;
        /**
         * Contains the detail texture/meshes that the Terrain has.
         */
        public get detailPrototypes(): DetailPrototype[];
        public set detailPrototypes(value: DetailPrototype[]);
        /**
         * Contains the current trees placed in the terrain.
         */
        public get treeInstances(): TreeInstance[];
        public set treeInstances(value: TreeInstance[]);
        /**
         * Returns the number of tree instances.
         */
        public get treeInstanceCount(): number;
        /**
         * The list of tree prototypes this are the ones available in the inspector.
         */
        public get treePrototypes(): TreePrototype[];
        public set treePrototypes(value: TreePrototype[]);
        /**
         * Number of alpha map layers.
         */
        public get alphamapLayers(): number;
        /**
         * The size of the alpha map in texels for either the width or the height.
         */
        public get alphamapResolution(): number;
        public set alphamapResolution(value: number);
        /**
         * Width of the alpha map.
         */
        public get alphamapWidth(): number;
        /**
         * Height of the alpha map. (Read only.)
         */
        public get alphamapHeight(): number;
        /**
         * Resolution of the base map used for rendering far patches on the terrain.
         */
        public get baseMapResolution(): number;
        public set baseMapResolution(value: number);
        /**
         * Returns the number of alphamap textures.
         */
        public get alphamapTextureCount(): number;
        /**
         * Alpha map textures used by the Terrain. Used by Terrain Inspector for undo.
         */
        public get alphamapTextures(): Texture2D[];
        /**
         * Retrieves the terrain layers used by the current terrain.
         */
        public get terrainLayers(): TerrainLayer[];
        public set terrainLayers(value: TerrainLayer[]);
        
        public constructor();
        /**
         * Copies the specified part of the active RenderTexture to the Terrain heightmap texture.
         * @param sourceRect The part of the active Render Texture to copy.
         * @param dest The X and Y coordinates of the heightmap texture to copy into.
         * @param syncControl Controls how CPU synchronization is performed.
         */
        public CopyActiveRenderTextureToHeightmap($sourceRect: RectInt, $dest: Vector2Int, $syncControl: TerrainHeightmapSyncControl):void;
        /**
         * Marks the specified part of the heightmap as dirty.
         * @param region The rectangular region to mark as dirty.
         * @param syncControl Controls how CPU synchronization is performed.
         */
        public DirtyHeightmapRegion($region: RectInt, $syncControl: TerrainHeightmapSyncControl):void;
        /**
         * Copies the specified part of the active RenderTexture to the Terrain texture.
         * @param textureName The name of the Terrain texture to copy into.
         * @param textureIndex The index of the Terrain texture to copy into.
         * @param sourceRect The part of the active Render Texture to copy.
         * @param dest The X and Y coordinates of the Terrain texture to copy into.
         * @param allowDelayedCPUSync Specifies whether to allow delayed CPU synchronization of the texture.
         */
        public CopyActiveRenderTextureToTexture($textureName: string, $textureIndex: number, $sourceRect: RectInt, $dest: Vector2Int, $allowDelayedCPUSync: boolean):void;
        /**
         * Marks the specified part of the Terrain texture as dirty.
         * @param textureName The name of the Terrain texture.
         * @param region The rectangular region to mark as dirty.
         * @param allowDelayedCPUSync Specifies whether to allow delayed CPU synchronization of the texture.
         */
        public DirtyTextureRegion($textureName: string, $region: RectInt, $allowDelayedCPUSync: boolean):void;
        /**
         * Performs synchronization queued by previous calls to CopyActiveRenderTextureToTexture and DirtyTextureRegion, which makes CPU data of the Terrain textures up to date.
         * @param textureName The name of the Terrain texture to synchronize.
         */
        public SyncTexture($textureName: string):void;
        /**
         * Gets the world space height of the Terrain at a certain point x,y without adding the Terrain's world position y.
         */
        public GetHeight($x: number, $y: number):number;
        /**
         * Gets an interpolated height at a point x,y. The x and y coordinates are clamped to [0, 1].
         * @param x X coordinate of the point in the range of [0, 1].
         * @param y Y coordinate of the point in the range of [0, 1].
         */
        public GetInterpolatedHeight($x: number, $y: number):number;
        /**
         * Gets an array of terrain height values using the normalized x,y coordinates.
         * @param xBase The base x coordinate.
         * @param yBase The base y coordinate.
         * @param xCount The number of queries along the X axis.
         * @param yCount The number of queries along the Y axis.
         * @param xInterval The interval between each query along the X axis.
         * @param yInterval The interval between each query along the Y axis.
         */
        public GetInterpolatedHeights($xBase: number, $yBase: number, $xCount: number, $yCount: number, $xInterval: number, $yInterval: number):number[];
        /**
         * Fills the array with Terrain height values using normalized x,y coordinates.
         * @param results The array to fill with height values.
         * @param resultXOffset The offset from the beginning of the array, along the X axis, at which to start filling in height values.
         * @param resultYOffset The offset from the beginning of the array, along the Y axis, at which to start filling in height values.
         * @param xBase The base x coordinate.
         * @param yBase The base y coordinate.
         * @param xCount The number of queries along the X axis.
         * @param yCount The number of queries along the Y axis.
         * @param xInterval The interval between each query along the X axis.
         * @param yInterval The interval between each query along the Y axis.
         */
        public GetInterpolatedHeights($results: number[], $resultXOffset: number, $resultYOffset: number, $xBase: number, $yBase: number, $xCount: number, $yCount: number, $xInterval: number, $yInterval: number):void;
        /**
         * Gets an array of heightmap samples.
         * @param xBase First index of heightmap samples to retrieve along the Terrain's x axis.
         * @param yBase First index of heightmap samples to retrieve along the Terrain's z axis.
         * @param width Number of samples to retrieve along the Terrain's x axis.
         * @param height Number of samples to retrieve along the Terrain's z axis.
         */
        public GetHeights($xBase: number, $yBase: number, $width: number, $height: number):number[];
        /**
         * Sets an array of heightmap samples.
         * @param xBase First x index of heightmap samples to set.
         * @param yBase First y index of heightmap samples to set.
         * @param heights Array of heightmap samples to set (values range from 0 to 1, array indexed as [y,x]).
         */
        public SetHeights($xBase: number, $yBase: number, $heights: number[]):void;
        /**
         * Returns an array of min max height values for all the renderable patches in a terrain.  The returned array can be modified and then passed to OverrideMinMaxPatchHeights.
         * @returns Minimum and maximum height values for each patch.
         */
        public GetPatchMinMaxHeights():PatchExtents[];
        /**
         * Override the minimum and maximum patch heights for every renderable terrain patch.  Note that the overriden values get reset when the terrain resolution is changed and stays unchanged when the terrain heightmap is painted or changed via script.
         * @param minMaxHeights Array of minimum and maximum terrain patch height values.
         */
        public OverrideMinMaxPatchHeights($minMaxHeights: PatchExtents[]):void;
        /**
         * Returns an array of tesselation maximum height error values per renderable terrain patch.  The returned array can be modified and passed to OverrideMaximumHeightError.
         * @returns Float array of maximum height error values.
         */
        public GetMaximumHeightError():number[];
        /**
         * Override the maximum tessellation height error with user provided values.  Note that the overriden values get reset when the terrain resolution is changed and stays unchanged when the terrain heightmap is painted or changed via script.
         * @param maxError Provided maximum height error values.
         */
        public OverrideMaximumHeightError($maxError: number[]):void;
        /**
         * Sets an array of heightmap samples.
         * @param xBase First x index of heightmap samples to set.
         * @param yBase First y index of heightmap samples to set.
         * @param heights Array of heightmap samples to set (values range from 0 to 1, array indexed as [y,x]).
         */
        public SetHeightsDelayLOD($xBase: number, $yBase: number, $heights: number[]):void;
        /**
         * Gets whether a certain point at x,y is a hole.
         */
        public IsHole($x: number, $y: number):boolean;
        /**
         * Gets an array of Terrain holes samples.
         * @param xBase First x index of Terrain holes samples to retrieve.
         * @param yBase First y index of Terrain holes samples to retrieve.
         * @param width Number of samples to retrieve along the Terrain holes x axis.
         * @param height Number of samples to retrieve along the Terrain holes y axis.
         */
        public GetHoles($xBase: number, $yBase: number, $width: number, $height: number):boolean[];
        /**
         * Sets an array of Terrain holes samples.
         * @param xBase First x index of Terrain holes samples to set.
         * @param yBase First y index of Terrain holes samples to set.
         * @param holes Array of Terrain holes samples to set (array indexed as [y,x]).
         */
        public SetHoles($xBase: number, $yBase: number, $holes: boolean[]):void;
        /**
         * Sets an array of Terrain holes samples.
         * @param xBase First x index of Terrain holes samples to set.
         * @param yBase First y index of Terrain holes samples to set.
         * @param holes Array of Terrain holes samples to set (array indexed as [y,x]).
         */
        public SetHolesDelayLOD($xBase: number, $yBase: number, $holes: boolean[]):void;
        /**
         * Gets the gradient of the terrain at point (x,y).
         */
        public GetSteepness($x: number, $y: number):number;
        /**
         * Get an interpolated normal at a given location.
         */
        public GetInterpolatedNormal($x: number, $y: number):Vector3;
        /**
         * Sets the resolution of the detail map.
         * @param detailResolution Specifies the number of pixels in the detail resolution map. A larger detailResolution, leads to more accurate detail object painting.
         * @param resolutionPerPatch Specifies the size in pixels of each individually rendered detail patch. A larger number reduces draw calls, but might increase triangle count since detail patches are culled on a per batch basis. A recommended value is 16. If you use a very large detail object distance and your grass is very sparse, it makes sense to increase the value.
         */
        public SetDetailResolution($detailResolution: number, $resolutionPerPatch: number):void;
        /**
         * Reloads all the values of the available prototypes (ie, detail mesh assets) in the TerrainData Object.
         */
        public RefreshPrototypes():void;
        /**
         * Returns an array of all supported detail layer indices in the area.
         */
        public GetSupportedLayers($xBase: number, $yBase: number, $totalWidth: number, $totalHeight: number):number[];
        /**
         * Returns a 2D array of the detail object density (i.e. the number of detail objects for this layer) in the specific location.
         * @param xBase First x index of detail object density data to retrieve.
         * @param yBase First y index of detail object density data to retrieve.
         * @param width The amount of detail object density data to retrieve along the Terrain's x axis.
         * @param height The amount of detail object density data to retrieve along the Terrain's z axis.
         * @param layer The index of the detail in the TerrainData.detailPrototypes array.
         */
        public GetDetailLayer($xBase: number, $yBase: number, $width: number, $height: number, $layer: number):number[];
        /**
         * Sets the detail layer density map.
         */
        public SetDetailLayer($xBase: number, $yBase: number, $layer: number, $details: number[]):void;
        /**
         * Returns an array of detail patches, which are each identified by X-Z coordinates. Detail objects in the patches are clamped to the maximum count.
         * @param density The detail density value. See Terrain.detailObjectDensity.
         */
        public GetClampedDetailPatches($density: number):Vector2Int[];
        /**
         * Sets the Tree Instance array, and optionally snaps Trees onto the surface of the Terrain heightmap.
         * @param instances The array of TreeInstance objects.
         * @param snapToHeightmap Specifies whether to snap Trees to the Terrain heightmap.
         */
        public SetTreeInstances($instances: TreeInstance[], $snapToHeightmap: boolean):void;
        /**
         * Gets the tree instance at the specified index. It is used as a faster version of treeInstances[index] as this function doesn't create the entire tree instances array.
         * @param index The index of the tree instance.
         */
        public GetTreeInstance($index: number):TreeInstance;
        /**
         * Sets the tree instance with new parameters at the specified index. However, you cannot change TreeInstance.prototypeIndex and TreeInstance.position. If you change them, the method throws an ArgumentException.
         * @param index The index of the tree instance.
         * @param instance The new TreeInstance value.
         */
        public SetTreeInstance($index: number, $instance: TreeInstance):void;
        /**
         * Returns the alpha map at a position x, y given a width and height.
         * @param x The x offset to read from.
         * @param y The y offset to read from.
         * @param width The width of the alpha map area to read.
         * @param height The height of the alpha map area to read.
         * @returns A 3D array of floats, where the 3rd dimension represents the mixing weight of each splatmap at each x,y coordinate.
         */
        public GetAlphamaps($x: number, $y: number, $width: number, $height: number):number[];
        /**
         * Assign all splat values in the given map area.
         */
        public SetAlphamaps($x: number, $y: number, $map: number[]):void;
        /**
         * Marks the terrain data as dirty to trigger an update of the terrain basemap texture.
         */
        public SetBaseMapDirty():void;
        /**
         * Returns the alphamap texture at the specified index.
         * @param index Index of the alphamap.
         * @returns Alphamap texture at the specified index.
         */
        public GetAlphamapTexture($index: number):Texture2D;
        /**
         * This function sets the terrainLayers property, and in addition, registers the action to the Editor's undo stack.
         * @param terrainLayers The Terrain Layer assets to set.
         * @param undoName The name of the Editor's undo action.
         */
        public SetTerrainLayersRegisterUndo($terrainLayers: TerrainLayer[], $undoName: string):void;
        /**
         * Performs synchronization queued by previous calls to CopyActiveRenderTextureToHeightmap and DirtyHeightmapRegion, which makes the height data and LOD data used for tessellation up to date.
         */
        public SyncHeightmap():void;
        
                    
    }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * The material class.
     */
    interface Material extends Object {
        
                    
    }
    /**
     * Render textures are textures that can be rendered to.
     */
    interface RenderTexture extends Texture {
        
                    
    }
    /**
     * Base class for Texture handling.
     */
    interface Texture extends Object {
        
                    
    }
    /**
     * Representation of 3D vectors and points.
     */
    interface Vector3 extends System.ValueType {
        
                    
    }
    /**
     * Contains information about a tree placed in the Terrain game object.
     */
    class TreeInstance extends System.ValueType {
        /**
         * Position of the tree.
         */
        public position: Vector3;
        /**
         * Width scale of this instance (compared to the prototype's size).
         */
        public widthScale: number;
        /**
         * Height scale of this instance (compared to the prototype's size).
         */
        public heightScale: number;
        /**
         * Read-only.
         * Rotation of the tree on X-Z plane (in radians).
         */
        public rotation: number;
        /**
         * Color of this instance.
         */
        public color: Color32;
        /**
         * Lightmap color calculated for this instance.
         */
        public lightmapColor: Color32;
        /**
         * Index of this instance in the TerrainData.treePrototypes array.
         */
        public prototypeIndex: number;
        
        public get_Clone(): TreeInstance;            
    }
    /**
     * Enum provding terrain rendering options.
     */
    enum TerrainRenderFlags { heightmap = 1, trees = 2, details = 4, all = 7, Heightmap = 1, Trees = 2, Details = 4, All = 7 }
    /**
     * A block of material values to apply.
     */
    interface MaterialPropertyBlock extends System.Object {
        
                    
    }
    /**
     * Format used when creating textures from scripts.
     */
    enum TextureFormat { Alpha8 = 1, ARGB4444 = 2, RGB24 = 3, RGBA32 = 4, ARGB32 = 5, RGB565 = 7, R16 = 9, DXT1 = 10, DXT5 = 12, RGBA4444 = 13, BGRA32 = 14, RHalf = 15, RGHalf = 16, RGBAHalf = 17, RFloat = 18, RGFloat = 19, RGBAFloat = 20, YUY2 = 21, RGB9e5Float = 22, BC4 = 26, BC5 = 27, BC6H = 24, BC7 = 25, DXT1Crunched = 28, DXT5Crunched = 29, PVRTC_RGB2 = 30, PVRTC_RGBA2 = 31, PVRTC_RGB4 = 32, PVRTC_RGBA4 = 33, ETC_RGB4 = 34, ATC_RGB4 = -127, ATC_RGBA8 = -127, EAC_R = 41, EAC_R_SIGNED = 42, EAC_RG = 43, EAC_RG_SIGNED = 44, ETC2_RGB = 45, ETC2_RGBA1 = 46, ETC2_RGBA8 = 47, ASTC_4x4 = 48, ASTC_5x5 = 49, ASTC_6x6 = 50, ASTC_8x8 = 51, ASTC_10x10 = 52, ASTC_12x12 = 53, ETC_RGB4_3DS = 60, ETC_RGBA8_3DS = 61, RG16 = 62, R8 = 63, ETC_RGB4Crunched = 64, ETC2_RGBA8Crunched = 65, ASTC_HDR_4x4 = 66, ASTC_HDR_5x5 = 67, ASTC_HDR_6x6 = 68, ASTC_HDR_8x8 = 69, ASTC_HDR_10x10 = 70, ASTC_HDR_12x12 = 71, RG32 = 72, RGB48 = 73, RGBA64 = 74, ASTC_RGB_4x4 = 48, ASTC_RGB_5x5 = 49, ASTC_RGB_6x6 = 50, ASTC_RGB_8x8 = 51, ASTC_RGB_10x10 = 52, ASTC_RGB_12x12 = 53, ASTC_RGBA_4x4 = 54, ASTC_RGBA_5x5 = 55, ASTC_RGBA_6x6 = 56, ASTC_RGBA_8x8 = 57, ASTC_RGBA_10x10 = 58, ASTC_RGBA_12x12 = 59, PVRTC_2BPP_RGB = -127, PVRTC_2BPP_RGBA = -127, PVRTC_4BPP_RGB = -127, PVRTC_4BPP_RGBA = -127 }
    /**
     * Format of a RenderTexture.
     */
    enum RenderTextureFormat { ARGB32 = 0, Depth = 1, ARGBHalf = 2, Shadowmap = 3, RGB565 = 4, ARGB4444 = 5, ARGB1555 = 6, Default = 7, ARGB2101010 = 8, DefaultHDR = 9, ARGB64 = 10, ARGBFloat = 11, RGFloat = 12, RGHalf = 13, RFloat = 14, RHalf = 15, R8 = 16, ARGBInt = 17, RGInt = 18, RInt = 19, BGRA32 = 20, RGB111110Float = 22, RG32 = 23, RGBAUShort = 24, RG16 = 25, BGRA10101010_XR = 26, BGR101010_XR = 27, R16 = 28 }
    /**
     * Base class for all entities in Unity Scenes.
     */
    interface GameObject extends Object {
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * Indicate the types of changes to the terrain in OnTerrainChanged callback.
     */
    enum TerrainChangedFlags { Heightmap = 1, TreeInstances = 2, DelayedHeightmapUpdate = 4, FlushEverythingImmediately = 8, RemoveDirtyDetailsImmediately = 16, HeightmapResolution = 32, Holes = 64, DelayedHolesUpdate = 128, WillBeDestroyed = 256 }
    /**
     * Extension methods to the Terrain class, used only for the UpdateGIMaterials method used by the Global Illumination System.
     */
    class TerrainExtensions extends System.Object {
        /**
         * Schedules an update of the albedo and emissive Textures of a system that contains the Terrain.
         */
        public static UpdateGIMaterials($terrain: Terrain):void;
        /**
         * Schedules an update of the albedo and emissive Textures of a system that contains the Terrain.
         */
        public static UpdateGIMaterials($terrain: Terrain, $x: number, $y: number, $width: number, $height: number):void;
        
                    
    }
    /**
     * Tree Component for the tree creator.
     */
    class Tree extends Component {
        /**
         * Data asociated to the Tree.
         */
        public get data(): ScriptableObject;
        public set data(value: ScriptableObject);
        /**
         * Tells if there is wind data exported from SpeedTree are saved on this component.
         */
        public get hasSpeedTreeWind(): boolean;
        
        public constructor();
        
                    
    }
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * A 2D Rectangle defined by x, y, width, height with integers.
     */
    interface RectInt extends System.ValueType {
        
                    
    }
    /**
     * Representation of 2D vectors and points using integers.
     */
    interface Vector2Int extends System.ValueType {
        
                    
    }
    /**
     * Controls what Terrain heightmap data to synchronize when there are changes to the heightmap texture.
     */
    enum TerrainHeightmapSyncControl { None = 0, HeightOnly = 1, HeightAndLod = 2 }
    /**
     * Represents an axis aligned bounding box.
     */
    interface Bounds extends System.ValueType {
        
                    
    }
    /**
     * Structure containing minimum and maximum terrain patch height values.
     */
    class PatchExtents extends System.ValueType {
        /**
         * Minimum height of a terrain patch.
         */
        public get min(): number;
        public set min(value: number);
        /**
         * Maximum height of a terrain patch.
         */
        public get max(): number;
        public set max(value: number);
        
        public get_Clone(): PatchExtents;            
    }
    /**
     * Detail prototype used by the Terrain GameObject.
     */
    class DetailPrototype extends System.Object {
        /**
         * GameObject used by the DetailPrototype.
         */
        public get prototype(): GameObject;
        public set prototype(value: GameObject);
        /**
         * Texture used by the DetailPrototype.
         */
        public get prototypeTexture(): Texture2D;
        public set prototypeTexture(value: Texture2D);
        /**
         * Minimum width of the grass billboards (if render mode is GrassBillboard).
         */
        public get minWidth(): number;
        public set minWidth(value: number);
        /**
         * Maximum width of the grass billboards (if render mode is GrassBillboard).
         */
        public get maxWidth(): number;
        public set maxWidth(value: number);
        /**
         * Minimum height of the grass billboards (if render mode is GrassBillboard).
         */
        public get minHeight(): number;
        public set minHeight(value: number);
        /**
         * Maximum height of the grass billboards (if render mode is GrassBillboard).
         */
        public get maxHeight(): number;
        public set maxHeight(value: number);
        /**
         * How spread out is the noise for the DetailPrototype.
         */
        public get noiseSpread(): number;
        public set noiseSpread(value: number);
        /**
         * Controls how far away detail objects are from the edge of the hole area.
         */
        public get holeEdgePadding(): number;
        public set holeEdgePadding(value: number);
        /**
         * Color when the DetailPrototypes are "healthy".
         */
        public get healthyColor(): Color;
        public set healthyColor(value: Color);
        /**
         * Color when the DetailPrototypes are "dry".
         */
        public get dryColor(): Color;
        public set dryColor(value: Color);
        /**
         * Render mode for the DetailPrototype.
         */
        public get renderMode(): DetailRenderMode;
        public set renderMode(value: DetailRenderMode);
        /**
         * Indicates whether this detail prototype uses the Mesh object from the GameObject specified by prototype.
         */
        public get usePrototypeMesh(): boolean;
        public set usePrototypeMesh(value: boolean);
        
        public constructor();
        
        public constructor($other: DetailPrototype);
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        /**
         * Returns true if the detail prototype is valid and the Terrain can accept it.
         * @param errorMessage Returns a message that indicates the cause of failed validation.
         */
        public Validate():boolean;
        /**
         * Returns true if the detail prototype is valid and the Terrain can accept it.
         * @param errorMessage Returns a message that indicates the cause of failed validation.
         */
        public Validate($errorMessage: $Ref<string>):boolean;
        
                    
    }
    /**
     * Simple class that contains a pointer to a tree prototype.
     */
    class TreePrototype extends System.Object {
        /**
         * Retrieves the actual GameObject used by the tree.
         */
        public get prefab(): GameObject;
        public set prefab(value: GameObject);
        /**
         * Bend factor of the tree prototype.
         */
        public get bendFactor(): number;
        public set bendFactor(value: number);
        /**
         * The LOD index of a Tree LODGroup that Unity uses to generate a NavMesh. It uses this value only for Trees with a LODGroup, and ignores this value for regular Trees.
         */
        public get navMeshLod(): number;
        public set navMeshLod(value: number);
        
        public constructor();
        
        public constructor($other: TreePrototype);
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
                    
    }
    /**
     * Class that represents textures in C# code.
     */
    interface Texture2D extends Texture {
        
                    
    }
    /**
     * A Splat prototype is just a texture that is used by the TerrainData.
     */
    class SplatPrototype extends System.Object {
        /**
         * Texture of the splat applied to the Terrain.
         */
        public get texture(): Texture2D;
        public set texture(value: Texture2D);
        /**
         * Normal map of the splat applied to the Terrain.
         */
        public get normalMap(): Texture2D;
        public set normalMap(value: Texture2D);
        /**
         * Size of the tile used in the texture of the SplatPrototype.
         */
        public get tileSize(): Vector2;
        public set tileSize(value: Vector2);
        /**
         * Offset of the tile texture of the SplatPrototype.
         */
        public get tileOffset(): Vector2;
        public set tileOffset(value: Vector2);
        
        public get specular(): Color;
        public set specular(value: Color);
        /**
         * The metallic value of the splat layer.
         */
        public get metallic(): number;
        public set metallic(value: number);
        /**
         * The smoothness value of the splat layer when the main texture has no alpha channel.
         */
        public get smoothness(): number;
        public set smoothness(value: number);
        
        public constructor();
        
                    
    }
    /**
     * Description of a terrain layer.
     */
    class TerrainLayer extends Object {
        /**
         * The diffuse texture used by the terrain layer.
         */
        public get diffuseTexture(): Texture2D;
        public set diffuseTexture(value: Texture2D);
        /**
         * Normal map texture used by the terrain layer.
         */
        public get normalMapTexture(): Texture2D;
        public set normalMapTexture(value: Texture2D);
        /**
         * The mask map texture used by the terrain layer.
         */
        public get maskMapTexture(): Texture2D;
        public set maskMapTexture(value: Texture2D);
        /**
         * UV Tiling size.
         */
        public get tileSize(): Vector2;
        public set tileSize(value: Vector2);
        /**
         * UV tiling offset.
         */
        public get tileOffset(): Vector2;
        public set tileOffset(value: Vector2);
        /**
         * Specular color.
         */
        public get specular(): Color;
        public set specular(value: Color);
        /**
         * Metallic factor used by the terrain layer.
         */
        public get metallic(): number;
        public set metallic(value: number);
        /**
         * Smoothness of the specular reflection.
         */
        public get smoothness(): number;
        public set smoothness(value: number);
        /**
         * A float value that scales the normal vector. The minimum value is 0, the maximum value is 1.
         */
        public get normalScale(): number;
        public set normalScale(value: number);
        /**
         * A Vector4 value specifying the minimum RGBA value that the diffuse texture maps to when the value of the channel is 0.
         */
        public get diffuseRemapMin(): Vector4;
        public set diffuseRemapMin(value: Vector4);
        /**
         * A Vector4 value specifying the maximum RGBA value that the diffuse texture maps to when the value of the channel is 1.
         */
        public get diffuseRemapMax(): Vector4;
        public set diffuseRemapMax(value: Vector4);
        /**
         * A Vector4 value specifying the minimum RGBA value that the mask map texture maps to when the value of the channel is 0.
         */
        public get maskMapRemapMin(): Vector4;
        public set maskMapRemapMin(value: Vector4);
        /**
         * A Vector4 value specifying the maximum RGBA value that the mask map texture maps to when the value of the channel is 1.
         */
        public get maskMapRemapMax(): Vector4;
        public set maskMapRemapMax(value: Vector4);
        
        public constructor();
        
                    
    }
    /**
     * Render mode for detail prototypes.
     */
    enum DetailRenderMode { GrassBillboard = 0, VertexLit = 1, Grass = 2 }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Representation of RGBA colors in 32 bit format.
     */
    interface Color32 extends System.ValueType {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    
    interface Terrain {
        /**
         * Schedules an update of the albedo and emissive Textures of a system that contains the Terrain.
         * @extension UnityEngine.TerrainExtensions
         */
        UpdateGIMaterials():void;
        /**
         * Schedules an update of the albedo and emissive Textures of a system that contains the Terrain.
         * @extension UnityEngine.TerrainExtensions
         */
        UpdateGIMaterials($x: number, $y: number, $width: number, $height: number):void;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface UInt32 extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    type Func$2<T,TResult> = (arg: T) => TResult;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.Rendering' {

    import * as System from 'System';
        
    /**
     * How shadows are cast from this object.
     */
    enum ShadowCastingMode { Off = 0, On = 1, TwoSided = 2, ShadowsOnly = 3 }
    /**
     * Reflection Probe usage.
     */
    enum ReflectionProbeUsage { Off = 0, BlendProbes = 1, BlendProbesAndSkybox = 2, Simple = 3 }
    /**
     * ReflectionProbeBlendInfo contains information required for blending probes.
     */
    interface ReflectionProbeBlendInfo extends System.ValueType {
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.Experimental.Rendering' {

        
    /**
     * Use this format to create either Textures or RenderTextures from scripts.
     */
    enum GraphicsFormat { None = 0, R8_SRGB = 1, R8G8_SRGB = 2, R8G8B8_SRGB = 3, R8G8B8A8_SRGB = 4, R8_UNorm = 5, R8G8_UNorm = 6, R8G8B8_UNorm = 7, R8G8B8A8_UNorm = 8, R8_SNorm = 9, R8G8_SNorm = 10, R8G8B8_SNorm = 11, R8G8B8A8_SNorm = 12, R8_UInt = 13, R8G8_UInt = 14, R8G8B8_UInt = 15, R8G8B8A8_UInt = 16, R8_SInt = 17, R8G8_SInt = 18, R8G8B8_SInt = 19, R8G8B8A8_SInt = 20, R16_UNorm = 21, R16G16_UNorm = 22, R16G16B16_UNorm = 23, R16G16B16A16_UNorm = 24, R16_SNorm = 25, R16G16_SNorm = 26, R16G16B16_SNorm = 27, R16G16B16A16_SNorm = 28, R16_UInt = 29, R16G16_UInt = 30, R16G16B16_UInt = 31, R16G16B16A16_UInt = 32, R16_SInt = 33, R16G16_SInt = 34, R16G16B16_SInt = 35, R16G16B16A16_SInt = 36, R32_UInt = 37, R32G32_UInt = 38, R32G32B32_UInt = 39, R32G32B32A32_UInt = 40, R32_SInt = 41, R32G32_SInt = 42, R32G32B32_SInt = 43, R32G32B32A32_SInt = 44, R16_SFloat = 45, R16G16_SFloat = 46, R16G16B16_SFloat = 47, R16G16B16A16_SFloat = 48, R32_SFloat = 49, R32G32_SFloat = 50, R32G32B32_SFloat = 51, R32G32B32A32_SFloat = 52, B8G8R8_SRGB = 56, B8G8R8A8_SRGB = 57, B8G8R8_UNorm = 58, B8G8R8A8_UNorm = 59, B8G8R8_SNorm = 60, B8G8R8A8_SNorm = 61, B8G8R8_UInt = 62, B8G8R8A8_UInt = 63, B8G8R8_SInt = 64, B8G8R8A8_SInt = 65, R4G4B4A4_UNormPack16 = 66, B4G4R4A4_UNormPack16 = 67, R5G6B5_UNormPack16 = 68, B5G6R5_UNormPack16 = 69, R5G5B5A1_UNormPack16 = 70, B5G5R5A1_UNormPack16 = 71, A1R5G5B5_UNormPack16 = 72, E5B9G9R9_UFloatPack32 = 73, B10G11R11_UFloatPack32 = 74, A2B10G10R10_UNormPack32 = 75, A2B10G10R10_UIntPack32 = 76, A2B10G10R10_SIntPack32 = 77, A2R10G10B10_UNormPack32 = 78, A2R10G10B10_UIntPack32 = 79, A2R10G10B10_SIntPack32 = 80, A2R10G10B10_XRSRGBPack32 = 81, A2R10G10B10_XRUNormPack32 = 82, R10G10B10_XRSRGBPack32 = 83, R10G10B10_XRUNormPack32 = 84, A10R10G10B10_XRSRGBPack32 = 85, A10R10G10B10_XRUNormPack32 = 86, RGB_DXT1_SRGB = 96, RGBA_DXT1_SRGB = 96, RGB_DXT1_UNorm = 97, RGBA_DXT1_UNorm = 97, RGBA_DXT3_SRGB = 98, RGBA_DXT3_UNorm = 99, RGBA_DXT5_SRGB = 100, RGBA_DXT5_UNorm = 101, R_BC4_UNorm = 102, R_BC4_SNorm = 103, RG_BC5_UNorm = 104, RG_BC5_SNorm = 105, RGB_BC6H_UFloat = 106, RGB_BC6H_SFloat = 107, RGBA_BC7_SRGB = 108, RGBA_BC7_UNorm = 109, RGB_PVRTC_2Bpp_SRGB = 110, RGB_PVRTC_2Bpp_UNorm = 111, RGB_PVRTC_4Bpp_SRGB = 112, RGB_PVRTC_4Bpp_UNorm = 113, RGBA_PVRTC_2Bpp_SRGB = 114, RGBA_PVRTC_2Bpp_UNorm = 115, RGBA_PVRTC_4Bpp_SRGB = 116, RGBA_PVRTC_4Bpp_UNorm = 117, RGB_ETC_UNorm = 118, RGB_ETC2_SRGB = 119, RGB_ETC2_UNorm = 120, RGB_A1_ETC2_SRGB = 121, RGB_A1_ETC2_UNorm = 122, RGBA_ETC2_SRGB = 123, RGBA_ETC2_UNorm = 124, R_EAC_UNorm = 125, R_EAC_SNorm = 126, RG_EAC_UNorm = 127, RG_EAC_SNorm = 128, RGBA_ASTC4X4_SRGB = 129, RGBA_ASTC4X4_UNorm = 130, RGBA_ASTC5X5_SRGB = 131, RGBA_ASTC5X5_UNorm = 132, RGBA_ASTC6X6_SRGB = 133, RGBA_ASTC6X6_UNorm = 134, RGBA_ASTC8X8_SRGB = 135, RGBA_ASTC8X8_UNorm = 136, RGBA_ASTC10X10_SRGB = 137, RGBA_ASTC10X10_UNorm = 138, RGBA_ASTC12X12_SRGB = 139, RGBA_ASTC12X12_UNorm = 140, RGBA_ASTC4X4_UFloat = 145, RGBA_ASTC5X5_UFloat = 146, RGBA_ASTC6X6_UFloat = 147, RGBA_ASTC8X8_UFloat = 148, RGBA_ASTC10X10_UFloat = 149, RGBA_ASTC12X12_UFloat = 150 }
    
}
declare module 'UnityEngine.Terrain' {

        
    /**
     * The type of the material used to render a terrain object. Could be one of the built-in types or custom.
     */
    enum MaterialType { BuiltInStandard = 0, BuiltInLegacyDiffuse = 1, BuiltInLegacySpecular = 2, Custom = 3 }
    
}
declare module 'UnityEngine.Experimental.TerrainAPI' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Experimental_TerrainAPI_TerrainCallbacks from 'UnityEngine.Experimental.TerrainAPI.TerrainCallbacks';
        
    /**
     * Represents a linear 2D transformation between brush UV space and a target XY space (typically this is a Terrain-local object space.)
     */
    class BrushTransform extends System.ValueType {
        /**
         * (Read Only) Brush UV origin, in XY space.
         */
        public get brushOrigin(): UnityEngine.Vector2;
        /**
         * (Read Only) Brush U vector, in XY space.
         */
        public get brushU(): UnityEngine.Vector2;
        /**
         * (Read Only) Brush V vector, in XY space.
         */
        public get brushV(): UnityEngine.Vector2;
        /**
         * (Read Only) Target XY origin, in Brush UV space.
         */
        public get targetOrigin(): UnityEngine.Vector2;
        /**
         * (Read Only) Target X vector, in Brush UV space.
         */
        public get targetX(): UnityEngine.Vector2;
        /**
         * (Read Only) Target Y vector, in Brush UV space.
         */
        public get targetY(): UnityEngine.Vector2;
        /**
         * Creates a BrushTransform.
         * @param brushOrigin Origin of the brush, in target XY space.
         * @param brushU Brush U vector, in target XY space.
         * @param brushV Brush V vector, in target XY space.
         */
        public constructor($brushOrigin: UnityEngine.Vector2, $brushU: UnityEngine.Vector2, $brushV: UnityEngine.Vector2);
        /**
         * Get the axis-aligned bounding rectangle of the brush, in target XY space.
         * @returns Bounding rectangle in target XY space.
         */
        public GetBrushXYBounds():UnityEngine.Rect;
        /**
         * Creates an axis-aligned BrushTransform from a rectangle.
         * @param brushRect Brush rectangle, in target XY coordinates.
         * @returns BrushTransform describing the brush.
         */
        public static FromRect($brushRect: UnityEngine.Rect):BrushTransform;
        /**
         * Applies the transform to convert a target XY coordinate to Brush UV space.
         * @param targetXY Point in target XY space.
         * @returns Point transformed to Brush UV space.
         */
        public ToBrushUV($targetXY: UnityEngine.Vector2):UnityEngine.Vector2;
        /**
         * Applies the transform to convert a Brush UV coordinate to the target XY space.
         * @param brushUV Brush UV coordinate to transform.
         * @returns Target XY coordinate.
         */
        public FromBrushUV($brushUV: UnityEngine.Vector2):UnityEngine.Vector2;
        
        public get_Clone(): BrushTransform;            
    }
    /**
     * The context for a paint operation that may span multiple connected Terrain tiles.
     */
    class PaintContext extends System.Object {
        /**
         * (Read Only) The Terrain used to build the PaintContext.
         */
        public get originTerrain(): UnityEngine.Terrain;
        /**
         * (Read Only) The pixel rectangle that this PaintContext represents.
         */
        public get pixelRect(): UnityEngine.RectInt;
        /**
         * (Read Only) The width of the target terrain texture.  This is the resolution for a single Terrain.
         */
        public get targetTextureWidth(): number;
        /**
         * (Read Only) The height of the target terrain texture.  This is the resolution for a single Terrain.
         */
        public get targetTextureHeight(): number;
        /**
         * (Read Only) The size of a PaintContext pixel in terrain units (as defined by originTerrain.)
         */
        public get pixelSize(): UnityEngine.Vector2;
        /**
         * (Read Only) Render target that stores the original data from the Terrain tiles.
         */
        public get sourceRenderTexture(): UnityEngine.RenderTexture;
        /**
         * (Read Only) RenderTexture that an edit operation writes to modify the data.
         */
        public get destinationRenderTexture(): UnityEngine.RenderTexture;
        /**
         * (Read Only) The value of RenderTexture.active at the time CreateRenderTargets is called.
         */
        public get oldRenderTexture(): UnityEngine.RenderTexture;
        /**
         * (Read Only) The number of Terrain tiles in this PaintContext.
         */
        public get terrainCount(): number;
        /**
         * The minimum height of all Terrain tiles that this PaintContext touches in world space.
         */
        public get heightWorldSpaceMin(): number;
        /**
         * The height range (from Min to Max) of all Terrain tiles that this PaintContext touches in world space.
         */
        public get heightWorldSpaceSize(): number;
        /**
         * Unity uses this value internally to transform a [0, 1] height value to a texel value, which is stored in TerrainData.heightmapTexture.
         */
        public static get kNormalizedHeightScale(): number;
        
        public constructor($terrain: UnityEngine.Terrain, $pixelRect: UnityEngine.RectInt, $targetTextureWidth: number, $targetTextureHeight: number, $texelPadding?: boolean);
        /**
         * Retrieves a Terrain from the PaintContext.
         * @param terrainIndex Index of the terrain.
         * @returns Returns the Terrain object.
         */
        public GetTerrain($terrainIndex: number):UnityEngine.Terrain;
        /**
         * Retrieves the clipped pixel rectangle for a Terrain.
         * @param terrainIndex Index of the Terrain.
         * @returns Returns the clipped pixel rectangle.
         */
        public GetClippedPixelRectInTerrainPixels($terrainIndex: number):UnityEngine.RectInt;
        /**
         * Retrieves the clipped pixel rectangle for a Terrain, relative to the PaintContext render textures.
         * @param terrainIndex Index of the Terrain.
         * @returns Returns the clipped pixel rectangle.
         */
        public GetClippedPixelRectInRenderTexturePixels($terrainIndex: number):UnityEngine.RectInt;
        
        public static CreateFromBounds($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $inputTextureWidth: number, $inputTextureHeight: number, $extraBorderPixels?: number, $texelPadding?: boolean):PaintContext;
        /**
         * Creates the sourceRenderTexture and destinationRenderTexture.
         * @param colorFormat Render Texture format.
         */
        public CreateRenderTargets($colorFormat: UnityEngine.RenderTextureFormat):void;
        /**
         * Releases the allocated resources of this PaintContext.
         * @param restoreRenderTexture When true, indicates that this function restores RenderTexture.active
         */
        public Cleanup($restoreRenderTexture?: boolean):void;
        
        public Gather($terrainSource: System.Func$2<UnityEngine_Experimental_TerrainAPI_PaintContext.ITerrainInfo, UnityEngine.Texture>, $defaultColor: UnityEngine.Color, $blitMaterial?: UnityEngine.Material, $blitPass?: number, $beforeBlit?: System.Action$1<UnityEngine_Experimental_TerrainAPI_PaintContext.ITerrainInfo>, $afterBlit?: System.Action$1<UnityEngine_Experimental_TerrainAPI_PaintContext.ITerrainInfo>):void;
        
        public Scatter($terrainDest: System.Func$2<UnityEngine_Experimental_TerrainAPI_PaintContext.ITerrainInfo, UnityEngine.RenderTexture>, $blitMaterial?: UnityEngine.Material, $blitPass?: number, $beforeBlit?: System.Action$1<UnityEngine_Experimental_TerrainAPI_PaintContext.ITerrainInfo>, $afterBlit?: System.Action$1<UnityEngine_Experimental_TerrainAPI_PaintContext.ITerrainInfo>):void;
        /**
         * Gathers the heightmap information into sourceRenderTexture.
         */
        public GatherHeightmap():void;
        /**
         * Applies an edited heightmap PaintContext by copying modifications back to the source Terrain tiles.
         * @param editorUndoName Unique name used for the undo stack.
         */
        public ScatterHeightmap($editorUndoName: string):void;
        /**
         * Gathers the Terrain holes information into sourceRenderTexture.
         */
        public GatherHoles():void;
        /**
         * Applies an edited Terrain holes PaintContext by copying modifications back to the source Terrain tiles.
         * @param editorUndoName Unique name used for the undo stack.
         */
        public ScatterHoles($editorUndoName: string):void;
        /**
         * Gathers the normal information into sourceRenderTexture.
         */
        public GatherNormals():void;
        /**
         * Gathers the alphamap information into sourceRenderTexture.
         * @param inputLayer TerrainLayer used for painting.
         * @param addLayerIfDoesntExist Set to true to specify that the inputLayer is added to the terrain if it does not already exist. Set to false to specify that terrain layers are not added to the terrain.
         */
        public GatherAlphamap($inputLayer: UnityEngine.TerrainLayer, $addLayerIfDoesntExist?: boolean):void;
        /**
         * Applies an edited alphamap PaintContext by copying modifications back to the source Terrain tiles.
         * @param editorUndoName Unique name used for the undo stack.
         */
        public ScatterAlphamap($editorUndoName: string):void;
        /**
         * Flushes the delayed actions created by PaintContext heightmap and alphamap modifications.
         */
        public static ApplyDelayedActions():void;
        
                    
    }
    /**
     * This static class provides events that Unity triggers when Terrain data changes.
     */
    class TerrainCallbacks extends System.Object {
        
        public static add_heightmapChanged($value: UnityEngine_Experimental_TerrainAPI_TerrainCallbacks.HeightmapChangedCallback):void;
        
        public static remove_heightmapChanged($value: UnityEngine_Experimental_TerrainAPI_TerrainCallbacks.HeightmapChangedCallback):void;
        
        public static add_textureChanged($value: UnityEngine_Experimental_TerrainAPI_TerrainCallbacks.TextureChangedCallback):void;
        
        public static remove_textureChanged($value: UnityEngine_Experimental_TerrainAPI_TerrainCallbacks.TextureChangedCallback):void;
        /**
         * This event is triggered after there are changes to Terrain height data.
         */
        public static heightmapChanged;
        /**
         * This event is triggered after there are changes to Terrain textures.
         */
        public static textureChanged;
        
                    
    }
    /**
     * A set of utility functions for custom terrain paint tools.
     */
    class TerrainPaintUtility extends System.Object {
        /**
         * Returns the built-in in paint material used by the built-in tools.
         * @returns Built-in terrain paint material.
         */
        public static GetBuiltinPaintMaterial():UnityEngine.Material;
        /**
         * Calculates the minimum and maximum Brush size limits, in world space.
         * @param minBrushWorldSize Returns the minimum Brush size, in world space units.
         * @param maxBrushWorldSize Returns the maximum Brush size, in world space units.
         * @param terrainTileWorldSize The size of a Terrain tile, in world space units.
         * @param terrainTileTextureResolutionPixels The resolution of the Terrain tile texture the Brush edits, in pixels.
         * @param minBrushResolutionPixels The minimum Brush resolution, in pixels.  Default is 1 pixel.
         * @param maxBrushResolutionPixels The maximum Brush resolution, in pixels.  Default is 8192 pixels.
         */
        public static GetBrushWorldSizeLimits($minBrushWorldSize: $Ref<number>, $maxBrushWorldSize: $Ref<number>, $terrainTileWorldSize: number, $terrainTileTextureResolutionPixels: number, $minBrushResolutionPixels?: number, $maxBrushResolutionPixels?: number):void;
        /**
         * Creates a BrushTransform from the input parameters.
         * @param terrain Reference terrain, defines terrain UV and object space.
         * @param brushCenterTerrainUV Center point of the brush, in terrain UV space (0-1 across the terrain tile).
         * @param brushSize Size of the brush, in terrain space.
         * @param brushRotationDegrees Brush rotation in degrees (clockwise).
         * @returns Transform from terrain space to Brush UVs.
         */
        public static CalculateBrushTransform($terrain: UnityEngine.Terrain, $brushCenterTerrainUV: UnityEngine.Vector2, $brushSize: number, $brushRotationDegrees: number):BrushTransform;
        /**
         * Builds a Scale & Offset transform to convert between one PaintContext's UV space and another PaintContext's UV space.
         * @param src Source PaintContext.
         * @param dst Destination PaintContext.
         * @param scaleOffset ScaleOffset transform.
         */
        public static BuildTransformPaintContextUVToPaintContextUV($src: PaintContext, $dst: PaintContext, $scaleOffset: $Ref<UnityEngine.Vector4>):void;
        /**
         * Sets up all of the material properties used by functions in TerrainTool.cginc.
         * @param paintContext PaintContext describing the area we are editing, and the terrain space.
         * @param brushXform BrushTransform from terrain space to Brush UVs.
         * @param material Material to populate with transform properties.
         */
        public static SetupTerrainToolMaterialProperties($paintContext: PaintContext, $brushXform: BrushTransform, $material: UnityEngine.Material):void;
        /**
         * Releases the allocated resources of the specified PaintContext.
         * @param ctx The PaintContext containing the resources to release.
         */
        public static ReleaseContextResources($ctx: PaintContext):void;
        /**
         * Helper function to set up a PaintContext for modifying the heightmap of one or more Terrain tiles.
         * @param terrain Reference Terrain tile.
         * @param boundsInTerrainSpace The region in terrain space to edit.
         * @param extraBorderPixels Number of extra border pixels required.
         * @returns PaintContext containing the combined heightmap data for the specified region.
         */
        public static BeginPaintHeightmap($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $extraBorderPixels?: number):PaintContext;
        /**
         * Helper function to complete a heightmap modification.
         * @param ctx The heightmap paint context to complete.
         * @param editorUndoName Unique name used for the undo stack.
         */
        public static EndPaintHeightmap($ctx: PaintContext, $editorUndoName: string):void;
        /**
         * Helper function to set up a PaintContext for modifying the Terrain holes of one or more Terrain tiles.
         * @param terrain Reference Terrain tile.
         * @param boundsInTerrainSpace The region in Terrain space to edit.
         * @param extraBorderPixels Number of extra border pixels required.
         * @returns PaintContext that contains the combined Terrain holes data for the specified region.
         */
        public static BeginPaintHoles($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $extraBorderPixels?: number):PaintContext;
        /**
         * Helper function to complete a Terrain holes modification.
         * @param ctx The Terrain holes PaintContext to complete.
         * @param editorUndoName Unique name used for the undo stack.
         */
        public static EndPaintHoles($ctx: PaintContext, $editorUndoName: string):void;
        /**
         * Helper function to set up a PaintContext that collects mesh normal data from one or more Terrain tiles.
         * @param terrain Reference Terrain tile.
         * @param boundsInTerrainSpace The region in terrain space from which to collect normals.
         * @param extraBorderPixels Number of extra border pixels required.
         * @returns PaintContext containing the combined normalmap data for the specified region.
         */
        public static CollectNormals($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $extraBorderPixels?: number):PaintContext;
        /**
         * Helper function to set up a PaintContext for modifying the alphamap of one or more Terrain tiles.
         * @param terrain Reference Terrain tile.
         * @param inputLayer Selects the alphamap to paint.
         * @param boundsInTerrainSpace The region in terrain space to edit.
         * @param extraBorderPixels Number of extra border pixels required.
         * @returns PaintContext containing the combined alphamap data for the specified region.
         */
        public static BeginPaintTexture($terrain: UnityEngine.Terrain, $boundsInTerrainSpace: UnityEngine.Rect, $inputLayer: UnityEngine.TerrainLayer, $extraBorderPixels?: number):PaintContext;
        /**
         * Helper function to complete a texture alphamap modification.
         * @param ctx The texture paint context to complete.
         * @param editorUndoName Unique name used for the undo stack.
         */
        public static EndPaintTexture($ctx: PaintContext, $editorUndoName: string):void;
        /**
         * Returns the default material for blitting operations.
         * @returns Built in "Hidden/BlitCopy" material.
         */
        public static GetBlitMaterial():UnityEngine.Material;
        /**
         * Returns the Material to use when copying the Terrain heightmap.
         * @returns Built in "HiddenTerrainEngineHeightBlitCopy" material.
         */
        public static GetHeightBlitMaterial():UnityEngine.Material;
        /**
         * Returns the default copy terrain layer material.
         * @returns Built in "HiddenTerrainTerrainLayerUtils" material.
         */
        public static GetCopyTerrainLayerMaterial():UnityEngine.Material;
        /**
         * Returns the alphamap texture at mapIndex.
         * @param terrain Terrain tile.
         * @param mapIndex Index to retrieve.
         * @returns Alphamap texture at mapIndex.
         */
        public static GetTerrainAlphaMapChecked($terrain: UnityEngine.Terrain, $mapIndex: number):UnityEngine.Texture2D;
        /**
         * Finds the index of a TerrainLayer in a Terrain tile.
         * @param terrain Terrain tile.
         * @param inputLayer Terrain layer to search for.
         * @returns Returns the index of the terrain layer if it exists or -1 if it doesn't exist.
         */
        public static FindTerrainLayerIndex($terrain: UnityEngine.Terrain, $inputLayer: UnityEngine.TerrainLayer):number;
        
                    
    }
    /**
     * Provides a set of utility functions that are used by the terrain tools.
     */
    class TerrainUtility extends System.Object {
        /**
         * Automatically connects neighboring terrains.
         */
        public static AutoConnect():void;
        
                    
    }
    
}
declare module 'UnityEngine.Experimental.TerrainAPI.PaintContext' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    /**
     * Interface that conveys information about a Terrain within the PaintContext area.
     */
    interface ITerrainInfo {
        
        terrain: UnityEngine.Terrain;
        
        clippedTerrainPixels: UnityEngine.RectInt;
        
        clippedPCPixels: UnityEngine.RectInt;
        
        gatherEnable: boolean;
        
        scatterEnable: boolean;
        
        userData: any;
        
                    
    }
    
}
declare module 'UnityEngine.Experimental.TerrainAPI.TerrainCallbacks' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    /**
     * Use this delegate type with heightmapChanged to monitor all changes to the Terrain heightmap.
     * @param terrain The Terrain object that references a changed TerrainData asset.
     * @param heightRegion The heightmap region that changed, in samples.
     * @param synched Indicates whether the changes were fully synchronized back to CPU memory.
     */
    type HeightmapChangedCallback = (terrain: UnityEngine.Terrain, heightRegion: UnityEngine.RectInt, synched: boolean) => void;
    var HeightmapChangedCallback: {new (func: (terrain: UnityEngine.Terrain, heightRegion: UnityEngine.RectInt, synched: boolean) => void): HeightmapChangedCallback;}
    /**
     * Use this delegate type with textureChanged to monitor all the changes to Terrain textures.
     * @param terrain The Terrain object that references a changed TerrainData asset.
     * @param textureName The name of the texture that changed.
     * @param texelRegion The region of the Terrain texture that changed, in texel coordinates.
     * @param synched Indicates whether the changes were fully synchronized back to CPU memory.
     */
    type TextureChangedCallback = (terrain: UnityEngine.Terrain, textureName: string, texelRegion: UnityEngine.RectInt, synched: boolean) => void;
    var TextureChangedCallback: {new (func: (terrain: UnityEngine.Terrain, textureName: string, texelRegion: UnityEngine.RectInt, synched: boolean) => void): TextureChangedCallback;}
    
}
declare module 'UnityEngine.Experimental.TerrainAPI.TerrainPaintUtility' {

    import * as System from 'System';
        
    /**
     * Enumeration of the render passes in the built-in paint material.
     */
    enum BuiltinPaintMaterialPasses { RaiseLowerHeight = 0, StampHeight = 1, SetHeights = 2, SmoothHeights = 3, PaintTexture = 4, PaintHoles = 5 }
    
}
declare module 'UnityEngine.Experimental.TerrainAPI.TerrainUtility' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Experimental_TerrainAPI_TerrainUtility_TerrainMap from 'UnityEngine.Experimental.TerrainAPI.TerrainUtility.TerrainMap';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Type for mapping 2D (X,Z) tile coordinates to a Terrain object.
     */
    class TerrainMap extends System.Object {
        
        public m_errorCode: UnityEngine_Experimental_TerrainAPI_TerrainUtility_TerrainMap.ErrorCode;
        
        public m_terrainTiles: System_Collections_Generic.Dictionary$2<UnityEngine_Experimental_TerrainAPI_TerrainUtility_TerrainMap.TileCoord, UnityEngine.Terrain>;
        
        public constructor();
        
        public GetTerrain($tileX: number, $tileZ: number):UnityEngine.Terrain;
        
        public static CreateFromConnectedNeighbors($originTerrain: UnityEngine.Terrain, $filter?: UnityEngine_Experimental_TerrainAPI_TerrainUtility_TerrainMap.TerrainFilter, $fullValidation?: boolean):TerrainMap;
        
        public static CreateFromPlacement($originTerrain: UnityEngine.Terrain, $filter?: UnityEngine_Experimental_TerrainAPI_TerrainUtility_TerrainMap.TerrainFilter, $fullValidation?: boolean):TerrainMap;
        
        public static CreateFromPlacement($gridOrigin: UnityEngine.Vector2, $gridSize: UnityEngine.Vector2, $filter?: UnityEngine_Experimental_TerrainAPI_TerrainUtility_TerrainMap.TerrainFilter, $fullValidation?: boolean):TerrainMap;
        
                    
    }
    /**
     * Type for mapping Terrain.groupingID coordinates to TerrainMap.
     */
    class TerrainGroups extends System_Collections_Generic.Dictionary$2<number, UnityEngine_Experimental_TerrainAPI_TerrainUtility.TerrainMap> {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.Experimental.TerrainAPI.TerrainUtility.TerrainMap' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Error states used by the TerrainMap.
     */
    enum ErrorCode { OK = 0, Overlapping = 1, SizeMismatch = 4, EdgeAlignmentMismatch = 8 }
    /**
     * Specifies a set of 2D tile coordinates.
     */
    class TileCoord extends System.ValueType {
        
        public tileX: number;
        
        public tileZ: number;
        
        public constructor($tileX: number, $tileZ: number);
        
        public get_Clone(): TileCoord;            
    }
    /**
     * Terrain map filter.
     * @param terrain Terrain object to apply filter to.
     */
    type TerrainFilter = (terrain: UnityEngine.Terrain) => boolean;
    var TerrainFilter: {new (func: (terrain: UnityEngine.Terrain) => boolean): TerrainFilter;}
    
}

