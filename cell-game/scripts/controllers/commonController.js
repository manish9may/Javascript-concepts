angular.module("cellGameApp")
  .controller("commonController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state','$interval',
      function($http, $stateParams, $scope, $rootScope, $location, $state, $interval){
    var vm = this;
    vm.Math = Math;
    vm.page = {
    	data : {}
    };
  vm.getRowStyle = function($index){
    var style = {};
    style['width'] = vm.page.data.gridSize * 75 + 1 + 'px'
    return style;
  }
  vm.getCellStyle = function($index, $parent) {
   	var style = {};
    var current = $parent * vm.page.data.gridSize + $index;
    for(var i = 0; i < vm.page.data.uncolored; i++) {
      if(vm.page.data.randColoredIndexList[i] == current) {
        style['background-color'] = '#122e3c';
        return style;
      }
    }
   	return style;
  };
  var getRandom = function(n){
    var len = vm.page.data.gridSize * vm.page.data.gridSize;
    var posIndexArray = [],result = [];
    for(var  i = 0;i < len;i++){
      posIndexArray.push(i)
    }
   while(result.length < n) {
      var rand = Math.floor(Math.random() * (posIndexArray.length - 1));
      result.push(posIndexArray[rand]);
      posIndexArray.splice(rand, 1);
    }
    return result;
  }
  /* To start the interval */
  var stop;
  vm.startCountDown = function(){
    if(vm.page.data.chances === 0){
      return false;
    }
    vm.page.data.chances--;
    stop = $interval(function(){
      vm.page.data.timeSpend -= 100;
    },100,vm.page.data.timeSpend/100)

  }
  /* To stop the runnign interval. */
  vm.stopCountDown = function() {
    if(angular.isDefined(stop)) {
      $interval.cancel(stop);
      stop = undefined;
    }
  };
  /* Lets you know if interval is running */
  vm.isCounting = function() {
    if(stop) return true;
    return false;
  };

  /* Try again if failed in first or second attempt */
  vm.rechance = function(){
    if(vm.page.data.chances == 0) return false;
    if(vm.page.data.randColoredIndexList.length == 0) return false;
    vm.page.data.failure = false;
    vm.page.data.timeSpend = vm.page.data.claim * 1000;
    vm.page.data.randColoredIndexList = getRandom(vm.page.data.uncolored);
  }
  vm.discard = function($index, $parent) {
    var current = $parent * vm.page.data.gridSize + $index;
    for(var idx in vm.page.data.randColoredIndexList) {
      if(vm.page.data.randColoredIndexList[idx] == current) {
        if(vm.page.data.randColoredIndexList.length === vm.page.data.uncolored && !vm.isCounting()){
            vm.startCountDown();
        }
        vm.page.data.randColoredIndexList.splice(idx,1);
        if(vm.page.data.randColoredIndexList.length === 0){
            vm.stopCountDown();
            vm.page.data.success = true;
        }
      }
    }
  }
  vm.validate = function() {
    if(vm.page.data.gridSize < 2) vm.page.data.gridSize = 2;
    if(vm.page.data.uncolored > Math.pow(vm.page.data.gridSize, 2) || vm.page.data.uncolored <= 1) {
      vm.page.data.uncolored = vm.page.data.gridSize;
    }
    // Default time setting. (optional: you can carry on with users previous setting.)
    vm.page.data.claim = vm.page.data.uncolored - 1;
  };

  $scope.$watchGroup([function(){
    return vm.page.data.gridSize;
   },
   function(){
    return vm.page.data.uncolored;
  }],function(){
    vm.page.data.chances = 3;
    vm.validate();
    vm.stopCountDown();
    vm.page.data.randColoredIndexList = getRandom(vm.page.data.uncolored);
  })
  $scope.$watch(function(){
    return vm.page.data.timeSpend 
  },function(newValue) {
    if(vm.page.data.timeSpend <= 0) vm.stopCountDown();
    if(vm.page.data.timeSpend == 0 && vm.page.data.randColoredIndexList.length != 0) {
      if(vm.page.data.chances > 0) {
        vm.page.data.timeSpend = vm.page.data.claim * 1000;
        vm.rechance();
        vm.startCountDown();
        return true;
      }
      vm.page.data.failure = true;
    }
  });
  $scope.$watch(function(){
    return vm.page.data.claim 
  },function(newValue) {
    if(vm.isCounting()) return false;
      vm.page.data.timeSpend = vm.page.data.claim * 1000;
  });
  vm.reset = function(){
    vm.page.data.gridSize = 4;
    vm.page.data.uncolored = 5;
    vm.page.data.chances = 3;
    vm.page.data.claim = vm.page.data.uncolored - 1;
    vm.page.data.timeSpend = vm.page.data.claim * 1000;
    vm.page.data.randColoredIndexList = getRandom(vm.page.data.uncolored);
  }
  vm.reset();
 }]);