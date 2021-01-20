import React, {useState} from "react"
import styles from "../css/AlertSignup.module.css"

const AlertSignup = () => {
    const [selection, setSelection] = useState("email");

    const handleSelectionChange  = (e: React.FormEvent<HTMLSelectElement>) => {
        setSelection(e.currentTarget.value)
    }

    return (
        <form className={styles.form} action="/api/contact">
            <div className={styles.title}>Sign Up to Receive Updates</div>
            <div className={styles.inputs}>
                <select className={styles.select} onChange={handleSelectionChange}>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                </select>
                {selection=="email" && <input className={styles.input} type="email" name="email address" />}
                {selection=="sms" && <input className={styles.input} type="tel" name="phone number" />}
            </div>
            <input className={styles.submit} type="submit" value="Sign Up" />
        </form>
    )
}

export default AlertSignup