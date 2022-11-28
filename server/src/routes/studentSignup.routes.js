//Routes go in here.

const express = require("express");
const studentRouter = express.Router();
const signupRouter = express.Router();
const student = require("../controllers/studentProfileViewer.controller.js");
const studentReg = require("../controllers/studentSignUp.controller.js");

//Student Profile viewer page
studentRouter.get("/teacher/:teacherID", student.getStudents);

//Student Sign Up
signupRouter.post("/", studentReg.studentSignUp);

module.exports = { studentRouter, signupRouter };
