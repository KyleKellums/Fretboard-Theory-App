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

	const getUserChords = () => {
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/userChords.json`)
			.then( (userChordsObj) => {
				let userChordList = userChordsObj.data;
				console.log("userChordList", userChordList);
				resolve(userChordList);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	const addChord = (savedChord) => {
			let obj = JSON.stringify(savedChord);
		return $q( (resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/userChords.json`, obj)
			.then( (ChordID)  => {
				resolve(ChordID);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	const deleteChord = () => {
		return $q( (resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/userChords/${ChordID}.json`)
			.then( (response) => {
				resolve(response);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	return {getChords, addChord, deleteChord, getUserChords};

});
