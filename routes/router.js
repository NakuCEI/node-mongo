const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Index desde views', 
        descripcion: 'Descripción desde views'
    });
});

router.get('/servicios', (req, res) => {
    res.render('servicios', {
        titulo: 'Servicios desde views', 
        descripcion: 'Descripción para servicios', 
        data: [
            {
                "nombre": "Servicio Uno", 
                "comentario": "Comentario Servicio Uno",
                "fecha": ''
            }, 
            {
                "nombre": "Servicio Dos", 
                "comentario": "Comentario Servicio Dos",
                "fecha": ''
            }, 
            {
                "nombre": "Servicio Tres", 
                "comentario": "Comentario Servicio Tres",
                "fecha": ''
            }
        ]
    });
});

module.exports = router;