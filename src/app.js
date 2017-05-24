"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("customerController", [
      function(){
        this.firstName = "hello world";
        this.lastName = "champatiray";
        this.accountType = "savings";
        this.accountBalance = 1234.56;
      }
    ])
    .filter("capitalize", [function(){
      return function(val) {
        return val.split(" ")
              .map(function(str) {
                return str[0].toUpperCase()+str.substring(1).toLowerCase();
              })
              .join(" ");
      }
    }])
})();
