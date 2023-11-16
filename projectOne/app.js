////     EXPRESS JS           /////////

// const fs = require("fs");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next(); // allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("second middleware");
  res.send("<h1>Hello From Express ! </h1>");
});

app.listen(4000);
