
const { Schema,model} = require('mongoose');

const RoleSchema = Schema({
    rol:{
        type:String,
        required: [true.valueOf, 'El rol es obligatorio']
    },
});

module.exports = model('Role',RoleSchema);