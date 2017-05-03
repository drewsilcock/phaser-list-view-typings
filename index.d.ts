// Typings for Phaser List View plugin by Matt Colman: https://github.com/mattcolman/phaser-list-view.

/* tslint:disable max-classes-per-file */

declare interface ListViewOptions {
    /**
     * Default: "y"
     */
    direction?: string;

    /**
     * Default: true
     */
    autocull?: boolean;

    /**
     * Default: true
     */
    momentum?: boolean;

    /**
     * Default: true
     */
    bouncing?: boolean;

    /**
     * Default: false
     */
    snapping?: boolean;

    /**
     * Default: 100
     */
    overflow?: number;

    /**
     * Default: 10
     */
    padding?: number;

    /**
     * If you just click on the list view it will search the list view items for onInputDown
     * and onInputUp events.
     * Default: false
     */
    searchForClicks?: boolean;
}

declare class ListView {
    public bounds: Phaser.Rectangle;

    public events: { onAdded: Phaser.Signal };

    public game: Phaser.Game;

    public options: ListViewOptions;

    public parent: PIXI.DisplayObject;

    public position: number;

    public length: number;

    public scroller: DirectionalScroller;

    /**
     * Group that contains all the added children.
     */
    public grp: Phaser.Group;

    /**
     * Construct the list view.
     * @param game Phaser game reference.
     * @param parent Parent that should have this list view as a child.
     * @param bounds Bounds of the list view.
     * @param options Default options are direction: y, autocull: true, padding: 10.
     */
    constructor(game: Phaser.Game, parent: PIXI.DisplayObject,
                bounds: Phaser.Rectangle, options: ListViewOptions);

    /**
     * Add a child to the list.
     * This stacks them on top of each other by measuring their
     * height and adding custom padding. Optionally you can
     * specify nominalHeight or nominalWidth on the display object,
     * this will take preference over height and width.
     * @param child The child to add to the list view.
     */
    public add(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Add multiple children to the list view.
     * @param children Children to add to the list view.
     */
    public addMultiple(...children: PIXI.DisplayObject[]): void;

    /**
     * Remove particular child from list view.
     * @param child Child to remove from list view.
     */
    public remove(child: PIXI.DisplayObject): void;

    /**
     * Remove all children from the group.
     * This does not reset the position of the ListView.
     */
    public removeAll(): void;

    /**
     * Culls the off-screen list elements.
     * Mainly called internally with the autocull property.
     */
    public cull(): void;

    /**
     * Set position of the top of the list view. Either the x or y value, depending
     * on what you set the direction to.
     * @param position Position to set the top of the list view to (either x or y).
     */
    public setPosition(position: number): void;

    /**
     * Destroys the list view.
     */
    public destroy(): void;

    /**
     * Reset the list view position.
     */
    public reset(): void;
}

declare interface SwipeCarouselOptions extends ListViewOptions {
    /**
     * Default: "y"
     */
    direction?: string;

    /**
     * Default: true
     */
    autocull?: boolean;

    /**
     * Default: false
     */
    momentum?: boolean;

    /**
     * Default: true
     */
    bouncing?: boolean;

    /**
     * Default: true
     */
    snapping?: boolean;

    /**
     * Default: 100
     */
    overflow?: number;

    /**
     * Default: 10
     */
    padding?: number;

    /**
     * Default: true
     */
    swipeEnabled?: boolean;

    /**
     * Default: { x: 100 }
     */
    offset?: { x?: number, y?: number };
}

declare class SwipeCarousel extends ListView {
    constructor(game: Phaser.Game, parent: PIXI.DisplayObject,
                bounds: Phaser.Rectangle, options: SwipeCarouselOptions);
}

declare interface ScrollerOptions {
    /**
     * Default: 0
     */
    from?: number;

    /**
     * Default: 200
     */
    to?: number;

    /**
     * Default: "y"
     */
    direction?: string;

    /**
     * Default: false
     */
    momentum?: boolean;

    /**
     * Default: false
     */
    snapping?: boolean;

    /**
     * Default: false
     */
    bouncing?: boolean;

    /**
     * Value between 0 and 1.
     * Default: 0.5
     */
    deceleration?: number;

    /**
     * Default: 20
     */
    overflow?: number;

    /**
     * Default: 10
     */
    snapStep?: number;

    /**
     * Default: false
     */
    emitMoving?: boolean;

    /**
     * (s) Duration of the inertial scrolling simulation.
     * Default: 2
     */
    duration?: number;

    /**
     * (s) Set maximum speed. Higher values will allow faster scroll (which comes down to a bigger offset for
     * the duration of the momentum scroll). Note: touch motion determines actual speed, this is just a limit.
     * Default: 3
     */
    speedLimit?: number;

    /**
     * (ms) determines if a flick occurred: time between last updated movement @ touchmove and time @ touchend,
     * if smaller than this value, trigger inertial scrolling.
     * Default: 100
     */
    flickTimeThreshold?: number;

    /**
     * (pixels) determines if calculated offset is above this threshold.
     * Default: 30
     */
    offsetThreshold?: number;

    /**
     * Increase the multiplier by this value, each time the user swipes again when still scrolling.
     * The multiplier is used to multiply the offset. Set to 0 to disable.
     * Default: 0.5
     */
    acceleration?: number;

    /**
     * (ms) Time between successive swipes that determines if the multiplier is increased
     * (if lower than this value).
     * Default: 250
     */
    accelerationT?: number;

    /**
     * Default: 4
     */
    maxAcceleration?: number;

    /**
     * Contains timestamps of the most recent down, up and move events.
     */
    time?: { up?: number, down?: number, move?: number};

    /**
     * Acceleration multiplier, don't edit here.
     * Default: 1
     */
    multiplier?: number;

    /**
     * Default: false
     */
    swipeEnabled?: boolean;

    /**
     * (pixels) Must move this many pixels for a swipe action.
     * Default: 5
     */
    swipeThreshold?: number;

    /**
     * (ms) determines if a swipe occurred: time between last updated movement @ touchmove and time
     * @ touchend; if smaller than this value, trigger swipe.
     * Default: 250
     */
    swipeTimeThreshold?: number;

    /**
     * Default: 0.5
     */
    minDuration?: number;

    /**
     * Default: true
     */
    addListeners?: boolean;
}

/**
 * Note from typings writer: many of these methods seem like they could be protected or even private, but without
 * looking into it in more detail it's difficult to know. I've ignored the methods starting with underscores, as
 * this is a common pattern for notating private methods.
 */
declare class Scroller {
    public min: number;
    public max: number;
    public enabled: boolean;
    public length: number;
    public acc: number;
    public target: number;
    public old: number;
    public diff: number;
    public events: {
        onUpdate: Phaser.Signal;
        onInputUp: Phaser.Signal;
        onInputDown: Phaser.Signal;
        onInputMove: Phaser.Signal;
        onComplete: Phaser.Signal;
        onSwipe: Phaser.Signal;
    };
    public scrollObject: { [direction: string]: number };
    public clickObject: PIXI.DisplayObject;
    public clickables: PIXI.DisplayObject[];
    public game: Phaser.Game;
    public options: ScrollerOptions;
    public o: ScrollerOptions;
    public isDown: boolean;
    public isScrolling: boolean;
    public destroyed: boolean;

    constructor(game: Phaser.Game, clickObject: PIXI.DisplayObject,
                maskLimits: { x?: number, y?: number, angle?: number }, options: ScrollerOptions);

    public destroy(): void;

    public addListeners(): void;

    public removeListeners(): void;

    public enable(): void;

    public disable(): void;

    public init(): void;

    public reset(): void;

    public setFromTo(_from: number, to: number): void;

    public isTweening(): boolean;

    public registerClickables(clickables: PIXI.DisplayObject[]): void;

    public handleDown(target: number, pointer: Phaser.Pointer): void;

    public handleMove(pointer: Phaser.Pointer, x: number, y: number): void;

    public handleUp(target: number, pointer: Phaser.Pointer): void;

    public tweenToSnap(duration: number, snapIndex: number): void;

    /**
     * Tween the scroller to the target.
     * Typings writer: not sure of the return type for this method.
     * @param duration Duration in seconds
     * @param target Target relative to the scroller space (usually pixels, but can be angle)
     */
    public tweenTo(duration: number, target: number): void;

    public cancel(): void;

    /**
     * Sets the scroller to the target.
     * @param target Target relative to the scroller space (usually pixels, but can be angle)
     */
    public setTo(target: number): void;

    public handleUpdate(): void;

    public handleComplete(): void;
}

declare interface WheelScrollerOptions extends ScrollerOptions {
    /**
     * Default: "angle"
     */
    direction?: string;

    /**
     * Default: false
     */
    infinite?: boolean;

    /**
     * Default: 1.5
     */
    speedLimit?: 1.5;
}

declare class WheelScroller extends Scroller {
    constructor(game: Phaser.Game, clickObject: PIXI.DisplayObject, options: WheelScrollerOptions);
}

declare class DirectionalScroller extends Scroller { }
