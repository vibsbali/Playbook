"use strict";
(function() {
    angular.module("diagnostics")
        .controller("errorProneController", ["alerting", errorProneController]);

    function errorProneController(alerting) {
        var model = this;

        model.alertTypes = alerting.alertTypes;


        model.alertType = model.alertTypes[0];
        model.alertMessage = "";

        model.createAlert = function() {
            alerting.addAlert(model.alertType, model.alertMessage);
        };
    };
}());