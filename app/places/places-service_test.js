'use strict';

describe('PlacesService', function() {
	
	beforeEach(module('webClient.places'));

	var service, mockBackend;

	beforeEach(inject(function($httpBackend, PlacesService) {
		mockBackend = $httpBackend;
		mockBackend.expectGET('/places?type=Restaurante')
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