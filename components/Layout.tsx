import Footer from "./Footer"
import Header from "./Header";
import Head from "next/head";

const Layout:React.FC<{title: string}> = ({children, title}) => {
    return (
        <div className={"layout"}>
            <Header />
            <Head>
                <title>Lutheran Student Center | {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"main-wrapper"}>
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout