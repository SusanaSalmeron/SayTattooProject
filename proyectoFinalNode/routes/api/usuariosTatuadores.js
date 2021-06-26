const router = require('express').Router();
const { getById, getPicsByParams, addPic, deleteImageById, moreDataByID, getAllBy } = require('../../models/usuarioTatuador.model')
const { validate, validateDelete } = require('../../routes/middlewares')



//peticion de un usuario tatuador por id
router.get('/:id', async (req, res) => {
    try {
        const user = await getById(req.params.id);
        res.json(user)
    } catch (error) {
        res.json({ error: 'no existe esa id de cliente' })
    }
})

// peticion de las fotos de tatuajes por id del usuario tatuador y si tiene estilos

router.get('/:id/pics', async (req, res) => {

    try {
        const pics = await getPicsByParams(req.params.id, req.query.style);
        res.json(pics)
    } catch (error) {
        console.log(error);
        res.json({ error: 'no existe esa id de cliente' })
    }
})


//Peticion de todos los usuarios tatuadores
//TODO - integrar la funcion getByWilcard para la barra de busqueda
router.get('/', async (req, res) => {
    console.log(`PARAMS -> ${JSON.stringify(req.query)}`)
    let users = null;
    try {
        const params = {
            wildcard: req.query.wildcard,
            style: req.query.estilo
        }
        users = await getAllBy(params);
        console.log(users)
        res.json(users)
    } catch {
        res.json({ error: 'no hay clientes para mostrar' })
    }
})

//Peticion para insertar una imagen con su estilo y la id del tatuador

router.post('/:id/pics/', async (req, res) => {

    try {
        const validationMessage = validate(req);
        if (validationMessage) {
            res.status(400);
            res.json({ error: validationMessage })
        } else {
            await addPic(req.params.id, req.body);
            res.status(201)
            res.send('')
        }
    } catch (error) {
        res.status(500).json({ error: "No se puede insertar la imagen" })
    }
})

//Petición para insertar mas datos de un tatuador por id

router.post('/:id/moreData', async (req, res) => {
    try {
        const moreData = await moreDataByID(req.params.id,
            req.body.imgPerfil, req.body.sobreMi, req.body.estilos);
        res.status(200);
        res.json({ msg: "" })
    } catch (error) {
        console.log("Error cuando inserto mas datos: " +
            error)
        res.status(400);
        res.json({ error })
    }
})



router.delete('/:userId/pics/:picId', async (req, res) => {
    try {
        const validationMessage = validateDelete(req);
        if (validationMessage) {
            res.status(400);
            res.json({ error: validationMessage })
        } else {
            await deleteImageById(req.params.userId, req.params.picId);
            res.status(200)
            res.send('')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'No se ha podido borrar la imagen' })
    }
})










module.exports = router;