"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp").factory("TimeFactory", ['$http', function($http){
      var model = {};
      model.currentTime = null;

      model.getTime = function() {
        $http.get('http://date.jsontest.com/')
            .then(function(resp) {
                    this.currentTime = resp.data.milliseconds_since_epoch;
                    console.log(this, resp);
                  }.bind(model),
                  function(data) {
                    console.error(data);
                  }
                )
      }

      return model;
    }]);

    angular.module("myApp")
    .controller("timeController", ['TimeFactory',
      function(timeFactory){
          var vm = this;
          vm.timeFactory = timeFactory;
      }
    ])
})();
