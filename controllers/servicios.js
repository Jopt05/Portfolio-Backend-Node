const { response, request } = require('express');

const Servicio = require("../model/servicio");

async function serviciosGet( req = request, res = response ) {

    const servicios = await Servicio
        .find({
            service_state: true
        });

    res.status(200).json({
        services: servicios,
        msg: 'Servicios obtenidos correctamente'
    });

};

async function serviciosPost( req = request, res = response ) {

    const {
        service_name,
        service_description,
        service_topic,
        service_image
    } = req.body;

    const servicio = new Servicio({
        service_name,
        service_description,
        service_topic,
        service_image
    });

    await servicio.save();

    res.status(201).json({
        msg: "Servicio creado correctamente",
        servicio
    })

};

async function serviciosDelete( req = request, res = response ) {

    const {
        id
    } = req.params;

    const servicio = await Servicio.findByIdAndUpdate(
        id, 
        {
            service_state: false
        }
    );

    return res.status(200).json({
        msg: "Servicio actualizado correctamente",
        servicio
    });

};

async function serviciosPut( req = request, res = response ) {

    const {
        id
    } = req.params;

    const {
        service_name,
        service_description,
        service_topic,
        service_image,
        service_state
    } = req.body;

    const servicio = await Servicio.findByIdAndUpdate(id, {
        service_name,
        service_description,
        service_topic,
        service_image,
        service_state
    });

    res.status(200).json({
        id,
        msg: "Servicio actualizado correctamente"
    });

}

module.exports = {
    serviciosGet,
    serviciosPost,
    serviciosDelete,
    serviciosPut
}