// defined route with login data returned from front end as router.post('/login') async (req, res) => {}
const router = require('express').Router();
const { Animals } = require('../../models');



router.get('/animals', async (req, res) => {
    try {
        const animals = await Animals.findAll()
        res.json(animals)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
