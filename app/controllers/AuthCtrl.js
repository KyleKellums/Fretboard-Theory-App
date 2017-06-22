"use strict";

app.controller("AuthCtrl", ["$scope", "AuthFactory", "$window", "$location",
	function($scope, AuthFactory, $window, $location){
		console.log('AuthCtrl is activated');

		$scope.logout = function(){
			AuthFactory.logout()
			.then(function(data){
				$location.path('/');
				$scope.$apply();
			}, function(error){
				console.log('There was an error logging user out');
			});
		};

		$scope.googleLogIn = function(){
			AuthFactory.getUser();
			AuthFactory.authWithProvider()
			.then(function(data){
				AuthFactory.getUser();
				console.log("data from googleLogIn", data);
				$location.path('/');
				$scope.$apply();
			})
			.catch(function(error){
				console.log(error);
			});
		};
}]);