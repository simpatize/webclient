'use strict';

// Declare app level module which depends on views, and components
angular.module('webClient', [
  'ngRoute',
  'places.controller',
  'webClient.view2',
  'webClient.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/places'});
}]);
