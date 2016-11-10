angular.module("Portal")
  .controller("sceServiceController", ['$http', '$stateParams', '$scope', '$rootScope','$location', '$state','$sce',
      function($http, $stateParams, $scope, $rootScope, $location, $state,$sce){
      	var vm = this;
      	vm.page = {};
      	vm.page.data = {};
      	vm.page.data.userComments = [
			  { "name": "Alice",
			    "htmlComment":
			        "<span onmouseover='this.textContent=\"PWN3D!\"'>Is <i>anyone</i> reading this?</span>"
			  },
			  { "name": "Bob",
			    "htmlComment": "<i>Yes!</i>  Am I the only other one?"
			  }];

      	vm.page.data.explicitlyTrustedHtml = $sce.trustAsHtml(
          '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
          'sanitization.&quot;" onmouseout = "this.textContent = &quot;Hover over this text.&quot;">Hover over this text.</span>');
      
}]);