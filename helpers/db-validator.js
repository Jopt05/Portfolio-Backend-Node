const Role = require('../model/role');
const Usuario = require('../model/usuario');



const esRolValido = async(rol = '' )=>{
    const existeRol = await Role.findOne({ rol });
    if( !existeRol ){
        throw new Error(`El rol: ${ rol } no existe en la BD`);
    }
}

const Emailxite  = async( correo = '' ) =>{
    //verificar si el correo exist
    const exiteEmail = await Usuario.findOne({ correo });
    if(exiteEmail){
        throw new Error(`Ese correo: ${correo}, ya esta registrado`);
    }
}

const existeUsuarioPorId  = async( id  ) =>{
    //verificar si el correo exist
    const existeUsuario = await Usuario.findById( id );
    if(!existeUsuario){
        throw new Error(`El Id no existe: ${id}`);
    }
}

module.exports = {
    esRolValido,
    Emailxite,
    existeUsuarioPorId
};