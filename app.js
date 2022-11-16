const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const app = express();
const port = process.env.PORT || 3000;

/* CONECTAR BBDD */
dbConnection();

/* CONFIGURAR CARPETA ESTÁTICA */
app.use(express.static(__dirname + '/public'));

/* CONFIGURAR TEMPLATE ENGINES */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', require('./routes/router'));

app.listen(port, () => {
    console.log(`Servidor desde puerto ${port}`);
});
