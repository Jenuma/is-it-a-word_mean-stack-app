// Controls http requests from client/controllers/search

var router = require("express").Router();

router.post("/", getWords);

function getWords(req, res) {
    var WordList = require("../models/word-list").WordList;
    var regex = new RegExp("(\\b\\w*" + req.body.payload + "\\w*\\b)", "gi");
    
    WordList.find({}).lean().exec()
        .then(function(results){
            var prefilteredWords = results[0].words.join(" ");
            var filteredWords = prefilteredWords.match(regex);
        
            res.status(200).json(filteredWords);
        })
        .catch(function(err) {
            console.log("Error: " + err);
            res.status(500).send(err.message);
        });
}

module.exports = router;
