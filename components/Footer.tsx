import React from "react";
import { useState } from "react"
import Proxy from "../hooks/useProxy";

const Footer = () => {
    const data = Proxy.getFooterProps()

    const [selection, setSelection] = useState("email");

    const handleSelectionChange  = (e: React.FormEvent<HTMLSelectElement>) => {
        setSelection(e.currentTarget.value)
    }

    return (
        <footer>
            <div className={"footer-top"}>
                <div className={"contact-information"}>
                    <span className={"contact-item"} id={"phoneEmail"}>
                        <a href={`tel:${data.phone}`} className={"footer-link"} id={"phone"}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> </svg>
                            <span>{data.phone}</span>
                        </a>
                        <a href={`mailto:${data.email}`} className={"footer-link"} id={"email"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline> </svg>
                            <span>{data.email}</span>
                        </a>
                    </span>
                    <span className={"contact-item"} id={"address"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path> <circle cx="12" cy="10" r="3"></circle> </svg>
                        <span className={"street-address"}>
                            <span>{data.address.addressNumber} {data.address.street}</span>
                            <span>{data.address.city} {data.address.state}, {data.address.zip}</span>
                        </span>
                    </span>
                </div>
                <div className="alert-signup">
                    <h1>Sign Up to Receive Updates</h1>
                    <form action="">
                        <select onChange={handleSelectionChange}>
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                        </select>
                        {selection=="email" && <input type="email" name="signup-email" />}
                        {selection=="sms" && <input type="tel" name="signup-phone" />}
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
                <div className={"social-media"}>
                    <a href={data.socialMedia.facebookURL}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M302077 0H31255C14069 0 1 14068 1 31256v270822c0 17186 14068 31254 31254 31254h270822c17186 0 31254-14068 31254-31254l2-270824C333333 14068 319265 0 302079 0h-2zM187907 95783h35461V53254h-35461c-27307 0-49588 22274-49588 49618v21255h-28355v42539h28350v113412h42533V166666h35427l7094-42539h-42523v-21255c0-3848 3247-7094 7060-7094v6h2z" fill="#3b5998"/></svg>
                    </a>
                </div>
            </div>
            <div className="copyright">Copyright &copy; {new Date().getFullYear()} Lutheran Student Center</div>
        </footer>
    )
}

export default Footer