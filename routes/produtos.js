const express = require('express');
const router = express.Router();
const multer = require('multer');
const login = require('../middleware/login');

const ProdutosController = require('../controllers/produtos-controller');
//localhost:3000/usuarios/login
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        //new Date().toISOString()  +  file.originalname não funciona no meu
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


// RETORNA TODOS OS PRODUTOS OU PRODUTOS ESPECIFICOS
router.get('/', ProdutosController.getProdutos);

// INSERE UM PRODUTO
router.post('/', login.obrigatorio, upload.single('produto_imagem'), ProdutosController.postProduto);

// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', ProdutosController.getUmProduto);

// ALTERA UM PRODUTO
router.patch('/', login.obrigatorio, ProdutosController.updateProduto);

// EXCLUI UM PRODUTO
router.delete('/', login.obrigatorio, ProdutosController.deleteProduto);

//IMAGENS
router.post('/:id_produto/imagem', login.obrigatorio, upload.single('produto_imagem'), ProdutosController.postImagem);

router.get('/:id_produto/imagens', ProdutosController.getImagens);

module.exports = router;