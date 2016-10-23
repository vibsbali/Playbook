"use strict";
(function () {

    angular.module("common")
        .directive("alerts",["alerting", alerts]);

    function alerts(alerting) {
        return {
            restrict: "AE",
            templateUrl: "/apps/common/templates/alerts.html",
            scope: true,
            link: function(scope) {
                scope.currentAlerts = alerting.currentAlerts;
            }
        };
    };
}());