"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
        .controller("myController", 
                    [
                        "$scope"
                        ,"$interval"
                        ,function($scope, $interval) {
                            $scope.randomValue = -999;
                            $scope.qty = 20;
                            $scope.cost = 1.78;
                            $interval(function(){
                                $scope.randomValue = Math.round(Math.random() * 100000);
                            }, 1000, 20);
                        }
                    ]
        );
})();