import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


const Maps = () => {
  const defaultPosition = [-8.197728, 115.251766];

  return (
    <div>
      <MapContainer 
        center={defaultPosition} 
        zoom={13} 
        className='w-full h-[70vh]'
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={defaultPosition}>
          <Popup>
            Koordinat Default: <br /> {defaultPosition[0]}, {defaultPosition[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
