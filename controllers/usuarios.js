const { response } = require('express')

const usuariosGet = (req, res) =>{

    const {usuario,pass,token} = req.query;
    res.json({
        msj: 'get Api - controladors',
        usuario,
        pass,
        token

    });
}

const usuariosPost = (req, res) =>{

    const {nombre,edad} = req.body;

    res.json({
        msj: 'usuariosPost Api - controladors',
        nombre,
        edad
    });
}
const usuariosPut = (req, res) =>{
    const id = req.params.id;
    res.json({
        msj: 'usuariosPut Api - controladors',
        id
    });
}
const usuariosPatch = (req, res) =>{
    res.json({
        msj: 'usuariosPatch Api - controladors'
    });
}
const usuariosDelete = (req, res) =>{
    res.json({
        msj: 'usuariosDelete Api - controladors'
    });
}


module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}