# Phaser List View Typings

TypeScript typings file for [mattcolman/phaser-list-view](https://github.com/mattcolman/phaser-list-view) plugin.

## Installation

To install with Typings (recommended):

```bash
typings install phaser-list-view=github:drewsilcock/phaser-list-view-plugin/index.d.ts#{COMMIT HASH HERE} --global --save
```

Replace `{COMMIT HASH HERE}` with the commit of the Typings file you want to use. By doing this, you "pin" down your Typings so that if (or when) I update this `index.d.ts` file, your Typings won't change and mess your code up without your intervention.

## Usage

I am currently using a bit of a nasty hack to get this actually working in TypeScript, which is the following:

```typescript
declare global {
    interface Window {
        PhaserListView: {
            DirectionalScroller: DirectionalScrollerWrapper,
            ListView: ListViewWrapper,
            Scroller: ScrollerWrapper,
            SwipeCarousel: SwipeCarouselWrapper,
            WheelScroller: WheelScrollerWrapper,
        };
    }
}

export interface DirectionalScrollerWrapper {
    new (): DirectionalScroller;
}

export interface ListViewWrapper {
    new (game: Phaser.Game, parent: PIXI.DisplayObject,
         bounds: Phaser.Rectangle, options: ListViewOptions): ListView;
}

export interface ScrollerWrapper {
    new (game: Phaser.Game, clickObject: any,
         maskLimits: any, options: ScrollerOptions): Scroller;
}

export interface SwipeCarouselWrapper {
    new (game: Phaser.Game, parent: PIXI.DisplayObject,
         bounds: Phaser.Rectangle, options: SwipeCarouselOptions): SwipeCarousel;
}

export interface WheelScrollerWrapper {
    new (game: Phaser.Game, clickObject: PIXI.DisplayObject,
         options: WheelScrollerOptions): WheelScroller;
}
```

This is then used in a TypeScript file as follows:


```typescript
// Utilises ES6-style object destructured assignment.
const {
    DirectionalScroller,
    ListView,
    Scroller,
    SwipeCarousel,
    WheelScroller,
} = window.PhaserListView; // If you don't need any of these, you can just leave them out of the `const { ... }`.

...

const listView = new ListView(game, parent, bounds, options);
```

If anyone has a nicer way of doing this, I'd very much like to hear it! Just open an issue.
