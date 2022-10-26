const router = require('express').Router()
const desviosController = require('../controllers/desvios-controller')

router.get('/ID', desviosController.desviosPorID)
router.get('/Obra', desviosController.desviosPorObra)

module.exports = router;