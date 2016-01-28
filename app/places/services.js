'use strict';

angular.module('places.services', ['ngResource'])

.factory('Place', ['$resource',
  function($resource){
    return $resource('places/', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);