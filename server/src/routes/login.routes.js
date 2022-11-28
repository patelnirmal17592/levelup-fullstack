const express = require("express");
const teachersLoginRouter = express.Router();
const studentsLoginRouter = express.Router();
const teacherLogin = require("../controllers/login.controller.js");
const studentLogin = require("../controllers/login.controller.js");

//Teacher Login router
teachersLoginRouter.post("/", teacherLogin.loginTeacher);
studentsLoginRouter.post("/", studentLogin.loginStudent);

module.exports = { teachersLoginRouter, studentsLoginRouter };
