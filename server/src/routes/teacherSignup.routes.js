const express = require("express");
const teacherSignupRouter = express.Router();
const teacherSignUp = require("../controllers/teacherSignUp.controller.js");

teacherSignupRouter.post("/", teacherSignUp.teachersSignUp);

module.exports = { teacherSignupRouter };
