"use strict";
(function () {

    angular.module("ui").factory("confirmPromotion", confirmPromotion);

    function confirmPromotion($modal) {

        return function(employee) {

            var options = {
                templateUrl: "templates/confirmPromotion.html",
                controller: function() {
                    var vm = this;
                    vm.employee = employee;
                },
                controllerAs: "model"
            };

            return $modal.open(options).result;
        };
    };
}());
