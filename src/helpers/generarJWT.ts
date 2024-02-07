const jwt = require('jsonwebtoken');

function generarJWT(_id = '') {

    return new Promise( function(resolve, reject) {
        const payload = { _id };

        console.log({payload})

        jwt.sign( payload, process.env.SECRET_JWT, {
            expiresIn: '4h'
        }, function( err: any, token: any ) {

            if( err ) {
                console.log(err);
                reject( "No se pudo generar el token" );
            } else {
                resolve(token);
            }

        } );
    } );

}

export default generarJWT;