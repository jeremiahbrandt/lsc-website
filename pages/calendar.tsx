import {Calendar, momentLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";

import moment from 'moment'
import Layout from '../components/Layout';
import { IConfig } from '../interfaces/cmsQueries/pages/IConfig';
import { getCalendarPageEvents, getSiteConfig } from '../lib/api';

export type Event = {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
    resource?: any,
  }

export type BigCalendarProps = {
    eventsList: Event[]
    config: IConfig
}

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

export default function MyCalendar(props: BigCalendarProps) {
    const events = props.eventsList.map(event => {
        return {
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end)
        }
    })

    return (
        <Layout title="Calendar" config={props.config}>
            <Calendar
                style={{ height: "100vh" }}
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const events = await getCalendarPageEvents()

    const calendarEvents = events.map(event => {
        return {
            start: event.startTime,
            end: event.endTime,
            title: event.name
        }
    })

    return {
        props: {
            eventsList: calendarEvents,
            config: await getSiteConfig()
        },
    }
}