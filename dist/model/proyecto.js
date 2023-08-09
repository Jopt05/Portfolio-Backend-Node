"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proyecto = void 0;
const mongoose_1 = require("mongoose");
const PROJECT_TOPICS = [
    0,
    1,
    2,
    3
];
const ProyectoSchema = new mongoose_1.Schema({
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
        type: [mongoose_1.Schema.Types.ObjectId],
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
exports.Proyecto = (0, mongoose_1.model)('Proyecto', ProyectoSchema);
