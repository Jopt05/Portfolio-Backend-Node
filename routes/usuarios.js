const { Router } = require( 'express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { esRolValido, Emailxite,existeUsuarioPorId } = require('../helpers/db-validator');

const { 
    usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosPatch, 
    usuariosDelete 

} = require('../controllers/usuarios');

const router = new Router();


    router.get('/',usuariosGet );

    router.post('/',[

        check('nombre','El nombre es obligatorio ').not().isEmpty(),
        check('password','El password es obligatorio y como minimo 6 caracteres ').isLength({min:6,max:15}),
        check('correo','El valor ingresado no es un correo ').isEmail(),
        check('correo').custom( Emailxite ),
        check('rol').custom( esRolValido ),
        validarCampos
    ],usuariosPost);

    router.put('/:id',[
        check('id','no es un id valido').isMongoId(),
        check('id').custom( existeUsuarioPorId ),
        check('rol').custom( esRolValido ),
        validarCampos
    ],usuariosPut );

    router.patch('/', usuariosPatch);

    router.delete('/:id',[
        check('id','no es un ID valido').isMongoId(),
        check('id').custom( existeUsuarioPorId ),
        validarCampos
    ],usuariosDelete );



module.exports = router;