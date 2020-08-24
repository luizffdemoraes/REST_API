// criar variavel
const http = require('http'); // importar http para projeto
const app = require('./app'); // importar app
const port = process.env.PORT || 3000; // armazenar porta
const server = http.createServer(app); // criar o server

server.listen(port);


