import React from "react"
import Proxy from "../hooks/useProxy"

const Events = () => {
    const events = Proxy.getEventData()

    return (
        <div className={"events"}>
            <h1 className={"events-title"}>Upcoming Events</h1>
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
    )
}

export default Events