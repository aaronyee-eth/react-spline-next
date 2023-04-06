import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import { EventsTargetType, LoadingType } from '../viewer/spline-viewer'
import { Application } from '@splinetool/runtime'
typeof window === 'object' && require('../viewer/spline-viewer.cjs')

interface ISplineProps {
  url: string | null
  /**
   * The width of the canvas
   */
  width?: number
  /**
   * The height of the canvas
   */
  height?: number
  /**
   * Background color
   */
  background?: string
  /**
   * Preloading strategy ('auto', 'lazy' or 'eager')
   */
  loading?: LoadingType
  /**
   * Enables auto unloading of the canvas / spline when it leaves the viewport
   */
  unloadable?: boolean
  /**
   * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
   */
  eventsTarget?: EventsTargetType | undefined
  /**
   * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
   */
  hint?: boolean
  /**
   * When true it displays the spinner preloader
   */
  loadingAnim?: boolean

  /**
   * If no anchorElement is provided, scroll anchor will be the viewer itself
   */
  anchorElement?: HTMLElement | null

  /**
   * customized props
   */
  hideLogo?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface ISplineViewer extends HTMLElement {
  /**
   * The url of the .splinecode file as exported from Spline Editor.
   */
  url: string | null
  /**
   * The width of the canvas
   */
  width: number | undefined
  /**
   * The height of the canvas
   */
  height: number | undefined
  /**
   * Background color
   */
  background: string | undefined
  /**
   * Preloading strategy ('auto', 'lazy' or 'eager')
   */
  loading: LoadingType
  /**
   * Enables auto unloading of the canvas / spline when it leaves the viewport
   */
  unloadable: boolean
  /**
   * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
   */
  eventsTarget: EventsTargetType | undefined
  /**
   * Target of the mouse events, can either be 'local' (ie the canvas) or global (window)
   */
  hint?: boolean
  /**
   * When true it displays the spinner preloader
   */
  loadingAnim: boolean
  /**
   * If no anchorElement is provided, scroll anchor will be the viewer itself
   */
  anchorElement?: HTMLElement | null
  _spline: Application
  _intersectionObserver: IntersectionObserver | null
  _isElementInViewport: boolean
  _loaded: boolean
  _container: HTMLElement
  _canvas: HTMLCanvasElement
  _logo: HTMLElement
  _hintDrag: HTMLElement
  _preloader: HTMLElement
  _loadedUrl: string | null
  _wasContextLost: boolean

  unload (): void

  _handleContextLost: () => void
  _handleContextRestored: () => void

  recreateCanvas (): void

  load (): void

  onLoaded: () => void
  onInteract: () => void

  updated (changedProperties: Map<string | number | symbol, any>): void

  connectedCallback (): void

  disconnectedCallback (): void
}

const Spline: FC<ISplineProps> = (props) => {
  const { className, style, hideLogo, anchorElement, ...rest } = props
  if (!rest.unloadable) delete rest.unloadable
  const [id] = useState(
    'spline-viewer-' + Math.random().toString(36).substr(2, 8)
  )
  const [viewer, setViewer] = useState<ISplineViewer>()
  useEffect(() => {
    setViewer(document.getElementById(id) as ISplineViewer)
  }, [id])

  useEffect(() => {
    if (!viewer) return
    const onLoad = () => {
      viewer._spline.eventManager.eventContext.anchorElement = anchorElement
    }
    viewer._spline.addEventListener('init' as any, onLoad)
    return () => {
      viewer._spline.removeEventListener('init' as any, onLoad)
    }
  }, [anchorElement, viewer])

  useEffect(() => {
    if (!viewer) return
    hideLogo && viewer._logo.remove()
  }, [hideLogo, viewer])

  useEffect(() => {
    if (!viewer || !props.url) return
    viewer._spline.load(props.url).then(viewer.onLoaded)
  }, [props.url, viewer])

  return (
    <div className={className} style={style}>
      <spline-viewer {...rest} id={id}></spline-viewer>
    </div>
  )
}

export default Spline
