import Layout from "../components/Layout"

const ContactPage = () => {
    return (
        <Layout>
            <form className="contact-form" action="">
                <h1>Send a Message</h1>
                <label id="name-label" htmlFor="name">Name:</label>
                <input id="text-input" type="text" name="name" required/>
                <label id="phone-label" htmlFor="phone">Phone Number:</label>
                <input id="text-input" type="tel" name="phone" />
                <label id="email-label" htmlFor="email">Email Address:</label>
                <input id="text-input" type="email" name="email" />
                <label id="message-label" htmlFor="message">Message:</label>
                <textarea id="message-input" name="message" />
                <input type="submit" value="Send" />
            </form>
        </Layout>
    )
}

export default ContactPage