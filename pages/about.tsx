import React from "react";
import Layout from "../components/Layout"
import {getAllBiographies} from "../lib/api";
import {IBiography} from "../interfaces/IBiography";
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
        <Layout title={"about"}>
            <Biographies biographies={biographies} />
        </Layout>
    )
}

export default aboutPage