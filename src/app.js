"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("animalController", [
      function(){
          var vm = this;
          vm.bird = {
            name : 'bird'
          };
          vm.horse = {
            name :'horse'
          }
          vm.snake = {
            name : 'snake'
          }
      }
    ])
    .controller("birdController", ['$scope',
      function($scope) {
        $scope.state = "perching";
        $scope.move = function(){
          $scope.state = "flying";
          $scope.animal.name = $scope.state + " " + $scope.animal.name;
        }
      }
    ])
    .controller("horseController", ['$scope',
      function($scope) {
        $scope.state = "resting";
        $scope.move = function(){
          $scope.state = "galloping";
          $scope.animal.name = $scope.state + " " + $scope.animal.name;
        }
      }
    ])
    .controller("snakeController", ['$scope',
      function($scope) {
        $scope.state = "sleeping";
        $scope.move = function(){
          $scope.state = "slithering";
          $scope.animal.name = $scope.state + " " + $scope.animal.name;
        }
      }
    ])
    .directive("dcrAnimal", function(){
      return {
        scope : {
          animal : '='
        },
        replace: true,
        restrict : 'EA',
        templateUrl : "templates/dcrAnimal.html",
        controller : '@',
        name : 'controllerName'
      }
    })
})();
