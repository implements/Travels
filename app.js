var app = angular.module('TravelApplication', []);

app.controller('TravelController', function($http, $scope) {

    $http.get('locations.json').success(function(response) {
		$scope.locations = response;
	});
});
