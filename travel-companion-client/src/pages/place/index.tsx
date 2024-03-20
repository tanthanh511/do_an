import styles from './styles.module.scss';
import Search from '../../components/search';
import img1 from '../../assets/test/Rectangle 451.svg'

export default function Place() {
  return (
    <div className={styles.main}>
      <div className= {styles.container}>
        <Search/>

        <div className= {styles.info_place}>
          <h2 className={styles.title}>
            Da Lat
          </h2>
          <div className={styles.content_place}>
            <div className={styles.content_info}>

            </div>
            <div className={styles.content_img}>
              <div className={styles.item1}><img src={img1} alt="" /></div>
              <div className={styles.item2}><img src={img1} alt="" /></div>
              <div className={styles.item3}><img src={img1} alt="" /></div>
              <div className={styles.item4}><img src={img1} alt="" /></div>
              <div className={styles.item5}><img src={img1} alt="" /></div>
              <div className={styles.item6}><img src={img1} alt="" /></div>
              <div className={styles.item7}><img src={img1} alt="" /></div>
              <div className={styles.item8}><img src={img1} alt="" /></div>
              <div className={styles.item9}><img src={img1} alt="" /></div>

            </div>
          </div>
        </div>

        <div className={styles.map}>

        </div>

        <div className={styles.latest_new}>

        </div>

      </div>
    </div>
  );
}
