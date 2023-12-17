const express = require("express");
const contactcontrollers = require("../controllers/contact");
const router = express.Router();

router.get("/contact", contactcontrollers.getContactUs);

router.post("/contact", contactcontrollers.postSuccessPage);
module.exports = router;
