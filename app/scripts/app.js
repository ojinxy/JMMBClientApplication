'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/loyalty/points', {
        templateUrl: 'views/loyalty/loyalty_points.html',
        controller: 'LoyaltyPointsController'
      })
      .when('/loyalty/earnedPoints', {
        templateUrl: 'views/loyalty/loyalty_points_earned.html',
        controller: 'LoyaltyPointsEarnedController'
      })
      .when('/loyalty/redeemedPoints', {
        templateUrl: 'views/loyalty/loyalty_points_redeemed.html',
        controller: 'LoyaltyPointsRedeemedController'
      })
      .when('/referral', {
        templateUrl: 'views/referral.html',
        controller: 'ReferralController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
