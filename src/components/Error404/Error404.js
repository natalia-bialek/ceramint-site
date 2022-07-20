import "./Error404.css";

export default function Error404() {
    return (
        <div className="error">
            <p className="error__emoji">:(</p>
            <h5 className="error__header text--uppercase">Error</h5>
            <p className="error__text">Nic tu nie ma.</p>
            <a className="error__link" href="/">
                {" "}
                &#60; Wróć na stronę główną
            </a>
        </div>
    );
}



