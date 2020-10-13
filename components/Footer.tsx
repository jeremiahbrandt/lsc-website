import React from "react";
import { useState } from "react"

const Footer = () => {
    const [selection, setSelection] = useState("email");

    const handleSelectionChange  = (e: React.FormEvent<HTMLSelectElement>) => {
        setSelection(e.currentTarget.value)
    }

    return (
        <footer>
            <div className="alert-signup">
                <h1>Sign Up to Receive Updates</h1>
                <form action="">
                    {selection=="email" && <label htmlFor="signup-email">Email: </label>}
                    {selection=="email" && <input type="email" name="signup-email" />}
                    {selection=="sms" && <label htmlFor="signup-phone">Phone: </label>}
                    {selection=="sms" && <input type="tel" name="signup-phone" />}
                    <select name="cars" id="cars" onChange={handleSelectionChange}>
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                    </select>
                </form>
            </div>
            <div className="copyright">&copy; {new Date().getFullYear()} Lutheran Student Center</div>
        </footer>
    )
}

export default Footer