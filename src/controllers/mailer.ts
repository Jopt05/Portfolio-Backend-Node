import { Request, Response } from "express";
import { NodeMailer } from "../model/nodemailer";

export async function mailerPost( req: Request, res: Response ) {

    const mailer = new NodeMailer();

    const {
        name,
        email,
        message 
    } = req.body;

    const fueEnviado = await mailer.sendEmail(
        `${email} - ${name}`,
        message
    );

    if( !fueEnviado ) {
        return res.status(200).json({
            ok: false
        })
    }

    return res.status(200).json({
        ok: true
    })
};