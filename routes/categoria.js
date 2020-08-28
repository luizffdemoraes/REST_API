const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const CategoriesController = require('../controllers/categoria-controller')


router.get('/', CategoriesController.getCategoria);
router.post('/', login.obrigatorio, CategoriesController.postCategoria);

module.exports = router;


