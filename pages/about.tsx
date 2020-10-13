import { useState } from "react"
import Layout from "../components/Layout"
import Proxy from "../hooks/useProxy"

const aboutPage = () => {
    const data = Proxy().getInformationPageData()
    return (
        <Layout>
            <span className="phone">Phone Number: {data.phoneNumber}</span>
            <span className="email">Phone Number: {data.email}</span>
        </Layout>
    )
}

export default aboutPage