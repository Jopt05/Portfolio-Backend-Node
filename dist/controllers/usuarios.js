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
exports.auth = exports.login = void 0;
const generarJWT_1 = require("../helpers/generarJWT");
const jwt = require("jsonwebtoken");
const usuario_1 = require("../model/usuario");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user_name, password } = req.body;
        const user = yield usuario_1.Usuario.findOne({ user_name });
        if (!user) {
            return res.status(400).json({
                msg: "Usuario / Password incorrectos"
            });
        }
        ;
        const validPassword = user.password == password;
        if (!validPassword) {
            return res.status(400).json({
                msg: "Password incorrecta"
            });
        }
        ;
        const token = yield (0, generarJWT_1.default)(user.id);
        return res.status(200).json({
            msg: "Login ok",
            token: token
        });
    });
}
exports.login = login;
;
function auth(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { token } = req.body;
        try {
            const payload = jwt.verify(token, process.env.SECRET_JWT || "hola");
            res.status(200).json({
                "msg": "Token validado correctamente",
                _id: payload._id
            });
        }
        catch (error) {
            console.log(error);
            res.status(401).json({
                "msg": "Token no válido"
            });
        }
    });
}
exports.auth = auth;
;
