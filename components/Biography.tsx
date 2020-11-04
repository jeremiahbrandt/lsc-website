import {IBiography} from "../interfaces/IBiography";
import React from "react";
import BlockContent from "@sanity/block-content-to-react"
import styles from "../css/Biography.module.css"

const Biography: React.FC<IBiography> = (props: IBiography) => {
    return (
        <div className={styles.biography}>
            <div className={styles.title}> {props.name}, {props.position}</div>
            <img className={styles.img} src={props.image} alt={`Image of ${props.name}.`} />
            <BlockContent className={styles.blockContent} blocks={props.blockContent} />
        </div>
    )
}

export default Biography