var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friendsList", function (req, res) {
    return res.json(reservations);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});