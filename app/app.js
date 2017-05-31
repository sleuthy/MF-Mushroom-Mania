"use strict";

var app = angular.module("MushroomApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/poison', {
		templateUrl: 'partials/poison.html',
		controller: "MushroomCtrl"
	}).
	when('/nonpoison', {
		templateUrl: 'partials/nonpoison.html',
		controller: "MushroomCtrl"
	}).
	otherwise('/');
});