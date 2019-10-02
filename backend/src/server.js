const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://omnitack:omnistack9@omnistack-tuduk.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(routes);



app.listen(3333);