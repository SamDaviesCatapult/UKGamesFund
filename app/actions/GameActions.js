var dispatcher = require("../dispatcher");

module.exports = {
    addGame:function(game){
        dispatcher.dispatch({
           game:game,
           type:"game:addGame" 
        });
    },
    deleteGame:function(game){
        dispatcher.dispatch({
           game:game,
           type:"game:deleteGame" 
        });
    },
    addEquityToGame:function(game){
      dispatcher.dispatch({
           game:game,
           type:"game:addEquityToGame" 
        });
    },
    addContractToGame:function(game){
      dispatcher.dispatch({
           game:game,
           type:"game:addContractToGame" 
        });
    },
    addGameToBlockchain:function(game){
      dispatcher.dispatcher({
        game:game,
        type:"game:addGameToBlockchain"
      })
    }
}