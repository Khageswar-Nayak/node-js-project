////     EXPRESS JS           /////////

// const fs = require("fs");
const express = require("express");
const app = express();

const loginRoutes = require("./routes/login");
const homeRoutes = require("./routes/home");

// for parsing the incoming request body we have to install third party package like body-parser

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000);
