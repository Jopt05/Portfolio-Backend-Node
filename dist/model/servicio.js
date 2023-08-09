"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const mongoose_1 = require("mongoose");
const SERVICE_TOPICS = [
    0,
    1
];
const ServicioSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.Number,
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
exports.Servicio = (0, mongoose_1.model)('Servicio', ServicioSchema);
