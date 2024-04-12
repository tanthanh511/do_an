import styles from "./styles.module.scss";
import error from "../../assets/icon_network_social/highlight-off.svg";
type ErrorProps = {
  message: string;
};

const Error = ({ message }: ErrorProps) => {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.bat}>
          <img
            className={styles.leftwing}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
          />
          <img
            className={styles.body}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png"
            alt="bat"
          />
          <img
            className={styles.rightwing}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
          />
        </div>
        <div className={styles.bat}>
          <img
            className={styles.leftwing}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
          />
          <img
            className={styles.body}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png"
            alt="bat"
          />
          <img
            className={styles.rightwing}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
          />
        </div>
        <div className={styles.bat}>
          <img
            className={styles.leftwing}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
          />
          <img
            className={styles.bod}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png"
            alt="bat"
          />
          <img
            className={styles.rightwing}
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
          />
        </div>
        <img
          className={styles.foregroundimg}
          src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/HauntedHouseForeground.png"
          alt="haunted house"
        />
      </div>

      .
      <h1 className={styles.errorcode}>ERROR 403</h1>
      <div className={styles.errortext}>
        This area is forbidden. Turn back now!
      </div>
    </>
  );
};

export default Error;
