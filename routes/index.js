//Importamos express que nos permitira usar Router
const express = require('express');
//Accedemos al Router de express para configurar las rutas del servidor
const routes = express.Router();
//Obtenemos el controlador de Estudiantes
const estudiantesController = require('../controllers/estudianteControllers');

module.exports = () => {
    //Agrega un nuevo estudiantes via POST
    routes.post('/estudiantes', estudiantesController.nuevoEstudiante);
    
    //Obtiene todos los estudiantes via GET
    routes.get('/estudiantes', estudiantesController.obtenerEstudiantes);

    //Obtiene un estudiante via GET
    routes.get('/estudiantes/:id', estudiantesController.obtenerEstudiante);

    //Actualiza un estudiante via PUT
    routes.put('/estudiantes/:id', estudiantesController.actualizarEstudiante);

    //Elimina un estudiante via DELETE
    routes.delete('/estudiantes/:id', estudiantesController.eliminarEstudiante);
    
    //Se retorna routes para usarlo en el indice principal
    return routes;
}