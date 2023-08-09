"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const mailer_1 = require("../controllers/mailer");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('name', 'Name must be filled!').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email must be filled!').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Insert a valid email').isEmail(),
    (0, express_validator_1.check)('message', 'Message must be filled!').not().isEmpty(),
    validar_campos_1.validarCampos
], mailer_1.mailerPost);
exports.default = router;
