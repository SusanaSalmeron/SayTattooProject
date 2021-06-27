const router = require('express').Router();
const { getById, getPicsByUserId, addPic, deleteImageById, updateProfilePic, deleteOldStyles, addStyleToUser, getAllBy } = require('../../models/usuarioTatuador.model')
const { validate, validateDelete, validateUpload, checkToken } = require('../../routes/middlewares')
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const fs = require('fs');
const Tatuaje = require('../../models/usuarioTatuador.model');


router.post('/:id/tatuajes/upload', upload.single('imagen'), async (req, res) => {

    try {
        const validationMessage = validateUpload(req);
        if (validationMessage) {
            console.log("validation Error:" + validationMessage);
            res.status(400);
            res.json({ error: validationMessage });
        } else {
            console.log("saving pic");
            console.log(req.file);
            const extension = '.' + req.file.mimetype.split('/')[1];
            const newName = `http://localhost:3000/images/${req.file.filename}${extension}`;
            const newPath = req.file.path + extension;
            fs.renameSync(req.file.path, newPath);
            req.body.imagen = newName;

            const newPicture = await Tatuaje.addPics(req.params.id, newName);
            res.status(201);
            res.send('');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "No se puede insertar la imagen" });
    }

});

module.exports = router;



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
        const pics = await getPicsByUserId(req.params.id);
        res.json(pics)
    } catch (error) {
        console.log(error);
        res.json({ error: 'no existe esa id de cliente' })
    }
})


//Peticion de todos los usuarios tatuadores
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

router.post('/:id/moreData', checkToken, async (req, res) => {
    try {
        console.log(req.body);
        const userId = req.params.id
        await updateProfilePic(req.body.imgPerfil, req.body.sobreMi, userId)
        await deleteOldStyles(userId)
        for (let styleId of req.body.estilos) {
            await addStyleToUser(styleId, userId)
        }
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