"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const proyectos_1 = require("../controllers/proyectos");
const PROJECT_TOPICS = [
    0,
    1,
    2,
    3
];
const router = (0, express_1.Router)();
router.get("/", proyectos_1.proyectosGet);
router.post("/", [
    (0, express_validator_1.check)("project_name", "El project_name es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_url", "El project_url es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_description", "El project_description es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_tecnologies", "El project_tecnologies debe ser array").isArray(),
    (0, express_validator_1.check)("project_tecnologies.*", "El project_tecnologies debe ser mongoId").isMongoId(),
    (0, express_validator_1.check)("project_topic", "El project_topic debe estar incluido en " + PROJECT_TOPICS).isIn(PROJECT_TOPICS),
    validar_campos_1.validarCampos
], proyectos_1.proyectosPost);
router.delete("/:id", [
    (0, express_validator_1.check)("id", "Id del proyecto es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id", "Id inválido").isMongoId(),
    validar_campos_1.validarCampos
], proyectos_1.proyectosDelete);
router.put("/:id", [
    (0, express_validator_1.check)("id", "Id del proyecto es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id", "Id inválido").isMongoId(),
    (0, express_validator_1.check)("project_name", "El campo project_name es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_description", "El campo project_description es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_tecnologies", "El campo project_tecnologies es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_tecnologies", "El campo project_tecnologies debe ser array").isArray(),
    (0, express_validator_1.check)("project_state", "El campo project_state es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_url", "El campo project_url es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("project_tecnologies.*", "El project_tecnologies debe ser mongoId").isMongoId(),
    (0, express_validator_1.check)("project_topic", "El project_topic debe estar incluido en " + PROJECT_TOPICS).isIn(PROJECT_TOPICS),
    validar_campos_1.validarCampos
], proyectos_1.proyectosPut);
exports.default = router;
