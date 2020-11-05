import React, {FC} from "react";
import {IDayOfOperation} from "../interfaces/cmsQueries/objects/IDayOfOperation";
import DayOfOperation from "./DayOfOperation";

const DaysOfOperation:FC<{days: IDayOfOperation[]}> = ({days}) => {
    return (
        <div>
            {
                days.map((day, index) => <DayOfOperation key={`dayOfOperation${index}`} day={day} />)
            }
        </div>
    )
}

export default DaysOfOperation