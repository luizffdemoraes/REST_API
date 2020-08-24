const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuarios-controller')

router.post('/cadastro', UsuarioController.cadastrarUsuario);

router.post('/login', UsuarioController.Login);

module.exports = router;