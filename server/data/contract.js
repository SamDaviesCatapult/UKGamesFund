var mongoose = require("mongoose");
var contractSchema = mongoose.Schema({
    name: String,
    clauses: String,
    canDelete: Boolean
});

module.exports = mongoose.model("contract", contractSchema);