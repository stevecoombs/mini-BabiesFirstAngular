var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

	$scope.friends = ['TJ', 'Trent', 'Craig', 'Eric', 'Devin'];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	}
})