const router = require('express').Router();
const { getAll, create, getById, deleteById } = require('../../models/usuario.model');

router.get('/:id', async (req, res) => {
    try {
        const user = await getById(req.params.id);
        res.json(user)
    } catch {
        res.json({ error: 'no existe esa id de cliente' + err })
    }
})



router.get('/', async (req, res) => {
    try {
        const users = await getAll();
        res.json(users)
    } catch (err) {
        res.json({ error: 'no se han podido mostrar los clientes' + err })
    }

});



router.post('/register', async (req, res) => {
    try {
        const user = await create(req.body);
        res.json(user)
    } catch (err) {
        res.json({ error: 'No se ha podido crear el cliente' + err })
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const user = await deleteById(req.params.id);
        res.json(user)
    } catch (err) {
        res.json({ error: 'No existe ese cliente' + err })

    }
});


















module.exports = router;
