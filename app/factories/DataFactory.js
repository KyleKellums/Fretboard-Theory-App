"use strict";
// console.log("DataFactory loaded");

app.factory("DataFactory", ($q, $http, FBCreds) => {



	const getChords = () => {
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/.json`)
			.then( (chordsObj) => {
				let chordList = chordsObj.data;
				resolve(chordList);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	const getUserChords = () => {
		let Chords = [];
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/userChords.json`)
			.then( (userChordsObj) => {
				let userChordList = userChordsObj.data;
				Object.keys(userChordList).forEach( (key) => {
				userChordList[key].ChordID = key;
				Chords.push(userChordList[key]);
			});
				resolve(Chords);
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

	const deleteChord = (ChordID) => {
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
