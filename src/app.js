"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("numberController", [
      function(){
          var vm = this;
          vm.randomNumberGenerator = function(count){
            //console.log(count);
            count = count || 10;
            var items = [];
            for(var i=0; i<count; i++){
              items.push(Math.ceil(Math.random()*1000));
            }
            return items;
          }

          vm.sequentialNumberGenerator = function(count){
            count = count || 10;
            var items = [];
            for(var i=0; i<count; i++){
              items.push(i + 1);
            }
            return items;
          }
      }
    ])
    .directive("dcrNumberGenerator", function(){
      return {
        scope : {
          numberGenerator : "&",
          count : "=?"
        },
        restrict : 'EA',
        templateUrl : "templates/dcrNumberGenerator.html",
        controller : function($scope) {
          //console.log("In controller", $scope, $scope.count, $scope.numberGenerator);
          if($scope.numberGenerator) {
            $scope.numbers = $scope.numberGenerator({'count':$scope.count});
          }
        }
      }
    })
})();
