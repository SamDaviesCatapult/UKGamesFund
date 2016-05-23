var dispatcher = require("../dispatcher");

function ContractStore() {
    var listeners = [];
    var contracts = [{ name: "Contract Clause No Delete", tagline:"This is a contract clause 1" }, 
                    { name: "Contract Clause 2",tagline:"This is a contract clause 1" }, 
                    { name: "Contract Clause 3", tagline:"This is a contract clause 1" }];

    function getContracts() {
        return contracts;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addContract(contract) {
        contracts.push(contract)
        triggerListeners();
    }

    function deleteContract(contract) {
        var _index;
        if(contract.name.indexOf("Delete") == -1){
        contracts.map(function (s, index) {
            if (s.name === contract.name) {
                _index = index;
            }
        });
        contracts.splice(_index, 1);
    }
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(contracts);
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
        getContracts: getContracts,
        onChange: onChange
    }
}

module.exports = ContractStore();