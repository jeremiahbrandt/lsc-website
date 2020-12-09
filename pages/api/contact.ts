import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.emailFrom,
        pass: process.env.emailPassword
    }
});

let mailOptions = {
    from: process.env.emailFrom,
    to: process.env.emailTo,
    subject: 'LSC Website Contact Form',
    text: 'This was sent with environment variables'
};

export default function handler(req, res) {

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: 'John Doe' }))
}