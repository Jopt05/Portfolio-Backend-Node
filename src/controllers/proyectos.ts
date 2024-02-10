import { Request, Response } from "express";
import { Proyecto } from "../model/proyecto";
import { IProyecto } from "../@types";

export async function proyectosGet( req: Request, res: Response ) {

    const proyectos: IProyecto[] = await Proyecto
        .find()
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

export async function proyectosPost( req: Request, res: Response ) {

    const {
        project_name,
        project_description,
        project_tecnologies,
        project_topic,
        project_url
    } = req.body;

    const proyecto: IProyecto = new Proyecto({
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

export async function proyectosDelete( req: Request, res: Response ) {

    const {
        id
    } = req.params;

    const proyecto: IProyecto | null = await Proyecto.findByIdAndUpdate(
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

export async function proyectosPut( req: Request, res: Response ) {

    const {
        id
    } = req.params;

    const proyecto: IProyecto | null = await Proyecto.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        msg: "Proyecto actualizado correctamente",
        id
    });
}