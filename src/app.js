"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("capitalizeController", [
      function(){
          var vm = this;
          vm.userText = null;
          vm.capitalizedText = "";
          vm.capitalize = () => {
            vm.capitalizedText = vm.userText
          };
      }
    ])
    .filter("capitalize", function() {
        return function(str) {
          return str.split(" ").map(word => word.substring(0,1).toUpperCase()+word.substring(1)).join(" ");
        }
    });

    })();
