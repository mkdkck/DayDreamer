// index.js

// Importing necessary modules
const express = require('express'); // Express framework for creating the router
const router = express.Router(); // Creating a router for these specific routes
const isAuthenticated = require('../../config/middleware/isAuthenticated'); // Middleware to check if the user is logged in
const db = require('../../models');


// Route for the home page
// GET request to the root '/'
router.get('/', async (req, res) => {
    // Check if the user is logged in
    if (req.user) {
        res.redirect('/dashboard'); // If logged in, redirect to the dashboard
    } else {
        try {
            const dreamsData = await db.Dream.findAll({
                limit: 5,
                include: [
                  {
                    model: db.User,
                    attributes: ['username'],
                  },
                ],
            });
            const dreams = dreamsData.map((dream) =>
            dream.get({ plain: true }));
            res.render('home', {
                dreams
            })
        } catch (err) {
            res.status(500).json(err);
        }
        
    }
});

// Route for the dashboard
// GET request to '/dashboard'
// 'isAuthenticated' middleware is used to protect this route
router.get('/dashboard', isAuthenticated, async (req, res) => {
    // Render the dashboard view/template
    // You can pass in any user data or other necessary data to the template
    try {
        const dreamsData = await db.Dream.findAll({
            include: [
              {
                model: db.User,
                attributes: ['username'],
              },
            ],
            where:{user_id: req.user.id}
        });
        const dreams = dreamsData.map((dream) =>
        dream.get({ plain: true }));
        const userIsOwner = true;

        res.render('dashboard', {
            login: req.user, // Example of passing the logged-in user's data to the template
            dreams,
            userIsOwner,
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dreams/edit/:id', isAuthenticated, async (req, res) => {
    try {
        const {dataValues: editDream} = await db.Dream.findByPk(req.params.id);
        res.render('edit', {
            login: req.user,
            dreamId: req.params.id,
            editDream    
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('*', (req, res) => {
    res.redirect('/');
  });




// Exporting the router for use in other parts of the application
module.exports = router;
