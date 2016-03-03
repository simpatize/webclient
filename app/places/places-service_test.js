'use strict';

describe('PlacesService', function() {

	beforeEach(module('webClient.places'));

	var service, mockBackend;

  // Keep this portion before the call to beforeEach(inject(...)) below!!
	// See http://stackoverflow.com/a/29114169
  beforeEach(module({
		'envService': {
			read : function(varName) {
				return 'http://myTestBaseUrl';
			}
		}
	}));

	beforeEach(inject(function($httpBackend, PlacesService) {
		mockBackend = $httpBackend;
		mockBackend.expectGET('http://myTestBaseUrl/places?type=Restaurante')
			.respond([{name: 'Buongustaio'}]);

		service = PlacesService;
	}));

	it('should make a http request to /places with the type of place', function() {
		var places = service.query({type: 'Restaurante'});

		mockBackend.flush();

		expect(places.length).toBe(1);
		expect(places[0].name).toBe('Buongustaio');
	});
});
