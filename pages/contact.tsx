import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm";
import {IContactPageContent} from "../interfaces/cmsQueries/pages/IContactPageContent";
import React from "react";
import {IConfig} from "../interfaces/cmsQueries/pages/IConfig";
import DaysOfOperation from "../components/DaysOfOperation";
import styles from "../css/ContactPage.module.css"

const ContactPage = (props: {content: IContactPageContent, config: IConfig}) => {
    return (
        <Layout title={"Contact"} config={props.config}>
            <div className={styles.page}>
                <DaysOfOperation days={props.content.daysOfOperation} sectionTitle={props.content.sectionTitle} />
                <ContactForm />
            </div>
        </Layout>
    )
}

export default ContactPage