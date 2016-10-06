var mongoose = require("mongoose");

var WordSchema = new mongoose.Schema({
    word: String, default ""
});

exports.Word = mongoose.model("Word", WordSchema);