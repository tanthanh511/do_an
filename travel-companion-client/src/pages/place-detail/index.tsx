import styles from "./styles.module.scss";
import img1 from "../../assets/test/Rectangle 451.svg";
import { Link, useLocation } from "react-router-dom";
import { addressData } from "../home/address.constant";
import { useEffect, useState } from "react";
import Map from "../../components/map";
import { fetchAllWard } from "../../services/ward_service";

export interface WardType {
  id: string;
  title: string;
  description: string;
  content: string;
}

export default function PlaceDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const position: [number, number] = [11.95632, 108.44547];
  const center: [number, number] = [11.95632, 108.44547];

  const [ward, setWard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllWard();
        setWard(response);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(ward);
  
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {ward
          .filter((i:WardType) => {
            return i.id === id;
          })
          .map((item: WardType) => {
            return (
              <div className={styles.info_place}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.content_place}>
                  <div className={styles.content_info}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{item.content}</p>
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

        <div className={styles.map}>
          <Map position={position} center={center} />
        </div>

        <div className={styles.latest_new}></div>
      </div>
    </div>
  );
}
