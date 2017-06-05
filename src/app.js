"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("carController", ['$scope',
      function($scope){
          $scope.car = {
            name : 'Tesla',
            model : 'Model S',
            make : 2017,
            type : 'Electric'
          }

          $scope.model3 = {
            name : 'Tesla',
            model : 'Model 3',
            make : 2018,
            type : 'Electric'
          }

          $scope.modelT = {
            name : 'Tesla',
            model : 'Model T',
            make : 2017,
            type : 'Electric SUV'
          }
      }
    ])
    .directive('dcrCar', function() {
      return {
        'templateUrl' : "templates/dcrCar.html"
      }
    })
    .directive("dcrCarIsolate", function(){
      return {
        scope : {
          car : "="
        },
        templateUrl : "templates/dcrCar.html"
      }
    })
})();
