import "./ButtonPrimary.css";
import { Link } from "react-router-dom";

export default function ButtonPrimary(props) {
  return (
    <Link
      className="button--primary text--uppercase text--bold"
      to={props.link}
    >
      {props.children}
    </Link>
  );
}
