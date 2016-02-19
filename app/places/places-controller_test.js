'use strict';

describe('PlacesController', function() {

  beforeEach(module('webClient.places'));

  var placesCtrl, $httpBackend;

	beforeEach(inject(function($controller, PlacesService) {
		PlacesService.query = function() {
      return [{name: 'Buongustaio', id: 'place_1'}];
    };

		placesCtrl = $controller('PlacesController', PlacesService);
  }));

  it('should have a empty places list', function() {
	  expect(placesCtrl.places.length).toBe(0);
  });

  it('should set places when search is called', function() {
  	placesCtrl.selectedType.name = 'Restaurante';
  	placesCtrl.search();

		var expectedPlaces = [{name: 'Buongustaio', id: 'place_1'}];

		expect(angular.equals(placesCtrl.places, expectedPlaces)).toBe(true);
  });
});