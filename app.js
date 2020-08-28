const express = require('express'); // importar
const app = express(); // criar instancia
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Rotas produtos
const rotaProdutos = require('./routes/produtos');
const rotaCategoria = require('./routes/categoria');
const rotaPedidos = require('./routes/pedidos');
const rotaUsuarios = require('./routes/usuarios');
const rotaImagens = require('./routes/imagens');



/* consumir o metodo
    req - requisição
    res - resposta
    next - chamar outro metodo
    arrow - function */

// Morgan verifica toda execução e gera um log
// 404 not found
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false })); //apenas dados simples
app.use(bodyParser.json()); // json de entrada no body

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
        res.header(
            'Access-Control-Allow-Header',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})

app.use('/produtos', rotaProdutos);
app.use('/categorias', rotaCategoria);
app.use('/pedidos', rotaPedidos);
app.use('/usuarios', rotaUsuarios);
app.use('/imagens', rotaImagens);

// Quando não encontra rota entra aqui
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            mensagem: error.message
        }
    });
});

/*
Não é mais necessário após criar a rota em routes/produtos

app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'OK, Deu certo'
    });
});
*/

// Habilitar exportação
module.exports = app;