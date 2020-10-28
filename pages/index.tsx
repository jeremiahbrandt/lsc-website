import Head from 'next/head'
import Navigation from '../components/Navigation'
import Slideshow from "../components/SlideShow";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Navigation />
            <Slideshow />
        </Layout>
    )
}
