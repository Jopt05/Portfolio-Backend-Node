const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const {
    proyectosGet,
    proyectosPost,
    proyectosDelete
} = require("../controllers/proyectos");

const PROJECT_TOPICS = [
    0,
    1,
    2,
    3
]

const router = new Router();

    router.get(
        "/",
        proyectosGet
    );

    router.post(
        "/", [
            check("project_name", "El project_name es obligatorio").not().isEmpty(),
            check("project_url", "El project_url es obligatorio").not().isEmpty(),
            check("project_description", "El project_description es obligatorio").not().isEmpty(),
            check("project_tecnologies", "El project_tecnologies debe ser array").isArray(),
            check("project_tecnologies.*", "El project_tecnologies debe ser mongoId").isMongoId(),
            check("project_topic", "El project_topic debe estar incluido en " + PROJECT_TOPICS).isIn(PROJECT_TOPICS),
            validarCampos
        ],
        proyectosPost
    );

    router.delete(
        "/:id", [
            check("id", "Id del proyecto es obligatorio").not().isEmpty(),
            validarCampos
        ],
        proyectosDelete
    );

module.exports = router;