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
                <ContactForm />
                <div className={"hours-of-operation"}>
                    <h1 className={"hours-of-operation-title"}>{props.content.sectionTitle}</h1>
                    <DaysOfOperation days={props.content.daysOfOperation} />
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage