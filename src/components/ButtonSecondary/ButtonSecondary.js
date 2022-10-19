import styles from "./ButtonSecondary.module.css";

export default function ButtonSecondary(props) {
  return (
    <button
      className={styles["button-secondary"]}
      type={props.type ? props.type : "button"}
    >
      {props.children}
    </button>
  );
}
