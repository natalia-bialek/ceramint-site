import "./Error.css";
import Page from "../components/Page";

export default function Error() {
  return (
    <Page title="404 Error">
      <div className="error">
        <p className="error__emoji">:(</p>
        <h5 className="error__header text--uppercase">Error</h5>
        <p className="error__text">Nic tu nie ma.</p>
        <a className="error__link" href="/">
          {" "}
          &#60; Wróć na stronę główną
        </a>
      </div>
    </Page>
  );
}
