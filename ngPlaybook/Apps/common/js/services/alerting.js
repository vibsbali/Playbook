﻿"use strict";
(function () {
    angular.module("common")
        .factory("alerting", alerting);

    function alerting() {
        var currentAlerts = [];

        return {
            addAlert: addAlert,
            addDanger: addDanger,
            addWarning: addWarning,
            addInfo: addInfo,
            addSuccess: addSuccess,
            currentAlerts: currentAlerts
        };

        function addWarning(message) {
            addAlert("warning", message);
        };

        function addDanger(message) {
            addAlert("danger", message);
        };

        function addInfo(message) {
            addAlert("info", message);
        };

        function addSuccess(message) {
            addAlert("warning", message);
        };

        function addAlert(type, message) {
            currentAlerts.push({
                type: type,
                message: message
            });
        };
    };

}());