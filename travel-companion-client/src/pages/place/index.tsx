import styles from './styles.module.scss';
import Search from '../../components/search';
import img1 from '../../assets/test/Rectangle 451.svg'

export default function Place() {
  return (
    <div className={styles.main}>
      <div className= {styles.container}>
        <div className={styles.search_place}>
          <Search/>
        </div>
        <div className= {styles.info_place}>
          <h2 className={styles.title}>
            Da Lat
          </h2>
          <div className={styles.content_place}>
            <div className={styles.content_info}>
                <p> &emsp; Đà Lạt thuộc tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên của Việt Nam. Nơi đây từng là nơi sinh sống của nhiều dân tộc và trở thành thành phố phát triển khi thực dân Pháp đến. Đà Lạt, với độ cao 1.500 mét so với mực nước biển, có khí hậu ôn hòa, thuận lợi cho việc trồng trọt. Điều này tạo nên vùng đất phong phú với cây cỏ, hoa lá đa dạng.</p>
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

        {/* map */}
        <div className="map_container">
          
        </div>

      {/* latest new */}
      <div className="latest_new_container">
        <div className="latest_new_card">
          
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
