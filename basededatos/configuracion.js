const mongoose = require('mongoose')

const dbconnection = async() => {
    try{
        mongoose.connect(process.env.MONGOOSE_CNN, {})
        console.log('estableciendo conexion')
    }catch(error){
        console.log('conectado')
    }
}

module.exports = {
    dbconnection
}