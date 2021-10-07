import Link from 'next/link'
import styles from "../css/Dropdown.module.css"

import { INavigationLink } from "../interfaces/INavigationLink"

export type DropdownProps = {
    links: INavigationLink[]
}

export function Dropdown({ links }: DropdownProps) {
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdownContent}>
                {links.map((link, index) => {
                    return (
                        <Link key={`navLink${index}`} href={link.url}>
                            <a className={styles.link}>{link.name}</a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}