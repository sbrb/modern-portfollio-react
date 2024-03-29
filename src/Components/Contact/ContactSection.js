import React from "react";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import "./ContactSection.css";
import firebase from "./FirebaseConfig";

function ContactSection() {
  const contactForm = firebase.database().ref("contactMessages");

  const contactFormSubmit = () => {
    var name = getElementVal("nameField");
    var email = getElementVal("emailField");
    var msg = getElementVal("messageField");

    saveMessages(name, email, msg);
    resetForm("contact_form");
    document.querySelector(".Alert").classList.add("moveIn");
    document.querySelector(".Alert").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".Alert").style.display = "none";
    }, 4000);
  };

  const saveMessages = (name, email, msg) => {
    var newcontactFormRef = contactForm.push();
    newcontactFormRef.set({
      name: name,
      emailid: email,
      msgContent: msg,
    });
  };

  const resetForm = (id) => {
    document.getElementById(id).reset();
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">
        <AutoTyping
          active
          textRef="Contact Me"
          I
          writeSpeed={170}
          deleteSpeed={150}
          delayToWrite={1400}
          delayToDelete={100000}
        />
        <BlinkCursor active blinkSpeed={10000} />
      </h2>
      <div className="contact_container bd_grid">
        <form
          id="contact_form"
          className="contact_form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Please Enter Your Name"
            required
            id="nameField"
            className="contact_input"
          />
          <input
            type="email"
            placeholder="Please Enter Your Email"
            required
            id="emailField"
            className="contact_input"
          />
          <textarea
            rows="10"
            cols="0"
            id="messageField"
            className="contact_input"
            placeholder={"Type a message..."}
          ></textarea>

          <input
            onClick={contactFormSubmit}
            type="submit"
            value="Send"
            className="button contact_button"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
