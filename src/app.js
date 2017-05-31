"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("usersController", [
      function(){
          var vm = this;
          vm.obj = {
            "firstName": "Deepak",
            "lastName" : "Champatiray",
            "age" : 32,
            "today" : new Date()
          }
          vm.ang = angular;
      }
    ])

    })();
