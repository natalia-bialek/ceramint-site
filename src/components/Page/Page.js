import { useEffect } from "react";
import styles from "./Page.module.css";

export default function Page(props) {
  useEffect(() => {
    document.title = props.title + " | Ceramint" || "";
  }, [props.title]);

  return (
    <>
      <div className={styles.page__title}>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.page__content}>{props.children}</div>
    </>
  );
}
