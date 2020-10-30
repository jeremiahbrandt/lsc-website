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
            <div className={"events"}>
                {
                    events.map((event, index) => {
                       return (
                           <article key={`event${index}`} className={"event"}>
                               <h2 className={"event-title"}>{event.name}</h2>
                               <img src={event.image.src} alt={event.image.alt} />
                               <section>
                                   <span><b>When:</b> {event.date}, {event.startTime} - {event.endTime}</span>
                                   <span><b>Location:</b> {event.location}</span>
                               </section>
                               {
                                   event.description.map((desc, index) => <p key={`description${index}`}>{desc}</p>)
                               }
                           </article>
                       )
                    })
                }
            </div>
        </Layout>
    )
}

export default eventsPage