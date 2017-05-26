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
        };

        this.validateForm = function(form) {
          console.log("validate");
          alert("Form is valid : " + form.$valid);
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
    })
    .filter("prettyJSON", () => json => JSON.stringify(json, null, " "));
})();
