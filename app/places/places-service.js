'use strict';

angular
	.module('webClient.places')
	.factory('PlacesService', PlacesService);

function PlacesService($resource, envService) {
	console.log('Hello :)');
	return $resource(
		envService.read('baseBackendUrl') + '/places',
		{},
		{query: {method:'GET', isArray:true}}
	);
}
