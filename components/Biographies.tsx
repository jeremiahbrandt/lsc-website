import React from "react";
import { IBiography } from "../interfaces/cmsQueries/objects/IBiography";
import Biography from "./Biography";
import styles from "../css/Biographies.module.css"

export type BiographyProps = {
    biographySections: { biographies: IBiography[], title }[],
    aboutPageTitle: string
}

export default function BiographyProps({ aboutPageTitle, biographySections }: BiographyProps) {
    let biographyCount = 0

    return (
        <div>
            <div className={styles.title}>
                {aboutPageTitle}
            </div>
            <div>
                {
                    biographySections.map((biographySection, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.title}>
                                    {biographySection.title}
                                </div>
                                <div className={styles.biographies} id={biographySection.title.replace(/\s+/g, "-").toLowerCase()}>
                                    {biographySection.biographies.map((biography, index) => <Biography key={index} imageAlignment={biographyCount++ % 2 === 0 ? 'left' : 'right'} {...biography} />)}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}