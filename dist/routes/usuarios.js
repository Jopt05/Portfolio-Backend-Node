"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.post("/login", [
    (0, express_validator_1.check)("user_name", "El campo user_name es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El campo password es obligatorio").not().isEmpty(),
    validar_campos_1.validarCampos
], usuarios_1.login);
router.post("/auth", [
    (0, express_validator_1.check)("token", "El campo token es obligatorio").not().isEmpty(),
    validar_campos_1.validarCampos
], usuarios_1.auth);
exports.default = router;
