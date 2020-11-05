import React from "react"
import {IEvent} from "../interfaces/cmsQueries/objects/IEvent"
import styles from "../css/Events.module.css"
import Event from "./Event"

const Events: React.FC<{events: IEvent[], sectionTitle: string}> = ({events, sectionTitle}) => {
    return (
        <div className={styles.events}>
            <div className={styles.title}>{sectionTitle}</div>
            <div className={styles.eventsList}>
                {
                    events.map((event, index) => <Event key={`event${index}`} {...event} />)
                }
            </div>
        </div>
    )
}

export default Events