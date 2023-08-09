"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailer = void 0;
const nodemailer = require("nodemailer");
class NodeMailer {
    constructor() {
        this.transporter = null,
            this.createTransport();
    }
    createTransport() {
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE_MAILER,
            auth: {
                user: process.env.USER_MAILER,
                pass: process.env.PASS_MAILER
            },
        });
        this.transporter = transporter;
    }
    ;
    sendEmail(subject, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                from: process.env.EMAIL_MAILER,
                to: process.env.DESTINY_MAILER,
                subject: subject,
                text: text
            };
            const response = yield new Promise((resolve, reject) => {
                this.transporter.sendMail(options, (error, info) => {
                    if (error) {
                        reject(false);
                    }
                    else {
                        resolve(true);
                    }
                });
            });
            return response;
        });
    }
}
exports.NodeMailer = NodeMailer;
