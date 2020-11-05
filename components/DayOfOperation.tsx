import {IDayOfOperation} from "../interfaces/cmsQueries/objects/IDayOfOperation";
import React from "react";

const DayOfOperation : React.FC<{day: IDayOfOperation}>= ({day}) => {
    return (
        <div className={"day-of-operation"}>
            <div className={"text-right"}>{day.dayOfWeek}</div>
            <div className={"text-left"}>{day.hoursOfOperation}</div>
        </div>
    )
}

export default DayOfOperation
