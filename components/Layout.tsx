import Footer from "./Footer"
import Header from "./Header";
import Head from "next/head";
import {IConfig} from "../interfaces/IConfig";
import React from "react";

const Layout:React.FC<{title: string, config: IConfig}> = ({children, title}, config: IConfig) => {
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