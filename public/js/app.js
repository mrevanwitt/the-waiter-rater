angular.module('waiterRater', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('map', {
        url:'/',
        templateUrl: '.././views/map.html',
        controller: 'mainCtrl'
      })
      .state('waiterRater', {
        url:'/waiterRater/:id',
        templateUrl: '.././views/waiterRater.html',
        controller: 'waiterRaterCtrl',
        controllerAs: 'vm'
      })
      .state('login', {
        url:'/login',
        templateUrl: '.././views/login.html',
        controller: 'managerCtrl'
      })
      .state('dashboard', {
        url:'/dashboard/:id',
        templateUrl: '.././views/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .state('thankYou', {
        url:'/thankYou/:id',
        templateUrl: '.././views/thankYou.html',
        controller: 'thankYouCtrl',
      })
      .state('addServer', {
        url:'/addserver/:id',
        templateUrl:'.././views/addServer.html',
        controller: 'addServerCtrl'
      })
      .state('waiter', {
        url:'/waiter/:id',
        templateUrl: '.././views/waiter.html',
        controller: 'waiterCtrl'
      })

      $urlRouterProvider
        .otherwise('/')
  })
