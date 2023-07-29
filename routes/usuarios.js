const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
    login
} = require('../controllers/usuarios');

const router = new Router();

router.post(
    "/login", [
        check("user_name", "El campo user_name es obligatorio").not().isEmpty(),
        check("password", "El campo password es obligatorio").not().isEmpty(),
        validarCampos
    ],
    login
)

module.exports = router;