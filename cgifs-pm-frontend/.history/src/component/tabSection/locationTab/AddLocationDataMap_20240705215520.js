import React, { useState, useCallback } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { environment } from "../../../enviroments/EnvDev";

mapboxgl.accessToken = environment.mapbox.accessToken;

export default function AddMapComponent({
  onLocationSelect,
  initialLat,
  initialLng,
}) {
  const [viewState, setViewState] = useState({
    longitude: initialLng || 80.6337,
    latitude: initialLat || 7.8731,
    zoom: 5,
  });
  const [marker, setMarker] = useState(
    initialLat && initialLng ? { lng: initialLng, lat: initialLat } : null
  );

  const handleClick = useCallback(
    (event) => {
      const { lngLat } = event;
      setMarker(lngLat);
      onLocationSelect(lngLat.lat, lngLat.lng);
    },
    [onLocationSelect]
  );

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: 350 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapboxgl.accessToken}
      onClick={handleClick}
    > <NavigationControl />
      {marker && (
        <Marker longitude={marker.lng} latitude={marker.lat} color="red" />
      )}
    </Map>
  );
}
