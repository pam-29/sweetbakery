import React from "react";
import DonutContact from "../assets/imgContact.jpg";
import "../styles/contact.css";

function Contact() {
    return (
        <div className="contact">
        <div
            className="leftSide"
            style={{ backgroundImage: `url(${DonutContact})` }}
        ></div>
        <div className="rightSide">
            <h1> Contactez-nous</h1>

            <form id="contact-form" method="POST">
                <label htmlFor="name">Nom</label>
                <input name="name" placeholder="Enter full name..." type="text" />

                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" />

                <label htmlFor="message">Message</label>
                <textarea
                    rows="6" placeholder="Enter message..." name="message" required></textarea>

                <button type="submit"> Envoyer</button>
            </form>
        </div>
        </div>
    );
}

export default Contact;