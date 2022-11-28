const express = require("express");
const router = express.Router();
const myProjects = require("../controllers/project.controller");

router
    .get('/',myProjects.getProjects)
    .get('/:projectId', myProjects.getProjectById);
    // .get('/:projectId/LearningObject', myProjects.getLearningObject);


module.exports = router;
