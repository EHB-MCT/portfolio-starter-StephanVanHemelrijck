const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");
const knexConfig = require("./knexfile.js");
const faker = require("faker");

// Database
const db = knex(knexConfig.development);

// App
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
