import React from "react";
import {IBiography} from "../interfaces/cmsQueries/objects/IBiography";
import Biography from "./Biography";
import styles from "../css/Biographies.module.css"

const Biographies: React.FC<{biographies:  IBiography[], aboutPageTitle: string}> = ({biographies,aboutPageTitle}) => {
    return (
        <div>
            <div className={styles.title}>
                {aboutPageTitle}
            </div>
            <div>
                {
                    biographies.map((biography, index) => <Biography key={`biography${index}`} {...biography} />)
                }
            </div>
        </div>
    )
}

export default Biographies