const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const  Usuario = require('../model/usuario');

const usuariosGet = async(req =request, res=response) =>{

    const {limite = 5, desde =0 } = req.query;

    const query = { estado: true };

    const [total, usuarios ] = await Promise.all([
        Usuario.countDocuments( query ),
        Usuario.find(query).skip( Number( desde )).limit( Number( limite ) )
    ])

    res.json({
        total,
        usuarios
    });
}

const usuariosPost = async(req , res = response) =>{
    const { nombre,correo,password,rol } = req.body;
    const usuarios = new Usuario({nombre,correo,password,rol});

    //encriptar el password
    const salt = bcryptjs.genSaltSync();
    usuarios.password = bcryptjs.hashSync(password,salt);
    //guardar en la base
    await usuarios.save();

    res.json({
        usuarios
    });
}


const usuariosPut = async(req , res = response) =>{
    const id = req.params.id;
    const { _id, password,google,correo, ...resto } = req.body;

    //TODO: validar contra la base de datos

    if (password){
         //encriptar el password
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario
    });
}



const usuariosPatch = (req, res) =>{
    res.json({
        msj: 'usuariosPatch Api - controladors'
    });
}
const usuariosDelete =async(req, res) =>{

    const { id } =req.params;

    //delete the user
    //const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate( id, {estado: false} );

    res.json({
        usuario
    });
}


module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}