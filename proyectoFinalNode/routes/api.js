const router = require('express').Router();

apiUsuariosRouter = require('./api/usuarios');

router.use('/usuarios', apiUsuariosRouter);


module.exports = router;
