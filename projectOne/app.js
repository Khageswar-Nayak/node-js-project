const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      console.log("readingFile", data);
      res.write("<html>");
      res.write("<header><title>Enter Message</title></header>");
      res.write("<body>");
      res.write(`<p>${data}</p>`);
      res.write(
        `<form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>submit</button></form>`
      );
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log("savingData Error", err);
        }
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<header><title>My first Page</title></header>");
    res.write("<body><h1>Hello World !</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
