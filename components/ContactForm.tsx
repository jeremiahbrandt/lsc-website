import styles from "../css/ContactForm.module.css"
import React from "react"

const ContactForm = () => {
    return (
        <form className={styles.form} action="/api/contact-form">
            <div className={styles.title}>Send a Message</div>
            <div className={styles.inputs}>
                <label className={styles.label} htmlFor="name">Name:</label>
                <input className={styles.input} type="text" name="name" required/>
                <label className={styles.label} htmlFor="phone">Phone Number:</label>
                <input className={styles.input} type="tel" name="phone" />
                <label className={styles.label} htmlFor="email">Email Address:</label>
                <input className={styles.input} type="email" name="email" />
                <label className={styles.label} htmlFor="message">Message:</label>
                <textarea className={styles.textarea} name="message" />
            </div>
            <input className={`${styles.input} ${styles.submit}`} type="submit" value="Send" />
        </form>
    )
}

export default ContactForm