"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
        .controller("myController", 
                    [
                        "$scope"
                        ,function($scope) {
                            $scope.message = "Hello";
                            $scope.sayHello = function(name){
                                return $scope.message + " " + name;
                            }
                        }
                    ]
        );
})();