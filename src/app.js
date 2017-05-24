"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("usersController", [
      function(){
        this.userList = [
                      {
                        "firstName": "Leonor",
                        "lastName": "Fleming",
                        "email": "leonorfleming@telpod.com"
                      },
                      {
                        "firstName": "Berg",
                        "lastName": "York",
                        "email": "bergyork@telpod.com"
                      },
                      {
                        "firstName": "Virginia",
                        "lastName": "Lindsay",
                        "email": "virginialindsay@telpod.com"
                      },
                      {
                        "firstName": "Rosalind",
                        "lastName": "Burris",
                        "email": "rosalindburris@telpod.com"
                      },
                      {
                        "firstName": "Clare",
                        "lastName": "Beasley",
                        "email": "clarebeasley@telpod.com"
                      },
                      {
                        "firstName": "Bowen",
                        "lastName": "Black",
                        "email": "bowenblack@telpod.com"
                      },
                      {
                        "firstName": "Ferguson",
                        "lastName": "Bush",
                        "email": "fergusonbush@telpod.com"
                      },
                      {
                        "firstName": "Lawson",
                        "lastName": "Lang",
                        "email": "lawsonlang@telpod.com"
                      },
                      {
                        "firstName": "Angie",
                        "lastName": "Hurst",
                        "email": "angiehurst@telpod.com"
                      },
                      {
                        "firstName": "Clarke",
                        "lastName": "England",
                        "email": "clarkeengland@telpod.com"
                      },
                      {
                        "firstName": "Fleming",
                        "lastName": "Walker",
                        "email": "flemingwalker@telpod.com"
                      }
                    ]
      }
    ]);
})();
