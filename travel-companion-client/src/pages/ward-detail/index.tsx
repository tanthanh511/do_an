import styles from "./styles.module.scss";
import img1 from "../../assets/test/Rectangle 451.svg";
import { Link, useLocation } from "react-router-dom";
import { addressData } from "../home/address.constant";
import { useEffect, useState } from "react";
import Map from "../../components/map";
import { fetchAllWard } from "../../services/ward_service";
import address_place from "../../assets/address_place.svg";
import { postsData } from "../blog/posts.constant";
import dl from "../../assets/test/dl.svg";
import { fetchAllCategory } from "../../services/category_service";
import { fetchAllPlace } from "../../services/place_service";

export interface WardType {
  id: string;
  title: string;
  description: string;
  content: string;
}

export interface PostType {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface CategoryType {
  id: string;
  name: string;
}

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

export default function WardDetail() {
  const [post, setPost] = useState(postsData);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const position: [number, number] = [11.95632, 108.44547];
  const center: [number, number] = [11.95632, 108.44547];

  const [ward, setWard] = useState([]);
  const [category, setCategory] = useState([]);
  const [place, setPlace] = useState([]);

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

    const fetchDataCategory = async () => {
      try {
        const response = await fetchAllCategory();
        setCategory(response);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchDataCategory();

    const fetchDataPlace = async () => {
      try {
        const response = await fetchAllPlace();
        setPlace(response);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchDataPlace();
  }, []);

  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleCategoryChange = (e: any) => {
    setSelectedCategoryId(e.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {ward
          .filter((i: WardType) => {
            return i.id === id;
          })
          .map((item: WardType) => {
            return (
              <div className={styles.info_place}>
                {/* <h2 className={styles.title}>{item.title}</h2> */}
                <h2 className={styles.title}>Phường 8</h2>
                <div className={styles.content_place}>
                  <div className={styles.content_info}>
                    {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;{item.content}</p> */}
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Phường 8, thành phố Đà Lạt, là một trong những khu vực trung tâm của thành phố này. Đà Lạt nổi tiếng với khí hậu mát mẻ quanh năm và cảnh quan thiên nhiên tuyệt vời. Phường 8 nằm ở trung tâm Đà Lạt, gần các điểm du lịch nổi tiếng như Hồ Xuân Hương, Thung Lũng Tình Yêu, Thác Datanla và Bảo tàng Lâm Đồng. Phường này thường xuyên thu hút khách du lịch với những quán cà phê lãng mạn, nhà hàng địa phương phục vụ các món ăn ngon và đặc sản vùng miền. Ngoài ra, Phường 8 cũng có các cơ sở dịch vụ tiện ích như khách sạn, nhà nghỉ, cửa hàng mua sắm và chợ địa phương. Với vị trí thuận lợi và không gian đẹp, Phường 8 là điểm đến lý tưởng cho du khách muốn khám phá vẻ đẹp của Đà Lạt và thưởng thức cuộc sống độc đáo của người dân địa phương.</p>
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

        <div className={styles.container_map_place}>
          <h1 className={styles.header}>MAP</h1>
          <div className={styles.main}>
            <div className={styles.box_place}>
              <select
                name=""
                id=""
                onChange={handleCategoryChange}
                className={styles.cb_category}
              >
                <option key={-1} value="">
                  All Place
                </option>
                {category.map((item: CategoryType) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>

              <p className={styles.title}>Famous Place</p>
              <ul>
                {place
                  .filter((item: PlaceType) => {
                    return item.categoryId === selectedCategoryId;
                  })
                  .map((item: PlaceType) => {
                    return (
                      <>
                        <li>
                          <div className={styles.img_cart}>
                            <img src={address_place} alt="" />
                          </div>
                          <Link
                            to={`/place-detail?id=${item.id}`}
                            key={item.id}
                            className={styles.card_item_link}
                          >
                            <div className={styles.content_cart}>
                              <h1>{item.name}</h1>
                              <p>
                                {" "}
                                {item.openTime} - {item.closeTime}
                              </p>
                              <p>{item.address}</p>
                            </div>
                          </Link>
                        </li>
                      </>
                    );
                  })}

                {/* <li>
                  <div className={styles.img_cart}>
                    <img src={address_place} alt="" />
                  </div>
                  <div className={styles.content_cart}>
                    <h1>Milk tea</h1>
                    <p> 6:10am - 21:30pm</p>
                    <p>95 li nam de</p>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className={styles.box_map}>
              <Map position={position} center={center} />
            </div>
          </div>
        </div>

        <div className={styles.last_new}>
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
        </div>
      </div>
    </div>
  );
}
