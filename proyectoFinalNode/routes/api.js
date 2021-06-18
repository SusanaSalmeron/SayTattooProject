const router = require('express').Router();

apiUsuariosRouter = require('./api/usuarios');
apiUsuariosTatuadoresRouter = require('./api/usuariosTatuadores')

router.use('/usuarios', apiUsuariosRouter);
router.use('/usuariosTatuadores', apiUsuariosTatuadoresRouter)


module.exports = router;
