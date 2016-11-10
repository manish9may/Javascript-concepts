angular.module("Portal")
  .controller("customfiltersController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state',
      function($http, $stateParams, $scope, $rootScope, $location, $state){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};
      	vm.page.data.example1 = 1;
  		vm.page.data.example2 = 2;
  		vm.page.data.example3 = 3;
  		vm.page.data.example4 = 4;
  		vm.page.data.example5 = 777;
  		vm.page.data.example6 = 1901;
  		vm.page.data.example7 = 0;
  		vm.page.data.example8 = 'Seven';
  		vm.page.data.capitalizeExample1 = 'awesome';
  		vm.page.data.capitalizeExample2 = 'Honorificabilitudinitatibus';
  		vm.page.data.languageExample = [
				    {name: 'C#', type : 'static'},
				    {name: 'PHP', type : 'dynamic'},
				    {name: 'Go', type : 'static'},
				    {name: 'JavaScript', type: 'dynamic'},
				    {name: 'Rust', type: 'static'}
				  ];
		vm.page.data.customCurrencyExample = 29.99;
 }]);

angular.module('Portal')
.filter('ordinal',function(){
	return function(input){
		if(isNaN(input) || input < 1){
			return input
		}else{
			  var lastDigit = input % 10;
			  if(lastDigit === 1) {
		        return input + 'st'
		      } else if(lastDigit === 2) {
		        return input + 'nd'
		      } else if (lastDigit === 3) {
		        return input + 'rd'
		      } else if (lastDigit > 3) {
		        return input + 'th'
		      }
		}

		return;
	}
});

angular.module('Portal')
.filter('capitalize',function(){
	return function(input,arg1){
		if(isNaN(input)){
			var charPos = arg1 - 1 || 0;
			var letter = input.charAt(charPos).toUpperCase();
			var result = [];
			for(var index = 0 ;index < input.length;index++){
				if(index === charPos){
					result.push(letter);
				}else{
					result.push(input.charAt(index));
				}
			}
			return result.join('');  
		}
		return input;
	}
});

angular.module('Portal')
.filter('staticLanguage',['$filter',function($filter){
	return function(input){
		var result = $filter('filter')(input,{
					type : 'static'
		},true) || [];
		return result;
	}
}]);

angular.module('Portal')
.filter('customCurrency',function(){
	return function(input,symbol,place){
		if(isNaN(input)){
			return input;
		}else{
			var symbol = symbol || '$';
			var place  = place === undefined ? true : false;
			if(place){
				return symbol + input;
			}else{
				return input + symbol;
			}
		}
		return;
	}
})