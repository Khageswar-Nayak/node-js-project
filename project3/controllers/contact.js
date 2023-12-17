const path = require("path");

const rootDir = require("../util/path");

exports.getContactUs = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postSuccessPage = (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
};

exports.getSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
