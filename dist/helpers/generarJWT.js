"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
function generarJWT(uuid = '') {
    return new Promise(function (resolve, reject) {
        const payload = { uuid };
        jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: '4h'
        }, function (err, token) {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token");
            }
            else {
                resolve(token);
            }
        });
    });
}
exports.default = generarJWT;
