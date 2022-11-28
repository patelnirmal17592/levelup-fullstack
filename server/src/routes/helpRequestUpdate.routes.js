const express = require("express");
const helpRequestUpdateRouter = express.Router();
const helpRequestUpdate = require("../controllers/helpRequest.controllers.js");

// Help Request POST update
helpRequestUpdateRouter.post("/", helpRequestUpdate.updateHelpRequest);

module.exports = { helpRequestUpdateRouter };
