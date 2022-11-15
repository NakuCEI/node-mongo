const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* CONFIGURAR CARPETA ESTÁTICA */
app.use(express.static(__dirname + '/public'));

/* CONFIGURAR TEMPLATE ENGINES */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', require('./routes/router'));

app.listen(port, () => {
    console.log(`Servidor desde puerto ${port}`);
});
