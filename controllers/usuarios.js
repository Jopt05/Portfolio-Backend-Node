const { response, request } = require('express');

const Usuario = require('../model/usuario');
const generarJWT = require('../helpers/generarJWT');

async function login( req = request, res = response ) {

    const {
        user_name,
        password
    } = req.body;

    const user = await Usuario.findOne({ user_name });

    if( !user ) {
        return res.status(400).json({
            msg: "Usuario / Password incorrectos"
        });
    };

    const validPassword = user.password == password;

    if( !validPassword ) {
        return res.status(400).json({
            msg: "Password incorrecta"
        });
    };

    const token = await generarJWT(user.id);

    return res.status(200).json({
        msg: "Login ok",
        token: token
    });

};

module.exports = {
    login
}