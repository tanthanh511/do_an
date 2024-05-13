import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card";
import { postsData } from "./posts.constant";
import dl from "../../assets/test/dl.svg";
import { Link } from "react-router-dom";

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

  const [dateTime, setDate] = useState("");
  const [dateResult, setDateResult] = useState(postsData);

  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(postsData);

  // get api
  // const [selectValue, setSelectValue] = useState([]);
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
    setSearchResult(posts);
  }, []);

  const handleSearch = () => {
    const filter = postsData.filter((item) => {
      return searchText === ""
        ? postsData
        : item.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setPosts(filter);
  };

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
            <div className={styles.box_search_date}>
              <div className={styles.search_date}>
                <input
                  className={styles.ip_date}
                  type="date"
                  value={dateTime}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setPosts(
                      postsData.filter((post: PostsType) => {
                        return post.date.includes(e.target.value);
                      })
                    );
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.search_blog}>
            <div className={styles.box_search}>
              <div className={styles.search_header}>
                <input
                  className={styles.ip_search}
                  type="text"
                  placeholder="Search your destination"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setPosts(
                      searchText == ""
                        ? postsData
                        : postsData.filter((item) => {
                            return item.title
                              .toLowerCase()
                              .includes(searchText);
                          })
                    );
                  }}
                />
                <button className={styles.btn_search} onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card_content}>
          <div className={styles.card_info}>
            {posts.map((post) => (
              <div className={styles.card_item}>
                <div className={styles.card_item_info}>
                  <div className={styles.card_item_img}>
                    {" "}
                    <img src={dl} alt="" />
                  </div>
                  <Link
                    to={`/blog-detail?id=${post.id}`}
                    key={post.id}
                    className={styles.card_item_link}
                  >
                    <div key={post.id} className={styles.card_item_content}>
                      <h1>{post.title}</h1>
                      <p>{post.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
