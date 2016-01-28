'use strict';

// Declare app level module which depends on views, and components
angular.module('webClient', [
  'ngRoute',
  'places.controllers',
  'places.services',
  'webClient.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/places'});
}]);
