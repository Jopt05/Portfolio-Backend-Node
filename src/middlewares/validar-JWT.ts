import { request, response } from 'express';
import { Usuario } from '../model/usuario';
import * as jwt from 'jsonwebtoken'

export const validarJWT = async( req = request, res = response, next: any ) => {
    
    const token = req.header('x-token');

    if( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion',
        })
    }

    // Es algo engañoso así que usamos trycatch 
    try {

        const { _id }: any = jwt.verify( token, process.env.SECRET_JWT || '' );

        console.log({_id})

        const user = await Usuario.findById( _id );

        if( !user ) {
            return res.status(401).json({
                msg: 'Token no válido - Usuario no existe en DB'
            })
        }
        
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no válido'
        })
    }

}