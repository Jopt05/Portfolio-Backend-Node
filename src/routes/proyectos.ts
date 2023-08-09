import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

import { proyectosGet, proyectosPost, proyectosDelete, proyectosPut } from "../controllers/proyectos";

const PROJECT_TOPICS = [
    0,
    1,
    2,
    3
]

const router = Router();

    router.get(
        "/",
        proyectosGet
    );

    router.post(
        "/", [
            check("project_name", "El project_name es obligatorio").not().isEmpty(),
            check("project_url", "El project_url es obligatorio").not().isEmpty(),
            check("project_description", "El project_description es obligatorio").not().isEmpty(),
            check("project_tecnologies", "El project_tecnologies debe ser array").isArray(),
            check("project_tecnologies.*", "El project_tecnologies debe ser mongoId").isMongoId(),
            check("project_topic", "El project_topic debe estar incluido en " + PROJECT_TOPICS).isIn(PROJECT_TOPICS),
            validarCampos
        ],
        proyectosPost
    );

    router.delete(
        "/:id", [
            check("id", "Id del proyecto es obligatorio").not().isEmpty(),
            check("id", "Id inválido").isMongoId(),
            validarCampos
        ],
        proyectosDelete
    );

    router.put(
        "/:id", [
            check("id", "Id del proyecto es obligatorio").not().isEmpty(),
            check("id", "Id inválido").isMongoId(),
            check("project_name", "El campo project_name es obligatorio").not().isEmpty(),
            check("project_description", "El campo project_description es obligatorio").not().isEmpty(),
            check("project_tecnologies", "El campo project_tecnologies es obligatorio").not().isEmpty(),
            check("project_tecnologies", "El campo project_tecnologies debe ser array").isArray(),
            check("project_state", "El campo project_state es obligatorio").not().isEmpty(),
            check("project_url", "El campo project_url es obligatorio").not().isEmpty(),
            check("project_tecnologies.*", "El project_tecnologies debe ser mongoId").isMongoId(),
            check("project_topic", "El project_topic debe estar incluido en " + PROJECT_TOPICS).isIn(PROJECT_TOPICS),
            validarCampos
        ],
        proyectosPut
    )

export default router;