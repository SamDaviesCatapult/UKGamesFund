var mongoose = require("mongoose");
var Contract = require("../data/contract");
var _ = require("underscore");

var router = require("express").Router();
router.route("/contract/:id?").get(getContract).post(addContract).delete(deleteContract);

function getContract(req, res) {
    Contract.find(function (err, contract) {
        if (err)
            res.send(err);
        else
            res.json(contract);
    });
}

function addContract(req, res) {
    var contract = new Contract(_.extend({}, req.body));
    contract.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(contract);
    });
}

function deleteContract(req, res) {
    var id = req.params.id;

        Contract.remove({ _id: id }, function (err, removed) {
            if (err)
                res.send(err)
            else
                res.json(removed);
        })
}

function findGame(req, res){
    var _name = req.params.name;
    Contract.search({name: _name}, function (err, contract) {
        if (err)
            res.send(err);
        else
            res.json(contract);
    });

}

module.exports = router;