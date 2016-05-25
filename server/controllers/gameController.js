var mongoose = require("mongoose");
var Game = require("../data/game");
var _ = require("underscore");

var router = require("express").Router();
router.route("/game/:id?").get(getGame).post(addGame).delete(deleteGame).put(addGameToBlockchain);

function getGame(req, res) {
    Game.find(function (err, game) {
        if (err)
            res.send(err);
        else
            res.json(game);
    });
}

function addGame(req, res) {
    var game = new Game(_.extend({}, req.body));
    game.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(game);
    });
}

function deleteGame(req, res) {
    var id = req.params.id;

        Game.remove({ _id: id }, function (err, removed) {
            if (err)
                res.send(err)
            else
                res.json(removed);
        })
}

function addGameToBlockchain(req, res){
    console.log("Calling addGameToBlockchain");
    var id = req.params.id;
    var addressToAdd = Math.random();
    var addressToAdd = req.body.gameAddress;
    console.log(addressToAdd);
    var game = new Game(_.extend({}, req.body));
    var query = { _id: id };
        Game.findById(id, function(err, game){
            if (err){
            console.log("***")
            console.log(err) } 
            else
            game.gameAddress=addressToAdd;
            game.save(function(err){
            if (err){
            console.log("***")
            console.log(err) } 
            else
                res.json(game);
            });
         });
}

function addContractToGame(req, res){
    console.log("Calling addContractToGame");
    var id = req.params.id;
    var gameContract = req.params.gameContract;
    var equity = req.params.contributor1Equity
        var query = { _id: id };
        Game.update(query, { gameContract: gameContract}, function (err) {
        if (err)
            res.send(err);
        else
            res.json(req.body);
    });
}

function findGame(req, res){
    var _name = req.params.name;
    Game.search({name: _name}, function (err, game) {
        if (err)
            res.send(err);
        else
            res.json(game);
    });

}

module.exports = router;