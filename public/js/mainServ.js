angular.module('waiterRater')
  .service('mainServ', function($http) {
    this.getRestaurants = function() {
      return $http({
        method: 'GET',
        url: '/restaurant'
      }).then(function(response) {
        return response;
      })
    }

    this.getServers = function(id) {
      return $http({
        method: 'GET',
        url: '/server/restaurant/' + id.toString()
      }).then(function(response) {
        console.log(response)
        return response;
      })
    }

    this.getManagers = function() {
      return $http({
        method: 'GET',
        url: '/manager'
      }).then(function(response) {
        return response;
      })
    }
  })
