const express = require('express');
const path = require('path')
const app = express();
const router = require('express').Router();
const desviosRouter = require('./routes/desvios')
const Desvios = require('./models/desvios')



app.set("view engine", "ejs")
app.use(express.static('public'))

app.use('/Desvios', desviosRouter);
app.use("/", (req, res)=>{
    Desvios.findAll({
    }).then((desvio) =>{
        return res.render("index.ejs", {desvio: desvio})
    }).catch((error) =>{
        return console.log(error.message)
    });
})


module.exports = app;
