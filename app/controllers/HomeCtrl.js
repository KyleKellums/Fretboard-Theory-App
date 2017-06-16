"use strict";
console.log("HomeCtrl loaded");

app.controller('HomeCtrl', ($scope, DataFactory) => {

	let getChords = function() {
		DataFactory.getChords()
		.then( (chordList) => {
			$scope.chords = chordList;
			console.log("$scope.chords", $scope.chords);
		});
	};

getChords();

});
