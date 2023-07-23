const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const {
    tecnologiasGet,
    tecnologiasPost,
    tecnologiasDelete
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

    router.delete(
        "/:id", [
            check("id", "Id de la tecnología es obligatorio").not().isEmpty(),
        ],
        tecnologiasDelete
    );

module.exports = router;