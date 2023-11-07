import React, { useEffect, useState } from 'react';
import './maps.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import { Icon } from 'leaflet';
// import teknisiMarker from '../../assets/images/marker/teknisi.png';
// import kortekMarker from '../../assets/images/marker/kortek.png';

import MarkerClusterGroup from 'react-leaflet-cluster';
export default function MapsComponent() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
  //Data teknisi
  const teknisiMarkers = [
    {
      geocode: [-8.00769, 110.317741],
      title: 'Teknisi Parangtritis'
    },
    {
      geocode: [-8.0124334, 110.282975],
      title: 'Teknisi Pantai Depok'
    },
    {
      geocode: [-8.0081291, 110.2802377],
      title: 'Teknisi Pantai Baros'
    },
    {
      geocode: [-8.0160368, 110.2982699],
      title: 'Teknisi Pantai Pelangi'
    }
  ];
  //   const customIcon = new Icon({
  //     iconUrl: teknisiMarker,
  //     iconSize: [40, 40]
  //   });

  return (
    <MapContainer center={[-2.6659689148679773, 110.7696535]} zoom={5} style={{ borderRadius: 12 }}>
      <TileLayer
        attribution="Genksi Maps | &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentLocation && (
        <Marker position={currentLocation}>
          <Popup>Your current location</Popup>
        </Marker>
      )}
      <MarkerClusterGroup>
        {teknisiMarkers.map((marker, index) => (
          <Marker position={marker.geocode} key={index}>
            <Popup>
              <div className="w-full  bg-white border border-gray-200 rounded-lg shadow  ">hshsh</div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
