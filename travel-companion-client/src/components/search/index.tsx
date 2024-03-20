import styles from "./styles.module.scss";
export default function Search() {
  return (
    <div className= {styles.main}>
      <div className={styles.search_header}>
        <input
          className={styles.ip_search}
          type="text"
          placeholder="Search your destination"
        />
        <button className={styles.btn_search}>Search</button>
      </div>
    </div>
  );
}
