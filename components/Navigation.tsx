import Link from 'next/link'
import styles from "../css/Navigation.module.css"
import React, { useState } from "react";
import { INavigationLink } from '../interfaces/INavigationLink';
import { NavigationLink } from './NavigationLink';

export type NavigationProps = {
    links: INavigationLink[]
}

const Navigation = ({ links }: NavigationProps) => {
    const [mobileLinksShown, setMobileLinksShown] = useState<boolean>(false);

    const toggleMobileLinksShown = () => {
        setMobileLinksShown(!mobileLinksShown)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.hamburger} onClick={toggleMobileLinksShown}>
                <div className={styles.hamburgerLine} />
                <div className={styles.hamburgerLine} />
                <div className={styles.hamburgerLine} />
            </div>
            <nav className={`${styles.nav} ${mobileLinksShown ? styles.navShown : ""}`}>
                {
                    links.map((link, index) => {
                        return (
                            <NavigationLink
                                key={`navLink${index}`}
                                name={link.name}
                                url={link.url}
                                dropdown={link.dropdown}
                            />
                        )
                    })
                }
            </nav>
        </div>
    )
}

export default Navigation