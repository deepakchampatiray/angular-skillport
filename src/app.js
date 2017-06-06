"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("stockController", [
      function(){
          var vm = this;
          vm.cars = [
            {
              make : 'Tesla',
              model : 'S',
              year : 2015,
              miles : 17000,
              features : {
                engine : 'Electric Drive',
                power : '400 bhp',
              },
              price : 32000
            },
            {
              make : 'Tesla',
              model : 'T',
              year : 2014,
              miles : 27000,
              features : {
                engine : 'Electric Drive',
                power : '500 bhp',
              },
              price : 42000
            }
          ];
      }
    ])
    .directive("dcrCarDetails", function(){
      return {
        scope : {
          make : '@',
          model : '@',
          year : '@',
          miles : '@',
          features : '@'
        },
        replace: true,
        restrict : 'EA',
        templateUrl : "templates/dcrCarDetails.html"
      }
    })
})();
