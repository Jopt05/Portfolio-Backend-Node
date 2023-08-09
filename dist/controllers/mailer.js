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
exports.mailerPost = void 0;
const nodemailer_1 = require("../model/nodemailer");
function mailerPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const mailer = new nodemailer_1.NodeMailer();
        const { name, email, message } = req.body;
        const fueEnviado = yield mailer.sendEmail(`${email} - ${name}`, message);
        if (!fueEnviado) {
            return res.status(200).json({
                ok: false
            });
        }
        return res.status(200).json({
            ok: true
        });
    });
}
exports.mailerPost = mailerPost;
;
