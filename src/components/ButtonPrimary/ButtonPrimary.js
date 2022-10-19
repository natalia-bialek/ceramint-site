import styles from "./ButtonPrimary.module.css";

export default function ButtonPrimary(props) {
  return (
    <a className={styles["button-primary"]} href={props.link} role="button">
      {props.children}
    </a>
  );
}
