//Importamos el modelo de Estudiantes
const Estudiante = require('../models/Estudiante');

//Permite agregar un nuevo estudiante a la base de datos 
exports.nuevoEstudiante = async (req, res, next) => {
    //Obtenemos el modelo de paciente con los datos de req.body
    const estudiante = new Estudiante(req.body);
    //Por si el servidor se cae y no se termina de agregar los datos a la BD
    try {
        //Espera a que guarde en la base de datos
        await estudiante.save();
        res.json({mensaje: "Estudiante agregado correctamente"});
    } catch (error) {
        console.log(error);
        //Al no terminar de agregar los datos, le indicamos a express que continue con otras tareas
        next();
    }
}

//Permite obtener todos los estudiantes en la base de datos
exports.obtenerEstudiantes = async (req, res, next) => {
    try {
        const estudiantes = await Estudiante.find({});
        res.json(estudiantes);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite obtener un estudiante en la base de datos
exports.obtenerEstudiante = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id);
        res.json(estudiante);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite actualizar un estudiante en la base de datos
exports.actualizarEstudiante = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        res.json(estudiante);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Permite eliminar un estudiante en la base de datos
exports.eliminarEstudiante = async (req, res, next) => {
    try {
        await Estudiante.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'El paciente ha sido eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}