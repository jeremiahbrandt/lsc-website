import {sendEmail} from "../../lib/email";
import {IEmailMessage} from "../../interfaces/IEmalMessage";

export default async function handler(req, res) {
    let email: IEmailMessage = {
        title: "LSC Web Contact Form",
        body: req.query
    }

    sendEmail(email).then(res.redirect("/"))
}