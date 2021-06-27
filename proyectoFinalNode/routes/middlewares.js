




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

function validateUpload(req) {
    if (!req.file) {
        return 'No hay archivo'
    }
    const extension = req.file.mimetype.split('/')[1];
    if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        return 'La imagen tiene una extension incorrencta'
    }
    return ''
}




module.exports = { validate, validateDelete, validateUpload };