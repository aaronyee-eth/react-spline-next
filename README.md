# `<spline-viewer>`

## Quickstart

```html
<!-- Import the component -->
<script
	type="module"
	src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
></script>

<!-- Use it like any other HTML element -->
<spline-viewer
	url="https://prod.spline.design/iEAs8HJFu91daMOq/scene.splinecode"
></spline-viewer>
```

## Installing

The `<spline-viewer>` web component can be installed from [NPM](https://npmjs.org):

```sh
npm install @splinetool/viewer
```

It can also be used directly from various free CDNs such as [unpkg.com](https://unpkg.com):

```html
<script
	type="module"
	src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
></script>
```

## Options

### `url`

The url of your Spline export. ex: `https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode`.

### `width` (optional)

The desired width of the viewer in pixels. Ex: `width="400"`.

### `height` (optional)

The desired height of the viewer in pixels. Ex: `height="400"`

### `background` (optional)

A css like color that will override the background color of your scene as it was set in the editor. Ex: `background="#ff0000"`.

### `loading` (optional)

This option controls the agressiveness of the preload of your scene. Possible values are `auto`, `lazy` and `eager`. By default (`auto`) the behavior is to `lazy` load the scene and only start to preload when the tag enters the viewport. If you need to start loading immediately then you can set `loading="eager"` instead.

### `loading-anim` (optional)

When true (default is false), this option displays a simple spinner preloader during the loading of the spline file.

### `unloadable` (optional)

When true (default is false), this options makes the viewer unload the spline element when it leaves the viewport.

### `events-target` (optional)

Values can either be `local` (events listened on the canvas) or `global` (events listened on the window).

### `hint` (optional)

When true (default is false), this option displays an overlay animation suggesting the user should use dragging in order to interact with the scene. This animation disappears as soon as user interacts.

## Events

You can listen for a few custom events on the `spline-viewer` element that are triggered at various moments of its lifecycle.

```js
const mySplineViewer = document.getElementById('MySplineViewer');
mySplineViewer.addEventListener('load-start', (e) => {
	console.log('loading started', e.detail.url);
});
```

### `viewport-intersection`

Triggered when the viewer enters or leaves the viewport. Event contains a `intersection:boolean` detail value.

### `context-loss`

Triggered when the webgl context of the canvas is lost.

### `load-start`

Triggered when the viewer starts loading a scene. Event contains a `url:string` detail value. Use This if you want to display a preloader during loading.

### `load-complete`

Triggered when the viewer finishes loading a scene. Event contains a `url:string` detail value. Use This if you want to display a preloader during loading.

### `unload`

Triggered when the viewer finishes loading a scene. Event contains a `url:string` detail value. Use This if you want to display a preloader during loading.

## Exporting for `<spline-viewer` from Spline editor

If you want a scene to be loaded by the `<spline-viewer>` component, you need to export it from Spline editor using the `Spline Viewer` export type. First click on the Export button from the toolbar, then click on the `Spline Viewer` tab on the sidebar of the export modal. Finally click on update and when export is done you can copy paste the code snippet or the exported URL.

Check the [docs](https://docs.spline.design/67b4c8ec0d2b46dd8588a99a7e94db6e) for more details.

## Listening for events outside of the canvas

In case you need the events to be able to listen for your movements outside of the canvas (exemple: a look at event that follow your mouse outside of the canvas), you can set the `Mouse Events` option to `From full window` inside the `Spline Viewer` export options.