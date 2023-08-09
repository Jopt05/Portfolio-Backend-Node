const jwt = require('jsonwebtoken');

function generarJWT(uuid = '') {

    return new Promise( function(resolve, reject) {
        const payload = { uuid };

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