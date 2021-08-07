import { IEvent } from "../interfaces/cmsQueries/objects/IEvent";
import styles from "../css/Event.module.css";
import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import { FacebookShareButton } from "react-share";

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

  const path = `/posts/${event.name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={styles.event}>
      <img
        className={styles.image}
        src={event.coverImage}
        alt={`Cover image for the event, ${event.name}.`}
      />
      <div className={styles.eventHeader}>
        <Link href={path}>
          <div className={styles.name}>{event.name}</div>
        </Link>
        <div className={styles.timeLocation}>
          {/* <div>
            <b>When:</b> {getDay()}, {getTime()}
          </div>
          <div>
            <b>Location:</b> {event.location}
          </div> */}
        </div>
        <FacebookShareButton
          url={`https://ucm-lsc.org${path}`}
          title="Share on Facebook"
          style={{ width: "30px", height: "30px" }}
        >
          <svg
            className={styles.shareButton}
            xmlSpace="preserve"
            viewBox="0 0 266.893 266.895"
            height="266.895px"
            width="266.893px"
            y="0px"
            x="0px"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            version="1.1"
          >
            <path
              d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812
            c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225
            H248.082z"
              fill="#3C5A99"
              id="Blue_1_"
            >
            </path>
            <path
              d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935
            l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585
            v99.803H182.409z"
              fill="#FFFFFF"
              id="f"
            >
            </path>
          </svg>
        </FacebookShareButton>
      </div>
      <div className={styles.defaultCursor}>
        <BlockContent blocks={event.content} />
      </div>
    </div>
  );
};

export default Event;
