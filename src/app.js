"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("usersController", [
      function(){
        this.user = {
          "firstName": "Cherie",
          "lastName": "Anderson",
          "birthDate": 1043333088435
        }
      }
    ]);
})();
