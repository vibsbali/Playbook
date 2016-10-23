"use strict";
(function () {

    angular.module("common")
        .factory("addToken", ["currentUser", "$q", addToken]);

    function addToken(currentUser, $q) {

        function request(config) {
            if (currentUser.profile.loggedIn) {
                config.headers.Authorization = "Bearer " + currentUser.profile.token;
            }

            return $q.when(config);
        };

        return {
            request: request
        }
    };
}());