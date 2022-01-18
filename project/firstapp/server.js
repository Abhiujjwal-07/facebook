const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world"); //http://localhost:3000
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3])); //http://localhost:3000/api/courses
    res.end();
  }
});

server.listen(3000);
console.log("listening on port 3000...");
