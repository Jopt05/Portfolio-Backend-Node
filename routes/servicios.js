const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const {
    serviciosGet,
    serviciosPost,
    serviciosDelete
} = require('../controllers/servicios');

const SERVICE_TOPICS = [
    0,
    1
]

const router = new Router();

    router.get(
        "/",
        serviciosGet
    );

    router.post(
        "/", [
            check("service_name", "El service_name del servicio es obligatorio").not().isEmpty(),
            check("service_description", "El service_description del servicio es obligatorio").not().isEmpty(),
            check("service_topic", "El service_topic del servicio es obligatorio").not().isEmpty(),
            check("service_image", "El service_image del servicio es obligatorio").not().isEmpty(),
            check("service_topic", "El service_topic debe estar incluido en " + SERVICE_TOPICS).isIn(SERVICE_TOPICS),
            validarCampos
        ],
        serviciosPost
    );

    router.delete(
        "/:id", [
            check("id", "Id del servicio es obligatorio").not().isEmpty(),
        ],
        serviciosDelete
    );

module.exports = router;