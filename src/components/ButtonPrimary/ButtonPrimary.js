import "./ButtonPrimary.css";

export default function ButtonPrimary(props) {
  return (
    <a
      className="button--primary text--uppercase text--bold"
      href={props.link}
      role="button"
    >
      {props.children}
    </a>
  );
}
