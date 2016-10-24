"use strict";
(function() {
    angular.module("diagnostics")
        .controller("errorProneController", ["alerting", "$http", errorProneController]);

    function errorProneController(alerting, $http) {
        var model = this;

        model.alertTypes = alerting.alertTypes;


        model.alertType = model.alertTypes[0];
        model.alertMessage = "";

        model.createAlert = function() {
            alerting.addAlert(model.alertType, model.alertMessage);
        };

        model.createException = function() {
            throw new Error("Something has gone wrong");
        };

        model.showSpinner = function() {
            $http.get("/api/slow");
        };
    };
}());