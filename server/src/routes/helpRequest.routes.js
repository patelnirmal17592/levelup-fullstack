const express = require("express");
const helpRequestRouter = express.Router();
const helpRequestUpdateRouter = express.Router();
const helpRequest = require("../controllers/helpRequest.controllers.js");

// Help Request POST
helpRequestRouter.post("/", helpRequest.postHelpRequest);

// Help Request GET
helpRequestRouter.get("/:teacherID", helpRequest.getHelpRequest);

// Help Request POST (update)
helpRequestUpdateRouter.post("/", helpRequest.updateHelpRequest);


module.exports = { helpRequestRouter, helpRequestUpdateRouter };
