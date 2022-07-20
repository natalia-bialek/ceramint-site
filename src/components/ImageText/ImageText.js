import "./ImageText.css";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.js";

export default function ImageText(props) {
  let classes = "ImageText__container";
  if (props.isReverse) {
    classes += " reverse";
  }

  return (
    <div className={classes}>
      <img className="ImageText__image" src={props.image} alt="" />
      <div className="ImageText__body">
        <h4 className="ImageText__header text--uppercase text--bold">
          {props.header}
        </h4>
        {props.isCyclically && (
          <h6 className="ImageText__subheader text--uppercase">Cykliczne</h6>
        )}
        <p className="ImageText__text">{props.text}</p>
        {Object.keys(props.additionalInfo ?? {}).map((key) => (
          <p className="ImageText__text">
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
