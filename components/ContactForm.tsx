import styles from "../css/ContactForm.module.css"

const ContactForm = () => {
    return (
        <form className={styles.form} action="">
            <h1 className={styles.title}>Send a Message</h1>
            <label className={styles.nameLabel} htmlFor="name">Name:</label>
            <input className={`${styles.input} ${styles.nameInput}`} type="text" name="name" required/>
            <label className={styles.phoneLabel} htmlFor="phone">Phone Number:</label>
            <input className={`${styles.input} ${styles.phoneInput}`} type="tel" name="phone" />
            <label className={styles.emailLabel} htmlFor="email">Email Address:</label>
            <input className={`${styles.input} ${styles.emailInput}`} type="email" name="email" />
            <label className={styles.messageLabel} htmlFor="message">Message:</label>
            <textarea className={`${styles.input} ${styles.messageInput}`} name="message" />
            <input className={`${styles.input} ${styles.submit}`} type="submit" value="Send" />
        </form>
    )
}

export default ContactForm