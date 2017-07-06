angular.module('baseApp')
.directive('customDataTable',['$parse','$compile',function($parse,$compile){
	var directive = {};
	directive.restrict = 'E';
	directive.scope = {
		options : '='
	};
	directive.controllerAs = 'customDataCtrl';
	directive.controller = ['$scope','$attrs','$sce','$filter','$compile',function($scope, $attrs,$sce,$filter,$compile){
		$scope.config = {};
		$scope.config.data = {};
		var self = this;
		$scope.config.data.currentPage = 0;
		var init = function(){
			$scope.config.data.ItemsByPage = [];
			var pageSize = $scope.options.pageSize, index = 0,total = $scope.options.records.length;
			while(total > 1){
				var itemsByPage = [];
				for(var i = index;i < index + pageSize && i < $scope.options.records.length;i++){
					itemsByPage.push(angular.copy($scope.options.records[i]));
				}
				total = Math.floor(total - pageSize);
				index += pageSize;
				$scope.config.data.ItemsByPage.push(itemsByPage);
			}
		}
		init();
		$scope.getBindResult = function(content,mRenderFn,rowIndex,rowData){
			var finalContent;
			if(!mRenderFn){
				finalContent = content;
			}else if(mRenderFn){
				finalContent = (mRenderFn.apply(this,[content,rowIndex,rowData]));
			}
			return $sce.trustAsHtml(finalContent)
		}
		$scope.sortHeaderClicked = function(col,$index){
			var records = angular.copy($scope.config.data.ItemsByPage[$scope.config.data.currentPage]);
			$scope.config.data.selectedSortedIndex = $index;
			$scope.config.data.selectedSortedDir = col.asc ? 'asc' : 'desc';
			if(col.bSorting && !col.asc){
				$scope.config.data.ItemsByPage[$scope.config.data.currentPage] = records.sort(function(a,b){return a[col.binding] - b[col.binding]});
				col.asc = true;	
			}else if(col.bSorting && col.asc){
				$scope.config.data.ItemsByPage[$scope.config.data.currentPage] = records.sort(function(a,b){return b[col.binding] - a[col.binding]});
				col.asc = false;
			}
			
		}
		$scope.edit = function(rowIndex,row){
			
			$scope.config.data.selectedEditProcess = true;
			row.isEdit = true;
		}
		$scope.cancel = function(rowIndex,row){
			$scope.config.data.selectedEditProcess = false;
			row.isEdit = false;
		}
		$scope.success = function(rowIndex,row){
			$scope.config.data.selectedEditProcess = false;	
			row.isEdit = false;
			$scope.config.data.selectedRow = null;
			$scope.config.data.ItemsByPage[$scope.config.data.currentPage][rowIndex] = angular.copy($scope.config.data.editInfo[rowIndex]);
		}
	  $scope.range = function (total) {
        var ret = [],index = 0;
        while(total > 0){
        	ret.push(index);
        	index = index + 1;
        	total = Math.floor(total - 1);
        }
        return ret;
    };
    $scope.firstPage = function () {
        $scope.config.data.currentPage = 0;
    };
     $scope.setPage = function () {
        $scope.config.data.currentPage = this.n;
    };
    $scope.lastPage = function () {
        $scope.config.data.currentPage = $scope.config.data.ItemsByPage.length - 1;
    };
	}];
	directive.templateUrl = '/app/directives/partialViews/custom-data-table.html'
	directive.compile =  function(element,attrs){
		return {
			post : function($scope,$element,$attrs){
			}
		}
	}
	return directive;
}]);