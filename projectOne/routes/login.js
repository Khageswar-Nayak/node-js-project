const express = require("express");

const router = express.Router();

// admin/add-product =>GET
router.get("/login", (req, res, next) => {
  res.send(
    "<form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)'  action='/message-form' method='POST'><input id='username' type='text' name='userName' placeholder='enter username'/><button type='submit'>Login</button></form>"
  );
});

// admin/add-product =>POST
router.post("/message-form", (req, res, next) => {
  //   console.log(req.body);

  res.redirect("/");
});

module.exports = router;
