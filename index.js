const process = require("process");
const express = require("express");
const app = express();
const os = require("os");

const PORT = process.argv[2];
app.get("/", (req, res) => {
  res.send("Hello there");
});

const server = app.listen(PORT || 3000, () => {
  console.log(
    `server is up and running at \nPORT:  port ${PORT} \nHOST: ${
      server.address().address
    }`
  );
});
