import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0521297480072!2d77.35744307393875!3d28.628199684280162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a143dbf899%3A0x7db68fffbce4d809!2sIBM%20office%2062!5e0!3m2!1sen!2sin!4v1687430710351!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
