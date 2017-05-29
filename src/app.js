"use strict";

(function() {
    angular.module("myApp", ['ngMaterial']);

    angular.module("myApp")
    .controller("usersController", [
      function(){
          this.personList = [
            {
              "firstName": "Ford",
              "lastName": "Haley",
              "birthDate": 1137754966853,
              "city": "Yorklyn",
              "state": "Idaho"
            },
            {
              "firstName": "Lolita",
              "lastName": "Hale",
              "birthDate": 1463021840142,
              "city": "Jenkinsville",
              "state": "South Carolina"
            },
            {
              "firstName": "Pickett",
              "lastName": "Tate",
              "birthDate": 1380238908181,
              "city": "Monument",
              "state": "Delaware"
            },
            {
              "firstName": "Maura",
              "lastName": "Shaw",
              "birthDate": 686338957555,
              "city": "Moquino",
              "state": "North Carolina"
            },
            {
              "firstName": "Wade",
              "lastName": "Bryant",
              "birthDate": 139320829072,
              "city": "Golconda",
              "state": "New Jersey"
            },
            {
              "firstName": "Oneal",
              "lastName": "Stokes",
              "birthDate": 1474510858044,
              "city": "Reinerton",
              "state": "Hawaii"
            },
            {
              "firstName": "May",
              "lastName": "Castillo",
              "birthDate": 659010296370,
              "city": "Elizaville",
              "state": "Utah"
            },
            {
              "firstName": "Denise",
              "lastName": "Talley",
              "birthDate": 233771713365,
              "city": "Sexton",
              "state": "Oklahoma"
            },
            {
              "firstName": "Stacey",
              "lastName": "Duffy",
              "birthDate": 1167000153040,
              "city": "Herlong",
              "state": "Rhode Island"
            },
            {
              "firstName": "Martinez",
              "lastName": "Hooper",
              "birthDate": 640318560621,
              "city": "Joppa",
              "state": "Washington"
            },
            {
              "firstName": "Cobb",
              "lastName": "Peck",
              "birthDate": 1070834052132,
              "city": "Neibert",
              "state": "Maine"
            },
            {
              "firstName": "Oconnor",
              "lastName": "Sherman",
              "birthDate": 1456736385554,
              "city": "Fairview",
              "state": "Kentucky"
            },
            {
              "firstName": "Dorothy",
              "lastName": "Becker",
              "birthDate": 71879955331,
              "city": "Wells",
              "state": "Puerto Rico"
            },
            {
              "firstName": "Marian",
              "lastName": "Greer",
              "birthDate": 1456937368212,
              "city": "Tivoli",
              "state": "Maryland"
            },
            {
              "firstName": "Nona",
              "lastName": "Harrell",
              "birthDate": 1382470909929,
              "city": "Dahlen",
              "state": "West Virginia"
            },
            {
              "firstName": "Natasha",
              "lastName": "Burnett",
              "birthDate": 760552560989,
              "city": "Cascades",
              "state": "Tennessee"
            },
            {
              "firstName": "Francesca",
              "lastName": "Flynn",
              "birthDate": 686051731421,
              "city": "Buxton",
              "state": "New Mexico"
            },
            {
              "firstName": "Butler",
              "lastName": "Gonzales",
              "birthDate": 669931818015,
              "city": "Balm",
              "state": "Montana"
            },
            {
              "firstName": "Concetta",
              "lastName": "Mathews",
              "birthDate": 293234992734,
              "city": "Bennett",
              "state": "Connecticut"
            },
            {
              "firstName": "Jarvis",
              "lastName": "Garrison",
              "birthDate": 1033501236893,
              "city": "Valmy",
              "state": "Louisiana"
            }
          ]

          this.selectedPerson = {};          
      }
    ])
    })();
