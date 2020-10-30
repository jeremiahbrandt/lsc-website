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
                    <span className={"phone"}>Phone: {data.phone}</span>
                    <span className={"email"}>Email: {data.email}</span>
                    <span className={"address"}>
                        <span>{data.address.addressNumber} {data.address.street}</span>
                        <span>{data.address.city} {data.address.state}, {data.address.zip}</span>
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
            </div>
            <div className="copyright">Copyright &copy; {new Date().getFullYear()} Lutheran Student Center</div>
        </footer>
    )
}

export default Footer