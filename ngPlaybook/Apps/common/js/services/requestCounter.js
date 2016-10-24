"use strict";
(function () {
    
    angular.module("common")
        .factory("requestCounter", requestCounter);
   
    function requestCounter($q) {

        var requests = 0;
        
        function request(config) {
            requests += 1;
            return config;
        };

        function response(response) {
            requests -= 1;
            return $q.when(response);
        };

        function requestError(error) {
            requests -= 1;
            return $q.reject(error);
        };

        function responseError(error) {
            requests -= 1;
            return $q.reject(error);
        };

        function getRequestCount() {
            return requests;
        };

        return {
            request: request,
            response: response,
            requestError: requestError,
            responseError: responseError,
            getRequestCount: getRequestCount
        };

    };
}());