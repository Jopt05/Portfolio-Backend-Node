import { Schema, model } from 'mongoose';
import { ITecnologia } from '../@types';

const TecnologiaSchema = new Schema<ITecnologia>({
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

export const Tecnologia = model<ITecnologia>('Tecnologia', TecnologiaSchema);