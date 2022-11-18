const encuesta = require('../modelo/encuesta')

const getEncuestas = async (req, res) => {
    const encuestas = await encuesta.find()
    let edad, pro = 0;
    for (let index = 0; index < encuestas.length; index++) {
        let persona = encuestas[index];
        edad += persona.edad;
        pro++
    }
    edad = edad / pro;
    res.json({
        msg: 'get api encuesta',
        encuestas,
        msg: `el promedio de las edades es de ${edad}`
    })
}

const postEncuestas = async (req, res) => {
    //desestructurazion
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    //crear objeto
    const encuesta1 = new encuesta({ nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado })
    await encuesta1.save()

    res.json({
        msg: 'post api encuesta',
        encuesta1
    })
}


const deleteEncuestas = async (req, res) => {
    //desestructurazion
    const { nombreEncuesta } = req.body
    //crear objeto
    const encuesta1 = await encuesta.findOneAndDelete({ nombreEncuesta: nombreEncuesta })

    res.json({
        msg: 'delete api encuesta',
        encuesta1
    })
}

const putEncuestas = async (req, res) => {
    //desestructurazion
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    //crear objeto
    const encuesta1 = await encuesta.findOneAndUpdate({ nombreEncuesta: nombreEncuesta }, { fecha: fecha, documentoEncuestado: documentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado })

    res.json({
        msg: 'put api encuesta',
        encuesta1
    })
}

const patchEncuestas = async (req, res) => {
    //desestructurazion
    const { nombreEncuesta, fecha } = req.body
    //crear objeto
    const encuesta1 = await encuesta.findOneAndUpdate({ nombreEncuesta: nombreEncuesta }, { fecha: fecha })

    res.json({
        msg: 'patch api encuesta',
        encuesta1
    })
}

module.exports = {
    getEncuestas,
    postEncuestas,
    deleteEncuestas,
    putEncuestas,
    patchEncuestas
}
