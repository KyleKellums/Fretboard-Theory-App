"use strict";
// console.log("DataFactory loaded");

app.factory("DataFactory", ($q, $http, FBCreds) => {

	const getChords = () => {
		// let Chords = [];
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/.json`)
			.then( (chordsObj) => {
				let chordList = chordsObj.data;
				resolve(chordList);
			// Object.keys(chordList).forEach( (key) => {
			// 	chordList[key].ChordID = key;
			// 	Chords.push(chordList[key]);
			// });
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
			$http.delete(`${FBCreds.databaseURL}/userChords/.json`)
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
