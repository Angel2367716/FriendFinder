// ===============================================================================
const friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var bestFit = {
            name: "",
            photo: "",
            pointDifference: 1000
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        //totalPoDi = Total Points Difference
        let totalPoDi = 0;

        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalPoDi = 0;

            for(let f = 0; f < friends[i].scores[f]; f++){
                totalPoDi += Math.abs(parseInt(userScores[f]) - parseInt(friends[i].scores[f]));

                
                if (totalPoDi <= bestFit.pointDifference) {
                    bestFit.name = friends[i].name;
                    bestFit.photo = friends[i].photo;
                    bestFit.pointDifference = totalPoDi;
                }
            }
        }
        friends.push(userData);

        res.json(bestFit);
    });
}