"use strict";
(function () {

    angular.module("common")
        .factory("oauth", ["$http", "formEncode", "currentUser", oauth]);

    function oauth($http, formEncode, currentUser) {

        function login(username, password) {
            var data = {
                username: username,
                password: password,
                grant_type: "password"
            };

            var formEncodedData = formEncode(data);

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };

            return $http.post("/login", formEncodedData, config)
                        .then(function(response) {
                            currentUser.setProfile(username, response.data.access_token);
                    return username;
                });
        };

        return {
            login: login
        };
    };
}());