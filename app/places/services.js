'use strict';

angular.module('places.Services', ['ngResource'])

.factory('PlacesList', ['$resource',
  function($resource){
    return $resource('places/', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);