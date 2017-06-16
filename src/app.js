"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("timerController", ['$timeout',
      function($timeout){
          var vm = this;
          var timeoutPromise = null;
          vm.timerValue = 20;
          vm.startCountDown = function() {
            countdown();
          }
          vm.stopCountDown = function() {
            $timeout.cancel(timeoutPromise);
          }

          var decrementTimer = function() {
            vm.timerValue--;
          }
          function countdown() {
            if(vm.timerValue != 0) {
              decrementTimer();
              timeoutPromise = $timeout(countdown, 1000);
            }
          }
      }
    ])
    .filter("timerFormatter", function(){
      return function(timeVal){
        //console.log(timeVal);
        return (Math.floor(timeVal/60) + " min, ") + (timeVal % 60) + " sec";
      }
    });
})();
