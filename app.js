'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var user_routes = require('./controlador/usuarioRuta');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurar cabeceras HTTP
//rutas base
app.use('/api', user_routes);

module.exports = app;

//app.get('/pruebas', function(req, res) {
//    res.status(200).send({ mesage: 'bienvenido al curso' });
//});