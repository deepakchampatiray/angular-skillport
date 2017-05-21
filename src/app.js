"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
        .controller("parentController1",
                    [
                        "$scope"
                        ,function($scope) {
                          $scope.name = "deepak";
                        }
                    ]
        )
        .controller("childController1",
                    [
                        "$scope",
                        function($scope) {

                        }
                    ]
        )
        .controller("parentController2",
                    [
                        "$scope"
                        ,function($scope) {
                          $scope.model = {'name': "Sneha"};
                        }
                    ]
        )
        .controller("childController2",
                    [
                        "$scope",
                        function($scope) {

                        }
                    ]
        );
})();
