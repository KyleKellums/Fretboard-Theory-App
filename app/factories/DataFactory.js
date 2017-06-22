"use strict";
// console.log("DataFactory loaded");

app.factory("DataFactory", ($q, $http, FBCreds) => {

	const getChords = () => {
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/.json`)
			//for playing with the json file in sublime
			// $http.get("./data/proto.json")
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
