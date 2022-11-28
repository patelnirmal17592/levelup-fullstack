const express = require("express");
const teacher = require("../controllers/teacher.controllers.js");
const studentProgressTracker = require("../controllers/progressTracker.controller.js");
// const updateProfile = require("../controllers/update.pic.controllers.js");

const teacherRouter = express.Router();
const progressTrackerRouter = express.Router();
// const teacherUpdatePicRouter = express.Router();

//Teacher Profile viewer page
teacherRouter.get("/:teacherID", teacher.getTeacher);

//Teacher Profile Pic update
// teacherUpdatePicRouter.post("/:teacherID", 
// updateProfile.updateProfilePic);


//Teacher Student Progress Tracker
progressTrackerRouter.get(
  "/:teacherID",
  studentProgressTracker.progressTracker
);

module.exports = { teacherRouter, progressTrackerRouter };
