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
exports.serviciosPut = exports.serviciosDelete = exports.serviciosPost = exports.serviciosGet = void 0;
const servicio_1 = require("../model/servicio");
function serviciosGet(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const servicios = yield servicio_1.Servicio
            .find();
        res.status(200).json({
            services: servicios,
            msg: 'Servicios obtenidos correctamente'
        });
    });
}
exports.serviciosGet = serviciosGet;
;
function serviciosPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { service_name, service_description, service_topic, service_image } = req.body;
        const servicio = new servicio_1.Servicio({
            service_name,
            service_description,
            service_topic,
            service_image
        });
        yield servicio.save();
        res.status(201).json({
            msg: "Servicio creado correctamente",
            servicio
        });
    });
}
exports.serviciosPost = serviciosPost;
;
function serviciosDelete(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const servicio = yield servicio_1.Servicio.findByIdAndUpdate(id, {
            service_state: false
        });
        return res.status(200).json({
            msg: "Servicio actualizado correctamente",
            servicio
        });
    });
}
exports.serviciosDelete = serviciosDelete;
;
function serviciosPut(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { service_name, service_description, service_topic, service_image, service_state } = req.body;
        const servicio = yield servicio_1.Servicio.findByIdAndUpdate(id, {
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
    });
}
exports.serviciosPut = serviciosPut;
