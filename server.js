var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

//routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "resto.html"));
});