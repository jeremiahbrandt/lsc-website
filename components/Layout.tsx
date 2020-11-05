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
                <title>Lutheran Student Center | {title}</title>
                <link rel="icon" href="/favicon.ico" />
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