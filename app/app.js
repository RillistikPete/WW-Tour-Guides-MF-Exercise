"use strict";

var app = angular.module("PeteTourGuide", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "partials/guide-list.html",
		controller: 'GuideController'
	})
	.otherwise('/');
});


