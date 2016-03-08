'use strict';

angular
  .module('webClient.config', ['environment'])
  .config(function(envServiceProvider) {
     envServiceProvider.config({
       domains: {
         development: ['localhost'],
         staging: ['simpatize-webclient-staging.herokuapp.com']
       },
       vars: {
         development: {
           baseBackendUrl: 'http://localhost:8080',
         },
         staging: {
           baseBackendUrl: 'https://simpatize-webservice-staging.herokuapp.com',
         }
       }
     });

     envServiceProvider.check();
 });
