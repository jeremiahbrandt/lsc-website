import Head from 'next/head'
import Slideshow from "../components/SlideShow";
import Layout from "../components/Layout";
import 'react-slideshow-image/dist/styles.css'
import Events from "../components/Events";
import {getEvents, getSlideshowImageUrls} from "../lib/api";

export async function getStaticProps() {
    return {
        props: {
            events: await getEvents(),
            slideshowImageUrls: await getSlideshowImageUrls()
        }
    }
}

const IndexPage = (props) => {
    return (
        <Layout>
        <Head>
            <title>Lutheran Student Center</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Slideshow imageUrls={props.slideshowImageUrls} />
            <Events events={props.events} />
        </Layout>
    )
}

export default IndexPage