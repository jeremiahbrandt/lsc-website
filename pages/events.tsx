import Layout from "../components/Layout";
import Proxy from "../hooks/useDevelopmentProxy";

const eventsPage = () => {
    const events = Proxy().getEventData()

    return (
        <Layout>
            <h1 className={"events-page-title"}>Upcoming Events</h1>
            {
                events.map((event, index) => {
                   return (
                       <article key={`event${index}`} className={"event"}>
                           <h2>{event.name}</h2>
                           <section>
                               <span>When: {event.date}, {event.startTime} - {event.endTime}</span>
                               <span>Location: {event.location}</span>
                           </section>
                           <p>{event.description}</p>
                       </article>
                   )
                })
            }
        </Layout>
    )
}

export default eventsPage