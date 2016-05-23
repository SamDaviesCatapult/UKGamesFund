var dispatcher = require("../dispatcher");
var gameService = require("../services/gameService");

function GameStore() {
    var listeners = [];

    function onChange(listener) {
        getGame(listener);
        listeners.push(listener);
    }
    
    function getGame(cb){
        gameService.getGame().then(function (res) {
            cb(res);
        });
    }

    function addGame(game) {
        gameService.addGame(game).then(function (res) {
            console.log(res);
            triggerListeners();
            gameService.addGameToBlockchain(res);
            triggerListeners();
        });
    }

    function deleteGame(game) {
        gameService.deleteGame(game).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function addContractToGame(game){
        console.log("Adding contract to game in GameStore");
        gameService.addContractToGame(game).then(function (res){
            console.log(res);
            triggerListeners();
        });
    }

    function addEquityToGame(game){
        console.log("Adding equity to game; "+JSON.stringify(game));
        gameService.addEquityToGame(game).then(function (res){
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getGame(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "game") {
            switch (split[1]) {
                case "addGame":
                    addGame(payload.game);
                    break;
                case "deleteGame":
                    deleteGame(payload.game);
                    break;
                case "addContractToGame":
                    addContractToGame(payload.game);
                    break;
                case "addEquityToGame":
                    addEquityToGame(payload.game);
                    break;
                case "addGameToBlockchain":
                    console.log("Adding game to blockchain");
                    addGameToBlockchain(payload.game);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = GameStore();