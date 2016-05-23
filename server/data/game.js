var mongoose = require("mongoose");
var gameSchema = mongoose.Schema({
    gameName: String,
    creatorAddress: String,
    gameAddress: String,
    gameContract: String,
    gameContractHash:String,
    contributors: [{address: String, equity: Number}],
    canDelete: Boolean
});

module.exports = mongoose.model("game", gameSchema);