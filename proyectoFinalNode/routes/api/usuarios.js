const router = require('express').Router();
const { getAll } = require('../../models/usuario.model');



router.get('/', async (req, res) => {

    try {
        const users = await getAll();
        res.json(users)
    } catch (err) {
        res.json({ error: 'no se han podido mostrar los clientes' + err })
    }

});










module.exports = router;
