import { IEvent } from "../interfaces/cmsQueries/objects/IEvent";
import styles from "../css/Event.module.css";
import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

const MONTHS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const DAYS: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Event: React.FC<IEvent> = (event: IEvent) => {
  const getTime = () => {
    const startDate: Date = new Date(event.startTime);
    const endDate: Date = new Date(event.endTime);

    return toFormattedTime(startDate) + " - " + toFormattedTime(endDate);
  };

  const toFormattedTime = (date: Date): string => {
    let minutes = date.getMinutes().toString();
    if (date.getMinutes() <= 9) {
      minutes = "0" + minutes;
    }

    let hours: number = date.getHours();
    let hourLabel = " AM";

    if (hours >= 12) {
      hourLabel = " PM";
    }

    if (hours > 12) {
      hours -= 12;
    }

    return hours + ":" + minutes + hourLabel;
  };

  const getDay = (): string => {
    const date: Date = new Date(event.startTime);

    const day = DAYS[date.getDay()];

    const month = MONTHS[date.getMonth()];

    return day + ", " + month + " " + date.getDate();
  };

  return (
    <div className={styles.event}>
      <Link href={`/posts/event.name.replace(/\s+/g, '-').toLowerCase()`}>
        <div className={styles.name}>{event.name}</div>
      </Link>
      <img
        className={styles.image}
        src={event.coverImage}
        alt={`Cover image for the event, ${event.name}.`}
      />
      <div>
        <div>
          <b>When:</b> {getDay()}, {getTime()}
        </div>
        <div>
          <b>Location:</b> {event.location}
        </div>
      </div>
      <BlockContent blocks={event.content} />
    </div>
  );
};

export default Event;
