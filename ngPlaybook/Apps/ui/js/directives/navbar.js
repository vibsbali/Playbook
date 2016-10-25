"use strict";
(function () {
    angular.module("ui")
        .directive("navbar",
            function () {
                return {
                    templateUrl: "/apps/ui/templates/nav.html"
                };
            });
}())