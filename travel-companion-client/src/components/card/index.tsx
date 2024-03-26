import styles from "./styles.module.scss";
import dl from "../../assets/test/dl.svg"
import { AddressType } from '../../pages/home/index';

export interface ICardItem {
   data: AddressType[];
};
export default function Card(props: ICardItem) {
    const {data } = props
    
  return (
    <div className={styles.card_info}>
      {data.map((post) => (
        <div className={styles.card_item}>
          <div className={styles.card_item_info}>
            <div className={styles.card_item_img}>
              {" "}
              <img src={dl} alt="" />
            </div>
            <div key={post.id} className={styles.card_item_content}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
