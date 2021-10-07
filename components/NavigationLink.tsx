import Link from 'next/link'
import React, { useState } from 'react'
import { INavigationLink } from '../interfaces/INavigationLink'
import { Dropdown } from './Dropdown'
import styles from "../css/NavigationLink.module.css"

export type NavigationLinkProps = {
    url: string
    name: string
    dropdown?: INavigationLink[]
}

export function NavigationLink({ url, name, dropdown }: NavigationLinkProps) {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    function onMouseEnter() {
        setShowDropDown(true)
    }

    function onMouseLeave() {
        setShowDropDown(false)
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link href={url}>
                <a className={styles.link}>
                    <div className={styles.linkName}>{name}</div>
                    {dropdown && showDropDown && <Dropdown links={dropdown} />}
                </a>
            </Link>
        </div>
    )
}