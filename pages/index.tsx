import Head from 'next/head'
import Slideshow from "../components/SlideShow";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
        <Head>
            <title>Lutheran Student Center</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Slideshow />
        </Layout>
    )
}
