const { response, request } = require('express');

const Tecnologia = require('../model/tecnologia');

async function tecnologiasGet( req = request, res = response ) {

    const tecnologias = await Tecnologia.find();

    res.status(200).json({
        proyectos: tecnologias,
        msg: 'Tecnologias obtenidos correctamente'
    });

};

async function tecnologiasPost( req = request, res = response ) {

    const {
        tech_name
    } = req.body;

    const tecnologia = new Tecnologia({
        tech_name
    });

    await tecnologia.save();

    res.status(201).json({
        msg: "Tecnología creada",
        tecnologia
    });

}

async function tecnologiasDelete( req = request, res = response ) {

    const {
        id
    } = req.params;

    const tecnologia = await Tecnologia.findByIdAndUpdate(
        id, 
        {
            state: false
        }
    );

    return res.status(200).json({
        msg: "Tecnología actualizada correctamente",
        tecnologia
    });

}

module.exports ={
    tecnologiasGet,
    tecnologiasPost,
    tecnologiasDelete
}