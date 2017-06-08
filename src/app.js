"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("userController", [
      function(){
          var vm = this;
          vm  .user = {
            name : 'Deepak',
            lastName : 'Champatiray',
            address : {
              flat : 'Apt A18-204',
              complex : 'Megapolis Splendour',
              locality : 'Hinjewadi Phase 3',
              city : 'Pune'
            }
          }
      }
    ])
    .directive("dcrUser", function(){
      return {
        scope : {
          user : "="
        },
        templateUrl : 'templates/dcrUser.html'
      }
    })
    .directive("dcrAddress", function() {
      return {
        scope : {
          address : "="
        },
        templateUrl : 'templates/dcrAddress.html'
      }
    })
    .directive("dcrUserTransclude", function(){
      return {
        scope : {
          user : "="
        },
        transclude : true,
        templateUrl : 'templates/dcrUserTransclude.html'
      }
    })
})();
