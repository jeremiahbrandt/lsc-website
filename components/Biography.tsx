import {IBiography} from "../interfaces/cmsQueries/objects/IBiography";
import React from "react";
import BlockContent from "@sanity/block-content-to-react"
import styles from "../css/Biography.module.css"

export type BiographyProps = IBiography & {
    imageAlignment: 'left' | 'right'
}

const Biography: React.FC<BiographyProps> = (props: BiographyProps) => {
    let className = styles.biography + ' '
    if(props.imageAlignment === 'left') {
        className += styles.biographyLeft
    } else {
        className += styles.biographyRight
    }

    return (
        <div className={className}>
            <div className={styles.title}> {props.name}, {props.position}</div>
            <img className={styles.img} src={props.image} alt={`Image of ${props.name}.`} />
            <BlockContent className={styles.blockContent} blocks={props.blockContent} />
        </div>
    )
}

export default Biography