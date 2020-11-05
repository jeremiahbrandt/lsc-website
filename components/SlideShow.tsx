import { Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import React from "react";
import styles from "../css/Slideshow.module.css"

const Slideshow: React.FC<{ imageUrls: string[] }> = ({imageUrls}) => {
    return (
        <div className={styles.slideshow}>
            <Fade scale={0.4} transitionDuration={1500}>
                {imageUrls.map((url, index) => {
                    return (
                        <div className="each-slide" key={`slide${index}`}>
                            <div style={{
                                'backgroundImage': `url(${url})`,
                                "height": "500px"
                            }}>
                            </div>
                        </div>

                    )
                })}
            </Fade>
        </div>
    )
}

export default Slideshow