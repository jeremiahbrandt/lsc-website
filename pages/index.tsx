import Head from 'next/head'
import Navigation from '../components/Navigation'

export default function Home() {
    return (
        <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Navigation />
        </div>
    )
}
