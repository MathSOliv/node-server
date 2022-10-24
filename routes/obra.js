const obraController = require('../controllers/obraController')
const router = require ('express').Router()

router.get('/', obraController.srcObra)

module.exports = router