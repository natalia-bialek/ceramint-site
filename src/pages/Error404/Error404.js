import styles from "./Error404.module.css";

export default function Error404() {
  return (
    <div className={styles.error}>
      <p className={styles.error__emoji}>:(</p>
      <h5 className={styles.error__header}>Error</h5>
      <p className={styles.rror__text}>Nic tu nie ma.</p>
      <a className={styles.error__link} href="/">
        &#60; Wróć na stronę główną
      </a>
    </div>
  );
}
