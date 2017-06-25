"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("errorController", [
      function(){
          var vm = this;
          vm.throwError=function(){
            throw new Error("A new error : " + (new Date()));
          }
      }
    ])
    .factory('$exceptionHandler', function(){
      return function(exception, cause){
        console.log("Custom Error Logging ", exception, cause);
      }
    })
})();
