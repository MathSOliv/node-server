const Desvios = require('../models/desvios')

exports.desviosPorID = async (req, res, next) =>{
 const desvio = await Desvios.findByPk(368);
 console.log(desvio)
}
exports.desviosPorObra = (req, res, next) =>{
    
}