const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("userDetail.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat found";
    }
    res.send(
      `${data}<form action='/' method='POST' onSubmit="document.getElementById('username').value =localStorage.getItem('username')">
        <input type='text' name='message' placeholder='enter message'/>
        <input type='hidden' name='username' id='username'/>
        <button type='submit'>Send message</button>
      </form>`
    );
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  // console.log(req.body.username);
  fs.writeFile(
    "userDetail.txt",
    `${req.body.username} ${req.body.message}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

module.exports = router;
