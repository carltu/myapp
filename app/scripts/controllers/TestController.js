'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('TestCtrl', function ($scope) {

  var init = function() {

    $scope.columns = [
      {"id": 1, "name": "column one"},
      {"id": 2, "name": "column two"},
      {"id": 3, "name": "column three"},
      {"id": 4, "name": "column four"},
      {"id": 5, "name": "column five"},
      {"id": 6, "name": "column six"},
      {"id": 7, "name": "column last"}

    ];

    var car = 'test';
    var khris = 'another'
    var git = 'test git'


  }

  init();

  });
