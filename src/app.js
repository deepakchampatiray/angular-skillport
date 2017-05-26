"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("usersController", [
      function(){
        this.languages = ['Java', 'C++', 'python', 'C#', 'Go', 'Ruby', 'Javascript']
        this.user = {
          "firstName": "Cherie",
          "lastName": "Anderson",
          "favoriteLanguage" : "Javascript",
          "isBusy" : null
        }
      }
    ])
    .filter('yesorno', function(){
      return function(val) {
        if(val === true)
          return 'Yes';
        else if(val === false)
          return 'No';
        else
          return 'unknown';
      }
    });
})();
