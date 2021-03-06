"use strict";
// console.log("ProfileCtrl here");

app.controller('ProfileCtrl', function($scope, DataFactory, AuthFactory, FretboardFactory, $location, $routeParams){

	FretboardFactory.fretboard();

	let user = AuthFactory.getUser();
	console.log("user from profile ctrl", user);

	$scope.userChords = {
		uid: user,
		ChordID: ""
	};

	let getUserChords = function () {
		DataFactory.getUserChords()
		.then( (userChords) => {
		  $scope.userList = userChords;
		  console.log("userChords", userChords);
		});
	};

	$scope.delChord = function (ChordID) {
			console.log("clickd?");
		DataFactory.deleteChord(ChordID)
		.then( (userChords) => {
			getUserChords();
		});
	};

	getUserChords();

});




