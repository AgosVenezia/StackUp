//# signature=UnityEngine.IMGUIModule#41a236be556571e634c0cee2fef33b19#0.0.4
// @ts-nocheck
declare module 'UnityEngine' {

    import * as System from 'System';
    import * as UnityEngine_GUI from 'UnityEngine.GUI';
    import * as System_Collections from 'System.Collections';
    import * as UnityEngine_TextEditor from 'UnityEngine.TextEditor';
        
    /**
     * A UnityGUI event.
     */
    class Event extends System.Object {
        
        public get rawType(): EventType;
        /**
         * The mouse position.
         */
        public get mousePosition(): Vector2;
        public set mousePosition(value: Vector2);
        /**
         * The relative movement of the mouse compared to last event.
         */
        public get delta(): Vector2;
        public set delta(value: Vector2);
        /**
         * The type of pointer that created this event (for example, mouse, touch screen, pen).
         */
        public get pointerType(): PointerType;
        public set pointerType(value: PointerType);
        /**
         * Which mouse button was pressed.
         */
        public get button(): number;
        public set button(value: number);
        /**
         * Which modifier keys are held down.
         */
        public get modifiers(): EventModifiers;
        public set modifiers(value: EventModifiers);
        /**
         * How hard stylus pressure is applied.
         */
        public get pressure(): number;
        public set pressure(value: number);
        /**
         * How many consecutive mouse clicks have we received.
         */
        public get clickCount(): number;
        public set clickCount(value: number);
        /**
         * The character typed.
         */
        public get character(): number;
        public set character(value: number);
        /**
         * The raw key code for keyboard events.
         */
        public get keyCode(): KeyCode;
        public set keyCode(value: KeyCode);
        /**
         * Index of display that the event belongs to.
         */
        public get displayIndex(): number;
        public set displayIndex(value: number);
        /**
         * The type of event.
         */
        public get type(): EventType;
        public set type(value: EventType);
        /**
         * The name of an ExecuteCommand or ValidateCommand Event.
         */
        public get commandName(): string;
        public set commandName(value: string);
        /**
         * Is Shift held down? (Read Only)
         */
        public get shift(): boolean;
        public set shift(value: boolean);
        /**
         * Is Control key held down? (Read Only)
         */
        public get control(): boolean;
        public set control(value: boolean);
        /**
         * Is Alt/Option key held down? (Read Only)
         */
        public get alt(): boolean;
        public set alt(value: boolean);
        /**
         * Is Command/Windows key held down? (Read Only)
         */
        public get command(): boolean;
        public set command(value: boolean);
        /**
         * Is Caps Lock on? (Read Only)
         */
        public get capsLock(): boolean;
        public set capsLock(value: boolean);
        /**
         * Is the current keypress on the numeric keyboard? (Read Only)
         */
        public get numeric(): boolean;
        public set numeric(value: boolean);
        /**
         * Is the current keypress a function key? (Read Only)
         */
        public get functionKey(): boolean;
        /**
         * The current event that's being processed right now.
         */
        public static get current(): Event;
        public static set current(value: Event);
        /**
         * Is this event a keyboard event? (Read Only)
         */
        public get isKey(): boolean;
        /**
         * Is this event a mouse event? (Read Only)
         */
        public get isMouse(): boolean;
        
        public get isScrollWheel(): boolean;
        
        public constructor();
        
        public constructor($displayIndex: number);
        
        public constructor($other: Event);
        /**
         * Get a filtered event type for a given control ID.
         * @param controlID The ID of the control you are querying from.
         */
        public GetTypeForControl($controlID: number):EventType;
        /**
         * Get the next queued [Event] from the event system.
         * @param outEvent Next Event.
         */
        public static PopEvent($outEvent: Event):boolean;
        /**
         * Returns the current number of events that are stored in the event queue.
         * @returns Current number of events currently in the event queue.
         */
        public static GetEventCount():number;
        /**
         * Create a keyboard event.
         */
        public static KeyboardEvent($key: string):Event;
        
        public GetHashCode():number;
        
        public Equals($obj: any):boolean;
        
        public ToString():string;
        /**
         * Use this event.
         */
        public Use():void;
        
                    
    }
    /**
     * Types of UnityGUI input and processing events.
     */
    enum EventType { MouseDown = 0, MouseUp = 1, MouseMove = 2, MouseDrag = 3, KeyDown = 4, KeyUp = 5, ScrollWheel = 6, Repaint = 7, Layout = 8, DragUpdated = 9, DragPerform = 10, DragExited = 15, Ignore = 11, Used = 12, ValidateCommand = 13, ExecuteCommand = 14, ContextClick = 16, MouseEnterWindow = 20, MouseLeaveWindow = 21, TouchDown = 30, TouchUp = 31, TouchMove = 32, TouchEnter = 33, TouchLeave = 34, TouchStationary = 35, mouseDown = 0, mouseUp = 1, mouseMove = 2, mouseDrag = 3, keyDown = 4, keyUp = 5, scrollWheel = 6, repaint = 7, layout = 8, dragUpdated = 9, dragPerform = 10, ignore = 11, used = 12 }
    /**
     * Representation of 2D vectors and points.
     */
    interface Vector2 extends System.ValueType {
        
                    
    }
    /**
     * Pointer types.
     */
    enum PointerType { Mouse = 0, Touch = 1, Pen = 2 }
    /**
     * Types of modifier key that can be active during a keystroke event.
     */
    enum EventModifiers { None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
    /**
     * Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard.
     */
    enum KeyCode { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
    /**
     * Representation of rays.
     */
    interface Ray extends System.ValueType {
        
                    
    }
    /**
     * The GUI class is the interface for Unity's GUI with manual positioning.
     */
    class GUI extends System.Object {
        /**
         * Global tinting color for the GUI.
         */
        public static get color(): Color;
        public static set color(value: Color);
        /**
         * Global tinting color for all background elements rendered by the GUI.
         */
        public static get backgroundColor(): Color;
        public static set backgroundColor(value: Color);
        /**
         * Tinting color for all text rendered by the GUI.
         */
        public static get contentColor(): Color;
        public static set contentColor(value: Color);
        /**
         * Returns true if any controls changed the value of the input data.
         */
        public static get changed(): boolean;
        public static set changed(value: boolean);
        /**
         * Is the GUI enabled?
         */
        public static get enabled(): boolean;
        public static set enabled(value: boolean);
        /**
         * The sorting depth of the currently executing GUI behaviour.
         */
        public static get depth(): number;
        public static set depth(value: number);
        /**
         * The global skin to use.
         */
        public static get skin(): GUISkin;
        public static set skin(value: GUISkin);
        /**
         * The GUI transform matrix.
         */
        public static get matrix(): Matrix4x4;
        public static set matrix(value: Matrix4x4);
        /**
         * The tooltip of the control the mouse is currently over, or which has keyboard focus. (Read Only).
         */
        public static get tooltip(): string;
        public static set tooltip(value: string);
        
        public constructor();
        /**
         * Set the name of the next control.
         */
        public static SetNextControlName($name: string):void;
        /**
         * Get the name of named control that has focus.
         */
        public static GetNameOfFocusedControl():string;
        /**
         * Move keyboard focus to a named control.
         * @param name Name set using SetNextControlName.
         */
        public static FocusControl($name: string):void;
        /**
         * Make a window draggable.
         * @param position The part of the window that can be dragged. This is clipped to the actual window.
         */
        public static DragWindow($position: Rect):void;
        /**
         * Bring a specific window to front of the floating windows.
         * @param windowID The identifier used when you created the window in the Window call.
         */
        public static BringWindowToFront($windowID: number):void;
        /**
         * Bring a specific window to back of the floating windows.
         * @param windowID The identifier used when you created the window in the Window call.
         */
        public static BringWindowToBack($windowID: number):void;
        /**
         * Make a window become the active window.
         * @param windowID The identifier used when you created the window in the Window call.
         */
        public static FocusWindow($windowID: number):void;
        /**
         * Remove focus from all windows.
         */
        public static UnfocusWindow():void;
        /**
         * Make a text or texture label on screen.
         * @param position Rectangle on the screen to use for the label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         */
        public static Label($position: Rect, $text: string):void;
        /**
         * Make a text or texture label on screen.
         * @param position Rectangle on the screen to use for the label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         */
        public static Label($position: Rect, $image: Texture):void;
        /**
         * Make a text or texture label on screen.
         * @param position Rectangle on the screen to use for the label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         */
        public static Label($position: Rect, $content: GUIContent):void;
        /**
         * Make a text or texture label on screen.
         * @param position Rectangle on the screen to use for the label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         */
        public static Label($position: Rect, $text: string, $style: GUIStyle):void;
        /**
         * Make a text or texture label on screen.
         * @param position Rectangle on the screen to use for the label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         */
        public static Label($position: Rect, $image: Texture, $style: GUIStyle):void;
        /**
         * Make a text or texture label on screen.
         * @param position Rectangle on the screen to use for the label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         */
        public static Label($position: Rect, $content: GUIContent, $style: GUIStyle):void;
        /**
         * Draw a texture within a rectangle.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
         * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
         */
        public static DrawTexture($position: Rect, $image: Texture):void;
        /**
         * Draw a texture within a rectangle.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
         * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
         */
        public static DrawTexture($position: Rect, $image: Texture, $scaleMode: ScaleMode):void;
        /**
         * Draw a texture within a rectangle.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
         * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
         */
        public static DrawTexture($position: Rect, $image: Texture, $scaleMode: ScaleMode, $alphaBlend: boolean):void;
        /**
         * Draw a texture within a rectangle.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
         * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
         */
        public static DrawTexture($position: Rect, $image: Texture, $scaleMode: ScaleMode, $alphaBlend: boolean, $imageAspect: number):void;
        /**
         * Draws a border with rounded corners within a rectangle. The texture is used to pattern the border.  Note that this method only works on shader model 2.5 and above.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
         * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
         * @param color A tint color to apply on the texture.
         * @param borderWidth The width of the border. If 0, the full texture is drawn.
         * @param borderWidths The width of the borders (left, top, right and bottom). If Vector4.zero, the full texture is drawn.
         * @param borderRadius The radius for rounded corners. If 0, corners will not be rounded.
         * @param borderRadiuses The radiuses for rounded corners (top-left, top-right, bottom-right and bottom-left). If Vector4.zero, corners will not be rounded.
         */
        public static DrawTexture($position: Rect, $image: Texture, $scaleMode: ScaleMode, $alphaBlend: boolean, $imageAspect: number, $color: Color, $borderWidth: number, $borderRadius: number):void;
        /**
         * Draws a border with rounded corners within a rectangle. The texture is used to pattern the border.  Note that this method only works on shader model 2.5 and above.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param scaleMode How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to apply alpha blending when drawing the image (enabled by default).
         * @param imageAspect Aspect ratio to use for the source image. If 0 (the default), the aspect ratio from the image is used.  Pass in w/h for the desired aspect ratio.  This allows the aspect ratio of the source image to be adjusted without changing the pixel width and height.
         * @param color A tint color to apply on the texture.
         * @param borderWidth The width of the border. If 0, the full texture is drawn.
         * @param borderWidths The width of the borders (left, top, right and bottom). If Vector4.zero, the full texture is drawn.
         * @param borderRadius The radius for rounded corners. If 0, corners will not be rounded.
         * @param borderRadiuses The radiuses for rounded corners (top-left, top-right, bottom-right and bottom-left). If Vector4.zero, corners will not be rounded.
         */
        public static DrawTexture($position: Rect, $image: Texture, $scaleMode: ScaleMode, $alphaBlend: boolean, $imageAspect: number, $color: Color, $borderWidths: Vector4, $borderRadius: number):void;
        
        public static DrawTexture($position: Rect, $image: Texture, $scaleMode: ScaleMode, $alphaBlend: boolean, $imageAspect: number, $color: Color, $borderWidths: Vector4, $borderRadiuses: Vector4):void;
        /**
         * Draw a texture within a rectangle with the given texture coordinates.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param texCoords How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to alpha blend the image on to the display (the default). If false, the picture is drawn on to the display.
         */
        public static DrawTextureWithTexCoords($position: Rect, $image: Texture, $texCoords: Rect):void;
        /**
         * Draw a texture within a rectangle with the given texture coordinates.
         * @param position Rectangle on the screen to draw the texture within.
         * @param image Texture to display.
         * @param texCoords How to scale the image when the aspect ratio of it doesn't fit the aspect ratio to be drawn within.
         * @param alphaBlend Whether to alpha blend the image on to the display (the default). If false, the picture is drawn on to the display.
         */
        public static DrawTextureWithTexCoords($position: Rect, $image: Texture, $texCoords: Rect, $alphaBlend: boolean):void;
        /**
         * Create a Box on the GUI Layer.
         * @param position Rectangle on the screen to use for the box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         */
        public static Box($position: Rect, $text: string):void;
        /**
         * Create a Box on the GUI Layer.
         * @param position Rectangle on the screen to use for the box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         */
        public static Box($position: Rect, $image: Texture):void;
        /**
         * Create a Box on the GUI Layer.
         * @param position Rectangle on the screen to use for the box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         */
        public static Box($position: Rect, $content: GUIContent):void;
        /**
         * Create a Box on the GUI Layer.
         * @param position Rectangle on the screen to use for the box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         */
        public static Box($position: Rect, $text: string, $style: GUIStyle):void;
        /**
         * Create a Box on the GUI Layer.
         * @param position Rectangle on the screen to use for the box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         */
        public static Box($position: Rect, $image: Texture, $style: GUIStyle):void;
        /**
         * Create a Box on the GUI Layer.
         * @param position Rectangle on the screen to use for the box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         */
        public static Box($position: Rect, $content: GUIContent, $style: GUIStyle):void;
        /**
         * Make a single press button. The user clicks them and something happens immediately.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns true when the users clicks the button.
         */
        public static Button($position: Rect, $text: string):boolean;
        /**
         * Make a single press button. The user clicks them and something happens immediately.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns true when the users clicks the button.
         */
        public static Button($position: Rect, $image: Texture):boolean;
        /**
         * Make a single press button. The user clicks them and something happens immediately.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns true when the users clicks the button.
         */
        public static Button($position: Rect, $content: GUIContent):boolean;
        /**
         * Make a single press button. The user clicks them and something happens immediately.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns true when the users clicks the button.
         */
        public static Button($position: Rect, $text: string, $style: GUIStyle):boolean;
        /**
         * Make a single press button. The user clicks them and something happens immediately.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns true when the users clicks the button.
         */
        public static Button($position: Rect, $image: Texture, $style: GUIStyle):boolean;
        /**
         * Make a single press button. The user clicks them and something happens immediately.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns true when the users clicks the button.
         */
        public static Button($position: Rect, $content: GUIContent, $style: GUIStyle):boolean;
        /**
         * Make a button that is active as long as the user holds it down.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns True when the users clicks the button.
         */
        public static RepeatButton($position: Rect, $text: string):boolean;
        /**
         * Make a button that is active as long as the user holds it down.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns True when the users clicks the button.
         */
        public static RepeatButton($position: Rect, $image: Texture):boolean;
        /**
         * Make a button that is active as long as the user holds it down.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns True when the users clicks the button.
         */
        public static RepeatButton($position: Rect, $content: GUIContent):boolean;
        /**
         * Make a button that is active as long as the user holds it down.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns True when the users clicks the button.
         */
        public static RepeatButton($position: Rect, $text: string, $style: GUIStyle):boolean;
        /**
         * Make a button that is active as long as the user holds it down.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns True when the users clicks the button.
         */
        public static RepeatButton($position: Rect, $image: Texture, $style: GUIStyle):boolean;
        /**
         * Make a button that is active as long as the user holds it down.
         * @param position Rectangle on the screen to use for the button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns True when the users clicks the button.
         */
        public static RepeatButton($position: Rect, $content: GUIContent, $style: GUIStyle):boolean;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextField($position: Rect, $text: string):string;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextField($position: Rect, $text: string, $maxLength: number):string;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextField($position: Rect, $text: string, $style: GUIStyle):string;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextField($position: Rect, $text: string, $maxLength: number, $style: GUIStyle):string;
        /**
         * Make a text field where the user can enter a password.
         * @param position Rectangle on the screen to use for the text field.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($position: Rect, $password: string, $maskChar: number):string;
        /**
         * Make a text field where the user can enter a password.
         * @param position Rectangle on the screen to use for the text field.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($position: Rect, $password: string, $maskChar: number, $maxLength: number):string;
        /**
         * Make a text field where the user can enter a password.
         * @param position Rectangle on the screen to use for the text field.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($position: Rect, $password: string, $maskChar: number, $style: GUIStyle):string;
        /**
         * Make a text field where the user can enter a password.
         * @param position Rectangle on the screen to use for the text field.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($position: Rect, $password: string, $maskChar: number, $maxLength: number, $style: GUIStyle):string;
        /**
         * Make a Multi-line text area where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextArea($position: Rect, $text: string):string;
        /**
         * Make a Multi-line text area where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextArea($position: Rect, $text: string, $maxLength: number):string;
        /**
         * Make a Multi-line text area where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextArea($position: Rect, $text: string, $style: GUIStyle):string;
        /**
         * Make a Multi-line text area where the user can edit a string.
         * @param position Rectangle on the screen to use for the text field.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @returns The edited string.
         */
        public static TextArea($position: Rect, $text: string, $maxLength: number, $style: GUIStyle):string;
        /**
         * Make an on/off toggle button.
         * @param position Rectangle on the screen to use for the button.
         * @param value Is this button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
         * @returns The new value of the button.
         */
        public static Toggle($position: Rect, $value: boolean, $text: string):boolean;
        /**
         * Make an on/off toggle button.
         * @param position Rectangle on the screen to use for the button.
         * @param value Is this button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
         * @returns The new value of the button.
         */
        public static Toggle($position: Rect, $value: boolean, $image: Texture):boolean;
        /**
         * Make an on/off toggle button.
         * @param position Rectangle on the screen to use for the button.
         * @param value Is this button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
         * @returns The new value of the button.
         */
        public static Toggle($position: Rect, $value: boolean, $content: GUIContent):boolean;
        /**
         * Make an on/off toggle button.
         * @param position Rectangle on the screen to use for the button.
         * @param value Is this button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
         * @returns The new value of the button.
         */
        public static Toggle($position: Rect, $value: boolean, $text: string, $style: GUIStyle):boolean;
        /**
         * Make an on/off toggle button.
         * @param position Rectangle on the screen to use for the button.
         * @param value Is this button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
         * @returns The new value of the button.
         */
        public static Toggle($position: Rect, $value: boolean, $image: Texture, $style: GUIStyle):boolean;
        /**
         * Make an on/off toggle button.
         * @param position Rectangle on the screen to use for the button.
         * @param value Is this button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the toggle style from the current GUISkin is used.
         * @returns The new value of the button.
         */
        public static Toggle($position: Rect, $value: boolean, $content: GUIContent, $style: GUIStyle):boolean;
        
        public static Toggle($position: Rect, $id: number, $value: boolean, $content: GUIContent, $style: GUIStyle):boolean;
        /**
         * Make a toolbar.
         * @param position Rectangle on the screen to use for the toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the toolbar buttons.
         * @param images An array of textures on the toolbar buttons.
         * @param contents An array of text, image and tooltips for the toolbar buttons.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($position: Rect, $selected: number, $texts: string[]):number;
        /**
         * Make a toolbar.
         * @param position Rectangle on the screen to use for the toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the toolbar buttons.
         * @param images An array of textures on the toolbar buttons.
         * @param contents An array of text, image and tooltips for the toolbar buttons.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($position: Rect, $selected: number, $images: Texture[]):number;
        /**
         * Make a toolbar.
         * @param position Rectangle on the screen to use for the toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the toolbar buttons.
         * @param images An array of textures on the toolbar buttons.
         * @param contents An array of text, image and tooltips for the toolbar buttons.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($position: Rect, $selected: number, $contents: GUIContent[]):number;
        /**
         * Make a toolbar.
         * @param position Rectangle on the screen to use for the toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the toolbar buttons.
         * @param images An array of textures on the toolbar buttons.
         * @param contents An array of text, image and tooltips for the toolbar buttons.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($position: Rect, $selected: number, $texts: string[], $style: GUIStyle):number;
        /**
         * Make a toolbar.
         * @param position Rectangle on the screen to use for the toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the toolbar buttons.
         * @param images An array of textures on the toolbar buttons.
         * @param contents An array of text, image and tooltips for the toolbar buttons.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($position: Rect, $selected: number, $images: Texture[], $style: GUIStyle):number;
        /**
         * Make a toolbar.
         * @param position Rectangle on the screen to use for the toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the toolbar buttons.
         * @param images An array of textures on the toolbar buttons.
         * @param contents An array of text, image and tooltips for the toolbar buttons.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($position: Rect, $selected: number, $contents: GUIContent[], $style: GUIStyle):number;
        /**
         * Make a toolbar.
         * @param position Rectangle on the screen to use for the toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the toolbar buttons.
         * @param images An array of textures on the toolbar buttons.
         * @param contents An array of text, image and tooltips for the toolbar buttons.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($position: Rect, $selected: number, $contents: GUIContent[], $style: GUIStyle, $buttonSize: UnityEngine_GUI.ToolbarButtonSize):number;
        /**
         * Make a grid of buttons.
         * @param position Rectangle on the screen to use for the grid.
         * @param selected The index of the selected grid button.
         * @param texts An array of strings to show on the grid buttons.
         * @param images An array of textures on the grid buttons.
         * @param contents An array of text, image and tooltips for the grid button.
         * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($position: Rect, $selected: number, $texts: string[], $xCount: number):number;
        /**
         * Make a grid of buttons.
         * @param position Rectangle on the screen to use for the grid.
         * @param selected The index of the selected grid button.
         * @param texts An array of strings to show on the grid buttons.
         * @param images An array of textures on the grid buttons.
         * @param contents An array of text, image and tooltips for the grid button.
         * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($position: Rect, $selected: number, $images: Texture[], $xCount: number):number;
        /**
         * Make a grid of buttons.
         * @param position Rectangle on the screen to use for the grid.
         * @param selected The index of the selected grid button.
         * @param texts An array of strings to show on the grid buttons.
         * @param images An array of textures on the grid buttons.
         * @param contents An array of text, image and tooltips for the grid button.
         * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($position: Rect, $selected: number, $content: GUIContent[], $xCount: number):number;
        /**
         * Make a grid of buttons.
         * @param position Rectangle on the screen to use for the grid.
         * @param selected The index of the selected grid button.
         * @param texts An array of strings to show on the grid buttons.
         * @param images An array of textures on the grid buttons.
         * @param contents An array of text, image and tooltips for the grid button.
         * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($position: Rect, $selected: number, $texts: string[], $xCount: number, $style: GUIStyle):number;
        /**
         * Make a grid of buttons.
         * @param position Rectangle on the screen to use for the grid.
         * @param selected The index of the selected grid button.
         * @param texts An array of strings to show on the grid buttons.
         * @param images An array of textures on the grid buttons.
         * @param contents An array of text, image and tooltips for the grid button.
         * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($position: Rect, $selected: number, $images: Texture[], $xCount: number, $style: GUIStyle):number;
        /**
         * Make a grid of buttons.
         * @param position Rectangle on the screen to use for the grid.
         * @param selected The index of the selected grid button.
         * @param texts An array of strings to show on the grid buttons.
         * @param images An array of textures on the grid buttons.
         * @param contents An array of text, image and tooltips for the grid button.
         * @param xCount How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($position: Rect, $selected: number, $contents: GUIContent[], $xCount: number, $style: GUIStyle):number;
        /**
         * A horizontal slider the user can drag to change a value between a min and a max.
         * @param position Rectangle on the screen to use for the slider.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param leftValue The value at the left end of the slider.
         * @param rightValue The value at the right end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @returns The value that has been set by the user.
         */
        public static HorizontalSlider($position: Rect, $value: number, $leftValue: number, $rightValue: number):number;
        /**
         * A horizontal slider the user can drag to change a value between a min and a max.
         * @param position Rectangle on the screen to use for the slider.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param leftValue The value at the left end of the slider.
         * @param rightValue The value at the right end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @returns The value that has been set by the user.
         */
        public static HorizontalSlider($position: Rect, $value: number, $leftValue: number, $rightValue: number, $slider: GUIStyle, $thumb: GUIStyle):number;
        
        public static HorizontalSlider($position: Rect, $value: number, $leftValue: number, $rightValue: number, $slider: GUIStyle, $thumb: GUIStyle, $thumbExtent: GUIStyle):number;
        /**
         * A vertical slider the user can drag to change a value between a min and a max.
         * @param position Rectangle on the screen to use for the slider.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param topValue The value at the top end of the slider.
         * @param bottomValue The value at the bottom end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @returns The value that has been set by the user.
         */
        public static VerticalSlider($position: Rect, $value: number, $topValue: number, $bottomValue: number):number;
        /**
         * A vertical slider the user can drag to change a value between a min and a max.
         * @param position Rectangle on the screen to use for the slider.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param topValue The value at the top end of the slider.
         * @param bottomValue The value at the bottom end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @returns The value that has been set by the user.
         */
        public static VerticalSlider($position: Rect, $value: number, $topValue: number, $bottomValue: number, $slider: GUIStyle, $thumb: GUIStyle):number;
        
        public static VerticalSlider($position: Rect, $value: number, $topValue: number, $bottomValue: number, $slider: GUIStyle, $thumb: GUIStyle, $thumbExtent: GUIStyle):number;
        
        public static Slider($position: Rect, $value: number, $size: number, $start: number, $end: number, $slider: GUIStyle, $thumb: GUIStyle, $horiz: boolean, $id: number, $thumbExtent?: GUIStyle):number;
        /**
         * Make a horizontal scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
         * @param position Rectangle on the screen to use for the scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param leftValue The value at the left end of the scrollbar.
         * @param rightValue The value at the right end of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static HorizontalScrollbar($position: Rect, $value: number, $size: number, $leftValue: number, $rightValue: number):number;
        /**
         * Make a horizontal scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
         * @param position Rectangle on the screen to use for the scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param leftValue The value at the left end of the scrollbar.
         * @param rightValue The value at the right end of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static HorizontalScrollbar($position: Rect, $value: number, $size: number, $leftValue: number, $rightValue: number, $style: GUIStyle):number;
        /**
         * Make a vertical scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
         * @param position Rectangle on the screen to use for the scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param topValue The value at the top of the scrollbar.
         * @param bottomValue The value at the bottom of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static VerticalScrollbar($position: Rect, $value: number, $size: number, $topValue: number, $bottomValue: number):number;
        /**
         * Make a vertical scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
         * @param position Rectangle on the screen to use for the scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param topValue The value at the top of the scrollbar.
         * @param bottomValue The value at the bottom of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static VerticalScrollbar($position: Rect, $value: number, $size: number, $topValue: number, $bottomValue: number, $style: GUIStyle):number;
        
        public static BeginClip($position: Rect, $scrollOffset: Vector2, $renderOffset: Vector2, $resetOffset: boolean):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect, $text: string):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect, $image: Texture):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect, $content: GUIContent):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect, $style: GUIStyle):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect, $text: string, $style: GUIStyle):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect, $image: Texture, $style: GUIStyle):void;
        /**
         * Begin a group. Must be matched with a call to EndGroup.
         * @param position Rectangle on the screen to use for the group.
         * @param text Text to display on the group.
         * @param image Texture to display on the group.
         * @param content Text, image and tooltip for this group. If supplied, any mouse clicks are "captured" by the group and not If left out, no background is rendered, and mouse clicks are passed.
         * @param style The style to use for the background.
         */
        public static BeginGroup($position: Rect, $content: GUIContent, $style: GUIStyle):void;
        /**
         * End a group.
         */
        public static EndGroup():void;
        
        public static BeginClip($position: Rect):void;
        
        public static EndClip():void;
        /**
         * Begin a scrolling view inside your GUI.
         * @param position Rectangle on the screen to use for the ScrollView.
         * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
         * @param viewRect The rectangle used inside the scrollview.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
         * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($position: Rect, $scrollPosition: Vector2, $viewRect: Rect):Vector2;
        /**
         * Begin a scrolling view inside your GUI.
         * @param position Rectangle on the screen to use for the ScrollView.
         * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
         * @param viewRect The rectangle used inside the scrollview.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
         * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($position: Rect, $scrollPosition: Vector2, $viewRect: Rect, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean):Vector2;
        /**
         * Begin a scrolling view inside your GUI.
         * @param position Rectangle on the screen to use for the ScrollView.
         * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
         * @param viewRect The rectangle used inside the scrollview.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
         * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($position: Rect, $scrollPosition: Vector2, $viewRect: Rect, $horizontalScrollbar: GUIStyle, $verticalScrollbar: GUIStyle):Vector2;
        /**
         * Begin a scrolling view inside your GUI.
         * @param position Rectangle on the screen to use for the ScrollView.
         * @param scrollPosition The pixel distance that the view is scrolled in the X and Y directions.
         * @param viewRect The rectangle used inside the scrollview.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @param alwaysShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position.
         * @param alwaysShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($position: Rect, $scrollPosition: Vector2, $viewRect: Rect, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, $horizontalScrollbar: GUIStyle, $verticalScrollbar: GUIStyle):Vector2;
        /**
         * Ends a scrollview started with a call to BeginScrollView.
         */
        public static EndScrollView():void;
        /**
         * Ends a scrollview started with a call to BeginScrollView.
         */
        public static EndScrollView($handleScrollWheel: boolean):void;
        /**
         * Scrolls all enclosing scrollviews so they try to make position visible.
         */
        public static ScrollTo($position: Rect):void;
        
        public static ScrollTowards($position: Rect, $maxDelta: number):boolean;
        /**
         * Make a popup window.
         * @param Style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param id ID number for the window (can be any value as long as it is unique).
         * @param clientRect Onscreen rectangle denoting the window's position and size.
         * @param func Script function to display the window's contents.
         * @param text Text to render inside the window.
         * @param image Image to render inside the window.
         * @param content GUIContent to render inside the window.
         * @param style Style information for the window.
         * @param title Text displayed in the window's title bar.
         * @returns Onscreen rectangle denoting the window's position and size.
         */
        public static Window($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $text: string):Rect;
        /**
         * Make a popup window.
         * @param Style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param id ID number for the window (can be any value as long as it is unique).
         * @param clientRect Onscreen rectangle denoting the window's position and size.
         * @param func Script function to display the window's contents.
         * @param text Text to render inside the window.
         * @param image Image to render inside the window.
         * @param content GUIContent to render inside the window.
         * @param style Style information for the window.
         * @param title Text displayed in the window's title bar.
         * @returns Onscreen rectangle denoting the window's position and size.
         */
        public static Window($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $image: Texture):Rect;
        /**
         * Make a popup window.
         * @param Style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param id ID number for the window (can be any value as long as it is unique).
         * @param clientRect Onscreen rectangle denoting the window's position and size.
         * @param func Script function to display the window's contents.
         * @param text Text to render inside the window.
         * @param image Image to render inside the window.
         * @param content GUIContent to render inside the window.
         * @param style Style information for the window.
         * @param title Text displayed in the window's title bar.
         * @returns Onscreen rectangle denoting the window's position and size.
         */
        public static Window($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $content: GUIContent):Rect;
        /**
         * Make a popup window.
         * @param Style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param id ID number for the window (can be any value as long as it is unique).
         * @param clientRect Onscreen rectangle denoting the window's position and size.
         * @param func Script function to display the window's contents.
         * @param text Text to render inside the window.
         * @param image Image to render inside the window.
         * @param content GUIContent to render inside the window.
         * @param style Style information for the window.
         * @param title Text displayed in the window's title bar.
         * @returns Onscreen rectangle denoting the window's position and size.
         */
        public static Window($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $text: string, $style: GUIStyle):Rect;
        /**
         * Make a popup window.
         * @param Style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param id ID number for the window (can be any value as long as it is unique).
         * @param clientRect Onscreen rectangle denoting the window's position and size.
         * @param func Script function to display the window's contents.
         * @param text Text to render inside the window.
         * @param image Image to render inside the window.
         * @param content GUIContent to render inside the window.
         * @param style Style information for the window.
         * @param title Text displayed in the window's title bar.
         * @returns Onscreen rectangle denoting the window's position and size.
         */
        public static Window($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $image: Texture, $style: GUIStyle):Rect;
        /**
         * Make a popup window.
         * @param Style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param id ID number for the window (can be any value as long as it is unique).
         * @param clientRect Onscreen rectangle denoting the window's position and size.
         * @param func Script function to display the window's contents.
         * @param text Text to render inside the window.
         * @param image Image to render inside the window.
         * @param content GUIContent to render inside the window.
         * @param style Style information for the window.
         * @param title Text displayed in the window's title bar.
         * @returns Onscreen rectangle denoting the window's position and size.
         */
        public static Window($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $title: GUIContent, $style: GUIStyle):Rect;
        /**
         * Show a Modal Window.
         * @param id A unique id number.
         * @param clientRect Position and size of the window.
         * @param func A function which contains the immediate mode GUI code to draw the contents of your window.
         * @param text Text to appear in the title-bar area of the window, if any.
         * @param image An image to appear in the title bar of the window, if any.
         * @param content GUIContent to appear in the title bar of the window, if any.
         * @param style Style to apply to the window.
         */
        public static ModalWindow($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $text: string):Rect;
        /**
         * Show a Modal Window.
         * @param id A unique id number.
         * @param clientRect Position and size of the window.
         * @param func A function which contains the immediate mode GUI code to draw the contents of your window.
         * @param text Text to appear in the title-bar area of the window, if any.
         * @param image An image to appear in the title bar of the window, if any.
         * @param content GUIContent to appear in the title bar of the window, if any.
         * @param style Style to apply to the window.
         */
        public static ModalWindow($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $image: Texture):Rect;
        /**
         * Show a Modal Window.
         * @param id A unique id number.
         * @param clientRect Position and size of the window.
         * @param func A function which contains the immediate mode GUI code to draw the contents of your window.
         * @param text Text to appear in the title-bar area of the window, if any.
         * @param image An image to appear in the title bar of the window, if any.
         * @param content GUIContent to appear in the title bar of the window, if any.
         * @param style Style to apply to the window.
         */
        public static ModalWindow($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $content: GUIContent):Rect;
        /**
         * Show a Modal Window.
         * @param id A unique id number.
         * @param clientRect Position and size of the window.
         * @param func A function which contains the immediate mode GUI code to draw the contents of your window.
         * @param text Text to appear in the title-bar area of the window, if any.
         * @param image An image to appear in the title bar of the window, if any.
         * @param content GUIContent to appear in the title bar of the window, if any.
         * @param style Style to apply to the window.
         */
        public static ModalWindow($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $text: string, $style: GUIStyle):Rect;
        /**
         * Show a Modal Window.
         * @param id A unique id number.
         * @param clientRect Position and size of the window.
         * @param func A function which contains the immediate mode GUI code to draw the contents of your window.
         * @param text Text to appear in the title-bar area of the window, if any.
         * @param image An image to appear in the title bar of the window, if any.
         * @param content GUIContent to appear in the title bar of the window, if any.
         * @param style Style to apply to the window.
         */
        public static ModalWindow($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $image: Texture, $style: GUIStyle):Rect;
        /**
         * Show a Modal Window.
         * @param id A unique id number.
         * @param clientRect Position and size of the window.
         * @param func A function which contains the immediate mode GUI code to draw the contents of your window.
         * @param text Text to appear in the title-bar area of the window, if any.
         * @param image An image to appear in the title bar of the window, if any.
         * @param content GUIContent to appear in the title bar of the window, if any.
         * @param style Style to apply to the window.
         */
        public static ModalWindow($id: number, $clientRect: Rect, $func: UnityEngine_GUI.WindowFunction, $content: GUIContent, $style: GUIStyle):Rect;
        /**
         * If you want to have the entire window background to act as a drag area, use the version of DragWindow that takes no parameters and put it at the end of the window function.
         */
        public static DragWindow():void;
        
                    
    }
    /**
     * Representation of RGBA colors.
     */
    interface Color extends System.ValueType {
        
                    
    }
    /**
     * A 2D Rectangle defined by X and Y position, width and height.
     */
    interface Rect extends System.ValueType {
        
                    
    }
    /**
     * Defines how GUI looks and behaves.
     */
    class GUISkin extends ScriptableObject {
        /**
         * The default font to use for all styles.
         */
        public get font(): Font;
        public set font(value: Font);
        /**
         * Style used by default for GUI.Box controls.
         */
        public get box(): GUIStyle;
        public set box(value: GUIStyle);
        /**
         * Style used by default for GUI.Label controls.
         */
        public get label(): GUIStyle;
        public set label(value: GUIStyle);
        /**
         * Style used by default for GUI.TextField controls.
         */
        public get textField(): GUIStyle;
        public set textField(value: GUIStyle);
        /**
         * Style used by default for GUI.TextArea controls.
         */
        public get textArea(): GUIStyle;
        public set textArea(value: GUIStyle);
        /**
         * Style used by default for GUI.Button controls.
         */
        public get button(): GUIStyle;
        public set button(value: GUIStyle);
        /**
         * Style used by default for GUI.Toggle controls.
         */
        public get toggle(): GUIStyle;
        public set toggle(value: GUIStyle);
        /**
         * Style used by default for Window controls (See Also: GUI.Window).
         */
        public get window(): GUIStyle;
        public set window(value: GUIStyle);
        /**
         * Style used by default for the background part of GUI.HorizontalSlider controls.
         */
        public get horizontalSlider(): GUIStyle;
        public set horizontalSlider(value: GUIStyle);
        /**
         * Style used by default for the thumb that is dragged in GUI.HorizontalSlider controls.
         */
        public get horizontalSliderThumb(): GUIStyle;
        public set horizontalSliderThumb(value: GUIStyle);
        /**
         * Style used by default for the background part of GUI.VerticalSlider controls.
         */
        public get verticalSlider(): GUIStyle;
        public set verticalSlider(value: GUIStyle);
        /**
         * Style used by default for the thumb that is dragged in GUI.VerticalSlider controls.
         */
        public get verticalSliderThumb(): GUIStyle;
        public set verticalSliderThumb(value: GUIStyle);
        /**
         * Style used by default for the background part of GUI.HorizontalScrollbar controls.
         */
        public get horizontalScrollbar(): GUIStyle;
        public set horizontalScrollbar(value: GUIStyle);
        /**
         * Style used by default for the thumb that is dragged in GUI.HorizontalScrollbar controls.
         */
        public get horizontalScrollbarThumb(): GUIStyle;
        public set horizontalScrollbarThumb(value: GUIStyle);
        /**
         * Style used by default for the left button on GUI.HorizontalScrollbar controls.
         */
        public get horizontalScrollbarLeftButton(): GUIStyle;
        public set horizontalScrollbarLeftButton(value: GUIStyle);
        /**
         * Style used by default for the right button on GUI.HorizontalScrollbar controls.
         */
        public get horizontalScrollbarRightButton(): GUIStyle;
        public set horizontalScrollbarRightButton(value: GUIStyle);
        /**
         * Style used by default for the background part of GUI.VerticalScrollbar controls.
         */
        public get verticalScrollbar(): GUIStyle;
        public set verticalScrollbar(value: GUIStyle);
        /**
         * Style used by default for the thumb that is dragged in GUI.VerticalScrollbar controls.
         */
        public get verticalScrollbarThumb(): GUIStyle;
        public set verticalScrollbarThumb(value: GUIStyle);
        /**
         * Style used by default for the up button on GUI.VerticalScrollbar controls.
         */
        public get verticalScrollbarUpButton(): GUIStyle;
        public set verticalScrollbarUpButton(value: GUIStyle);
        /**
         * Style used by default for the down button on GUI.VerticalScrollbar controls.
         */
        public get verticalScrollbarDownButton(): GUIStyle;
        public set verticalScrollbarDownButton(value: GUIStyle);
        /**
         * Style used by default for the background of ScrollView controls (see GUI.BeginScrollView).
         */
        public get scrollView(): GUIStyle;
        public set scrollView(value: GUIStyle);
        /**
         * Array of GUI styles for specific needs.
         */
        public get customStyles(): GUIStyle[];
        public set customStyles(value: GUIStyle[]);
        /**
         * Generic settings for how controls should behave with this skin.
         */
        public get settings(): GUISettings;
        
        public constructor();
        /**
         * Get a named GUIStyle.
         */
        public GetStyle($styleName: string):GUIStyle;
        /**
         * Try to search for a GUIStyle. This functions returns NULL and does not give an error.
         */
        public FindStyle($styleName: string):GUIStyle;
        
        public GetEnumerator():System_Collections.IEnumerator;
        
                    
    }
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
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
     * The contents of a GUI element.
     */
    class GUIContent extends System.Object {
        /**
         * Shorthand for empty content.
         */
        public static none: GUIContent;
        /**
         * The text contained.
         */
        public get text(): string;
        public set text(value: string);
        /**
         * The icon image contained.
         */
        public get image(): Texture;
        public set image(value: Texture);
        /**
         * The tooltip of this element.
         */
        public get tooltip(): string;
        public set tooltip(value: string);
        /**
         * Constructor for GUIContent in all shapes and sizes.
         */
        public constructor();
        /**
         * Build a GUIContent object containing only text.
         */
        public constructor($text: string);
        /**
         * Build a GUIContent object containing only an image.
         */
        public constructor($image: Texture);
        /**
         * Build a GUIContent object containing both text and an image.
         */
        public constructor($text: string, $image: Texture);
        /**
         * Build a GUIContent containing some text. When the user hovers the mouse over it, the global GUI.tooltip is set to the tooltip.
         */
        public constructor($text: string, $tooltip: string);
        /**
         * Build a GUIContent containing an image. When the user hovers the mouse over it, the global GUI.tooltip is set to the tooltip.
         */
        public constructor($image: Texture, $tooltip: string);
        /**
         * Build a GUIContent that contains both text, an image and has a tooltip defined. When the user hovers the mouse over it, the global GUI.tooltip is set to the tooltip.
         */
        public constructor($text: string, $image: Texture, $tooltip: string);
        /**
         * Build a GUIContent as a copy of another GUIContent.
         */
        public constructor($src: GUIContent);
        
                    
    }
    /**
     * Styling information for GUI elements.
     */
    class GUIStyle extends System.Object {
        /**
         * The font to use for rendering. If null, the default font for the current GUISkin is used instead.
         */
        public get font(): Font;
        public set font(value: Font);
        /**
         * How image and text of the GUIContent is combined.
         */
        public get imagePosition(): ImagePosition;
        public set imagePosition(value: ImagePosition);
        /**
         * Text alignment.
         */
        public get alignment(): TextAnchor;
        public set alignment(value: TextAnchor);
        /**
         * Should the text be wordwrapped?
         */
        public get wordWrap(): boolean;
        public set wordWrap(value: boolean);
        /**
         * What to do when the contents to be rendered is too large to fit within the area given.
         */
        public get clipping(): TextClipping;
        public set clipping(value: TextClipping);
        /**
         * Pixel offset to apply to the content of this GUIstyle.
         */
        public get contentOffset(): Vector2;
        public set contentOffset(value: Vector2);
        /**
         * If non-0, any GUI elements rendered with this style will have the width specified here.
         */
        public get fixedWidth(): number;
        public set fixedWidth(value: number);
        /**
         * If non-0, any GUI elements rendered with this style will have the height specified here.
         */
        public get fixedHeight(): number;
        public set fixedHeight(value: number);
        /**
         * Can GUI elements of this style be stretched horizontally for better layouting?
         */
        public get stretchWidth(): boolean;
        public set stretchWidth(value: boolean);
        /**
         * Can GUI elements of this style be stretched vertically for better layout?
         */
        public get stretchHeight(): boolean;
        public set stretchHeight(value: boolean);
        /**
         * The font size to use (for dynamic fonts).
         */
        public get fontSize(): number;
        public set fontSize(value: number);
        /**
         * The font style to use (for dynamic fonts).
         */
        public get fontStyle(): FontStyle;
        public set fontStyle(value: FontStyle);
        /**
         * Enable HTML-style tags for Text Formatting Markup.
         */
        public get richText(): boolean;
        public set richText(value: boolean);
        /**
         * The name of this GUIStyle. Used for getting them based on name.
         */
        public get name(): string;
        public set name(value: string);
        /**
         * Rendering settings for when the component is displayed normally.
         */
        public get normal(): GUIStyleState;
        public set normal(value: GUIStyleState);
        /**
         * Rendering settings for when the mouse is hovering over the control.
         */
        public get hover(): GUIStyleState;
        public set hover(value: GUIStyleState);
        /**
         * Rendering settings for when the control is pressed down.
         */
        public get active(): GUIStyleState;
        public set active(value: GUIStyleState);
        /**
         * Rendering settings for when the control is turned on.
         */
        public get onNormal(): GUIStyleState;
        public set onNormal(value: GUIStyleState);
        /**
         * Rendering settings for when the control is turned on and the mouse is hovering it.
         */
        public get onHover(): GUIStyleState;
        public set onHover(value: GUIStyleState);
        /**
         * Rendering settings for when the element is turned on and pressed down.
         */
        public get onActive(): GUIStyleState;
        public set onActive(value: GUIStyleState);
        /**
         * Rendering settings for when the element has keyboard focus.
         */
        public get focused(): GUIStyleState;
        public set focused(value: GUIStyleState);
        /**
         * Rendering settings for when the element has keyboard and is turned on.
         */
        public get onFocused(): GUIStyleState;
        public set onFocused(value: GUIStyleState);
        /**
         * The borders of all background images.
         */
        public get border(): RectOffset;
        public set border(value: RectOffset);
        /**
         * The margins between elements rendered in this style and any other GUI elements.
         */
        public get margin(): RectOffset;
        public set margin(value: RectOffset);
        /**
         * Space from the edge of GUIStyle to the start of the contents.
         */
        public get padding(): RectOffset;
        public set padding(value: RectOffset);
        /**
         * Extra space to be added to the background image.
         */
        public get overflow(): RectOffset;
        public set overflow(value: RectOffset);
        /**
         * The height of one line of text with this style, measured in pixels. (Read Only)
         */
        public get lineHeight(): number;
        /**
         * Shortcut for an empty GUIStyle.
         */
        public static get none(): GUIStyle;
        
        public get isHeightDependantOnWidth(): boolean;
        /**
         * Constructor for empty GUIStyle.
         */
        public constructor();
        /**
         * Constructs GUIStyle identical to given other GUIStyle.
         */
        public constructor($other: GUIStyle);
        /**
         * Draw this GUIStyle on to the screen, internal version.
         */
        public Draw($position: Rect, $isHover: boolean, $isActive: boolean, $on: boolean, $hasKeyboardFocus: boolean):void;
        /**
         * Draw the GUIStyle with a text string inside.
         */
        public Draw($position: Rect, $text: string, $isHover: boolean, $isActive: boolean, $on: boolean, $hasKeyboardFocus: boolean):void;
        /**
         * Draw the GUIStyle with an image inside. If the image is too large to fit within the content area of the style it is scaled down.
         */
        public Draw($position: Rect, $image: Texture, $isHover: boolean, $isActive: boolean, $on: boolean, $hasKeyboardFocus: boolean):void;
        /**
         * Draw the GUIStyle with text and an image inside. If the image is too large to fit within the content area of the style it is scaled down.
         */
        public Draw($position: Rect, $content: GUIContent, $isHover: boolean, $isActive: boolean, $on: boolean, $hasKeyboardFocus: boolean):void;
        /**
         * Draw the GUIStyle with text and an image inside. If the image is too large to fit within the content area of the style it is scaled down.
         */
        public Draw($position: Rect, $content: GUIContent, $controlID: number):void;
        /**
         * Draw the GUIStyle with text and an image inside. If the image is too large to fit within the content area of the style it is scaled down.
         */
        public Draw($position: Rect, $content: GUIContent, $controlID: number, $on: boolean):void;
        
        public Draw($position: Rect, $content: GUIContent, $controlID: number, $on: boolean, $hover: boolean):void;
        /**
         * Draw this GUIStyle with selected content.
         */
        public DrawCursor($position: Rect, $content: GUIContent, $controlID: number, $character: number):void;
        /**
         * Draw this GUIStyle with selected content.
         */
        public DrawWithTextSelection($position: Rect, $content: GUIContent, $controlID: number, $firstSelectedCharacter: number, $lastSelectedCharacter: number):void;
        
        public static op_Implicit($str: string):GUIStyle;
        /**
         * Get the pixel position of a given string index.
         */
        public GetCursorPixelPosition($position: Rect, $content: GUIContent, $cursorStringIndex: number):Vector2;
        /**
         * Get the cursor position (indexing into contents.text) when the user clicked at cursorPixelPosition.
         */
        public GetCursorStringIndex($position: Rect, $content: GUIContent, $cursorPixelPosition: Vector2):number;
        /**
         * Calculate the size of some content if it is rendered with this style.
         */
        public CalcSize($content: GUIContent):Vector2;
        /**
         * Calculate the size of an element formatted with this style, and a given space to content.
         */
        public CalcScreenSize($contentSize: Vector2):Vector2;
        /**
         * How tall this element will be when rendered with content and a specific width.
         */
        public CalcHeight($content: GUIContent, $width: number):number;
        /**
         * Calculate the minimum and maximum widths for this style rendered with content.
         */
        public CalcMinMaxWidth($content: GUIContent, $minWidth: $Ref<number>, $maxWidth: $Ref<number>):void;
        
        public ToString():string;
        
                    
    }
    /**
     * Scaling mode to draw textures with.
     */
    enum ScaleMode { StretchToFill = 0, ScaleAndCrop = 1, ScaleToFit = 2 }
    /**
     * Representation of four-dimensional vectors.
     */
    interface Vector4 extends System.ValueType {
        
                    
    }
    /**
     * Used by GUIUtility.GetControlID to inform the IMGUI system if a given control can get keyboard focus. This allows the IMGUI system to give focus appropriately when a user presses tab for cycling between controls.
     */
    enum FocusType { Native = 0, Keyboard = 1, Passive = 2 }
    /**
     * The GUILayout class is the interface for Unity gui with automatic layout.
     */
    class GUILayout extends System.Object {
        
        public constructor();
        /**
         * Make an auto-layout label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Label($image: Texture, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Label($text: string, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Label($content: GUIContent, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Label($image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Label($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout label.
         * @param text Text to display on the label.
         * @param image Texture to display on the label.
         * @param content Text, image and tooltip for this label.
         * @param style The style to use. If left out, the label style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Label($content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Box($image: Texture, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Box($text: string, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Box($content: GUIContent, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Box($image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Box($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Make an auto-layout box.
         * @param text Text to display on the box.
         * @param image Texture to display on the box.
         * @param content Text, image and tooltip for this box.
         * @param style The style to use. If left out, the box style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static Box($content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Make a single press button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the users clicks the button.
         */
        public static Button($image: Texture, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a single press button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the users clicks the button.
         */
        public static Button($text: string, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a single press button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the users clicks the button.
         */
        public static Button($content: GUIContent, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a single press button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the users clicks the button.
         */
        public static Button($image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a single press button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the users clicks the button.
         */
        public static Button($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a single press button.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the users clicks the button.
         */
        public static Button($content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a repeating button. The button returns true as long as the user holds down the mouse.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the holds down the mouse.
         */
        public static RepeatButton($image: Texture, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a repeating button. The button returns true as long as the user holds down the mouse.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the holds down the mouse.
         */
        public static RepeatButton($text: string, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a repeating button. The button returns true as long as the user holds down the mouse.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the holds down the mouse.
         */
        public static RepeatButton($content: GUIContent, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a repeating button. The button returns true as long as the user holds down the mouse.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the holds down the mouse.
         */
        public static RepeatButton($image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a repeating button. The button returns true as long as the user holds down the mouse.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the holds down the mouse.
         */
        public static RepeatButton($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a repeating button. The button returns true as long as the user holds down the mouse.
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns true when the holds down the mouse.
         */
        public static RepeatButton($content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextField($text: string, ...options: GUILayoutOption[]):string;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextField($text: string, $maxLength: number, ...options: GUILayoutOption[]):string;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextField($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):string;
        /**
         * Make a single-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textArea style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextField($text: string, $maxLength: number, $style: GUIStyle, ...options: GUILayoutOption[]):string;
        /**
         * Make a text field where the user can enter a password.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($password: string, $maskChar: number, ...options: GUILayoutOption[]):string;
        /**
         * Make a text field where the user can enter a password.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($password: string, $maskChar: number, $maxLength: number, ...options: GUILayoutOption[]):string;
        /**
         * Make a text field where the user can enter a password.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($password: string, $maskChar: number, $style: GUIStyle, ...options: GUILayoutOption[]):string;
        /**
         * Make a text field where the user can enter a password.
         * @param password Password to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maskChar Character to mask the password with.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @returns The edited password.
         */
        public static PasswordField($password: string, $maskChar: number, $maxLength: number, $style: GUIStyle, ...options: GUILayoutOption[]):string;
        /**
         * Make a multi-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.&amp;lt;br&amp;gt;
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextArea($text: string, ...options: GUILayoutOption[]):string;
        /**
         * Make a multi-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.&amp;lt;br&amp;gt;
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextArea($text: string, $maxLength: number, ...options: GUILayoutOption[]):string;
        /**
         * Make a multi-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.&amp;lt;br&amp;gt;
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextArea($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):string;
        /**
         * Make a multi-line text field where the user can edit a string.
         * @param text Text to edit. The return value of this function should be assigned back to the string as shown in the example.
         * @param maxLength The maximum length of the string. If left out, the user can type for ever and ever.
         * @param style The style to use. If left out, the textField style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.&amp;lt;br&amp;gt;
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The edited string.
         */
        public static TextArea($text: string, $maxLength: number, $style: GUIStyle, ...options: GUILayoutOption[]):string;
        /**
         * Make an on/off toggle button.
         * @param value Is the button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The new value of the button.
         */
        public static Toggle($value: boolean, $image: Texture, ...options: GUILayoutOption[]):boolean;
        /**
         * Make an on/off toggle button.
         * @param value Is the button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The new value of the button.
         */
        public static Toggle($value: boolean, $text: string, ...options: GUILayoutOption[]):boolean;
        /**
         * Make an on/off toggle button.
         * @param value Is the button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The new value of the button.
         */
        public static Toggle($value: boolean, $content: GUIContent, ...options: GUILayoutOption[]):boolean;
        /**
         * Make an on/off toggle button.
         * @param value Is the button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The new value of the button.
         */
        public static Toggle($value: boolean, $image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make an on/off toggle button.
         * @param value Is the button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The new value of the button.
         */
        public static Toggle($value: boolean, $text: string, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make an on/off toggle button.
         * @param value Is the button on or off?
         * @param text Text to display on the button.
         * @param image Texture to display on the button.
         * @param content Text, image and tooltip for this button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The new value of the button.
         */
        public static Toggle($value: boolean, $content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):boolean;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $texts: string[], ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $images: Texture[], ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $contents: GUIContent[], ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $texts: string[], $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $images: Texture[], $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $texts: string[], $style: GUIStyle, $buttonSize: UnityEngine_GUI.ToolbarButtonSize, ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $images: Texture[], $style: GUIStyle, $buttonSize: UnityEngine_GUI.ToolbarButtonSize, ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $contents: GUIContent[], $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Make a toolbar.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @param buttonSize Determines how toolbar button size is calculated.
         * @returns The index of the selected button.
         */
        public static Toolbar($selected: number, $contents: GUIContent[], $style: GUIStyle, $buttonSize: UnityEngine_GUI.ToolbarButtonSize, ...options: GUILayoutOption[]):number;
        
        public static Toolbar($selected: number, $contents: GUIContent[], $enabled: boolean[], $style: GUIStyle, ...options: GUILayoutOption[]):number;
        
        public static Toolbar($selected: number, $contents: GUIContent[], $enabled: boolean[], $style: GUIStyle, $buttonSize: UnityEngine_GUI.ToolbarButtonSize, ...options: GUILayoutOption[]):number;
        /**
         * Make a Selection Grid.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param xCount How many elements to fit in the horizontal direction. The elements will be scaled to fit unless the style defines a fixedWidth to use. The height of the control will be determined from the number of elements.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($selected: number, $texts: string[], $xCount: number, ...options: GUILayoutOption[]):number;
        /**
         * Make a Selection Grid.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param xCount How many elements to fit in the horizontal direction. The elements will be scaled to fit unless the style defines a fixedWidth to use. The height of the control will be determined from the number of elements.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($selected: number, $images: Texture[], $xCount: number, ...options: GUILayoutOption[]):number;
        /**
         * Make a Selection Grid.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param xCount How many elements to fit in the horizontal direction. The elements will be scaled to fit unless the style defines a fixedWidth to use. The height of the control will be determined from the number of elements.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($selected: number, $content: GUIContent[], $xCount: number, ...options: GUILayoutOption[]):number;
        /**
         * Make a Selection Grid.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param xCount How many elements to fit in the horizontal direction. The elements will be scaled to fit unless the style defines a fixedWidth to use. The height of the control will be determined from the number of elements.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($selected: number, $texts: string[], $xCount: number, $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Make a Selection Grid.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param xCount How many elements to fit in the horizontal direction. The elements will be scaled to fit unless the style defines a fixedWidth to use. The height of the control will be determined from the number of elements.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($selected: number, $images: Texture[], $xCount: number, $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Make a Selection Grid.
         * @param selected The index of the selected button.
         * @param texts An array of strings to show on the buttons.
         * @param images An array of textures on the buttons.
         * @param contents An array of text, image and tooltips for the button.
         * @param xCount How many elements to fit in the horizontal direction. The elements will be scaled to fit unless the style defines a fixedWidth to use. The height of the control will be determined from the number of elements.
         * @param style The style to use. If left out, the button style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The index of the selected button.
         */
        public static SelectionGrid($selected: number, $contents: GUIContent[], $xCount: number, $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * A horizontal slider the user can drag to change a value between a min and a max.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param leftValue The value at the left end of the slider.
         * @param rightValue The value at the right end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The value that has been set by the user.
         */
        public static HorizontalSlider($value: number, $leftValue: number, $rightValue: number, ...options: GUILayoutOption[]):number;
        /**
         * A horizontal slider the user can drag to change a value between a min and a max.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param leftValue The value at the left end of the slider.
         * @param rightValue The value at the right end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The value that has been set by the user.
         */
        public static HorizontalSlider($value: number, $leftValue: number, $rightValue: number, $slider: GUIStyle, $thumb: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * A vertical slider the user can drag to change a value between a min and a max.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param topValue The value at the top end of the slider.
         * @param bottomValue The value at the bottom end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The value that has been set by the user.
         */
        public static VerticalSlider($value: number, $leftValue: number, $rightValue: number, ...options: GUILayoutOption[]):number;
        /**
         * A vertical slider the user can drag to change a value between a min and a max.
         * @param value The value the slider shows. This determines the position of the draggable thumb.
         * @param topValue The value at the top end of the slider.
         * @param bottomValue The value at the bottom end of the slider.
         * @param slider The GUIStyle to use for displaying the dragging area. If left out, the horizontalSlider style from the current GUISkin is used.
         * @param thumb The GUIStyle to use for displaying draggable thumb. If left out, the horizontalSliderThumb style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The value that has been set by the user.
         */
        public static VerticalSlider($value: number, $leftValue: number, $rightValue: number, $slider: GUIStyle, $thumb: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Make a horizontal scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param leftValue The value at the left end of the scrollbar.
         * @param rightValue The value at the right end of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static HorizontalScrollbar($value: number, $size: number, $leftValue: number, $rightValue: number, ...options: GUILayoutOption[]):number;
        /**
         * Make a horizontal scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param leftValue The value at the left end of the scrollbar.
         * @param rightValue The value at the right end of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static HorizontalScrollbar($value: number, $size: number, $leftValue: number, $rightValue: number, $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Make a vertical scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param topValue The value at the top end of the scrollbar.
         * @param bottomValue The value at the bottom end of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static VerticalScrollbar($value: number, $size: number, $topValue: number, $bottomValue: number, ...options: GUILayoutOption[]):number;
        /**
         * Make a vertical scrollbar.
         * @param value The position between min and max.
         * @param size How much can we see?
         * @param topValue The value at the top end of the scrollbar.
         * @param bottomValue The value at the bottom end of the scrollbar.
         * @param style The style to use for the scrollbar background. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
         * @returns The modified value. This can be changed by the user by dragging the scrollbar, or clicking the arrows at the end.
         */
        public static VerticalScrollbar($value: number, $size: number, $topValue: number, $bottomValue: number, $style: GUIStyle, ...options: GUILayoutOption[]):number;
        /**
         * Insert a space in the current layout group.
         */
        public static Space($pixels: number):void;
        /**
         * Insert a flexible space element.
         */
        public static FlexibleSpace():void;
        /**
         * Begin a Horizontal control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginHorizontal(...options: GUILayoutOption[]):void;
        /**
         * Begin a Horizontal control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginHorizontal($style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Begin a Horizontal control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginHorizontal($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Begin a Horizontal control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginHorizontal($image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Begin a Horizontal control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginHorizontal($content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Close a group started with BeginHorizontal.
         */
        public static EndHorizontal():void;
        /**
         * Begin a vertical control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginVertical(...options: GUILayoutOption[]):void;
        /**
         * Begin a vertical control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginVertical($style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Begin a vertical control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginVertical($text: string, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Begin a vertical control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginVertical($image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Begin a vertical control group.
         * @param text Text to display on group.
         * @param image Texture to display on group.
         * @param content Text, image, and tooltip for this group.
         * @param style The style to use for background image and padding values. If left out, the background is transparent.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         */
        public static BeginVertical($content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):void;
        /**
         * Close a group started with BeginVertical.
         */
        public static EndVertical():void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect):void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect, $text: string):void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect, $image: Texture):void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect, $content: GUIContent):void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect, $style: GUIStyle):void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect, $text: string, $style: GUIStyle):void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect, $image: Texture, $style: GUIStyle):void;
        /**
         * Begin a GUILayout block of GUI controls in a fixed screen area.
         * @param text Optional text to display in the area.
         * @param image Optional texture to display in the area.
         * @param content Optional text, image and tooltip top display for this area.
         * @param style The style to use. If left out, the empty GUIStyle (GUIStyle.none) is used, giving a transparent background.
         */
        public static BeginArea($screenRect: Rect, $content: GUIContent, $style: GUIStyle):void;
        /**
         * Close a GUILayout block started with BeginArea.
         */
        public static EndArea():void;
        /**
         * Begin an automatically laid out scrollview.
         * @param scrollPosition The position to use display.
         * @param alwayShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself.
         * @param alwayShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($scrollPosition: Vector2, ...options: GUILayoutOption[]):Vector2;
        /**
         * Begin an automatically laid out scrollview.
         * @param scrollPosition The position to use display.
         * @param alwayShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself.
         * @param alwayShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($scrollPosition: Vector2, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, ...options: GUILayoutOption[]):Vector2;
        /**
         * Begin an automatically laid out scrollview.
         * @param scrollPosition The position to use display.
         * @param alwayShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself.
         * @param alwayShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($scrollPosition: Vector2, $horizontalScrollbar: GUIStyle, $verticalScrollbar: GUIStyle, ...options: GUILayoutOption[]):Vector2;
        /**
         * Begin an automatically laid out scrollview.
         * @param scrollPosition The position to use display.
         * @param alwayShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself.
         * @param alwayShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($scrollPosition: Vector2, $style: GUIStyle):Vector2;
        /**
         * Begin an automatically laid out scrollview.
         * @param scrollPosition The position to use display.
         * @param alwayShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself.
         * @param alwayShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($scrollPosition: Vector2, $style: GUIStyle, ...options: GUILayoutOption[]):Vector2;
        /**
         * Begin an automatically laid out scrollview.
         * @param scrollPosition The position to use display.
         * @param alwayShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself.
         * @param alwayShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($scrollPosition: Vector2, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, $horizontalScrollbar: GUIStyle, $verticalScrollbar: GUIStyle, ...options: GUILayoutOption[]):Vector2;
        /**
         * Begin an automatically laid out scrollview.
         * @param scrollPosition The position to use display.
         * @param alwayShowHorizontal Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when the content inside the ScrollView is wider than the scrollview itself.
         * @param alwayShowVertical Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when content inside the ScrollView is taller than the scrollview itself.
         * @param horizontalScrollbar Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used.
         * @param verticalScrollbar Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used.
         * @returns The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.
         */
        public static BeginScrollView($scrollPosition: Vector2, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, $horizontalScrollbar: GUIStyle, $verticalScrollbar: GUIStyle, $background: GUIStyle, ...options: GUILayoutOption[]):Vector2;
        /**
         * End a scroll view begun with a call to BeginScrollView.
         */
        public static EndScrollView():void;
        /**
         * Make a popup window that layouts its contents automatically.
         * @param id A unique ID to use for each window. This is the ID you'll use to interface to it.
         * @param screenRect Rectangle on the screen to use for the window. The layouting system will attempt to fit the window inside it - if that cannot be done, it will adjust the rectangle to fit.
         * @param func The function that creates the GUI inside the window. This function must take one parameter - the id of the window it's currently making GUI for.
         * @param text Text to display as a title for the window.
         * @param image Texture to display an image in the titlebar.
         * @param content Text, image and tooltip for this window.
         * @param style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style or the screenRect you pass in.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectangle the window is at. This can be in a different position and have a different size than the one you passed in.
         */
        public static Window($id: number, $screenRect: Rect, $func: UnityEngine_GUI.WindowFunction, $text: string, ...options: GUILayoutOption[]):Rect;
        /**
         * Make a popup window that layouts its contents automatically.
         * @param id A unique ID to use for each window. This is the ID you'll use to interface to it.
         * @param screenRect Rectangle on the screen to use for the window. The layouting system will attempt to fit the window inside it - if that cannot be done, it will adjust the rectangle to fit.
         * @param func The function that creates the GUI inside the window. This function must take one parameter - the id of the window it's currently making GUI for.
         * @param text Text to display as a title for the window.
         * @param image Texture to display an image in the titlebar.
         * @param content Text, image and tooltip for this window.
         * @param style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style or the screenRect you pass in.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectangle the window is at. This can be in a different position and have a different size than the one you passed in.
         */
        public static Window($id: number, $screenRect: Rect, $func: UnityEngine_GUI.WindowFunction, $image: Texture, ...options: GUILayoutOption[]):Rect;
        /**
         * Make a popup window that layouts its contents automatically.
         * @param id A unique ID to use for each window. This is the ID you'll use to interface to it.
         * @param screenRect Rectangle on the screen to use for the window. The layouting system will attempt to fit the window inside it - if that cannot be done, it will adjust the rectangle to fit.
         * @param func The function that creates the GUI inside the window. This function must take one parameter - the id of the window it's currently making GUI for.
         * @param text Text to display as a title for the window.
         * @param image Texture to display an image in the titlebar.
         * @param content Text, image and tooltip for this window.
         * @param style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style or the screenRect you pass in.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectangle the window is at. This can be in a different position and have a different size than the one you passed in.
         */
        public static Window($id: number, $screenRect: Rect, $func: UnityEngine_GUI.WindowFunction, $content: GUIContent, ...options: GUILayoutOption[]):Rect;
        /**
         * Make a popup window that layouts its contents automatically.
         * @param id A unique ID to use for each window. This is the ID you'll use to interface to it.
         * @param screenRect Rectangle on the screen to use for the window. The layouting system will attempt to fit the window inside it - if that cannot be done, it will adjust the rectangle to fit.
         * @param func The function that creates the GUI inside the window. This function must take one parameter - the id of the window it's currently making GUI for.
         * @param text Text to display as a title for the window.
         * @param image Texture to display an image in the titlebar.
         * @param content Text, image and tooltip for this window.
         * @param style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style or the screenRect you pass in.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectangle the window is at. This can be in a different position and have a different size than the one you passed in.
         */
        public static Window($id: number, $screenRect: Rect, $func: UnityEngine_GUI.WindowFunction, $text: string, $style: GUIStyle, ...options: GUILayoutOption[]):Rect;
        /**
         * Make a popup window that layouts its contents automatically.
         * @param id A unique ID to use for each window. This is the ID you'll use to interface to it.
         * @param screenRect Rectangle on the screen to use for the window. The layouting system will attempt to fit the window inside it - if that cannot be done, it will adjust the rectangle to fit.
         * @param func The function that creates the GUI inside the window. This function must take one parameter - the id of the window it's currently making GUI for.
         * @param text Text to display as a title for the window.
         * @param image Texture to display an image in the titlebar.
         * @param content Text, image and tooltip for this window.
         * @param style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style or the screenRect you pass in.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectangle the window is at. This can be in a different position and have a different size than the one you passed in.
         */
        public static Window($id: number, $screenRect: Rect, $func: UnityEngine_GUI.WindowFunction, $image: Texture, $style: GUIStyle, ...options: GUILayoutOption[]):Rect;
        /**
         * Make a popup window that layouts its contents automatically.
         * @param id A unique ID to use for each window. This is the ID you'll use to interface to it.
         * @param screenRect Rectangle on the screen to use for the window. The layouting system will attempt to fit the window inside it - if that cannot be done, it will adjust the rectangle to fit.
         * @param func The function that creates the GUI inside the window. This function must take one parameter - the id of the window it's currently making GUI for.
         * @param text Text to display as a title for the window.
         * @param image Texture to display an image in the titlebar.
         * @param content Text, image and tooltip for this window.
         * @param style An optional style to use for the window. If left out, the window style from the current GUISkin is used.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style or the screenRect you pass in.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectangle the window is at. This can be in a different position and have a different size than the one you passed in.
         */
        public static Window($id: number, $screenRect: Rect, $func: UnityEngine_GUI.WindowFunction, $content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):Rect;
        /**
         * Option passed to a control to give it an absolute width.
         */
        public static Width($width: number):GUILayoutOption;
        /**
         * Option passed to a control to specify a minimum width.
         */
        public static MinWidth($minWidth: number):GUILayoutOption;
        /**
         * Option passed to a control to specify a maximum width.
         */
        public static MaxWidth($maxWidth: number):GUILayoutOption;
        /**
         * Option passed to a control to give it an absolute height.
         */
        public static Height($height: number):GUILayoutOption;
        /**
         * Option passed to a control to specify a minimum height.
         */
        public static MinHeight($minHeight: number):GUILayoutOption;
        /**
         * Option passed to a control to specify a maximum height.
         */
        public static MaxHeight($maxHeight: number):GUILayoutOption;
        /**
         * Option passed to a control to allow or disallow horizontal expansion.
         */
        public static ExpandWidth($expand: boolean):GUILayoutOption;
        /**
         * Option passed to a control to allow or disallow vertical expansion.
         */
        public static ExpandHeight($expand: boolean):GUILayoutOption;
        
                    
    }
    /**
     * Class internally used to pass layout options into GUILayout functions. You don't use these directly, but construct them with the layouting functions in the GUILayout class.
     */
    class GUILayoutOption extends System.Object {
        
                    
    }
    /**
     * Utility functions for implementing and extending the GUILayout class.
     */
    class GUILayoutUtility extends System.Object {
        
        public constructor();
        /**
         * Reserve layout space for a rectangle for displaying some contents with a specific style.
         * @param content The content to make room for displaying.
         * @param style The GUIStyle to layout for.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns A rectangle that is large enough to contain content when rendered in style.
         */
        public static GetRect($content: GUIContent, $style: GUIStyle):Rect;
        /**
         * Reserve layout space for a rectangle for displaying some contents with a specific style.
         * @param content The content to make room for displaying.
         * @param style The GUIStyle to layout for.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns A rectangle that is large enough to contain content when rendered in style.
         */
        public static GetRect($content: GUIContent, $style: GUIStyle, ...options: GUILayoutOption[]):Rect;
        /**
         * Reserve layout space for a rectangle with a fixed content area.
         * @param width The width of the area you want.
         * @param height The height of the area you want.
         * @param style An optional GUIStyle to layout for. If specified, the style's padding value will be added to your sizes & its margin value will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectanlge to put your control in.
         */
        public static GetRect($width: number, $height: number):Rect;
        /**
         * Reserve layout space for a rectangle with a fixed content area.
         * @param width The width of the area you want.
         * @param height The height of the area you want.
         * @param style An optional GUIStyle to layout for. If specified, the style's padding value will be added to your sizes & its margin value will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectanlge to put your control in.
         */
        public static GetRect($width: number, $height: number, $style: GUIStyle):Rect;
        /**
         * Reserve layout space for a rectangle with a fixed content area.
         * @param width The width of the area you want.
         * @param height The height of the area you want.
         * @param style An optional GUIStyle to layout for. If specified, the style's padding value will be added to your sizes & its margin value will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectanlge to put your control in.
         */
        public static GetRect($width: number, $height: number, ...options: GUILayoutOption[]):Rect;
        /**
         * Reserve layout space for a rectangle with a fixed content area.
         * @param width The width of the area you want.
         * @param height The height of the area you want.
         * @param style An optional GUIStyle to layout for. If specified, the style's padding value will be added to your sizes & its margin value will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rectanlge to put your control in.
         */
        public static GetRect($width: number, $height: number, $style: GUIStyle, ...options: GUILayoutOption[]):Rect;
        /**
         * Reserve layout space for a flexible rect.
         * @param minWidth The minimum width of the area passed back.
         * @param maxWidth The maximum width of the area passed back.
         * @param minHeight The minimum width of the area passed back.
         * @param maxHeight The maximum width of the area passed back.
         * @param style An optional style. If specified, the style's padding value will be added to the sizes requested & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns A rectangle with size between minWidth & maxWidth on both axes.
         */
        public static GetRect($minWidth: number, $maxWidth: number, $minHeight: number, $maxHeight: number):Rect;
        /**
         * Reserve layout space for a flexible rect.
         * @param minWidth The minimum width of the area passed back.
         * @param maxWidth The maximum width of the area passed back.
         * @param minHeight The minimum width of the area passed back.
         * @param maxHeight The maximum width of the area passed back.
         * @param style An optional style. If specified, the style's padding value will be added to the sizes requested & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns A rectangle with size between minWidth & maxWidth on both axes.
         */
        public static GetRect($minWidth: number, $maxWidth: number, $minHeight: number, $maxHeight: number, $style: GUIStyle):Rect;
        /**
         * Reserve layout space for a flexible rect.
         * @param minWidth The minimum width of the area passed back.
         * @param maxWidth The maximum width of the area passed back.
         * @param minHeight The minimum width of the area passed back.
         * @param maxHeight The maximum width of the area passed back.
         * @param style An optional style. If specified, the style's padding value will be added to the sizes requested & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns A rectangle with size between minWidth & maxWidth on both axes.
         */
        public static GetRect($minWidth: number, $maxWidth: number, $minHeight: number, $maxHeight: number, ...options: GUILayoutOption[]):Rect;
        /**
         * Reserve layout space for a flexible rect.
         * @param minWidth The minimum width of the area passed back.
         * @param maxWidth The maximum width of the area passed back.
         * @param minHeight The minimum width of the area passed back.
         * @param maxHeight The maximum width of the area passed back.
         * @param style An optional style. If specified, the style's padding value will be added to the sizes requested & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns A rectangle with size between minWidth & maxWidth on both axes.
         */
        public static GetRect($minWidth: number, $maxWidth: number, $minHeight: number, $maxHeight: number, $style: GUIStyle, ...options: GUILayoutOption[]):Rect;
        /**
         * Get the rectangle last used by GUILayout for a control.
         * @returns The last used rectangle.
         */
        public static GetLastRect():Rect;
        /**
         * Reserve layout space for a rectangle with a specific aspect ratio.
         * @param aspect The aspect ratio of the element (width / height).
         * @param style An optional style. If specified, the style's padding value will be added to the sizes of the returned rectangle & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rect for the control.
         */
        public static GetAspectRect($aspect: number):Rect;
        /**
         * Reserve layout space for a rectangle with a specific aspect ratio.
         * @param aspect The aspect ratio of the element (width / height).
         * @param style An optional style. If specified, the style's padding value will be added to the sizes of the returned rectangle & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rect for the control.
         */
        public static GetAspectRect($aspect: number, $style: GUIStyle):Rect;
        /**
         * Reserve layout space for a rectangle with a specific aspect ratio.
         * @param aspect The aspect ratio of the element (width / height).
         * @param style An optional style. If specified, the style's padding value will be added to the sizes of the returned rectangle & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rect for the control.
         */
        public static GetAspectRect($aspect: number, ...options: GUILayoutOption[]):Rect;
        /**
         * Reserve layout space for a rectangle with a specific aspect ratio.
         * @param aspect The aspect ratio of the element (width / height).
         * @param style An optional style. If specified, the style's padding value will be added to the sizes of the returned rectangle & the style's margin values will be used for spacing.
         * @param options An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.<br>
        See Also: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
        GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight.
         * @returns The rect for the control.
         */
        public static GetAspectRect($aspect: number, $style: GUIStyle, ...options: GUILayoutOption[]):Rect;
        
                    
    }
    /**
     * General settings for how the GUI behaves.
     */
    class GUISettings extends System.Object {
        /**
         * Should double-clicking select words in text fields.
         */
        public get doubleClickSelectsWord(): boolean;
        public set doubleClickSelectsWord(value: boolean);
        /**
         * Should triple-clicking select whole text in text fields.
         */
        public get tripleClickSelectsLine(): boolean;
        public set tripleClickSelectsLine(value: boolean);
        /**
         * The color of the cursor in text fields.
         */
        public get cursorColor(): Color;
        public set cursorColor(value: Color);
        /**
         * The speed of text field cursor flashes.
         */
        public get cursorFlashSpeed(): number;
        public set cursorFlashSpeed(value: number);
        /**
         * The color of the selection rect in text fields.
         */
        public get selectionColor(): Color;
        public set selectionColor(value: Color);
        
        public constructor();
        
                    
    }
    /**
     * Script interface for.
     */
    interface Font extends Object {
        
                    
    }
    /**
     * Specialized values for the given states used by GUIStyle objects.
     */
    class GUIStyleState extends System.Object {
        /**
         * The background image used by GUI elements in this given state.
         */
        public get background(): Texture2D;
        public set background(value: Texture2D);
        /**
         * The text color used by GUI elements in this state.
         */
        public get textColor(): Color;
        public set textColor(value: Color);
        /**
         * Background images used by this state when on a high-resolution screen. It should either be left empty, or contain a single image that is exactly twice the resolution of background. This is only used by the editor. The field is not copied to player data, and is not accessible from player code.
         */
        public get scaledBackgrounds(): Texture2D[];
        public set scaledBackgrounds(value: Texture2D[]);
        
        public constructor();
        
                    
    }
    /**
     * Class that represents textures in C# code.
     */
    interface Texture2D extends Texture {
        
                    
    }
    /**
     * How image and text is placed inside GUIStyle.
     */
    enum ImagePosition { ImageLeft = 0, ImageAbove = 1, ImageOnly = 2, TextOnly = 3 }
    /**
     * Where the anchor of the text is placed.
     */
    enum TextAnchor { UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
    /**
     * Different methods for how the GUI system handles text being too large to fit the rectangle allocated.
     */
    enum TextClipping { Overflow = 0, Clip = 1 }
    /**
     * Font Style applied to GUI Texts, Text Meshes or GUIStyles.
     */
    enum FontStyle { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
    /**
     * Offsets for rectangles, borders, etc.
     */
    interface RectOffset extends System.Object {
        
                    
    }
    /**
     * Allows to control for which display the OnGUI is called.
     */
    class GUITargetAttribute extends System.Attribute {
        /**
         * Default constructor initializes the attribute for OnGUI to be called for all available displays.
         * @param displayIndex Display index.
         * @param displayIndex1 Display index.
         * @param displayIndexList Display index list.
         */
        public constructor();
        /**
         * Default constructor initializes the attribute for OnGUI to be called for all available displays.
         * @param displayIndex Display index.
         * @param displayIndex1 Display index.
         * @param displayIndexList Display index list.
         */
        public constructor($displayIndex: number);
        /**
         * Default constructor initializes the attribute for OnGUI to be called for all available displays.
         * @param displayIndex Display index.
         * @param displayIndex1 Display index.
         * @param displayIndexList Display index list.
         */
        public constructor($displayIndex: number, $displayIndex1: number);
        /**
         * Default constructor initializes the attribute for OnGUI to be called for all available displays.
         * @param displayIndex Display index.
         * @param displayIndex1 Display index.
         * @param displayIndexList Display index list.
         */
        public constructor($displayIndex: number, $displayIndex1: number, ...displayIndexList: number[]);
        
                    
    }
    /**
     * Utility class for making new GUI controls.
     */
    class GUIUtility extends System.Object {
        /**
         * A global property, which is true if a ModalWindow is being displayed, false otherwise.
         */
        public static get hasModalWindow(): boolean;
        /**
         * Get access to the system-wide clipboard.
         */
        public static get systemCopyBuffer(): string;
        public static set systemCopyBuffer(value: string);
        /**
         * The controlID of the current hot control.
         */
        public static get hotControl(): number;
        public static set hotControl(value: number);
        /**
         * The controlID of the control that has keyboard focus.
         */
        public static get keyboardControl(): number;
        public static set keyboardControl(value: number);
        
        public constructor();
        /**
         * Get a unique ID for a control, using an integer as a hint to help ensure correct matching of IDs to controls.
         */
        public static GetControlID($hint: number, $focusType: FocusType, $rect: Rect):number;
        /**
         * Align a local space rectangle to the pixel grid.
         * @param local The local space rectangle that needs to be processed.
         * @param widthInPixels Width, in pixel units, of the axis-aligned bounding box that encompasses the aligned points.
         * @param heightInPixels Height, in pixel units, of the axis-aligned bounding box that encompasses the aligned points.
         * @returns The aligned rectangle in local space.
         */
        public static AlignRectToDevice($rect: Rect, $widthInPixels: $Ref<number>, $heightInPixels: $Ref<number>):Rect;
        /**
         * Get a unique ID for a control.
         */
        public static GetControlID($focus: FocusType):number;
        /**
         * Get a unique ID for a control, using a the label content as a hint to help ensure correct matching of IDs to controls.
         */
        public static GetControlID($contents: GUIContent, $focus: FocusType):number;
        /**
         * Get a unique ID for a control.
         */
        public static GetControlID($focus: FocusType, $position: Rect):number;
        /**
         * Get a unique ID for a control, using a the label content as a hint to help ensure correct matching of IDs to controls.
         */
        public static GetControlID($contents: GUIContent, $focus: FocusType, $position: Rect):number;
        /**
         * Get a unique ID for a control, using an integer as a hint to help ensure correct matching of IDs to controls.
         */
        public static GetControlID($hint: number, $focus: FocusType):number;
        /**
         * Get a state object from a controlID.
         */
        public static GetStateObject($t: System.Type, $controlID: number):any;
        /**
         * Get an existing state object from a controlID.
         */
        public static QueryStateObject($t: System.Type, $controlID: number):any;
        /**
         * Puts the GUI in a state that will prevent all subsequent immediate mode GUI functions from evaluating for the remainder of the GUI loop by throwing an ExitGUIException.
         */
        public static ExitGUI():void;
        /**
         * Convert a point from GUI position to screen space.
         */
        public static GUIToScreenPoint($guiPoint: Vector2):Vector2;
        /**
         * Convert a rect from GUI position to screen space.
         */
        public static GUIToScreenRect($guiRect: Rect):Rect;
        /**
         * Convert a point from screen space to GUI position.
         */
        public static ScreenToGUIPoint($screenPoint: Vector2):Vector2;
        /**
         * Convert a rect from screen space to GUI position.
         */
        public static ScreenToGUIRect($screenRect: Rect):Rect;
        /**
         * Helper function to rotate the GUI around a point.
         */
        public static RotateAroundPivot($angle: number, $pivotPoint: Vector2):void;
        /**
         * Helper function to scale the GUI around a point.
         */
        public static ScaleAroundPivot($scale: Vector2, $pivotPoint: Vector2):void;
        /**
         * Align a local space rectangle to the pixel grid.
         * @param local The local space rectangle that needs to be processed.
         * @param widthInPixels Width, in pixel units, of the axis-aligned bounding box that encompasses the aligned points.
         * @param heightInPixels Height, in pixel units, of the axis-aligned bounding box that encompasses the aligned points.
         * @returns The aligned rectangle in local space.
         */
        public static AlignRectToDevice($rect: Rect):Rect;
        
                    
    }
    /**
     * An exception that will prevent all subsequent immediate mode GUI functions from evaluating for the remainder of the GUI loop.
     */
    class ExitGUIException extends System.Exception {
        
        public constructor();
        
                    
    }
    
    class TextEditor extends System.Object {
        
        public keyboardOnScreen: TouchScreenKeyboard;
        
        public controlID: number;
        
        public style: GUIStyle;
        
        public multiline: boolean;
        
        public hasHorizontalCursorPos: boolean;
        
        public isPasswordField: boolean;
        
        public scrollOffset: Vector2;
        
        public graphicalCursorPos: Vector2;
        
        public graphicalSelectCursorPos: Vector2;
        
        public get text(): string;
        public set text(value: string);
        
        public get position(): Rect;
        public set position(value: Rect);
        
        public get cursorIndex(): number;
        public set cursorIndex(value: number);
        
        public get selectIndex(): number;
        public set selectIndex(value: number);
        
        public get doubleClickSnapping(): UnityEngine_TextEditor.DblClickSnapping;
        public set doubleClickSnapping(value: UnityEngine_TextEditor.DblClickSnapping);
        
        public get altCursorPosition(): number;
        public set altCursorPosition(value: number);
        
        public get hasSelection(): boolean;
        
        public get SelectedText(): string;
        
        public constructor();
        
        public OnFocus():void;
        
        public OnLostFocus():void;
        
        public HandleKeyEvent($e: Event):boolean;
        
        public DeleteLineBack():boolean;
        
        public DeleteWordBack():boolean;
        
        public DeleteWordForward():boolean;
        
        public Delete():boolean;
        
        public CanPaste():boolean;
        
        public Backspace():boolean;
        
        public SelectAll():void;
        
        public SelectNone():void;
        
        public DeleteSelection():boolean;
        
        public ReplaceSelection($replace: string):void;
        
        public Insert($c: number):void;
        
        public MoveSelectionToAltCursor():void;
        
        public MoveRight():void;
        
        public MoveLeft():void;
        
        public MoveUp():void;
        
        public MoveDown():void;
        
        public MoveLineStart():void;
        
        public MoveLineEnd():void;
        
        public MoveGraphicalLineStart():void;
        
        public MoveGraphicalLineEnd():void;
        
        public MoveTextStart():void;
        
        public MoveTextEnd():void;
        
        public MoveParagraphForward():void;
        
        public MoveParagraphBackward():void;
        
        public MoveCursorToPosition($cursorPosition: Vector2):void;
        
        public MoveAltCursorToPosition($cursorPosition: Vector2):void;
        
        public IsOverSelection($cursorPosition: Vector2):boolean;
        
        public SelectToPosition($cursorPosition: Vector2):void;
        
        public SelectLeft():void;
        
        public SelectRight():void;
        
        public SelectUp():void;
        
        public SelectDown():void;
        
        public SelectTextEnd():void;
        
        public SelectTextStart():void;
        
        public MouseDragSelectsWholeWords($on: boolean):void;
        
        public DblClickSnap($snapping: UnityEngine_TextEditor.DblClickSnapping):void;
        
        public MoveWordRight():void;
        
        public MoveToStartOfNextWord():void;
        
        public MoveToEndOfPreviousWord():void;
        
        public SelectToStartOfNextWord():void;
        
        public SelectToEndOfPreviousWord():void;
        
        public FindStartOfNextWord($p: number):number;
        
        public MoveWordLeft():void;
        
        public SelectWordRight():void;
        
        public SelectWordLeft():void;
        
        public ExpandSelectGraphicalLineStart():void;
        
        public ExpandSelectGraphicalLineEnd():void;
        
        public SelectGraphicalLineStart():void;
        
        public SelectGraphicalLineEnd():void;
        
        public SelectParagraphForward():void;
        
        public SelectParagraphBackward():void;
        
        public SelectCurrentWord():void;
        
        public SelectCurrentParagraph():void;
        
        public UpdateScrollOffsetIfNeeded($evt: Event):void;
        
        public DrawCursor($newText: string):void;
        
        public SaveBackup():void;
        
        public Undo():void;
        
        public Cut():boolean;
        
        public Copy():void;
        
        public Paste():boolean;
        
        public DetectFocusChange():void;
        
                    
    }
    /**
     * Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported.
     */
    interface TouchScreenKeyboard extends System.Object {
        
                    
    }
    
}
declare module 'System' {

    import * as System_Reflection from 'System.Reflection';
        
    
    interface Object {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Char extends ValueType {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Attribute extends Object {
        
                    
    }
    
    interface Type extends System_Reflection.MemberInfo {
        
                    
    }
    
    interface Exception extends Object {
        
                    
    }
    
    interface Byte extends ValueType {
        
                    
    }
    
}
declare module 'UnityEngine.GUI' {

    import * as System from 'System';
    import * as UnityEngine from 'UnityEngine';
        
    /**
     * Determines how toolbar button size is calculated.
     */
    enum ToolbarButtonSize { Fixed = 0, FitToContents = 1 }
    /**
     * Callback to draw GUI within a window (used with GUI.Window).
     */
    type WindowFunction = (id: number) => void;
    var WindowFunction: {new (func: (id: number) => void): WindowFunction;}
    
    class Scope extends System.Object {
        
        public Dispose():void;
        
                    
    }
    /**
     * Disposable helper class for managing BeginGroup / EndGroup.
     */
    class GroupScope extends UnityEngine.Scope {
        
        public constructor($position: UnityEngine.Rect);
        
        public constructor($position: UnityEngine.Rect, $text: string);
        
        public constructor($position: UnityEngine.Rect, $image: UnityEngine.Texture);
        
        public constructor($position: UnityEngine.Rect, $content: UnityEngine.GUIContent);
        
        public constructor($position: UnityEngine.Rect, $style: UnityEngine.GUIStyle);
        
        public constructor($position: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle);
        
        public constructor($position: UnityEngine.Rect, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle);
        
                    
    }
    /**
     * Disposable helper class for managing BeginScrollView / EndScrollView.
     */
    class ScrollViewScope extends UnityEngine.Scope {
        
        public get scrollPosition(): UnityEngine.Vector2;
        
        public get handleScrollWheel(): boolean;
        public set handleScrollWheel(value: boolean);
        
        public constructor($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect);
        
        public constructor($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean);
        
        public constructor($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect, $horizontalScrollbar: UnityEngine.GUIStyle, $verticalScrollbar: UnityEngine.GUIStyle);
        
        public constructor($position: UnityEngine.Rect, $scrollPosition: UnityEngine.Vector2, $viewRect: UnityEngine.Rect, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, $horizontalScrollbar: UnityEngine.GUIStyle, $verticalScrollbar: UnityEngine.GUIStyle);
        
                    
    }
    
    class ClipScope extends UnityEngine.Scope {
        
        public constructor($position: UnityEngine.Rect);
        
                    
    }
    
}
declare module 'UnityEngine.GUILayout' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    /**
     * Disposable helper class for managing BeginHorizontal / EndHorizontal.
     */
    class HorizontalScope extends UnityEngine.Scope {
        
        public constructor(...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($text: string, $style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($image: UnityEngine.Texture, $style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
                    
    }
    /**
     * Disposable helper class for managing BeginVertical / EndVertical.
     */
    class VerticalScope extends UnityEngine.Scope {
        
        public constructor(...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($text: string, $style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($image: UnityEngine.Texture, $style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
                    
    }
    /**
     * Disposable helper class for managing BeginArea / EndArea.
     */
    class AreaScope extends UnityEngine.Scope {
        
        public constructor($screenRect: UnityEngine.Rect);
        
        public constructor($screenRect: UnityEngine.Rect, $text: string);
        
        public constructor($screenRect: UnityEngine.Rect, $image: UnityEngine.Texture);
        
        public constructor($screenRect: UnityEngine.Rect, $content: UnityEngine.GUIContent);
        
        public constructor($screenRect: UnityEngine.Rect, $text: string, $style: UnityEngine.GUIStyle);
        
        public constructor($screenRect: UnityEngine.Rect, $image: UnityEngine.Texture, $style: UnityEngine.GUIStyle);
        
        public constructor($screenRect: UnityEngine.Rect, $content: UnityEngine.GUIContent, $style: UnityEngine.GUIStyle);
        
                    
    }
    /**
     * Disposable helper class for managing BeginScrollView / EndScrollView.
     */
    class ScrollViewScope extends UnityEngine.Scope {
        
        public get scrollPosition(): UnityEngine.Vector2;
        
        public get handleScrollWheel(): boolean;
        public set handleScrollWheel(value: boolean);
        
        public constructor($scrollPosition: UnityEngine.Vector2, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($scrollPosition: UnityEngine.Vector2, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($scrollPosition: UnityEngine.Vector2, $horizontalScrollbar: UnityEngine.GUIStyle, $verticalScrollbar: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($scrollPosition: UnityEngine.Vector2, $style: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($scrollPosition: UnityEngine.Vector2, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, $horizontalScrollbar: UnityEngine.GUIStyle, $verticalScrollbar: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
        public constructor($scrollPosition: UnityEngine.Vector2, $alwaysShowHorizontal: boolean, $alwaysShowVertical: boolean, $horizontalScrollbar: UnityEngine.GUIStyle, $verticalScrollbar: UnityEngine.GUIStyle, $background: UnityEngine.GUIStyle, ...options: UnityEngine.GUILayoutOption[]);
        
                    
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
declare module 'UnityEngine.TextEditor' {

    import * as System from 'System';
        
    
    enum DblClickSnapping { WORDS = 0, PARAGRAPHS = 1 }
    
}

