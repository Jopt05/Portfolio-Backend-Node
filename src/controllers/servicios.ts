import { Request, Response } from 'express';

import { IServicio } from '../@types';
import { Servicio } from '../model/servicio';

export async function serviciosGet( req: Request, res: Response ) {

    const servicios: IServicio[] = await Servicio
        .find();

    res.status(200).json({
        services: servicios,
        msg: 'Servicios obtenidos correctamente'
    });

};

export async function serviciosPost( req: Request, res: Response ) {

    const {
        service_name,
        service_description,
        service_topic,
        service_image
    } = req.body;

    const servicio: IServicio = new Servicio({
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

export async function serviciosDelete( req: Request, res: Response ) {

    const {
        id
    } = req.params;

    const servicio: IServicio | null = await Servicio.findByIdAndUpdate(
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

export async function serviciosPut( req: Request, res: Response ) {

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

    const servicio: IServicio | null = await Servicio.findByIdAndUpdate(id, {
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