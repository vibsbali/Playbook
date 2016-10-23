"use strict";
(function () {
    angular.module("common").factory("localStorage", localStorage);

    function localStorage($window) {

        //we get access to native localStorage via $window service
        var store = $window.localStorage;

        var add = function (key, value) {
            value = angular.toJson(value);
            store.setItem(key, value);
        };

        var get = function(key) {
            var value = store.getItem(key);
            if (value) {
                value = angular.fromJson(value);
            }
            return value;
        };

        var remove = function(key) {
            store.removeItem(key);
        };

        return {
            add: add,
            get: get,
            remove: remove
        };
    };
}());