'use strict';

angular.module('myApp.places', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'PlacesCtrl'
  });
}])

.controller('PlacesCtrl', [function() {

}]);