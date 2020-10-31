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
                        <span id={"street-address"}>
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
                        <svg>
                            <rect fill="#3B5998" width="36" height="36"/>
                            <path fill="#FFFFFF" d="M30.895,16.535l-0.553,5.23h-4.181v15.176h-6.28V21.766H16.75v-5.23h3.131v-3.149
	c0-4.254,1.768-6.796,6.796-6.796h4.181v5.23h-2.615c-1.952,0-2.081,0.736-2.081,2.1v2.615H30.895z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="copyright">Copyright &copy; {new Date().getFullYear()} Lutheran Student Center</div>
        </footer>
    )
}

export default Footer