<!--
[![A great header image you designed, or collaborated on with a designer you work with. It’ll look best when it’s 728px wide, @2x for hi-dpi devices.](preview.png)](https://github.com/kennethormandy/default)

***

-->

# Figment

Editorial and catalogue-inspired `<figure>` and `<figcaption>` pairings for mobile-first layouts.

## Getting started

This isn’t really ready to use yet, but if you’d like to take a look:

```
git clone http://github.com/kennethormandy/figment
cd figment
npm install -g harp
harp server
open http://localhost:9000/examples/section-1
```

## API

Available:

```
.figure--aside    - A figure with the caption as marginalia when possible.
.figure--border   - A figure framed with a border.
.figure--browser  - A figure framed with browser chrome.
.figure--breakout - A figure that visually breaks the container when there is space available.
.figure--overlay  - An image with an optional overlayed caption.
```

Coming:

```
.figure--cropped  - A figure that can be acceptably cropped at certain screen sizes.
.figure--device   - A figure framed with a mobile device. (Undecided how to specfiy a device.)
.figure--embed    - A figure with media embedded from another service. (ex. Instagram, Vimeo, Twitter card.)
.figure--square   - A figure contained within the largest square possible. (Could be part of embed.)
```

Potential:

```
.figure--right
.figure--left
.figure--split (would rather have some kind of flexbox dyptic triptych thing, or just leave that for another library you’re already using that has grid classes)
.figure--crop (marginal image that can acceptably bleed off the canvas)
```

## Contributing

Thanks for considering contributing! Everything in `example/` is currently generated. There’s more information about how to [get started here](CONTRIBUTING.md).

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2014 [Kenneth Ormandy](http://kennethormandy.com) & [Chloi Inc.](http://chloi.io)
