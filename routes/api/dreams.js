// dreams.js

// Importing necessary modules
const express = require('express'); // Express framework for creating the router
const router = express.Router(); // Creating a router for these specific routes
const dreamsController = require('../../controllers/dreamsController'); // Importing the dreamsController

// Route for getting all dreams
// GET request to /api/dreams
router.get('/', (req, res) => {
    dreamsController.findAll(req, res);
});

// Route for getting a single dream by id
// GET request to /api/dreams/:id
router.get('/:id', (req, res) => {
    dreamsController.findById(req, res);
});

// Route for creating a new dream
// POST request to /api/dreams
router.post('/', (req, res) => {
    dreamsController.create(req, res);
});

// Route for updating a dream by id
// PUT request to /api/dreams/:id
router.put('/:id', async (req, res) => {
    try {
    dreamsController.update(req, res);
    const updatedDream = await db.Dream.findByPk(req.params.id);
    res.json(updatedDream);
    } catch (err) {
        res.status(422).json(err); 
    }
});

// Route for deleting a dream by id
// DELETE request to /api/dreams/:id
router.delete('/:id', (req, res) => {
    dreamsController.remove(req, res);
});


router.get('/delete/:id', (req, res) => {
     dreamsController.remove(req, res);
})


// Exporting the router for use in other parts of the application
module.exports = router;
