import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

import { login, auth } from '../controllers/usuarios';

const router = Router();

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

export default router;