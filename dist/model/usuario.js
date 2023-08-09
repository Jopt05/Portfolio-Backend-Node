"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    user_name: {
        type: String,
        required: [
            true,
            "El nombre de usuario es obligatorio"
        ],
    },
    password: {
        type: String,
        required: [
            true,
            "La contraseña es obligatoria"
        ]
    },
    correo: {
        type: String,
        required: [
            true,
            "El correo es obligatorio"
        ]
    }
});
exports.Usuario = (0, mongoose_1.model)('Usuario', UsuarioSchema);
