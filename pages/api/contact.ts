import nodemailer from "nodemailer"
import {getEmailCredentials} from "../../lib/api";

export default async function handler(req, res) {
    let {emailSenderAddress, emailSenderPassword} = await getEmailCredentials()

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailSenderAddress,
            pass: emailSenderPassword
        }
    });

    let mailOptions = {
        from: emailSenderAddress,
        to: emailSenderAddress,
        subject: 'LSC Website Contact Form',
        text: 'This is the message...'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.redirect("/")
}