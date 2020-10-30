import React from "react";
import {IBioData} from "../interfaces/IBioData";

const Bio: React.FC<IBioData> = (props) => {
    return (
        <article className={"bio"}>
            <h1 className={"bio-header"}>{props.name} - {props.title}{}</h1>
            <span className={"bio-paragraphs"}>
                {
                    props.bio.map((bio, index) => {
                        return (
                            <p key={`bio${index}`}>
                                {bio}
                            </p>
                        )
                    })
                }
            </span>
            <img className={"bio-image"} src={props.image.src} alt={props.image.alt} />
        </article>
    )
}

export default Bio