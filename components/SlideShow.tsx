import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import React from "react";

const Slideshow: React.FC<{ imageUrls: {imageUrl: string}[] }> = ({imageUrls}: {imageUrls: {imageUrl: string}[]}) => {
    return (
        <div>
            <Slide easing="ease">
                {imageUrls.map((data, index) => {
                    return (
                        <div className="each-slide" key={`slide${index}`}>
                            <div style={{
                                'backgroundImage': `url(${data.imageUrl})`,
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