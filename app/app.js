"use strict";

let app = angular.module('FretTheory', ['ngRoute', 'ui.bootstrap']);

app.config( ($routeProvider) => {
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	});
});
