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
const cors = require("cors");
const express = require("express");
const proyectos_1 = require("../routes/proyectos");
const servicios_1 = require("../routes/servicios");
const tecnologias_1 = require("../routes/tecnologias");
const usuarios_1 = require("../routes/usuarios");
const mailer_1 = require("../routes/mailer");
const config_1 = require("../database/config");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8000";
        this.proyectosPath = '/api/proyectos';
        this.tecnologiasPath = '/api/tecnologias';
        this.serviciosPath = '/api/servicios';
        this.emailPath = '/api/mail';
        this.usuariosPath = '/api/usuarios';
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    routes() {
        this.app.use(this.proyectosPath, proyectos_1.default);
        this.app.use(this.tecnologiasPath, tecnologias_1.default);
        this.app.use(this.serviciosPath, servicios_1.default);
        this.app.use(this.emailPath, mailer_1.default);
        this.app.use(this.usuariosPath, usuarios_1.default);
    }
    listem() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}
exports.default = Server;
