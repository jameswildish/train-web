'use client'

import dynamic from 'next/dynamic'
import type { MapMarker } from './WorldMap'

const WorldMap = dynamic(() => import('./WorldMap'), { ssr: false })

interface Props {
  markers: MapMarker[]
  heading?: string
  subheading?: string
}

export default function WorldMapDynamic(props: Props) {
  return <WorldMap {...props} />
}
