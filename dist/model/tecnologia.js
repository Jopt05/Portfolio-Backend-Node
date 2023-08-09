"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tecnologia = void 0;
const mongoose_1 = require("mongoose");
const TecnologiaSchema = new mongoose_1.Schema({
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
exports.Tecnologia = (0, mongoose_1.model)('Tecnologia', TecnologiaSchema);
