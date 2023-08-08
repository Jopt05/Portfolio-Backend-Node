const { Schema,model} = require('mongoose');

const TecnologiaSchema = Schema({
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

module.exports = model('Tecnologia', TecnologiaSchema);