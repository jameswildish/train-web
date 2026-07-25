'use client'

import { useState, useCallback } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const BASE_SCALE = 130
const MIN_ZOOM = 1
const MAX_ZOOM = 6

export interface MapMarker {
  institution: string
  country: string
  city?: string
  lat: number
  lng: number
}

interface Tooltip {
  x: number
  y: number
  marker: MapMarker
}

interface Props {
  markers: MapMarker[]
  heading?: string
  subheading?: string
}

export default function WorldMap({ markers, heading, subheading }: Props) {
  const [zoom, setZoom] = useState(1)
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  const zoomIn = () => setZoom(z => Math.min(parseFloat((z * 1.6).toFixed(2)), MAX_ZOOM))
  const zoomOut = () => setZoom(z => Math.max(parseFloat((z / 1.6).toFixed(2)), MIN_ZOOM))

  const handleMouseEnter = useCallback((e: React.MouseEvent, marker: MapMarker) => {
    const rect = (e.currentTarget as SVGElement).closest('.world-map-container')?.getBoundingClientRect()
    if (!rect) return
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, marker })
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!tooltip) return
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setTooltip(prev => prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : null)
  }, [tooltip])

  const dotR = Math.max(3, 5 / Math.sqrt(zoom))
  const pulseMax = dotR + 8

  return (
    <div className="world-map-section">
      {(heading || subheading) && (
        <div className="world-map-head">
          {heading && <h2>{heading}</h2>}
          {subheading && <p>{subheading}</p>}
        </div>
      )}

      <div
        className="world-map-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(null)}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: BASE_SCALE * zoom, center: [10, 20] }}
          style={{ width: '100%', height: 'auto' }}
        >
          <Geographies geography={GEO_URL}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#16213E"
                  stroke="#1E2D5A"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#1E2D5A', outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map((marker, i) => (
            <Marker key={i} coordinates={[marker.lng, marker.lat]}>
              <circle r={pulseMax} fill="#C8303A" opacity={0.15}>
                <animate
                  attributeName="r"
                  values={`${dotR};${pulseMax};${dotR}`}
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin={`${(i * 0.4) % 2}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.25;0;0.25"
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin={`${(i * 0.4) % 2}s`}
                />
              </circle>
              <circle
                r={dotR}
                fill="#C8303A"
                stroke="#fff"
                strokeWidth={1}
                style={{ cursor: 'pointer' }}
                onMouseEnter={e => handleMouseEnter(e, marker)}
                onMouseLeave={() => setTooltip(null)}
              />
            </Marker>
          ))}
        </ComposableMap>

        {/* Zoom controls */}
        <div className="map-controls">
          <button
            className="map-btn"
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in"
          >+</button>
          <button
            className="map-btn"
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out"
          >−</button>
        </div>

        {tooltip && (
          <div
            className="map-tooltip"
            style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}
          >
            <p className="map-tooltip-inst">{tooltip.marker.institution}</p>
            {(tooltip.marker.city || tooltip.marker.country) && (
              <p className="map-tooltip-loc">
                {[tooltip.marker.city, tooltip.marker.country].filter(Boolean).join(', ')}
              </p>
            )}
          </div>
        )}

        <div className="map-legend">
          <span className="map-legend-dot" />
          <span>{markers.length} contributing institution{markers.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  )
}
