import Link from 'next/link'

const Navigation = () => {
    /*TODO: Fix links */
    const data =[]
    return (
        <nav>
            {
                data.map(entry => <Link href={entry.url}><a>{entry.name}</a></Link>)
            }
        </nav>
    )
}

export default Navigation