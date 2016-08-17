angular.module('waiterRater', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
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
  })
