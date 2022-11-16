const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.URI_DB);
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
