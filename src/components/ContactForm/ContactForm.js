import React, { useState, useRef } from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

const ContactForm = (props) => {
  const [isSubmitted, setSubmitState] = useState(false);

  const REQUIRED_ERROR = "^ To pole jest wymagane";

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(30, "Maksymalna ilość znaków: 30")
          .required(REQUIRED_ERROR),
        email: Yup.string()
          .email("Nieprawidłowy adres email")
          .required(REQUIRED_ERROR),
        message: Yup.string()
          .max(1000, "Maksymalna ilość znaków: 1000")
          .required(REQUIRED_ERROR),
      })}
      onSubmit={(values) => {
        console.log(values);
        emailjs
          .sendForm(
            "service_5pfelmq",
            "template_p4u310f",
            "#signUpForm",
            "2FV8qZ-KuF6GPNoP9"
          )
          .then(
            (values) => {
              setSubmitState(true);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }}
    >
      <Form id="contactForm">
        <label htmlFor="name">
          Imię<span className="text--error"> *</span>
        </label>
        <Field name="name" type="text" placeholder="Jan" />
        <ErrorMessage
          name="name"
          render={(msg) => <div className="text--error">{msg}</div>}
        />

        <label htmlFor="email">
          Adres email<span className="text--error"> *</span>
        </label>
        <Field name="email" type="text" placeholder="jan.kowalski@email.com" />
        <ErrorMessage
          name="email"
          render={(msg) => <div className="text--error">{msg}</div>}
        />

        <label htmlFor="message">
          Wiadomość<span className="text--error"> *</span>
        </label>
        <Field
          name="message"
          as="textarea"
          type="text"
          placeholder="Tutaj wpisz wiadomość..."
        />
        <ErrorMessage
          name="message"
          render={(msg) => <div className="text--error">{msg}</div>}
        />
        <ButtonSecondary type="submit">Wyślij wiadomość</ButtonSecondary>
      </Form>
    </Formik>
  );
};

export default ContactForm;
