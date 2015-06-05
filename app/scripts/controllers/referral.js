'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # ReferralController
 * Referral Controller of the angularApp
 */
angular.module('angularApp')
  .controller('ReferralController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.greeting = 'Hola';
  });
