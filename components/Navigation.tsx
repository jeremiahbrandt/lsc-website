import Link from 'next/link'
import {getNavigationLinks} from "../lib/navigation"
import styles from "../css/Navigation.module.css"

const Navigation = () => {
    const links = getNavigationLinks()
    return (
        <nav className={styles.nav}>
            {
                links.map((link, index) => <Link key={`navLink${index}`} href={link.url}><a className={styles.link}>{link.name}</a></Link>)
            }
        </nav>
    )
}

export default Navigation