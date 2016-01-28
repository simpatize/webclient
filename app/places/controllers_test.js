'use strict';

describe('places.controllers module', function() {

  beforeEach(module('places.controllers'));
  beforeEach(module('places.services'));


  describe('places controller', function(){

    var ctrl, $httpBackend;

  	beforeEach(inject(function($controller, Place) {
  		Place.query = function() {return [{name: 'Iguatu', id: 'place_1'}]};
  		ctrl = $controller('PlacesListController', Place);
    }));

    it('should have a empty places list', function() {
		  expect(ctrl.places.length).toBe(0);
    });

    it('should set places when search is called', function() {
    	ctrl.search_text = 'restaurantes';
    	ctrl.search();

  		var expected_places = [{name: 'Iguatu', id: 'place_1'}]

  		expect(angular.equals(ctrl.places, expected_places)).toBe(true);
    });
  });
});