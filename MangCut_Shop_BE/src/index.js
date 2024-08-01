const express = require("express");
const app = express();
const port = 3333;
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
//runkit.com/embed/save
https: app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
