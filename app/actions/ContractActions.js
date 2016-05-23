var dispatcher = require("../dispatcher");

module.exports = {
    addContract:function(contract){
        dispatcher.dispatch({
           contract:contract,
           type:"contract:addContract" 
        });
    },
    deleteContract:function(contract){
        dispatcher.dispatch({
           contract:contract,
           type:"contract:deleteContract" 
        });
    },
    findContract:function(contract){
        dispatcher.dispatch({
          contract:contract,
          type:"contract:findContract"
        });
    }
}