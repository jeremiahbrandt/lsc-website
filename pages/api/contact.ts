import {sendEmail} from "../../lib/email";
import {IEmailMessage} from "../../interfaces/IEmalMessage";

export default async function handler(req, res) {
    let email: IEmailMessage = {
        title: "Some email title",
        body: req.query
    }

    sendEmail(email).then(res.redirect("/"))
}