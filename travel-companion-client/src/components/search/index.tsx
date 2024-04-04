import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
// import { AddressType } from "../../pages/home";
 
export interface DataType{
  title: string;
}

export interface SearchProps{
  data: DataType[];
}

export default function Search({data}:SearchProps) {
  
  
  const [searchText, setSearchTest] = useState('');
  const [searchResults, setSearchResults]= useState(data)

  // useEffect(()=>{
  //   const listData = data;
  //   setSearchTest(listData)
  //   searchResults(listData);
  // },[])

  const handleSearch= ()=>{
    const filterData = data.filter((item)=>{
      return item.title.toLowerCase().includes(searchText.toLowerCase());
    })    
    setSearchResults(filterData)
  }
console.log(searchResults);


  return (
    <div className= {styles.main}>
      <div className={styles.search_header}>
        <input
          className={styles.ip_search}
          type="text"
          placeholder="Search your destination"
          value={searchText}
          onChange={(e)=>setSearchTest(e.target.value)}
        />
        <button className={styles.btn_search} >Search</button>
      </div>
    </div>
  );
}
