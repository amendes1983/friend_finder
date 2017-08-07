var path = require("path");

var friendsData = require("./data/friends.js");

// ROUTING


module.exports = function(app) {


        app.get("/api/survey", function(req, res) {
            res.json(friendsData);
        });



        app.post("/api/survey", function(req, res) {

            if (friendsData.length < 5) {
                friendsData.push(req.body);
                res.json(true);
            } else {
                friendsData.push(req.body);
                res.json(false);
            }
        });