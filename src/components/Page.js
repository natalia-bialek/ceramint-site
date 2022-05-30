import { useEffect } from "react";
import "./Page.css";

export default function Page(props) {
  useEffect(() => {
    document.title = props.title + " | Ceramint" || "";
  }, [props.title]);

  return <div className="page__content">{props.children}</div>;
}
