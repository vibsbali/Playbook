"use strict";
(function () {

    angular.module("ui")
        .controller("otfRatingController",
            function($scope) {

                this.initialize = function(min, max) {
                    $scope.stars = new Array(max - min + 1);
                }

                $scope.click = function($index) {
                    $scope.value = $index + 1;
                };

                $scope.mouseover = function($index) {
                    $scope.preview = $index;
                };

                $scope.mouseout = function() {
                    $scope.preview = -1;
                };

                $scope.styles = function($index) {
                    return {
                        "glyphicon": true,
                        "glyphicon-star": $index < $scope.value,
                        "glyphicon-star-empty": $index >= $scope.value,
                        "starpreview": $index <= $scope.preview
                    };
                };
            });

    angular.module("ui").directive("otfRating", rating);

    function rating() {
        return {
            scope: {
                value: "="
            },
            templateUrl: "/apps/ui/templates/rating.html",
            controller: "otfRatingController",
            require: "otfRating",
            link: function (scope, element, attributes, controller) {
                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");

                controller.initialize(min, max);

                //scope.$watch("value",
                //    function (newValue) {
                //        element.empty();
                //        for (var i = 0; i < newValue; i++) {
                //            element
                //                .append("<button class='btn btn-default btn-xs'><span class='glyphicon glyphicon-star'></span></button>");
                //        }
                //    });
                //element.on("click",
                //    function () {
                //        scope.$apply(function () {
                //            if (scope.value < max) {
                //                scope.value += 1;
                //            } else {
                //                scope.value = min;
                //            }
                //        });
                //    });
            }
        };
    };
}());