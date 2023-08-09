import { Request, Response } from 'express';
import generarJWT from '../helpers/generarJWT';
import jwt = require('jsonwebtoken');
import { Usuario } from '../model/usuario';

interface IToken {
    _id: string;
}

export async function login( req: Request, res: Response ) {

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

export async function auth( req: Request, res: Response ) {

    const {
        token
    } = req.body;

    try {

        const payload = jwt.verify( token, process.env.SECRET_JWT || "hola" );

        res.status(200).json({
            "msg": "Token validado correctamente",
            _id: (payload as IToken)._id
        })
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            "msg": "Token no válido"
        });
    }

};