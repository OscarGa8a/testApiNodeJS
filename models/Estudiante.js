//Importamos mongoose para manejar base de datos mongoDB
const mongoose = require('mongoose');
//Creamos el Schema para definir el modelo
const Schema = mongoose.Schema;

//Definimos el Schema para el modelo Estudiantes
const estudianteSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    carrera: {
        type: String,
        trim: true
    },
    edad: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        trim: true
    }
});

//Exportamos el Schema de Estudiantes y le asignamos el nombre
module.exports = mongoose.model('Estudiante', estudianteSchema);