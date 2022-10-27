const express = require('express');
const path = require('path')
const app = express();
const router = require('express').Router();
const desviosRouter = require('./routes/desvios')

app.set("view engine", "ejs")
app.use("/", (req, res)=>{
    res.render("index.ejs", {})
})
app.use('/Desvios', desviosRouter);
app.use(express.static('public'))

module.exports = app;
