const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const ImagensController = require('../controllers/imagens-controller');

// EXCLUI UM PRODUTO
router.delete('/:id_imagem', login.obrigatorio, ImagensController.deleteImagem);

module.exports = router;