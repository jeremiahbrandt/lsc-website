import Footer from "./Footer"
import Header from "./Header";
import Head from "next/head";
import {IConfig} from "../interfaces/cmsQueries/pages/IConfig";
import React from "react";
import styles from "../css/Layout.module.css"

const Layout:React.FC<{title: string, config: IConfig}> = ({children, title,config}) => {
    return (
        <div className={"layout"}>
            <Header logo={config.logo} />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Lutheran Student Center | {title}</title>
                <link rel="icon" href="/favicon.ico" />

                {config.og && 
                <>
                    <meta property="og:title" content={config.og.title} />
                    <meta property="og:type" content={config.og.type} />
                    <meta property="og:url" content={config.og.url} />
                    <meta property="og:image" content={config.og.image} />
                    <meta property="og:description" content={config.og.description} />
                </>}
            </Head>
            <div className={styles.mainWrapper}>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
            <Footer {...config} />
        </div>
    )
}

export default Layout