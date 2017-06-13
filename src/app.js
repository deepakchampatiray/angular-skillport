"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("temperatureController", [
      function(){
          var vm = this;
          vm.currentTemperature = 28;
      }
    ])
    .directive("dcrTemperature", function(){
      return {
        scope : {
          temperature : '@'
        },
        templateUrl : 'templates/dcrTemperature.html',
        link : function(scope, elem, attrs) {
          scope.className = "";
          attrs.$observe('temperature', function(newVal) {
            var t = attrs.temperature;
            scope.className = t<10?'bg-primary':(t>35?'bg-danger':'bg-success');
          });
        }
      }
    })
})();
