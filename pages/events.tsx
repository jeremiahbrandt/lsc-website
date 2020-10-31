import Layout from "../components/Layout";
import Proxy from "../hooks/useDevelopmentProxy";
import Head from "next/head";

const eventsPage = () => {
    const events = Proxy().getEventData()

    return (
        <Layout>
            <Head>
                <title>LSC - Events</title>
            </Head>
            <h1 className={"events-page-title"}>Upcoming Events</h1>

        </Layout>
    )
}

export default eventsPage