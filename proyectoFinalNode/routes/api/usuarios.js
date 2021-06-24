const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { create, getById, deleteById, modifyById, getByMail, getFavsById } = require('../../models/usuario.model');



//peticion de un usuario por id
router.get('/:id', async (req, res) => {
    try {
        const user = await getById(req.params.id);
        res.json(user)
    } catch {
        res.json({ error: 'no existe esa id de cliente' + err })
    }
})

//Peticion de favoritos de un usuario

router.get('/:id/favs', async (req, res) => {
    try {
        console.log(1)
        const favs = await getFavsById(req.params.id);
        res.json(favs)
    } catch (err) {
        console.log(err)
        res.json({ err: 'No hay favoritos' })
    }
});


//peticion de creacion de un usuario nuevo
router.post('/register', async (req, res) => {
    try {
        const userbyMail = await getByMail(req.body.email);
        if (userbyMail) {
            return res.json({ error: 'El email ya se encuentra registrado' });
        }
        req.body.password = bcrypt.hashSync(req.body.password);
        const user = await create(req.body);
        res.status(201);
        res.json({ msg: 'El usuario se ha insertado correctamente' });
    } catch (err) {
        res.status(400).json({ error: 'No se ha podido crear el cliente' + err })
    }

});

//peticion para borrar un usuario por id
router.delete('/:id', async (req, res) => {
    try {
        const user = await deleteById(req.params.id);
        res.send('')
    } catch (err) {
        res.json({ error: 'No existe ese cliente' + err })

    }
});

//Peticion de modificacion de un usuario por id
router.put('/:id', async (req, res) => {
    try {
        const result = await modifyById(req.params.id, req.body);
        res.status(200);
        res.json({ msg: "El usuario se ha modificado correctamente" })
    } catch (err) {
        console.log(err)
        res.status(400).json({ err: "No se puede modificar el cliente" + err })
    }
})























module.exports = router;
