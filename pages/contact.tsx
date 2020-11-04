import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm";
import Proxy from "../hooks/useProxy";
import {IContactPageData} from "../interfaces/IContactPageData";
import DayOfOperation from "../components/DayOfOperation";
import React from "react";

export async function getStaticProps() {
    return {
        props: Proxy.getContactPageData()
    }
}

const ContactPage:React.FunctionComponent<IContactPageData> = (props) => {
    return (
        <Layout title={"Contact"}>
            <div className={"contact-page"}>
                <ContactForm />
                <div className={"hours-of-operation"}>
                    <h1 className={"hours-of-operation-title"}>Hours</h1>
                    {props.hoursOfOperation.map((item, index) => <DayOfOperation key={`dayOfOperation${index}`}{...item} />)}
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage