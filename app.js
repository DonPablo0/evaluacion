const Server = require('./modelo/servidor')
require('dotenv').config()

const server = new Server()
server.listen()