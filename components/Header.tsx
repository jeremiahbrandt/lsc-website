import Navigation from "./Navigation";
import Link from "next/link";
import React, {FC} from "react"
import styles from "../css/Header.module.css"

const Header:FC<{logo: string}> = ({logo}) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link href={"/"}><img className={styles.img} src={logo} alt={"logo"} /></Link>
                <Navigation />
            </header>
        </div>
    )
}

export default Header