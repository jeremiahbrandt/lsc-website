import Layout from "../components/Layout";
import Proxy from "../hooks/useDevelopmentProxy";

const eventsPage = () => {
    const events = Proxy().getEventData()

    return (
        <Layout>
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
                               <p>{event.description}</p>
                           </article>
                       )
                    })
                }
            </div>
        </Layout>
    )
}

export default eventsPage