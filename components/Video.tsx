import React from "react";
import {IVideo} from "../interfaces/cmsQueries/objects/IVideo";
import styles from "../css/Video.module.css"

const Video: React.FC<IVideo> = (props: IVideo) => {
    return (
        <div className={styles.video}>
            {props.name && <span className={styles.title}>{props.name}</span>}
            <iframe className={styles.content} src={`https://www.youtube.com/embed/${props.id}`} allow="autoplay" allowFullScreen={true}></iframe>
        </div>
    )
}

export default Video