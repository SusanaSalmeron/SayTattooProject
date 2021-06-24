const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const { getById } = require('../models/usuario.model');



function validate(req) {
    if (!req.body) {
        return 'No hay datos'
    }
    if (!req.body.imagen || !req.body.estilo) {
        return 'Falta uno de los campos'
    }
    return ''
}


function validateDelete(req) {
    if (isNaN(req.params.picId)) {
        return 'El id debe ser un numero'
    }
    //TODO - comprobar si la imagen pertenece a ese userId
    if (!req.params.userId) {
        return 'Esa imagen no pertenece a ese tatuador'
    }
    return ''
}



const checkToken = async (req, res, next) => {

    // 1 - Si el token viene incluido en la cabecera Authentication
    if (!req.headers['authorization']) {
        return res.json({ error: 'Necesitas la cabecera Authorization' });
    }

    const token = req.headers['authorization'];


    // 2 - Comprobar si el token es correcto
    let obj;
    try {
        obj = jwt.verify(token, 'colorin colorado...');
    } catch (error) {
        return res.json({ error: 'El token es incorrecto' })
    }

    // 3 - Comprobar si el token está caducado
    const currentDate = dayjs().unix();
    if (currentDate > obj.caducidad) {
        return res.json({ error: 'El token está caducado. Por favor solicita otro😉' });
    }

    // 4 - Recuperar el usuario
    // a partir de obj, hay que generar un método getById para obtener el usuario a partir de su ID
    // Hacer console.log

    const usuario = await getById(obj.usuario_id);

    req.user = usuario;

    next();
}



module.exports = { validate, validateDelete, checkToken };