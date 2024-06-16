/*conectar mongo db

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/proyecto')
    .then(res => console.log("conectado" + res))
    .catch(err => console.log("Error" + Err));
*/

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://127.0.0.1:27017/grupo4853')
    .then(() => {
        console.log("Conexión exitosa a MongoDB");
        app.listen(port, function() {
            console.log("Servidor de API REST de música escuchando en http://localhost:" + port);
        });
    })
    .catch((err) => {
        console.error("Error al conectar a MongoDB:", err);
    });