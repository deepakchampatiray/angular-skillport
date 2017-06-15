"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("userController", [
      function(){
          var vm = this;
          vm.user = {
            name : 'Deepak Champatiray',
            salary : 1027865.76,
            dateOfBirth : 545666700000
          }
      }
    ]);
})();
