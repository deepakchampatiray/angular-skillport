"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
        .controller("myController", 
                    [
                        "$scope"
                        ,function($scope) {
                            console.log("Hello Angular !!");
                        }
                    ]
        );
})();