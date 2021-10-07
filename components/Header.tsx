import Navigation from "./Navigation";
import Link from "next/link";
import React, { FC } from "react"
import styles from "../css/Header.module.css"

export type HeaderProps = {
    logo: string
    title: string
}

const Header: FC<HeaderProps> = ({ logo, title }: HeaderProps) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link href={"/"}>
                    <div className={styles.logo}>
                        <img className={styles.img} src={logo} alt={"logo"} />
                        <div className={styles.title}>{title}</div>
                    </div>
                </Link>
                <Navigation />
            </header>
        </div>
    )
}

export default Header