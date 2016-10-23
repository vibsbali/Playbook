"use strict";
(function () {

    angular.module("common")
        .factory("formEncode", formEncode);

   function formEncode() {
        return function(data) {
            var pairs = [];

            for (var name in data) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            return pairs.join('&').replace(/%20/g, '+');
        };
    };
}());