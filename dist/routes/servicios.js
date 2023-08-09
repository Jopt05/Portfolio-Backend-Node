"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const servicios_1 = require("../controllers/servicios");
const SERVICE_TOPICS = [
    0,
    1
];
const router = (0, express_1.Router)();
router.get("/", servicios_1.serviciosGet);
router.post("/", [
    (0, express_validator_1.check)("service_name", "El service_name del servicio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_description", "El service_description del servicio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_topic", "El service_topic del servicio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_image", "El service_image del servicio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_topic", "El service_topic debe estar incluido en " + SERVICE_TOPICS).isIn(SERVICE_TOPICS),
    validar_campos_1.validarCampos
], servicios_1.serviciosPost);
router.delete("/:id", [
    (0, express_validator_1.check)("id", "Id del servicio es obligatorio").not().isEmpty(),
    validar_campos_1.validarCampos
], servicios_1.serviciosDelete);
router.put("/:id", [
    (0, express_validator_1.check)("id", "Id del servicio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("id", "Id no es válido").isMongoId(),
    (0, express_validator_1.check)("service_name", "El campo service_name es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_description", "El campo service_description es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_topic", "El campo service_topic es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_topic", "El service_topic debe estar incluido en " + SERVICE_TOPICS).isIn(SERVICE_TOPICS),
    (0, express_validator_1.check)("service_image", "El service_image es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("service_state", "El service_state es obligatorio").not().isEmpty(),
    validar_campos_1.validarCampos
], servicios_1.serviciosPut);
exports.default = router;
