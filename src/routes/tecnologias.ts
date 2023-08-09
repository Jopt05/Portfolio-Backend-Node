import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

import { tecnologiasGet, tecnologiasPost, tecnologiasDelete, tecnologiasPut } from '../controllers/tecnologias';

const router = Router();

    router.get(
        "/",
        tecnologiasGet
    );

    router.post(
        "/", [
            check("tech_name", "El tech_name de la tecnología es obligatorio").not().isEmpty(),
            validarCampos
        ],
        tecnologiasPost
    );

    router.put(
        "/:id", [
            check("id", "Id de la tecnología es obligatorio").not().isEmpty(),
            check("id", "Id inválido").isMongoId(),
            check("tech_name", "Tech_name es obligatorio").not().isEmpty(),
            check("state", "State es obligatorio").not().isEmpty(),
            validarCampos
        ],
        tecnologiasPut
    );

    router.delete(
        "/:id", [
            check("id", "Id de la tecnología es obligatorio").not().isEmpty(),
            validarCampos
        ],
        tecnologiasDelete
    );

export default router;