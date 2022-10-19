import styles from "./News.module.css";

export default function News(props) {
  return (
    <div className={styles.card}>
      <p className={styles.card__data}>{props.data}</p>
      {props.image && (
        <img
          className={styles.card__image}
          src={props.image}
          alt={props.imageAltText}
        />
      )}
      <div className={styles.card__body}>
        <h5 className={styles.card__title}>{props.title}</h5>
        <p className={styles.card__text}>{props.text}</p>
      </div>
    </div>
  );
}
