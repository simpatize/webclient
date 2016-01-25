'use strict';

angular.module('myApp.places', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'PlacesCtrl as ctrl'
  });
}])

.controller('PlacesCtrl', [function() {
	var self = this;
	self.search_string = "";

	self.search = function (){
		console.log('fui la na API do google e pesquisei por: ' + self.search_string);
		// places = API.search()
	}

}]);