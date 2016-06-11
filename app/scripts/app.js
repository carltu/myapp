'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular
  .module('myappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.router',
    'ngCordova',
    'as.sortable',
    'ui.bootstrap',
    'ngSanitize', 
    'ui.select'
  ])
  .config(function ($stateProvider, $routeProvider) {
    //$urlRouterProvider.otherwise('/home');
 
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }) 
      .when('/kanban', {
        templateUrl: 'views/kanban.html', 
        controller: 'KanbanController'
      })
      .when('/test', {
        templateUrl: 'views/test.html', 
        controller: 'TestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
/*
  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      }) 

       
      .state('kanban', {
        abstract: true,
        url: '/kanban',
        template: '<ui-view></ui-view>',
        controller: 'KanbanController'
      })    

      .state('kabandetail', {
        parent: 'kanban',
        url: '/list',
        templateUrl: 'views/kanban.html'
      }) 

*/

  });
