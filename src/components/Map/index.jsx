import React, { useEffect, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const mapRef = useRef(null)

  const position = useMemo(() => [-21.5993795, -48.3892107], [])

  useEffect(() => {
    if (mapRef.current) {
      const { current: map } = mapRef
      map.flyTo(position, 13, { duration: 2 })
    }
  }, [position])

  return (
    <MapContainer
      center={position}
      zoom={45}
      scrollWheelZoom={false}
      style={{ height: '298px', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Um marcador qualquer</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
