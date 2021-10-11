import Navigation from "./Navigation";
import Link from "next/link";
import React, { FC } from "react"
import styles from "../css/Header.module.css"
import { INavigationLink } from "../interfaces/INavigationLink";

export type HeaderProps = {
    logo: string
    title: string
    links: INavigationLink[]
}

const Header: FC<HeaderProps> = ({ logo, title, links }: HeaderProps) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link href={"/"}>
                    <div className={styles.logo}>
                        <img className={styles.img} src={logo} alt={"logo"} />
                        <div className={styles.title}>{title}</div>
                    </div>
                </Link>
                <Navigation links={links} />
            </header>
        </div>
    )
}

export default Header