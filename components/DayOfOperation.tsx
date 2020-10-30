import {IHourOfOperation} from "../interfaces/IHourOfOperation";
import React from "react";

const DayOfOperation : React.FC<IHourOfOperation>= (props) => {
    return (
        <div className={"day-of-operation"}>
            <div className={"text-right"}>{props.day}</div>
            <div className={"text-left"}>{props.hours}</div>
        </div>
    )
}

export default DayOfOperation
