import React, {useState} from "react"
import styles from "../css/AlertSignup.module.css"

const AlertSignup = () => {
    const [selection, setSelection] = useState("email");

    const handleSelectionChange  = (e: React.FormEvent<HTMLSelectElement>) => {
        setSelection(e.currentTarget.value)
    }

    return (
        <form className={styles.form} action="/api/alert-signup" >
            <div className={styles.title}>Sign Up to Receive Updates</div>
            <div className={styles.inputs}>
                <select className={styles.select} onChange={handleSelectionChange} required={true}>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                </select>
                {selection=="email" && <input className={styles.input} type="email" name="email address" required={true} />}
                {selection=="sms" && <input className={styles.input} type="tel" name="phone number" required={true} />}
            </div>
            <input className={styles.submit} type="submit" value="Sign Up" />
        </form>
    )
}

export default AlertSignup