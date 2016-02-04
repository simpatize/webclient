describe('Place Services', function() {
	beforeEach(module('places.services'));

	var service, mockBackend;

	beforeEach(inject(function($httpBackend, Place) {
		mockBackend = $httpBackend;
		mockBackend.expectGET('/places')
			.respond([{place_id: 100}]);

		service = Place;
	}));

	it('should make a http request to /places', function(){
		var places = service.query(); 

		mockBackend.flush();

		expect(places.length).toBe(1);	
		expect(places[0].place_id).toBe(100);	

	});

});