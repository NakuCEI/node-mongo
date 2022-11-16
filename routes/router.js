const express = require('express');
const router = express.Router();
const { getServicios } = require('../controllers/serviciosController');

router.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Index desde views', 
        descripcion: 'Descripción desde views'
    });
});

router.get('/servicios', getServicios);

module.exports = router;
