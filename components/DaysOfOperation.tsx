import React, {FC} from "react";
import {IDayOfOperation} from "../interfaces/cmsQueries/objects/IDayOfOperation";
import DayOfOperation from "./DayOfOperation";
import styles from "../css/DaysOfOperation.module.css"

const DaysOfOperation:FC<{days: IDayOfOperation[], sectionTitle: string}> = ({days, sectionTitle}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{sectionTitle}</div>
            <div className={styles.list}>
                {
                    days.map((day, index) => <DayOfOperation key={`dayOfOperation${index}`} day={day} />)
                }
            </div>
        </div>
    )
}

export default DaysOfOperation