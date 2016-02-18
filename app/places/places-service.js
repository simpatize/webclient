'use strict';

angular
	.module('webClient.places')
	.factory('PlacesService', PlacesService);

function PlacesService($resource) {
	return $resource(
		'/places',
		{},
		{query: {method:'GET', isArray:true}}
	);
}