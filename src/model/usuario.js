const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
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

module.exports = model('Usuario', UsuarioSchema);