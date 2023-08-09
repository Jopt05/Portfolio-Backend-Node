"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const tecnologias_1 = require("../controllers/tecnologias");
const router = (0, express_1.Router)();
router.get("/", tecnologias_1.tecnologiasGet);
router.post("/", [
    (0, express_validator_1.check)("tech_name", "El tech_name de la tecnología es obligatorio").not().isEmpty(),
    validar_campos_1.validarCampos
], tecnologias_1.tecnologiasPost);
router.put("/:id", [
    (0, express_validator_1.check)("id", "Id de la tecnología es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id", "Id inválido").isMongoId(),
    (0, express_validator_1.check)("tech_name", "Tech_name es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("state", "State es obligatorio").not().isEmpty(),
    validar_campos_1.validarCampos
], tecnologias_1.tecnologiasPut);
router.delete("/:id", [
    (0, express_validator_1.check)("id", "Id de la tecnología es obligatorio").not().isEmpty(),
    validar_campos_1.validarCampos
], tecnologias_1.tecnologiasDelete);
exports.default = router;
