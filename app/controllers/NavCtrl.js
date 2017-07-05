"use strict";
// console.log('NavCtrl loaded');

app.controller('NavCtrl', function($scope, AuthFactory, $window) {

	$scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged(function (
		user) {
		if (user) {
			$scope.isLoggedIn = true;
			console.log("currentUser loggin in", user, $scope.isLoggedIn);
		}else {
			$scope.isLoggedIn = false;
			console.log("currentUser loggin in", $scope.isLoggedIn);
		}
		$scope.$apply();
	});
});