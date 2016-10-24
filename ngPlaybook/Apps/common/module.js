(function() {
    var app = angular.module("common", []);

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push("requestCounter");
    });
}());