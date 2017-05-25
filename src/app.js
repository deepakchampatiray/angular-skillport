"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("usersController", [
      function(){
        this.num = 123456.789;
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
                      }
                    ]
      }
    ]);
})();
