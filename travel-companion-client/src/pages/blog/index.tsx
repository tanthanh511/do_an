import { useEffect, useState } from "react";
import Search from "../../components/search";
import styles from "./styles.module.scss";
import Card from "../../components/card";
import { postsData } from "./posts.constant";

export interface PostsType {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function Blog() {
  const [posts, setPosts] = useState(postsData);
  const [selected, setSelected] = useState("");
  const [selectValue, setSelectValue] = useState(postsData);


  // get api
  //const [selectValue, setSelectValue] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((optionPosts) => {
  //       setSelectValue(optionPosts);
  //       setPosts(optionPosts);
  //     });
  // }, []);

  useEffect(() => {
    const posts = postsData;
    setSelectValue(posts);
    setPosts(posts);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box_filter}>
          <div className={styles.filter_category}>
            <select
              value={selected}
              // onChange={(e) => {setSelected(e.target.value)}}
              onChange={(e) => {
                setSelected(e.target.value);
                setPosts(
                  selectValue.filter((post: PostsType) =>
                    post.title.includes(e.target.value)
                  )
                );
              }}
            >
              <option key={-1} value="">
                Reset filters
              </option>
              {selectValue.map((post: PostsType) => (
                <option key={post.id} value={post.title}>
                  {post.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.filter_date}>
            {/* <select value="chon">
              <option value="">date time</option>
              <option value="">2</option>
              <option value="">3</option>
            </select> */}
          </div>
          <div className={styles.search_blog}>
            <Search />
          </div>
        </div>

        <div className={styles.card_content}>
          <Card data={posts} />
        </div>
        
      </div>
    </div>
  );
}
