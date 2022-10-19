import styles from "./ImageText.module.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.js";
import classNames from "classnames";

export default function ImageText(props) {
  let classes = classNames(styles.ImageText__container, {
    [styles.reverse]: props.isReverse,
  });

  return (
    <div className={classes}>
      <img className={styles.ImageText__image} src={props.image} alt="" />
      <div className={styles.ImageText__body}>
        <h4 className={styles.ImageText__header}>{props.header}</h4>
        {props.isCyclically && (
          <h6 className={styles.ImageText__subheader}>Cykliczne</h6>
        )}
        <p className={styles.ImageText__text}>{props.text}</p>
        {Object.keys(props.additionalInfo ?? {}).map((key) => (
          <p className={styles.ImageText__text}>
            <span className="text--bold">{key}:</span>
            {props.additionalInfo[key]}
          </p>
        ))}

        {props.button && (
          <ButtonPrimary link={props.buttonLink}>{props.button}</ButtonPrimary>
        )}
      </div>
    </div>
  );
}
