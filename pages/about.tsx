import Layout from "../components/Layout"
import Proxy from "../hooks/useProxy"
import Bio from "../components/Bio";

const aboutPage = () => {
    const data = Proxy.getInformationPageData()
    return (
        <Layout>
            <div className={"bios"}>
                <Bio {...data.lscBio} />
                <Bio {...data.pastorBio} />
                <Bio {...data.presidentBio} />
            </div>
        </Layout>
    )
}

export default aboutPage