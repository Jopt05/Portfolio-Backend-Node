import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

import { mailerPost } from "../controllers/mailer";

const router = Router();

    router.post('/',[
        check('name', 'Name must be filled!').not().isEmpty(),
        check('email', 'Email must be filled!').not().isEmpty(),
        check('email', 'Insert a valid email').isEmail(),
        check('message', 'Message must be filled!').not().isEmpty(),
        validarCampos
    ], mailerPost);

export default router;