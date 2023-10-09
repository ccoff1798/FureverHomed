// defined route with login data returned from front end as router.post('/login') async (req, res) => {}
const router = require('express').Router();
const { SavedAnimal } = require('../../models');

router.post('/save-animal', async (req, res) => {
    try {
        const savedAnimal = await SavedAnimal.create({
            user_id: req.session.user_id,
            animal_id: req.body.animal_id
        })
        res.json(savedAnimal)
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router;
