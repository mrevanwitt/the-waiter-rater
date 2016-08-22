angular.module('waiterRater', ['ui.router'])
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
      .state('manager', {
        url:'/manager',
        templateUrl: '.././views/manager.html',
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
  })
