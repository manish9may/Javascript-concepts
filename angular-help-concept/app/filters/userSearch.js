angular.module('baseApp')
.filter('userSearch',['$filter',function($filter){
	return function(input,filterValue,col,selectedEditProcess){
		var result = [];
		if(typeof filterValue !== 'undefined' && filterValue !== null && filterValue !== ''){

			for(var index = 0 ; index < input.length; index++){
				var data = input[index],isMatch = false;
				for(var ind  in data){
					if(data.hasOwnProperty(ind) && ind != 'id'){
						var match = data[ind].toString().match(new RegExp(filterValue, 'gi'));
						if(match && !isMatch){
							isMatch = true;
						}
					}
				}
				if(isMatch){
						result.push(input[index]);
				}
			}
			return result;	
		}
		
		return input;
	}
}])