"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("usersController", ['$q',
      function($q){
          var vm = this;
          vm.travelHistory = [
              {
                "userId": 0,
                "firstName": "Jacobson",
                "lastName": "Rogers",
                "travelHistory": [
                  {
                    "country": "Syria"
                  }
                ]
              },
              {
                "userId": 1,
                "firstName": "Downs",
                "lastName": "Diaz",
                "travelHistory": null
              },
              {
                "userId": 2,
                "firstName": "Malinda",
                "lastName": "Silva",
                "travelHistory": [
                  {
                    "country": "Italy"
                  }
                ]
              },
              {
                "userId": 3,
                "firstName": "Terrell",
                "lastName": "Floyd",
                "travelHistory": [
                  {
                    "country": "Faroe Islands"
                  },
                  {
                    "country": "Kyrgyzstan"
                  },
                  {
                    "country": "Portugal"
                  },
                  {
                    "country": "Korea (North)"
                  }
                ]
              },
              {
                "userId": 4,
                "firstName": "Noelle",
                "lastName": "Beard",
                "travelHistory": [
                  {
                    "country": "Antarctica"
                  },
                  {
                    "country": "Venezuela"
                  }
                ]
              },
              {
                "userId": 5,
                "firstName": "Allison",
                "lastName": "Cruz",
                "travelHistory": [
                  {
                    "country": "Greenland"
                  }
                ]
              },
              {
                "userId": 6,
                "firstName": "Pennington",
                "lastName": "Orr",
                "travelHistory": [
                  {
                    "country": "Georgia"
                  },
                  {
                    "country": "Libya"
                  },
                  {
                    "country": "Paraguay"
                  },
                  {
                    "country": "Singapore"
                  },
                  {
                    "country": "Kenya"
                  }
                ]
              },
              {
                "userId": 7,
                "firstName": "Jefferson",
                "lastName": "Maddox",
                "travelHistory": [
                  {
                    "country": "Saint Kitts and Nevis"
                  },
                  {
                    "country": "United Arab Emirates"
                  },
                  {
                    "country": "Wallis and Futuna Islands"
                  },
                  {
                    "country": "Niue"
                  },
                  {
                    "country": "Aruba"
                  }
                ]
              },
              {
                "userId": 8,
                "firstName": "Suarez",
                "lastName": "Romero",
                "travelHistory": [
                  {
                    "country": "Guadeloupe"
                  }
                ]
              },
              {
                "userId": 9,
                "firstName": "Gloria",
                "lastName": "Mullen",
                "travelHistory": [
                  {
                    "country": "Albania"
                  }
                ]
              }
            ];

          vm.countries = function(ctryArr) {
            //console.log(ctryArr);
            if(ctryArr) {
              var countries = [];
              angular.forEach(ctryArr, function(ctry){
                countries.push(ctry.country);
              });
              return countries.join(", ");
            }
          }
      }
    ])
    .filter("JSONBeautify", function() {
      return function(json) {
        return json;
      }
    })
    })();
