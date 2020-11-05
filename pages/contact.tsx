import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm";
import {IContactPageContent} from "../interfaces/cmsQueries/pages/IContactPageContent";
import React from "react";
import {getContactPageContent, getSiteConfig} from "../lib/api";
import {IConfig} from "../interfaces/cmsQueries/pages/IConfig";
import DaysOfOperation from "../components/DaysOfOperation";

export async function getStaticProps() {
    return {
        props: {
            content: await getContactPageContent(),
            config: await getSiteConfig()
        }
    }
}

const ContactPage = (props: {content: IContactPageContent, config: IConfig}) => {
    return (
        <Layout title={"Contact"} config={props.config}>
            <div className={"contact-page"}>
                <div className={"hours-of-operation"}>
                    <DaysOfOperation days={props.content.daysOfOperation} sectionTitle={props.content.sectionTitle} />
                </div>
                <ContactForm />
            </div>
        </Layout>
    )
}

export default ContactPage