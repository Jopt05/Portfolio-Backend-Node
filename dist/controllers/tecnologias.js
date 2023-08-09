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
exports.tecnologiasPut = exports.tecnologiasDelete = exports.tecnologiasPost = exports.tecnologiasGet = void 0;
const tecnologia_1 = require("../model/tecnologia");
function tecnologiasGet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tecnologias = yield tecnologia_1.Tecnologia.find();
        res.status(200).json({
            proyectos: tecnologias,
            msg: 'Tecnologias obtenidos correctamente'
        });
    });
}
exports.tecnologiasGet = tecnologiasGet;
;
function tecnologiasPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { tech_name } = req.body;
        const tecnologia = new tecnologia_1.Tecnologia({
            tech_name
        });
        yield tecnologia.save();
        res.status(201).json({
            msg: "Tecnología creada",
            tecnologia
        });
    });
}
exports.tecnologiasPost = tecnologiasPost;
function tecnologiasDelete(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const tecnologia = yield tecnologia_1.Tecnologia.findByIdAndUpdate(id, {
            state: false
        });
        return res.status(200).json({
            msg: "Tecnología eliminada correctamente",
            tecnologia
        });
    });
}
exports.tecnologiasDelete = tecnologiasDelete;
function tecnologiasPut(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { tech_name, state } = req.body;
        const tecnologia = yield tecnologia_1.Tecnologia.findByIdAndUpdate(id, { tech_name, state });
        res.status(200).json({
            id,
            msg: "Tecnología actualizada correctamente"
        });
    });
}
exports.tecnologiasPut = tecnologiasPut;
;
