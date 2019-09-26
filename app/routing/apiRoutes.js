// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        let bestFit = {
            name: "",
            photo: "",
            pointDifference: 1000
        };

        console.log(req.body);

        let userData = req.body;
        let userScores = userData.scores;

        console.log(userScores);

        //totalPoDi = Total Points Difference
        const totalPoDi = 0;

        for (let f = 0; f < friends[f].scores[f]; f++) {
            totalPoDi += Math.abs(parseInt(userScores[f]) - parseInt(friends[f].scores[f]));

            if (totalPoDi <= bestFit.pointDifference) {
                bestFit.name = friends[f].name;
                bestFit.phoeot = friends[f].photo;
                bestFit.pointDifference = totalPoDi;
            }
        }
        friends.push(userData);

        res.json(bestFit);
    });
}