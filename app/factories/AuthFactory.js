"use strict";

app.factory("AuthFactory", function(){

	let currentUser = null;

	let logout = function(){
		console.log("logout runs");
        return firebase.auth().signOut();
	};

	let isAuthenticated = function (){
		console.log("AuthFactory: isAuthenticated");
		return new Promise ( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				if (user){
					console.log('isAuthenticated user', user);
					currentUser = user.uid;
					console.log("user", user.uid);
					resolve(true);
				}else {
					resolve(false);
				}
			});
		});
	};

	let getUser = function() {
		console.log("currentUser", currentUser);
		return currentUser;
	};

	let provider = new firebase.auth.GoogleAuthProvider();

	let authWithProvider = function() {
		return firebase.auth().signInWithPopup(provider);
	};

	return {logout, isAuthenticated, getUser, authWithProvider};

});








