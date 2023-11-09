const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<header><title>My first Page</title></header>");
    res.write("<body><h1>Welcome Home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<header><title>My first Page</title></header>");
    res.write("<body><h1>Welcome to AboutUs page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<header><title>My first Page</title></header>");
    res.write("<body><h1>Welcome to Node js project</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<header><title>My first Page</title></header>");
  res.write("<body><h1>Hello World !</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
