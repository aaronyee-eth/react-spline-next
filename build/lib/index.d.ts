import * as React from 'react';
import { FC } from 'react';
import { EventsTargetType, LoadingType } from '../viewer/spline-viewer';
import { Application } from '@splinetool/runtime';
interface ISplineProps {
    url: string | null;
    /**
     * The width of the canvas
     */
    width?: number;
    /**
     * The height of the canvas
     */
    height?: number;
    /**
     * Background color
     */
    background?: string;
    /**
     * Preloading strategy ('auto', 'lazy' or 'eager')
     */
    loading?: LoadingType;
    /**
     * Enables auto unloading of the canvas / spline when it leaves the viewport
     */
    unloadable?: boolean;
    /**
     * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
     */
    eventsTarget?: EventsTargetType | undefined;
    /**
     * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
     */
    hint?: boolean;
    /**
     * When true it displays the spinner preloader
     */
    loadingAnim?: boolean;
    /**
     * If no anchorElement is provided, scroll anchor will be the viewer itself
     */
    anchorElement?: HTMLElement | null;
    /**
     * customized props
     */
    hideLogo?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export interface ISplineViewer extends HTMLElement {
    /**
     * The url of the .splinecode file as exported from Spline Editor.
     */
    url: string | null;
    /**
     * The width of the canvas
     */
    width: number | undefined;
    /**
     * The height of the canvas
     */
    height: number | undefined;
    /**
     * Background color
     */
    background: string | undefined;
    /**
     * Preloading strategy ('auto', 'lazy' or 'eager')
     */
    loading: LoadingType;
    /**
     * Enables auto unloading of the canvas / spline when it leaves the viewport
     */
    unloadable: boolean;
    /**
     * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
     */
    eventsTarget: EventsTargetType | undefined;
    /**
     * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
     */
    hint?: boolean;
    /**
     * When true it displays the spinner preloader
     */
    loadingAnim: boolean;
    /**
     * If no anchorElement is provided, scroll anchor will be the viewer itself
     */
    anchorElement?: HTMLElement | null;
    _spline: Application;
    _intersectionObserver: IntersectionObserver | null;
    _isElementInViewport: boolean;
    _loaded: boolean;
    _container: HTMLElement;
    _canvas: HTMLCanvasElement;
    _logo: HTMLElement;
    _hintDrag: HTMLElement;
    _preloader: HTMLElement;
    _loadedUrl: string | null;
    _wasContextLost: boolean;
    unload(): void;
    _handleContextLost: () => void;
    _handleContextRestored: () => void;
    recreateCanvas(): void;
    load(): void;
    onLoaded: () => void;
    onInteract: () => void;
    updated(changedProperties: Map<string | number | symbol, any>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare const Spline: FC<ISplineProps>;
export default Spline;
