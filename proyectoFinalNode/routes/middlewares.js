




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




module.exports = { validate, validateDelete };