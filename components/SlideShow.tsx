import Proxy from "../hooks/useDevelopmentProxy";
import React from "react";

const Slideshow = () => {
    const data = Proxy().getSlideshowFiles()

    return (
        <div className={"slideshow"}>
            <div className={"viewport"}>
                {
                    data.map((item, index) => <img className={"slide"} src={item.src} alt={item.alt} />)
                }
            </div>
        </div>
    )
}

export default Slideshow