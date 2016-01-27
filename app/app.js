'use strict';

// Declare app level module which depends on views, and components
angular.module('webClient', [
  'ngRoute',
  'places.controller',
  'webClient.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/places'});
}]);
