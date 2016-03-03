'use strict';

angular
  .module('webClient.config', ['environment'])
  .config(function(envServiceProvider) {
     envServiceProvider.config({
       domains: {
         development: ['192.168.33.10'],
         staging: ['simpatize-webclient.herokuapp.com']
       },
       vars: {
         development: {
           baseBackendUrl: 'http://192.168.33.10:8000',
         },
         staging: {
           baseBackendUrl: 'https://simpatize-webservice-staging.herokuapp.com',
         }
       }
     });

   	envServiceProvider.check();
 });
