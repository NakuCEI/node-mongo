const Servicio = require('../models/ServicioModel');

const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find();
        console.log('servicios: ', servicios);
    
        res.render('servicios', {
            titulo: 'Servicios desde views', 
            descripcion: 'Descripción para servicios', 
            data: servicios
        });
    } catch (error) {
        console.log(error);
        return ({
            ok: false, 
            msg: 'Error al leer los sevicios'
        });
    };
};

module.exports = {
    getServicios
};
