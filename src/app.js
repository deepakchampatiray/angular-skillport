"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    // .controller("temperatureController", [
    //   function(){
    //       var vm = this;
    //       vm.currentTemperature = 28;
    //   }
    // ])
    .directive("colorChangingSquare", function(){
      return {
        scope : {
          size : '@'
        },
        transclude : true,
        replace : true,
        templateUrl : 'templates/colorChangingSquare.html',
        link : function(scope, elem, attrs) {
          elem.on("mouseover", function(){
            console.log("mouse over", elem);
            elem.css("background-color", attrs.color);
          });

          elem.on("mouseout", function(){
            console.log("mouse out");
            elem.css("background-color", "");
          });
        }
      }
    })
})();
