var dispatcher = require("../dispatcher");
var contractService = require("../services/contractService");

function ContractStore() {
    var listeners = [];

    function onChange(listener) {
        getContract(listener);
        listeners.push(listener);
    }
    
    function getContract(cb){
        contractService.getContract().then(function (res) {
            cb(res);
        });
    }

    function addContract(contract) {
        contractService.addContract(contract).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteContract(contract) {
        contractService.deleteContract(contract).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getContract(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "contract") {
            switch (split[1]) {
                case "addContract":
                    addContract(payload.contract);
                    break;
                case "deleteContract":
                    deleteContract(payload.contract);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = ContractStore();