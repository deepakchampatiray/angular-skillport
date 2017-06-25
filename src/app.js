"use strict";

(function() {
    angular.module("myApp", []);

    angular.module("myApp")
    .controller("cacheController", ['$cacheFactory',
      function($cacheFactory){
          var vm = this;
          vm.cacheInst = $cacheFactory("myAppCache");
          vm.keys = [];
          console.log(vm.cacheInst);

          vm.addItem=function(key, value) {
              if(vm.keys.indexOf(key) === -1)
                vm.keys.push(key);
              vm.cacheInst.put(key, value);
              console.log(vm.cacheInst.info(), vm.keys);
          }

          vm.removeItem=function(key) {
            vm.keys.splice(vm.keys.indexOf(key), 1);
            vm.cacheInst.remove(key);
          }

          vm.getItem=function(key) {
            return vm.cacheInst.get(key);
          }
      }
    ])
})();
