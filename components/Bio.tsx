import React from "react";
import {IBiography} from "../interfaces/iBiography";

const Bio: React.FC<IBiography> = (props) => {
    return (
        <article className={"bio"}>
            <h1 className={"bio-header"}>{props.name} - {props.position}{}</h1>
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