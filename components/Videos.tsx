import React from "react"
import {IVideo} from "../interfaces/cmsQueries/objects/IVideo";
import Video from "./Video";
import styles from "../css/Videos.module.css"

const Videos: React.FC<{videos: IVideo[], sectionTitle: string}> = ({videos, sectionTitle})  => {
    return (
        <div className={styles.videos}>
            {
                videos.map((video, index) => <Video {...video} key={`video${index}`}/>)
            }
        </div>
    )
}

export default Videos