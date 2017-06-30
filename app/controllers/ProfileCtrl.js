"use strict";
console.log("ProfileCtrl here");

app.controller('ProfileCtrl', function($scope, DataFactory, AuthFactory, $location, $routeParams){

	let user = AuthFactory.getUser();
	console.log("user from profile ctrl", user);

	$scope.userChords = {
		uid: user,
		//FB board ID here
	};
});
