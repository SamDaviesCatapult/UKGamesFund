var mongoose = require("mongoose");

var gameSchema = mongoose.Schema({
	gameName: String,
	talHolders: [{address: String, 
		equitySilver: Number,
		equityBronze: Number,
		status: String
	}],
	gameAddress: String,
	gameHash: String,
	goldenTalsIssued: Number,
	goldenTalsAllocated: Number,
	silverTalsIssued: Number,
	silverTalsAllocated: Number,
	silverTalsRevenuePercent: Number,
	bronzeTalsIssued: Number,
	bronzeTalsAllocated: Number,
	bronzeTalsAllocated: Number,
	newCreativeFounderPrinciples: String,
	newOtherCreativePrinciples: String,
	creativeFounderMutualLeave: String,
	creativeFounderDisuputeLeave:String,
	otherCreativeLeaves:String,
	gameABI:String,
	fileHash:String,
});

module.exports = mongoose.model("game", gameSchema);