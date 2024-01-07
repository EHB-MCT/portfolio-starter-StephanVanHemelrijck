const express = require("express");

// Knex
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

// Express
const app = express();
const PORT = 80;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  req.db = knex;
  next();
});

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/games", require("./routes/games"));

/**
 * GET endpoint for the documentation
 */
app.get("/", (req, res) => {
  res.render("docs", { title: "GameLibrary - Documentation" });
});

/**
 * Error handler
 *
 * @returns {JSON} Error message
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Export app
module.exports = {
  app,
  PORT,
};
