'use strict';

angular
	.module('webClient.places', ['ngRoute', 'ngResource'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/places', {
	    templateUrl: 'places/places.html',
	    controller: 'PlacesController as placesCtrl'
		})
		.otherwise({redirectTo: '/places'});
};