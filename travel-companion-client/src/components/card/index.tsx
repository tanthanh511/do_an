import styles from "./styles.module.scss";
import dl from "../../assets/test/dl.svg";
import { Link } from "react-router-dom";

// export interface ICardItem {
//    //data: AddressType[];
//    data : LocationType[] ;
// };
export default function Card() {
  //const {data } = props

  return (
    <div className={styles.card_info}>
      {/* {data.map((post) => (
        <Link to={`/blog-detail/${post.id}`} key={post.id} className={styles.card_item_link}>
        <div className={styles.card_item}>
          <div className={styles.card_item_info}>
            <div className={styles.card_item_img}>
              {" "}
              <img src={dl} alt="" />
            </div>
            <div key={post.id} className={styles.card_item_content}>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </div>
          </div>
        </div>
        </Link>
      ))} */}
    </div>
  );
}
