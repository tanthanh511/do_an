import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import banner from "../../assets/banner.svg";
import location from "../../assets/icon_network_social/location 1.svg";
import weather from "../../assets/icon_network_social/weather 1.svg";
import newPaper from "../../assets/icon_network_social/newspaper 1.svg";
import dinner from "../../assets/icon_network_social/dinner 1.svg";
import Subscribe from "../../components/subscribe";
import { addressData } from "./address.constant";
import { Link } from "react-router-dom";
import dl from "../../assets/test/dl.svg";
import handbook from "../../assets/icon_network_social/handbook.png";
import { fetchAllWard } from "../../services/ward_service";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// import HandleLocation from "../handleLocation";
import L from "leaflet";
import HandleLocation from "../../components/handleLocation";
import { useTranslation } from "react-i18next";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export interface WardType {
  id: string;
  name: string;
  description: string;
  content: string;
}
type LocationType = {
  latitude: number;
  longitude: number;
};

export default function Home() {
  // const [Place, setPlace] = useState(addressData);
  // const [search, setSearch] = useState("");
  const { t } = useTranslation();


  const [ward, setWard] = useState([]);

  const [UserLocation, setUserLocation] = useState<LocationType>({
    
    latitude: 11.95632,
    longitude: 108.44547,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllWard();
        setWard(response);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ latitude, longitude });
    });

    fetchData();
  }, []);

  // const handleSearch = () => {
  //   const filter = addressData.filter((item) => {
  //     return search === ""
  //       ? addressData
  //       : item.title.toLowerCase().includes(search.toLowerCase());
  //   });
  //   setPlace(filter);
  // };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.banner_component}>
          <div className={styles.banner_box}>
            <div className={styles.banner}>
              <img src={banner} alt="" />
              <div className={styles.content_banner}>
                <div className={styles.title_banner}>
                  <label htmlFor="">{t("travelToExplore")}</label>
                </div>

                <div className={styles.text_content_banner}>
                  <label htmlFor="">
                    {t("stillRound")} <br /> {t("aNew")}
                  </label>
                </div>

                <div className={styles.search_banner}>
                  {/* <input
                    type="text"
                    className={styles.ip_search}
                    placeholder="Search your destination"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value.trim());
                      setPlace(
                        search === ""
                          ? addressData
                          : addressData.filter((item) => {
                              return item.title
                                .toLowerCase()
                                .includes(search.toLowerCase());
                            })
                      );
                    }}
                  />
                  <button className={styles.btn_search} onClick={handleSearch}>
                    Search
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div
            className={styles.card_item}
            onClick={() => {
              const mapSection = document.getElementById("mapSection");
              if (mapSection) {
                mapSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div>
              <img src={location} alt="" />
            </div>
            <h3>{t("yourPosition")}</h3>
            <p>{t("bestNearYou")}</p>
          </div>
          <Link to={`/weather`}>
            <div className={styles.card_item}>
              <div>
                <img src={weather} alt="" />
              </div>
              <h3>{t("weatherForecast")}</h3>
              <p>{t("weatherForecastInDL")}</p>
            </div>
          </Link>
          <Link to={`/blog`}>
            <div className={styles.card_item}>
              <div>
                <img src={newPaper} alt="" />
              </div>
              <h3>{t("blog")}</h3>
              <p>{t("news")}</p>
            </div>
          </Link>

          <div className={styles.card_item}>
            <div>
              <img className={styles.handbook} src={handbook} alt="" />
            </div>
            <h3>{t("touristHandbook")}</h3>
            <p>{t("necessary")}</p>
          </div>
        </div>

        <span className={styles.line_text}>{t("ward")}</span>

        <div className={styles.card_info}>
          {ward.map((wards: WardType) => (
            <div className={styles.card_item}>
              <div className={styles.card_item_info}>
                <div className={styles.card_item_img}>
                  <img src={dl} alt="" />
                </div>
                <Link
                  to={`/ward-detail?id=${wards.id}`}
                  key={wards.id}
                  className={styles.card_item_link}
                >
                  <div key={wards.id} className={styles.card_item_content}>
                    <h1>{wards.name}</h1>
                    <p>{wards.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <span className={styles.line_text}>{t("map")}</span>
        <div id="mapSection" className={styles.box_map}>
          <div className={styles.map}>
            <MapContainer
              center={[UserLocation.latitude, UserLocation.longitude]}
              zoom={12}
              style={{ width: "70%", height: "400px", borderRadius: "20px" }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[UserLocation.latitude, UserLocation.longitude]}
              >
                <Popup>
                  {UserLocation.latitude}, {UserLocation.longitude}
                </Popup>
              </Marker>
              <HandleLocation />
            </MapContainer>
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
}
