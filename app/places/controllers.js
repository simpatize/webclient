'use strict';

angular.module('places.controllers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'PlacesListController as ctrl'
  });
}])

.controller('PlacesListController', ['Place', function(Place) {
	var self = this;

	self.search_text = "";
	self.places = [];

	self.search = function (){
		self.places = Place.query(self.search_text);
	};

}]);