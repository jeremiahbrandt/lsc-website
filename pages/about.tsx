import React from "react";
import Layout from "../components/Layout"
import Head from "next/head";
import {getAllBiographies} from "../lib/api";
import {IBiography} from "../interfaces/iBiography";
import Biographies from "../components/Biographies";

export async function getStaticProps() {
    const [biographies] = await Promise.all([getAllBiographies()])
    return {
        props: {
            biographies
        }
    }
}

const aboutPage = ({biographies}: { biographies: IBiography[] }) => {
    return (
        <Layout>
            <Head>
                <title>LSC - About</title>
            </Head>
            <Biographies biographies={biographies} />
        </Layout>
    )
}

export default aboutPage