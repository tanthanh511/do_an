import Search from "../../components/search";
import styles from "./styles.module.scss";
import rectangle from "../../assets/Rectangle 464.svg";
import phone from "../../assets/contact/phone_contact.svg";
import email from "../../assets/contact/email_contact.svg";
import address from "../../assets/contact/address_contact.svg";
import Subscribe from "../../components/subscribe";

export default function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.search}>
          {/* <Search /> */}
        </div>
        <div className={styles.introduction_banner}>
          <div className={styles.content_banner}>
            <div className={styles.about_us}>
              <div className={styles.text}>
                <h3>About us</h3>
              </div>
            </div>
            <h2>Traveling Opens The Door To Creating Memories</h2>
            <p>
              Whether we travel solo, with friends, or family, the shared
              experiences <br /> and adventures help strengthen bonds and create
              deeper connections <br /> with our companions.
            </p>
          </div>

          <div className="img_banner">
            <img src={rectangle} alt="" />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_infomation}>
            <div className={styles.contact_us}>
              <div className={styles.contact_text}>
                <h3>Contact Us</h3>
              </div>
            </div>
            <div className={styles.phone}>
              <img src={phone}></img>
              <p>111.111.111</p>
            </div>
            <div className={styles.email}>
              <img src={email}></img>
              <p>Admin@gmail.com</p>
            </div>
            <div className={styles.address}>
              <img src={address}></img>
              <p>95 Ly Nam De</p>
            </div>
            <div className={styles.text_thankyou}>
              <p>
                Thank you to our valued customers for taking the time and effort
                to share their feedback. This helps us improve and develop
                further. ^_^
              </p>
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
}
