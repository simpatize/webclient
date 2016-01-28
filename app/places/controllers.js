'use strict';

angular.module('places.Controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'PlacesController as ctrl'
  });
}])

.controller('PlacesController', ['PlacesList', function(PlacesList) {
	var self = this;
	self.search_string = "";

	self.search = function (){
		console.log('fui la na API do google e pesquisei por: ' + self.search_string);
		// places = API.search()
	}
	var json = [{"placeName": "Iguatu"}, {"placeName": "Natal"}];
	//self.placesList = PlacesList.query();

}]);