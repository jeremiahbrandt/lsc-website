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
        <Layout title={"Home"} config={props.config}>
            { props.content.welcomeVideo.enabled && <Video name={props.content.welcomeVideo.video.name} id={props.content.welcomeVideo.video.id} /> }
            <Slideshow imageUrls={props.content.slideshowImages} />
            <Events events={props.content.firstSection.articles} sectionTitle={props.content.firstSection.name} />
            <Events events={props.content.secondSection.articles} sectionTitle={props.content.secondSection.name} />
        </Layout>
    )
}

export default IndexPage