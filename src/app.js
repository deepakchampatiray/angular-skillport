"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
        .controller("myController", 
                    [
                        "$scope"
                        ,"$interval"
                        ,function($scope, $interval) {
                            var fruits = ["apple", "banana", "cherry", "mango", "strawberry", "peach", "orange"];
                            $scope.itemIndex = null;
                            $scope.currentItem = "";
                            $scope.getItem = function(){
                                $scope.currentItem = fruits[$scope.itemIndex];
                            }

                            $interval(function(){
                                console.log(arguments);
                                $scope.randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
                            }, 2000, 10);
                        }
                    ]
        );
})();