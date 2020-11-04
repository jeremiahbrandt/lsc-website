import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import React from "react";

const Slideshow: React.FC<{ imageUrls: string[] }> = ({imageUrls}) => {
    return (
        <div>
            <Slide easing="ease">
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
            </Slide>
        </div>
    )
}

export default Slideshow