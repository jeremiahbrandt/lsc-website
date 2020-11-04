import React from "react";
import Layout from "../components/Layout"
import {getAboutPageContent, getSiteConfig} from "../lib/api";
import Biographies from "../components/Biographies";
import {IAboutPageContent} from "../interfaces/IAboutPageContent";
import {IConfig} from "../interfaces/IConfig";

export async function getStaticProps() {
    return {
        props: {
            content: await getAboutPageContent(),
            config: await getSiteConfig()
        }
    }
}

const aboutPage = (props: {content: IAboutPageContent, config: IConfig}) => {
    return (
        <Layout title={"about"} config={props.config}>
            <Biographies biographies={props.content.biographies} />
        </Layout>
    )
}

export default aboutPage