"use strict";

(function () {
    angular.module("common")
        .config(function ($provide) {
            $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
                return function(exception, cause) {
                    $delegate(exception, cause);

                    var alerting = $injector.get("alerting");
                    alerting.addDanger(exception.message);
                };
            });
        });
}())