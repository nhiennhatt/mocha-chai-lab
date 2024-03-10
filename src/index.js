require("dotenv/config");
require("./config/mongo");

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/router");

const app = express();

app.use(bodyParser.json());
app.use(router);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome!"
  });
});

app.listen(3000, () => {
  console.log("Server is living at port 3000");
});
