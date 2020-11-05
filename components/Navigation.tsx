import Link from 'next/link'
import {getNavigationLinks} from "../lib/navigation";

const Navigation = () => {
    const links = getNavigationLinks()
    return (
        <nav>
            {
                links.map(entry => <Link href={entry.url}><a>{entry.name}</a></Link>)
            }
        </nav>
    )
}

export default Navigation