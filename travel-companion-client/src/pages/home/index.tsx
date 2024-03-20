import * as React from "react";
import styles from "./styles.module.scss";
import banner from "../../assets/banner.svg";
import location from "../../assets/icon_network_social/location 1.svg";
import weather from "../../assets/icon_network_social/weather 1.svg";
import newPaper from "../../assets/icon_network_social/newspaper 1.svg";
import dinner from "../../assets/icon_network_social/dinner 1.svg";
import Subscribe from "../../components/subscribe";
//import {addressData} from "./address.constant"

// type addressType = {
//   name:string;
//   decription:string;

// };
export default function Home() {
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
                  />
                  <button className={styles.btn_search}>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_item}>
            <div>
              <img src={location} alt="" />
            </div>
            <h3>Best Near You</h3>
            <p>Find the best places to visit near you</p>
          </div>

          <div className={styles.card_item}>
            <div>
              <img src={weather} alt="" />
            </div>
            <h3>Weather Forecast</h3>
            <p>Get the latest weather information</p>
          </div>

          <div className={styles.card_item}>
            <div>
              <img src={newPaper} alt="" />
            </div>
            <h3>Latest News</h3>
            <p>Get the latest news and information</p>
          </div>

          <div className={styles.card_item}>
            <div>
              <img src={dinner} alt="" />
            </div>
            <h3>Perfect Restaurants</h3>
            <p>Enjoy the best delicacies in your city</p>
          </div>
        </div>

        <div className={styles.horizontal_line_container}>
          <hr className={styles.horizontal_line} />
          <span className={styles.line_text}>Recommended Destinations</span>
          <hr className={styles.horizontal_line} />
        </div>
        <div className={styles.card_info}>
          <div className={styles.cart_item_info}>
            {/* let filters = addressData.map((a:addressType)=>{

            <img src="" alt="" />
            <h2></h2>
            <span></span>
          }) */}
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
}
