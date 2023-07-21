const express = require("express");
const app = express();
const port = 3000;
var a = 1 ;
var b =2;
var t = a+b;

app.get("/tin-tuc", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
