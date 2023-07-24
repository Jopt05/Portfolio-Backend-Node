const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {
    mailerPost
} = require("../controllers/mailer");

const router = new Router();

    router.post('/',[
        check('name', 'Name must be filled!').not().isEmpty(),
        check('email', 'Email must be filled!').not().isEmpty(),
        check('email', 'Insert a valid email').isEmail(),
        check('message', 'Message must be filled!').not().isEmpty(),
        validarCampos
    ], mailerPost);

module.exports = router;