import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

import { serviciosGet, serviciosPost, serviciosDelete, serviciosPut } from '../controllers/servicios';

const SERVICE_TOPICS = [
    0,
    1
]

const router = Router();

    router.get(
        "/",
        serviciosGet
    );

    router.post(
        "/", [
            check("service_name", "El service_name del servicio es obligatorio").not().isEmpty(),
            check("service_description", "El service_description del servicio es obligatorio").not().isEmpty(),
            check("service_topic", "El service_topic del servicio es obligatorio").not().isEmpty(),
            check("service_image", "El service_image del servicio es obligatorio").not().isEmpty(),
            check("service_topic", "El service_topic debe estar incluido en " + SERVICE_TOPICS).isIn(SERVICE_TOPICS),
            validarCampos
        ],
        serviciosPost
    );

    router.delete(
        "/:id", [
            check("id", "Id del servicio es obligatorio").not().isEmpty(),
            validarCampos
        ],
        serviciosDelete
    );

    router.put(
        "/:id", [
            check("id", "Id del servicio es obligatorio").not().isEmpty(),
            check("id", "Id no es válido").isMongoId(),
            check("service_name", "El campo service_name es obligatorio").not().isEmpty(),
            check("service_description", "El campo service_description es obligatorio").not().isEmpty(),
            check("service_topic", "El campo service_topic es obligatorio").not().isEmpty(),
            check("service_topic", "El service_topic debe estar incluido en " + SERVICE_TOPICS).isIn(SERVICE_TOPICS),
            check("service_image", "El service_image es obligatorio").not().isEmpty(),
            check("service_state", "El service_state es obligatorio").not().isEmpty(),
            validarCampos
        ],
        serviciosPut
    )

export default router;