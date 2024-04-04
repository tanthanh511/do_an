import styles from "./styles.module.scss";
import img1 from "../../assets/test/Rectangle 451.svg";
import { Link, useLocation } from "react-router-dom";
import { addressData } from "../home/address.constant";
import { useState } from "react";

export interface PlaceType {
  id: number;
  title: string;
  description: string;
  contact: string;
}

export default function PlaceDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [place, setPlace] = useState(addressData);
  console.log(id);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {place
          .filter((item) => {
            return item.id.toString() === id;
          })
          .map((item: PlaceType) => {
            return (
              <div className={styles.info_place}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.content_place}>
                  <div className={styles.content_info}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{item.contact}</p>
                  </div>
                  <>
                    <div className={styles.content_img}>
                      <div className={styles.item1}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item2}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item3}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item4}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item5}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item6}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item7}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item8}>
                        <img src={img1} alt="" />
                      </div>
                      <div className={styles.item9}>
                        <img src={img1} alt="" />
                      </div>
                    </div>
                  </>
                </div>
              </div>
            );
          })}
        {/* map */}

        <div className={styles.map}></div>

        <div className={styles.latest_new}></div>
      </div>
    </div>
  );
}
