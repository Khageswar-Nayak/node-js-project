const express = require("express");

const router = express.Router();

// admin/add-product =>GET
router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/add-product' method='POST'><input type='text' name='title' /><input type='text' name='size' /><button type='submit'>Add Product</button></form>"
  );
});

// admin/add-product =>POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body); //it gives undefined if we don't install third party package
  res.redirect("/"); // we can redirect to any path using redirect function
});

module.exports = router;
