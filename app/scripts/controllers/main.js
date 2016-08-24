'use strict';

/**
 * @ngdoc function
 * @name smapleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smapleAppApp
 */
angular.module('smapleAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
