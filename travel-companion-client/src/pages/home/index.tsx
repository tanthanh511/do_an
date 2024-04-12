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
import Map from "../../components/map";
import handbook from "../../assets/icon_network_social/handbook.png"

export interface AddressType {
  id: number;
  title: string;
  description: string;
  contact: string;
}

export default function Home() {
  const [Place, setPlace] = useState(addressData);
  const [search, setSearch] = useState("");

  // useEffect(()=>{
  //   const getPlace = addressData.map((place : LocationType)=>place)
  //   setPlace(getPlace);

  // },[addressData])

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then(posts =>{setPosts(posts)})
  //   const filter = posts.filter((post: AddressType)=> post.id <9)
  //   setFilterPosts(filter)
  // },[posts]);

  const handleSearch = () => {
    const filter = addressData.filter((item) => {
      return search === ""
        ? addressData
        : item.title.toLowerCase().includes(search.toLowerCase());
    });
    setPlace(filter);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.banner_component}>
          <div className={styles.banner_box}>
            <div className={styles.banner}>
              <img src={banner} alt="" />
              <div className={styles.content_banner}>
                <div className={styles.title_banner}>
                  <label htmlFor="">Travel to Explore</label>
                </div>

                <div className={styles.text_content_banner}>
                  <label htmlFor="">
                    Still round the corner, there may wait, <br /> a new road or
                    a secret gate !
                  </label>
                </div>

                <div className={styles.search_banner}>
                  <input
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
                  </button>
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
            <h3>Best Near You</h3>
            <p>Find the best places to visit near you</p>
          </div>
          <Link to={`/weather`}>
            <div className={styles.card_item}>
              <div>
                <img src={weather} alt="" />
              </div>
              <h3>Weather Forecast</h3>
              <p>Get the latest weather information</p>
            </div>
          </Link>
          <Link to={`/blog`}>
            <div className={styles.card_item}>
              <div>
                <img src={newPaper} alt="" />
              </div>
              <h3>News</h3>
              <p>Get the latest news and information</p>
            </div>
          </Link>

          <div className={styles.card_item}>
            <div>
              <img className={styles.handbook} src={handbook} alt="" />
            </div>
            <h3>Tourist Handbook</h3>
            <p>Necessary skills and essential tools when traveling to Da Lat</p>
          </div>
        </div>

        <span className={styles.line_text}>Recommended Destinations</span>

        <div className={styles.card_info}>
          {Place.map((post: AddressType) => (
            <div className={styles.card_item}>
              <div className={styles.card_item_info}>
                <div className={styles.card_item_img}>
                  <img src={dl} alt="" />
                </div>
                <Link
                  to={`/place-detail?id=${post.id}`}
                  key={post.id}
                  className={styles.card_item_link}
                >
                  <div key={post.id} className={styles.card_item_content}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <span className={styles.line_text}>MAP</span>
        <div id="mapSection" className={styles.box_map}>
          <div className={styles.map}>
            <Map />
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
}
