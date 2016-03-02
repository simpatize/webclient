'use strict';

angular
	.module('webClient.places')
	.factory('PlacesService', PlacesService);

function PlacesService($resource, envService) {
	console.log(envService.get());
	console.log(envService.read('baseBackendUrl') + '/places');
	return $resource(
		envService.read('baseBackendUrl') + '/places',
		{},
		{query: {method:'GET', isArray:true}}
	);
}
