const { response, request } = require('express');

const Proyecto = require('../model/proyecto');

async function proyectosGet( req = request, res = response ) {

    const proyectos = await Proyecto
        .find({
            project_state: true
        })
        .populate({
            path: "project_tecnologies",
            select: "tech_name",
            match: {
                state: true
            }
        });

    res.status(200).json({
        projects: proyectos,
        msg: 'Proyectos obtenidos correctamente'
    });

};

async function proyectosPost( req = request, res = response ) {

    const {
        project_name,
        project_description,
        project_tecnologies,
        project_topic,
        project_url
    } = req.body;

    const proyecto = new Proyecto({
        project_name,
        project_description,
        project_tecnologies,
        project_topic,
        project_url
    });

    await proyecto.save();

    res.status(201).json({
        msg: "Proyecto creado correctamente",
        proyecto
    })

};

async function proyectosDelete( req = request, res = response ) {

    const {
        id
    } = req.params;

    const proyecto = await Proyecto.findByIdAndUpdate(
        id, 
        {
            project_state: false
        }
    );

    return res.status(200).json({
        msg: "Proyecto actualizado correctamente",
        proyecto
    });

};

module.exports ={
    proyectosGet,
    proyectosPost,
    proyectosDelete
}