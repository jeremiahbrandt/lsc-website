import Slideshow from "../components/SlideShow";
import Layout from "../components/Layout";
import 'react-slideshow-image/dist/styles.css'
import Events from "../components/Events";
import {getHomePageContent, getSiteConfig} from "../lib/api";
import React from "react";
import {IHomePageContent} from "../interfaces/cmsQueries/pages/IHomePageContent";
import {IConfig} from "../interfaces/cmsQueries/pages/IConfig";
import Video from "../components/Video";

export async function getStaticProps() {
    return {
        props: {
            content: await getHomePageContent(),
            config: await getSiteConfig()
        }
    }
    
}

const IndexPage = (props: {content: IHomePageContent, config: IConfig}) => {
    return (
        <h1>Coming Soon</h1>
    )
}

export default IndexPage