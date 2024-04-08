import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import img1 from "../../assets/blog_detail.svg";
import img2 from "../../assets/blog_detail2.svg";
import img3 from "../../assets/blog_detail3.svg";
import { postsData } from "../blog/posts.constant";
import dl from "../../assets/test/dl.svg";

export interface PostType {
  id: number;
  title: string;
  description: string;
  date: string;
}
export function BlogDetail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [post, setPost] = useState(postsData);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  //     .then((res) => res.json())
  //     .then((optionPosts) => {
  //       setPost(optionPosts);
  //     });
  // }, [post]);

  // useEffect(() => {
  //   const filter = postsData
  //   setPost(filter)

  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.post_item}>
        {post
          .filter((item) => {
            return item.id.toString() === id;
          })
          .map((item: PostType) => {
            return (
              <>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.box_img_blog}>
                  <div className={styles.first_img}>
                    <img src={img2} alt="" />
                  </div>
                  <div className={styles.second_img}>
                    <img src={img1} alt="" />
                  </div>

                  <div className={styles.third_img}>
                    <img src={img3} alt="" />
                  </div>
                </div>

                <div className={styles.box_content_blog}>
                  <p className={styles.date_time}>Ngày đăng: {((item.date).split("-"))[2]+"-"+((item.date).split("-"))[1]+"-"+((item.date).split("-"))[0]}</p>
                  <p className={styles.author_post}>Tác giả: Admin</p>
                  <p className={styles.content_post}>
                    Khí hậu Đà Lạt là một trong những đặc điểm nổi bật nhất của
                    thành phố này, mang lại cho nó một vẻ đẹp và không khí độc
                    đáo. Được biết đến với biệt danh "thành phố mùa xuân vĩnh
                    cửu", Đà Lạt thu hút du khách từ khắp nơi bởi khí hậu dễ
                    chịu và nguồn cảm hứng vô tận mà nó mang lại. Khi bước chân
                    đến Đà Lạt, người ta không thể không bị cuốn hút bởi hơi thở
                    của không gian, một hơi thở mà mang đậm hương sắc của mùa
                    xuân. Dưới ánh nắng nhẹ nhàng của buổi sáng, làn sương mờ
                    bao trùm khắp phố phường, tạo ra một bức tranh thiên nhiên
                    tinh tế và lãng mạn. Những bông hoa đua nhau nở rộ, tạo nên
                    một màu sắc rực rỡ và hương thơm ngào ngạt khắp nơi. Trong
                    khi những khu rừng thông xanh mướt nằm xung quanh thành phố,
                    không chỉ mang lại bóng mát dịu dàng mà còn là nơi thu hút
                    những người yêu thiên nhiên, những tâm hồn mong manh muốn
                    tìm lại bình yên sau những ngày bận rộn. Những dải sông, hồ
                    trong lành lướt qua thành phố, tạo ra một cảm giác yên bình,
                    hòa mình vào âm nhạc tự nhiên của cuộc sống. Với một mùa hè
                    mát mẻ và một mùa đông se lạnh nhưng không khắc nghiệt, Đà
                    Lạt trở thành điểm đến lý tưởng cho những ai muốn tránh xa
                    khỏi cái nóng oi bức của thành thị. Buổi tối, thành phố lại
                    lấp lánh dưới ánh đèn lung linh, khung cảnh lãng mạn không
                    chỉ làm say lòng những cặp đôi mà còn làm xao xuyến lòng
                    người qua lại. Nhưng không chỉ là vẻ đẹp tự nhiên, khí hậu
                    của Đà Lạt còn là nguồn cảm hứng cho nghệ sĩ và nhà văn.
                    Những ngày mưa phùn, những cơn gió nhẹ nhàng thổi qua, tạo
                    nên một không gian lãng mạn đầy bí ẩn, là nguồn cảm hứng vô
                    tận cho những tác phẩm văn học, nghệ thuật. Tóm lại, khí hậu
                    của Đà Lạt không chỉ là một đặc điểm tự nhiên mà còn là một
                    phần không thể thiếu trong vẻ đẹp và sức hút của thành phố
                    này. Đó là điểm đến lý tưởng cho những ai muốn tìm lại bình
                    yên và hòa mình vào thiên nhiên trong lành, và cũng là nguồn
                    cảm hứng không ngừng cho những tâm hồn nghệ sĩ.
                  </p>
                </div>
              </>
            );
          })}
      </div>

      <div className={styles.last_new}>
        <h1 className={styles.title_latestnew}>Latest -New</h1>
        <div className={styles.card_content}>
          <div className={styles.card_info}>
            {postsData
              .filter((item: PostType) => {
                return item.id < 4;
              })
              .map((posts: PostType) => (
                <div className={styles.card_item}>
                  <div className={styles.card_item_info}>
                    <div className={styles.card_item_img}>
                      {" "}
                      <img src={dl} alt="" />
                    </div>
                    <div key={posts.id} className={styles.card_item_content}>
                      <h1>{posts.title}</h1>
                      <p>{posts.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
