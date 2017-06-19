"use strict";

let app = angular.module('FretTheory', ['ngRoute', 'ui.bootstrap']);

app.config( ($routeProvider) => {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.otherwise('/');
});
