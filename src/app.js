"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp").service("SharedService", function(){
      return {name: 'Sneha'};
    })

    angular.module("myApp").controller("parentController",[
      '$scope',
      function($scope){
        $scope.model = {name : 'deeapk'}
      }
    ])
    .controller("controller1", [
      '$scope',
      function($scope){}
    ])
    .controller("controller2", [
      '$scope',
      function($scope){}
    ])
    .controller('controller3', [
      '$scope', 'SharedService',
      function($scope, SharedService) {
        $scope.model = SharedService;
      }
    ])
    .controller('controller4', [
      '$scope', 'SharedService',
      function($scope, SharedService) {
        $scope.model = SharedService;
      }
    ])
})();
