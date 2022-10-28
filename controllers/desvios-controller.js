const Desvios = require('../models/desvios')

exports.desviosPorID = async (req, res, next) =>{
    const desvio = await Desvios.findAll({
        where: {
            site: "034 - LD Celulose - Amadeus"
        }
    });
    res.render("home.ejs", {desvio: desvio})
}


exports.desviosPorObra = async (req, res, next) =>{
    const desvio = await Desvios.findByPk(368);
    res.render("home.ejs", {desvio: desvio})
}


exports.desvios = async (req, res, next) =>{
    const desvio = await Desvios.findByPk(368);
    res.render("home.ejs", {desvio: desvio})
}