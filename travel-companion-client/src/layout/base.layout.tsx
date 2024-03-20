import Header from "./header";
import { IBaseLayout } from "./base.layout.interface";
import styles from "./styles.module.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";

export default function BaseLayout(props: IBaseLayout) {
  const { children } = props;
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}> {children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
