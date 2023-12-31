import { Schema, model } from 'mongoose';
import { IUsuario } from '../@types';

const UsuarioSchema = new Schema<IUsuario>({
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

export const Usuario = model<IUsuario>('Usuario', UsuarioSchema);