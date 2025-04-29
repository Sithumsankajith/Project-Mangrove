"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Set up a constant to avoid duplicate icons
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapComponentProps {
  center: [number, number]; // [longitude, latitude]
  onMarkerChange: (position: [number, number], address: string) => void;
}

// Custom marker component that handles map clicks
const LocationMarker: React.FC<{ 
  position: [number, number], 
  onPositionChange: (position: [number, number], address: string) => void 
}> = ({ position, onPositionChange }) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>(position);

  // Reverse geocoding function to get address from coordinates
  const getAddressFromCoordinates = async (lat: number, lng: number): Promise<string> => {
    try {
      // Using Nominatim for reverse geocoding (OpenStreetMap)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
      );
      const data = await response.json();
      
      if (data && data.display_name) {
        return data.display_name;
      }
      return "Unknown location";
    } catch (error) {
      console.error("Error fetching address:", error);
      return "Error fetching address";
    }
  };

  // Map event handler
  const map = useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      const newPosition: [number, number] = [lng, lat]; // Convert to [longitude, latitude] for GeoJSON
      setMarkerPosition(newPosition);
      
      // Get address and inform parent component
      const address = await getAddressFromCoordinates(lat, lng);
      onPositionChange(newPosition, address);
    },
  });

  return markerPosition ? (
    <Marker 
      position={[markerPosition[1], markerPosition[0]]} // Convert back to [latitude, longitude] for Leaflet
      icon={DefaultIcon}
    />
  ) : null;
};

const MapComponent: React.FC<MapComponentProps> = ({ center, onMarkerChange }) => {
  // Fix for the default icon issue in Leaflet
  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      // Fix Leaflet icon issues
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      });
    }
  }, []);
  
  // Convert from [longitude, latitude] to [latitude, longitude] for Leaflet
  const leafletCenter: [number, number] = [center[1], center[0]];

  return (
    <MapContainer 
      center={leafletCenter} 
      zoom={7} 
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker 
        position={center} 
        onPositionChange={onMarkerChange} 
      />
    </MapContainer>
  );
};

export default MapComponent;
