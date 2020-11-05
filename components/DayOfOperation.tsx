import {IDayOfOperation} from "../interfaces/cmsQueries/objects/IDayOfOperation";
import React from "react";
import style from "../css/DayOfOperation.module.css"

const DayOfOperation : React.FC<{day: IDayOfOperation}>= ({day}) => {
    return (
        <div className={style.day}>
            <div className={style.right}>{day.dayOfWeek}</div>
            <div className={style.left}>{day.hoursOfOperation}</div>
        </div>
    )
}

export default DayOfOperation
