import { Request, Response } from 'express';
import generarJWT from '../helpers/generarJWT';
import jwt = require('jsonwebtoken');
import { Usuario } from '../model/usuario';
import { IUsuario } from '../@types';

interface IToken {
    _id: string;
}

export async function login( req: Request, res: Response ) {

    const {
        user_name,
        password
    } = req.body;

    const user: IUsuario | null = await Usuario.findOne({ user_name });

    if( user == null ) {
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

        return res.status(200).json({
            "msg": "Token validado correctamente",
            _id: (payload as IToken)._id
        })
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            "msg": "Token no válido"
        });
    }

};