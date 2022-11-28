const express = require('express')
const studentProfileRouter = express.Router();
const { controller, profilePictureController, editProfile } = require('../controllers/studentProfile.controller')

// diff routes for diff requests
studentProfileRouter.get('/:id', controller);
studentProfileRouter.put('/:id', profilePictureController);
studentProfileRouter.put('/update/:id', editProfile)

module.exports = { studentProfileRouter }