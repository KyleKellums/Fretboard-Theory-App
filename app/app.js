"use strict";

let app = angular.module('FretTheory', ['ngRoute', 'ui.bootstrap']);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then( (userExists) => {
		if (userExists){
			console.log("Authenticated, go");
			resolve();
		}else {
			console.log("Not Authenticated");
			reject();
		}
	});
});

app.config( ($routeProvider) => {
	$routeProvider.
	when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl',
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl',
		resolve: {isAuth}
	})
	.when('/profile', {
		templateUrl: 'partials/profile.html',
		controller: 'ProfileCtrl',
		resolve: {isAuth}
	})
	.otherwise('/login');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});
