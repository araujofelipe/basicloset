'use strict';
var basiCloset = angular.module("basiCloset",['ngRoute']);
basiCloset.controller('MainController', function($scope){
	$scope.ola = "Maromba"
});

basiCloset.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: '/partials/about.html',
        controller: 'MainController'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
