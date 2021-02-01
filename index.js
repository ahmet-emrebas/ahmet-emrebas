const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(3000, () => {
  console.log("server is up and running at port 3000");
});
