'use strict';
/**
 * @ngdoc function
 * @name angularApp.controller:LoyaltyController
 * @description
 * # LoyaltyController
 * Loyalty Controller of the angularApp
 */
var loyaltyModule = angular.module('angularApp');
loyaltyModule.controller('LoyaltyPointsEarnedController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.title = 'Points Earned';
});
