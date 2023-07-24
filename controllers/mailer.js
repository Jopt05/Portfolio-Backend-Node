const { response, request } = require('express');

const NodeMailer = require("../model/nodemailer");

async function mailerPost( req = request, res = response ) {

    const mailer = new NodeMailer;

    const {
        name,
        email,
        message 
    } = req.body;

    const fueEnviado = await mailer.sendEmail(
        `${email} - ${name}`,
        message
    );

    if( fueEnviado ) {
        res.json({
            ok: true,
        })
    } else {
        res.json({
            ok: false
        })
    }

};

module.exports = {
    mailerPost
}