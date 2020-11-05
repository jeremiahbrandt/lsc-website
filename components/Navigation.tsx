import Link from 'next/link'
import {getNavigationLinks} from "../lib/navigation";

const Navigation = () => {
    const links = getNavigationLinks()
    return (
        <nav>
            {
                links.map((link, index) => <Link key={`navLink${index}`} href={link.url}><a>{link.name}</a></Link>)
            }
        </nav>
    )
}

export default Navigation