/**
* myApp Module
*
* Elections Widget Module
*/
angular.module('myApp', ['angular-flexslider'])
	.controller('myController', ['$scope','$http', function($scope, $http){
		$http.get('js/results-2011.js')
			.success(function(data){
					$scope.data = data;
					console.log($scope.data);
			})
			.error(function(data) {
			  $scope.data = data || "Request failed";
			});
	}]);