import nodemailer = require('nodemailer');

export class NodeMailer {

    public transporter: any;

    constructor(){
        this.transporter = null,
        this.createTransport();
    }

    createTransport(){
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE_MAILER,
            auth: {
                user: process.env.USER_MAILER,
                pass: process.env.PASS_MAILER
            },
        });

        this.transporter = transporter;
    };

    async sendEmail(subject: string, text: string) {
        const options = {
            from : process.env.EMAIL_MAILER, 
            to: process.env.DESTINY_MAILER, 
            subject: subject, 
            text: text
        }

        const response = await new Promise((resolve, reject) => {
            this.transporter.sendMail(options, (error: any, info: any) => {
                if(error) {
                    reject(false);
                } else {
                    resolve(true);
                }
            })
        });

        return response;
    }

}