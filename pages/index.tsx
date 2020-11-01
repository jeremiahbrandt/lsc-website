import Head from 'next/head'
import Slideshow from "../components/SlideShow";
import Layout from "../components/Layout";
import 'react-slideshow-image/dist/styles.css'
import Events from "../components/Events";
import client from "../client"

export async function getStaticProps() {
    const data = await client.fetch(`*[_type=="event"]`)
    return {
        props: {
            data: data
        }
    }
}

export default function Home() {
    return (
        <Layout>
        <Head>
            <title>Lutheran Student Center</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Slideshow />
            <Events />
        </Layout>
    )
}
