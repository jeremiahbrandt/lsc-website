import React from "react"
import {IEvent} from "../interfaces/IEvent"
import styles from "../css/Events.module.css"
import Event from "./Event"

const Events: React.FC<{events: IEvent[]}> = ({events}: {events: IEvent[]}) => {
    return (
        <div className={styles.events}>
            {
                events.map((event, index) => <Event key={`event${index}`} {...event} />)
            }
        </div>
    )
}

export default Events