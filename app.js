const express = require('express');
const path = require('path')
const app = express();
const router = require('express').Router();
const desviosRouter = require('./routes/desvios')

app.use('/Desvios', desviosRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/' , (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = app;
