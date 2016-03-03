module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-environment/dist/angular-environment.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-ui-select/dist/select.min.js',
      'app/bower_components/angular-sanitize/angular-sanitize.min.js',
      'app/config/config.module.js',
      'app/places/places.module.js',
      'app/places/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
