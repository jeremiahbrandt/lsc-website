import Layout from "../components/Layout"
import Proxy from "../hooks/useProxy"
import Bio from "../components/Bio";

const aboutPage = () => {
    const data = Proxy.getInformationPageData()
    return (
        <Layout>
            <span className="phone">Phone Number: {data.phoneNumber}</span>
            <span className="email">Phone Number: {data.email}</span>
            <Bio {...data.lscBio} />
            <Bio {...data.pastorBio} />
            <Bio {...data.presidentBio} />
        </Layout>
    )
}

export default aboutPage