// Controls http requests from client/controllers/search

var router = require("express").Router();

router.get("/", getWords);

function getWords(req, res) {
    var WordList = require("../models/word-list").WordList;
    
    // use distinct to return wordlist array
    WordList.distinct("wordlist").lean().exec()
        .then(function(results){
            res.status(200).json(results);
        })
        .catch(function(err) {
            console.log("Error: " + err);
            res.status(500).send(err.message);
        });
}

module.exports = router;