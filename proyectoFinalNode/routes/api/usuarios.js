const router = require('express').Router();
const { create, getById, deleteById, modifyById } = require('../../models/usuario.model');

//peticion de un usuario por id
router.get('/:id', async (req, res) => {
    try {
        const user = await getById(req.params.id);
        res.json(user)
    } catch {
        res.json({ error: 'no existe esa id de cliente' + err })
    }
})


//peticion de creacion de un usuario nuevo
router.post('/register', async (req, res) => {
    try {
        const user = await create(req.body);
        res.send('')
    } catch (err) {
        res.json({ error: 'No se ha podido crear el cliente' + err })
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
    console.log(2)
    try {
        const result = await modifyById(req.params.id, req.body);
        res.send('')
    } catch (error) {
        console.log(error)
        res.json({ error: "No se puede modificar el cliente" })
    }
})



















module.exports = router;
