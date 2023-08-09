
import { Request, Response } from 'express';
import { Tecnologia } from '../model/tecnologia';

export async function tecnologiasGet( req: Request, res: Response ) {

    const tecnologias = await Tecnologia.find();

    res.status(200).json({
        proyectos: tecnologias,
        msg: 'Tecnologias obtenidos correctamente'
    });

};

export async function tecnologiasPost( req: Request, res: Response ) {

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

export async function tecnologiasDelete( req: Request, res: Response ) {

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
        msg: "Tecnología eliminada correctamente",
        tecnologia
    });

}

export async function tecnologiasPut( req: Request, res: Response ) {

    const {
        id
    } = req.params;

    const {
        tech_name,
        state
    } = req.body;

    const tecnologia = await Tecnologia.findByIdAndUpdate(id, { tech_name, state });

    res.status(200).json({
        id,
        msg: "Tecnología actualizada correctamente"
    });

};