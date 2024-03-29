import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-JWT';
import { blogGet, blogPut, blogsGet, blogsPost } from '../controllers/blog'

const router = Router();

router.get(
    "/", [
        
    ],
    blogsGet
)

router.get(
    "/:id", [
        check("id", "El campo id es obligatorio").not().isEmpty(),
        check("id", "El campo id debe ser mongoid").isMongoId(),
        validarCampos
    ],
    blogGet
)

router.post(
    "/", [
        validarJWT,
        check("blog_name", "El campo blog_name es obligatorio").not().isEmpty(),
        check("blog_text", "El campo blog_text es obligatorio").not().isEmpty(),
        validarCampos
    ],
    blogsPost
)

router.put(
    "/:id", [
        validarJWT,
        check("id", "El campo id es obligatorio").not().isEmpty(),
        check("id", "El campo id debe ser mongoid").isMongoId(),
        check("blog_name", "El campo blog_name es obligatorio").not().isEmpty(),
        check("blog_text", "El campo blog_text es obligatorio").not().isEmpty(),
        validarCampos
    ],
    blogPut
)

export default router;