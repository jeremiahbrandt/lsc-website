import Layout from "../components/Layout"
import React from "react";
import {getSiteConfig, getVideosPageContent} from "../lib/api";
import {IConfig} from "../interfaces/cmsQueries/pages/IConfig";
import styles from "../css/VideosPage.module.css"
import {IVideosPageContent} from "../interfaces/cmsQueries/pages/IVideosPageContent";
import Videos from "../components/Videos";

export async function getStaticProps() {
    return {
        props: {
            content: await getVideosPageContent(),
            config: await getSiteConfig()
        }
    }
}

const VideosPage = (props: {content: IVideosPageContent, config: IConfig}) => {
    return (
        <Layout title={props.content.videosPageTitle} config={props.config}>
            <span className={styles.title}>{props.content.videosPageTitle}</span>
            <div className={styles.page}>
                <Videos videos={props.content.videos} sectionTitle={props.content.videosPageTitle} />
            </div>
        </Layout>
    )
}

export default VideosPage