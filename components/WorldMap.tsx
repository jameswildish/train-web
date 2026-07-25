'use client'

import { useState, useCallback } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

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
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent, marker: MapMarker) => {
      const rect = (e.currentTarget as SVGElement).closest('.world-map-container')?.getBoundingClientRect()
      if (!rect) return
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        marker,
      })
    },
    []
  )

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!tooltip) return
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setTooltip(prev => prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : null)
  }, [tooltip])

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
          projectionConfig={{ scale: 130, center: [10, 20] }}
          style={{ width: '100%', height: 'auto' }}
        >
          <ZoomableGroup zoom={1} minZoom={1} maxZoom={6} disablePanning={false}>
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
                {/* Outer pulse ring */}
                <circle r={10} fill="#C8303A" opacity={0.2}>
                  <animate
                    attributeName="r"
                    values="6;14;6"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin={`${(i * 0.4) % 2}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0;0.3"
                    dur="2.5s"
                    repeatCount="indefinite"
                    begin={`${(i * 0.4) % 2}s`}
                  />
                </circle>
                {/* Core dot */}
                <circle
                  r={5}
                  fill="#C8303A"
                  stroke="#fff"
                  strokeWidth={1.2}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={e => handleMouseEnter(e, marker)}
                  onMouseLeave={() => setTooltip(null)}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {tooltip && (
          <div
            className="map-tooltip"
            style={{
              left: tooltip.x + 14,
              top: tooltip.y - 10,
            }}
          >
            <p className="map-tooltip-inst">{tooltip.marker.institution}</p>
            <p className="map-tooltip-loc">
              {[tooltip.marker.city, tooltip.marker.country].filter(Boolean).join(', ')}
            </p>
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
