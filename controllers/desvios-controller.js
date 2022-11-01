const Desvios = require('../models/desvios')

exports.desviosPorID = async (req, res, next) =>{

}

exports.desviosPorObra = async (req, res, next) =>{
    const desvio = await Desvios.findAll({
        where: {
            site: "030 - Mosaic - Uberaba",
            nivel: "Leve"
        }
    }).then((desvio) =>{
        return res.render("home.ejs", {desvio: desvio})
    }).catch((error) =>{
        return console.log(error.message)
    });
   
}

exports.desvios = async (req, res, next) =>{
    const desvio = await Desvios.findByPk(368);
    res.render("home.ejs", {desvio: desvio})
}