require("colors");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.static(path.join(__dirname, ".")));

const port = 3000;
app.listen(port, () => {
  const title = "\n- server:".rainbow;
  const address = `http://localhost:${port}`.blue;
  console.log(title + address);
});
