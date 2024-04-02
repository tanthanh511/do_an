import styles from "./styles.module.scss";
import error from "../../assets/icon_network_social/highlight-off.svg"
type ErrorProps = {
  message: string;
};

const Error = ({ message }: ErrorProps) => {
  return (
    <div className={styles.main}>
       
      <div className={styles.error_container}>
      <img src={error} alt="" />
        <h3 className={styles.error_title}> Error</h3>
        <p className={styles.error_message}>{message}</p>
      </div>
    </div>
  );
};

export default Error;
