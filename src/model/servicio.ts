import { Schema, model } from 'mongoose';
import { IServicio } from '../@types';

const SERVICE_TOPICS: number[] = [
    0,
    1
]

const ServicioSchema = new Schema<IServicio>({
    service_name: {
        type: String,
        required: [
            true,
            "El nombre del servicio es obligatorio"
        ]
    },
    service_description: {
        type: String,
        required: [
            true,
            "La descripción del servicio es obligatoria"
        ]
    },
    service_topic: {
        type: Schema.Types.Number,
        enum: SERVICE_TOPICS,
        required: [
            true,
            "El topic del servicio es obligatorio"
        ]
    },
    service_image: {
        type: String,
        required: [
            true,
            "La imagen del servicio es obligatoria"
        ]
    },
    service_state: {
        type: Boolean,
        default: true
    }
});

export const Servicio = model<IServicio>('Servicio', ServicioSchema);