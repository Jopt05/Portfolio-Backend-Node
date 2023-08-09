import { Schema, model } from 'mongoose';
import { IServicio } from '../@types';

const TecnologiaSchema = new Schema<IServicio>({
    tech_name: {
        type: String,
        required: [
            true,
            "El nombre de la tecnología es obligatorio."
        ]
    },
    state: {
        type: Boolean,
        default: true,
    }
});

export const Tecnologia = model<IServicio>('Tecnologia', TecnologiaSchema);