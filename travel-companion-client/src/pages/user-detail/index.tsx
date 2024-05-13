import styles from "./styles.module.scss";
import avata from "../../assets/avata/0db36a24b69d5a5deb71c2cd06ac12be.jpg";
import iconUser from "../../assets/user/ghost.svg";
import iconLogout from "../../assets/user/logout.svg";
import Map from "../../components/map";
import { UserContext } from "../../context/user-context";
import { useContext, useState } from "react";

type Props = {};
export function UserDetail(props: Props) {
  const { logout, user } = useContext(UserContext)!;  
  
  return (
    <main className={styles.main}>
      {/* sidebar */}
      <aside className={styles.aside}>
        <div>
          <img src={avata} alt="" className={styles.avata} />
        </div>
        <nav className={styles.nav}>
          <nav className={styles.nav_item}>
            <div className={styles.icon_user}>
              <img src={iconUser} alt="" />
            </div>
            <p>Profile</p>
          </nav>
          <nav className={styles.nav_item}>
            <div className={styles.icon_user}>
              <img src={iconLogout} alt="" />
            </div>
            <p>Logout</p>
          </nav>
        </nav>
      </aside>

      {/* content */}
      <article className={styles.article}>
        {
          
        }
        <div className={styles.box_content}>
          <div className={styles.content_item}>
            <span className={styles.name_item}>{user.username}</span>
          </div>
          <div className={styles.content_item}>
            <span className={styles.password_item}>Password</span> :{" "}
            <span>{user.password}</span>
          </div>
          <div className={styles.content_item}>
            <span className={styles.address_item}>Address</span> :{" "}
            <span>95 Lý Nam Đế Phường 8 Đà Lạt Lâm Đồng</span>
          </div>
          <div className={styles.content_item}>
            <span className={styles.phone_item}>Phone</span> :{" "}
            <span>+84 111 222 333</span>
          </div>
          <div id="mapSection" className={styles.box_map}>
            <div className={styles.map}>
              <Map />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
