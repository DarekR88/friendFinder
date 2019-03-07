var path = require('path');

var friendsData = require("../data/friends.js")

module.exports = function (app) {
    app.get("/api/friendsList", function (req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friendsList", function (req, res) {
        var userAnswers = req.body.answers;
        var matchArray = [];
        var match = 0;
        for (var i = 0; i < friendsData.length; i++) {
            var diffInScore = 0;
            for (var b = 0; b < userAnswers.length; b++) {
                diffInScore += (Math.abs(parseInt(friendsData[i].answers[b] - parseInt(userAnswers[b]))));
            }
            matchArray.push(diffInScore);
        }
        for (var i = 0; i < matchArray.length; i++) {
            if (matchArray[i] <= matchArray[match]) {
                match = i;
            }
        }
        var bestMatch = friendsData[match];
        res.json(bestMatch);
        friendsData.push(req.body);
    



})
}
