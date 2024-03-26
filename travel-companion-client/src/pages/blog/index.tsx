import { useEffect, useState } from "react";
import Search from "../../components/search";
import styles from "./styles.module.scss";
import Card from "../../components/card";

export interface AddressType {
  id: number;
  title: string;
  body: string;
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("");
  const [selectValue, setSelectValue] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((optionPosts) => {
        setSelectValue(optionPosts);
        setPosts(optionPosts);
      });
  }, []);

  // useEffect(() => {
  //   setPosts(
  //     selectValue.filter((post: AddressType) => post.title.includes(selected))
  //   );
  // }, [selected]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box_filter}>
          <div className={styles.filter_category}>
            <select
              value={selected}
              // onChange={(e) => {setSelected(e.target.value)}}
              onChange={(e) => {
                setSelected(e.target.value)
                setPosts(
                  selectValue.filter((post: AddressType) => post.title.includes(e.target.value))
                );
              }}

            >
              <option key={-1} value="">
                Reset filters
              </option>
              {selectValue.map((post: AddressType) => (
                <option key={post.id} value={post.title}>
                  {post.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filter_date}>
            <select value="chon">
              <option value="">date time</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className={styles.search_blog}>
            <Search/>
          </div>
        </div>

        <div className={styles.card_content}>
          <Card data={posts} />
        </div>
      </div>
    </div>
  );
}
