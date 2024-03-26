import { useState } from "react";
import styles from "./styles.module.scss";
// import { AddressType } from "../../pages/home";

// export interface DataType{
//   data:AddressType[];
// }

export default function Search() {
  // const{data}= props;
  // const [searchText, setSearchTest] = useState('');
  // const regex = new RegExp(searchText, "i");
  // const filter = data.filter((post)
  //   regex.test(`${data.title}`)
  // );
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
