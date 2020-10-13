import Layout from "../components/Layout"
import styles from "./ContactPage.css"

const ContactPage = () => {
    return (
        <Layout>
            <form action="">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" name="phone" />
                <label htmlFor="email">Email Address:</label>
                <input type="text" name="email" />
                <label htmlFor="message">Message:</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </Layout>
    )
}

export default ContactPage