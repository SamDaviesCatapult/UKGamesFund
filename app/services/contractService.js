var $ = require("jquery");
var promise = require("es6-promise");

var resourceUrl = "http://localhost:7777/api/contract";


module.exports = {
    addContract: function (contract) {
        var Promise = promise.Promise;
        console.log("calling example contract");
        //createExampleContract();
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(contract),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    getContract: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteContract: function (contract) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl + "/" + contract._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },

}