const express = require('express');
const progressRouter = express.Router();
const progressHistory = require('../controllers/progressHistory.controller')

progressRouter
.get('/students/:studentID', progressHistory.getProgressHistoryByStudentID)
.post('/students/:studentID/projects/:projectID/submission', progressHistory.saveProgressHistory)

module.exports = progressRouter;