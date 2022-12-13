const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');

const { dbConecction } = require('../db/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            todo:       '/api/todos',
            inProgress: '/api/inProgress',
            done:       '/api/done',
            // buscar:     '/api/buscar',
            // categorias: '/api/categorias',
            // productos:  '/api/productos',
            // usuarios:   '/api/usuarios',
            // uploads:    '/api/uploads',
        }


        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConecction();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
        // this.app.use( fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));

    }

    routes() {
        
        this.app.use( this.paths.todo, require('../routes/todo'));
        this.app.use( this.paths.inProgress, require('../routes/inProgress'));
        this.app.use( this.paths.done, require('../routes/done'));
        
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;