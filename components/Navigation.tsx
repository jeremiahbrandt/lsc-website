import Proxy from "../hooks/useProxy"

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