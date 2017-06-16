"use strict";
console.log("DataFactory loaded");

app.factory("DataFactory", ($q, $http) => {

	const getChords = () => {
		return $q( (resolve, reject) => {
			$http.get("https://fretboard-theory.firebaseio.com/")
			.then( (chordsObj) => {
				let chordList = chordsObj.data;
				console.log("chordList", chordList.proto);
				resolve(chordList.proto); //this might need to change when calling FB
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	return {getChords};

});
