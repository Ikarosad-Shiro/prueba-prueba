'use stric'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaUsuarios = Schema({
    nombre: String,
    descripcion: String,
    imagen: String
});

module.exports = mongoose.model('Artistas', EsquemaUsuarios);