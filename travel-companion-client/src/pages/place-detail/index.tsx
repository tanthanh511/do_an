import styles from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Map from "../../components/map";
import { fetchAllWard } from "../../services/ward_service";
import address_place from "../../assets/address_place.svg";
import { postsData } from "../blog/posts.constant";
import { fetchAllPlace } from "../../services/place_service";
import img1 from "../../assets/avata/z4523679302084_a101c54a3a1b93d586b6c05d09da7088.jpg";
import img2 from "../../assets/avata/z4523679296887_36b520e8e6d65b69e5a666f502c95859.jpg";
import img3 from "../../assets/avata/z4523679253463_3305aa1bc9a56a6550f225a85d31b649.jpg";
import img6 from "../../assets/avata/0db36a24b69d5a5deb71c2cd06ac12be.jpg";
import img4 from "../../assets/avata/3.jpg";
import img5 from "../../assets/avata/z4523679242733_b370129ac2a9b16595b899ba608eca2c.jpg";
//icon
import ward from "../../assets/PlaceInfo/gps.svg";
import address from "../../assets/PlaceInfo/route-square.svg";
import timeClose from "../../assets/PlaceInfo/timer-pause.svg";
import timeOpen from "../../assets/PlaceInfo/timer-start.svg";
import { t } from "i18next";

type PlaceType = {
  id: string;
  name: string;
  address: string;
  openTime: string;
  closeTime: string;
  price: number;
  categoryId: string;
  wardId: string;
};



export default function PlaceDetail() {
  //MAP
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const position: [number, number] = [11.95632, 108.44547];
  const center: [number, number] = [11.95632, 108.44547];

  //PLACE
  //const [post, setPost] = useState(postsData);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllPlace();
        setPlace(response);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // data img test
  const img = [
    { id: 1, imgTest: img1 },
    { id: 2, imgTest: img2 },
    { id: 3, imgTest: img3 },
    { id: 4, imgTest: img4 },
    { id: 5, imgTest: img5 },
    { id: 6, imgTest: img6 },
  ];

  // handle slider
  const [val, setVal] = useState(0);
  const [wordData, setWordData] = useState(img[0]);

  const handleClick = (index: any) => {
    setVal(index);
    const wordSlider = img[index];
    setWordData(wordSlider);
  };

  const handleNext = () => {
    let index = val < img.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = img[index];
    setWordData(wordSlider);
  };

  const handlePrev = () => {
    let index = val <= img.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = img[index];
    setWordData(wordSlider);
  };

  console.log(place);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {place
          .filter((i: PlaceType) => {
            return i.id === id;
          })
          .map((item: PlaceType) => {
            return (
              <div className={styles.info_place}>
                <div className={styles.content_place}>
                  <div className={styles.content_info}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</p>
                    <div className={styles.icon_placeInfo}>
                      <img src={ward} alt="" /> <span>{item.address}</span>
                    </div>
                    <div className={styles.icon_placeInfo}>
                      <img src={address} alt="" />
                      <span>{item.wardId}</span>
                    </div>
                    <div className={styles.icon_placeInfo}>
                      <img src={timeOpen} alt="" />
                      <span>{item.openTime}</span>
                    </div>
                    <div className={styles.icon_placeInfo}>
                      <img src={timeClose} alt="" />
                      <span>{item.closeTime}</span>
                    </div>
                  </div>
                  <div className={styles.container_img}>
                    <div className={styles.slider}>
                      <div className={styles.list}>
                        {img.map((data, i) => {
                          return (
                            <>
                              <div className={styles.item}>
                                <img src={wordData.imgTest} alt="" />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className={styles.button}>
                      <button className={styles.prev} onClick={handlePrev}>
                        lui
                      </button>
                      <button className={styles.next} onClick={handleNext}>
                        toi
                      </button>
                    </div>

                    <ul className={styles.dots}>
                      {img.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={val === index ? styles.active : ""}
                            onClick={() => handleClick(index)}
                          ></li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        {/* map */}

        <div className={styles.container_map_place}>
          <h1 className={styles.header}>MAP</h1>
          <div className={styles.main}>
            <div className={styles.box_map}>
              <Map position={position} center={center} />
            </div>
          </div>
        </div>

        {/* <div className={styles.last_new}>
          <h1 className={styles.title_latestnew}>Latest -New</h1>
          <div className={styles.card_content}>
            <div className={styles.card_info}>
              {postsData
                .filter((item: PostType) => {
                  return item.id < 4;
                })
                .map((posts: PostType) => (
                  <div className={styles.card_item}>
                    <div className={styles.card_item_info}>
                      <div className={styles.card_item_img}>
                        {" "}
                        <img src={dl} alt="" />
                      </div>
                      <Link
                        to={`/blog-detail?id=${posts.id}`}
                        key={posts.id}
                        className={styles.card_item_link}
                      >
                        <div
                          key={posts.id}
                          className={styles.card_item_content}
                        >
                          <h1>{posts.title}</h1>
                          <p>{posts.description}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
