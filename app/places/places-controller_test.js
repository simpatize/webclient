'use strict';

describe('PlacesController', function() {

  beforeEach(module('webClient.places'));

  var placesCtrl, placesService;

	beforeEach(inject(function($controller, PlacesService) {
    placesService = PlacesService;

		placesCtrl = $controller('PlacesController', PlacesService);
  }));

  it('should have a empty places list', function() {
	  expect(placesCtrl.places.length).toBe(0);
  });

  it('should call PlacesService with selected type of place as parameter', function() {
  	placesCtrl.selectedType = {name:'Restaurante'};

    spyOn(placesService, 'query');

  	placesCtrl.search();

		expect(placesService.query).toHaveBeenCalledWith({type:'Restaurante'});
  });
});