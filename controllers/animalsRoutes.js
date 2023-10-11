// defined route with login data returned from front end as router.post('/login') async (req, res) => {}
const router = require('express').Router();
const { User, Animals, SavedAnimal } = require('../models');

router.get('/all-animals', async (req, res) => {
    try {
        const animals = await Animals.findAll()
        // to test in insomnia use:
        // res.json(animals) and comment out line 11-13
        res.render('animals', {
            animals
        })
        // res.render() allows handlebars to get data from the connected file in the seeds 'animals-seeds.js' 
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/saved-animals/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(userId)
        const userWithSavedAnimals = await User.findOne({
            where: { id: userId },
            include: [
                {
                    model: SavedAnimal,
                    include: [{
                        model: Animals,
                        attributes:['id','name', 'breeds', 'colors','age','gender','size','description','photos', 'status', 'contact', '_links']
                    }]
                }
            ]
        })
        const savedAnimals = userWithSavedAnimals.saved_animals.map(savedAnimal => (
            {
                id: savedAnimal.id,
                animal: savedAnimal.animal
            }
        ))
        res.render('saved-animals', {
            savedAnimals
        })
        // res.status(200).json(savedAnimals)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
