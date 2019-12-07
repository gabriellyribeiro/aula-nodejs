const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.end('Hello World')
});

app.get('/:nome', function (req, res) {
    res.end('Olá ' + req.params.nome);
});


app.listen(3000, '127.0.0.1', function () {
    console.log('Servidor rodando em http://' + '3000/');
});

app.post('/', function (req, res) {
    res.end('Hello World')
});

app.delete('/', function (req, res) {
    res.end('Hello World')
});