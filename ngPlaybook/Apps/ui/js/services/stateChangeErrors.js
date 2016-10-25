"use strict";
(function () {
    angular.module("ui")
        .run(function ($rootScope, alerting) {
            $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
                alerting.addDanger("Could not load " + toState.name);
            });
        });
}());