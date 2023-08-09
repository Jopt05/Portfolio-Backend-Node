"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectosPut = exports.proyectosDelete = exports.proyectosPost = exports.proyectosGet = void 0;
const proyecto_1 = require("../model/proyecto");
function proyectosGet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const proyectos = yield proyecto_1.Proyecto
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
    });
}
exports.proyectosGet = proyectosGet;
;
function proyectosPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { project_name, project_description, project_tecnologies, project_topic, project_url } = req.body;
        const proyecto = new proyecto_1.Proyecto({
            project_name,
            project_description,
            project_tecnologies,
            project_topic,
            project_url
        });
        yield proyecto.save();
        res.status(201).json({
            msg: "Proyecto creado correctamente",
            proyecto
        });
    });
}
exports.proyectosPost = proyectosPost;
;
function proyectosDelete(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const proyecto = yield proyecto_1.Proyecto.findByIdAndUpdate(id, {
            project_state: false
        });
        return res.status(200).json({
            msg: "Proyecto actualizado correctamente",
            proyecto
        });
    });
}
exports.proyectosDelete = proyectosDelete;
;
function proyectosPut(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { project_name, project_description, project_tecnologies, project_topic, project_state, project_url } = req.body;
        yield proyecto_1.Proyecto.findByIdAndUpdate(id, {
            project_name,
            project_description,
            project_tecnologies,
            project_topic,
            project_state,
            project_url
        });
        res.status(200).json({
            msg: "Proyecto actualizado correctamente",
            id
        });
    });
}
exports.proyectosPut = proyectosPut;
