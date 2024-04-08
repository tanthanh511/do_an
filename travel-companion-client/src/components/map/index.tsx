import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./styles.module.scss";
import popup from "../../assets/map/location.png"

import "leaflet/dist/leaflet.css";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

import HandleLocation from "../handleLocation";

export default function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "50%", height: "600px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[11.95632, 108.44547]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <HandleLocation />
    </MapContainer>

  );
}
