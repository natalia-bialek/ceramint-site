import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com'
import "../../styles/reusable.css"



const SignupForm = () => {

    const [isSubmitted, setSubmitState] = useState(false);
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm("service_5pfelmq", "template_9ky2559", form.current, "2FV8qZ-KuF6GPNoP9")
    //         .then((result) => {
    //             setSubmitState(true);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };


    // phone validation /^[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$k

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: 0,
            classes: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(30, "Must be 20 characters or less")
                .required("To pole jest wymagane"),
            lastName: Yup.string()
                .max(30, "Must be 20 characters or less")
                .required("To pole jest wymagane"),
            email: Yup.string()
                .email("Nieprawidłowy adres email")
                .required("To pole jest wymagane"),
            phone: Yup
                .number()
                .required("To pole jest wymagane"),
        }),
        onSubmit: values => {
            console.log(values);
            // emailjs.sendForm("service_5pfelmq", "template_9ky2559", form.current, "2FV8qZ-KuF6GPNoP9")
            //     .then((values) => {
            //         alert(values);
            //         setSubmitState(true);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Imię uczestnika <span className="text--error">*</span></label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div className="text--error">{formik.errors.firstName}</div> : null}

            <label htmlFor="lastName">Nazwisko uczestnika <span className="text--error">*</span></label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div className="text--error">{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Adres email <span className="text--error">*</span></label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.errors.email ? <div className="text--error">{formik.errors.email}</div> : null}

            <label htmlFor="phone">Numer telefonu <span className="text--error">*</span></label>
            <input
                id="phone"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
            />
            {formik.errors.phone ? <div className="text--error">{formik.errors.phone}</div> : null}

            <label htmlFor="classes">Zajęcia <span className="text--error">*</span></label>
            <select
                id="classes"
                name="classes"
                value={formik.values.classes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                <option value="initial-value">--Wybierz warsztaty/kurs--</option>
                <option value="warsztaty-15.03.2022">Warsztaty 15.03.2022</option>
                <option value="kurs-dla-doroslych">Kurs dla dorosłych (cykliczne)</option>
                <option value="warsztaty-dla-dzieci">Warsztaty dla dzieci 13-16.03.2022</option>
            </select>
            {formik.errors.classes ? <div className="text--error">{formik.errors.classes}</div> : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm;