const { PORT, app } = require("./app");

// Start server
app.listen(PORT, (err) => {
  if (err) return console.log(err);

  console.log(`Running on port ${PORT}, browse to http://localhost:${PORT}`);
});
