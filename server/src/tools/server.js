"use strict";

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("../routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development" || app.get("env") === "test") {
  app.use((err, req, res, next) => {
    console.log("error", err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

//default to production
app.use((err, req, res, next) => {
  console.log("error", err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

module.exports = app;
