var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

var friendsList = [
    {
        name: "Kit T. Kat",
        quote: "I'm one cool cat!",
        url: "images/Kit.jpg",
        answers: [
            5,
            5,
            5,
            2,
            5,
            2,
            4,
            2,
            2,
            3
        ]
    },
    {
        name: "Blue Falcon",
        quote: "I am the Blue Falcon.",
        url: "images/falcon.jpg",
        answers: [
            4,
            2,
            1,
            4,
            1,
            1,
            3,
            1,
            4,
            1
        ]
    },
    {
        name: "Scooby-Doo",
        quote: "Ret's get outta here!",
        url: "images/scooby.jpg",
        answers: [
            1,
            4,
            4,
            1,
            3,
            1,
            4,
            1,
            5,
            2
        ]
    },
    {
        name: "Shakira",
        quote: "Leyley lo ley lo ley!",
        url: "images/shakira.jpg",
        answers: [
            3,
            1,
            3,
            5,
            1,
            3,
            4,
            1,
            1,
            3
        ]
    },
    {
        name: "Gabrielle Union",
        quote: "If there were a bacon-scented candle, that would be my dream.",
        url: "images/union.jpg",
        answers: [
            4,
            2,
            1,
            2,
            5,
            5,
            2,
            1,
            2,
            5
        ]
    }
]


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friendsList", function (req, res) {
    return res.json(friendsList);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});