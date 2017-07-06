angular.module('baseApp')
.controller('homeController',['$scope','$rootScope','$location','$filter',function($scope,$rootScope,$location,$filter){
	var vm = {};
	this.vm = vm;
	vm.options = {};
	vm.init = function(){
		vm.options = {
			columns : columns,
			records : fetchData(10),
			pageSize : 4
		};
	}
	var columns = [
		{name: 'Column 1', binding: 'column1',bSorting : true,bFiltering : true,mRender : function(content,rowIndex,rowData){
			return $filter('currency')(content)
		}},
		{name: 'Column 2', binding: 'column2',bSorting : true,bFiltering : true},
		{name: 'Column 3', binding: 'column3',bSorting : true,bFiltering : true},
		{name: 'Column 4', binding: 'column4',bSorting : true,bFiltering : true},
		{name: 'Column 5', binding: 'column5',bSorting : true,bFiltering : true},
		{name: 'Column 6', binding: 'column6',bSorting : true,bFiltering : true,
		mRender : function(content,rowIndex,rowData){
			return $filter('date')(content,'MM/dd/yyyy')
		}}
	]
	var fetchData = function(count){
		records = [];
		for (var i = 0; i < count; i++) {
			var money = (Math.random() * 1000).toFixed(2);
			var date = new Date();
            date.setDate(date.getDate() + i);
			records.push({
                        id: Math.floor(Math.random() * (count * 5 + 1)), 
                        column1: money,
                        column2: "Column2_" + i, 
                        column3: "Column3_" + i, 
                        column4: "Column4_" + i, 
                        column5: "Column5_" + i,
          				column6 : date
                    })
		}
		return records;
	}
}])