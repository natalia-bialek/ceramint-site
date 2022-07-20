import ContactForm from "../components/ContactForm/ContactForm";
import SignupForm from "../components/SignupForm/SignupForm";
import Page from "../components/Page/Page";

export default function Kontakt() {

  const contactHeader = {
    textAlign: "center",
  };

  return (
    <>
      <Page title="Kontakt">
        <h3 style={contactHeader}>Masz pytanie?</h3>
        <p style={contactHeader}>Wyślij nam je, odpowiemy najszybciej jak to mozliwe!</p>
        <hr />
        <div className="two-columns-layout">
          <div className="first-column">
            <h4 className="text--bold">Zadaj pytanie</h4>
            <ContactForm />
          </div>
          <div className="second-column">
            <h4 className="text--bold">Zgłoś się na zajęcia</h4>
            <SignupForm />
          </div>
        </div>

      </Page>
    </>
  );
}