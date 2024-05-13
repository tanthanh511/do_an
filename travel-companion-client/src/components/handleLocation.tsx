import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { LatLng } from "leaflet";
import { useState } from "react";
import lt from "../assets/map/location.png";

type Props = {};
export default function HandleLocation() {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },

    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  console.log(position);
  

  return position === null ? null : (
    <Marker position={position}>
      <Popup>{position.lat}, {position.lng}</Popup>
    </Marker>
  );
}
