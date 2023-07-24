const express = require('express');

const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.proyectosPath = '/api/proyectos';
        this.tecnologiasPath= '/api/tecnologias';
        this.serviciosPath= '/api/servicios';
        this.emailPath = '/api/mail';
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
       this.app.use( this.proyectosPath, require('../routes/proyectos'));
       this.app.use( this.tecnologiasPath, require('../routes/tecnologias'));
       this.app.use( this.serviciosPath, require('../routes/servicios'));
       this.app.use( this.emailPath, require('../routes/mailer'));
    }

    listem(){
        this.app.listen( this.port,()=>{
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }
}

module.exports = Server;