const Usuario = require("../models/modelUsuario");
//import clienteRedis from "../config/redisClient";
// Obtiene los datos de todos los usuarios
exports.obtenerUsuarios = async (req,res) => {
    try { // Intenta realizar la consulta con el metodo findAll
        const usuarios = await Usuario.findAll()
        res.status(200).json({ // Si tuvo exito, devuelve todos los datos
            estado:"Ok",
            usuarios
        })
    } catch (error) { // Si no pudo hacerlo, devuelve un error 500 y un mensaje de error
        console.error(error);
        res.status(500).json({
            estado:"Error",
            mensaje:"Error del servidor"
        })
    }
}

// Metodo para crear Usuarios
exports.crearUsuario = async(req,res) => {
    try { // Intenta realizar la consulta con Usuario.create()
        const usuario = await Usuario.create(req.body);
        res.status(201).json({ // Si tuvo exito, devuelve un mensaje con el codigo 201
            estado:"Ok",
            mensaje:`Usuario ${usuario.username} creado con exito!`
        })
    } catch (error) { // Si falló, muestra el error por terminal y un mensaje con la notificación
        console.error(error);
        res.status(500).json({
            estado:"Error",
            mensaje:"Error del servidor"
        })
    }
}

const misUsuarios = {"usuario":"pepeNacho","password":"nachoArgento","email":"pepeargento@nacho.dev"}

exports.enviarDatosRedis = async (req,res) => {
    try {
        const enviarUsuarioRedis = await clienteRedis.set('usersNacho', JSON.stringify(misUsuarios));
        if (enviarUsuarioRedis) {
            console.log("Datos enviados a redis:", enviarUsuarioRedis);
        }
    } catch (error) {
        console.log("Error al enviar datos a Redis: ", error);
    }

}

// Obtener usuario en redis
exports.UsuarioRedis = async (req,res) => {
    try {
        const obtenerDatosRedis = await clienteRedis.get('usersNacho');
        if (obtenerDatosRedis) {
            console.log("Datos encontrados en cache");
            return res.json({ data: JSON.parse(obtenerDatosRedis) });
        }
    } catch (error) {
        console.log("Ocurrio un error al ejecutar el metodo: ", error)
    }
}
// Busqueda de usuario por id
exports.obtenerUsuarioUnico = async (req,res) => {
    try { // Busca en la BD un usuario por la clave primaria, en este caso, el id
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario == ""){
            res.status(404).json({
                estado:"error",
                mensaje:"No se ha encontrado el usuario solicitado"
            })
        }
        res.status(200).json({ // Si tuvo exito, devuelve el usuario solicitado
            estado: "Ok",
            usuario
        })
    } catch (error) { // sino, obtiene el mensaje de error
        console.error(error);
        res.status(500).json({
            estado:"Error",
            mensaje: "No se ha podido obtener los datos"
        })
    }
}

// Borrar usuario
exports.borrarUsuario = async (req,res) => {
    try { // Borra un usuario con el metodo destroy, buscando el usuario que coincida con el id enviado
        const usuario = await Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ // Si lo pudo eliminar, devuleve un ok y el mensaje de operación exitosa
            estado:"Ok",
            message:`Usuario ${usuario.username} eliminado`
        })
    } catch(error) { // Si falló devuelve error en "estado" y los detalles del mismo por consola
        console.error(error);
        res.status(500).json({
            estado:"Error",
            mensaje:"Ocurrió un error al eliminar el usuario"
        })
    }
}

//Actualizar usuario
exports.actulizarUsuario = async (req,res) => {
    // Crea las contantes con el id y los datos actualizados...
    const userId = req.params.id;
    const dataUsuario = req.body;
    // Para luego crear el objeto usuario listo para lanzar con el update
    const usuario = { userId, ...dataUsuario }
    try { // Utiliza el metodo update con la informacion actualizada donde el id coincida con el del usuario que se queiere corregir
        const actualizacionUsuario = await Usuario.update({ ...usuario }, {
            where: { 
                id:userId
            }
        })
        res.status(200).json({
            estado:"OK",
            mensaje:"Usuario actualizado"
        })
    } catch (error) { // Igual que las consultas anteriores, si falla retorna el error 500 y el mensaje por terminal
        console.error(error);
        res.status(500).json({
            estado:"Error",
            mensaje:"Error al actualizar el usuario"
        })
    }
}

