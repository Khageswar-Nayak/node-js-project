const path = require("path");
const express = require("express");
const successControllers = require("../controllers/contact");
const router = express.Router();

router.get("/success", successControllers.getSuccess);

module.exports = router;
