// defined route with login data returned from front end as router.post('/login') async (req, res) => {}
const router = require('express').Router();
const { User, Animals, SavedAnimal } = require('../models');

router.get('/all-animals', async (req, res) => {
    try {
        const animalsData = await Animals.findAll()
        // to test in insomnia use:
        // res.json(animals)
        // below is the correct format to implement handlebars to interact with data model and seeds allowing for get posts and delets. We can also allow for additional search paramaters only requiring adding a new route. 
        const animals = animalsData.map(animal => animal.get({plain: true}))
        res.render('animals', {
            animals
        // {{animals.name}} or {{name}}
        })
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
        console.log(userWithSavedAnimals)
        const savedAnimals = userWithSavedAnimals.saved_animals.map(savedAnimal => (
            {
                id: savedAnimal.id,
                animal: savedAnimal.animal.get({plain: true})
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
