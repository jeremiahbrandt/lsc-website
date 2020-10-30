import Layout from "../components/Layout"
import Proxy from "../hooks/useProxy"
import Bio from "../components/Bio";
import Head from "next/head";

const aboutPage = () => {
    const data = Proxy.getInformationPageData()
    return (
        <Layout>
            <Head>
                <title>LSC - About</title>
            </Head>
            <div className={"bios"}>
                <Bio {...data.lscBio} />
                <Bio {...data.pastorBio} />
                <Bio {...data.presidentBio} />
            </div>
        </Layout>
    )
}

export default aboutPage