'use strict';

angular.module('yeomanappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theatre', {
        template: '<theatre></theatre>'
      });
  });
