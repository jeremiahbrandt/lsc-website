import React from "react";
import {IVideo} from "../interfaces/cmsQueries/objects/IVideo";
import styles from "../css/Video.module.css"

const Video: React.FC<IVideo> = (props: IVideo) => {
    return (
        <iframe className={styles.video} src={`https://www.youtube.com/embed/${props.id}`}></iframe>
    )
}

export default Video