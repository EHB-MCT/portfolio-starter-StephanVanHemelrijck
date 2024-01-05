const express = require("express");

// Knex
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

// Express
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  req.db = knex;
  next();
});

// Routes
app.use("/api/users", require("./routes/users"));

/**
 * GET endpoint, providing hello world
 *
 * @returns {string} Hello World
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(PORT, (err) => {
  if (err) return console.log(err);

  console.log("Running on port 3000");
});
