const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const controller = require('./controllers');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(controller);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./controllers/api/api.js"));
app.use(require("./controllers/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});