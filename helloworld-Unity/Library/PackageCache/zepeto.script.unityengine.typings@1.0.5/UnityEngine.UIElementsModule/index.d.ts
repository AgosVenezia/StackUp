//# signature=UnityEngine.UIElementsModule#a952bce68c7f12e604486ca2cd48f3a4#0.0.4
// @ts-nocheck
declare module 'UnityEngine.UIElements' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine_UIElements_VisualElement from 'UnityEngine.UIElements.VisualElement';
    import * as UnityEngine_UIElements_DropdownMenuAction from 'UnityEngine.UIElements.DropdownMenuAction';
    import * as UnityEngine_UIElements_Experimental from 'UnityEngine.UIElements.Experimental';
    import * as UnityEngine_UIElements_VisualElementFocusRing from 'UnityEngine.UIElements.VisualElementFocusRing';
    import * as System_Collections from 'System.Collections';
    import * as UnityEngine_UIElements_ScrollView from 'UnityEngine.UIElements.ScrollView';
    import * as UnityEngine_UIElements_UxmlAttributeDescription from 'UnityEngine.UIElements.UxmlAttributeDescription';
    import * as Unity_Collections from 'Unity.Collections';
        
    /**
     * Element that can be bound to a property.
     */
    class BindableElement extends VisualElement {
        /**
         * Binding object that will be updated.
         */
        public get binding(): IBinding;
        public set binding(value: IBinding);
        /**
         * Path of the target property to be bound.
         */
        public get bindingPath(): string;
        public set bindingPath(value: string);
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Base class for objects that are part of the UIElements visual tree.
     */
    class VisualElement extends Focusable {
        /**
         * USS class name of local disabled elements.
         */
        public static disabledUssClassName: string;
        /**
         * Used for view data persistence (ie. tree expanded states, scroll position, zoom level).
         */
        public get viewDataKey(): string;
        public set viewDataKey(value: string);
        /**
         * This property can be used to associate application-specific user data with this VisualElement.
         */
        public get userData(): any;
        public set userData(value: any);
        
        public get canGrabFocus(): boolean;
        
        public get focusController(): FocusController;
        /**
         * A combination of hint values that specify high-level intended usage patterns for the VisualElement.
         * This property can only be set when the VisualElement is not yet part of a Panel. Once part of a Panel, this property becomes effectively read-only, and attempts to change it will throw an exception.
         * The specification of proper UsageHints drives the system to make better decisions on how to process or accelerate certain operations based on the anticipated usage pattern.
         * Note that those hints do not affect behavioral or visual results, but only affect the overall performance of the panel and the elements within.
         * Generally it advised to always consider specifying the proper UsageHints, but keep in mind that some UsageHints may be internally ignored under certain conditions (e.g. due to hardware limitations on the target platform).
         */
        public get usageHints(): UsageHints;
        public set usageHints(value: UsageHints);
        
        public get transform(): ITransform;
        
        public get layout(): UnityEngine.Rect;
        
        public get contentRect(): UnityEngine.Rect;
        
        public get worldBound(): UnityEngine.Rect;
        
        public get localBound(): UnityEngine.Rect;
        
        public get worldTransform(): UnityEngine.Matrix4x4;
        /**
         * Determines if this element can be pick during mouseEvents or IPanel.Pick queries.
         */
        public get pickingMode(): PickingMode;
        public set pickingMode(value: PickingMode);
        
        public get name(): string;
        public set name(value: string);
        /**
         * Returns true if the VisualElement is enabled in its own hierarchy.
         */
        public get enabledInHierarchy(): boolean;
        /**
         * Returns true if the VisualElement is enabled locally.
         */
        public get enabledSelf(): boolean;
        
        public get visible(): boolean;
        public set visible(value: boolean);
        /**
         * Called when the VisualElement visual contents need to be (re)generated.
         */
        public get generateVisualContent(): System.Action$1<MeshGenerationContext>;
        public set generateVisualContent(value: System.Action$1<MeshGenerationContext>);
        /**
         * Returns the UIElements experimental interfaces.
         */
        public get experimental(): IExperimentalFeatures;
        /**
         * Access to this element physical hierarchy
         */
        public get hierarchy(): UnityEngine_UIElements_VisualElement.Hierarchy;
        
        public get parent(): VisualElement;
        
        public get panel(): IPanel;
        /**
         * child elements are added to this element, usually this
         */
        public get contentContainer(): VisualElement;
        /**
         * Number of child elements in this object's contentContainer
         */
        public get childCount(): number;
        /**
         * Retrieves this VisualElement's IVisualElementScheduler
         */
        public get schedule(): IVisualElementScheduler;
        /**
         * Reference to the style object of this element.
         */
        public get style(): IStyle;
        /**
         * Returns the custom style properties accessor for this element.
         */
        public get customStyle(): ICustomStyle;
        /**
         * Returns a VisualElementStyleSheetSet that manipulates style sheets attached to this element.
         */
        public get styleSheets(): VisualElementStyleSheetSet;
        /**
         * Text to display inside an information box after the user hovers the element for a small amount of time.
         */
        public get tooltip(): string;
        public set tooltip(value: string);
        /**
         * Returns the VisualElement resolved style values.
         */
        public get resolvedStyle(): IResolvedStyle;
        
        public constructor();
        /**
         * Changes the VisualElement enabled state. A disabled VisualElement does not receive most events.
         * @param value New enabled state
         */
        public SetEnabled($value: boolean):void;
        /**
         * Triggers a repaint of the VisualElement on the next frame.
         */
        public MarkDirtyRepaint():void;
        
        public ContainsPoint($localPoint: UnityEngine.Vector2):boolean;
        
        public Overlaps($rectangle: UnityEngine.Rect):boolean;
        
        public ToString():string;
        /**
         * Retrieve the classes for this element.
         * @returns A class list.
         */
        public GetClasses():System_Collections_Generic.IEnumerable$1<string>;
        
        public ClearClassList():void;
        
        public AddToClassList($className: string):void;
        
        public RemoveFromClassList($className: string):void;
        /**
         * Toggles between adding and removing the given class name from the class list.
         * @param className The class name to add or remove from the class list.
         */
        public ToggleInClassList($className: string):void;
        /**
         * Enables or disables the class with the given name.
         * @param className The name of the class to enable or disable.
         * @param enable A boolean flag that adds or removes the class name from the class list. If true, EnableInClassList adds the class name to the class list. If false, EnableInClassList removes the class name from the class list.
         */
        public EnableInClassList($className: string, $enable: boolean):void;
        
        public ClassListContains($cls: string):boolean;
        /**
         * Searchs up the hierachy of this VisualElement and retrieves stored userData, if any is found.
         */
        public FindAncestorUserData():any;
        /**
         * Add an element to this element's contentContainer
         */
        public Add($child: VisualElement):void;
        
        public Insert($index: number, $element: VisualElement):void;
        /**
         * Removes this child from the hierarchy
         */
        public Remove($element: VisualElement):void;
        /**
         * Remove the child element located at this position from this element's contentContainer
         */
        public RemoveAt($index: number):void;
        /**
         * Remove all child elements from this element's contentContainer
         */
        public Clear():void;
        /**
         * Retrieves the child element at position
         */
        public ElementAt($index: number):VisualElement;
        
        public get_Item($key: number):VisualElement;
        /**
         * Retrieves the child index of the specified VisualElement.
         * @param element The child to return the index for.
         * @returns The index of the child, or -1 if the child is not found.
         */
        public IndexOf($element: VisualElement):number;
        /**
         * Returns the elements from its contentContainer
         */
        public Children():System_Collections_Generic.IEnumerable$1<VisualElement>;
        
        public Sort($comp: System.Comparison$1<VisualElement>):void;
        /**
         * Brings this element to the end of its parent children list. The element will be visually in front of any overlapping sibling elements.
         */
        public BringToFront():void;
        /**
         * Sends this element to the beginning of its parent children list. The element will be visually behind any overlapping sibling elements.
         */
        public SendToBack():void;
        /**
         * Places this element right before the sibling element in their parent children list. If the element and the sibling position overlap, the element will be visually behind of its sibling.
         * @param sibling The sibling element.
         */
        public PlaceBehind($sibling: VisualElement):void;
        /**
         * Places this element right after the sibling element in their parent children list. If the element and the sibling position overlap, the element will be visually in front of its sibling.
         * @param sibling The sibling element.
         */
        public PlaceInFront($sibling: VisualElement):void;
        /**
         * Removes this element from its parent hierarchy
         */
        public RemoveFromHierarchy():void;
        /**
         * Walks up the hierarchy, starting from this element, and returns the first VisualElement of this type
         */
        public GetFirstOfType<T>():T;
        /**
         * Walks up the hierarchy, starting from this element's parent, and returns the first VisualElement of this type
         */
        public GetFirstAncestorOfType<T>():T;
        /**
         * Returns true if the element is a direct child of this VisualElement
         */
        public Contains($child: VisualElement):boolean;
        /**
         * Finds the lowest commont ancestor between two VisualElements inside the VisualTree hierarchy
         */
        public FindCommonAncestor($other: VisualElement):VisualElement;
        
                    
    }
    /**
     * Base class for objects that can get the focus.
     */
    class Focusable extends CallbackEventHandler {
        /**
         * Return the focus controller for this element.
         */
        public get focusController(): FocusController;
        /**
         * True if the element can be focused.
         */
        public get focusable(): boolean;
        public set focusable(value: boolean);
        /**
         * An integer used to sort focusables in the focus ring. Must be greater than or equal to zero.
         */
        public get tabIndex(): number;
        public set tabIndex(value: number);
        /**
         * Whether the element should delegate the focus to its children.
         */
        public get delegatesFocus(): boolean;
        public set delegatesFocus(value: boolean);
        /**
         * Return true if the element can be focused.
         */
        public get canGrabFocus(): boolean;
        /**
         * Attempt to give the focus to this element.
         */
        public Focus():void;
        /**
         * Tell the element to release the focus.
         */
        public Blur():void;
        
                    
    }
    /**
     * Interface for classes capable of having callbacks to handle events.
     */
    class CallbackEventHandler extends System.Object {
        
        public RegisterCallback<TEventType>($callback: EventCallback$1<TEventType>, $useTrickleDown?: TrickleDown):void;
        
        public RegisterCallback<TEventType,TUserArgsType>($callback: EventCallback$2<TEventType, TUserArgsType>, $userArgs: TUserArgsType, $useTrickleDown?: TrickleDown):void;
        
        public UnregisterCallback<TEventType>($callback: EventCallback$1<TEventType>, $useTrickleDown?: TrickleDown):void;
        
        public UnregisterCallback<TEventType,TUserArgsType>($callback: EventCallback$2<TEventType, TUserArgsType>, $useTrickleDown?: TrickleDown):void;
        /**
         * Sends an event to the event handler.
         * @param e The event to send.
         */
        public SendEvent($e: EventBase):void;
        /**
         * Handle an event, most often by executing the callbacks associated with the event.
         * @param evt The event to handle.
         */
        public HandleEvent($evt: EventBase):void;
        /**
         * Returns true if event handlers, for the event propagation TrickleDown phase, are attached to this object.
         * @returns True if object has event handlers for the TrickleDown phase.
         */
        public HasTrickleDownHandlers():boolean;
        /**
         * Return true if event handlers for the event propagation BubbleUp phase have been attached on this object.
         * @returns True if object has event handlers for the BubbleUp phase.
         */
        public HasBubbleUpHandlers():boolean;
        
                    
    }
    /**
     * Base interface for Binding objects.
     */
    interface IBinding {
        /**
         * Called at regular intervals to synchronize bound properties to their IBindable counterparts. Called before the Update() method.
         */
        PreUpdate():void;
        /**
         * Called at regular intervals to synchronize bound properties to their IBindable counterparts.
         */
        Update():void;
        /**
         * Disconnects the field from its bound property
         */
        Release():void;
        
                    
    }
    /**
     * Describes a VisualElement derived class for the parsing of UXML files and the generation of UXML schema definition.
     */
    class UxmlTraits extends System.Object {
        /**
         * Must return true if the UXML element attributes are not restricted to the values enumerated by uxmlAttributesDescription.
         */
        public get canHaveAnyAttribute(): boolean;
        /**
         * Describes the UXML attributes expected by the element. The attributes enumerated here will appear in the UXML schema.
         */
        public get uxmlAttributesDescription(): System_Collections_Generic.IEnumerable$1<UxmlAttributeDescription>;
        /**
         * Describes the types of element that can appear as children of this element in a UXML file.
         */
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UxmlChildElementDescription>;
        /**
         * Initialize a VisualElement instance with values from the UXML element attributes.
         * @param ve The VisualElement to initialize.
         * @param bag A bag of name-value pairs, one for each attribute of the UXML element.
         * @param cc When the element is created as part of a template instance inserted in another document, this contains information about the insertion point.
         */
        public Init($ve: VisualElement, $bag: IUxmlAttributes, $cc: CreationContext):void;
        
                    
    }
    /**
     * Generic base class for UXML factories, which instantiate a VisualElement using the data read from a UXML file.
     */
    interface UxmlFactory$2<TCreatedType,TTraits> extends System.Object {
        
                    
    }
    /**
     * This type allows UXML attribute value retrieval during the VisualElement instantiation. An instance will be provided to the factory method - see UXMLFactoryAttribute.
     */
    interface IUxmlAttributes {
        /**
         * Get the value of an attribute as a string.
         * @param attributeName Attribute name.
         * @param value The attribute value or null if not found.
         * @returns True if the attribute was found, false otherwise.
         */
        TryGetAttributeValue($attributeName: string, $value: $Ref<string>):boolean;
        
                    
    }
    /**
     * This class is used during UXML template instantiation.
     */
    class CreationContext extends System.ValueType {
        
        public static Default: CreationContext;
        
        public get target(): VisualElement;
        
        public get visualTreeAsset(): VisualTreeAsset;
        
        public get slotInsertionPoints(): System_Collections_Generic.Dictionary$2<string, VisualElement>;
        
        public Equals($obj: any):boolean;
        
        public Equals($other: CreationContext):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($context1: CreationContext, $context2: CreationContext):boolean;
        
        public static op_Inequality($context1: CreationContext, $context2: CreationContext):boolean;
        
                    
    }
    /**
     * Manipulator that tracks Mouse events on an element and callbacks when the elements is clicked.
     */
    class Clickable extends PointerManipulator {
        /**
         * Specifies the mouse position saved during the last mouse event on the target Element.
         */
        public get lastMousePosition(): UnityEngine.Vector2;
        /**
         * Constructor.
         */
        public constructor($handler: System.Action, $delay: bigint, $interval: bigint);
        
        public constructor($handler: System.Action$1<EventBase>);
        /**
         * Constructor.
         */
        public constructor($handler: System.Action);
        
        public add_clickedWithEventInfo($value: System.Action$1<EventBase>):void;
        
        public remove_clickedWithEventInfo($value: System.Action$1<EventBase>):void;
        
        public add_clicked($value: System.Action):void;
        
        public remove_clicked($value: System.Action):void;
        
        public clickedWithEventInfo;
        /**
         * Callback triggerred when the target element is clicked.
         */
        public clicked;
        
                    
    }
    /**
     * PointerManipulators have a list of activation filters.
     */
    class PointerManipulator extends MouseManipulator {
        
                    
    }
    /**
     * MouseManipulators have a list of activation filters.
     */
    class MouseManipulator extends Manipulator {
        /**
         * List of Activationfilters.
         */
        public get activators(): System_Collections_Generic.List$1<ManipulatorActivationFilter>;
        
                    
    }
    /**
     * Base class for all Manipulator implementations.
     */
    class Manipulator extends System.Object {
        /**
         * VisualElement being manipulated.
         */
        public get target(): VisualElement;
        public set target(value: VisualElement);
        
                    
    }
    /**
     * The base class for all UIElements events.
     */
    class EventBase extends System.Object {
        /**
         * Retrieves the type ID for this event instance.
         */
        public get eventTypeId(): bigint;
        /**
         * The time when the event was created.
         */
        public get timestamp(): bigint;
        /**
         * Whether this event type bubbles up in the event propagation path.
         */
        public get bubbles(): boolean;
        /**
         * Whether this event is sent down the event propagation path during the TrickleDown phase.
         */
        public get tricklesDown(): boolean;
        /**
         * The target visual element that received this event. Unlike currentTarget, this target does not change when the event is sent to other elements along the propagation path.
         */
        public get target(): IEventHandler;
        public set target(value: IEventHandler);
        /**
         * Whether StopPropagation() was called for this event.
         */
        public get isPropagationStopped(): boolean;
        /**
         * Whether StopImmediatePropagation() was called for this event.
         */
        public get isImmediatePropagationStopped(): boolean;
        /**
         * Return true if the default actions should not be executed for this event.
         */
        public get isDefaultPrevented(): boolean;
        /**
         * The current propagation phase.
         */
        public get propagationPhase(): PropagationPhase;
        /**
         * The current target of the event. This is the VisualElement, in the propagation path, for which event handlers are currently being executed.
         */
        public get currentTarget(): IEventHandler;
        /**
         * Whether the event is being dispatched to a visual element. An event cannot be redispatched while it being dispatched. If you need to recursively dispatch an event, it is recommended that you use a copy of the event.
         */
        public get dispatch(): boolean;
        /**
         * The IMGUIEvent at the source of this event. The source can be null since not all events are generated by IMGUI.
         */
        public get imguiEvent(): UnityEngine.Event;
        /**
         * The original mouse position of the IMGUI event, before it is transformed to the current target local coordinates.
         */
        public get originalMousePosition(): UnityEngine.Vector2;
        /**
         * Stops propagating this event. The event is not sent to other elements along the propagation path. This method does not prevent other event handlers from executing on the current target.
         */
        public StopPropagation():void;
        /**
         * Immediately stops the propagation of the event. The event is not sent to other elements along the propagation path. This method prevents other event handlers from executing on the current target.
         */
        public StopImmediatePropagation():void;
        /**
         * Whether the default actions are prevented from being executed for this event.
         */
        public PreventDefault():void;
        /**
         * Implementation of IDisposable.
         */
        public Dispose():void;
        
                    
    }
    /**
     * Use this class to display a contextual menu.
     */
    class ContextualMenuManager extends System.Object {
        /**
         * Checks if the event triggers the display of the contextual menu. This method also displays the menu.
         * @param eventHandler The element for which the menu is displayed.
         * @param evt The event to inspect.
         */
        public DisplayMenuIfEventMatches($evt: EventBase, $eventHandler: IEventHandler):void;
        /**
         * Displays the contextual menu.
         * @param triggerEvent The event that triggered the display of the menu.
         * @param target The element for which the menu is displayed.
         */
        public DisplayMenu($triggerEvent: EventBase, $target: IEventHandler):void;
        
                    
    }
    /**
     * Interface for class capable of handling events.
     */
    interface IEventHandler {
        /**
         * Sends an event to the event handler.
         * @param e The event to send.
         */
        SendEvent($e: EventBase):void;
        /**
         * Handle an event.
         * @param evt The event to handle.
         */
        HandleEvent($evt: EventBase):void;
        /**
         * Returns true if event handlers, for the event propagation TrickleDown phase, are attached to this object.
         * @returns True if the object already has event handlers for the TrickleDown phase.
         */
        HasTrickleDownHandlers():boolean;
        /**
         * Return true if event handlers for the event propagation BubbleUp phase have been attached on this object.
         * @returns True if object has event handlers for the BubbleUp phase.
         */
        HasBubbleUpHandlers():boolean;
        
                    
    }
    /**
     * Manipulator that displays a contextual menu when the user clicks the right mouse button or presses the menu key on the keyboard.
     */
    class ContextualMenuManipulator extends MouseManipulator {
        
        public constructor($menuBuilder: System.Action$1<ContextualMenuPopulateEvent>);
        
                    
    }
    /**
     * The event sent when a contextual menu requires menu items.
     */
    class ContextualMenuPopulateEvent extends MouseEventBase$1<ContextualMenuPopulateEvent> {
        /**
         * The menu to populate.
         */
        public get menu(): DropdownMenu;
        /**
         * The event that triggered the ContextualMenuPopulateEvent.
         */
        public get triggerEvent(): EventBase;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param triggerEvent The event that triggered the display of the contextual menu.
         * @param menu The menu to populate.
         * @param target The element that triggered the display of the contextual menu.
         * @param menuManager The menu manager that displays the menu.
         * @returns An initialized event.
         */
        public static GetPooled($triggerEvent: EventBase, $menu: DropdownMenu, $target: IEventHandler, $menuManager: ContextualMenuManager):ContextualMenuPopulateEvent;
        
                    
    }
    /**
     * The base class for mouse events.
     */
    interface MouseEventBase$1<T> extends EventBase$1<T> {
        
                    
    }
    /**
     * Generic base class for events, implementing event pooling and automatic registration to the event type system.
     */
    interface EventBase$1<T> extends EventBase {
        
                    
    }
    /**
     * Script interface for VisualElement cursor style property IStyle.cursor.
     */
    class Cursor extends System.ValueType {
        /**
         * The texture to use for the cursor style. To use a texture as a cursor, import the texture with "Read/Write enabled" in the texture importer (or using the "Cursor" defaults).
         */
        public get texture(): UnityEngine.Texture2D;
        public set texture(value: UnityEngine.Texture2D);
        /**
         * The offset from the top left of the texture to use as the target point (must be within the bounds of the cursor).
         */
        public get hotspot(): UnityEngine.Vector2;
        public set hotspot(value: UnityEngine.Vector2);
        
        public Equals($obj: any):boolean;
        
        public Equals($other: Cursor):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($style1: Cursor, $style2: Cursor):boolean;
        
        public static op_Inequality($style1: Cursor, $style2: Cursor):boolean;
        
        public ToString():string;
        
                    
    }
    /**
     * This class provides information about the event that triggered displaying the drop-down menu.
     */
    class DropdownMenuEventInfo extends System.Object {
        /**
         * If modifier keys (Alt, Ctrl, Shift, Windows/Command) were pressed to trigger the display of the dropdown menu, this property lists the modifier keys.
         */
        public get modifiers(): UnityEngine.EventModifiers;
        /**
         * If the triggering event was a mouse event, this property is the mouse position expressed using the global coordinate system. Otherwise this property is zero.
         */
        public get mousePosition(): UnityEngine.Vector2;
        /**
         * If the triggering event was a mouse event, this property is the mouse position. The position is expressed using the coordinate system of the element that received the mouse event. Otherwise this property is zero.
         */
        public get localMousePosition(): UnityEngine.Vector2;
        /**
         * Constructor.
         */
        public constructor($e: EventBase);
        
                    
    }
    /**
     * An item in a drop-down menu.
     */
    class DropdownMenuItem extends System.Object {
        
                    
    }
    /**
     * A separator menu item.
     */
    class DropdownMenuSeparator extends DropdownMenuItem {
        /**
         * The submenu path where the separator will be added. Path components are delimited by forward slashes ('/').
         */
        public get subMenuPath(): string;
        /**
         * Constructor.
         * @param subMenuPath The path for the submenu. Path components are delimited by forward slashes ('/').
         */
        public constructor($subMenuPath: string);
        
                    
    }
    /**
     * A menu action item.
     */
    class DropdownMenuAction extends DropdownMenuItem {
        /**
         * The name of the item. The name can be prefixed by its submenu path. Path components are delimited by forward slashes ('/').
         */
        public get name(): string;
        /**
         * The status of the item.
         */
        public get status(): UnityEngine_UIElements_DropdownMenuAction.Status;
        /**
         * Provides information on the event that triggered the drop-down menu.
         */
        public get eventInfo(): DropdownMenuEventInfo;
        /**
         * The userData object stored by the constructor.
         */
        public get userData(): any;
        
        public constructor($actionName: string, $actionCallback: System.Action$1<DropdownMenuAction>, $actionStatusCallback: System.Func$2<DropdownMenuAction, UnityEngine_UIElements_DropdownMenuAction.Status>, $userData?: any);
        /**
         * Status callback that always returns Status.Enabled.
         * @param a Unused parameter.
         * @returns Always return Status.Enabled.
         */
        public static AlwaysEnabled($a: DropdownMenuAction):UnityEngine_UIElements_DropdownMenuAction.Status;
        /**
         * Status callback that always returns Status.Disabled.
         * @param a Unused parameter.
         * @returns Always return Status.Disabled.
         */
        public static AlwaysDisabled($a: DropdownMenuAction):UnityEngine_UIElements_DropdownMenuAction.Status;
        /**
         * Update the status flag of this item by calling the item status callback.
         * @param eventInfo Information about the event that triggered the display of the drop-down menu, such as the mouse position or the key pressed.
         */
        public UpdateActionStatus($eventInfo: DropdownMenuEventInfo):void;
        /**
         * Execute the callback associated with this item.
         */
        public Execute():void;
        
                    
    }
    /**
     * A drop-down menu.
     */
    class DropdownMenu extends System.Object {
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Get the list of menu items.
         * @returns The list of items in the menu.
         */
        public MenuItems():System_Collections_Generic.List$1<DropdownMenuItem>;
        
        public AppendAction($actionName: string, $action: System.Action$1<DropdownMenuAction>, $actionStatusCallback: System.Func$2<DropdownMenuAction, UnityEngine_UIElements_DropdownMenuAction.Status>, $userData?: any):void;
        
        public AppendAction($actionName: string, $action: System.Action$1<DropdownMenuAction>, $status?: UnityEngine_UIElements_DropdownMenuAction.Status):void;
        
        public InsertAction($atIndex: number, $actionName: string, $action: System.Action$1<DropdownMenuAction>, $actionStatusCallback: System.Func$2<DropdownMenuAction, UnityEngine_UIElements_DropdownMenuAction.Status>, $userData?: any):void;
        
        public InsertAction($atIndex: number, $actionName: string, $action: System.Action$1<DropdownMenuAction>, $status?: UnityEngine_UIElements_DropdownMenuAction.Status):void;
        /**
         * Add a separator line in the menu. The separator is added at the end of the current item list.
         * @param subMenuPath The submenu path where the separator will be added. Path components are delimited by forward slashes ('/').
         */
        public AppendSeparator($subMenuPath?: string):void;
        /**
         * Add a separator line in the menu. The separator is added at the end of the specified index in the list.
         * @param atIndex Index where the separator should be inserted.
         * @param subMenuPath The submenu path where the separator is added. Path components are delimited by forward slashes ('/').
         */
        public InsertSeparator($subMenuPath: string, $atIndex: number):void;
        /**
         * Remove the menu item at index.
         * @param index The index of the item to remove.
         */
        public RemoveItemAt($index: number):void;
        /**
         * Update the status of all items by calling their status callback and remove the separators in excess. This is called just before displaying the menu.
         */
        public PrepareForDisplay($e: EventBase):void;
        
                    
    }
    /**
     * Gates control when the dispatcher processes events.
     */
    class EventDispatcherGate extends System.ValueType {
        /**
         * Constructor.
         * @param d The dispatcher controlled by this gate.
         */
        public constructor($d: EventDispatcher);
        /**
         * Implementation of IDisposable.Dispose. Opens the gate. If all gates are open, events in the queue are processed.
         */
        public Dispose():void;
        
        public Equals($other: EventDispatcherGate):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($left: EventDispatcherGate, $right: EventDispatcherGate):boolean;
        
        public static op_Inequality($left: EventDispatcherGate, $right: EventDispatcherGate):boolean;
        
                    
    }
    /**
     * Dispatches events to a IPanel.
     */
    class EventDispatcher extends System.Object {
        
                    
    }
    /**
     * Class in charge of managing the focus inside a Panel.
     */
    class FocusController extends System.Object {
        /**
         * The currently focused VisualElement.
         */
        public get focusedElement(): Focusable;
        
        public constructor($focusRing: IFocusRing);
        
                    
    }
    /**
     * Base class for defining in which direction the focus moves in a focus ring.
     */
    class FocusChangeDirection extends System.Object {
        /**
         * Focus came from an unspecified direction, for example after a mouse down.
         */
        public static get unspecified(): FocusChangeDirection;
        /**
         * The null direction. This is usually used when the focus stays on the same element.
         */
        public static get none(): FocusChangeDirection;
        
        public static op_Implicit($fcd: FocusChangeDirection):number;
        
                    
    }
    /**
     * Interface for classes implementing focus rings.
     */
    interface IFocusRing {
        /**
         * Get the direction of the focus change for the given event. For example, when the Tab key is pressed, focus should be given to the element to the right.
         */
        GetFocusChangeDirection($currentFocusable: Focusable, $e: EventBase):FocusChangeDirection;
        /**
         * Get the next element in the given direction.
         */
        GetNextFocusable($currentFocusable: Focusable, $direction: FocusChangeDirection):Focusable;
        
                    
    }
    /**
     * Element that draws IMGUI content.
     */
    class IMGUIContainer extends VisualElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * The function that is called to render and handle IMGUI events.
         */
        public get onGUIHandler(): System.Action;
        public set onGUIHandler(value: System.Action);
        /**
         * When this property is set to true, onGUIHandler is not called when the Element is outside the viewport.
         */
        public get cullingEnabled(): boolean;
        public set cullingEnabled(value: boolean);
        /**
         * ContextType of this IMGUIContrainer. Currently only supports ContextType.Editor.
         */
        public get contextType(): ContextType;
        public set contextType(value: ContextType);
        
        public get canGrabFocus(): boolean;
        /**
         * Constructor.
         * @param onGUIHandler The function assigned to onGUIHandler.
         */
        public constructor();
        /**
         * Constructor.
         * @param onGUIHandler The function assigned to onGUIHandler.
         */
        public constructor($onGUIHandler: System.Action);
        /**
         * Marks layout as dirty to trigger a redraw.
         */
        public MarkDirtyLayout():void;
        
        public Dispose():void;
        
                    
    }
    /**
     * Describes in which context a VisualElement hierarchy is being ran.
     */
    enum ContextType { Player = 0, Editor = 1 }
    /**
     * Describe an allowed child element for an element.
     */
    class UxmlChildElementDescription extends System.Object {
        /**
         * The name of the allowed child element.
         */
        public get elementName(): string;
        /**
         * The namespace name of the allowed child element.
         */
        public get elementNamespace(): string;
        /**
         * Constructor.
         */
        public constructor($t: System.Type);
        
                    
    }
    /**
     * This interface provides access to a VisualElement transform data.
     */
    interface ITransform {
        /**
         * The position of the VisualElement's transform.
         */
        position: UnityEngine.Vector3;
        /**
         * The rotation of the VisualElement's transform stored as a Quaternion.
         */
        rotation: UnityEngine.Quaternion;
        /**
         * The scale of the VisualElement's transform.
         */
        scale: UnityEngine.Vector3;
        /**
         * Transformation matrix calculated from the position, rotation and scale of the transform (Read Only).
         */
        matrix: UnityEngine.Matrix4x4;
        
                    
    }
    /**
     * VisualElement that can implement custom immediate mode rendering.
     */
    class ImmediateModeElement extends VisualElement {
        /**
         * When this property is set to true, the Element does not repaint itself when it is outside the viewport.
         */
        public get cullingEnabled(): boolean;
        public set cullingEnabled(value: boolean);
        
                    
    }
    /**
     * Controls how many items can be selected at once.
     */
    enum SelectionType { None = 0, Single = 1, Multiple = 2 }
    /**
     * Used by manipulators to match events against their requirements.
     */
    class ManipulatorActivationFilter extends System.ValueType {
        /**
         * The button that activates the manipulation.
         */
        public get button(): MouseButton;
        public set button(value: MouseButton);
        /**
         * Any modifier keys (ie. ctrl, alt, ...) that are needed to activate the manipulation.
         */
        public get modifiers(): UnityEngine.EventModifiers;
        public set modifiers(value: UnityEngine.EventModifiers);
        /**
         * Number of mouse clicks required to activate the manipulator.
         */
        public get clickCount(): number;
        public set clickCount(value: number);
        
        public Equals($obj: any):boolean;
        
        public Equals($other: ManipulatorActivationFilter):boolean;
        
        public GetHashCode():number;
        /**
         * Checks whether the current mouse event satisfies the activation requirements.
         * @param e The mouse event.
         * @returns True if the event matches the requirements. False otherwise.
         */
        public Matches($e: IMouseEvent):boolean;
        /**
         * Checks whether the current pointer event satisfies the activation requirements.
         * @param e The pointer event.
         * @returns True if the event matches the requirements. False otherwise.
         */
        public Matches($e: IPointerEvent):boolean;
        
        public static op_Equality($filter1: ManipulatorActivationFilter, $filter2: ManipulatorActivationFilter):boolean;
        
        public static op_Inequality($filter1: ManipulatorActivationFilter, $filter2: ManipulatorActivationFilter):boolean;
        
        public get_Clone(): ManipulatorActivationFilter;            
    }
    /**
     * Describes a MouseButton.
     */
    enum MouseButton { LeftMouse = 0, RightMouse = 1, MiddleMouse = 2 }
    /**
     * Interface for mouse events.
     */
    interface IMouseEvent {
        /**
         * Flag set holding the pressed modifier keys (Alt, Ctrl, Shift, Windows/Command).
         */
        modifiers: UnityEngine.EventModifiers;
        /**
         * The mouse position in the panel coordinate system.
         */
        mousePosition: UnityEngine.Vector2;
        /**
         * The mouse position in the current target coordinate system.
         */
        localMousePosition: UnityEngine.Vector2;
        /**
         * Mouse position difference between the last mouse event and this one.
         */
        mouseDelta: UnityEngine.Vector2;
        /**
         * The number of times the button is pressed.
         */
        clickCount: number;
        /**
         * Integer that indicates which mouse button is pressed: 0 is the left button, 1 is the right button, 2 is the middle button.
         */
        button: number;
        /**
         * A bitmask that describes the currently pressed buttons.
         */
        pressedButtons: number;
        /**
         * Return true if the Shift key is pressed.
         */
        shiftKey: boolean;
        /**
         * Return true if the Ctrl key is pressed.
         */
        ctrlKey: boolean;
        /**
         * Return true if the Windows/Command key is pressed.
         */
        commandKey: boolean;
        /**
         * Return true if the Alt key is pressed.
         */
        altKey: boolean;
        /**
         * Returns true if the platform-specific action key is pressed. This key is Cmd on macOS, and Ctrl on all other platforms.
         */
        actionKey: boolean;
        
                    
    }
    /**
     * Interface for pointer events.
     */
    interface IPointerEvent {
        /**
         * Identifies the pointer that sends the event.
         */
        pointerId: number;
        /**
         * The type of pointer that created this event. This value is taken from the value defined in `PointerType`.
         */
        pointerType: string;
        /**
         * Returns true if the pointer is a primary pointer
         */
        isPrimary: boolean;
        /**
         * Integer that indicates which mouse button is pressed: 0 is the left button, 1 is the right button, 2 is the middle button.
         */
        button: number;
        /**
         * A bitmask that describes the currently pressed buttons.
         */
        pressedButtons: number;
        /**
         * The pointer position in the Screen or World coordinate system.
         */
        position: UnityEngine.Vector3;
        /**
         * The pointer position in the current target coordinate system.
         */
        localPosition: UnityEngine.Vector3;
        /**
         * The difference between the pointer's position during the previous mouse event and its position during the current mouse event.
         */
        deltaPosition: UnityEngine.Vector3;
        /**
         * The amount of time that has passed since the last recorded change in pointer values, in seconds.
         */
        deltaTime: number;
        /**
         * The number of times the button is pressed.
         */
        clickCount: number;
        /**
         * The amount of pressure currently applied by a touch. If the device does not report pressure, the value of this property is 1.0f.
         */
        pressure: number;
        /**
         * The pressure applied to an additional pressure-sensitive control on the stylus.
         */
        tangentialPressure: number;
        /**
         * Angle of the stylus relative to the surface, in radians
         */
        altitudeAngle: number;
        /**
         * Angle of the stylus relative to the x-axis, in radians.
         */
        azimuthAngle: number;
        /**
         * The rotation of the stylus around its axis, in radians.
         */
        twist: number;
        /**
         * An estimate of the radius of a touch. Add `radiusVariance` to get the maximum touch radius, subtract it to get the minimum touch radius.
         */
        radius: UnityEngine.Vector2;
        /**
         * Determines the accuracy of the touch radius. Add this value to the radius to get the maximum touch radius, subtract it to get the minimum touch radius.
         */
        radiusVariance: UnityEngine.Vector2;
        /**
         * Flags that hold pressed modifier keys (Alt, Ctrl, Shift, Windows/Cmd).
         */
        modifiers: UnityEngine.EventModifiers;
        /**
         * Returns true if the Shift key is pressed.
         */
        shiftKey: boolean;
        /**
         * Returns true if the Ctrl key is pressed.
         */
        ctrlKey: boolean;
        /**
         * Returns true if the Windows/Cmd key is pressed.
         */
        commandKey: boolean;
        /**
         * Returns true if the Alt key is pressed.
         */
        altKey: boolean;
        /**
         * Returns true if the platform-specific action key is pressed. This key is Cmd on macOS, and Ctrl on all other platforms.
         */
        actionKey: boolean;
        
                    
    }
    /**
     * Interface for Manipulator objects.
     */
    interface IManipulator {
        /**
         * VisualElement being manipulated.
         */
        target: VisualElement;
        
                    
    }
    /**
     * Class that manages capturing mouse events.
     */
    class MouseCaptureController extends System.Object {
        /**
         * Checks if there is a handler capturing the mouse.
         * @returns True if a handler is capturing the mouse, false otherwise.
         */
        public static IsMouseCaptured():boolean;
        /**
         * Checks if the event handler is capturing the mouse.
         * @param handler Event handler to check.
         * @returns True if the handler captures the mouse.
         */
        public static HasMouseCapture($handler: IEventHandler):boolean;
        /**
         * Assigns an event handler to capture mouse events.
         * @param handler The event handler that captures mouse events.
         */
        public static CaptureMouse($handler: IEventHandler):void;
        /**
         * Stops an event handler from capturing the mouse.
         * @param handler The event handler to stop capturing the mouse. If this handler is not assigned to capturing the mouse, nothing happens.
         */
        public static ReleaseMouse($handler: IEventHandler):void;
        /**
         * Stops an event handler from capturing the mouse.
         * @param handler The event handler to stop capturing the mouse. If this handler is not assigned to capturing the mouse, nothing happens.
         */
        public static ReleaseMouse():void;
        
                    
    }
    /**
     * Offers a set of values that describe the intended usage patterns of a specific VisualElement.
     */
    enum UsageHints { None = 0, DynamicTransform = 1, GroupTransform = 2 }
    /**
     * Interface for classes implementing UI panels.
     */
    interface IPanel {
        /**
         * Root of the VisualElement hierarchy.
         */
        visualTree: VisualElement;
        /**
         * This Panel EventDispatcher.
         */
        dispatcher: EventDispatcher;
        /**
         * Describes in which context a VisualElement hierarchy is being ran.
         */
        contextType: ContextType;
        /**
         * Return the focus controller for this panel.
         */
        focusController: FocusController;
        /**
         * The Contextual menu manager for the panel.
         */
        contextualMenuManager: ContextualMenuManager;
        /**
         * Returns the top element at this position. Will not return elements with pickingMode set to PickingMode.Ignore.
         * @param point World coordinates.
         * @returns Top VisualElement at the position. Null if none was found.
         */
        Pick($point: UnityEngine.Vector2):VisualElement;
        
        PickAll($point: UnityEngine.Vector2, $picked: System_Collections_Generic.List$1<VisualElement>):VisualElement;
        
                    
    }
    /**
     * A static class to capture and release pointers.
     */
    class PointerCaptureHelper extends System.Object {
        /**
         * Tests whether the element has captured the pointer.
         * @param handler The VisualElement being tested.
         * @param pointerId The captured pointer.
         * @returns True if element captured the pointer.
         */
        public static HasPointerCapture($handler: IEventHandler, $pointerId: number):boolean;
        /**
         * Captures the pointer.
         * @param handler The VisualElement that captures the pointer.
         * @param pointerId The pointer to capture.
         */
        public static CapturePointer($handler: IEventHandler, $pointerId: number):void;
        /**
         * Tests whether an element captured a pointer and, if so, tells the element to release the pointer.
         * @param handler The element which potentially captured the pointer.
         * @param pointerId The captured pointer.
         */
        public static ReleasePointer($handler: IEventHandler, $pointerId: number):void;
        /**
         * Returns the element that is capturing the pointer.
         * @param panel The panel that holds the element.
         * @param pointerId The captured pointer.
         * @returns The element that is capturing the pointer.
         */
        public static GetCapturingElement($panel: IPanel, $pointerId: number):IEventHandler;
        /**
         * Releases the pointer.
         * @param panel The panel that holds the element that captured the pointer.
         * @param pointerId The captured pointer.
         */
        public static ReleasePointer($panel: IPanel, $pointerId: number):void;
        
                    
    }
    /**
     * Contains timing information of scheduler events.
     */
    class TimerState extends System.ValueType {
        /**
         * Start time in milliseconds, or last callback time for repeatable IScheduledItem.
         */
        public get start(): bigint;
        public set start(value: bigint);
        /**
         * Current time in milliseconds.
         */
        public get now(): bigint;
        public set now(value: bigint);
        /**
         * Time difference in milliseconds between now and the previous callback.
         */
        public get deltaTime(): bigint;
        /**
         * Compare this object with another object and return true if they are equal.
         * @param obj The object to compare with.
         * @param other The object to compare with.
         * @returns True if the objects are equal.
         */
        public Equals($obj: any):boolean;
        /**
         * Compare this object with another object and return true if they are equal.
         * @param obj The object to compare with.
         * @param other The object to compare with.
         * @returns True if the objects are equal.
         */
        public Equals($other: TimerState):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($state1: TimerState, $state2: TimerState):boolean;
        
        public static op_Inequality($state1: TimerState, $state2: TimerState):boolean;
        
        public get_Clone(): TimerState;            
    }
    /**
     * Defaines how the position values are interpreted by the layout engine.
     */
    enum Position { Relative = 0, Absolute = 1 }
    /**
     * Defines what should happend if content overflows an element bounds.
     */
    enum Overflow { Visible = 0, Hidden = 1 }
    /**
     * Boxes against which the VisualElement content is clipped.
     */
    enum OverflowClipBox { PaddingBox = 0, ContentBox = 1 }
    /**
     * Defines the main-axis of the flex layout.
     */
    enum FlexDirection { Column = 0, ColumnReverse = 1, Row = 2, RowReverse = 3 }
    /**
     * By default, items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
     */
    enum Wrap { NoWrap = 0, Wrap = 1, WrapReverse = 2 }
    /**
     * Defines the alignement behavior along an axis.
     */
    enum Align { Auto = 0, FlexStart = 1, Center = 2, FlexEnd = 3, Stretch = 4 }
    /**
     * Defines the alignment along the main axis, how is extra space distributed.
     */
    enum Justify { FlexStart = 0, Center = 1, FlexEnd = 2, SpaceBetween = 3, SpaceAround = 4 }
    /**
     * Specifies which part of the text the Element replaces with an ellipsis when textOverflow is set to TextOverflow.Ellipsis.
     */
    enum TextOverflowPosition { End = 0, Start = 1, Middle = 2 }
    /**
     * Specifies how the text Element treats hidden overflow content.
     */
    enum TextOverflow { Clip = 0, Ellipsis = 1 }
    /**
     * Specifies whether or not a VisualElement is visible.
     */
    enum Visibility { Visible = 0, Hidden = 1 }
    /**
     * Word wrapping over multiple lines if not enough space is available to draw the text of an element.
     */
    enum WhiteSpace { Normal = 0, NoWrap = 1 }
    /**
     * Defines how an element is displayed in the layout.
     */
    enum DisplayStyle { Flex = 0, None = 1 }
    /**
     * Template Container.
     */
    class TemplateContainer extends BindableElement {
        
        public get templateId(): string;
        
        public get contentContainer(): VisualElement;
        
        public constructor();
        
        public constructor($templateId: string);
        
                    
    }
    /**
     * Abstract base class for VisualElement containing text.
     */
    class TextElement extends BindableElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * The text associated with the element.
         */
        public get text(): string;
        public set text(value: string);
        /**
         * When true, a tooltip displays the full version of elided text.
         */
        public get displayTooltipWhenElided(): boolean;
        public set displayTooltipWhenElided(value: boolean);
        /**
         * Returns true if text is elided, false otherwise.
         */
        public get isElided(): boolean;
        
        public constructor();
        /**
         * Computes the size needed to display a text string based on element style values such as font, font-size, word-wrap, and so on.
         * @param textToMeasure The text to measure.
         * @param width Suggested width. Can be zero.
         * @param widthMode Width restrictions.
         * @param height Suggested height.
         * @param heightMode Height restrictions.
         * @returns The horizontal and vertical size needed to display the text string.
         */
        public MeasureTextSize($textToMeasure: string, $width: number, $widthMode: UnityEngine_UIElements_VisualElement.MeasureMode, $height: number, $heightMode: UnityEngine_UIElements_VisualElement.MeasureMode):UnityEngine.Vector2;
        
                    
    }
    /**
     * UQuery is a set of extension methods allowing you to select individual or collection of visualElements inside a complex hierarchy.
     */
    class UQuery extends System.Object {
        
                    
    }
    /**
     * UQuery is a set of extension methods allowing you to select individual or collection of visualElements inside a complex hierarchy.
     */
    class UQueryExtensions extends System.Object {
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         */
        public static Q<T>($e: VisualElement, $name?: string, ...classes: string[]):VisualElement;
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         */
        public static Q($e: VisualElement, $name?: string, ...classes: string[]):VisualElement;
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         */
        public static Q<T>($e: VisualElement, $name?: string, $className?: string):VisualElement;
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         */
        public static Q($e: VisualElement, $name?: string, $className?: string):VisualElement;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         */
        public static Query($e: VisualElement, $name?: string, ...classes: string[]):UQueryBuilder$1<VisualElement>;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         */
        public static Query($e: VisualElement, $name?: string, $className?: string):UQueryBuilder$1<VisualElement>;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         */
        public static Query<T>($e: VisualElement, $name?: string, ...classes: string[]):UQueryBuilder$1<T>;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         */
        public static Query<T>($e: VisualElement, $name?: string, $className?: string):UQueryBuilder$1<T>;
        /**
         * Initializes an empty QueryBuilder on a specified root element.
         * @param e Root VisualElement on which the selector will be applied.
         * @returns An empty QueryBuilder on a specified root element.
         */
        public static Query($e: VisualElement):UQueryBuilder$1<VisualElement>;
        
                    
    }
    /**
     * Utility Object that contructs a set of selection rules to be ran on a root visual element.
     */
    interface UQueryBuilder$1<T> extends System.ValueType {
        
                    
    }
    /**
     * Describes the picking behavior.
     */
    enum PickingMode { Position = 0, Ignore = 1 }
    /**
     * Offers functionality for generating visual content of a VisualElement during the generateVisualContent callback.
     */
    class MeshGenerationContext extends System.Object {
        /**
         * The element for which VisualElement.generateVisualContent was invoked.
         */
        public get visualElement(): VisualElement;
        /**
         * Allocates the specified number of vertices and indices required to express geometry for drawing the content of a VisualElement.
         * @param vertexCount The number of vertices to allocate. The maximum is 65535 (or UInt16.MaxValue).
         * @param indexCount The number of triangle list indices to allocate. Each 3 indices represent one triangle, so this value should be multiples of 3.
         * @param texture An optional texture to be applied on the triangles allocated. Pass null to rely on vertex colors only.
         * @returns An object that gives access to the newely allocated data. If the returned vertex count is 0, then allocation failed (the system ran out of memory).
         */
        public Allocate($vertexCount: number, $indexCount: number, $texture?: UnityEngine.Texture):MeshWriteData;
        
                    
    }
    /**
     * Give access to UIElement experimental features.
     */
    interface IExperimentalFeatures {
        /**
         * Returns the animation experimental interface.
         */
        animation: UnityEngine_UIElements_Experimental.ITransitionAnimations;
        
                    
    }
    /**
     * A scheduler allows you to register actions to be executed at a later point.
     */
    interface IVisualElementScheduler {
        
        Execute($timerUpdateEvent: System.Action$1<TimerState>):IVisualElementScheduledItem;
        /**
         * Schedule this action to be executed later.
         * @param timerUpdateEvent The action to be executed.
         * @param updateEvent The action to be executed.
         * @returns Reference to the scheduled action.
         */
        Execute($updateEvent: System.Action):IVisualElementScheduledItem;
        
                    
    }
    /**
     * This interface provides access to a VisualElement inline style data.
     */
    interface IStyle {
        /**
         * Alignment of the whole area of children on the cross axis if they span over multiple lines in this container.
         */
        alignContent: StyleEnum$1<Align>;
        /**
         * Alignment of children on the cross axis of this container.
         */
        alignItems: StyleEnum$1<Align>;
        /**
         * Similar to align-items, but only for this specific element.
         */
        alignSelf: StyleEnum$1<Align>;
        /**
         * Background color to paint in the element's box.
         */
        backgroundColor: StyleColor;
        /**
         * Background image to paint in the element's box.
         */
        backgroundImage: StyleBackground;
        /**
         * Color of the element's bottom border.
         */
        borderBottomColor: StyleColor;
        /**
         * The radius of the bottom-left corner when a rounded rectangle is drawn in the element's box.
         */
        borderBottomLeftRadius: StyleLength;
        /**
         * The radius of the bottom-right corner when a rounded rectangle is drawn in the element's box.
         */
        borderBottomRightRadius: StyleLength;
        /**
         * Space reserved for the bottom edge of the border during the layout phase.
         */
        borderBottomWidth: StyleFloat;
        /**
         * Color of the element's left border.
         */
        borderLeftColor: StyleColor;
        /**
         * Space reserved for the left edge of the border during the layout phase.
         */
        borderLeftWidth: StyleFloat;
        /**
         * Color of the element's right border.
         */
        borderRightColor: StyleColor;
        /**
         * Space reserved for the right edge of the border during the layout phase.
         */
        borderRightWidth: StyleFloat;
        /**
         * Color of the element's top border.
         */
        borderTopColor: StyleColor;
        /**
         * The radius of the top-left corner when a rounded rectangle is drawn in the element's box.
         */
        borderTopLeftRadius: StyleLength;
        /**
         * The radius of the top-right corner when a rounded rectangle is drawn in the element's box.
         */
        borderTopRightRadius: StyleLength;
        /**
         * Space reserved for the top edge of the border during the layout phase.
         */
        borderTopWidth: StyleFloat;
        /**
         * Bottom distance from the element's box during layout.
         */
        bottom: StyleLength;
        /**
         * Color to use when drawing the text of an element.
         */
        color: StyleColor;
        /**
         * Mouse cursor to display when the mouse pointer is over an element.
         */
        cursor: StyleCursor;
        /**
         * Defines how an element is displayed in the layout.
         */
        display: StyleEnum$1<DisplayStyle>;
        /**
         * Initial main size of a flex item, on the main flex axis. The final layout mught be smaller or larger, according to the flex shrinking and growing determined by the flex property.
         */
        flexBasis: StyleLength;
        /**
         * Direction of the main axis to layout children in a container.
         */
        flexDirection: StyleEnum$1<FlexDirection>;
        /**
         * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
         */
        flexGrow: StyleFloat;
        /**
         * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
         */
        flexShrink: StyleFloat;
        /**
         * Placement of children over multiple lines if not enough space is available in this container.
         */
        flexWrap: StyleEnum$1<Wrap>;
        /**
         * Font size to draw the element's text.
         */
        fontSize: StyleLength;
        /**
         * Fixed height of an element for the layout.
         */
        height: StyleLength;
        /**
         * Justification of children on the main axis of this container.
         */
        justifyContent: StyleEnum$1<Justify>;
        /**
         * Left distance from the element's box during layout.
         */
        left: StyleLength;
        /**
         * Space reserved for the bottom edge of the margin during the layout phase.
         */
        marginBottom: StyleLength;
        /**
         * Space reserved for the left edge of the margin during the layout phase.
         */
        marginLeft: StyleLength;
        /**
         * Space reserved for the right edge of the margin during the layout phase.
         */
        marginRight: StyleLength;
        /**
         * Space reserved for the top edge of the margin during the layout phase.
         */
        marginTop: StyleLength;
        /**
         * Maximum height for an element, when it is flexible or measures its own size.
         */
        maxHeight: StyleLength;
        /**
         * Maximum width for an element, when it is flexible or measures its own size.
         */
        maxWidth: StyleLength;
        /**
         * Minimum height for an element, when it is flexible or measures its own size.
         */
        minHeight: StyleLength;
        /**
         * Minimum width for an element, when it is flexible or measures its own size.
         */
        minWidth: StyleLength;
        /**
         * Specifies the transparency of an element.
         */
        opacity: StyleFloat;
        /**
         * How a container behaves if its content overflows its own box.
         */
        overflow: StyleEnum$1<Overflow>;
        /**
         * Space reserved for the bottom edge of the padding during the layout phase.
         */
        paddingBottom: StyleLength;
        /**
         * Space reserved for the left edge of the padding during the layout phase.
         */
        paddingLeft: StyleLength;
        /**
         * Space reserved for the right edge of the padding during the layout phase.
         */
        paddingRight: StyleLength;
        /**
         * Space reserved for the top edge of the padding during the layout phase.
         */
        paddingTop: StyleLength;
        /**
         * Element's positioning in its parent container.
         */
        position: StyleEnum$1<Position>;
        /**
         * Right distance from the element's box during layout.
         */
        right: StyleLength;
        /**
         * The element's text overflow mode.
         */
        textOverflow: StyleEnum$1<TextOverflow>;
        /**
         * Top distance from the element's box during layout.
         */
        top: StyleLength;
        /**
         * Tinting color for the element's backgroundImage
         */
        unityBackgroundImageTintColor: StyleColor;
        /**
         * Background image scaling in the element's box.
         */
        unityBackgroundScaleMode: StyleEnum$1<UnityEngine.ScaleMode>;
        /**
         * Font to draw the element's text.
         */
        unityFont: StyleFont;
        /**
         * Size of the 9-slice's bottom edge when painting an element's background image.
         */
        unityFontStyleAndWeight: StyleEnum$1<UnityEngine.FontStyle>;
        /**
         * Specifies which box the element content is clipped against.
         */
        unityOverflowClipBox: StyleEnum$1<OverflowClipBox>;
        /**
         * Size of the 9-slice's bottom edge when painting an element's background image.
         */
        unitySliceBottom: StyleInt;
        /**
         * Size of the 9-slice's left edge when painting an element's background image.
         */
        unitySliceLeft: StyleInt;
        /**
         * Size of the 9-slice's right edge when painting an element's background image.
         */
        unitySliceRight: StyleInt;
        /**
         * Size of the 9-slice's top edge when painting an element's background image.
         */
        unitySliceTop: StyleInt;
        /**
         * Horizontal and vertical text alignment in the element's box.
         */
        unityTextAlign: StyleEnum$1<UnityEngine.TextAnchor>;
        /**
         * The element's text overflow position.
         */
        unityTextOverflowPosition: StyleEnum$1<TextOverflowPosition>;
        /**
         * Specifies whether or not an element is visible.
         */
        visibility: StyleEnum$1<Visibility>;
        /**
         * Word wrapping over multiple lines if not enough space is available to draw the text of an element.
         */
        whiteSpace: StyleEnum$1<WhiteSpace>;
        /**
         * Fixed width of an element for the layout.
         */
        width: StyleLength;
        
                    
    }
    /**
     * This interface exposes methods to read custom style properties applied from USS files to visual elements.
     */
    interface ICustomStyle {
        
        TryGetValue($property: CustomStyleProperty$1<number>, $value: $Ref<number>):boolean;
        
        TryGetValue($property: CustomStyleProperty$1<number>, $value: $Ref<number>):boolean;
        
        TryGetValue($property: CustomStyleProperty$1<boolean>, $value: $Ref<boolean>):boolean;
        
        TryGetValue($property: CustomStyleProperty$1<UnityEngine.Color>, $value: $Ref<UnityEngine.Color>):boolean;
        
        TryGetValue($property: CustomStyleProperty$1<UnityEngine.Texture2D>, $value: $Ref<UnityEngine.Texture2D>):boolean;
        
        TryGetValue($property: CustomStyleProperty$1<VectorImage>, $value: $Ref<VectorImage>):boolean;
        
        TryGetValue($property: CustomStyleProperty$1<string>, $value: $Ref<string>):boolean;
        
                    
    }
    /**
     * This structure manipulates the set of StyleSheet objects attached to the owner VisualElement.
     */
    class VisualElementStyleSheetSet extends System.ValueType {
        /**
         * Number of style sheets attached to the owner element.
         */
        public get count(): number;
        /**
         * Adds a style sheet for the owner element.
         */
        public Add($styleSheet: StyleSheet):void;
        /**
         * Removes all style sheets for the owner element.
         */
        public Clear():void;
        
        public Remove($styleSheet: StyleSheet):boolean;
        /**
         * Looks for the specified StyleSheet
         * @returns True if the style sheet is attached to the owner element, false otherwise.
         */
        public Contains($styleSheet: StyleSheet):boolean;
        
        public get_Item($index: number):StyleSheet;
        
        public Equals($other: VisualElementStyleSheetSet):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($left: VisualElementStyleSheetSet, $right: VisualElementStyleSheetSet):boolean;
        
        public static op_Inequality($left: VisualElementStyleSheetSet, $right: VisualElementStyleSheetSet):boolean;
        
                    
    }
    /**
     * Style values after layout pass.
     */
    interface IResolvedStyle {
        /**
         * Alignment of the whole area of children on the cross axis if they span over multiple lines in this container.
         */
        alignContent: Align;
        /**
         * Alignment of children on the cross axis of this container.
         */
        alignItems: Align;
        /**
         * Similar to align-items, but only for this specific element.
         */
        alignSelf: Align;
        /**
         * Background color to paint in the element's box.
         */
        backgroundColor: UnityEngine.Color;
        /**
         * Background image to paint in the element's box.
         */
        backgroundImage: Background;
        /**
         * Color of the element's bottom border.
         */
        borderBottomColor: UnityEngine.Color;
        /**
         * The radius of the bottom-left corner when a rounded rectangle is drawn in the element's box.
         */
        borderBottomLeftRadius: number;
        /**
         * The radius of the bottom-right corner when a rounded rectangle is drawn in the element's box.
         */
        borderBottomRightRadius: number;
        /**
         * Space reserved for the bottom edge of the border during the layout phase.
         */
        borderBottomWidth: number;
        /**
         * Color of the element's left border.
         */
        borderLeftColor: UnityEngine.Color;
        /**
         * Space reserved for the left edge of the border during the layout phase.
         */
        borderLeftWidth: number;
        /**
         * Color of the element's right border.
         */
        borderRightColor: UnityEngine.Color;
        /**
         * Space reserved for the right edge of the border during the layout phase.
         */
        borderRightWidth: number;
        /**
         * Color of the element's top border.
         */
        borderTopColor: UnityEngine.Color;
        /**
         * The radius of the top-left corner when a rounded rectangle is drawn in the element's box.
         */
        borderTopLeftRadius: number;
        /**
         * The radius of the top-right corner when a rounded rectangle is drawn in the element's box.
         */
        borderTopRightRadius: number;
        /**
         * Space reserved for the top edge of the border during the layout phase.
         */
        borderTopWidth: number;
        /**
         * Bottom distance from the element's box during layout.
         */
        bottom: number;
        /**
         * Color to use when drawing the text of an element.
         */
        color: UnityEngine.Color;
        /**
         * Defines how an element is displayed in the layout.
         */
        display: DisplayStyle;
        /**
         * Initial main size of a flex item, on the main flex axis. The final layout mught be smaller or larger, according to the flex shrinking and growing determined by the other flex properties.
         */
        flexBasis: StyleFloat;
        /**
         * Direction of the main axis to layout children in a container.
         */
        flexDirection: FlexDirection;
        /**
         * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
         */
        flexGrow: number;
        /**
         * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
         */
        flexShrink: number;
        /**
         * Placement of children over multiple lines if not enough space is available in this container.
         */
        flexWrap: Wrap;
        /**
         * Font size to draw the element's text.
         */
        fontSize: number;
        /**
         * Fixed height of an element for the layout.
         */
        height: number;
        /**
         * Justification of children on the main axis of this container.
         */
        justifyContent: Justify;
        /**
         * Left distance from the element's box during layout.
         */
        left: number;
        /**
         * Space reserved for the bottom edge of the margin during the layout phase.
         */
        marginBottom: number;
        /**
         * Space reserved for the left edge of the margin during the layout phase.
         */
        marginLeft: number;
        /**
         * Space reserved for the right edge of the margin during the layout phase.
         */
        marginRight: number;
        /**
         * Space reserved for the top edge of the margin during the layout phase.
         */
        marginTop: number;
        /**
         * Maximum height for an element, when it is flexible or measures its own size.
         */
        maxHeight: StyleFloat;
        /**
         * Maximum width for an element, when it is flexible or measures its own size.
         */
        maxWidth: StyleFloat;
        /**
         * Minimum height for an element, when it is flexible or measures its own size.
         */
        minHeight: StyleFloat;
        /**
         * Minimum width for an element, when it is flexible or measures its own size.
         */
        minWidth: StyleFloat;
        /**
         * Specifies the transparency of an element.
         */
        opacity: number;
        /**
         * Space reserved for the bottom edge of the padding during the layout phase.
         */
        paddingBottom: number;
        /**
         * Space reserved for the left edge of the padding during the layout phase.
         */
        paddingLeft: number;
        /**
         * Space reserved for the right edge of the padding during the layout phase.
         */
        paddingRight: number;
        /**
         * Space reserved for the top edge of the padding during the layout phase.
         */
        paddingTop: number;
        /**
         * Element's positioning in its parent container.
         */
        position: Position;
        /**
         * Right distance from the element's box during layout.
         */
        right: number;
        /**
         * The element's text overflow mode.
         */
        textOverflow: TextOverflow;
        /**
         * Top distance from the element's box during layout.
         */
        top: number;
        /**
         * Tinting color for the element's backgroundImage
         */
        unityBackgroundImageTintColor: UnityEngine.Color;
        /**
         * Background image scaling in the element's box.
         */
        unityBackgroundScaleMode: UnityEngine.ScaleMode;
        /**
         * Font to draw the element's text.
         */
        unityFont: UnityEngine.Font;
        /**
         * Font style and weight (normal, bold, italic) to draw the element's text.
         */
        unityFontStyleAndWeight: UnityEngine.FontStyle;
        /**
         * Size of the 9-slice's bottom edge when painting an element's background image.
         */
        unitySliceBottom: number;
        /**
         * Size of the 9-slice's left edge when painting an element's background image.
         */
        unitySliceLeft: number;
        /**
         * Size of the 9-slice's right edge when painting an element's background image.
         */
        unitySliceRight: number;
        /**
         * Size of the 9-slice's top edge when painting an element's background image.
         */
        unitySliceTop: number;
        /**
         * Horizontal and vertical text alignment in the element's box.
         */
        unityTextAlign: UnityEngine.TextAnchor;
        /**
         * The element's text overflow position.
         */
        unityTextOverflowPosition: TextOverflowPosition;
        /**
         * Specifies whether or not an element is visible.
         */
        visibility: Visibility;
        /**
         * Word wrapping over multiple lines if not enough space is available to draw the text of an element.
         */
        whiteSpace: WhiteSpace;
        /**
         * Fixed width of an element for the layout.
         */
        width: number;
        
                    
    }
    /**
     * VisualElementExtensions is a set of extension methods useful for VisualElement.
     */
    class VisualElementExtensions extends System.Object {
        
        public static WorldToLocal($ele: VisualElement, $p: UnityEngine.Vector2):UnityEngine.Vector2;
        
        public static LocalToWorld($ele: VisualElement, $p: UnityEngine.Vector2):UnityEngine.Vector2;
        
        public static WorldToLocal($ele: VisualElement, $r: UnityEngine.Rect):UnityEngine.Rect;
        
        public static LocalToWorld($ele: VisualElement, $r: UnityEngine.Rect):UnityEngine.Rect;
        
        public static ChangeCoordinatesTo($src: VisualElement, $dest: VisualElement, $point: UnityEngine.Vector2):UnityEngine.Vector2;
        
        public static ChangeCoordinatesTo($src: VisualElement, $dest: VisualElement, $rect: UnityEngine.Rect):UnityEngine.Rect;
        
        public static StretchToParentSize($elem: VisualElement):void;
        /**
         * The given VisualElement's left and right edges will be aligned with the corresponding edges of the parent element.
         */
        public static StretchToParentWidth($elem: VisualElement):void;
        /**
         * Add a manipulator associated to a VisualElement.
         * @param ele VisualElement associated to the manipulator.
         * @param manipulator Manipulator to be added to the VisualElement.
         */
        public static AddManipulator($ele: VisualElement, $manipulator: IManipulator):void;
        /**
         * Remove a manipulator associated to a VisualElement.
         * @param ele VisualElement associated to the manipulator.
         * @param manipulator Manipulator to be removed from the VisualElement.
         */
        public static RemoveManipulator($ele: VisualElement, $manipulator: IManipulator):void;
        
                    
    }
    /**
     * Define focus change directions for the VisualElementFocusRing.
     */
    class VisualElementFocusChangeDirection extends FocusChangeDirection {
        /**
         * The focus is moving to the left.
         */
        public static get left(): FocusChangeDirection;
        /**
         * The focus is moving to the right.
         */
        public static get right(): FocusChangeDirection;
        
                    
    }
    /**
     * Implementation of a linear focus ring. Elements are sorted according to their focusIndex.
     */
    class VisualElementFocusRing extends System.Object {
        /**
         * The focus order for elements having 0 has a focusIndex.
         */
        public get defaultFocusOrder(): UnityEngine_UIElements_VisualElementFocusRing.DefaultFocusOrder;
        public set defaultFocusOrder(value: UnityEngine_UIElements_VisualElementFocusRing.DefaultFocusOrder);
        
        public constructor($root: VisualElement, $dfo?: UnityEngine_UIElements_VisualElementFocusRing.DefaultFocusOrder);
        /**
         * Get the direction of the focus change for the given event. For example, when the Tab key is pressed, focus should be given to the element to the right in the focus ring.
         */
        public GetFocusChangeDirection($currentFocusable: Focusable, $e: EventBase):FocusChangeDirection;
        /**
         * Get the next element in the given direction.
         */
        public GetNextFocusable($currentFocusable: Focusable, $direction: FocusChangeDirection):Focusable;
        
                    
    }
    /**
     * Represents a scheduled task created with a VisualElement's schedule interface.
     */
    interface IVisualElementScheduledItem {
        /**
         * Returns the VisualElement this object is associated with.
         */
        element: VisualElement;
        /**
         * Will be true when this item is scheduled. Note that an item's callback will only be executed when it's VisualElement is attached to a panel.
         */
        isActive: boolean;
        /**
         * If not already active, will schedule this item on its VisualElement's scheduler.
         */
        Resume():void;
        /**
         * Removes this item from its VisualElement's scheduler.
         */
        Pause():void;
        /**
         * Cancels any previously scheduled execution of this item and re-schedules the item.
         * @param delayMs Minimum time in milliseconds before this item will be executed.
         */
        ExecuteLater($delayMs: bigint):void;
        /**
         * Adds a delay to the first invokation.
         * @param delayMs The minimum number of milliseconds after activation where this item's action will be executed.
         * @returns This ScheduledItem.
         */
        StartingIn($delayMs: bigint):IVisualElementScheduledItem;
        /**
         * Repeats this action after a specified time.
         * @param intervalMs Minimum amount of time in milliseconds between each action execution.
         * @returns This ScheduledItem.
         */
        Every($intervalMs: bigint):IVisualElementScheduledItem;
        
        Until($stopCondition: System.Func$1<boolean>):IVisualElementScheduledItem;
        /**
         * After specified duration, the item will be automatically unscheduled.
         * @param durationMs The total duration in milliseconds where this item will be active.
         * @returns This ScheduledItem.
         */
        ForDuration($durationMs: bigint):IVisualElementScheduledItem;
        
                    
    }
    /**
     * Style sheets are applied to visual elements in order to control the layout and visual appearance of the user interface.
     */
    class StyleSheet extends UnityEngine.ScriptableObject {
        /**
         * A hash value computed from the stylesheet content.
         */
        public get contentHash(): number;
        public set contentHash(value: number);
        
        public constructor();
        
                    
    }
    /**
     * This is the direction of the Slider and SliderInt.
     */
    enum SliderDirection { Horizontal = 0, Vertical = 1 }
    /**
     * Interface for all bindable fields.
     */
    interface IBindable {
        /**
         * Binding object that will be updated.
         */
        binding: IBinding;
        /**
         * Path of the target property to be bound.
         */
        bindingPath: string;
        
                    
    }
    /**
     * Extensions methods to provide additional IBindable functionality.
     */
    class IBindingExtensions extends System.Object {
        /**
         * Checks if a IBindable is bound to a property.
         * @param control This Bindable object.
         * @returns True if this IBindable is bound to a property.
         */
        public static IsBound($control: IBindable):boolean;
        
                    
    }
    /**
     * Styled visual element to match the IMGUI Box Style.
     */
    class Box extends VisualElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        
        public constructor();
        
                    
    }
    /**
     * UxmlFactory specialization for classes that derive from VisualElement and that shares its traits, VisualElementTraits.
     */
    interface UxmlFactory$1<TCreatedType> extends UxmlFactory$2<TCreatedType, UnityEngine_UIElements_VisualElement.UxmlTraits> {
        
                    
    }
    /**
     * A clickable button.
     */
    class Button extends TextElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * Clickable MouseManipulator for this Button.
         */
        public get clickable(): Clickable;
        public set clickable(value: Clickable);
        /**
         * Constructs a Button.
         * @param clickEvent Action triggered when the button is clicked.
         */
        public constructor();
        /**
         * Constructs a Button.
         * @param clickEvent Action triggered when the button is clicked.
         */
        public constructor($clickEvent: System.Action);
        
        public add_onClick($value: System.Action):void;
        
        public remove_onClick($value: System.Action):void;
        
        public add_clicked($value: System.Action):void;
        
        public remove_clicked($value: System.Action):void;
        /**
         * Obsolete. Use Button.clicked instead.
         */
        public onClick;
        /**
         * Callback triggered when the button is clicked. See Also: Clickable.clicked.
         */
        public clicked;
        
                    
    }
    /**
     * Collapsable section of UI.
     */
    class Foldout extends BindableElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of toggle elements in elements of this type.
         */
        public static toggleUssClassName: string;
        /**
         * USS class name of content element in a Foldout.
         */
        public static contentUssClassName: string;
        
        public get contentContainer(): VisualElement;
        
        public get text(): string;
        public set text(value: string);
        /**
         * Contains the collapse state. True if the Foldout is open and the contents are visible. False if it's collapsed.
         */
        public get value(): boolean;
        public set value(value: boolean);
        
        public constructor();
        
        public SetValueWithoutNotify($newValue: boolean):void;
        
                    
    }
    /**
     * User message types.
     */
    enum HelpBoxMessageType { None = 0, Info = 1, Warning = 2, Error = 3 }
    /**
     * Makes a help box with a message to the user.
     */
    class HelpBox extends VisualElement {
        /**
         * The USS class name for Elements of this type.
         */
        public static ussClassName: string;
        /**
         * The USS class name for labels in Elements of this type.
         */
        public static labelUssClassName: string;
        /**
         * The USS class name for images in Elements of this type.
         */
        public static iconUssClassName: string;
        /**
         * The USS class name for the HelpBoxMessageType.Info state in Elements of this type.
         */
        public static iconInfoUssClassName: string;
        /**
         * The USS class name for the HelpBoxMessageType.Warning state in Elements of this type.
         */
        public static iconwarningUssClassName: string;
        /**
         * The USS class name for the HelpBoxMessageType.Error state in Elements of this type.
         */
        public static iconErrorUssClassName: string;
        /**
         * The message text.
         */
        public get text(): string;
        public set text(value: string);
        /**
         * The type of message.
         */
        public get messageType(): HelpBoxMessageType;
        public set messageType(value: HelpBoxMessageType);
        /**
         * Creates a new HelpBox.
         * @param text The message text.
         * @param messageType The type of message.
         */
        public constructor();
        /**
         * Creates a new HelpBox.
         * @param text The message text.
         * @param messageType The type of message.
         */
        public constructor($text: string, $messageType: HelpBoxMessageType);
        
                    
    }
    /**
     * INotifyValueChangedExtensions is a set of extension methods useful for objects implementing INotifyValueChanged.
     */
    class INotifyValueChangedExtensions extends System.Object {
        
        public static RegisterValueChangedCallback<T>($control: INotifyValueChanged$1<T>, $callback: EventCallback$1<ChangeEvent$1<T>>):boolean;
        
        public static UnregisterValueChangedCallback<T>($control: INotifyValueChanged$1<T>, $callback: EventCallback$1<ChangeEvent$1<T>>):boolean;
        
                    
    }
    
    interface INotifyValueChanged$1<T> {
        
                    
    }
    /**
     * Sends an event when a value in a field changes.
     */
    interface ChangeEvent$1<T> extends EventBase$1<ChangeEvent$1<T>> {
        
                    
    }
    
    type EventCallback$1<TEventType> = (evt: TEventType) => void;
    /**
     * A VisualElement representing a source texture.
     */
    class Image extends VisualElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * The texture to display in this image.  You cannot set this and Image.vectorImage at the same time.
         */
        public get image(): UnityEngine.Texture;
        public set image(value: UnityEngine.Texture);
        /**
         * The VectorImage to display in this image.  You cannot set this and Image.image at the same time.
         */
        public get vectorImage(): VectorImage;
        public set vectorImage(value: VectorImage);
        /**
         * The source rectangle inside the texture relative to the top left corner.
         */
        public get sourceRect(): UnityEngine.Rect;
        public set sourceRect(value: UnityEngine.Rect);
        /**
         * The base texture coordinates of the Image relative to the bottom left corner.
         */
        public get uv(): UnityEngine.Rect;
        public set uv(value: UnityEngine.Rect);
        /**
         * ScaleMode used to display the Image.
         */
        public get scaleMode(): UnityEngine.ScaleMode;
        public set scaleMode(value: UnityEngine.ScaleMode);
        /**
         * Tinting color for this Image.
         */
        public get tintColor(): UnityEngine.Color;
        public set tintColor(value: UnityEngine.Color);
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * An asset that represents a vector image.
     */
    class VectorImage extends UnityEngine.ScriptableObject {
        /**
         * Creates an empty VectorImage.
         */
        public constructor();
        
                    
    }
    /**
     * Provides an Element displaying text.
     */
    class Label extends TextElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * Constructs a label.
         * @param text The text to be displayed.
         */
        public constructor();
        /**
         * Constructs a label.
         * @param text The text to be displayed.
         */
        public constructor($text: string);
        
                    
    }
    /**
     * Options for displaying alternating background colors for ListView rows.
     */
    enum AlternatingRowBackground { None = 0, ContentOnly = 1, All = 2 }
    /**
     * A vertically scrollable area that only creates visual elements for visible items while allowing the binding of many more items. As the user scrolls, visual elements are recycled and re-bound to new data items.
     */
    class ListView extends BindableElement {
        /**
         * USS class name for elements of this type.
         */
        public static ussClassName: string;
        /**
         * The USS class name. Enable the showBorder property to apply this class to the ListView.
         */
        public static borderUssClassName: string;
        /**
         * The USS class name of item elements in elements of this type.
         */
        public static itemUssClassName: string;
        /**
         * The USS class name of the drag hover bar.
         */
        public static dragHoverBarUssClassName: string;
        /**
         * The USS class name that is applied to the element on drag hover.
         */
        public static itemDragHoverUssClassName: string;
        /**
         * The USS class name of item elements in elements of this type, when they are selected.
         */
        public static itemSelectedVariantUssClassName: string;
        /**
         * The USS class name for odd rows in the ListView.
         */
        public static itemAlternativeBackgroundUssClassName: string;
        /**
         * The items data source. This property must be set for the list view to function.
         */
        public get itemsSource(): System_Collections.IList;
        public set itemsSource(value: System_Collections.IList);
        /**
         * Callback for constructing the VisualElement that will serve as the template for each recycled and re-bound element in the list. This property must be set for the list view to function.
         */
        public get makeItem(): System.Func$1<VisualElement>;
        public set makeItem(value: System.Func$1<VisualElement>);
        /**
         * Callback for unbinding a data item from the visual element.
         */
        public get unbindItem(): System.Action$2<VisualElement, number>;
        public set unbindItem(value: System.Action$2<VisualElement, number>);
        /**
         * Callback for binding a data item to the visual element.
         */
        public get bindItem(): System.Action$2<VisualElement, number>;
        public set bindItem(value: System.Action$2<VisualElement, number>);
        /**
         * Computed pixel aligned height for the list elements. This value will change depending on the current panel's dpi scaling. See Also: ListView.itemHeight.
         */
        public get resolvedItemHeight(): number;
        /**
         * ListView requires all visual elements to have the same height so that it can calculate a sensible scroller size. This property must be set for the list view to function.
         */
        public get itemHeight(): number;
        public set itemHeight(value: number);
        /**
         * Enable this property to display a border around the ListView.
         */
        public get showBorder(): boolean;
        public set showBorder(value: boolean);
        /**
         * Gets or sets a value that indicates whether the user can drag list items to reorder them.
         */
        public get reorderable(): boolean;
        public set reorderable(value: boolean);
        /**
         * Returns the selected item's index in the items source. If multiple items are selected, returns the first selected item's index.
         */
        public get selectedIndex(): number;
        public set selectedIndex(value: number);
        /**
         * The indices of selected items in the items source.
         */
        public get selectedIndices(): System_Collections_Generic.IEnumerable$1<number>;
        /**
         * Returns the selected item from the items source. If multiple items are selected, returns the first selected item.
         */
        public get selectedItem(): any;
        /**
         * The selected items from the items source.
         */
        public get selectedItems(): System_Collections_Generic.IEnumerable$1<any>;
        
        public get contentContainer(): VisualElement;
        /**
         * Controls the selection state. You can set the state to disable selections, have one selectable item, or have multiple selectable items.
         */
        public get selectionType(): SelectionType;
        public set selectionType(value: SelectionType);
        /**
         * Enable this property to display alternating background colors for rows in the ListView.
         */
        public get showAlternatingRowBackgrounds(): AlternatingRowBackground;
        public set showAlternatingRowBackgrounds(value: AlternatingRowBackground);
        /**
         * When you bind a list view to an array, this property controls whether the list view displays the collection size as the first list item. Set to true to display the collection size, false to omit it. Default is true. See Also: UnityEditor.UIElements.BindingExtensions.Bind
         */
        public get showBoundCollectionSize(): boolean;
        public set showBoundCollectionSize(value: boolean);
        /**
         * This flag indicates whether the ListView should show a horizontal scroll bar when its content does not fit. The default value is False.
         */
        public get horizontalScrollingEnabled(): boolean;
        public set horizontalScrollingEnabled(value: boolean);
        
        public constructor();
        
        public constructor($itemsSource: System_Collections.IList, $itemHeight: number, $makeItem: System.Func$1<VisualElement>, $bindItem: System.Action$2<VisualElement, number>);
        
        public add_onItemChosen($value: System.Action$1<any>):void;
        
        public remove_onItemChosen($value: System.Action$1<any>):void;
        
        public add_onItemsChosen($value: System.Action$1<System_Collections_Generic.IEnumerable$1<any>>):void;
        
        public remove_onItemsChosen($value: System.Action$1<System_Collections_Generic.IEnumerable$1<any>>):void;
        
        public add_onSelectionChanged($value: System.Action$1<System_Collections_Generic.List$1<any>>):void;
        
        public remove_onSelectionChanged($value: System.Action$1<System_Collections_Generic.List$1<any>>):void;
        
        public add_onSelectionChange($value: System.Action$1<System_Collections_Generic.IEnumerable$1<any>>):void;
        
        public remove_onSelectionChange($value: System.Action$1<System_Collections_Generic.IEnumerable$1<any>>):void;
        
        public OnKeyDown($evt: KeyDownEvent):void;
        /**
         * Scroll to a specific item index and make it visible.
         * @param index Item index to scroll to. Specify -1 to make the last item visible.
         */
        public ScrollToItem($index: number):void;
        /**
         * Adds an item to the collection of selected items.
         * @param index Item index.
         */
        public AddToSelection($index: number):void;
        /**
         * Removes an item from the collection of selected items.
         * @param index Item index.
         */
        public RemoveFromSelection($index: number):void;
        /**
         * Sets the currently selected item.
         * @param index Item index.
         */
        public SetSelection($index: number):void;
        
        public SetSelection($indices: System_Collections_Generic.IEnumerable$1<number>):void;
        
        public SetSelectionWithoutNotify($indices: System_Collections_Generic.IEnumerable$1<number>):void;
        /**
         * Unselects any selected items.
         */
        public ClearSelection():void;
        /**
         * Scroll to a specific visual element.
         * @param visualElement Element to scroll to.
         */
        public ScrollTo($visualElement: VisualElement):void;
        /**
         * Clear, recreate all visible visual elements, and rebind all items. This should be called whenever the items source changes.
         */
        public Refresh():void;
        
        public onItemChosen;
        
        public onItemsChosen;
        
        public onSelectionChanged;
        
        public onSelectionChange;
        
                    
    }
    /**
     * Event sent when a key is pressed on the keyboard. This event trickles down and bubbles up. This event is cancellable.
     */
    class KeyDownEvent extends KeyboardEventBase$1<KeyDownEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Base class for keyboard events.
     */
    interface KeyboardEventBase$1<T> extends EventBase$1<T> {
        
                    
    }
    /**
     * A min/max slider containing a representation of a range.
     */
    class MinMaxSlider extends BaseField$1<UnityEngine.Vector2> {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of labels in elements of this type.
         */
        public static labelUssClassName: string;
        /**
         * USS class name of input elements in elements of this type.
         */
        public static inputUssClassName: string;
        /**
         * USS class name of tracker elements in elements of this type.
         */
        public static trackerUssClassName: string;
        /**
         * USS class name of dragger elements in elements of this type.
         */
        public static draggerUssClassName: string;
        /**
         * USS class name of the minimum thumb elements in elements of this type.
         */
        public static minThumbUssClassName: string;
        /**
         * USS class name of the maximum thumb elements in elements of this type.
         */
        public static maxThumbUssClassName: string;
        /**
         * This is the low value of the range represented on the slider.
         */
        public get minValue(): number;
        public set minValue(value: number);
        /**
         * This is the high value of the range represented on the slider.
         */
        public get maxValue(): number;
        public set maxValue(value: number);
        /**
         * This is the value of the slider. This is a Vector2 where the x is the lower bound and the y is the higher bound.
         */
        public get value(): UnityEngine.Vector2;
        public set value(value: UnityEngine.Vector2);
        /**
         * Returns the range of the low/high limits of the slider.
         */
        public get range(): number;
        /**
         * This is the low limit of the slider.
         */
        public get lowLimit(): number;
        public set lowLimit(value: number);
        /**
         * This is the high limit of the slider.
         */
        public get highLimit(): number;
        public set highLimit(value: number);
        /**
         * Constructor.
         * @param minValue The minimum value in the range to be represented.
         * @param maxValue The maximum value in the range to be represented.
         * @param minLimit The minimum value of the slider limit.
         * @param maxLimit The maximum value of the slider limit.
         * @param direction This is the sldier direction, for now, only Horizontal is supported.
         */
        public constructor();
        
        public constructor($minValue: number, $maxValue: number, $minLimit: number, $maxLimit: number);
        
        public constructor($label: string, $minValue?: number, $maxValue?: number, $minLimit?: number, $maxLimit?: number);
        
        public SetValueWithoutNotify($newValue: UnityEngine.Vector2):void;
        
                    
    }
    /**
     * Abstract base class for controls.
     */
    interface BaseField$1<TValueType> extends BindableElement {
        
                    
    }
    /**
     * Styled visual element that matches the EditorGUILayout.Popup IMGUI element.
     */
    class PopupWindow extends TextElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of content elements in elements of this type.
         */
        public static contentUssClassName: string;
        
        public get contentContainer(): VisualElement;
        
        public constructor();
        
                    
    }
    /**
     * A button that executes an action repeatedly while it is pressed.
     */
    class RepeatButton extends TextElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * Constructor.
         * @param clickEvent The action to execute when the button is pressed.
         * @param delay The initial delay before the action is executed for the first time.
         * @param interval The interval between each execution of the action.
         */
        public constructor();
        /**
         * Constructor.
         * @param clickEvent The action to execute when the button is pressed.
         * @param delay The initial delay before the action is executed for the first time.
         * @param interval The interval between each execution of the action.
         */
        public constructor($clickEvent: System.Action, $delay: bigint, $interval: bigint);
        /**
         * Set the action that should be executed when the button is pressed.
         * @param clickEvent The action to execute.
         * @param delay The initial delay before the action is executed for the first time.
         * @param interval The interval between each execution of the action.
         */
        public SetAction($clickEvent: System.Action, $delay: bigint, $interval: bigint):void;
        
                    
    }
    /**
     * Mode configuring the ScrollView for the intended usage.
     */
    enum ScrollViewMode { Vertical = 0, Horizontal = 1, VerticalAndHorizontal = 2 }
    /**
     * Displays its contents inside a scrollable frame.
     */
    class ScrollView extends VisualElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of viewport elements in elements of this type.
         */
        public static viewportUssClassName: string;
        /**
         * USS class name of content elements in elements of this type.
         */
        public static contentUssClassName: string;
        /**
         * USS class name of horizontal scrollers in elements of this type.
         */
        public static hScrollerUssClassName: string;
        /**
         * USS class name of vertical scrollers in elements of this type.
         */
        public static vScrollerUssClassName: string;
        
        public static horizontalVariantUssClassName: string;
        
        public static verticalVariantUssClassName: string;
        
        public static verticalHorizontalVariantUssClassName: string;
        
        public static scrollVariantUssClassName: string;
        /**
         * Should the horizontal scroller be visible.
         */
        public get showHorizontal(): boolean;
        public set showHorizontal(value: boolean);
        /**
         * Should the vertical scroller be visible.
         */
        public get showVertical(): boolean;
        public set showVertical(value: boolean);
        /**
         * The current scrolling position.
         */
        public get scrollOffset(): UnityEngine.Vector2;
        public set scrollOffset(value: UnityEngine.Vector2);
        /**
         * This property is controlling the scrolling speed of the horizontal scroller.
         */
        public get horizontalPageSize(): number;
        public set horizontalPageSize(value: number);
        /**
         * This property is controlling the scrolling speed of the vertical scroller.
         */
        public get verticalPageSize(): number;
        public set verticalPageSize(value: number);
        /**
         * Controls the rate at which the scrolling movement slows after a user scrolls using a touch interaction.
         */
        public get scrollDecelerationRate(): number;
        public set scrollDecelerationRate(value: number);
        /**
         * The amount of elasticity to use when a user tries to scroll past the boundaries of the scroll view.
         */
        public get elasticity(): number;
        public set elasticity(value: number);
        /**
         * The behavior to use when a user tries to scroll past the boundaries of the ScrollView content using a touch interaction.
         */
        public get touchScrollBehavior(): UnityEngine_UIElements_ScrollView.TouchScrollBehavior;
        public set touchScrollBehavior(value: UnityEngine_UIElements_ScrollView.TouchScrollBehavior);
        /**
         * Represents the visible part of contentContainer.
         */
        public get contentViewport(): VisualElement;
        /**
         * Horizontal scrollbar.
         */
        public get horizontalScroller(): Scroller;
        /**
         * Vertical Scrollbar.
         */
        public get verticalScroller(): Scroller;
        /**
         * Contains full content, potentially partially visible.
         */
        public get contentContainer(): VisualElement;
        /**
         * Constructor.
         */
        public constructor();
        
        public constructor($scrollViewMode: ScrollViewMode);
        /**
         * Scroll to a specific child element.
         * @param child The child to scroll to.
         */
        public ScrollTo($child: VisualElement):void;
        
                    
    }
    /**
     * A vertical or horizontal scrollbar.
     */
    class Scroller extends VisualElement {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of elements of this type, when they are displayed horizontally.
         */
        public static horizontalVariantUssClassName: string;
        /**
         * USS class name of elements of this type, when they are displayed vertically.
         */
        public static verticalVariantUssClassName: string;
        /**
         * USS class name of slider elements in elements of this type.
         */
        public static sliderUssClassName: string;
        /**
         * USS class name of low buttons in elements of this type.
         */
        public static lowButtonUssClassName: string;
        /**
         * USS class name of high buttons in elements of this type.
         */
        public static highButtonUssClassName: string;
        /**
         * The slider used by this scroller.
         */
        public get slider(): Slider;
        /**
         * Bottom or left scroll button.
         */
        public get lowButton(): RepeatButton;
        /**
         * Top or right scroll button.
         */
        public get highButton(): RepeatButton;
        /**
         * Value that defines the slider position. It lies between lowValue and highValue.
         */
        public get value(): number;
        public set value(value: number);
        /**
         * Minimum value.
         */
        public get lowValue(): number;
        public set lowValue(value: number);
        /**
         * Maximum value.
         */
        public get highValue(): number;
        public set highValue(value: number);
        /**
         * Direction of this scrollbar.
         */
        public get direction(): SliderDirection;
        public set direction(value: SliderDirection);
        /**
         * Constructor.
         */
        public constructor();
        
        public constructor($lowValue: number, $highValue: number, $valueChanged: System.Action$1<number>, $direction?: SliderDirection);
        
        public add_valueChanged($value: System.Action$1<number>):void;
        
        public remove_valueChanged($value: System.Action$1<number>):void;
        /**
         * Updates the slider element size as a ratio of total range. A value greater than 1 will disable the Scroller.
         * @param factor Slider size ratio.
         */
        public Adjust($factor: number):void;
        /**
         * Will change the value according to the current slider pageSize.
         */
        public ScrollPageUp():void;
        /**
         * Will change the value according to the current slider pageSize.
         */
        public ScrollPageDown():void;
        /**
         * Will change the value according to the current slider pageSize.
         */
        public ScrollPageUp($factor: number):void;
        /**
         * Will change the value according to the current slider pageSize.
         */
        public ScrollPageDown($factor: number):void;
        
        public valueChanged;
        
                    
    }
    /**
     * A slider containing floating point values.
     */
    class Slider extends BaseSlider$1<number> {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of labels in elements of this type.
         */
        public static labelUssClassName: string;
        /**
         * USS class name of input elements in elements of this type.
         */
        public static inputUssClassName: string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Constructor.
         */
        public constructor($start: number, $end: number, $direction?: SliderDirection, $pageSize?: number);
        /**
         * Constructor.
         */
        public constructor($label: string, $start?: number, $end?: number, $direction?: SliderDirection, $pageSize?: number);
        
                    
    }
    /**
     * This is a base class for the Slider fields.
     */
    interface BaseSlider$1<TValueType> extends BaseField$1<TValueType> {
        
                    
    }
    /**
     * Describes a XML float attribute.
     */
    class UxmlFloatAttributeDescription extends TypedUxmlAttributeDescription$1<number> {
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Retrieves the value of this attribute from the attribute bag. Returns it if it is found, otherwise return defaultValue.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @returns The value of the attribute.
         */
        public GetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext):number;
        /**
         * Tries to retrieve the value of this attribute from the attribute bag. Returns true if it is found, otherwise returns false.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @param value The value of the attribute.
         * @returns True if the value could be retrieved, false otherwise.
         */
        public TryGetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext, $value: $Ref<number>):boolean;
        
                    
    }
    /**
     * Base class for all the uxml specific attributes.
     */
    interface TypedUxmlAttributeDescription$1<T> extends UxmlAttributeDescription {
        
                    
    }
    /**
     * Base class for describing an XML attribute.
     */
    class UxmlAttributeDescription extends System.Object {
        /**
         * The attribute name.
         */
        public get name(): string;
        public set name(value: string);
        /**
         * A list of obsolete names for this attribute.
         */
        public get obsoleteNames(): System_Collections_Generic.IEnumerable$1<string>;
        public set obsoleteNames(value: System_Collections_Generic.IEnumerable$1<string>);
        /**
         * Attribute type.
         */
        public get type(): string;
        /**
         * Attribute namespace.
         */
        public get typeNamespace(): string;
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Whether the attribute is optional, required or prohibited.
         */
        public get use(): UnityEngine_UIElements_UxmlAttributeDescription.Use;
        public set use(value: UnityEngine_UIElements_UxmlAttributeDescription.Use);
        /**
         * Restrictions on the possible values of the attribute.
         */
        public get restriction(): UxmlTypeRestriction;
        public set restriction(value: UxmlTypeRestriction);
        
                    
    }
    /**
     * Traits for the BaseField.
     */
    interface BaseFieldTraits$2<TValueType,TValueUxmlAttributeType> extends BaseField$1.UxmlTraits<TValueType> {
        
                    
    }
    /**
     * A slider containing Integer discrete values.
     */
    class SliderInt extends BaseSlider$1<number> {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of labels in elements of this type.
         */
        public static labelUssClassName: string;
        /**
         * USS class name of input elements in elements of this type.
         */
        public static inputUssClassName: string;
        /**
         * The value to add or remove to the SliderInt.value when it is clicked.
         */
        public get pageSize(): number;
        public set pageSize(value: number);
        /**
         * Constructors for the SliderInt.
         * @param start This is the low value of the slider.
         * @param end This is the high value of the slider.
         * @param direction This is the slider direction, horizontal or vertical.
         * @param pageSize This is the number of values to change when the slider is clicked.
         */
        public constructor();
        
        public constructor($start: number, $end: number, $direction?: SliderDirection, $pageSize?: number);
        
        public constructor($label: string, $start?: number, $end?: number, $direction?: SliderDirection, $pageSize?: number);
        
                    
    }
    /**
     * Describes a XML int attribute.
     */
    class UxmlIntAttributeDescription extends TypedUxmlAttributeDescription$1<number> {
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Retrieves the value of this attribute from the attribute bag. Returns it if it is found, otherwise return defaultValue.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @returns The value of the attribute.
         */
        public GetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext):number;
        /**
         * Tries to retrieve the value of this attribute from the attribute bag. Returns true if it is found, otherwise returns false.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @param value The value of the attribute.
         * @returns True if the value could be retrieved, false otherwise.
         */
        public TryGetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext, $value: $Ref<number>):boolean;
        
                    
    }
    /**
     * A textfield is a rectangular area where the user can edit a string.
     */
    class TextField extends TextInputBaseField$1<string> {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of labels in elements of this type.
         */
        public static labelUssClassName: string;
        /**
         * USS class name of input elements in elements of this type.
         */
        public static inputUssClassName: string;
        /**
         * Set this to true to allow multiple lines in the textfield and false if otherwise.
         */
        public get multiline(): boolean;
        public set multiline(value: boolean);
        /**
         * The string currently being exposed by the field.
         */
        public get value(): string;
        public set value(value: string);
        /**
         * Creates a new textfield.
         * @param maxLength The maximum number of characters this textfield can hold. If 0, there is no limit.
         * @param multiline Set this to true to allow multiple lines in the textfield and false if otherwise.
         * @param isPasswordField Set this to true to mask the characters and false if otherwise.
         * @param maskChar The character used for masking in a password field.
         */
        public constructor();
        /**
         * Creates a new textfield.
         * @param maxLength The maximum number of characters this textfield can hold. If 0, there is no limit.
         * @param multiline Set this to true to allow multiple lines in the textfield and false if otherwise.
         * @param isPasswordField Set this to true to mask the characters and false if otherwise.
         * @param maskChar The character used for masking in a password field.
         */
        public constructor($maxLength: number, $multiline: boolean, $isPasswordField: boolean, $maskChar: number);
        
        public constructor($label: string);
        
        public constructor($label: string, $maxLength: number, $multiline: boolean, $isPasswordField: boolean, $maskChar: number);
        /**
         * Selects text in the textfield between cursorIndex and selectionIndex.
         * @param cursorIndex The caret and selection start position.
         * @param selectionIndex The selection end position.
         */
        public SelectRange($rangeCursorIndex: number, $selectionIndex: number):void;
        
        public SetValueWithoutNotify($newValue: string):void;
        
                    
    }
    /**
     * Abstract base class used for all text-based fields.
     */
    interface TextInputBaseField$1<TValueType> extends BaseField$1<TValueType> {
        
                    
    }
    /**
     * Describes a XML string attribute.
     */
    class UxmlStringAttributeDescription extends TypedUxmlAttributeDescription$1<string> {
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Retrieves the value of this attribute from the attribute bag. Returns it if it is found, otherwise return defaultValue.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @returns The value of the attribute.
         */
        public GetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext):string;
        /**
         * Tries to retrieve the value of this attribute from the attribute bag. Returns true if it is found, otherwise returns false.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @param value The value of the attribute.
         * @returns True if the value could be retrieved, false otherwise.
         */
        public TryGetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext, $value: $Ref<string>):boolean;
        
                    
    }
    /**
     * This is the Toggle field.
     */
    class Toggle extends BaseField$1<boolean> {
        /**
         * USS class name of elements of this type.
         */
        public static ussClassName: string;
        /**
         * USS class name of labels in elements of this type.
         */
        public static labelUssClassName: string;
        /**
         * USS class name of input elements in elements of this type.
         */
        public static inputUssClassName: string;
        /**
         * USS class name of elements of this type, when there is no text.
         */
        public static noTextVariantUssClassName: string;
        /**
         * USS class name of elements of this type.
         */
        public static checkmarkUssClassName: string;
        /**
         * USS class name of text elements in elements of this type.
         */
        public static textUssClassName: string;
        /**
         * Optional text after the toggle.
         */
        public get text(): string;
        public set text(value: string);
        
        public constructor();
        
        public constructor($label: string);
        
        public SetValueWithoutNotify($newValue: boolean):void;
        
                    
    }
    /**
     * Describes a XML bool attribute.
     */
    class UxmlBoolAttributeDescription extends TypedUxmlAttributeDescription$1<boolean> {
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Retrieves the value of this attribute from the attribute bag. Returns it if it is found, otherwise return defaultValue.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @returns The value of the attribute.
         */
        public GetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext):boolean;
        /**
         * Tries to retrieve the value of this attribute from the attribute bag. Returns true if it is found, otherwise returns false.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @param value The value of the attribute.
         * @returns True if the value could be retrieved, false otherwise.
         */
        public TryGetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext, $value: $Ref<boolean>):boolean;
        
                    
    }
    
    class TwoPaneSplitView extends VisualElement {
        
        public get fixedPane(): VisualElement;
        
        public get flexedPane(): VisualElement;
        
        public get fixedPaneIndex(): number;
        public set fixedPaneIndex(value: number);
        
        public get fixedPaneInitialDimension(): number;
        public set fixedPaneInitialDimension(value: number);
        
        public get orientation(): TwoPaneSplitViewOrientation;
        public set orientation(value: TwoPaneSplitViewOrientation);
        
        public get contentContainer(): VisualElement;
        
        public constructor();
        
        public constructor($fixedPaneIndex: number, $fixedPaneStartDimension: number, $orientation: TwoPaneSplitViewOrientation);
        
        public CollapseChild($index: number):void;
        
        public UnCollapse():void;
        
                    
    }
    
    enum TwoPaneSplitViewOrientation { Horizontal = 0, Vertical = 1 }
    /**
     * Interface for pointer capture events and mouse capture events.
     */
    interface IPointerCaptureEvent {
        
                    
    }
    /**
     * Event sent when a VisualElement releases a pointer.
     */
    class PointerCaptureOutEvent extends PointerCaptureEventBase$1<PointerCaptureOutEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Base class for pointer capture events and mouse capture events.
     */
    interface PointerCaptureEventBase$1<T> extends EventBase$1<T> {
        
                    
    }
    /**
     * Event sent when a pointer is captured by a VisualElement.
     */
    class PointerCaptureEvent extends PointerCaptureEventBase$1<PointerCaptureEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Interface for mouse capture events.
     */
    interface IMouseCaptureEvent {
        
                    
    }
    /**
     * Event sent before a handler stops capturing the mouse.
     */
    class MouseCaptureOutEvent extends MouseCaptureEventBase$1<MouseCaptureOutEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when the handler capturing the mouse changes.
     */
    interface MouseCaptureEventBase$1<T> extends PointerCaptureEventBase$1<T> {
        
                    
    }
    /**
     * Event sent after a handler starts capturing the mouse.
     */
    class MouseCaptureEvent extends MouseCaptureEventBase$1<MouseCaptureEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Base interface for ChangeEvent.
     */
    interface IChangeEvent {
        
                    
    }
    /**
     * Interface for Command events.
     */
    interface ICommandEvent {
        /**
         * Name of the command.
         */
        commandName: string;
        
                    
    }
    /**
     * The event sent to probe which elements accepts a command.
     */
    class ValidateCommandEvent extends CommandEventBase$1<ValidateCommandEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Base class for command events.
     */
    interface CommandEventBase$1<T> extends EventBase$1<T> {
        
                    
    }
    /**
     * The event sent when an element should execute a command.
     */
    class ExecuteCommandEvent extends CommandEventBase$1<ExecuteCommandEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Interface for drag and drop events.
     */
    interface IDragAndDropEvent {
        
                    
    }
    /**
     * The event sent to a dragged element when the drag and drop process ends.
     */
    class DragExitedEvent extends DragAndDropEventBase$1<DragExitedEvent> {
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent An IMGUI drag exited event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):DragExitedEvent;
        
                    
    }
    /**
     * Base class for drag and drop events.
     */
    interface DragAndDropEventBase$1<T> extends MouseEventBase$1<T> {
        
                    
    }
    /**
     * Use the DragEnterEvent class to manage events that occur when dragging enters an element or one of its descendants. The DragEnterEvent is cancellable, it does not trickle down, and it does not bubble up.
     */
    class DragEnterEvent extends DragAndDropEventBase$1<DragEnterEvent> {
        /**
         * Constructor. Avoid renewing events. Instead, use GetPooled() to get an event from a pool of reusable events.
         */
        public constructor();
        
                    
    }
    /**
     * Use the DragLeaveEvent class to manage events sent when dragging leaves an element or one of its descendants. The DragLeaveEvent is cancellable, it does not trickle down, and it does not bubble up.
     */
    class DragLeaveEvent extends DragAndDropEventBase$1<DragLeaveEvent> {
        /**
         * Constructor. Avoid renewing events. Instead, use GetPooled() to get an event from a pool of reusable events.
         */
        public constructor();
        
                    
    }
    /**
     * The event sent when the element being dragged enters a possible drop target.
     */
    class DragUpdatedEvent extends DragAndDropEventBase$1<DragUpdatedEvent> {
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent An IMGUI drag updated event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):DragUpdatedEvent;
        
                    
    }
    /**
     * The event sent to an element when another element is dragged and dropped on the element.
     */
    class DragPerformEvent extends DragAndDropEventBase$1<DragPerformEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * The propagation phases of an event.
     */
    enum PropagationPhase { None = 0, TrickleDown = 1, AtTarget = 2, DefaultActionAtTarget = 5, BubbleUp = 3, DefaultAction = 4 }
    /**
     * Use this enum to specify during which phases the event handler is executed.
     */
    enum TrickleDown { NoTrickleDown = 0, TrickleDown = 1 }
    
    type EventCallback$2<TEventType,TCallbackArgs> = (evt: TEventType, userArgs: TCallbackArgs) => void;
    /**
     * Interface for focus events.
     */
    interface IFocusEvent {
        /**
         * Related target. See implementation for specific meaning.
         */
        relatedTarget: Focusable;
        /**
         * Direction of the focus change.
         */
        direction: FocusChangeDirection;
        
                    
    }
    /**
     * Event sent immediately before an element loses focus. This event trickles down and bubbles up. This event cannot be cancelled.
     */
    class FocusOutEvent extends FocusEventBase$1<FocusOutEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Base class for focus related events.
     */
    interface FocusEventBase$1<T> extends EventBase$1<T> {
        
                    
    }
    /**
     * Event sent immediately after an element has lost focus. This event trickles down, it does not bubble up, and it cannot be cancelled.
     */
    class BlurEvent extends FocusEventBase$1<BlurEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent immediately before an element gains focus. This event trickles down and bubbles up. This event cannot be cancelled.
     */
    class FocusInEvent extends FocusEventBase$1<FocusInEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent immediately after an element has gained focus. This event trickles down, it does not bubble up, and it cannot be cancelled.
     */
    class FocusEvent extends FocusEventBase$1<FocusEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Sends an event when text from a TextField changes.
     */
    class InputEvent extends EventBase$1<InputEvent> {
        /**
         * The text before the change occured.
         */
        public get previousData(): string;
        /**
         * The new text.
         */
        public get newData(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param newData The new text.
         * @param previousData The text before the change occured.
         * @returns An initialized event.
         */
        public static GetPooled($previousData: string, $newData: string):InputEvent;
        
                    
    }
    /**
     * Interface for keyboard events.
     */
    interface IKeyboardEvent {
        /**
         * Flag set holding the pressed modifier keys (Alt, Control, Shift, Windows/Command).
         */
        modifiers: UnityEngine.EventModifiers;
        /**
         * The character.
         */
        character: number;
        /**
         * The key code.
         */
        keyCode: UnityEngine.KeyCode;
        /**
         * Return true if the Shift key is pressed.
         */
        shiftKey: boolean;
        /**
         * Return true if the Control key is pressed.
         */
        ctrlKey: boolean;
        /**
         * Return true if the Windows/Command key is pressed.
         */
        commandKey: boolean;
        /**
         * Return true if the Alt key is pressed.
         */
        altKey: boolean;
        /**
         * Returns true if the platform-specific action key is pressed. This key is Cmd on macOS, and Ctrl on all other platforms.
         */
        actionKey: boolean;
        
                    
    }
    /**
     * Event sent when a key is released on the keyboard. This event trickles down and bubbles up. This event is cancellable.
     */
    class KeyUpEvent extends KeyboardEventBase$1<KeyUpEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent after layout calculations, when the position or the dimension of an element changes. This event cannot be cancelled, it does not trickle down, and it does not bubble up.
     */
    class GeometryChangedEvent extends EventBase$1<GeometryChangedEvent> {
        /**
         * The old dimensions of the element.
         */
        public get oldRect(): UnityEngine.Rect;
        /**
         * The new dimensions of the element.
         */
        public get newRect(): UnityEngine.Rect;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes the event with the specified values. Use this method instead of instancing new events. Use Dispose() to release events back to the event pool.
         * @param oldRect The old dimensions of the element.
         * @param newRect The new dimensions of the element.
         * @returns An initialized event.
         */
        public static GetPooled($oldRect: UnityEngine.Rect, $newRect: UnityEngine.Rect):GeometryChangedEvent;
        
                    
    }
    /**
     * Mouse down event.
     */
    class MouseDownEvent extends MouseEventBase$1<MouseDownEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent An IMGUI mouse event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):MouseDownEvent;
        
                    
    }
    /**
     * Mouse up event.
     */
    class MouseUpEvent extends MouseEventBase$1<MouseUpEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent An IMGUI mouse event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):MouseUpEvent;
        
                    
    }
    /**
     * Mouse move event.
     */
    class MouseMoveEvent extends MouseEventBase$1<MouseMoveEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent An IMGUI mouse event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):MouseMoveEvent;
        
                    
    }
    /**
     * The event sent when clicking the right mouse button.
     */
    class ContextClickEvent extends MouseEventBase$1<ContextClickEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Mouse wheel event.
     */
    class WheelEvent extends MouseEventBase$1<WheelEvent> {
        /**
         * The amount of scrolling applied with the mouse wheel.
         */
        public get delta(): UnityEngine.Vector3;
        /**
         * Constructor. Use GetPooled() to get an event from a pool of reusable events.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent A wheel IMGUI event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):WheelEvent;
        
                    
    }
    /**
     * Event sent when the mouse pointer enters an element or one of its descendent elements. The event is cancellable, it does not trickle down, and it does not bubble up.
     */
    class MouseEnterEvent extends MouseEventBase$1<MouseEnterEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when the mouse pointer exits an element and all its descendent elements. The event is cancellable, it does not trickle down, and it does not bubble up.
     */
    class MouseLeaveEvent extends MouseEventBase$1<MouseLeaveEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when the mouse pointer enters a window. The event is cancellable, it does not trickle down, and it does not bubble up.
     */
    class MouseEnterWindowEvent extends MouseEventBase$1<MouseEnterWindowEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when the mouse pointer exits a window. The event is cancellable, it does not trickle down, and it does not bubble up.
     */
    class MouseLeaveWindowEvent extends MouseEventBase$1<MouseLeaveWindowEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent An IMGUI MouseLeaveWindow event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):MouseLeaveWindowEvent;
        
                    
    }
    /**
     * Event sent when the mouse pointer enters an element. The event trickles down, it bubbles up, and it is cancellable.
     */
    class MouseOverEvent extends MouseEventBase$1<MouseOverEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when the mouse pointer exits an element. The event trickles down, it bubbles up, and it is cancellable.
     */
    class MouseOutEvent extends MouseEventBase$1<MouseOutEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Interface for panel change events.
     */
    interface IPanelChangedEvent {
        
                    
    }
    /**
     * Event sent after an element is added to an element that is a descendent of a panel.
     */
    class AttachToPanelEvent extends PanelChangedEventBase$1<AttachToPanelEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Abstract base class for events notifying of a panel change.
     */
    interface PanelChangedEventBase$1<T> extends EventBase$1<T> {
        
                    
    }
    /**
     * Event sent just before an element is detach from its parent, if the parent is the descendant of a panel.
     */
    class DetachFromPanelEvent extends PanelChangedEventBase$1<DetachFromPanelEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * A static class that holds pointer type values.
     */
    class PointerType extends System.Object {
        /**
         * The pointer type for mouse events.
         */
        public static mouse: string;
        /**
         * The pointer type for touch events.
         */
        public static touch: string;
        /**
         * The pointer type for pen events.
         */
        public static pen: string;
        /**
         * The pointer type for events created by unknown devices.
         */
        public static unknown: string;
        
                    
    }
    /**
     * A static class that holds pointer ID values.
     */
    class PointerId extends System.Object {
        /**
         * The maximum number of pointers the implementation supports.
         */
        public static maxPointers: number;
        /**
         * Represents an invalid pointer ID value.
         */
        public static invalidPointerId: number;
        /**
         * The mouse pointer ID.
         */
        public static mousePointerId: number;
        /**
         * The base ID for touch pointers.
         */
        public static touchPointerIdBase: number;
        /**
         * The number of touch pointers the implementation supports.
         */
        public static touchPointerCount: number;
        /**
         * The base ID for pen pointers.
         */
        public static penPointerIdBase: number;
        /**
         * The number of pen pointers the implementation supports.
         */
        public static penPointerCount: number;
        
                    
    }
    /**
     * Event sent when a pointer is pressed.
     */
    class PointerDownEvent extends PointerEventBase$1<PointerDownEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Base class for pointer events.
     */
    interface PointerEventBase$1<T> extends EventBase$1<T> {
        
                    
    }
    /**
     * Event sent when a pointer changes state.
     */
    class PointerMoveEvent extends PointerEventBase$1<PointerMoveEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * An event sent when a pointer does not change for a set amount of time determined by the operating system.
     */
    class PointerStationaryEvent extends PointerEventBase$1<PointerStationaryEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when the last depressed button of a pointer is released.
     */
    class PointerUpEvent extends PointerEventBase$1<PointerUpEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when pointer interaction is cancelled.
     */
    class PointerCancelEvent extends PointerEventBase$1<PointerCancelEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * The event sent when the left mouse button is clicked.
     */
    class ClickEvent extends PointerEventBase$1<ClickEvent> {
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when a pointer enters a VisualElement or one of its descendant.
     */
    class PointerEnterEvent extends PointerEventBase$1<PointerEnterEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when a pointer exits an element and all of its descendant.
     */
    class PointerLeaveEvent extends PointerEventBase$1<PointerLeaveEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when a pointer enters a VisualElement.
     */
    class PointerOverEvent extends PointerEventBase$1<PointerOverEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent when a pointer exits an element.
     */
    class PointerOutEvent extends PointerEventBase$1<PointerOutEvent> {
        /**
         * Constructor. Avoid creating new event instances. Instead, use GetPooled() to get an instance from a pool of reusable event instances.
         */
        public constructor();
        
                    
    }
    /**
     * Event sent after the custom style properties of a VisualElement have been resolved.
     */
    class CustomStyleResolvedEvent extends EventBase$1<CustomStyleResolvedEvent> {
        /**
         * Returns the custom style properties accessor for the targeted VisualElement.
         */
        public get customStyle(): ICustomStyle;
        
        public constructor();
        
                    
    }
    /**
     * Event sent to find the first VisualElement that displays a tooltip.
     */
    class TooltipEvent extends EventBase$1<TooltipEvent> {
        /**
         * Text to display inside the tooltip box.
         */
        public get tooltip(): string;
        public set tooltip(value: string);
        /**
         * Rectangle of the hovered VisualElement in the panel coordinate system.
         */
        public get rect(): UnityEngine.Rect;
        public set rect(value: UnityEngine.Rect);
        
        public constructor();
        
                    
    }
    /**
     * Class used to send a IMGUI event that has no equivalent UIElements event.
     */
    class IMGUIEvent extends EventBase$1<IMGUIEvent> {
        /**
         * Constructor. Use GetPooled() to get an event from a pool of reusable events.
         */
        public constructor();
        /**
         * Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.
         * @param systemEvent The IMGUI event used to initialize the event.
         * @returns An initialized event.
         */
        public static GetPooled($systemEvent: UnityEngine.Event):IMGUIEvent;
        
                    
    }
    /**
     * Represents a vertex of geometry for drawing content of VisualElement.
     */
    class Vertex extends System.ValueType {
        /**
         * A special value representing the near clipping plane. Always use this value as the vertex position's z component when building 2D (flat) UI geometry.
         */
        public static nearZ: number;
        /**
         * Describes the vertex's position.
         */
        public position: UnityEngine.Vector3;
        /**
         * A color value for the vertex.
         */
        public tint: UnityEngine.Color32;
        /**
         * The UV coordinate of the vertex.
         */
        public uv: UnityEngine.Vector2;
        
        public get_Clone(): Vertex;            
    }
    /**
     * A class that represents the vertex and index data allocated for drawing the content of a VisualElement.
     */
    class MeshWriteData extends System.Object {
        /**
         * The number of vertices successfully allocated for VisualElement content drawing.
         */
        public get vertexCount(): number;
        /**
         * The number of indices successfully allocated for VisualElement content drawing.
         */
        public get indexCount(): number;
        /**
         * A rectangle describing the UV region holding the texture passed to MeshGenerationContext.Allocate.
         */
        public get uvRegion(): UnityEngine.Rect;
        /**
         * Assigns the value of the next vertex of the allocated vertices list.
         * @param vertex The value of the next vertex.
         */
        public SetNextVertex($vertex: Vertex):void;
        /**
         * Assigns the value of the next index of the allocated indices list.
         * @param index The value of the next index.
         */
        public SetNextIndex($index: number):void;
        /**
         * Fills the values of the allocated vertices with values copied directly from an array.
         * When this method is called, it is not possible to use SetNextVertex to fill the allocated vertices array.
         * @param vertices The array of vertices to copy from. The length of the array must match the allocated vertex count.
         */
        public SetAllVertices($vertices: Vertex[]):void;
        
        public SetAllVertices($vertices: Unity_Collections.NativeSlice$1<Vertex>):void;
        /**
         * Fills the values of the allocated indices with values copied directly from an array. Each 3 consecutive indices form a single triangle.
         * @param indices The array of indices to copy from. The length of the array must match the allocated index count.
         */
        public SetAllIndices($indices: number[]):void;
        
        public SetAllIndices($indices: Unity_Collections.NativeSlice$1<number>):void;
        
                    
    }
    /**
     * Describes a VisualElement background.
     */
    class Background extends System.ValueType {
        /**
         * The texture to display as a background. You cannot set this and Background.vectorImage at the same time.
         */
        public get texture(): UnityEngine.Texture2D;
        public set texture(value: UnityEngine.Texture2D);
        /**
         * The VectorImage to display as a background.  You cannot set this and Background.texture at the same time.
         */
        public get vectorImage(): VectorImage;
        public set vectorImage(value: VectorImage);
        /**
         * Creates a background from a Texture2D.
         * @param t The texture to use as a background.
         * @returns A new background object.
         */
        public static FromTexture2D($t: UnityEngine.Texture2D):Background;
        /**
         * Creates a background from a VectorImage.
         * @param vi The vector image to use as a background.
         * @returns A new background object.
         */
        public static FromVectorImage($vi: VectorImage):Background;
        
        public static op_Equality($lhs: Background, $rhs: Background):boolean;
        
        public static op_Inequality($lhs: Background, $rhs: Background):boolean;
        
        public Equals($other: Background):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
                    
    }
    /**
     * Define a custom style property for an element to be retrieved with CustomStyleResolvedEvent.
     */
    interface CustomStyleProperty$1<T> extends System.ValueType {
        
                    
    }
    /**
     * Describes how to interpret a Length value.
     */
    enum LengthUnit { Pixel = 0, Percent = 1 }
    /**
     * Reprensents a distance value.
     */
    class Length extends System.ValueType {
        /**
         * The length value.
         */
        public get value(): number;
        public set value(value: number);
        /**
         * The unit of the value property.
         */
        public get unit(): LengthUnit;
        public set unit(value: LengthUnit);
        /**
         * Creates from a float and an optionnal LengthUnit.
         */
        public constructor($value: number);
        /**
         * Creates from a float and an optionnal LengthUnit.
         */
        public constructor($value: number, $unit: LengthUnit);
        /**
         * Creates a percentage Length from a float.
         * @returns The created length.
         */
        public static Percent($value: number):Length;
        
        public static op_Implicit($value: number):Length;
        
        public static op_Equality($lhs: Length, $rhs: Length):boolean;
        
        public static op_Inequality($lhs: Length, $rhs: Length):boolean;
        
        public Equals($other: Length):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
        public get_Clone(): Length;            
    }
    /**
     * Style value that can be either a Background or a StyleKeyword.
     */
    class StyleBackground extends System.ValueType {
        /**
         * The Background value.
         */
        public get value(): Background;
        public set value(value: Background);
        /**
         * The style keyword.
         */
        public get keyword(): StyleKeyword;
        public set keyword(value: StyleKeyword);
        /**
         * Creates from either a Background or a StyleKeyword.
         */
        public constructor($v: Background);
        /**
         * Creates from either a Background or a StyleKeyword.
         */
        public constructor($v: UnityEngine.Texture2D);
        
        public constructor($v: VectorImage);
        /**
         * Creates from either a Background or a StyleKeyword.
         */
        public constructor($keyword: StyleKeyword);
        
        public static op_Equality($lhs: StyleBackground, $rhs: StyleBackground):boolean;
        
        public static op_Inequality($lhs: StyleBackground, $rhs: StyleBackground):boolean;
        
        public static op_Implicit($keyword: StyleKeyword):StyleBackground;
        
        public static op_Implicit($v: Background):StyleBackground;
        
        public static op_Implicit($v: UnityEngine.Texture2D):StyleBackground;
        
        public Equals($other: StyleBackground):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
                    
    }
    /**
     * Keyword that can be used on any style value types.
     */
    enum StyleKeyword { Undefined = 0, Null = 1, Auto = 2, None = 3, Initial = 4 }
    /**
     * Style value that can be either a Color or a StyleKeyword.
     */
    class StyleColor extends System.ValueType {
        /**
         * The Color value.
         */
        public get value(): UnityEngine.Color;
        public set value(value: UnityEngine.Color);
        /**
         * The style keyword.
         */
        public get keyword(): StyleKeyword;
        public set keyword(value: StyleKeyword);
        /**
         * Creates from either a Color or StyleKeyword.
         */
        public constructor($v: UnityEngine.Color);
        /**
         * Creates from either a Color or StyleKeyword.
         */
        public constructor($keyword: StyleKeyword);
        
        public static op_Equality($lhs: StyleColor, $rhs: StyleColor):boolean;
        
        public static op_Inequality($lhs: StyleColor, $rhs: StyleColor):boolean;
        
        public static op_Equality($lhs: StyleColor, $rhs: UnityEngine.Color):boolean;
        
        public static op_Inequality($lhs: StyleColor, $rhs: UnityEngine.Color):boolean;
        
        public static op_Implicit($keyword: StyleKeyword):StyleColor;
        
        public static op_Implicit($v: UnityEngine.Color):StyleColor;
        
        public Equals($other: StyleColor):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
        public get_Clone(): StyleColor;            
    }
    /**
     * Style value that can be either a Cursor or a StyleKeyword.
     */
    class StyleCursor extends System.ValueType {
        /**
         * The Cursor value.
         */
        public get value(): Cursor;
        public set value(value: Cursor);
        /**
         * The style keyword.
         */
        public get keyword(): StyleKeyword;
        public set keyword(value: StyleKeyword);
        /**
         * Creates from either a Cursor or StyleKeyword.
         */
        public constructor($v: Cursor);
        /**
         * Creates from either a Cursor or StyleKeyword.
         */
        public constructor($keyword: StyleKeyword);
        
        public static op_Equality($lhs: StyleCursor, $rhs: StyleCursor):boolean;
        
        public static op_Inequality($lhs: StyleCursor, $rhs: StyleCursor):boolean;
        
        public static op_Implicit($keyword: StyleKeyword):StyleCursor;
        
        public static op_Implicit($v: Cursor):StyleCursor;
        
        public Equals($other: StyleCursor):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
                    
    }
    /**
     * Style value that can be either a float or a StyleKeyword.
     */
    class StyleFloat extends System.ValueType {
        /**
         * The float value.
         */
        public get value(): number;
        public set value(value: number);
        /**
         * The style keyword.
         */
        public get keyword(): StyleKeyword;
        public set keyword(value: StyleKeyword);
        /**
         * Creates from either a float or a StyleKeyword.
         */
        public constructor($v: number);
        /**
         * Creates from either a float or a StyleKeyword.
         */
        public constructor($keyword: StyleKeyword);
        
        public static op_Equality($lhs: StyleFloat, $rhs: StyleFloat):boolean;
        
        public static op_Inequality($lhs: StyleFloat, $rhs: StyleFloat):boolean;
        
        public static op_Implicit($keyword: StyleKeyword):StyleFloat;
        
        public static op_Implicit($v: number):StyleFloat;
        
        public Equals($other: StyleFloat):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
        public get_Clone(): StyleFloat;            
    }
    /**
     * Style value that can be either a Font or a StyleKeyword.
     */
    class StyleFont extends System.ValueType {
        /**
         * The Font value.
         */
        public get value(): UnityEngine.Font;
        public set value(value: UnityEngine.Font);
        /**
         * The style keyword.
         */
        public get keyword(): StyleKeyword;
        public set keyword(value: StyleKeyword);
        /**
         * Creates from a Font or StyleKeyword.
         */
        public constructor($v: UnityEngine.Font);
        /**
         * Creates from a Font or StyleKeyword.
         */
        public constructor($keyword: StyleKeyword);
        
        public static op_Equality($lhs: StyleFont, $rhs: StyleFont):boolean;
        
        public static op_Inequality($lhs: StyleFont, $rhs: StyleFont):boolean;
        
        public static op_Implicit($keyword: StyleKeyword):StyleFont;
        
        public static op_Implicit($v: UnityEngine.Font):StyleFont;
        
        public Equals($other: StyleFont):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
                    
    }
    /**
     * Style value that can be either an integer or a StyleKeyword.
     */
    class StyleInt extends System.ValueType {
        /**
         * The integer value.
         */
        public get value(): number;
        public set value(value: number);
        /**
         * The style keyword.
         */
        public get keyword(): StyleKeyword;
        public set keyword(value: StyleKeyword);
        /**
         * Creates from either an integer or StyleKeyword.
         */
        public constructor($v: number);
        /**
         * Creates from either an integer or StyleKeyword.
         */
        public constructor($keyword: StyleKeyword);
        
        public static op_Equality($lhs: StyleInt, $rhs: StyleInt):boolean;
        
        public static op_Inequality($lhs: StyleInt, $rhs: StyleInt):boolean;
        
        public static op_Implicit($keyword: StyleKeyword):StyleInt;
        
        public static op_Implicit($v: number):StyleInt;
        
        public Equals($other: StyleInt):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
        public get_Clone(): StyleInt;            
    }
    /**
     * Style value that can be either a Length or a StyleKeyword.
     */
    class StyleLength extends System.ValueType {
        /**
         * The Length value.
         */
        public get value(): Length;
        public set value(value: Length);
        /**
         * The style keyword.
         */
        public get keyword(): StyleKeyword;
        public set keyword(value: StyleKeyword);
        /**
         * Creates from either a Length or a StyleKeyword.
         */
        public constructor($v: number);
        /**
         * Creates from either a Length or a StyleKeyword.
         */
        public constructor($v: Length);
        /**
         * Creates from either a Length or a StyleKeyword.
         */
        public constructor($keyword: StyleKeyword);
        
        public static op_Equality($lhs: StyleLength, $rhs: StyleLength):boolean;
        
        public static op_Inequality($lhs: StyleLength, $rhs: StyleLength):boolean;
        
        public static op_Implicit($keyword: StyleKeyword):StyleLength;
        
        public static op_Implicit($v: number):StyleLength;
        
        public static op_Implicit($v: Length):StyleLength;
        
        public Equals($other: StyleLength):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public ToString():string;
        
        public get_Clone(): StyleLength;            
    }
    /**
     * Style value that can be either an enum or a StyleKeyword.
     */
    interface StyleEnum$1<T> extends System.ValueType {
        
                    
    }
    /**
     * The theme style sheet is a collection of themes, style sheets, and rules used to define default UI appearance.
     */
    class ThemeStyleSheet extends StyleSheet {
        
        public constructor();
        
                    
    }
    /**
     * Factory for the root UXML element.
     */
    class UxmlRootElementFactory extends UxmlFactory$2<VisualElement, UxmlRootElementTraits> {
        /**
         * Returns "UXML".
         */
        public get uxmlName(): string;
        /**
         * Returns the qualified name for this element.
         */
        public get uxmlQualifiedName(): string;
        /**
         * Returns the empty string, as the root element can not appear anywhere else bit at the root of the document.
         */
        public get substituteForTypeName(): string;
        /**
         * Returns the empty string, as the root element can not appear anywhere else bit at the root of the document.
         */
        public get substituteForTypeNamespace(): string;
        /**
         * Returns the empty string, as the root element can not appear anywhere else bit at the root of the document.
         */
        public get substituteForTypeQualifiedName(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Returns null.
         */
        public Create($bag: IUxmlAttributes, $cc: CreationContext):VisualElement;
        
                    
    }
    /**
     * Defines UxmlTraits for the UXML root element.
     */
    class UxmlRootElementTraits extends UxmlTraits {
        /**
         * Returns an enumerable containing UxmlChildElementDescription(typeof(VisualElement)), since the root element can contain VisualElements.
         */
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UxmlChildElementDescription>;
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Factory for the root Style element.
     */
    class UxmlStyleFactory extends UxmlFactory$2<VisualElement, UxmlStyleTraits> {
        
        public get uxmlName(): string;
        
        public get uxmlQualifiedName(): string;
        
        public get substituteForTypeName(): string;
        
        public get substituteForTypeNamespace(): string;
        
        public get substituteForTypeQualifiedName(): string;
        /**
         * Constructor.
         */
        public constructor();
        
        public Create($bag: IUxmlAttributes, $cc: CreationContext):VisualElement;
        
                    
    }
    /**
     * Defines UxmlTraits for the <Style> tag.
     */
    class UxmlStyleTraits extends UxmlTraits {
        /**
         * Returns an empty enumerable because <Style> cannot have children.
         */
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UxmlChildElementDescription>;
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Factory for the root Template element.
     */
    class UxmlTemplateFactory extends UxmlFactory$2<VisualElement, UxmlTemplateTraits> {
        
        public get uxmlName(): string;
        
        public get uxmlQualifiedName(): string;
        
        public get substituteForTypeName(): string;
        
        public get substituteForTypeNamespace(): string;
        
        public get substituteForTypeQualifiedName(): string;
        /**
         * Constructor.
         */
        public constructor();
        
        public Create($bag: IUxmlAttributes, $cc: CreationContext):VisualElement;
        
                    
    }
    /**
     * Defines UxmlTraits for the <Template> tag.
     */
    class UxmlTemplateTraits extends UxmlTraits {
        /**
         * Returns an empty enumerable because <Template> cannot have children.
         */
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UxmlChildElementDescription>;
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Factory for the root AttributeOverrides element.
     */
    class UxmlAttributeOverridesFactory extends UxmlFactory$2<VisualElement, UxmlAttributeOverridesTraits> {
        
        public get uxmlName(): string;
        
        public get uxmlQualifiedName(): string;
        
        public get substituteForTypeName(): string;
        
        public get substituteForTypeNamespace(): string;
        
        public get substituteForTypeQualifiedName(): string;
        /**
         * Constructor.
         */
        public constructor();
        
        public Create($bag: IUxmlAttributes, $cc: CreationContext):VisualElement;
        
                    
    }
    /**
     * Defines UxmlTraits for the <AttributeOverrides> tag.
     */
    class UxmlAttributeOverridesTraits extends UxmlTraits {
        /**
         * Returns an empty enumerable because <AttributeOverrides> cannot have children.
         */
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UxmlChildElementDescription>;
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Base class to restricts the value of an attribute.
     */
    class UxmlTypeRestriction extends System.Object {
        /**
         * Indicates whether the current UxmlTypeRestriction object is equal to another object of the same type.
         * @param other The object to compare with.
         * @returns True if the otheer object is equal to this one.
         */
        public Equals($other: UxmlTypeRestriction):boolean;
        
                    
    }
    /**
     * Describes a XML double attribute.
     */
    class UxmlDoubleAttributeDescription extends TypedUxmlAttributeDescription$1<number> {
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Retrieves the value of this attribute from the attribute bag. Returns it if it is found, otherwise return defaultValue.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @returns The value of the attribute.
         */
        public GetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext):number;
        /**
         * Tries to retrieve the value of this attribute from the attribute bag. Returns true if it is found, otherwise returns false.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @param value The value of the attribute.
         * @returns True if the value could be retrieved, false otherwise.
         */
        public TryGetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext, $value: $Ref<number>):boolean;
        
                    
    }
    /**
     * Describes a XML long attribute.
     */
    class UxmlLongAttributeDescription extends TypedUxmlAttributeDescription$1<bigint> {
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Retrieves the value of this attribute from the attribute bag. Returns it if it is found, otherwise return defaultValue.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @returns The value of the attribute.
         */
        public GetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext):bigint;
        /**
         * Tries to retrieve the value of this attribute from the attribute bag. Returns true if it is found, otherwise returns false.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @param value The value of the attribute.
         * @returns True if the value could be retrieved, false otherwise.
         */
        public TryGetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext, $value: $Ref<bigint>):boolean;
        
                    
    }
    /**
     * Describes a XML attribute representing a Color as a string.
     */
    class UxmlColorAttributeDescription extends TypedUxmlAttributeDescription$1<UnityEngine.Color> {
        /**
         * The default value for the attribute, as a string.
         */
        public get defaultValueAsString(): string;
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Retrieves the value of this attribute from the attribute bag. Returns it if it is found, otherwise return defaultValue.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @returns The value of the attribute.
         */
        public GetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext):UnityEngine.Color;
        /**
         * Tries to retrieve the value of this attribute from the attribute bag. Returns true if it is found, otherwise returns false.
         * @param bag The bag of attributes.
         * @param cc The context in which the values are retrieved.
         * @param value The value of the attribute.
         * @returns True if the value could be retrieved, false otherwise.
         */
        public TryGetValueFromBag($bag: IUxmlAttributes, $cc: CreationContext, $value: $Ref<UnityEngine.Color>):boolean;
        
                    
    }
    /**
     * Interface for UXML factories. While it is not strictly required, concrete factories should derive from the generic class UxmlFactory.
     */
    interface IUxmlFactory {
        /**
         * The name of the UXML element read by the factory.
         */
        uxmlName: string;
        /**
         * The namespace of the UXML element read by the factory.
         */
        uxmlNamespace: string;
        /**
         * The fully qualified name of the UXML element read by the factory.
         */
        uxmlQualifiedName: string;
        /**
         * Must return true if the UXML element attributes are not restricted to the values enumerated by uxmlAttributesDescription.
         */
        canHaveAnyAttribute: boolean;
        /**
         * Describes the UXML attributes expected by the element. The attributes enumerated here will appear in the UXML schema.
         */
        uxmlAttributesDescription: System_Collections_Generic.IEnumerable$1<UxmlAttributeDescription>;
        /**
         * Describes the types of element that can appear as children of this element in a UXML file.
         */
        uxmlChildElementsDescription: System_Collections_Generic.IEnumerable$1<UxmlChildElementDescription>;
        /**
         * The type of element for which this element type can substitute for.
         */
        substituteForTypeName: string;
        /**
         * The UXML namespace for the type returned by substituteForTypeName.
         */
        substituteForTypeNamespace: string;
        /**
         * The fully qualified XML name for the type returned by substituteForTypeName.
         */
        substituteForTypeQualifiedName: string;
        
        AcceptsAttributeBag($bag: IUxmlAttributes, $cc: CreationContext):boolean;
        /**
         * Instanciate and initialize an object of type T0.
         * @param bag A bag of name-value pairs, one for each attribute of the UXML element. This can be used to initialize the properties of the created object.
         * @param cc When the element is created as part of a template instance inserted in another document, this contains information about the insertion point.
         * @returns The created object.
         */
        Create($bag: IUxmlAttributes, $cc: CreationContext):VisualElement;
        
                    
    }
    /**
     * Restricts the value of an attribute to match a regular expression.
     */
    class UxmlValueMatches extends UxmlTypeRestriction {
        /**
         * The regular expression that should be matched by the value.
         */
        public get regex(): string;
        public set regex(value: string);
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Restricts the value of an attribute to be within the specified bounds.
     */
    class UxmlValueBounds extends UxmlTypeRestriction {
        /**
         * The minimum value for the attribute.
         */
        public get min(): string;
        public set min(value: string);
        /**
         * The maximum value for the attribute.
         */
        public get max(): string;
        public set max(value: string);
        /**
         * True if the bounds exclude min.
         */
        public get excludeMin(): boolean;
        public set excludeMin(value: boolean);
        /**
         * True if the bounds exclude max.
         */
        public get excludeMax(): boolean;
        public set excludeMax(value: boolean);
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * Restricts the value of an attribute to be taken from a list of values.
     */
    class UxmlEnumeration extends UxmlTypeRestriction {
        /**
         * The list of values the attribute can take.
         */
        public get values(): System_Collections_Generic.IEnumerable$1<string>;
        public set values(value: System_Collections_Generic.IEnumerable$1<string>);
        /**
         * Constructor.
         */
        public constructor();
        
                    
    }
    /**
     * An instance of this class holds a tree of `VisualElementAsset`s, created from a UXML file. Each node in the file corresponds to a `VisualElementAsset`. You can clone a `VisualTreeAsset` to yield a tree of `VisualElement`s.
     */
    class VisualTreeAsset extends UnityEngine.ScriptableObject {
        /**
         * The UXML templates used by this VisualTreeAsset.
         */
        public get templateDependencies(): System_Collections_Generic.IEnumerable$1<VisualTreeAsset>;
        /**
         * The stylesheets used by this VisualTreeAsset.
         */
        public get stylesheets(): System_Collections_Generic.IEnumerable$1<StyleSheet>;
        /**
         * A hash value computed from the template content.
         */
        public get contentHash(): number;
        public set contentHash(value: number);
        /**
         * Constructor.
         */
        public constructor();
        /**
         * Build a tree of VisualElements from the asset.
         * @param bindingPath The path to the property that you want to bind to the root of the cloned tree.
         * @returns The root of the tree of VisualElements that was just cloned.
         */
        public Instantiate():TemplateContainer;
        /**
         * Build a tree of VisualElements from the asset.
         * @param bindingPath The path to the property that you want to bind to the root of the cloned tree.
         * @returns The root of the tree of VisualElements that was just cloned.
         */
        public Instantiate($bindingPath: string):TemplateContainer;
        /**
         * Build a tree of VisualElements from the asset.
         * @param bindingPath The path to the property that you want to bind to the root of the cloned tree.
         * @returns The root of the tree of VisualElements that was just cloned.
         */
        public CloneTree():TemplateContainer;
        /**
         * Build a tree of VisualElements from the asset.
         * @param bindingPath The path to the property that you want to bind to the root of the cloned tree.
         * @returns The root of the tree of VisualElements that was just cloned.
         */
        public CloneTree($bindingPath: string):TemplateContainer;
        /**
         * Builds a tree of VisualElements from the asset.
         * @param target A VisualElement that will act as the root of the cloned tree.
         */
        public CloneTree($target: VisualElement):void;
        
        public CloneTree($target: VisualElement, $firstElementIndex: $Ref<number>, $elementAddedCount: $Ref<number>):void;
        
                    
    }
    
    interface IEventHandler {
        /**
         * Checks if the event handler is capturing the mouse.
         * @param handler Event handler to check.
         * @returns True if the handler captures the mouse.
         * @extension UnityEngine.UIElements.MouseCaptureController
         */
        HasMouseCapture():boolean;
        /**
         * Assigns an event handler to capture mouse events.
         * @param handler The event handler that captures mouse events.
         * @extension UnityEngine.UIElements.MouseCaptureController
         */
        CaptureMouse():void;
        /**
         * Stops an event handler from capturing the mouse.
         * @param handler The event handler to stop capturing the mouse. If this handler is not assigned to capturing the mouse, nothing happens.
         * @extension UnityEngine.UIElements.MouseCaptureController
         */
        ReleaseMouse():void;
        /**
         * Tests whether the element has captured the pointer.
         * @param handler The VisualElement being tested.
         * @param pointerId The captured pointer.
         * @returns True if element captured the pointer.
         * @extension UnityEngine.UIElements.PointerCaptureHelper
         */
        HasPointerCapture($pointerId: number):boolean;
        /**
         * Captures the pointer.
         * @param handler The VisualElement that captures the pointer.
         * @param pointerId The pointer to capture.
         * @extension UnityEngine.UIElements.PointerCaptureHelper
         */
        CapturePointer($pointerId: number):void;
        /**
         * Tests whether an element captured a pointer and, if so, tells the element to release the pointer.
         * @param handler The element which potentially captured the pointer.
         * @param pointerId The captured pointer.
         * @extension UnityEngine.UIElements.PointerCaptureHelper
         */
        ReleasePointer($pointerId: number):void;
        
                    
    }
    
    interface IPanel {
        /**
         * Returns the element that is capturing the pointer.
         * @param panel The panel that holds the element.
         * @param pointerId The captured pointer.
         * @returns The element that is capturing the pointer.
         * @extension UnityEngine.UIElements.PointerCaptureHelper
         */
        GetCapturingElement($pointerId: number):IEventHandler;
        /**
         * Releases the pointer.
         * @param panel The panel that holds the element that captured the pointer.
         * @param pointerId The captured pointer.
         * @extension UnityEngine.UIElements.PointerCaptureHelper
         */
        ReleasePointer($pointerId: number):void;
        
                    
    }
    
    interface VisualElement {
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Q<T>($name?: string, ...classes: string[]):VisualElement;
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Q($name?: string, ...classes: string[]):VisualElement;
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Q<T>($name?: string, $className?: string):VisualElement;
        /**
         * Convenience overload, shorthand for Query<T>.Build().First().
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns The first element matching all the criteria, or null if none was found.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Q($name?: string, $className?: string):VisualElement;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Query($name?: string, ...classes: string[]):UQueryBuilder$1<VisualElement>;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Query($name?: string, $className?: string):UQueryBuilder$1<VisualElement>;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Query<T>($name?: string, ...classes: string[]):UQueryBuilder$1<T>;
        /**
         * Initializes a QueryBuilder with the specified selection rules. Template parameter specifies the type of elements the selector applies to (ie: Label, Button, etc).
         * @param e Root VisualElement on which the selector will be applied.
         * @param name If specified, will select elements with this name.
         * @param classes If specified, will select elements with the given class (not to be confused with Type).
         * @param className If specified, will select elements with the given class (not to be confused with Type).
         * @returns QueryBuilder configured with the associated selection rules.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Query<T>($name?: string, $className?: string):UQueryBuilder$1<T>;
        /**
         * Initializes an empty QueryBuilder on a specified root element.
         * @param e Root VisualElement on which the selector will be applied.
         * @returns An empty QueryBuilder on a specified root element.
         * @extension UnityEngine.UIElements.UQueryExtensions
         */
        Query():UQueryBuilder$1<VisualElement>;
        /** @extension UnityEngine.UIElements.VisualElementExtensions */
        WorldToLocal($p: UnityEngine.Vector2):UnityEngine.Vector2;
        /** @extension UnityEngine.UIElements.VisualElementExtensions */
        LocalToWorld($p: UnityEngine.Vector2):UnityEngine.Vector2;
        /** @extension UnityEngine.UIElements.VisualElementExtensions */
        WorldToLocal($r: UnityEngine.Rect):UnityEngine.Rect;
        /** @extension UnityEngine.UIElements.VisualElementExtensions */
        LocalToWorld($r: UnityEngine.Rect):UnityEngine.Rect;
        /** @extension UnityEngine.UIElements.VisualElementExtensions */
        ChangeCoordinatesTo($dest: VisualElement, $point: UnityEngine.Vector2):UnityEngine.Vector2;
        /** @extension UnityEngine.UIElements.VisualElementExtensions */
        ChangeCoordinatesTo($dest: VisualElement, $rect: UnityEngine.Rect):UnityEngine.Rect;
        /** @extension UnityEngine.UIElements.VisualElementExtensions */
        StretchToParentSize():void;
        /**
         * The given VisualElement's left and right edges will be aligned with the corresponding edges of the parent element.
         * @extension UnityEngine.UIElements.VisualElementExtensions
         */
        StretchToParentWidth():void;
        /**
         * Add a manipulator associated to a VisualElement.
         * @param ele VisualElement associated to the manipulator.
         * @param manipulator Manipulator to be added to the VisualElement.
         * @extension UnityEngine.UIElements.VisualElementExtensions
         */
        AddManipulator($manipulator: IManipulator):void;
        /**
         * Remove a manipulator associated to a VisualElement.
         * @param ele VisualElement associated to the manipulator.
         * @param manipulator Manipulator to be removed from the VisualElement.
         * @extension UnityEngine.UIElements.VisualElementExtensions
         */
        RemoveManipulator($manipulator: IManipulator):void;
        
                    
    }
    
    interface IBindable {
        /**
         * Checks if a IBindable is bound to a property.
         * @param control This Bindable object.
         * @returns True if this IBindable is bound to a property.
         * @extension UnityEngine.UIElements.IBindingExtensions
         */
        IsBound():boolean;
        
                    
    }
    
    interface INotifyValueChanged$1 {
        /** @extension UnityEngine.UIElements.INotifyValueChangedExtensions */
        RegisterValueChangedCallback<T>($callback: EventCallback$1<ChangeEvent$1<T>>):boolean;
        /** @extension UnityEngine.UIElements.INotifyValueChangedExtensions */
        UnregisterValueChangedCallback<T>($callback: EventCallback$1<ChangeEvent$1<T>>):boolean;
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    type Func$2<T,TResult> = (arg: T) => TResult;
    
    interface Single extends ValueType {
        
                    
    }
    
    type Comparison$1<T> = (x: T, y: T) => number;
    
    type Func$1<TResult> = () => TResult;
    
    type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
    
    interface Char extends ValueType {
        
                    
    }
    
    interface UInt16 extends ValueType {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.BindableElement' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a BindableElement using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<BindableElement, UnityEngine_UIElements_BindableElement.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the BindableElement.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.VisualElement' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as System from 'System';
        
    /**
     * Defines UxmlTraits for the VisualElement.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    /**
     * The modes available to measure VisualElement sizes.
     */
    enum MeasureMode { Undefined = 0, Exactly = 1, AtMost = 2 }
    /**
     * Hierarchy is a struct allowing access to the hierarchy of visual elements
     */
    class Hierarchy extends System.ValueType {
        
        public get parent(): UnityEngine_UIElements.VisualElement;
        
        public get childCount(): number;
        
        public Add($child: UnityEngine_UIElements.VisualElement):void;
        
        public Insert($index: number, $child: UnityEngine_UIElements.VisualElement):void;
        
        public Remove($child: UnityEngine_UIElements.VisualElement):void;
        
        public RemoveAt($index: number):void;
        
        public Clear():void;
        
        public get_Item($key: number):UnityEngine_UIElements.VisualElement;
        
        public IndexOf($element: UnityEngine_UIElements.VisualElement):number;
        
        public ElementAt($index: number):UnityEngine_UIElements.VisualElement;
        
        public Children():System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.VisualElement>;
        
        public Sort($comp: System.Comparison$1<UnityEngine_UIElements.VisualElement>):void;
        
        public Equals($other: Hierarchy):boolean;
        
        public Equals($obj: any):boolean;
        
        public GetHashCode():number;
        
        public static op_Equality($x: Hierarchy, $y: Hierarchy):boolean;
        
        public static op_Inequality($x: Hierarchy, $y: Hierarchy):boolean;
        
                    
    }
    /**
     * Instantiates a VisualElement using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<VisualElement, UnityEngine_UIElements_VisualElement.UxmlTraits> {
        
        public constructor();
        
                    
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
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    /**
     * Types of modifier key that can be active during a keystroke event.
     */
    enum EventModifiers { None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
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
     * A standard 4x4 transformation matrix.
     */
    interface Matrix4x4 extends System.ValueType {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Scaling mode to draw textures with.
     */
    enum ScaleMode { StretchToFill = 0, ScaleAndCrop = 1, ScaleToFit = 2 }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * A UnityGUI event.
     */
    interface Event extends System.Object {
        
                    
    }
    /**
     * Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard.
     */
    enum KeyCode { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
    /**
     * Representation of RGBA colors in 32 bit format.
     */
    interface Color32 extends System.ValueType {
        
                    
    }
    /**
     * Script interface for.
     */
    interface Font extends Object {
        
                    
    }
    /**
     * Font Style applied to GUI Texts, Text Meshes or GUIStyles.
     */
    enum FontStyle { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
    /**
     * Where the anchor of the text is placed.
     */
    enum TextAnchor { UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
    
}
declare module 'UnityEngine.UIElements.DropdownMenuAction' {

    import * as System from 'System';
        
    /**
     * Status of the menu item. The values of this enumeration should be used as flags.
     */
    enum Status { None = 0, Normal = 1, Disabled = 2, Checked = 4, Hidden = 8 }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface IEnumerable$1<T> {
        
                    
    }
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.IMGUIContainer' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Instantiates an IMGUIContainer using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<IMGUIContainer, UnityEngine_UIElements_IMGUIContainer.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the IMGUIContainer.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.TemplateContainer' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Instantiates and clones a TemplateContainer using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<TemplateContainer, UnityEngine_UIElements_TemplateContainer.UxmlTraits> {
        
        public get uxmlName(): string;
        
        public get uxmlQualifiedName(): string;
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the TemplateContainer.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.TextElement' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Instantiates a TextElement using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<TextElement, UnityEngine_UIElements_TextElement.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the TextElement.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Experimental' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Provides helper methods to create transition animations  for VisualElement style values
     */
    interface ITransitionAnimations {
        
        Start($from: number, $to: number, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, number>):ValueAnimation$1<number>;
        
        Start($from: UnityEngine.Rect, $to: UnityEngine.Rect, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Rect>):ValueAnimation$1<UnityEngine.Rect>;
        
        Start($from: UnityEngine.Color, $to: UnityEngine.Color, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Color>):ValueAnimation$1<UnityEngine.Color>;
        
        Start($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Vector3>):ValueAnimation$1<UnityEngine.Vector3>;
        
        Start($from: UnityEngine.Vector2, $to: UnityEngine.Vector2, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Vector2>):ValueAnimation$1<UnityEngine.Vector2>;
        
        Start($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Quaternion>):ValueAnimation$1<UnityEngine.Quaternion>;
        
        Start($from: StyleValues, $to: StyleValues, $durationMs: number):ValueAnimation$1<StyleValues>;
        
        Start($to: StyleValues, $durationMs: number):ValueAnimation$1<StyleValues>;
        
        Start($fromValueGetter: System.Func$2<UnityEngine_UIElements.VisualElement, number>, $to: number, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, number>):ValueAnimation$1<number>;
        
        Start($fromValueGetter: System.Func$2<UnityEngine_UIElements.VisualElement, UnityEngine.Rect>, $to: UnityEngine.Rect, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Rect>):ValueAnimation$1<UnityEngine.Rect>;
        
        Start($fromValueGetter: System.Func$2<UnityEngine_UIElements.VisualElement, UnityEngine.Color>, $to: UnityEngine.Color, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Color>):ValueAnimation$1<UnityEngine.Color>;
        
        Start($fromValueGetter: System.Func$2<UnityEngine_UIElements.VisualElement, UnityEngine.Vector3>, $to: UnityEngine.Vector3, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Vector3>):ValueAnimation$1<UnityEngine.Vector3>;
        
        Start($fromValueGetter: System.Func$2<UnityEngine_UIElements.VisualElement, UnityEngine.Vector2>, $to: UnityEngine.Vector2, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Vector2>):ValueAnimation$1<UnityEngine.Vector2>;
        
        Start($fromValueGetter: System.Func$2<UnityEngine_UIElements.VisualElement, UnityEngine.Quaternion>, $to: UnityEngine.Quaternion, $durationMs: number, $onValueChanged: System.Action$2<UnityEngine_UIElements.VisualElement, UnityEngine.Quaternion>):ValueAnimation$1<UnityEngine.Quaternion>;
        /**
         * Triggers an animation changing this element's layout style values. See Also: IStyle.top, IStyle.left, IStyle.width, IStyle.height.
         */
        Layout($to: UnityEngine.Rect, $durationMs: number):ValueAnimation$1<UnityEngine.Rect>;
        /**
         * Triggers an animation changing this element's positioning style values. See Also: IStyle.top, IStyle.left.
         */
        TopLeft($to: UnityEngine.Vector2, $durationMs: number):ValueAnimation$1<UnityEngine.Vector2>;
        /**
         * Triggers an animation changing this element's size style values. See Also: IStyle.width, IStyle.height.
         */
        Size($to: UnityEngine.Vector2, $durationMs: number):ValueAnimation$1<UnityEngine.Vector2>;
        /**
         * Triggers an animation changing this element's transform scale. See Also: ITransform.scale.
         */
        Scale($to: number, $duration: number):ValueAnimation$1<number>;
        /**
         * Triggers an animation changing this element's transform position. See Also: ITransform.position.
         */
        Position($to: UnityEngine.Vector3, $duration: number):ValueAnimation$1<UnityEngine.Vector3>;
        /**
         * Triggers an animation changing this element's transform rotation. See Also: ITransform.rotation.
         */
        Rotation($to: UnityEngine.Quaternion, $duration: number):ValueAnimation$1<UnityEngine.Quaternion>;
        
                    
    }
    /**
     * A collection of easing curves to be used with ValueAnimations.
     */
    class Easing extends System.Object {
        
        public static Step($t: number):number;
        
        public static Linear($t: number):number;
        
        public static InSine($t: number):number;
        
        public static OutSine($t: number):number;
        
        public static InOutSine($t: number):number;
        
        public static InQuad($t: number):number;
        
        public static OutQuad($t: number):number;
        
        public static InOutQuad($t: number):number;
        
        public static InCubic($t: number):number;
        
        public static OutCubic($t: number):number;
        
        public static InOutCubic($t: number):number;
        
        public static InPower($t: number, $power: number):number;
        
        public static OutPower($t: number, $power: number):number;
        
        public static InOutPower($t: number, $power: number):number;
        
        public static InBounce($t: number):number;
        
        public static OutBounce($t: number):number;
        
        public static InOutBounce($t: number):number;
        
        public static InElastic($t: number):number;
        
        public static OutElastic($t: number):number;
        
        public static InOutElastic($t: number):number;
        
        public static InBack($t: number):number;
        
        public static OutBack($t: number):number;
        
        public static InOutBack($t: number):number;
        
        public static InBack($t: number, $s: number):number;
        
        public static OutBack($t: number, $s: number):number;
        
        public static InOutBack($t: number, $s: number):number;
        
        public static InCirc($t: number):number;
        
        public static OutCirc($t: number):number;
        
        public static InOutCirc($t: number):number;
        
                    
    }
    /**
     * Container object used to animate multiple style values at once.
     */
    class StyleValues extends System.ValueType {
        /**
         * Top distance from the element's box during layout.
         */
        public get top(): number;
        public set top(value: number);
        /**
         * Left distance from the element's box during layout.
         */
        public get left(): number;
        public set left(value: number);
        /**
         * Fixed width of an element for the layout.
         */
        public get width(): number;
        public set width(value: number);
        /**
         * Fixed height of an element for the layout.
         */
        public get height(): number;
        public set height(value: number);
        /**
         * Right distance from the element's box during layout.
         */
        public get right(): number;
        public set right(value: number);
        /**
         * Bottom distance from the element's box during layout.
         */
        public get bottom(): number;
        public set bottom(value: number);
        /**
         * Color to use when drawing the text of an element.
         */
        public get color(): UnityEngine.Color;
        public set color(value: UnityEngine.Color);
        /**
         * Background color to paint in the element's box.
         */
        public get backgroundColor(): UnityEngine.Color;
        public set backgroundColor(value: UnityEngine.Color);
        /**
         * Tinting color for the element's backgroundImage.
         */
        public get unityBackgroundImageTintColor(): UnityEngine.Color;
        public set unityBackgroundImageTintColor(value: UnityEngine.Color);
        /**
         * Color of the border to paint inside the element's box.
         */
        public get borderColor(): UnityEngine.Color;
        public set borderColor(value: UnityEngine.Color);
        /**
         * Space reserved for the left edge of the margin during the layout phase.
         */
        public get marginLeft(): number;
        public set marginLeft(value: number);
        /**
         * Space reserved for the top edge of the margin during the layout phase.
         */
        public get marginTop(): number;
        public set marginTop(value: number);
        /**
         * Space reserved for the right edge of the margin during the layout phase.
         */
        public get marginRight(): number;
        public set marginRight(value: number);
        /**
         * Space reserved for the bottom edge of the margin during the layout phase.
         */
        public get marginBottom(): number;
        public set marginBottom(value: number);
        /**
         * Space reserved for the left edge of the padding during the layout phase.
         */
        public get paddingLeft(): number;
        public set paddingLeft(value: number);
        /**
         * Space reserved for the top edge of the padding during the layout phase.
         */
        public get paddingTop(): number;
        public set paddingTop(value: number);
        /**
         * Space reserved for the right edge of the padding during the layout phase.
         */
        public get paddingRight(): number;
        public set paddingRight(value: number);
        /**
         * Space reserved for the bottom edge of the padding during the layout phase.
         */
        public get paddingBottom(): number;
        public set paddingBottom(value: number);
        /**
         * Space reserved for the left edge of the border during the layout phase.
         */
        public get borderLeftWidth(): number;
        public set borderLeftWidth(value: number);
        /**
         * Space reserved for the right edge of the border during the layout phase.
         */
        public get borderRightWidth(): number;
        public set borderRightWidth(value: number);
        /**
         * Space reserved for the top edge of the border during the layout phase.
         */
        public get borderTopWidth(): number;
        public set borderTopWidth(value: number);
        /**
         * Space reserved for the bottom edge of the border during the layout phase.
         */
        public get borderBottomWidth(): number;
        public set borderBottomWidth(value: number);
        /**
         * The radius of the top-left corner when a rounded rectangle is drawn in the element's box.
         */
        public get borderTopLeftRadius(): number;
        public set borderTopLeftRadius(value: number);
        /**
         * The radius of the top-right corner when a rounded rectangle is drawn in the element's box.
         */
        public get borderTopRightRadius(): number;
        public set borderTopRightRadius(value: number);
        /**
         * The radius of the bottom-left corner when a rounded rectangle is drawn in the element's box.
         */
        public get borderBottomLeftRadius(): number;
        public set borderBottomLeftRadius(value: number);
        /**
         * The radius of the bottom-right corner when a rounded rectangle is drawn in the element's box.
         */
        public get borderBottomRightRadius(): number;
        public set borderBottomRightRadius(value: number);
        /**
         * Specifies the transparency of an element.
         */
        public get opacity(): number;
        public set opacity(value: number);
        /**
         * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
         */
        public get flexGrow(): number;
        public set flexGrow(value: number);
        /**
         * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
         */
        public get flexShrink(): number;
        public set flexShrink(value: number);
        
                    
    }
    /**
     * Implementation object for transition animations.
     */
    interface ValueAnimation$1<T> extends System.Object {
        
                    
    }
    /**
     * Base interface for transition animations.
     */
    interface IValueAnimation {
        /**
         * Tells if the animation is currently active.
         */
        isRunning: boolean;
        /**
         * Duration of the transition in milliseconds.
         */
        durationMs: number;
        /**
         * Starts the animation using this object's values.
         */
        Start():void;
        /**
         * Stops this animation.
         */
        Stop():void;
        /**
         * Returns this animation object into its object pool.
         */
        Recycle():void;
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.VisualElementFocusRing' {

    import * as System from 'System';
        
    /**
     * Ordering of elements in the focus ring.
     */
    enum DefaultFocusOrder { ChildOrder = 0, PositionXY = 1, PositionYX = 2 }
    
}
declare module 'UnityEngine.UIElements.Box' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a Box using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$1<Box> {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Button' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a Button using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<Button, UnityEngine_UIElements_Button.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the Button.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Foldout' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a Foldout using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<Foldout, UnityEngine_UIElements_Foldout.UxmlTraits> {
        
        public constructor();
        
                    
    }
    
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.HelpBox' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<HelpBox, UnityEngine_UIElements_HelpBox.UxmlTraits> {
        
        public constructor();
        
                    
    }
    
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Image' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Instantiates an Image using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<Image, UnityEngine_UIElements_Image.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the Image.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Label' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a Label using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<Label, UnityEngine_UIElements_Label.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the Label.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public constructor();
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IList {
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.ListView' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Instantiates a ListView using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<ListView, UnityEngine_UIElements_ListView.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the ListView.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.MinMaxSlider' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a MinMaxSlider using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<MinMaxSlider, UnityEngine_UIElements_MinMaxSlider.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the MinMaxSlider.
     */
    class UxmlTraits extends UnityEngine_UIElements.BaseField$1.UxmlTraits<UnityEngine.Vector2> {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.BaseField$1' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Defines UxmlTraits for the BaseField.
     */
    interface UxmlTraits<TValueType> extends UnityEngine_UIElements.UxmlTraits {
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.PopupWindow' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Instantiates a PopupWindow using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<PopupWindow, UnityEngine_UIElements_PopupWindow.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the PopupWindow.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.RepeatButton' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a RepeatButton using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<RepeatButton, UnityEngine_UIElements_RepeatButton.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the RepeatButton.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.ScrollView' {

    import * as System from 'System';
    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    
    enum TouchScrollBehavior { Unrestricted = 0, Elastic = 1, Clamped = 2 }
    /**
     * Instantiates a ScrollView using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<ScrollView, UnityEngine_UIElements_ScrollView.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the ScrollView.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Scroller' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * Instantiates a Scroller using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<Scroller, UnityEngine_UIElements_Scroller.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the Scroller.
     */
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Slider' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a Slider using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<Slider, UnityEngine_UIElements_Slider.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the Slider.
     */
    class UxmlTraits extends UnityEngine_UIElements.BaseFieldTraits$2<number, UxmlFloatAttributeDescription> {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.SliderInt' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a SliderInt using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<SliderInt, UnityEngine_UIElements_SliderInt.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the SliderInt.
     */
    class UxmlTraits extends UnityEngine_UIElements.BaseFieldTraits$2<number, UxmlIntAttributeDescription> {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.TextField' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a TextField using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<TextField, UnityEngine_UIElements_TextField.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the TextField.
     */
    class UxmlTraits extends UnityEngine_UIElements.TextInputBaseField$1.UxmlTraits<string> {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.TextInputBaseField$1' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Defines UxmlTraits for TextInputFieldBase.
     */
    interface UxmlTraits<TValueType> extends UnityEngine_UIElements.BaseFieldTraits$2<string, UxmlStringAttributeDescription> {
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.Toggle' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
        
    /**
     * Instantiates a Toggle using the data read from a UXML file.
     */
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<Toggle, UnityEngine_UIElements_Toggle.UxmlTraits> {
        
        public constructor();
        
                    
    }
    /**
     * Defines UxmlTraits for the Toggle.
     */
    class UxmlTraits extends UnityEngine_UIElements.BaseFieldTraits$2<boolean, UxmlBoolAttributeDescription> {
        
        public constructor();
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.TwoPaneSplitView' {

    import * as UnityEngine_UIElements from 'UnityEngine.UIElements';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    
    class UxmlFactory extends UnityEngine_UIElements.UxmlFactory$2<TwoPaneSplitView, UnityEngine_UIElements_TwoPaneSplitView.UxmlTraits> {
        
        public constructor();
        
                    
    }
    
    class UxmlTraits extends UnityEngine_UIElements.UxmlTraits {
        
        public get uxmlChildElementsDescription(): System_Collections_Generic.IEnumerable$1<UnityEngine_UIElements.UxmlChildElementDescription>;
        
        public constructor();
        
                    
    }
    
}
declare module 'Unity.Collections' {

    import * as System from 'System';
        
    /**
     * Native Slice.
     */
    interface NativeSlice$1<T> extends System.ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.UIElements.UxmlAttributeDescription' {

    import * as System from 'System';
        
    /**
     * An enum to describe attribute use.
     */
    enum Use { None = 0, Optional = 1, Prohibited = 2, Required = 3 }
    
}
declare module 'System.Reflection' {

    import * as System from 'System';
        
    
    interface MemberInfo extends System.Object {
        
                    
    }
    
}

