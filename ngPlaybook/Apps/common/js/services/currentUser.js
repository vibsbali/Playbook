"use strict";
(function () {

    angular.module("common").factory("currentUser", ["localStorage", currentUser]);

    function currentUser(localStorage) {

        var USERKEY = "utoken";

        //profile will be result of some function that gets called
        var profile = initialize();

        function initialize() {
            var user = {
                username: "",
                token: "",
                get loggedIn() {
                    return this.token !== "";
                }
            };

            var localUser = localStorage.get(USERKEY);
            if (localUser) {
                user.username = localUser.username;
                user.token = localUser.token;
            }

            return user;
        };

        function setProfile(username, token) {
            //the profile is an object that we have recieved from Initialize
            profile.username = username;
            profile.token = token;
            //set the token in $window.localStorage
            localStorage.add(USERKEY, profile);
        };
    
        return {
            setProfile: setProfile,
            profile: profile
        };
    };
}());