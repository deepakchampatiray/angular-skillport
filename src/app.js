"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("usersController", ['$scope',
      function($scope){
          var vm = this;
          vm.message = "";
          vm.code = "";

          $scope.$watch(
                    function(){return vm.code},
                    function(newVal, oldVal) {
                      if(newVal === 'SecretCode')
                        vm.message = "You have been granted access";
                      else
                        vm.message = "Please try again";
                    }
                 );
      }
    ])
    })();
