const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
    login,
    auth
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

router.post(
    "/auth", [
        check("token", "El campo token es obligatorio").not().isEmpty(),
        validarCampos
    ],
    auth
)

module.exports = router;