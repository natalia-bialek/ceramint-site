import styles from "./Footer.module.css";
import classNames from "classnames";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__section}>
        <div className={styles.footer__row}>
          <div>
            <p
              className={classNames(
                styles.footer__p,
                styles["footer__p--bold"]
              )}
            >
              Ceramint Polska
            </p>
            <p className={styles.footer__p}>ul. Warszawska 60</p>
            <p className={styles.footer__p}>15-960, Białystok</p>
          </div>
          <div>
            <p
              className={classNames(
                styles.footer__p,
                styles["footer__p--bold"]
              )}
            >
              Godziny otwarcia:
            </p>
            <p className={styles.footer__p}>Pn-pt: 9:00 - 19:00</p>
            <p className={styles.footer__p}>Sob: 12:00 - 16:00</p>
          </div>
        </div>
        <div className={styles.footer__row}>
          <div>
            <p
              className={classNames(
                styles.footer__p,
                styles["footer__p--bold"]
              )}
            >
              E-mail:
            </p>
            <a className={styles.footer__p} href="mailto:kontakt@ceramint.pl">
              kontakt@ceramint.pl
            </a>
          </div>
          <div>
            <a className={styles.footer__link} href="/kontakt">
              Kontakt
            </a>
            <br />
            <a className={styles.footer__link} href="/regulamin">
              Regulamin
            </a>
            <br />
            <a className={styles.footer__link} href="/polityka-prywatnosci">
              Polityka prywatności
            </a>
          </div>
        </div>
      </div>
      <div className={styles["footer__section--small"]}>
        <p>® 2022 Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  );
}
