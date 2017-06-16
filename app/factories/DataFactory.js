"use strict";
console.log("DataFactory loaded");

app.factory("DataFactory", ($q, $http) => {

	const getChords = () => {
		return $q( (resolve, reject) => {
			$http.get("https://fretboard-theory.firebaseio.com/.json")
			.then( (chordsObj) => {
				let chordList = chordsObj.data;
				console.log("chordList", chordList);
				resolve(chordList);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	return {getChords};

});
