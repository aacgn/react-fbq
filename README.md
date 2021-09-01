# React FBQ

## Install

```bash
npm install --save @aacgn/react-fbq

```

or

```bash
yarn add @aacgn/react-fbq

```

## How to use

```js
import ReactFBQ from '@aacgn/react-fbq';

ReactFBQ.initialize('pixelId');

ReactPixel.pageview(); // For tracking page view
ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
```