import React, { useState, useRef } from "react";
import { useFormik, Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

const SignupForm = () => {
  const [isSubmitted, setSubmitState] = useState(false);
  const form = useRef();

  const REQUIRED_ERROR = "^ To pole jest wymagane";
  const phoneRegExp = /^(?!\D)\d{9}$/;

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        classes: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(30, "Maksymalna ilość znaków: 30")
          .required(REQUIRED_ERROR),
        lastName: Yup.string()
          .max(30, "Maksymalna ilość znaków: 30")
          .required(REQUIRED_ERROR),
        email: Yup.string()
          .email("Nieprawidłowy adres email")
          .required(REQUIRED_ERROR),
        phone: Yup.string()
          .matches(phoneRegExp, "Poprawny format numeru telefonu to XXXXXXXXX")
          .required(REQUIRED_ERROR),
        classes: Yup.string()
          .notOneOf(["", "--Wybierz warsztaty/kurs--"])
          .required("Nieprawidłowa wartość"),
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
      <Form id="signUpForm">
        <label htmlFor="firstName">
          Imię<span className="text--error"> *</span>
        </label>
        <Field name="firstName" type="text" placeholder="Jan" />
        <ErrorMessage
          name="firstName"
          render={(msg) => <div className="text--error">{msg}</div>}
        />

        <label htmlFor="lastName">
          Nazwisko<span className="text--error"> *</span>
        </label>
        <Field name="lastName" type="text" placeholder="Kowalski" />
        <ErrorMessage
          name="lastName"
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

        <label htmlFor="phone">
          Numer telefonu<span className="text--error"> *</span>
        </label>
        <Field name="phone" type="number" placeholder="123456789" />
        <ErrorMessage
          name="phone"
          render={(msg) => <div className="text--error">{msg}</div>}
        />

        <label htmlFor="classes">
          Zajęcia <span className="text--error">*</span>
        </label>
        <Field name="classes" as="select">
          <option value="">--Wybierz warsztaty/kurs--</option>
          <option value="Warsztaty 15.03.2022">Warsztaty 15.03.2022</option>
          <option value="Kurs dla dorosłych (cykliczne)">
            Kurs dla dorosłych (cykliczne)
          </option>
          <option value="Warsztaty dla dzieci 13-16.03.2022">
            Warsztaty dla dzieci 13-16.03.2022
          </option>
        </Field>
        <ErrorMessage
          name="classes"
          render={(msg) => <div className="text--error">{msg}</div>}
        />

        <ButtonSecondary type="submit">Zapisz się</ButtonSecondary>
      </Form>
    </Formik>
  );
};

export default SignupForm;
