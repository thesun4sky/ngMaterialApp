'use strict';

/**
 * @ngdoc function
 * @name smapleAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the smapleAppApp
 */
angular.module('smapleAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
