"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("userController", [
      function(){
          var vm = this;
          vm.users = ['Deepak', 'Sneha', 'Jitesh', 'Sunil'];
          vm.typeOf = function(val) {
            return typeof(val);
          }
      }
    ]);
})();
