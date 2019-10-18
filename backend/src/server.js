const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// faz o express entender o formato json.
app.use(express.json());

mongoose.connect('mongodb+srv://omnitack:omnistack9@omnistack-tuduk.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*
* req -> requisição, pega os parametros que usuario esteja enviando na requisição.
* res -> devolve uma resposta para a requisição.
-------------------------------------------------
Get -> Busca uma informação no backend
Post -> Cria uma nova informação no backend
Put -> editar/atualizar alguma informação
Delete -> deleta alguma informação
-------------------------------------
Query Params -> são parametros que colocamos na url, serve como um tipo de filtro
req.query -> acessa o query params.
------------------------------
route params -> para edição e delete
req.params -> acessar routes params.

body params -> o corpo da requisição.
*/

app.use(routes);



app.listen(3333);