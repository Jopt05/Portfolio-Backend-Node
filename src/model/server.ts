import { Application } from 'express';
import cors = require('cors');
import express = require('express');
import proyectosRoute from '../routes/proyectos';
import serviciosRoute from '../routes/servicios';
import tecnologiasRoute from '../routes/tecnologias';
import usuariosRoute from '../routes/usuarios';
import mailerRoute from '../routes/mailer';

import { dbConnection } from '../database/config';

class Server {

    private app: Application;
    private port: string;
    private proyectosPath: string;
    private tecnologiasPath: string;
    private serviciosPath: string;
    private emailPath: string;
    private usuariosPath: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8000";
        this.proyectosPath = '/api/proyectos';
        this.tecnologiasPath= '/api/tecnologias';
        this.serviciosPath= '/api/servicios';
        this.emailPath = '/api/mail';
        this.usuariosPath = '/api/usuarios';
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    async conectarDB (){
        await dbConnection();
    }

    routes(){
       this.app.use( this.proyectosPath, proyectosRoute);
       this.app.use( this.tecnologiasPath, tecnologiasRoute);
       this.app.use( this.serviciosPath, serviciosRoute);
       this.app.use( this.emailPath, mailerRoute);
       this.app.use( this.usuariosPath, usuariosRoute);
    }

    listem(){
        this.app.listen( this.port,()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

export default Server;