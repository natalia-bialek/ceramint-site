import "./ButtonSecondary.css";

export default function ButtonSecondary(props) {
  return (
    <button
      className="button--secondary text--uppercase text--bold"
      type={props.type ? props.type : "button"}
    >
      {props.children}
    </button>
  );
}
