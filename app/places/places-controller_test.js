'use strict';

describe('PlacesController', function(){

  beforeEach(module('webClient.places'));

  var placesCtrl, $httpBackend;

	beforeEach(inject(function($controller, PlacesService) {
		PlacesService.query = function() {return [{name: 'Iguatu', id: 'place_1'}]};
		placesCtrl = $controller('PlacesController', PlacesService);
  }));

  it('should have a empty places list', function() {
	  expect(placesCtrl.places.length).toBe(0);
  });

  it('should set places when search is called', function() {
  	placesCtrl.search_text = 'restaurantes';
  	placesCtrl.search();

		var expected_places = [{name: 'Iguatu', id: 'place_1'}]

		expect(angular.equals(placesCtrl.places, expected_places)).toBe(true);
  });
});