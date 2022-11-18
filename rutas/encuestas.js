const { Router } = require('express')
const router = Router()

const { getEncuestas, postEncuestas, deleteEncuestas, putEncuestas, patchEncuestas } = require('../controlador/encuesta')

router.get('/', getEncuestas)

router.post('/', postEncuestas)

router.delete('/', deleteEncuestas)

router.put('/', putEncuestas)

router.patch('/', patchEncuestas)

module.exports = router