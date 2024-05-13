import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./styles.module.scss";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import HandleLocation from "../handleLocation";
import L from "leaflet";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface MapProps {
  position?: [number, number];
  center?: [number, number];
}
export default function Map({ position, center }: MapProps) {
  return (
    <MapContainer
      center={center || [11.95632, 108.44547]}
      zoom={15}
      style={{ width: "100%", height: "600px", borderRadius: "20px" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position||[11.95632, 108.44547]}>
        <Popup>
        11.95632, 108.44547
        </Popup>
      </Marker> */}
      <HandleLocation />
    </MapContainer>
  );
}
