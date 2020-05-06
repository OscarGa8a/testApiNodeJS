//Importamos express que nos permitira crear el servidor
const express = require('express');
//Importamos mongoose que nos permite interactuar con una base de batos mongoDB
const mongoose = require('mongoose');
//Importamos las rutas
const routes = require('./routes');
//Importamos body-parser
const bodyParser = require('body-parser');
//Importamos las variables de entorno
require('dotenv').config({path: 'variables.env'});

//Creamos el servidor
const app = express();

//Conectamos a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://oscarga8a:IngElec123@testcluster-nhvz2.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitamos body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitamos routing
app.use('/', routes());

//Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
//Heroku asigna la variable process.env.PORT
const port = process.env.PORT || 3000;

//Asignamos puerto y arrancamos
app.listen(port, host, () => {
    console.log('Servidor express iniciado');
});