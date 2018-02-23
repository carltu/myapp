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

    var init = function () {

      $scope.columns = [
        { "id": 2, "name": "column two" },
        { "id": 3, "name": "column three" },
        { "id": 4, "name": "column four" },
        { "id": 5, "name": "column five" },
        { "id": 6, "name": "column six" },
        { "id": 7, "name": "column last" }

      ];

      init();
      var car = 'test';
      car = 'toyota';
      var test1 = 'hello';
    }

  });
