"use strict";
(function () {
    angular.module("common")
        .factory("alerting", ["$timeout", alerting]);

    function alerting($timeout) {
        var currentAlerts = [];
        var alertTypes = ["success", "info", "warning", "danger"];

        return {
            addAlert: addAlert,
            addDanger: addDanger,
            addWarning: addWarning,
            addInfo: addInfo,
            addSuccess: addSuccess,
            currentAlerts: currentAlerts,
            alertTypes: alertTypes,
            removeAlert: removeAlert
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

        function removeAlert(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] === alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }  
        };

        function addAlert(type, message) {
            var alert = {
                type: type,
                message: message
            };

            currentAlerts.push(alert);

            //This will remove the alert 
            $timeout(function () {
                    removeAlert(alert);
                }, 5000);
        };
    };

}());