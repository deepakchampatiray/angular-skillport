"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("customerController", [
      function(){
        this.firstName = "Deepak";
        this.lastName = "Champatiray";
        this.accountType = "Savings";
        this.accountBalance = 1234.56;
      }
    ]);
})();
