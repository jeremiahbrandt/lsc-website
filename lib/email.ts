import {getEmailCredentials} from "./api";
import {IEmailMessage} from "../interfaces/IEmalMessage";
import nodemailer from "nodemailer"

export async function sendEmail(message: IEmailMessage): Promise<number> {
    let {emailSenderAddress, emailSenderPassword} = await getEmailCredentials()

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailSenderAddress,
            pass: emailSenderPassword
        }
    });

    let time = new Date().toLocaleString()

    let html = `<i>${time}</i><br /><br />`;

    for (var propName in message.body) {
        if (message.body.hasOwnProperty(propName)) {
            html += `<b>${propName}</b>: ${message.body[propName]}<br />`;
        }
    }

    let mailOptions = {
        from: emailSenderAddress,
        to: emailSenderAddress,
        subject: message.title,
        html: html
    };

    return transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return 400;
        } else {
            return 200;
        }
    });
}