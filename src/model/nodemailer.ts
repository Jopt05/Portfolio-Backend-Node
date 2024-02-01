import nodemailer = require('nodemailer');

interface ICreateTransport {
    service: string;
    user: string;
    pass: string;
}

export class NodeMailer {

    public service: string;
    public user: string;
    public pass: string;
    public from: string;
    public to: string;
    public transporter: nodemailer.Transporter<nodemailer.SentMessageInfo>;

    constructor(){
        this.service = process.env.SERVICE_MAILER || "",
        this.user = process.env.USER_MAILER || "",
        this.pass = process.env.PASS_MAILER || "",
        this.from = process.env.EMAIL_MAILER || "",
        this.to = process.env.DESTINY_MAILER || "",
        this.transporter = this.createTransport({
            service: this.service,
            pass: this.pass,
            user: this.user
        })
    }

    createTransport(options: ICreateTransport){
        const transporter = nodemailer.createTransport({
            service: options.service,
            auth: {
                user: options.user,
                pass: options.pass
            },
        });

        return transporter;
    };

    async sendEmail(subject: string, text: string) {
        const options = {
            from : this.from, 
            to: this.to, 
            subject: subject, 
            text: text
        }

        const response = await new Promise((resolve, reject) => {
            this.transporter.sendMail(options, (error: any, info: any) => {
                if(error) {
                    console.log(error);
                    reject(false);
                } else {
                    resolve(true);
                }
            })
        });

        return response;
    }

}