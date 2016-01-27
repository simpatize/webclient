'use strict';

angular.module('places.controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'PlacesController as ctrl'
  });
}])

.controller('PlacesController', [function() {
	var self = this;
	self.search_string = "";

	self.search = function (){
		console.log('fui la na API do google e pesquisei por: ' + self.search_string);
		// places = API.search()
	}

}]);