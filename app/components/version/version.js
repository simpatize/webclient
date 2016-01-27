'use strict';

angular.module('webClient.version', [
  'webClient.version.interpolate-filter',
  'webClient.version.version-directive'
])

.value('version', '0.1');
