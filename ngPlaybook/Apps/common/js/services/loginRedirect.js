"use strict";
(function () {
    angular.module("common")
        .factory("loginRedirect", ["$q", "$location", loginRedirect]);

    function loginRedirect($q, $location) {

        var lastPath = "/";

        function responseError(response) {
            if (response.status == 401) {
                lastPath = $location.path();
                $location.path("/login");
            }
            return $q.reject(response);
        };


        function redirectPostLogin() {
            $location.path(lastPath);
            lastPath = "/";
        };

        return {
            responseError: responseError,
            redirectPostLogin: redirectPostLogin
        };
    };
}());