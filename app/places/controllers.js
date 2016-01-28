'use strict';

angular.module('places.controllers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'PlacesListController as ctrl'
  });
}])

.controller('PlacesListController', [function() {
	var self = this;
	self.search_string = "";

	self.search = function (){
		console.log('fui la na API do google e pesquisei por: ' + self.search_string);
		// places = API.search()
	}
	var json = [{"placeName": "Iguatu"}, {"placeName": "Natal"}];
	//self.placesList = PlacesList.query();

}]);