import Proxy from "../hooks/useProxy"
import Link from 'next/link'

const Navigation = () => {
    const data = Proxy.getNavigationLinks()
    return (
        <nav>
            {
                data.map(entry => <Link href={entry.url}><a>{entry.name}</a></Link>)
            }
        </nav>
    )
}

export default Navigation