import styles from "./Contact.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import Page from "../../components/Page/Page";

export default function Kontakt() {
  return (
    <>
      <Page title="Kontakt">
        <h3 className="text--center">Masz pytanie?</h3>
        <p className="text--center">
          Wyślij nam je, odpowiemy najszybciej jak to możliwe!
        </p>
        <hr />
        <div className="layout--two-columns">
          <div className="two-columns__first">
            <h4 className="two-columns__header text--bold">Zadaj pytanie</h4>
            <ContactForm className={styles.form} />
          </div>
          <div className="two-columns__second">
            <h4 className="two-columns__header text--bold">
              Zgłoś się na zajęcia
            </h4>
            <SignupForm className={styles.form} />
          </div>
        </div>
      </Page>
    </>
  );
}
