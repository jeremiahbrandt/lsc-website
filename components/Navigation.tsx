import Proxy from "../hooks/useProxy"
import styles from "./"

const Navigation = () => {
    const data = Proxy().getNavigationLinks()
    return (
        <nav>
            {
                data.map(entry => <a href={entry.url}>{entry.name}</a>)
            }
        </nav>
    )
}

export default Navigation