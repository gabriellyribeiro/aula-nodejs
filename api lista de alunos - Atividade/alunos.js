var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())

var dataJson = [{
  "id": 1,
  "Nome": "Lucas",
  "Sobrenome": "Capelotto",
  "Idade": 26,
  "Nota": 9,
  "Situacao": "Aprovado"
}, {
  "id": 2,
  "Nome": "Felipe",
  "Sobrenome": "Sartori",
  "Idade": 22,
  "Nota": 9,
  "Situacao": "Aprovado"
}, {
  "id": 3,
  "Nome": "Aline",
  "Sobrenome": "Monteiro",
  "Idade": 29,
  "Nota": 8,
  "Situacao": "Aprovado"

}, {
  "id": 4,
  "Nome": "Alex",
  "Sobrenome": "Alonso",
  "Idade": 26,
  "Nota": 4,
  "Situacao": "Reprovado"
}, {
  "id": 5,
  "Nome": "Alguém",
  "Sobrenome": "Algum",
  "Idade": 20,
  "Nota": 7,
  "Situacao": "Aprovado"

}]

app.get('/alunos/notas/matematica', function (req, res) {
  res.json(dataJson)
});

app.get('/alunos/notas/matematica/id/:id', function (req, res) {
  dataJson.forEach(element => {
    if (element.id == req.params.id) {
      res.json(element);
    }
  });
  res.json(dataJson)

});

app.get('/alunos/notas/matematica/Nome/:batata', function (req, res) {
  dataJson.forEach(element => {
    if (element.Nome == req.params.batata) {
      res.json(element);
    }
  });
  res.json(dataJson)
});

app.listen(3000, function () {
  console.log('Aplicação utilizando a porta 3000');
});