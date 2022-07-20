import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com'
import "../../styles/reusable.css";

const ContactForm = (props) => {

    const [isSubmitted, setSubmitState] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_5pfelmq", "template_9ky2559", form.current, "2FV8qZ-KuF6GPNoP9")
            .then((result) => {
                setSubmitState(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form onSubmit={sendEmail}>
            <label>Imię</label>
            <input type="text" name="user_name" placeholder="Jan" />
            <label>Adres email</label>
            <input type="email" name="user_email" placeholder="jan@gmail.com" />
            <label>Wiadomość</label>
            <textarea name="message" placeholder="Treść twojej wiadomości..." />
            <button type="submit">Wyślij wiadomość</button>
        </form>
    );
};

export default ContactForm;