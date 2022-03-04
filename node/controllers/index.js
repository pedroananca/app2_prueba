const express = require('express');
const routes = require('../routs/routs.js');
// Inicializamos el proceso
const server_app = express();
//Buscamos un puerto libre o lo envía al 4000
server_app.set('port',process.env.PORT || 4000)

// Configuración del servidor 
server_app.listen(server_app.get('port'),()=>{console.log('server on port',server_app.get('port'))});
server_app.use('/',routes.inicio);

// conexion
try {

 
}