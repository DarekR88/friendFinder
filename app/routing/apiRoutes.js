var path = require('path');

var friendsData = require("../data/friends.js")

module.exports = function (app) {
    app.get("/api/friendsList", function (req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friendsList", function (req, res) {
        var userAnswers = req.body.answers

    })
}
