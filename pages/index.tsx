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
        // <Layout title={"Home"} config={props.config}>
        //     <Video name={props.content.welcomeVideo.video.name} id={props.content.welcomeVideo.video.id} />
        //     <Slideshow imageUrls={props.content.slideshowImages} />
        //     <Events events={props.content.events} sectionTitle={props.content.eventsSectionTitle} />
        // </Layout>
        <div style={{display: 'grid', justifyContent: 'center', alignContent: 'center', backgroundColor: '#000000', color: '#e2e2e3', height: '100vh'}}>
            <h1 style={{fontSize: 'xxx-large'}}>Coming Soon</h1>
        </div>
    )
}

export default IndexPage