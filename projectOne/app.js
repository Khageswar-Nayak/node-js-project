////     EXPRESS JS           /////////

// const fs = require("fs");
const express = require("express");
const app = express();

// for parsing the incoming request body we have to install third party package like body-parser

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><input type='text' name='size' /><button type='submit'>Add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body); //it gives undefined if we don't install third party package
  res.redirect("/"); // we can redirect to any path using redirect function
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello From Express ! </h1>");
});

app.listen(4000);
