const http = require("http");

const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use("/add-product", (request, response, next) => { // The order which is presented matters -> Top to Bottom priority
  response.send("<h1>Add Product Page</h1>");
});

app.use("/",(request, response, next) => {
  response.send("<h1>Ho ho ho!</h1>");
})

const server = http.createServer(app);

server.listen(3000);