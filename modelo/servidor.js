const express = require('express')
const cors = require('cors')
const { dbconnection } = require('../basededatos/configuracion')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.encuestaPath = '/api/encuesta'
        this.conectardb()
        this.middlewares()
        this.routes()
    }

    async conectardb() {
        await dbconnection()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.encuestaPath, require('../rutas/encuestas'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
}

module.exports = Server