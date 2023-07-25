const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const {
    tecnologiasGet,
    tecnologiasPost,
    tecnologiasDelete,
    tecnologiasPut
} = require('../controllers/tecnologias');

const router = new Router();

    router.get(
        "/",
        tecnologiasGet
    );

    router.post(
        "/", [
            check("tech_name", "El tech_name de la tecnología es obligatorio").not().isEmpty(),
            validarCampos
        ],
        tecnologiasPost
    );

    router.put(
        "/:id", [
            check("id", "Id de la tecnología es obligatorio").not().isEmpty(),
            check("id", "Id inválido").isMongoId(),
            check("tech_name", "Tech_name es obligatorio").not().isEmpty(),
            check("state", "State es obligatorio").not().isEmpty(),
            validarCampos
        ],
        tecnologiasPut
    );

    router.delete(
        "/:id", [
            check("id", "Id de la tecnología es obligatorio").not().isEmpty(),
            validarCampos
        ],
        tecnologiasDelete
    );

module.exports = router;