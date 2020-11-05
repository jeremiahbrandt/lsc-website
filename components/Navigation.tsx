import Link from 'next/link'
import {getNavigationLinks} from "../lib/navigation"
import styles from "../css/Navigation.module.css"
import React, {useState} from "react";

const Navigation = () => {
    const links = getNavigationLinks()

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
                    links.map((link, index) => <Link key={`navLink${index}`} href={link.url}><a className={styles.link}>{link.name}</a></Link>)
                }
            </nav>
        </div>
    )
}

export default Navigation