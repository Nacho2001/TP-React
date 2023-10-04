// Importa express, router y el controller de usuario
const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controllers/controladorUsuario');

// Define rutas a las consultas del controller

// Obtener usuarios
router.get('/', controladorUsuario.obtenerUsuarios);

// Crear usuario nuevo
router.post('/', controladorUsuario.crearUsuario);

// Obtener usuario por ID
router.get('/:id', controladorUsuario.obtenerUsuarioUnico);

// Borrar usuario
router.delete('/:id', controladorUsuario.borrarUsuario);

// Actualizar usuario
router.put('/:id', controladorUsuario.actulizarUsuario);

// Solicitar usuarios a redis
router.get('/redis', controladorUsuario.UsuarioRedis);

// Postear usuarios a redis
router.set('/redis', controladorUsuario.enviarDatosRedis);

module.exports = router