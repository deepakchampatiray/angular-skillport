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

          function getUserNames(userId){
            var deferred = $q.defer();

            setTimeout(function(){
              if(vm.travelHistory[userId]) {
                deferred.resolve(
                  {'firstName' : vm.travelHistory[userId].firstName,
                    'lastName' : vm.travelHistory[userId].lastName
                  });
              }
              else {
                deferred.reject("User Not found");
              }
            },2000);

            return deferred.promise;
          }

          function getTravelHistory(userId){
            var deferred = $q.defer();

            setTimeout(function(){
              if(vm.travelHistory[userId] && vm.travelHistory[userId].travelHistory) {
                deferred.resolve(vm.travelHistory[userId].travelHistory);
              }
              else {
                deferred.reject("Travel History Not found");
              }
            },4000);

            return deferred.promise;
          }

          vm.userId = null;

          vm.fetchRecord = function(){
            if(vm.userId || vm.userId === 0) {
              vm.message = "Fetching record for " + vm.userId;
              vm.firstName = vm.lastName = vm.history = null;

              /**
                Since the two calls have different timings, there is a delay between the appearance of one result and the other.

              getUserNames(vm.userId)
                .then(function(user) {
                  vm.firstName = user.firstName;
                  vm.lastName = user.lastName;
                  vm.message = "Fetched first and last name for user Id " + vm.userId;
                });

              getTravelHistory(vm.userId)
                .then(function(travelHistory){
                  vm.history = travelHistory;
                });
              */
              /*
                To Display result only after all the calls have finished
              */

              $q.all([getUserNames(vm.userId), getTravelHistory(vm.userId)])
               .then(function(resultArr){
                 vm.firstName = resultArr[0].firstName;
                 vm.lastName = resultArr[0].lastName;
                 vm.history = resultArr[1];
                 vm.message = "Fetched records for user Id " + vm.userId;
               })
               .catch(function(message){
                 vm.message = message;
               })
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
