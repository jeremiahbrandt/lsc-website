import React, {FC} from "react";
import {IConfig} from "../interfaces/cmsQueries/pages/IConfig";
import styles from "../css/Footer.module.css"
import AlertSignup from "./AlertSignup";

const Footer:FC<IConfig> = (config) => {


    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.contactInformation}>
                    <span className={styles.phoneEmail} >
                        <a href={`tel:${config.phoneNumber}`} className={styles.link}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/> </svg>
                            <span>{config.phoneNumber}</span>
                        </a>
                        <a href={`mailto:${config.emailAddress}`} className={styles.link}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/> <polyline points="22,6 12,13 2,6"/> </svg>
                            <span>{config.emailAddress}</span>
                        </a>
                    </span>
                    <span className={styles.address}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/> <circle cx="12" cy="10" r="3"/> </svg>
                        <span className={styles.streetAddress}>
                            <span>{config.address.addressLineOne}</span>
                            <span>{config.address.addressLineTwo}</span>
                            <span>{config.address.city} {config.address.state}, {config.address.zipCode}</span>
                        </span>
                    </span>
                </div>
                <AlertSignup />
                <div className={styles.socialMediaLinks}>
                    {
                        config.socialMediaLinks.map((link, index) => <a key={`socialMediaLink${index}`} href={link.url}><img src={link.image} className={styles.socialMediaImg}  alt={"The logo."}/></a>)
                    }
                </div>
            </div>
            <div className={styles.copyright}>Copyright &copy; {new Date().getFullYear()} {config.siteTitle}</div>
        </footer>
    )
}

export default Footer