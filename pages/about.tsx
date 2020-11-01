import Layout from "../components/Layout"
import Proxy from "../hooks/useProxy"
import Bio from "../components/Bio";
import Head from "next/head";
import {getAllBiographies} from "../lib/api";
import {IBiography} from "../interfaces/iBiography";

export async function getStaticProps() {
    const biographies = await getAllBiographies()
    return {
        props: {
            biographies: biographies || null
        }
    }
}

const aboutPage = ({biographies}: { biographies: IBiography[] }) => {
    const data = Proxy.getInformationPageData()
    return (
        <Layout>
            <Head>
                <title>LSC - About</title>
            </Head>
            <div className={"bios"}>
                {
                    biographies &&  biographies.map((biography, index) => <Bio key={`biography${index}`} {...biography} />)
                }
                <Bio {...data.lscBio} />
                <Bio {...data.pastorBio} />
                <Bio {...data.presidentBio} />
            </div>
        </Layout>
    )
}

export default aboutPage