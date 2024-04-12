import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useState } from 'react';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397, // Puedes cambiar estas coordenadas a un valor inicial por defecto más relevante
  lng: 150.644
};

interface MapProps {
  onLocationSelect: (address: string) => void;
}

const MapComponent: React.FC<MapProps> = ({ onLocationSelect }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY as string
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      // Aquí implementarías un servicio de geocodificación para obtener la dirección completa
      onLocationSelect(`Latitud: ${lat}, Longitud: ${lng}`);
    }
  }, [onLocationSelect]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onMapClick}
    >
      {/* Aquí podrías añadir marcadores o círculos si es necesario */}
    </GoogleMap>
  ) : <></>;
};

export default MapComponent;
