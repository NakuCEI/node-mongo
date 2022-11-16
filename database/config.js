const mongoose = require('mongoose');
const user = 'admin';
const password = '1234';
const dbName = 'mongo-test';
const uri = `mongodb+srv://${user}:${password}@cluster0.vbtx18f.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const dbConnection = async () => {

    try {
        await mongoose.connect(uri);
        console.log('Conectado a bbdd');
    } catch (error) {
        console.log(error);
        return ({
            ok: false, 
            msg: 'Error en conexión a bbd'
        });
    }
};

module.exports = {
    dbConnection
};
