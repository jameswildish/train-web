'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'
const MIN_ZOOM = 1
const MAX_ZOOM = 8

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
  const [center, setCenter] = useState<[number, number]>([10, 20])
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Block scroll events in capture phase so they never reach d3-zoom
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const block = (e: WheelEvent) => e.stopPropagation()
    el.addEventListener('wheel', block, { capture: true, passive: false })
    return () => el.removeEventListener('wheel', block, { capture: true })
  }, [])

  const zoomIn = () => setZoom(z => Math.min(parseFloat((z * 1.6).toFixed(3)), MAX_ZOOM))
  const zoomOut = () => setZoom(z => {
    const next = Math.max(parseFloat((z / 1.6).toFixed(3)), MIN_ZOOM)
    if (next <= MIN_ZOOM) setCenter([10, 20])
    return next
  })

  const handleMoveEnd = useCallback(
    ({ coordinates, zoom: z }: { coordinates: [number, number]; zoom: number }) => {
      setCenter(coordinates)
      setZoom(z)
    },
    []
  )

  const handleMouseEnter = useCallback((e: React.MouseEvent, marker: MapMarker) => {
    if (isDragging) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, marker })
  }, [isDragging])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!tooltip || isDragging) return
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setTooltip(prev => prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : null)
  }, [tooltip, isDragging])

  const dotR = Math.max(3, 5 / Math.sqrt(zoom))
  const pulseR = dotR + 7

  return (
    <div className="world-map-section">
      {(heading || subheading) && (
        <div className="world-map-head">
          {heading && <h2>{heading}</h2>}
          {subheading && <p>{subheading}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        className="world-map-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { setTooltip(null); setIsDragging(false) }}
      >
        <ComposableMap
          width={800}
          height={360}
          projection="geoMercator"
          projectionConfig={{ scale: 130, center: [10, 20] }}
          style={{ width: '100%', height: 'auto', cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <ZoomableGroup
            zoom={zoom}
            center={center}
            minZoom={MIN_ZOOM}
            maxZoom={MAX_ZOOM}
            onMoveStart={() => { setIsDragging(true); setTooltip(null) }}
            onMoveEnd={handleMoveEnd}
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
                      hover: { fill: '#1a2850', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {markers.map((marker, i) => (
              <Marker key={i} coordinates={[marker.lng, marker.lat]}>
                <circle r={pulseR} fill="#C8303A" opacity={0.15}>
                  <animate attributeName="r" values={`${dotR};${pulseR};${dotR}`} dur="2.5s" repeatCount="indefinite" begin={`${(i * 0.4) % 2}s`} />
                  <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" begin={`${(i * 0.4) % 2}s`} />
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
          </ZoomableGroup>
        </ComposableMap>

        <div className="map-controls">
          <button className="map-btn" onClick={zoomIn} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">+</button>
          <button className="map-btn" onClick={zoomOut} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out">−</button>
        </div>

        {tooltip && !isDragging && (
          <div className="map-tooltip" style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}>
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
