import { Schema, model } from 'mongoose';
import { IProyecto } from '../@types';

const PROJECT_TOPICS: number[] = [
    0,
    1,
    2,
    3
]

const ProyectoSchema = new Schema<IProyecto>({
    project_name: {
        type: String,
        required: [
            true,
            "El nombre del proyecto es obligatorio"
        ]
    },
    project_description: {
        type: String,
        required: [
            true,
            "La descripción del proyecto es obligatoria"
        ]
    },
    project_tecnologies: {
        type: [Schema.Types.ObjectId],
        ref: 'Tecnologia',
        required: [
            true,
            "Las tecnologías del proyecto son obligatorias"
        ]
    },
    project_topic: {
        type: Number,
        required: [
            true,
            "El tema del proyecto es obligatorio"
        ],
        enum: PROJECT_TOPICS,
    },
    project_state: {
        type: Boolean,
        default: true
    },
    project_url: {
        type: String,
        required: [
            true,
            "El Url del proyecto es obligatorio"
        ]
    }
});

export const Proyecto =  model<IProyecto>('Proyecto', ProyectoSchema);